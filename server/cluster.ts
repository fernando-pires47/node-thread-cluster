import cluster, { Worker } from 'cluster'
import os from 'os';
import { App } from '../app';

export class Cluster{

  public static execute() : void{
    if (cluster.isPrimary) {
        const cores = os.cpus().length;
      
        console.log(`Total CPU: ${cores}`);
        console.log(`Primary process ${process.pid} is running`);
      
        for (let i = 0; i < cores; i++) {
          cluster.fork();
        }
      
        cluster.on('exit', (worker: Worker, code) => {
          console.log(`Worker ${worker.process.pid} exited with code ${code}`);
          console.log('Fork new worker!');
          cluster.fork();
        });
    } else {
      App.execute();
    }
  }
}

Cluster.execute();
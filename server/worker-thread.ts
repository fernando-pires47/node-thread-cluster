import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

export class WorkerThread{

  public static fibonacci(code : any, n: number) : any{
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return this.fibonacci(code, n - 1) + this.fibonacci(code, n - 2)
  };

  public static execute() : void{
    if (isMainThread) {
      console.log('** Main Thread Execution **');
   
      WorkerThread.createThread('w1',10);
      WorkerThread.createThread('w2',20);
      WorkerThread.createThread('w3',30);
      WorkerThread.createThread('w4',40);

    } else {
      console.log(`** Thread ${workerData.name} in execution **`,);
      const result = WorkerThread.fibonacci(workerData.name, workerData.levelExecution);
      parentPort?.postMessage(`Thread: ${workerData.name}, Result: ${result}`);
    }
  }

  private static createThread(name: string, levelExecution: number) : void{
    new Worker(__filename, { workerData: { name: name, levelExecution: levelExecution } })
    .on('message', function (message) {
      console.log("Finish operation with -> " + message);
    });
  }
}

WorkerThread.execute();
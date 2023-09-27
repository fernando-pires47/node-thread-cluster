import express, { Request, Response } from 'express';


export class ServerApi{
    public createServer() : void{
        const app = express();

        app.get('/api/teste', (req: Request, res: Response): void => {
          console.log("Cluster: " + process.pid);
          console.time();
          this.hardWork();
          console.timeEnd();
          res.send('Work Finish!');
        });

        let port = 4000;
      
        app.listen(port, () => {
          console.log(`Server running in port: ${port} and process: ${process.pid}`);
        });
    }

    private hardWork() : void{
        const list = new Array<number>(1e7);
        
        for (let i = 0; i < list.length; i++) {
            list[i] = i * 12;
        }
    }
}
import { ServerApi } from "./server-api";

export class App{
    public static execute(): void {
        new ServerApi().createServer();
    }
}

App.execute();
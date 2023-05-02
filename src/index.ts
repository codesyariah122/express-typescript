import express, {Application, Request, Response} from 'express';

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.routes()
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send(`
                <h1 style="color: #0000cc;">Hello!</h1>
            `)
        })
    }
}

const port: number = 8000
const app = new App().app

app.listen(port, () => console.log(`Server is now running at ${port}`))
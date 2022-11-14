import express from 'express';

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.router();
  }

  private router(): void {
    this.application.get('/', (req: express.Request, res: express.Response) => {
      res.send('hello!');
    })

    this.application.get('/test', (req: express.Request, res: express.Response) => {
      res.send('test');
    })
  }
}

export default App;
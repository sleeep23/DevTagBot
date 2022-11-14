import express from 'express';
import scrape from "./scrape/test-surfit";

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
      async function test() {
        const data = await scrape()
        await console.log(data);
        await res.send(data);
      }
        test();
    })
  }
}

export default App;
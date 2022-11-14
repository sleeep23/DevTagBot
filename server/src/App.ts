import express from 'express';
import surfitScrape from "./scrape/surfit-scrape";

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

    this.application.get('/surfit/:tag', (req: express.Request, res: express.Response) => {
      async function getData() {
        const data = await surfitScrape(req.params.tag);
        await console.log(data);
        await res.send(data);
      }
        getData();
    })

    this.application.get('/velog/:tag', (req: express.Request, res: express.Response) => {
      async function getData() {

      }
    })
  }
}

export default App;
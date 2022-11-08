import App from './App';

const app = new App().application;
const port = 3001

app.listen(port, () => {
  console.log('Server listening on port 3000');
});
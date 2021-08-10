import express from 'express';
import user from './api/user';

function build() {
  const app = express();

  app.use(express.json());
  app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello');
  });
  app.use('/user', user);

  return app;
}

export default build();
import { Router } from 'express';
import postsRouter from './posts.routes';

const routes = Router();

routes.use('/', postsRouter);
export default routes;

import Router from 'koa-router';
import { withServices } from 'middleware/withServices';
import controller from './controller';

const router = new Router();
router.post('/:type', ctx => withServices(controller.create, ctx));

export default router.routes();

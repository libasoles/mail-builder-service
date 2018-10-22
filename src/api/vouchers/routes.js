import Router from 'koa-router';
import controller from './controller';

const router = new Router();
router.post('/:type', controller.create);

export default router.routes();

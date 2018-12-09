import Router from 'koa-router';
import vouchers from 'api/vouchers/routes';

const router = new Router();
router.use('/api/vouchers', vouchers);

export default router;

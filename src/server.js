import createApp from './app';
import router from './routing';

const PORT = process.env.PORT || 4321;

const app = createApp();

app.use(router.routes());

try {
  app.listen(PORT);
  console.log(`Connected on port: ${PORT}`);
} catch (error) {
  console.error(error);
}

import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CourierController from './app/controllers/CourierController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/recipients/:id', RecipientController.update);
routes.post('/recipients', RecipientController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/couriers', CourierController.store);
routes.put('/couriers/:id', CourierController.update);
routes.get('/couriers', CourierController.index);
routes.delete('/couriers/:id', CourierController.delete);

export default routes;

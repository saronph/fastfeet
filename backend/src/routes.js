import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveriesController from './app/controllers/DeliveriesController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/:id/deliveries', DeliveriesController.index);
routes.get('/deliveryman/:id/delivered', DeliveriesController.get);

routes.put('/datadeliveries/:id', DeliveriesController.update);

routes.use(authMiddleware);

routes.put('/recipients/:id', RecipientController.update);
routes.post('/recipients', RecipientController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.get('/deliveryman', DeliverymanController.index);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.get('/deliveries', DeliveryController.index);
routes.delete('/deliveries/:id', DeliveryController.delete);

export default routes;

import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveriesController from './app/controllers/DeliveriesController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliveryman/:id/deliveries', DeliveriesController.index);
routes.get('/deliveryman/:id/delivered', DeliveriesController.get);

routes.put('/datadeliveries/:id', DeliveriesController.update);

routes.post('/delivery/:id/problems', DeliveryProblemController.store);

routes.use(authMiddleware);

routes.get('/problems', DeliveryProblemController.index);
routes.get('/problems/:id', DeliveryProblemController.get);
routes.put('/problems/:id/cancel-delivery', DeliveryProblemController.update);

routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);
routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.get);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.get);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.get('/deliveries', DeliveryController.index);
routes.delete('/deliveries/:id', DeliveryController.delete);

export default routes;

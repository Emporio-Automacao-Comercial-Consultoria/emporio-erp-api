import express from 'express';
import adaptRoute from '../main/adapters/express-route-adapters';
import AuthMiddleware from '../middleware/auth-middleware';
import { adaptMiddleware } from '../middleware/adapters/express-middleware-adapter';
import UserControllers from '../controllers/UserControllers';

// TODO : Separar rotas por arquivos.
const routes = express.Router();

// Users
// TODO criar factory para criar instancias de middleware
const user = new UserControllers();
const authMiddleware = new AuthMiddleware();

routes.get('/users', adaptMiddleware(authMiddleware), adaptRoute(user.index));
routes.post('/users', adaptMiddleware(authMiddleware), adaptRoute(user.add));
routes.post('/users/login', adaptRoute(user.login));



export default routes;

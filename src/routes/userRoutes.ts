import { Router } from 'express';
import * as userController from '../controllers/UsuarioController';
import * as roleMiddlewares from '../middleware/userMiddlewares/userRoleMiddlewares';
import * as userFieldsMiddleware from '../middleware/userMiddlewares/userFieldsMiddleware';

const router = Router();

router.get('/users', userController.default.list);

router.post('/users',
    roleMiddlewares.roleValidation.invalidRequestIfRoleIsSuperAdmin,
    userController.default.add);

router.delete('/users/:id',
    userFieldsMiddleware.userFieldValidation.checksIfUserExistsByParams,
    userController.default.delete);

router.delete('/users', (req, res) => { res.status(400).json({message: "Invalid route"})})

router.put('/users/:id',
    roleMiddlewares.roleValidation.invalidRequestIfRoleIsSuperAdmin,
    userFieldsMiddleware.userFieldValidation.checksIfUserExistsByParams,
    userController.default.update);

router.put('/users', (req, res) => { res.status(400).json({message: "Invalid route"})})


export default router;
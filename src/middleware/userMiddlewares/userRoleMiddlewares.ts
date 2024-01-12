import { UserRole } from '../../models/Users/UserRole';
import { Request, Response, NextFunction } from 'express';

export const roleValidation = {

    invalidRequestIfRoleIsSuperAdmin(req: Request, res: Response, next: NextFunction) {
        if (req.body.role == UserRole.SUPER_ADMIN) {
            res.status(401).json({
                message: "Role selected is not permitted"
            });
        } else {
            next();
        }
    },

    verifyIfUserOnlineRoleIsAdmin(req: Request, res: Response, next: NextFunction) {
            
    },
}


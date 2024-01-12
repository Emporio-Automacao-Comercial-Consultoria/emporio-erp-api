import { Request, Response, NextFunction } from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Usuario } from '../model/Usuarios/Usuario';

export const userFieldValidation = {

    checksIfUserExistsByParams(req: Request, res: Response, next: NextFunction){
        
}}
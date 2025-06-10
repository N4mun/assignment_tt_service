import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';


export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUser();
        res.status(users.status).json({ status: users.status, message: users.message, data: users.data });
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUser(req);
        res.status(user.status).json({ status: user.status, message: user.message, data: user.data });
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.updateUser(req);
        res.status(user.status).json({ status: user.status, message: user.message, data: user.data });
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.deleteUser(req);
        res.status(user.status).json({ status: user.status, message: user.message });
    } catch (error) {
        next(error);
    }
};


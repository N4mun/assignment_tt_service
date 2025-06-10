import { Request, Response, NextFunction } from 'express';
import { StandardResponse } from '../utils/standardResponse';

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // ควบคุมว่า error แบบไหนควรแสดง stack หรือไม่
    const isDev = false;
    const errorData = isDev ? { stack: err.stack } : undefined;

    res.status(statusCode).json(
        new StandardResponse(statusCode, message, errorData)
    );
};

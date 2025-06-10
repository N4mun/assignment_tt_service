import * as userModel from '../models/userModel';
import { Request, Response } from 'express';
import { StandardResponse } from '../utils/standardResponse';
import { AppError } from '../utils/appError';

export const getAllUser = async () => {
    const users = await userModel.getAll();

    if (!users) {
        throw new AppError("No users found", 404);
    }
    return new StandardResponse(200, 'User found', users);
}

export const createUser = async (req: Request) => {

    const { user_firstname, user_lastname, user_phone, user_email } = req.body;

    if (
        !user_firstname?.trim() ||
        !user_lastname?.trim() ||
        !user_phone?.trim() ||
        !user_email?.trim()
    ) {
        throw new AppError("All fields are required", 400);
    }

    if (user_phone.length !== 10) {
        throw new AppError("Phone number must be exactly 10 digits", 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
        throw new AppError("Invalid email format", 400);
    }

    const payload = {
        user_firstname: user_firstname,
        user_lastname: user_lastname,
        user_phone: user_phone,
        user_email: user_email,
    };

    const existingUser = await userModel.getByEmail(payload.user_email);
    if (existingUser) {
        throw new AppError("Email already exists", 409);
    }

    const user = await userModel.create(payload);
    if (!user) {
        throw new AppError("Failed to create user", 500);
    }
    return new StandardResponse(201, 'User Created Successfully', user);
}

export const updateUser = async (req: Request) => {

    const { user_id, user_firstname, user_lastname, user_phone, user_email } = req.body;

    if (
        !user_firstname?.trim() ||
        !user_lastname?.trim() ||
        !user_phone?.trim() ||
        !user_email?.trim()
    ) {
        throw new AppError("All fields are required", 400);
    }

    if (user_phone.length !== 10) {
        throw new AppError("Phone number must be exactly 10 digits", 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
        throw new AppError("Invalid email format", 400);
    }


    const existingUser = await userModel.getByEmail(user_email);
    if (existingUser && existingUser.user_id !== user_id) {
        throw new AppError("Email already exists", 409);
    }

    const payload = {
        user_id: user_id,
        user_firstname: user_firstname,
        user_lastname: user_lastname,
        user_phone: user_phone,
        user_email: user_email,
    };

    const affectedRows = await userModel.update(payload);
    if (!affectedRows) {
        throw new AppError("User not found or not updated", 404);
    }
    return new StandardResponse(200, 'User Updated Successfully', payload);
}

export const deleteUser = async (req: Request) => {
    const userId = req.params.user_id;

    const user = await userModel.getById(Number(userId));
    if (!user) {
        throw new AppError("User not found", 404);
    }

    const affectedRows = await userModel.deleteUserById(Number(userId));
    if (!affectedRows) {
        throw new AppError("User not found or not deleted", 404);
    }
    return new StandardResponse(200, 'User Deleted Successfully');
}

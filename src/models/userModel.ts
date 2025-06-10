import db from '../config/db';

interface User {
    user_id?: number;
    user_firstname: string;
    user_lastname: string;
    user_phone: string;
    user_email?: string;
}

const TABLE_NAME = 'users';

export async function getAll(): Promise<User[]> {
    return db<User>(TABLE_NAME).select('user_id', 'user_firstname', 'user_lastname', 'user_phone', 'user_email');
}

export async function getById(userId: number): Promise<User | undefined> {
    return db<User>(TABLE_NAME).where('user_id', userId).first().select('user_id', 'user_firstname', 'user_lastname', 'user_phone', 'user_email');;
}

export async function getByEmail(email: string): Promise<User | undefined> {
    return db<User>(TABLE_NAME).where('user_email', email).first();
}

export async function create(user: User): Promise<User> {
    const [user_id] = await db<User>(TABLE_NAME).insert(user)
    return { ...user, user_id };
}

export async function update(user: User): Promise<number> {
    return db<User>(TABLE_NAME).where('user_id', user.user_id).update(user);
}

export async function deleteUserById(userId: number): Promise<number> {
    return db<User>(TABLE_NAME).where('user_id', userId).del();
}
export class StandardResponse<T = any> {
    status: number;
    message: string;
    data?: T;
    timestamp: string;

    constructor(status: number, message: string, data?: T) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.timestamp = new Date().toISOString();
    }
}

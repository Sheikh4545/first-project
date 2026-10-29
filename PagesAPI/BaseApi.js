export class BaseApi {
    constructor(request) {
        this.request = request;
        // This will automatically grab the BASE_URL from your .env file
        this.baseURL = process.env.BASE_URL;
    }

    async getHeaders() {
        return {
            "Content-Type": "application/json"
        };
    }
}
const { BaseApi } = require('./BaseApi');

export class UserApi extends BaseApi {
    constructor(request) {
        super(request);
        this.loginEndpoint = "/api/v1/users/login";
        this.updateAccountEndpoint = "/api/v1/users/update-account";
    }

    // Method for login/create user request
    async loginUser(payload) {
        return await this.request.post(`${this.baseURL}${this.loginEndpoint}`, {
            headers: await this.getHeaders(),
            data: payload
        });
    }

    // Method for updating user account (Put/Patch)
    async updateAccount(payload) {
        return await this.request.patch(`${this.baseURL}${this.updateAccountEndpoint}`, {
            headers: await this.getHeaders(),
            data: payload
        });
    }
}
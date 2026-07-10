export interface LoginResponse {

    access_token: string;

    refresh_token: string;

    role: string;

    refresh_expires_in: number;

    "not-before-policy": number;

    scope: string;

    token_type: string;

    session_state: string;

    expires_in: number;

    username: string;

}
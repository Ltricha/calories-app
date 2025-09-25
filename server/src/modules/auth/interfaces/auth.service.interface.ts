import { LoginUserDTO } from "../dto/login-user.dto";

export interface IAuthService {
    login(loginUserDTO: LoginUserDTO): Promise<string | null>;
}
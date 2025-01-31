import TokenEntity from '../Entity/TokenEntity';
import AuthenticationDto from '../Dto/AuthenticationDto';
import { AuthService } from '../Service/Authentication/AuthService';
export default class AuthenticationResolver {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthenticationDto): Promise<TokenEntity>;
}

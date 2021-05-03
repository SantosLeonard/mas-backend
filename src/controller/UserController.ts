import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateuserService';

class UserController {
    async create(request:Request, response:Response){
        const userData = request.body

        const createUser = new CreateUserService()

        const user = await createUser.execute(userData)

        return response.json(user);
    }
}

export {UserController};
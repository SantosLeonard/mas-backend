import { getRepository } from "typeorm";
import { User } from "../models/User";

interface UserId{
    id ?: string;
}

class GetUsersService {

    public async execute({id}:UserId){

        const usersRespository = getRepository(User);

        const users = usersRespository.find();

        if(!users){
            return{message:'users not found'}
        }

        return users;
    }

}

export {GetUsersService};
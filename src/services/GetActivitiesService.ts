import { getRepository } from "typeorm"
import { Activy } from "../models/Activity"

interface UserId {
    id?:string;
}

class GetActivityService {

    public async execute({id}:UserId){
        console.log('Id do usuário da atividade: ' + id)

        const activyRepository = getRepository(Activy);

        const activies = await activyRepository.find({relations: ["course_unit"]});

        if(!activies){
            return {
                message:"activities not found"
            }
        }

        return activies;

    }

}

export {GetActivityService}
import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface UserId {
    id ?: string;
}

class GetActivitiesService {
    
    public async execute({id}:UserId){

        const activityRespository = getRepository(Activity);

        const activities = activityRespository.find();

        if(!activities){
            return{message:'activities not found'}
        }

        return activities;
    }
}


export {GetActivitiesService};
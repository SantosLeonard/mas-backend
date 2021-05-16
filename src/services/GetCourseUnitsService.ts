import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface UserId{
    id ?: string;
}

class GetCourseUnits {

    public async execute({id}:UserId){

        const courseUnitsRespository = getRepository(CourseUnit);

        const courseUnits = courseUnitsRespository.find();

        if(!courseUnits){
            return{message:'course units not found'}
        }

        return courseUnits;
    }

}

export {GetCourseUnits};
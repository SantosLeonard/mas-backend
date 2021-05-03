import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

type CourseUnitData = {
    name:string;
    description:string;
}

class CreateCourseUnitService {
    public async execute({name,description}:CourseUnitData) {
        
        const courseUnitsRepository = getRepository(CourseUnit);

        const courseUnit = courseUnitsRepository.create ({
            name,description
        });

        await await courseUnitsRepository.save(courseUnit)
        return courseUnit;
    }
}

export {CreateCourseUnitService};
import {Request, Response} from 'express';
import { CourseUnit } from '../models/CourseUnit';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import { GetCourseUnits } from '../services/GetCourseUnitsService';

class CourseUnitController {
    async create(request:Request, response:Response) {
        const courseUnitData = request.body;
        const createCourseUnit = new CreateCourseUnitService();
        
        const user = await createCourseUnit.execute(courseUnitData)

        return response.json(CourseUnit);
    }

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getCourseUnits = new GetCourseUnits();

        const courseUnits = await getCourseUnits.execute(userId);
        return response.json(courseUnits);
    }
}

export {CourseUnitController};
import {request, response, Router} from 'express';
import { ActivityController } from './controller/ActivityController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';
import { AuthenticateController } from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated'

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const userController = new UserController()
const activityController = new ActivityController()
const courseunitController = new CourseUnitController()
const authenticateController = new AuthenticateController()

const routes = Router();

routes.post('/user', userController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activity', authenticated, activityController.show);
routes.get('/couseunit', authenticated, courseunitController.show);

routes.post('./auth', authenticateController.create);
routes.post('/activity',authenticated, activityController.create);
routes.post('/courseunit', authenticated,courseunitController.create);

export default routes;
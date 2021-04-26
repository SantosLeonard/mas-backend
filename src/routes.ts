import {request, response, Router} from 'express';

const routes = Router();

routes.get('/user', (request, response) => response.json({
    message:'Hello my dudes!!'
}))

routes.get('/user', (request, response) => {
    response.json(({
        message:'Hello my dudes!!'
    }))
})

routes.post('/user', (request,response) => {
    const {name,email,password} = request.body

    const user = {
        name, email, password
    }

    return response.json(user);
})

export default routes;
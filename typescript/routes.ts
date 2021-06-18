import {Request, Response} from 'express';
import createUser from './src/services/CreateUser';

export function HelloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Rick',
        email: 'teste@gmail.com',
        password : '2555228230775421'
    });
    return response.json({message: 'Hello World'});
}
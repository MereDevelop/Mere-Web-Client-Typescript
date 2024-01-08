import { RouteObject } from 'react-router-dom';
import loginRoute from './login';
import accountRoute from './account';
import signupRoute from './signup';

const auth: RouteObject[] = [loginRoute, accountRoute, signupRoute];

export default auth;

import { RouteObject } from 'react-router-dom';
import loginRoute from './login';
import accountRoute from './account';

const auth: RouteObject[] = [loginRoute, accountRoute];

export default auth;

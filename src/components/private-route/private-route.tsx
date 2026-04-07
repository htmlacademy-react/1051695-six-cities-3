import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { AuthorizationStatus } from '../../consts';
type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
  isLoginPage?: boolean;
}

function PrivateRoute({ authorizationStatus, children, isLoginPage = false }: PrivateRouteProps) {
  let status: string = AuthorizationStatus.Auth;
  let route = AppRoute.Login;

  if (isLoginPage) {
    route = AppRoute.Main;
  }
  if (isLoginPage && authorizationStatus === AuthorizationStatus.NoAuth) {
    status = AuthorizationStatus.NoAuth;
  }
  return (
    authorizationStatus === status ?
      children :
      <Navigate to={route} />
  );
}

export default PrivateRoute;

import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { AuthorizationStatus } from '../../consts';
type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;

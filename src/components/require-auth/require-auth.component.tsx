import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function RequireAuth() {
  // use- replace mock later

  const isMock: boolean = false;

  const [isSignedIn, setIsSignedIn] = useState(isMock);

  const location = useLocation();

  return isSignedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

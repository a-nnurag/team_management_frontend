import { DashboardSkeleton } from "@/components/skeleton-loaders/dashboard-skeleton";
import useAuth from "@/hooks/api/use-auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthRoute } from "./common/routePaths";

const AuthRoute = () => {
  const location = useLocation();
  const { data: authData, isLoading } = useAuth();
  const user = authData?.user;

  const _isAuthRoute = isAuthRoute(location.pathname);

  if (isLoading && !_isAuthRoute) return <DashboardSkeleton />;

  if (!user) return <Outlet />;

  return <Navigate to={`workspace/${user.currentWorkspace?._id}`} replace />;
};

export default AuthRoute;

// Purpose of replace
// When replace={true} (or just replace) is used with Navigate:

// Replaces the current entry in the browser's history stack instead of adding a new entry
// Prevents the user from using the back button to return to the previous route
// Maintains a cleaner navigation history

// In Your Context
// In your AuthRoute component, when a user is authenticated, they get redirected to their workspace:
// javascriptreturn <Navigate to={`workspace/${user.currentWorkspace?._id}`} replace />;
// Without replace:

// User visits /login
// Gets redirected to /workspace/123
// Browser history: /login → /workspace/123
// Back button would take them to /login

// With replace:

// User visits /login
// Gets redirected to /workspace/123
// Browser history: /workspace/123 (replaces /login)
// Back button won't take them back to the login page

// Why This Makes Sense
// This is particularly useful for authentication flows because:

// Prevents confusion - Users shouldn't return to login/auth pages after being authenticated
// Better UX - Avoids redirect loops or showing auth pages to already-authenticated users
// Security consideration - Reduces accidental exposure of auth routes in navigation history

// This is a common and recommended pattern for post-authentication redirects in React Router applications.

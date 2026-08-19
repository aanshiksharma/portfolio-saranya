import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useCMSAuth } from "@/cms/hooks/useCMSAuth";

export default function CMSAuthGuard() {
  //   const { isAuthenticated, isLoading } = useCMSAuth();
  const isLoading = false;
  const isAuthenticated = true;

  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/cms/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

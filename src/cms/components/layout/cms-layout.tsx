import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function CMSLayout() {
  return (
    <>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

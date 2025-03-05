import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function AdminLayout() {
  return (
    <>
      {/* Admin Header */}
      <AdminHeader />
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      
      {/* Admin Footer */}
      <AdminFooter />
    </>
  );
}
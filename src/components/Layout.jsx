import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div>Layout</div>
      <Outlet />
    </div>
  );
}

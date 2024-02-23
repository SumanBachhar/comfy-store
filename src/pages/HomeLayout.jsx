import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <nav>E-com</nav>
      <Outlet />
    </>
  );
};

import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container p-3">
      <div className="flex justify-center text-center align-middle ">
        <ul className="flex gap-5">
          <li className="border rounded-full w-[80px]">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="border rounded-full w-[80px]">
            <NavLink to={"/users"}>User</NavLink>
          </li>
          <li className="border rounded-full w-[80px]">
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Header);

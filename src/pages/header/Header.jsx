import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "sonner";

AOS.init();

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.error("You are logged out");
      })
      .catch();
  };

  return (
    <div>
      <div className="navbar font-primary bg-[#EFEFEF] z-50">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to="/update">UPDATE</NavLink>
                </li>
              )}
              {user && (
                <li>
                  <NavLink to="/favorites">FAVORITES</NavLink>
                </li>
              )}
              {!user && (
                <li>
                  <NavLink to="/register">REGISTER</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/offers">YOUR OFFERS</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <a className=" text-3xl md:text-3xl lg:text-5xl font-primary font-bold ">
              E$TATES
            </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl tracking-wider">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/update">UPDATE</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/favorites">FAVORITES</NavLink>
              </li>
            )}
            {!user && (
              <li>
                <NavLink to="/register">REGISTER</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/offers">YOUR OFFERS</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user && (
            <div
              className="avatar tooltip tooltip-bottom tooltip-primary  "
              data-tip={user?.displayName}
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          )}

          {user ? (
            <NavLink
              onClick={handleSignOut}
              className="btn md:text-2xl tracking-wider"
              to=""
            >
              LOGOUT
            </NavLink>
          ) : (
            <NavLink className="btn md:text-2xl tracking-wider" to="/login">
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

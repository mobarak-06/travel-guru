import { Link, NavLink } from "react-router-dom";
import { GiPalmTree } from "react-icons/gi";
import { useContext} from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const links = (
    <>
      <li className="text-[#F9A51A] font-bold">
        <NavLink className={({isActive}) => isActive && ' border border-[#F9A51A]'} 
        to="/">Home</NavLink>
      </li>
      <li className="text-[#F9A51A] font-bold">
        <NavLink className={({isActive}) => isActive && ' border border-[#F9A51A]'}  to="/destination">Destination</NavLink>
      </li>
      <li className="text-[#F9A51A] font-bold">
        <NavLink className={({isActive}) => isActive && ' border border-[#F9A51A]'}  to="/blog">Blog</NavLink>
      </li>
      <li className="text-[#F9A51A] font-bold">
        <NavLink className={({isActive}) => isActive && ' border border-[#F9A51A]'}  to="/contact">Contact</NavLink>
      </li>
      
    </>
  );


  const handleSignOut = () =>{
    logOut()
    .then(() => {
      toast.success("SuccessFully LogOut!")
    })
    .catch(error =>{
      console.error(error);
    })
  }

  console.log(user);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
          {links}
            </ul>
          </div>
          <div className="text-4xl font-bold text-[#F9A51A] flex gap-0">
            <GiPalmTree size={80}/>
          <p className="logo-font">TRAVEL <br /> GURU </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
           user ? <h2>{user?.displayName}</h2> : <h2>{user?.email}</h2> 
          }
          {
            user ? <button className="btn bg-[#F9A51A] border-[#F9A51A]" onClick={handleSignOut}>Sign Out</button> : <Link to="/login" className="btn bg-[#F9A51A] border-[#F9A51A]">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;

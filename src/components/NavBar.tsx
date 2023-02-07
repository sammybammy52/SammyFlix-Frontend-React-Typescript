import { useState, useEffect } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [fix, setFix] = useState(false);

  function setFixed(): void {
    //console.log(window.scrollY)
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <div
      className={
        fix
          ? "  w-[100%] pt-3 h-20 fixed z-20 bg-black transition-all duration-300"
          : "  w-[100%] pt-3 h-20 fixed z-[2] bg-transparent transition-all duration-300"
      }
    > 
      <div className="desktop-nav grid grid-cols-4">
      <Link to="/">
        <div className="logoDiv flex justify-center justify-items-center gap-2">
          <PlayCircleIcon className="h-12 w-12 text-purple-800" />
          <h3 className="nav-h3 text-white py-3">SAMMYFLIX</h3>
        </div>
      </Link>

      <div className="linksDiv col-span-2 py-3">
        <ul className="flex text-white justify-center gap-14">
          <li>
            {" "}
            <a href="#">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Movies</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Series</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">About</a>{" "}
          </li>
        </ul>
      </div>
      <div className="loginBtn flex justify-center pb-4">
        <button className="login-btn text-white p-3 bg-purple-800  w-[100px]">
          Login
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default NavBar;

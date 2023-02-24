import { useState, useEffect } from "react";
import { PlayCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [fix, setFix] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileNav = () => {
    setMobileToggle(!mobileToggle);
  }
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
          ? "  w-[100%] fixed z-20 bg-black transition-all duration-300 max-[800px]:bg-black"
          : "  w-[100%] fixed z-[2] bg-transparent transition-all duration-300 max-[800px]:bg-black"
      }
    >
      <div className="desktop-nav grid grid-cols-4 pt-3 max-[800px]:hidden">
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

      <div className="mobile-nav pt-1 pb-1 hidden max-[800px]:block">
        <div className="flex justify-between px-3">
          <Link to="/">
          <div className="logoDiv flex justify-items-center gap-2">
            <PlayCircleIcon className="h-12 w-12 text-purple-800" />
            <h3 className="nav-h3 text-white py-3">SAMMYFLIX</h3>
          </div>
        </Link>

        <div>
          <Bars3Icon className="h-10 w-10 text-white drop-shadow-lg hover:scale-110 transition-all" onClick={handleMobileNav}/>
        </div>
        </div>

        <div className={ mobileToggle ? "mobile-nav-content bg-black w-full transition duration-500": "h-0 opacity-0 duration-500 transition-all "}>
          <ul className={mobileToggle ? "text-white p-5 transition-all delay-300" : " delay-300 hidden transition-all"}>
            <li className="py-5 border-b-[0.3px] border-gray-700 text-center">Home</li>
            <li className="py-5 border-b-[0.3px] border-gray-700 text-center">Movies</li>
            <li className="py-5 border-b-[0.3px] border-gray-700 text-center">Series</li>
            <li className="py-5 border-b-[0.3px] border-gray-700 text-center">About</li>
          </ul>
        </div>
        


      </div>
    </div>
  );
};

export default NavBar;

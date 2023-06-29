import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const menu = () => {
    setIsMenu(!isMenu)
    console.log(isMenu)
  }

  return (
    <>
    <div className="z-50 w-full bg-white p-5 flex flex-row justify-between shadow-lg items-end fixed lg:px-40 lg:py-7">
      <div>
        <h1 className="hover:text-gray-400 cursor-pointer font-bold text-gray-950 text-3xl"> <Link to={'/'}> JobSpot</Link> </h1>
      </div>
      <div className=" md:hidden">
        <nav className=" cursor-pointer">
          {isMenu ? (
            <span className="material-symbols-outlined close" onClick={menu}>close</span>
          ) : (
            <span className="material-symbols-outlined menu" onClick={menu}>menu</span>
          )}
        </nav>
      </div>
      <nav className="hidden md:flex items-center">
      <ul className=" flex flex-row items-center  capitalize text-gray-900 text-2xl ">
            <li className="hover:opacity-50 cursor-pointer transition-all pl-5"><Link to={'/'} onClick={()=>setIsMenu(false)}> Home</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all pl-5"><Link to={'/about'} onClick={()=>setIsMenu(false)}> About</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all pl-5"><Link to={'/signup'} onClick={()=>setIsMenu(false)}> Sign up</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all pl-5"><Link to={'/login'} onClick={()=>setIsMenu(false)}> Log in</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all pl-5"> <Link to={'/profile'} onClick={()=>setIsMenu(false)}> Profile</Link></li>
        </ul>
      </nav>
    </div>
   {isMenu && <div className=" z-40 fixed h-screen md:hidden w-full bg-white items-center justify-center" >
    <nav className=" w-full  p-7 top-1/3 relative" >
        <ul className=" flex flex-col items-center space-y-8 capitalize text-gray-900 text-2xl">
            <li className="hover:opacity-50 cursor-pointer transition-all"><Link to={'/'} onClick={()=>setIsMenu(false)}> Home</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all"><Link to={'/about'} onClick={()=>setIsMenu(false)}> About</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all"><Link to={'/signup'} onClick={()=>setIsMenu(false)}> Sign up</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all"><Link to={'/login'} onClick={()=>setIsMenu(false)}> Log in</Link></li>
            <li className="hover:opacity-50 cursor-pointer transition-all"> <Link to={'/profile'} onClick={()=>setIsMenu(false)}> Profile</Link> </li>
        </ul>
    </nav>
    </div>}
    </>
  );
};

export default Header;

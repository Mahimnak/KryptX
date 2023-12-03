import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const NavBarItem = ({ title, path, classprops }) => {
  return (
    <Link to={path}>
      <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    </Link>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  


  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
<div className="md:flex-[0.5] flex-initial justify-center items-center">
  <a href="/Home">
    <img src={logo} alt="logo" className="w-32 cursor-pointer" />
  </a>
</div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { title: "Market", path: "/coin" },
           { title: "Forum", path: "/faq" },
          { title: "Transactions", path: "/Exchange" },
          { title: "History", path: "/History" },
        ].map((item, index) => (
          <NavBarItem
            key={item.title + index}
            title={item.title}
            path={item.path}
          />
        ))}
        
      <li>
      <button className="py-1 px-4 mx-4 rounded-full cursor-pointer border-4 border-transparent hover:border-purple-900" onClick={() => window.location.assign('/')} >Log Out</button>
    </li>
        
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              { title: "Market", path: "/coin" },                                          
               // { title: "Exchange", path: "/exchange" },
               { title: "Forum", path: "/faq" },
            ].map((item, index) => (
              <NavBarItem
                key={item.title + index}
                title={item.title}
                path={item.path}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// import React from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
// import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";



// const NavBarItem = ({ title, classprops }) => {
//   return (

//     <>
//       <Link to={'/coin'}>
//         <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
//       </Link>
//     </>
//   );
// }
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = React.useState(false);

//   return (
//     <nav className="w-full flex md:justify-center justify-between items-center p-4">
//       <div className="md:flex-[0.5] flex-initial justify-center items-center">
//         <img src={logo} alt="logo" className="w-32 cursor-pointer" />
//       </div>
//       <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
//         {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
//           <NavBarItem key={item + index} title={item} />
//         ))}
//         <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//           Login
//         </li>
//       </ul>
//       <div className="flex relative">
//         {!toggleMenu && (
//           <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
//         )}
//         {toggleMenu && (
//           <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
//         )}
//         {toggleMenu && (
//           <ul
//             className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
//           >
//             <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
//             {["Market", "Exchange", "Tutorials", "Wallets"].map(
//               (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
//             )}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

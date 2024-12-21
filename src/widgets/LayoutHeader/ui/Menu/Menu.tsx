import { Dispatch, FC, SetStateAction } from "react";

import { NavLink } from "react-router-dom";

interface MenuProps{
  links: { name: string; href: string }[]
  active:boolean
  setActive: Dispatch<SetStateAction<boolean>>

 }


const Menu = ({ links, active, setActive }: MenuProps) => {
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <div className="navbar-start">
          <ul
            tabIndex={0}
            className=" font-semibold z-50 mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.name} className="mb-3">
                <NavLink to={link.href} onClick={handleClick}><span className='font-semibold font-openSans text-2xl' >{link.name}</span></NavLink>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
};

export default Menu;

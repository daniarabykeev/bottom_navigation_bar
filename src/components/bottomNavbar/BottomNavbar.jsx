import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BottomNavbar = () => {
    const Menus = [
        { name: "Home", icon: "home-outline", dis: "translate-x-0", path: "/" },
        { name: "Профиль", icon: "person-outline", dis: "translate-x-16", path: "/profile" },
        { name: "Добавить", icon: "chatbubble-outline", dis: "translate-x-32", path: "/msg" },
        { name: "Добавить", icon: "camera-outline", dis: "translate-x-48", path: "/adddata" },
        { name: "Настройки", icon: "settings-outline", dis: "translate-x-64", path: "/settings" },
    ];

    const [active, setActive] = useState(0)
    const navigate = useNavigate();

    const handleMenuClick = (index, path) => {
        setActive(index);
        navigate(path);
    };

  return (
    <div className='bg-gray-500 max-h-[4.4rem] px-6 rounded-t-xl'>
        <ul className='flex relative'>
            <span className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute -top-5 rounded-full`}>
                <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1'></span>
                <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2'></span>
            </span>
            {
                Menus.map((menu, i) => (
                    <li key={i} className='w-16'>
                        <a className='flex flex-col text-center pt-6' onClick={() => handleMenuClick(i, menu.path)}>
                            <span className={`text-xl cursor-pointer duration-500 ${i === active && '-mt-6 text-white'}`}>
                            <ion-icon name={menu.icon}></ion-icon>
                            </span>
                            <span className={`${active === i ? 'translate-y-4 duration-700 opacity-100 text-white' : 'opacity-0 translate-y-10'}`}>{menu.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default BottomNavbar
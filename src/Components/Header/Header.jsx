import React, { useState } from "react";
import  "./Header.scss"
import logo from "../../images/logo4.svg"
import logo_mobile from "../../images/logo_mobile.svg"
import burger_menu from "../../images/burger_menu.svg"
import label from "../../images/label.svg"
import Mobile_menu from "../Mobile menu/Mobile_menu_left";
import Mobile_menu_right from "../Mobile menu/Mobile_menu_right";
const Header = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [rightMenuActive, setRightMenuActive] = useState(false);


    const items = [{ value: "МЕНЮ", href: "#" },
    { value: "ПИВО", href: "#" },
    { value: "РЕЗЕРВ СТОЛА", href: "#" },
    { value: "АДРЕСА", href: "#" },
    { value: "СОБЫТИЯ", href: "#" },
    { value: "О НАС", href: "#" }
    ]


    const items_geo = [{ value: "Москва", href: "#" },
    { value: "Новосибирск", href: "#" },
    ]


    return (
        <div className='header'>

            <div className='header_container'>


                <div className='section'>
                    <div className='section2'>
                        <div className='item'> <a> Москва</a></div>
                        <div className='Novosib'> <a href="#"> Новосибирск</a></div>
                    </div>
                    <div className='item'> <a href="#"> English </a></div>

                </div>

                <div className='header_mobile_menu'>
                    <button onClick={() => setMenuActive(!menuActive)} className='open_menu'> <img src={burger_menu} /></button>
                    <div> <img src={logo_mobile} /></div>
                    <button onClick={() => setRightMenuActive(!rightMenuActive)} className='open_geo'> <img src={label} /></button>
                    <Mobile_menu active={menuActive} setActive={setMenuActive} items={items} />
                    <Mobile_menu_right active_geo={rightMenuActive} setActive_geo={setRightMenuActive} items_geo={items_geo} />
                </div>





                <div className='navbar'>
                    <div className='part'>
                         <a href="#" className='item_first'> МЕНЮ</a>
                        <a className='item_second' href="#"> ПИВО</a>
                        <a className='item_last' href="#"> РЕЗЕРВ СТОЛА</a>
                        <img className='header_logo' src={logo} />
                        <a className='item_first' href="#"> АДРЕСА</a>
                        <a className='item_second' href="#"> СОБЫТИЯ</a>
                        <a className='item_last' href="#"> О НАС</a>
                    </div>
                </div>





            </div>
        </div>
    )
}
export default Header
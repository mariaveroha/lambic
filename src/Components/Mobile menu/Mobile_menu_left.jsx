import React from "react";
import './Mobile_menu_left.scss';

const Mobile_menu = ({items, active, setActive}) => {
return (
<div  className= { active ? 'menu active':'menu'}>
    <div className='menu_content'>
        <ul>
            {items.map (item => 
            <li>
                <a href={item.href}>{item.value}</a>
            </li>
            )}
        </ul>
    </div>

</div>
)

}

export default Mobile_menu
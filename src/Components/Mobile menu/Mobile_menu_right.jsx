import React from "react";
import  './Mobile_menu_right.scss'

const Mobile_menu_right = ({items_geo, active_geo, setActive_geo}) => {
return (
<div  className={ active_geo ? 'menu2 active': 'menu2'}>
    <div className={'menu_content2'}>
        <ul>
            {items_geo.map (item => 
            <li>
                <a href={item.href}>{item.value}</a>
            </li>
            )}
        </ul>
    </div>

</div>
)

}

export default Mobile_menu_right
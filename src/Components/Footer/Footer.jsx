import React, { useState } from "react";
import logo_footer from "../../images/Logo_footer.svg"
import upster from "../../images/upster.svg"
import Adress from "./Adress";
import './Footer.scss';
const Footer = () => {
    const [adresses, setAdresses] = useState([
        { id: 1, description: 'ул. Воронцово Поле, 11/32' },
        { id: 2, description: 'Страстной бульвар, 7с1' },
        { id: 3, description: 'Пресненская набережная, 10 блок Б' },
        { id: 4, description: 'ул. Мясницкая, 40А' },
        { id: 5, description: 'ул. Верхняя Радищевская, 15с1' },
        { id: 6, description: 'Малая Сухаревская площадь, 8' },
        { id: 7, description: 'ул. Долгоруковская, 19с7' },
        { id: 8, description: 'Гоголевский б-р, 33/1' },
        { id: 9, description: 'Ходынский бульвар, 2' },
        { id: 10, description: 'ул. Неверовского 10с6' },
        { id: 11, description: 'Большой Черкасский пер., 15/17с1' },
        { id: 12, description: 'Кутузовский проспект, 2/1с6' },
        { id: 13, description: 'Проспект Мира, 26с7' },
        { id: 14, description: 'Турчанинов переулок, 3с5' },
        { id: 15, description: 'Новосибирск, ул. Тимирязева, 97/1' },
        { id: 16, description: 'ул. Большая Ордынка, 65' },
        { id: 17, description: 'ул. Дмитрия Ульянова, 5А' }
    ])

    return (
        <div className='footer'>
            <div className="d-flex jc-space-between footer-container">
                <div className='mobile_footer'>
                    <div className='logoFooter'> <img src={logo_footer} /> </div>
                    <div className='footerLeft'>© 2022 Права защищены</div>
                    <div className='info_main'>
                        <div className='number_phone'>+7 (495) 181-43-17</div>
                        <div className='info'>info@lambic.ru</div>
                    </div>

                    <div className='buttons_footer'>
                        <button className='buttonLeft1'>ОСТАВИТЬ ОТЗЫВ</button>
                        <button className='buttonLeft2'>ФРАНШИЗА</button>
                    </div>

                    <div className='buttons_footer'>
                        <button className='buttonLeft4'>КАРТА САЙТА</button>
                        <button className='buttonLeft3'>СТАТЬИ</button>
                    </div>

                    <div className='buttons_footer_hidden'>
                        <div className='hidden'> <button className='buttonLeft5'>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</button> </div>
                        <div className='hidden'><button className='buttonLeft6'>АДРЕСА НАШИХ РЕСТОРАНОВ</button> </div>
                    </div>

                    <div className='upster_hidden'>
                        <div className='company'> Управляющая компания Upster</div>
                        <img className='upster' src={upster} />
                    </div>

                </div>


                <div className='column-addresses'>

                    <div className='adressTitle'>АДРЕСА</div>
                    <div className='addresses-list'>
                        {adresses.map((adress, key) =>
                            <Adress adress={adress} key={adress.id} />
                        )}
                    </div>

                    <div className='bottom'>

                        <div><button className='buttonRight1'>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</button> </div>
                        <div><button className='buttonRight2'>СТАТЬИ</button> </div>

                        <div className='company'> Управляющая компания Upster</div>
                        <img className='upster' src={upster} />
                    </div>

                </div>




            </div>
        </div>

    )
}
export default Footer
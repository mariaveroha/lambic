import React, { useEffect, useState } from "react";
import Card from "./Card";
import './Card.scss';
//import axios from "axios";

const Cards = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [card, setCard] = useState([
        { id: 1, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 2, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 3, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 4, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 5, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 6, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 7, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 8, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
        { id: 9, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков', body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..', time: '12 апреля 2022' },
    ])

    const AddPage = () => {
        let cardClone = Array.from(card);
        let maxId = Math.max(card.map(o => o.id));
        cardClone.forEach(item => {
            maxId = maxId + 1;
            item.id = maxId;
        });
        setCard(cardClone.concat(card));
        changePage(currentPage + 1);
    }

    useEffect(() => {
        /*
        {
           data: [{}]
           currentPage: 1
        }
        */
        //const response = await axios.get ('')
        //setCard (response.data.data)
        //setTotalPages(Math.ceil(response.data.data.length/9));

        setTotalPages(Math.ceil(91 / 9));
    }, []);

        let paginateButtons = [];
    for (let i = 0; i < totalPages; i++) {
        paginateButtons.push(i + 1);
    }
    const firstPage = (reverse) => {
        if (reverse === false) {
            setCurrentPage(1);
        } else {
            setCurrentPage(totalPages);
        }
    }

    const changePage = (newCurrentPage) => {
        if (totalPages < newCurrentPage || newCurrentPage < 1) {
            return false;
        }
        setCurrentPage(newCurrentPage);
    }



    return (
        <div className='wrapper'>
            <div className='d-flex'>
                <a href="#" className='main'> Главная</a>
                <div className='arrow arrow_right'></div>
                <a className='article'> Статьи</a>
            </div>
            <p className='mainTitle'>Статьи</p>

            <div className='card-list'>
                {card.map((cards, key) =>
                    <Card card={cards} key={cards.id} />
                )}
            </div>

            <div onClick={AddPage} className='btn_div'>Показать еще</div>
            {paginateButtons.length > 0 &&
                <div className='pagination-wrapper'>
                    <button className='pagination pagination_first' onClick={() => firstPage(false)}>{'<<'}</button>
                    <button className='pagination' onClick={() => changePage(currentPage - 1)}>{'<'}</button>
                    {paginateButtons.map((button) => {
                        return <button onClick={() => setCurrentPage(button)} className={currentPage === button ? 'pagination current_page' : 'pagination'} key={button} >{button}</button>
                    })}
                    <button className='pagination' onClick={() => changePage(currentPage + 1)}>{'>'}</button>
                    <button className='pagination pagination_last' onClick={() => firstPage(true)}>{'>>'}</button>
                </div>
            }
        </div>

    )

}
export default Cards
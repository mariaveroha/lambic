import React from "react";
import { useState } from "react";
import img from "../../images/Rectangle 133.svg"
import group_139 from "../../images/group_139.svg"
import './Article.scss'
import Array_cards from "./Array_cards";
const Article = ()=> {
    const [card, setCard] = useState ([
        {id: 1, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков',  body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..' , time: '12 апреля 2022'},
        {id: 2, title: 'Бельгийское пиво Kriek: вишенка на торте ламбиков',  body: 'Запустили весеннее обновление меню во всех наших ресторанах. Из специального меню «Американская классика» в основное по традиции по..' , time: '12 апреля 2022'},
        ])
    

    return (
    <div className='article_container'>
            <div>
                <div className='top'>
                    <a href="#" className='main'> Главная</a>
                    <div className='arrow arrow_right'></div>
                    <a  href = '#'className='main'> Статьи</a> 
                    <div className='arrow arrow_right'></div>
                    <a className='article'> Фруктовая «борода»: чем знаменито Barbe Ruby</a> 
                </div> 
                <p className='mainTitle'>Фруктовая «борода»: чем знаменито Barbe Ruby</p>
            </div>
        
            <div className='page'>
                <div className='right_column'>
                <div className='div_image'><img src = {img} alt="Пиво"className='image_article'/> </div>
                <div className= 'title_article'>С чего всё начиналось</div>
                <div className= 'text'>Когда-то давно, ещё в средние века, в бельгийском городе Льеж существовала пивоварня Barbe d’Or. Она принадлежала знатному дворянскому роду де Ромсее — и, видимо, выделялась на фоне остальных, потому что оставила свой след в истории. Мастера из компании Verhaeghe решили увековечить память предков — и создали линейку фруктового пива Barbe. А на этикетку — поместили фамильный герб тех самых дворян, которые держали пивоварню.

               <p> <br/>Популярность пиво Barbe приобрело в первую очередь благодаря производителю. Пивоварня Verhaeghe прославилась тем, что первая из бельгийцев — ещё в XIX веке — начала реализовывать свою продукцию не рядом с производством, как это было принято, а в столице. Во время Первой мировой работа предприятия была приостановлена, но потом компании снова удалось завоевать доверие покупателей, и теперь она про праву считается одной из самых знаковых и легендарных в Бельгии. </p>
                </div>
                <div className= 'title_article'> А сейчас?</div>
                <div className= 'text'>Несмотря на фруктовость, Barbe Ruby сохранило свой серьёзный средневековый характер. Довольно крепкое (около 8 градусов), не сладкое, а скорее терпкое и пряное, с лёгкой кислинкой в конце, оно покоряет с первого глотка даже тех, кто в целом равнодушен к этому направлению. В самом начале во вкусе улавливается вишня с косточкой и ноты винных бочек, затем к ним добавляются оттенки миндаля, а на финише появляются лёгкие нюансы винограда и цитрусовых. Потрясающее сочетание, в которое невозможно не влюбиться! 

 <p> <br/>Аромат у Barbe Ruby тоже очень богатый. В нём прослеживаются тона спелой вишни, бузины, миндаля, а настоящие ценители почувствуют ещё и лёгкие ванильные оттенки. </p>

 <p> <br/>Варят рубиновое пиво методом верхового брожения. В составе — только натуральные ингредиенты: вода, пшеница, ячменный солод, сахар, дрожжи, хмель и фруктовый экстракт. Несмотря на крепость напитка, алкоголь в нём почти не чувствуется — и в этом тоже заслуга пивоваров, которые оттачивают свои рецепты до совершенства. </p>

 <p> <br/>Производитель рекомендует подавать пиво охлаждённым до 6-8 градусов в фирменном бокале, на котором тоже изображена знаменитая борода. Так вы в полной мере сможете насладиться уникальным ярким вкусом и особым характером Barbe Ruby, который хранит память о талантливых средневековых пивоварах. Приходите в любой бельгийский пивной ресторан — и приятной дегустации! </p>
                </div>
                <div className='table'>
                <div className='table_item1'>Опубликовано: 12 апреля </div>
                <div className='table_item2'>Просмотрели: 25</div>
                <div className= 'button_vk'>
                <div className='table_item3'>Рассказать друзьям </div> 
                <img className='group_139' src = {group_139}/> 
                </div>
                </div>
                </div>
                <div className='left_column'>
                <div className='left_title'> Читайте также</div>
                 <div className='left_article'>
                 {card.map ((cards, key) =>
                 <Array_cards card = {cards} key={cards.id}/>
                    )}
                 </div>
                </div>

            </div>




    </div>
    )
}

export default Article

import { CATEGORIES } from "../../../../Assets/BurgerImage/image/Categories"


const {ANGUS,ANGUSXL,BIGKING,
    VOPPERD,VOPPERDABL,VOPPERCHEESE,
    DABLPVOPPERCHEESE,TILZITERKING,BEKONGAMBURGER,
    ANGUSPARMED,ANGUSPARMERDUBL,GRANDGHEESEFRESH,
    GAMBURGER,SWEDISHBURGER,
    CHEESEBURGER,DUBLCHEESEBURGER}=CATEGORIES

export const Items  = [
    {
    href: '/Angus',
    id: new Date().toISOString(),
    name: 'Ангус Шеф',
    image: ANGUS,
    price: 14.99,
    about:'Наслаждайся каждым сырным укусом! Нежный мраморный бифштекс Абердин Ангус, пикантный Пармезан и щедрая порция соуса Пармеджано! А ещё внутри салат Романо, маринованный красный лучок и свежие томаты на мягкой булочке бриошь.',     
    quantity: 1
  
} ,  {
    href: '/AngusXl',
    id: new Date().toISOString(),
    name: 'Ангус шуф \nXL',
    image: ANGUSXL,
    about: 'строим каникулы во Франции? Сразу два бифштекса из мраморной говядины Абердин Ангус с щедрой порцией изысканного трюфельного соуса и сыр Гауда, тающий в хрустящем кармашке. А ещё салат Айсберг, томаты и маринованные огурчики — на французской булочке Бриошь.',
    price: 21.39,
    quantity: 1
}  , {
    href: '/DublVopper',
    id: new Date().toISOString(),
    name: 'Двойной Воппер',
    image: VOPPERDABL,
    about: 'ВОППЕР® — это вкуснейшая приготовленная на огне 100% говядина двойная порция, с сочными помидорами, свежим нарезанным листовым салатом, густым майонезом, хрустящими маринованными огурчиками и свежим луком на нежной булочке с кунжутом.',    
    price: 12.59,
    quantity: 1
}  , {
    href: '/VopperD',
    id: new Date().toISOString(),
    name: 'Воппер джуниор',
    image: VOPPERD,
    about:'ВОППЕР® — это вкуснейшая приготовленная на огне 100% говядина с сочными помидорами, свежим нарезанным листовым салатом, густым майонезом, хрустящими маринованными огурчиками и свежим луком на нежной булочке с кунжутом.',
    price: 6.39,
    quantity: 1
}  , {
    href: '/BigKing',
    id: new Date().toISOString(),
    name: 'Биг Кинг',
    image: BIGKING,
    about:'Этот сэндвич по праву носит свой титул. Он составлен с истинной королевской щедростью: в нем два приготовленных на огне фирменных бифштекса, ломтик сыра чеддер, огурчики, свежий нарезанный салат, лук и непревзойденный Бургер-Соус. И все это в подрумяненной и посыпанной кунжутом булочке.',
    price: 7.99,
    quantity: 1
} ,  {
    href: '/VopperCheese',
    id: new Date().toISOString(),
    name: 'Воппер с сыром',
    image: VOPPERCHEESE,
    about:'Приготовленный на огне бифштекс из 100% говядины, два нежных ломтика сыра, сочные помидоры, свежий нарезанный салат, густой майонез, хрустящие огурчики и свежий лук на нежной булочке с кунжутом.',
    price: 9.89,
    quantity: 1
},{
    href: '/DublVopperCheese',
    id: new Date().toISOString(),
    name: 'Двойной воппер с сыром',
    image: DABLPVOPPERCHEESE,
    about:'ВОППЕР®с сыром Двойной - это два аппетитных, приготовленных на огне бифштекса из 100% говядины, два нежных ломтика сыра, сочные помидоры, свежий нарезанный листовой салат, густой майонез, хрустящие маринованные огурчики и свежий лук на нежной булочке с кунжутом.',
    price: 13.59,
    quantity: 1
},{
    href: '/TilzitterKing',
    id: new Date().toISOString(),
    name: 'Тильзитер Кинг',
    image: TILZITERKING,
    about:'Сыр тает. И ты тоже! Фирменный бифштекс из 100%-й говядины под одеялом из тающего Тильзитера с щедрой порцией очень сырного...',
    price: 10.99,
    quantity: 1
},{
    href: '/BekonGumBurger',
    id: new Date().toISOString(),
    name: 'Бекон Гамбургер',
    image: BEKONGAMBURGER,
    about:'Гамбургер по-новому, дымному! Мы добавили бекончик и много соуса Барбекю — получилось ароматно и сочно.',
    price: 3.00,
    quantity: 1
},{
    href: '/AngusParmed',
    id: new Date().toISOString(),
    name: 'Ангус Пармеджано',
    image: ANGUSPARMED,
    about:'Наслаждайся каждым сырным укусом! Нежный мраморный бифштекс Абердин Ангус, пикантный Пармезан и щедрая порция соуса Пармеджано! А ещё внутри салат Айсберг, маринованный красный лучок и свежие томаты на мягкой булочке бриошь.',
    price: 13.89,
    quantity: 1
},{
    href: '/AngusParmedDubl',
    id: new Date().toISOString(),
    name: 'Ангус Прамеджано двойной',
    image: ANGUSPARMERDUBL,
    about:'Много сыра, ещё больше говядины! Два сочных мраморных бифштекса Абердин Ангус, пикантный Пармезан и щедрая порция сырного соуса Пармеджано. А ещё здесь овощи: салат Айсберг, маринованный красный лучок и свежие томаты — всё на булочке бриошь с двумя видами кунжута.',
    price: 18.99,
    quantity: 1
},{
    href: '/GrandCheeseFresh',
    id: new Date().toISOString(),
    name: 'Грант чиз \n фреш',
    image: GRANDGHEESEFRESH,
    about:'Особенная версия Гранд Чиза — со свежими овощами. Новый бифштекс по-домашнему (к фирменной говядине мы добавили немного сочной курочки), ломтики сыра Чеддер, хрустящий Айсберг, помидоры, лук, маринованные огурчики, кетчуп и горчица. Это точно сочно!',
    price: 8.29,
    quantity: 1
},{
    href: '/GumBurger',
    id: new Date().toISOString(),
    name: 'Воппер По-итальянски',
    image: GAMBURGER,
    about: 'Твои каникулы в Италии! А это наш фирменный Воппер в итальянском стиле: 100%-я говядина, приготовленная на огне, изысканный итальянский соус Песто, любимый сыр, свежие томаты, огурчики маринованные, салат Айсберг и лук. Феличита!',
    price: 3.29,
    quantity: 1
},{
    href: '/SwidishBurger',
    id: new Date().toISOString(),
    name: 'Ангус По-итальянски',
    image:SWEDISHBURGER,
    about: 'Твои каникулы в Италии! Внутри этого шикарного бургера — мраморная говядина Абердин Ангус на огне под вкуснейшим итальянским соусом Песто, кусочки твёрдого сыра Пармезан и много овощей: салат Айсберг, сочные томаты, красный маринованный лук — всё под сырным соусом на булочке бриошь. Одним словом — феличита!',
    price: 9.79,
    quantity: 1
},{
    href: '/CheeseBurger',
    id: new Date().toISOString(),
    name: 'ЧизБургер',
    image: CHEESEBURGER,
    about: 'Особенная версия Гранд Чиза — со свежими овощами. Новый бифштекс по-домашнему (к фирменной говядине мы добавили немного сочной курочки), ломтики сыра Чеддер, хрустящий Айсберг, помидоры, лук, маринованные огурчики, кетчуп и горчица. Это точно сочно!',
    price: 3.59,
    quantity: 1
},{
    href: '/DublCheeseBurger',
    id: new Date().toISOString(),
    name: 'Двойной ЧизБургер',
    image: DUBLCHEESEBURGER,
    about: 'Два приготовленных на огне фирменных говяжьих бифштекса, два ломтика слегка расплавленного сыра, хрустящий маринованный огурчик, рубленый лук, горчица и кетчуп. И все это в подрумяненной и посыпанной кунжутом булочке.',
    price: 7.29,
    quantity: 1
}
]
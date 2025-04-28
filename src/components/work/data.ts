import bike from '../../assets/Landing_Bike-Shop.jpg'
import finance from '../../assets/Finance-Landing.jpg'
import portfolioTodo from '../../assets/portfolioTodo.png'
import portfolioGoodsShop from '../../assets/portfolioGoodsShop.png'
import game from '../../assets/game.jpg'
import binance from '../../assets/binance.jpg'
import native from '../../assets/native.jpg'
import starwars from '../../assets/starwars.png'
import parser from '../../assets/parser.png'
import navigator from '../../assets/navigator.png'
import memoryGame from '../../assets/memoryGame.png'
import calendar from '../../assets/calendar.jpg'
import weather from '../../assets/weather.png'
import contact from '../../assets/contact.png'
import cats from '../../assets/cats.png'
import layout from '../../assets/layout.png'
import popup from '../../assets/popup.png'
import horoscope from '../../assets/horoscope.png'
import calendar_next from '../../assets/calendar.png'

import { IProjectNav, IProjectsData } from '../../features/works/types'

export const projectsData: IProjectsData[] = [
  {
    id: 0,
    image: bike,
    title: 'Landing Bike-Shop',
    category: 'web',
    gitHub: 'https://github.com/mate-academy/layout_landing-page/pull/419',
    demo: 'https://voronine.github.io/layout_landing-page/',
  },
  {
    id: 1,
    image: finance,
    title: 'Finance-Landing',
    category: 'web',
    gitHub: 'https://github.com/voronine/Landing_Finance_Income?tab=readme-ov-file',
    demo: 'https://voronine.github.io/Landing_Finance_Income/',
  },
  {
    id: 2,
    image: portfolioTodo,
    title: 'Task Master',
    category: 'app',
    gitHub: 'https://github.com/mate-academy/react_todo-app-with-api/pull/818',
    demo: 'https://voronine.github.io/react_todo-app-with-api/',
  },
  {
    id: 3,
    image: portfolioGoodsShop,
    title: 'Goods Shop',
    category: 'app',
    gitHub: 'https://github.com/fe-jul23-CodeDynasty',
    demo: 'https://fe-jul23-lgtm.github.io/catalog/',
  },
  {
    id: 4,
    image: game,
    title: 'Game',
    category: 'game',
    gitHub: 'https://github.com/voronine/Game',
    demo: 'https://voronine.github.io/Game/',
  },
  {
    id: 5,
    image: binance,
    title: 'Binance_App',
    category: 'app',
    gitHub: 'https://github.com/voronine/binance_api',
    demo: 'https://voronine.github.io/binance_api/',
  },
  {
    id: 6,
    image: native,
    title: 'React Native Finance App',
    category: 'app',
    gitHub: 'https://gitlab.com/voroninyevhenii/React-Native_Finance_App/-/commit/6ed1bb76f75d5e0bc612d3cc923323e078ad2c3d',
    demo: 'in prodaction',
  },
  {
    id: 7,
    image: starwars,
    title: 'Star-Wars List',
    category: 'app',
    gitHub: 'https://github.com/voronine/react-native_app_flat-list',
    demo: 'in prodaction',
  },
  {
    id: 8,
    image: parser,
    title: 'Certificate parser',
    category: 'web',
    gitHub: 'https://github.com/voronine/Digital_signature_certificate_parser',
    demo: 'https://stackblitz.com/~/github.com/voronine/Digital_signature_certificate_parser',
  },
  {
    id: 9,
    image: navigator,
    title: 'Navigator',
    category: 'app',
    gitHub: 'https://github.com/voronine/react_native_auto_navigator',
    demo: 'in prodaction',
  },
  {
    id: 10,
    image: memoryGame,
    title: 'Memory Game',
    category: 'game',
    gitHub: 'https://github.com/voronine/AppGameMobile',
    demo: 'in prodaction',
  },
  {
    id: 11,
    image: calendar,
    title: 'Calendar Todo List',
    category: 'app',
    gitHub: 'https://github.com/voronine/calendarApp',
    demo: 'in prodaction',
  },
  {
    id: 12,
    image: weather,
    title: 'Weather App',
    category: 'app',
    gitHub: 'https://github.com/voronine/weatherApp',
    demo: 'in prodaction',
  },
  {
    id: 13,
    image: contact,
    title: 'Contact page',
    category: 'app',
    gitHub: 'https://github.com/voronine/test',
    demo: 'https://test-ebon-two-68.vercel.app/',
  },
  {
    id: 14,
    image: cats,
    title: 'Cats statistics',
    category: 'app',
    gitHub: 'https://github.com/voronine/front-end-test-task',
    demo: 'https://front-end-test-task-eight.vercel.app/',
  },
  {
    id: 15,
    image: layout,
    title: 'Layout',
    category: 'app',
    gitHub: 'https://github.com/voronine/layout',
    demo: 'https://voronine.github.io/layout/',
  },
  {
    id: 16,
    image: popup,
    title: 'Popup',
    category: 'app',
    gitHub: 'https://github.com/voronine/popap',
    demo: 'https://popap-sigma.vercel.app/',
  },
  {
    id: 17,
    image: horoscope,
    title: 'Horoscope',
    category: 'app',
    gitHub: 'https://github.com/voronine/horoscope',
    demo: 'https://horoscope-phi-ten.vercel.app/horoscope/Aries/2025-04-11',
  },
  {
    id: 17,
    image: calendar_next,
    title: 'Calendar',
    category: 'app',
    gitHub: 'https://github.com/voronine/calendar-events',
    demo: 'https://calendar-events-blond.vercel.app/',
  },
]

export const projectsNav: IProjectNav[] = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
  { name: 'game' },
]

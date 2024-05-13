//assets
import bike from '../../assets/Landing_Bike-Shop.jpg'
import finance from '../../assets/Finance-Landing.jpg';
import portfolioTodo from '../../assets/portfolioTodo.png';
import portfolioGoodsShop from '../../assets/portfolioGoodsShop.png';
import game from '../../assets/game.jpg'
import binance from '../../assets/binance.jpg'

//types
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
    demo: 'https://voronine.github.io/Game/pp',
  },
  {
    id: 5,
    image: binance,
    title: 'Binance_App',
    category: 'app',
    gitHub: 'https://github.com/voronine/binance_api',
    demo: 'https://voronine.github.io/binance_api/',
  },
]


export const projectsNav: IProjectNav[] = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
  { name: 'game' },
]
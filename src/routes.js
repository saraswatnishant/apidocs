import Documentation  from './components/Documentation/Documentation';
import Guide from './components/Guide/Guide';
import Intro from './components/Intro/Intro';
import Reference from './components/Reference/Reference';
export const routes = [  
{
    path:'/developer/documentation',
    component:Documentation,
    exact:true
},{
    path:'/developer/en/api/dummy1/intro',
    component:Intro,
    exact:true
},
{
    path:'/developer/en/api/dummy1/guide',
    component:Guide,
    exact:true
},
{
    path:'/developer/en/api/dummy1/reference',
    component:Reference,
    exact:true
}]
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { Home } from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Body from './Components/Body';







function App() {
  return (
    <div className="">
    <Header/>
    {/* <Outlet/> */}
    {/* <Footer/> */}
    <Body/>
   </div>
    
  );
}

const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    errorElement:<div>404 Not Found</div>,

    children:[
      // {
      //   path:"/",
      //   element:<App/>
      // },
      {
         path:"/home",
        element:<Home/>
      },
      {
         path:"/about",
        element:<About/>
      },
      {
         path:"/portfolio",
        element:<Portfolio/>
      },
      {
         path:"/resume",
        element:<Resume/>
      },
     
      {
         path:"/contact",
        element:<Contact/>
      }

    ]
}


])


export default router;

// import React from 'react'
import { Home } from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

// const Body = () => {
//   return (
//     <div>
//       <Home/>
//       <About/>
//       <Portfolio/>
//       <Resume/>
//       <Contact/>
//     </div>
//   )
// }

// export default Body



import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Projects from "./Projects";
// import Contact from "./Contact";

const Body = () => {
  return (
    <main className="body">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Portfolio />
              <Resume />
              <Contact />
              <About />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default Body;

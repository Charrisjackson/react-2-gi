// import { useState } from 'react'
import './App.css'
import './index.css'
import { NavLink,Link, useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
// import { BookList } from './pages/Booklist.jsx'
// import { Home } from './pages/Home.jsx'
// import Booklist from './pages/Booklist.jsx'
// import Home from './pages/Home.jsx'
// import Newbook from './pages/Newbook.jsx'
// import Notfound from './pages/Notfound.jsx'
// import Book from './pages/Book.jsx'
// import Booklayout from './pages/Booklayout.jsx'
// import Bookroutes from './pages/Bookroutes.jsx'
// MEDIUM: Program a movie search app with React hooks and React Router. Utilize an API to fetch movie data based on user search queries. Display search results and implement a detailed view for each movie. 

function App() {



  return (

<h1></h1>
  )
}

export default App





















  // const location = useLocation()
  // console.log(location)
  // // routes hook that takes an array of objects with properties (path, element)held about a route. used for js instead of jsx then you can return the {element } component. can hold info for ever route. 
  // // let element= useRoutes([]) 
   {/* adding addtional routes to render multiple different books with unique ids. */}
      {/* you can define a route with a custom parametr to make it dynamic and able to be changed */}
      {/* '/:' to  */}
          {/* Link component replaces <a> tag "to" attribute rreplaces href */}
      {/* Link replace property will go back two pages bc it gets rid of last page history. not that useful unless your doing a login page that you dont want the user to go bavk to */}
      {/* Link realod document property reload entire page and not just changing section */}
      {/*  Link state property allows you to pass data along between one link and another, doesnt show up as apart of the url */}
      {/* Navlink component works just like link but allows you more porerties for active state of link. navlinks have classname, style and children prop. they allow you to take in a function with the isActive class. isActive is trrue when we are currently on that link. */}


       {/* nesting routes inside one another */}
 {/* nesting the routes because they all start with /books, */}
{/* you can wrap unrelated components and just not add a path, but only an element that you want on every page */}
 {/* adding an element to the parent route so that elements content renders on every page */}
 {/* when you have on routes rendrring out a bunch of other routes, make sure there is a '/*' in front of it, renders anything that starts with /books */}
// navlink can by default imply a class of active, can style routes with an "active class " by color or some affect in a css file. WILL NOT WORK WITH LINK COMPONENT, ONLY NAVLINK
// navlink has the same property as link, but with more stylig capabilities

// use location hook gives us a location object with path name (everything after local host /) search is the search parameters we defined, key is a uniqe id, hash is what happens when you put a # after url and a value after. where val is store, state is accessed and store inside of useLocation hook. can render state ont he page by doing {location.state}

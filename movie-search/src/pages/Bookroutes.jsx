import { Routes, Route } from "react-router-dom";
import Booklist from './Booklist.jsx'
import Notfound from './Notfound.jsx'
import Book from './Book.jsx'
import Booklayout from './Booklayout.jsx'
import Newbook from "./Newbook";

export default function Bookroutes(){
   return(
    <>
    
     <Routes>
        <Route element={<Booklayout/>}>
     <Route index element={<Booklist/>}/>
      <Route path=':id' element={<Book/>}/>
      <Route path='new' element={< Newbook />}/>
      </Route>
        </Routes>
    </>
   )
}
import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";




export default function Booklayout(){
    //   useSearchParams() give us value from search params instead of from state. almost identical to usestate except includes every thing from your query params good for filtering a list, you can save filter list to query
    // n:3 default state
    const [searchParams, setSearchParams] = useSearchParams({n:3})
    // const [number, setNumber] = useState(3)
    console.log(searchParams.get('n'))
    return(
        <>
       
      <Link to='/books/1'>Book 1</Link>
      <br/>
      <Link to='/books/2'>Book 2</Link>
      <br/>
      {/* redirecting based off input */}
      <Link to={`/books/${number}`}>Book {number}</Link>

      <br/>
      <Link to='/books/new'>New Book</Link>
      <br/>
      <Outlet context={{hello:'world'}}/>
      <input type ='number'  
      value = {number} onChange={e=> setSearchParams({n: e.target.value})}/>
        </>
    )
}
// outlet renders whatever the current route is
// link to replaces a href
// you can add context to an outlet
// searchparam has a 'get' function gets us whatever we set as 'n' or the searchparams default
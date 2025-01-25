import { useOutletContext} from "react-router-dom"
import {useParams } from "react-router-dom"



export default function Book(){
    // useparams returns object with all of the custom parameters we defined in our router
   const {id} = useParams()
//    useOutletContext lets you pass a single variable inside of the outlet tag. every component inside of the parent route will have that context passed down. it returns what is passed.
//    const obj = useOutletContext()
//    object.hello to pass down outlet context
   return <h1>Book {id}</h1>
}
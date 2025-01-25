import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Notfound(){
        // getting access to navigate function from useNavigate, using setTimeout to redirect to the homepage after 1 second
        const navigate =  useNavigate()
        useEffect(()=>{
            setTimeout(()=>{
                navigate('/')
            },1000)
        },[])
    
        // const {id}= useParams()
        
            // automatically navigates someone when they reach a certain page

    return(
        <h1>404 ERROR</h1>
    )
}

// useNavigate  hook allows you to direct some based on form submission, not components. make sure to import it
// useNaivagte has those replace and state properties
// returns a function called navigate. takes a 'to' property and options replace and state
// you can pass in number values to go bavk and forth between pages -2 to go bavk 2 pages, 1 to go forward
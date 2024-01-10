import React from "react" 
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"
function Backbutton ({destination = '/'}){
    return(
        <div className="flex">
          <Link to={destination} className="bg-sky-600 text-white px-4 py-1 rounded-lg w-fit">
          </Link>  
          <BsArrowLeft className="text-2xl"/>

        </div>


    )

} 
export default Backbutton
 
import Backbutton from "../componant/Backbutton"
import { useState   } from "react"
import Spinner from "../componant/Sppiner"
import axios from "axios"
import { useNavigate , useParams} from "react-router-dom"
 
function Delatebook (){
    const [loading , setloading] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    function handleDelete (){
        setloading(true)
        axios.delete(`http://localhost:3000/books/${id}`)
        .then(()=>{
            setloading(false)
            navigate('/')
        }).catch((error)=>{
            setloading(false)
            alert("check console")
            console.log(error);
        })
    }


    return(
        <div className="py-4 text-center ">
            <Backbutton />
            <h1 className="text-3xl my-4"> Deleate book</h1>
            {loading ? <Spinner/> : ""}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h2 className="text-2xl"> are you sure you want to delete this book</h2>
                <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDelete}>Yes dealte it</button>
            </div>

        </div>
      
    )
}
export default Delatebook
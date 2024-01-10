import axios from "axios"
import { useState , useEffect} from "react"
import Backbutton from "../componant/Backbutton"
import Spinner from "../componant/Sppiner"
import { useParams } from "react-router-dom"
  
 
function Showbook (){
    const [showbook , setshowbook] = useState ([])
    const [loading , setloading] = useState (false)
    const {id} = useParams();

    useEffect (()=>{
        setloading(true)
        axios.get(`http://localhost:3000/books/${id}`)
        .then((response)=>{
            setshowbook(response.data)
            setloading (false)
        }) .catch((error)=>{
            console.log(error );
            setloading(false)
        })

    }, [])
    return (
        <div className="p-4">
            <Backbutton/>
            <h1 className=" text-3-xl my-4"> show books</h1>
            {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{showbook._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{showbook.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{showbook.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{showbook.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(showbook.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(showbook.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
        

    )
        
    
}
export default Showbook
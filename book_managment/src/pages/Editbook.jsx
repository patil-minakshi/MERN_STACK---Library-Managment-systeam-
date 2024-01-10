import React, { useState, useEffect } from "react"
import Backbutton from "../componant/Backbutton"
import Spinner from "../componant/Sppiner"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function Editbook () {

    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const [publishyear, setpublishyear] = useState('')
    const [loading , setloading] = useState(false)
    const navigate = useNavigate();
    const {id} = useParams()
    useEffect(()=>{
        setloading(true)
        axios.get(`http://localhost:3000/books/${id}`)
        .then((response)=>{
            const responseData = response.data
            settitle(responseData.title)
            setauthor(responseData.author)
            setpublishyear(responseData.publishyear)
            setloading(false)
        }).catch((error)=>{
            setloading(false)
            console.log(error);

        })

    }, [])

    function handleEdit() {
        const data = {
            title,
            author,
            publishyear,
        };
        setloading(true)
        axios.put(`http://localhost:3000/books/${id}` , data)
            .then(() =>
             {
                setloading(false)
                navigate('/');
            }).catch((error) => {
                alert('please check console')
               
                console.log('axios error ', error);
                setloading(false)
                 
            })

    }
    return (
        <div className="py-4">
            <Backbutton />
            <h1 className="text-3-xl , my-4 "> Edit book</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishyear}
            onChange={(e) => setpublishyear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEdit}>Save</button>
            </div>
        </div>
    )
}
export default Editbook

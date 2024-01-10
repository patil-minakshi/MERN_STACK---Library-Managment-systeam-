import { useEffect, useState } from "react"
import axios from 'axios';
import Spinner from "../componant/Sppiner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';






function Homepage() {
    const [books, setbooks] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        axios.get('http://localhost:3000/books')
            .then((response) => {
                setbooks(response.data.data)
                setloading(false)
            }).catch((error) => {
                console.log(error);
                setloading(false)
            })

    }, [])
    return (
        <div className="p-4">
            <div className=" flex justify-between item-centere text-center">
                <h1 className="text-3xl my-10 mx-7">Book List</h1>
                 
                     <Link to='/books/create' className=" text-sm mx-3 my-5 py-4">
                create book <MdOutlineAddBox className="text-sky-700 text-4xl " />
                </Link>
                 
               
            </div>

            {loading ?
                (
                    <Spinner />
                ) : (
                    <table className=" w-full border-separate border-spacing-2">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 rounded-md">No</th>
                                <th className="border border-slate-600 rounded-md">Title</th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Publishe Year</th>
                                <th className="border border-slate-600 rounded-md  ">operations</th>
                            </tr>

                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={book._id} className="h-8">
                                    <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                                    <td className="border border-slate-700 rounded-md text-center"> {book.title}</td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden"> {book.author}</td>
                                    <td className="border border-slate-700 rounded-md text-center max-md:hidden"> {book.publishyear}</td>
                                    <td className="border border-slate-700 rounded-md text-center">
                                        <div className=" flex justify-center gap-x-4">
                                            <Link to={`/books/details/${book._id}`}> details
                                                <BsInfoCircle className="text-2xl text-green-800 hover:text-blue-500 hover:cursor-pointer" />
                                            </Link>
                                            <Link to={`/books/edit/${book._id}`}> edit
                                                <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-yellow-500" />
                                            </Link>
                                            <Link to={`/books/delete/${book._id}`}> delete
                                                <MdOutlineDelete className="text-2xl text-red-800  hover:text-orange-500" />
                                            </Link>
                                        </div>
                                    </td>

                                </tr>


                            ))}

                        </tbody>

                    </table>


                )}

        </div>


    )
}
export default Homepage
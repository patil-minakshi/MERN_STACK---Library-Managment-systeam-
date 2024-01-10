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
                        <BsInfoCircle className="text-2xl text-green-800 hover:text-blue-500 hover:cursor-pointer"  />
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
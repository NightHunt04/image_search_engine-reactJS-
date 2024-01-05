import useFetchImages from "../util/useFetchImages"

function LoadMore({prompt, quantityPerPage, setImageURLS, imageURLS, pageNumber, setPageNumber}) {

    const handleClick = () => { 
        setPageNumber(pageNumber => pageNumber + 1)
        useFetchImages({prompt, pageNumber: pageNumber + 1, quantityPerPage, imageURLS, setImageURLS})
    }

    return (
        <div className="flex items-center justify-center mt-5">
            {
                imageURLS.length !== 0 
                ? <button 
                    className="font-poppins text-lg rounded-3xl outline-none bg-gradient-to-r
                     from-cyan-500 to-blue-500 text-white px-3 py-2 hover:opacity-90"
                     onClick={handleClick}>
                    Load more
                </button>
                : <p className="text-base text-gray-500 font-popins">No images loaded</p> 
            }
        </div>
    )
}

export default LoadMore
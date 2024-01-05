import useFetchImages from "../util/useFetchImages"

function SearchInput({
    prompt, 
    setPrompt, 
    quantityPerPage, 
    setQuantityPerPage, 
    imageURLS, setImageURLS, 
    pageNumber, 
    setPageNumber,
    prevPrompt,
    setPrevPrompt}) {

    const handleSearchPrompt = () => {
        if(prompt !== '') {
            if(prevPrompt !== prompt) { 
                setPageNumber(1)
                setPrevPrompt(prompt)
                useFetchImages({prompt, pageNumber: 1, quantityPerPage, imageURLS, setImageURLS})
            }
            else useFetchImages({prompt, pageNumber, quantityPerPage, imageURLS, setImageURLS})
        }
    }

    return (
        <div className="w-2/5 flex justify-center items-center p-2 drop-shadow-lg">
            <input 
                className="w-4/5 mr-2 px-5 py-2 outline-none rounded-l-lg border-none rounded-lg font-popins"
                placeholder='Prompt...'
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                onKeyDown={e => {
                    if(e.key === 'Enter')
                        handleSearchPrompt()
                }}
            />
            <select 
                className="w-3/12 px-3 py-2 text-lg outline-none cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg"
                value={quantityPerPage}
                onChange={e => setQuantityPerPage(e.target.value)}    
            >
                <option value="3" key={3}>3</option>
                <option value="6" key={6}>6</option>
                <option value="12" key={12}>12</option>
                <option value="15" key={15}>15</option>
            </select>
        </div>
    ) 
}

export default SearchInput
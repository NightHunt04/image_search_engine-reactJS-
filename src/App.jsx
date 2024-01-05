import { useEffect, useState } from 'react'
import SearchInput from './components/SearchInput'
import ImageHolder from './components/ImageHolder'
import LoadMore from './components/LoadMore'

function App() {

  const [prompt, setPrompt] = useState('')
  const [quantityPerPage, setQuantityPerPage] = useState(6)
  const [imageURLS, setImageURLS] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [prevPrompt, setPrevPrompt] = useState(prompt)

  return (
    <>
      <div className="w-full h-screen p-0 m-0">
        <div className="flex flex-col items-center justify-center p-10"> 
          <h1 className="text-3xl font-popins font-semibold text-gray-700">Image Search Engine</h1>
          <SearchInput 
            prompt={prompt}
            setPrompt={prompt => setPrompt(prompt)}
            quantityPerPage={quantityPerPage}
            setQuantityPerPage={quantity => setQuantityPerPage(quantity)}
            imageURLS={imageURLS}
            setImageURLS={images => setImageURLS(images)}
            pageNumber={pageNumber}
            setPageNumber={page => setPageNumber(page)}
            prevPrompt={prevPrompt}
            setPrevPrompt={prompt => setPrevPrompt(prompt)}
          />
          <ImageHolder 
            imageURLS={imageURLS}
          />
          <LoadMore 
            prompt={prompt}
            imageURLS={imageURLS}
            setImageURLS={images => setImageURLS(images)}
            pageNumber={pageNumber}
            setPageNumber={page => setPageNumber(page)}
            quantityPerPage={quantityPerPage}
          />
        </div>
      </div>
    </>
  )
}

export default App

function useFetchImages({prompt, pageNumber, quantityPerPage, imageURLS, setImageURLS}) {
    const ACCESS_KEY = import.meta.env.VITE_REACT_APP_ACCESS_KEY

    fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${prompt}&per_page=${quantityPerPage}&client_id=${ACCESS_KEY}`)
    .then(response => response.json())
    .then(data => {
        const fetchedImageData = data.results
        if(pageNumber === 1)
            setImageURLS(fetchedImageData)
        else setImageURLS([...imageURLS, ...fetchedImageData])
    })
    .catch(err => console.log(err))
}

export default useFetchImages
function ImageHolder({imageURLS}) {
    return (
        <div className="w-9/12 grid grid-cols-3 items-center justify-center gap-2 pt-5">
            {
                imageURLS.map(image => {
                    let imgLink = image.urls.raw
                    let imgW = image.width
                    let imgH = image.height
                    let horizontal = false
                    if((imgW > imgH) && (imgW - imgH) > 800) 
                        horizontal = true
                    if((imgH > imgW) && (imgH - imgW) > 800)
                        horizontal = false
                    const uniqueID = image.id
                    return (
                        <div key={uniqueID} className={`w-full h-full relative ${horizontal ? 'row-span-1' : 'row-span-2' }`}>
                            <img src={`${imgLink}`} alt="image" 
                                className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageHolder
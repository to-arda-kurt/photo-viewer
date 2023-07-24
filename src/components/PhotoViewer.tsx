import { SinglePhotoView } from "./SinglePhotoView"
import { useState } from "react"
import { imageUrls } from "./GetImageUrls"
import { PhotoGallery } from "./PhotoGallery"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";





const PhotoViewer = () => {
    const [urlIndex, setUrlIndex] = useState(0)

    const selectImageHandler = (clickedUrlIndex:number) => {
        setUrlIndex(clickedUrlIndex)
    }

    const changePhotoHandler = (navigation:string) => {
      if(navigation === 'next') {
        setUrlIndex(urlIndex + 1)
      }

      if(navigation === 'prev') {
        setUrlIndex(urlIndex - 1)
      }
    }

    return (

        <>
            <div className="photo-viewer-title">
                <h1>PHOTOVIEWER</h1>
            </div>
            <div className="viewer-wrapper">
                <div className="main-photo-viewer">
                    { urlIndex > 0 && <p className="main-photo-viewer_nav prev"  onClick={() => changePhotoHandler('prev')}> <BiArrowFromRight /> </p>  }

           
                    <SinglePhotoView urlIndex={urlIndex} />
                    { urlIndex < imageUrls.length-1 && <p className="main-photo-viewer_nav next" onClick={() => changePhotoHandler('next')}><BiArrowFromLeft />  </p> }
                </div>
                <PhotoGallery urls={imageUrls} selectImage={(clickedUrlIndex : number) => selectImageHandler(clickedUrlIndex)} />

            </div>
        </>

    )
}

export { PhotoViewer }
import { SinglePhotoView } from "./SinglePhotoView"
import { useState } from "react"
import { imageUrls } from "./GetImageUrls"
import { PhotoGallery } from "./PhotoGallery"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowsAlt } from "react-icons/ai";


const PhotoViewer = () => {
    const [urlIndex, setUrlIndex] = useState(0)

    const selectImageHandler = (clickedUrlIndex: number) => {
        setUrlIndex(clickedUrlIndex)
    }

    const changePhotoHandler = (navigation: string) => {
        if (navigation === 'next') {
            setUrlIndex(urlIndex + 1)
        }

        if (navigation === 'prev') {
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

                    <SinglePhotoView urlIndex={urlIndex} ariaLabel={urlIndex} />
                    <div className="toolbox">
                    <div className="toolbox-tools">
                         <p className="main-photo-viewer_nav next"><AiOutlineArrowsAlt /> </p>
                        </div>
                        <div className="toolbox-navigation">
                            {urlIndex > 0 && <button aria-label="prev-btn" className="main-photo-viewer_nav prev" onClick={() => changePhotoHandler('prev')}> <AiOutlineArrowLeft /> </button>}
                            {urlIndex < imageUrls.length - 1 && <button aria-label="next-btn" className="main-photo-viewer_nav next" onClick={() => changePhotoHandler('next')}><AiOutlineArrowRight />  </button>}
                        </div> 
                        
                    </div>
                </div>
                <PhotoGallery urls={imageUrls} selectImage={(clickedUrlIndex: number) => selectImageHandler(clickedUrlIndex)} />

            </div>
        </>

    )
}

export { PhotoViewer }
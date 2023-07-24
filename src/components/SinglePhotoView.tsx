import { imageUrls } from "./GetImageUrls"

type Props = {
    urlIndex: number,

}


const SinglePhotoView = (props: Props) => {

    return (

        <>
            <img className="single-image" src={imageUrls[props.urlIndex]} alt="Single Random Image" />
        </>

    )
}



export { SinglePhotoView }
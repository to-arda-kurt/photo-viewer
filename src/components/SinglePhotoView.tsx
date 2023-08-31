import { imageUrls } from "./GetImageUrls"

type Props = {
    urlIndex: number,
    ariaLabel: number 

}


const SinglePhotoView = (props: Props) => {

    return (

        <>
            <img className="single-image" src={imageUrls[props.urlIndex]} alt={`Single Random Image id ${props.urlIndex}`} aria-label={props.ariaLabel.toString()} />
        </>

    )
}



export { SinglePhotoView }
type Props = {
    url: string,
    index: number;
    selectImage: (urlIndex: number) => void;
}


const SinglePhotoThumbnail = (props: Props) => {

    return (

        <>
            <img className="thumbnail-image" src={props.url} alt="Single Random Image" onClick={() => props.selectImage(props.index)} />
        </>

    )
}


export { SinglePhotoThumbnail }
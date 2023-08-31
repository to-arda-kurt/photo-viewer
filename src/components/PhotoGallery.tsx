import { SinglePhotoThumbnail } from "./SinglePhotoThumbnail";

interface Props {
    urls: Array<string>;
    selectImage: (urlIndex: number) => void;

}

const PhotoGallery = (props: Props) => {

    return (

        <>
            <div className="photo-viewer">
                {props.urls.map((url,i) => {
                    return <SinglePhotoThumbnail key={i} index={i} url={url} selectImage={props.selectImage} />
                })}
            </div>
        </>

    )
}

export { PhotoGallery }
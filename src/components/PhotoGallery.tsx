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
                    return <SinglePhotoThumbnail index={i} url={url} selectImage={props.selectImage} />
                })}
            </div>
        </>

    )
}

export { PhotoGallery }
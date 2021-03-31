import { FC } from 'react';
import { ImageBox } from '../../components/ImageBox';
import { DownloadBox } from '../../components/DownloadBox';
import { useSelector } from 'react-redux';
import { getGallery } from "../../store/gallery";
import './style.scss';

const Gallery: FC = () => {
    const { elements } = useSelector(getGallery);
    return (
        <div className="gallery">
            {elements.map((el, id) => (
                <ImageBox source={el.url} key={id}/>
            ))}
            <DownloadBox/>
        </div>
    )
}
export default Gallery;
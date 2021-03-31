import { FC } from 'react';
import './style.scss';
export const ImageBox: FC<{ source: string }> = ({ source }) => {

    return (
        <div className="imagebox">
            <img className="imagebox__image" src={source} alt={source} />
        </div>
    );
};

export default ImageBox;

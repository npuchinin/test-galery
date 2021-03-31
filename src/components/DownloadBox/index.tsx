import './style.scss';
import DownloadModal from './DownloadModal';
import { useState } from 'react';

export const DownloadBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="downloadbox">
            <button onClick={() => setIsOpen(!isOpen)} className="downloadbox__button" >
                Загрузить
            </button>
            <DownloadModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

export default DownloadBox;

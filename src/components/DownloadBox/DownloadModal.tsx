import './style.scss';
import { FC } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImages } from '../../store/gallery';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const DownloadModal: FC<ModalProps> = ({isOpen, setIsOpen}) => {
    const [url, setUrl] = useState<string>('');
    const dispatch = useDispatch();
    if (!isOpen) return null;
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="downloadmodal">
            <input
                onClick={(event) => event.stopPropagation()}
                onChange={(e) => setUrl(e.target.value)}
                className="downloadmodal__input"
                placeholder="Введите ссылку"
            />
            <button onClick={() => dispatch(setImages({url}))} className="downloadmodal__button">
                Загрузить
            </button>
        </div>
    );
};

export default DownloadModal;

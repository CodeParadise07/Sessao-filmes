import { Modal, ContentModal } from "./styles";
import { forwardRef, useImperativeHandle, useState } from "react";

export const ModalTrailer = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalClassName = isOpen ? "modal open" : "modal";
    const handleClose = () => {
        setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
    }));

    return (
        <Modal className={modalClassName}>
            <ContentModal>
                <span className="close" onClick={handleClose}>
                    {props.title}
                </span>
                <iframe
                    width="560"
                    height="315"
                    src={props.trailerUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="1"
                    autoplay="1"
                ></iframe>
            </ContentModal>
        </Modal>
    );
});

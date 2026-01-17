import React from "react";
import styles from './modal-overlay.module.css';

type ModalOverlayProps = {
  onClose: () => void;
};

function ModalOverlay({onClose}:ModalOverlayProps){
    return (
        <div className={styles.overlay} onClick={onClose}></div>
    )
}

export default ModalOverlay;
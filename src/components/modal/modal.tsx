import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';


type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <button className={styles.modalСlose} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>

        <div>
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
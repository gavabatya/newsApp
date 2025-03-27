import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

import { IconClose } from '../../assets';

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={onClose}>
          <IconClose />
        </div>
        {children}
      </div>
    </div>
  );
};

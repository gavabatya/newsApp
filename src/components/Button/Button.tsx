import { FC } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick?(): void;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<ButtonProps> = ({ onClick, title, disabled, type = 'button' }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

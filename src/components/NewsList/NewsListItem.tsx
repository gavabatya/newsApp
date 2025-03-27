import { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

import { News } from '../../types';
import { IconEdit, IconTrash } from '../../assets';

interface NewsItemProps {
  newsItem: News;
  onUpdate(news: News): void;
  onDelete(id: string): void;
  handleEditStart(item: News): void;
}

export const NewsListItem: FC<NewsItemProps> = ({ newsItem, handleEditStart, onDelete }) => {
  return (
    <motion.div
      className={styles.newsItem}
      layout
      initial={{
        y: 46,
        scale: 0.3,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      exit={{
        y: 46,
        scale: 0.3,
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <div className={styles.textInfo}>
        <div className={styles.titleNews}>{newsItem.title}</div>
        <div className={styles.infoNews}>{newsItem.content}</div>
      </div>
      <div className={styles.buttonCardBlock}>
        <div className={styles.iconButton} onClick={() => onDelete(newsItem.id)}>
          <IconTrash />
        </div>
        <div className={styles.iconButton} onClick={() => handleEditStart(newsItem)}>
          <IconEdit />
        </div>
      </div>
    </motion.div>
  );
};

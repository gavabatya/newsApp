import { FC, Fragment, useState, useEffect, RefObject } from 'react';

import styles from './styles.module.scss';
import { NewsListItem } from './NewsListItem.tsx';

import { News } from '../../types';
import { Modal } from '../Modal';
import { Button } from '../Button';

interface NewsListProps {
  news: News[];
  onUpdate(news: News): void;
  onDelete(id: string): void;
  newsListRef: RefObject<HTMLDivElement | null>;
}

export const NewsList: FC<NewsListProps> = ({ news, onUpdate, onDelete, newsListRef }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const disabled = editTitle === '' || editContent === '';

  const handleEditStart = (item: News) => {
    setEditingNews(item);
    setEditTitle(item.title);
    setEditContent(item.content);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingNews) {
      onUpdate({ ...editingNews, title: editTitle, content: editContent });
      setModalOpen(false);
      setEditingNews(null);
    }
  };

  if (news.length === 0) {
    return (
      <div className={styles.newsList}>
        <div className={styles.newsList__emptyResult}>Новостей пока нет(.</div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.newsList} ref={newsListRef}>
        {news.map((item) => (
          <Fragment key={item.id}>
            <NewsListItem
              newsItem={item}
              handleEditStart={handleEditStart}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </Fragment>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className={styles.titleModal}>Редактировать</h2>
        <input
          className={styles.inputModal}
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <textarea
          className={styles.textareaModal}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        <div className={styles.buttonBlockModal}>
          <Button onClick={handleSave} title="Сохранить" disabled={disabled} />
          <Button onClick={() => setModalOpen(false)} title="Отмена" disabled={disabled} />
        </div>
      </Modal>
    </>
  );
};

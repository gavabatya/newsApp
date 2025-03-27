import * as React from 'react';
import { FC, useState } from 'react';

import styles from './styles.module.scss';

import { News } from '../../types';
import { Button } from '../Button';

interface NewsFormProps {
  onAdd(news: News): void;
}

export const NewsForm: FC<NewsFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const disabled = title === '' || content === '';

  const handleClear = () => {
    setTitle('');
    setContent('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === '' || content === '') return;

    const newNews: News = {
      id: Date.now().toString(),
      title,
      content,
    };
    onAdd(newNews);
    handleClear();
  };

  return (
    <div className={styles.newsForm}>
      <h1 className={styles.newsForm__title}>Новости</h1>
      <form onSubmit={handleSubmit} className={styles.newsForm__form}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
          className={styles.newsForm__input}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Содержание"
          className={styles.newsForm__textarea}
        />
        <div className={styles.buttonBlock}>
          <Button type="submit" disabled={disabled} title="Добавить" />
          <Button onClick={handleClear} disabled={disabled} title="Очистить" />
        </div>
      </form>
    </div>
  );
};

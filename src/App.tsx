import { useCallback, useRef } from 'react';

import { News } from './types';
import { NewsForm, NewsList } from './components';
import { useLocalStorage } from './utils';

const App = () => {
  const [news, setNews] = useLocalStorage<News[]>('news', []);
  const newsListRef = useRef<HTMLDivElement>(null);

  const addNews = useCallback(
    (newNews: News) => {
      if (newsListRef.current) {
        newsListRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
      setNews([newNews, ...news]);
    },
    [news, setNews],
  );

  const updateNews = useCallback(
    (updatedItem: News) =>
      setNews(news.map((item) => (item.id === updatedItem.id ? updatedItem : item))),
    [news, setNews],
  );

  const deleteNews = useCallback(
    (id: string) => setNews(news.filter((item) => item.id !== id)),
    [news, setNews],
  );

  return (
    <div className="containerApp">
      <NewsForm onAdd={addNews} />
      <NewsList news={news} onUpdate={updateNews} onDelete={deleteNews} newsListRef={newsListRef} />
    </div>
  );
};

export default App;

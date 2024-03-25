import React, { useEffect, useState } from 'react';
import EditorList from './EditorList/EditorList';
import api from './api';
import Loader from 'components/Loader';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchTrendingFilms = async () => {
      setLoading(true);
      try {
        const trendingFilms = await api.fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <div style={{ color: 'pink' }}>
        {films && <EditorList films={films} />}
      </div>
      {loading && <Loader />}
    </main>
  );
};

export default HomePage;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import Loader from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = async () => {
      setLoading(true);
      try {
        const actors = await api.fetchActors(movieId);
        setActors(actors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {actors.map(actor => (
          <li
            key={actor.id}
            style={{
              listStyleType: 'none',
              textAlign: 'center',
              color: 'pink',
              width: '200px',
            }}
          >
            <img
              style={{ width: '100%', marginBottom: '10px' }}
              src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
              alt={actor.original_name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

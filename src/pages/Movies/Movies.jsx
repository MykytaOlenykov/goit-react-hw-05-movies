import { useEffect, useState } from 'react';
import SearchMovies from 'components/SearchMovies/SearchMovies';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
  }, [searchQuery]);

  const handleSubmit = newSearchQuery => {
    const normalizedSearchQuery = newSearchQuery.trim();
    setSearchQuery(normalizedSearchQuery);
  };

  return (
    <main>
      <section>
        <SearchMovies onSubmit={handleSubmit} />
      </section>
    </main>
  );
};

export default Movies;

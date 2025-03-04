import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <div>
      <ul>
        {data.map((genres) => (
          <li key={genres.id}>{genres.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;

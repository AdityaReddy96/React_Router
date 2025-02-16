import { useLoaderData } from "react-router-dom";
import { Cards } from "../components/UI/Cards";

export const Movie = () => {
  const moviesData = useLoaderData();
//   console.log(moviesData);
  return (
    <>
      <ul className="container grid grid-four--cols">
        {moviesData.Search.map((currMovie) => {
          return <Cards key={currMovie.imdbID} currMovie={currMovie} />;
        })}
      </ul>
    </>
  );
};

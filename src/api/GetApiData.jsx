export const getMovieData = async () => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

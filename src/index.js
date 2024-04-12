const init = () => {
    const form = document.querySelector("form");
    const movieDetails = document.getElementById("movieDetails");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const input = document.getElementById("searchByID").value;
      const movieId = parseInt(input); // Convert input to an integer
  
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`);
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        const movie = await response.json();
        displayMovieDetails(movie);
      } catch (error) {
        movieDetails.innerHTML = `<p>${error.message}</p>`;
      }
    });
  
    function displayMovieDetails(movie) {
      const title = document.querySelector("#movieDetails h4");
      const summary = document.querySelector("#movieDetails p");
  
      title.textContent = movie.title;
      summary.textContent = movie.summary;
    }
  };
  
  document.addEventListener('DOMContentLoaded', init);
  
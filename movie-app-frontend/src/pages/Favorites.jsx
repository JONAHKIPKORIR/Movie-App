import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard';
import '../css/Favorites.css'

function Favorites() {
    const { favoritesMovies } = useMovieContext(); 

    if (favoritesMovies.length > 0) { // Check if there are favorites
        return (
         <div className='favorites'>
            <h2>These are Your Favorites</h2>
            <div className="movies-grid">
                {favoritesMovies.map((movie) => 
                <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorites At the Moment</h2>
            <p>Add now to Favorites!</p>
        </div>
    );
}

export default Favorites;

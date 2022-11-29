import MovieCard from "./MovieCard"

export default function Movies(props) {
    const {movies = []} = props

    return (
        <div className="movies">
            { movies.length ?
                movies.map((movie) => <MovieCard key={movie.imdbID} {...movie}/>) :
                <h3>Nothing found</h3>
            }
        </div>
    )
}
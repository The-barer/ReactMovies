import { useEffect, useState } from "react"
import Movies from "../components/Movies"
import Preloader from "../components/Preloader"
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const searchMovies = (str = '', type = '') => {
        setIsLoading(true)

        if (type) {
            type = `&type=${type}`
        }

        if (str) {
            str = `&s=${str}`
        }

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}${str}${type}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        setMovies(
            [{
                Title: "TheBarer",
                Year: 1989,
                Poster: "https://avatars.githubusercontent.com/u/65025248?v=4",
                Type: "movie",
                imdbID: "03091989"
            }]
        )
    }, [])

    return (
        <main className="container content">
            <Search searchMovies={searchMovies} />
            {isLoading ? <Preloader /> :
                <Movies movies={movies} />
            }
        </main>
    )


}

export default Main
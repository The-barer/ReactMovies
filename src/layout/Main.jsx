import { Component } from "react"
import Movies from "../components/Movies"
import Preloader from "../components/Preloader"
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    state = {
        movies: [],
        isLoading: true,
        key: API_KEY,
        error: ''
    }

    componentDidMount() {
        this.searchMovies()
    }

    searchMovies = (str = '', type = '') => {
        this.setState({
            isLoading: true
        })
        if (type) {
            type = `&type=${type}`
        }
        if (str) {
            str = `&s=${str}`
        }
        fetch(`https://www.omdbapi.com/?apikey=${this.state.key}${str}${type}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.Search,
                    error: data.Error,
                    isLoading: false
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({ error: err, isLoading: false })})
    }

    render() {
        const { movies, isLoading } = this.state

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {!isLoading ?
                    <Movies movies={movies} /> :
                    <Preloader />
                }
            </main>
        )

    }
}

export default Main
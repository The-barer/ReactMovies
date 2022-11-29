import { useState } from "react";

function Search(props) {
    const {
        searchMovies = Function.prototype
    } = props
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handelType = (event) => {
        setType(event.target.name)
    }

    return (
        <>
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        type="search"
                        className="validate"
                        value={search}
                        onChange={handleSearch}
                        onKeyDown={handleKey}
                    />
                    <button className="btn search-btn" onClick={() => searchMovies(search, type)}>Search</button>
                </div>
                <form action="#" className="checkboxes">
                    <label>
                        <input name="" type="radio" onChange={handelType} checked={type === ''} />
                        <span>All</span>
                    </label>
                    <label>
                        <input name="movie" type="radio" onChange={handelType} checked={type === 'movie'} />
                        <span>Movies</span>
                    </label>

                    <label>
                        <input name="series" type="radio" onChange={handelType} checked={type === 'series'} />
                        <span>Series</span>
                    </label>

                    <label>
                        <input name="game" type="radio" onChange={handelType} checked={type === 'game'} />
                        <span>Games</span>
                    </label>
                </form>
            </div>
        </>
    )
}

export default Search
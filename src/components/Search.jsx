import { Component } from "react";

class Search extends Component {
    state = {
        search: '',
        type: ''
    }

    searchFunction = () => {
        this.props.searchMovies(this.state.search, this.state.type)
    }

    handleKey = event => {
        if (event.key === 'Enter') {
            this.searchFunction()
        }
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handelCheckboxes = (event) => {
        this.setState({
            type: event.target.name
        }) 
    }
    render() {
        const { search, type } = this.state

        return (
            <>
                <div className="row">
                    <div className="input-field">
                        <input
                            placeholder="Search"
                            type="search"
                            className="validate"
                            value={search}
                            onChange={this.handleSearch}
                            onKeyDown={this.handleKey}
                        />
                        <button className="btn search-btn" onClick={this.searchFunction}>Search</button>
                    </div>
                <form action="#" className="checkboxes">
                    <label>
                        <input name="" type="radio" onChange={this.handelCheckboxes} checked={type === ''} />
                        <span>All</span>
                    </label>
                    <label>
                        <input name="movie" type="radio" onChange={this.handelCheckboxes} checked={type === 'movie'}/>
                        <span>Movies</span>
                    </label>

                    <label>
                        <input name="series" type="radio" onChange={this.handelCheckboxes} checked={type === 'series'}/>
                        <span>Series</span>
                    </label>

                    <label>
                        <input name="game" type="radio" onChange={this.handelCheckboxes} checked={type === 'game'}/>
                        <span>Games</span>
                    </label>
                </form>
                </div>
            </>
        )
    }
}

export default Search
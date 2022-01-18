import { Component } from "react";

class Movies extends Component{
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: {},
            displayMovie: false,
        }
    }

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(res => res.json())
        .then(data => this.setState({movies: data}))
    }

    componentDidMount = () => {
        this.fetchMovies();
    }

    handleSelectedMovie = (e) => {
        let selectedMovieObj = this.state.movies.find(movie => {
            return movie.id === e.target.value;
        })

        this.setState({
            selectedMovie: selectedMovieObj,
            displayMovie: !selectedMovieObj ? false : true,
        })
    }

    render() {
        let displayMovieTitle = this.state.movies.map(movie => {
            return <option key={movie.id} value={movie.id}>{movie.title}</option>
        })

        let {selectedMovie} = this.state;

        return(
            <div className="movies">
                <h1>Select a Movie</h1>
                <select onChange={this.handleSelectedMovie}>
                    <option></option>
                    {displayMovieTitle}
                </select>
                {this.state.displayMovie ? 
                (<div className="movie-container"> 
                    <h2>Title: {selectedMovie.title}</h2>
                    <h2>Release Date: {selectedMovie.release_date}</h2>
                    <p><strong>Description:</strong> {selectedMovie.description}</p>
                </div>) : null
                }
            </div>
        )
    }
}

export default Movies;
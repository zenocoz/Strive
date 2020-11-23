import React from "react"

class Movie extends React.Component {
  state = {
    movieDetails: [],
    loading: true,
  }
  componentDidMount = async () => {
    console.log("Movie re-rendered")

    //ajax are best into componentDidMount

    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=a0871843&s=" + this.props.movieTitle
      )
      if (response.ok) {
        let results = await response.json()
        console.log(results)
        setTimeout(() => {
          this.setState({ movieDetails: results.Search[0], loading: false })
        }, 1000) //milliseconds
      } else {
        console.log("AN ERROR HAPPENED")
        this.setState({ loading: false })
      }
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.loading ? "Loading..." : this.state.movieDetails.Title}
        </h1>
        {this.state.movieDetails.Poster && (
          <img
            src={this.state.movieDetails.Poster}
            alt="movie-poster"
            style={{ width: "200px" }}
          />
        )}
      </div>
    )
  }
}

export default Movie

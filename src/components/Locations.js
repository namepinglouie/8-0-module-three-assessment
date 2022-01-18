import { Component } from "react";

class Locations extends Component{
    constructor() {
        super();
        this.state = {
            locationArr: [],
            showLocation: false
        }
    }

    fetchLocations = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res => res.json())
        .then(data => this.setState({locationArr: data}))
    }

    componentDidMount = () => {
        this.fetchLocations();
    }

    handleShowLocation = (e) => {
        e.preventDefault();

        this.setState({
            showLocation: true
        })
    }

    handleHideLocation = () => {
        this.setState({
            showLocation: false
        })
    }

    render() {
        let displayAllLocations = this.state.locationArr.map(location => {
            return (
                <li key = {location.id}>
                    <h3>Name: {location.name}</h3>
                    <h3>Climate: {location.climate}</h3>
                    <h3>Terrain: {location.terrain}</h3>
                </li>
            )
        })

        return(
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.handleShowLocation}>Show Locations</button>
                <button onClick={this.handleHideLocation}>Hide Locations</button>
                <ul>                    
                    {this.state.showLocation ? displayAllLocations: null}
                </ul>
            </div>
        )
    }
}

export default Locations;
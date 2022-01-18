import { Component } from "react";

class People extends Component{
    constructor() {
        super();
        this.state = ({
            userInput: "",
            peopleArr: [],
            selectedPerson: {},
            displayPerson: false
        })
    }

    fetchPerson = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(data => this.setState({peopleArr: data}))
    }

    componentDidMount = () => {
        this.fetchPerson();
    }

    handleInput = (e) => {
        this.setState({
            userInput: e.target.value,
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        let searchedPersonObj = this.state.peopleArr.find(person => {
            return person.name === this.state.userInput;
        })

        this.setState({
            selectedPerson: searchedPersonObj,
            displayPerson: !searchedPersonObj ? false : true,
        })

        console.log(searchedPersonObj);
    }

    render() {
        return(
            <div className="people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSearch}>
                    <input type="text" 
                           placeholder="Find Your Person"
                           onChange={this.handleInput}
                           value={this.state.userInput}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    { this.state.displayPerson ? ( 
                        <div>
                            <h2>Name: {this.state.selectedPerson.name}</h2>
                            <h2>Age: {this.state.selectedPerson.age}</h2>
                            <h2>Gender: {this.state.selectedPerson.gender}</h2>
                        </div>
                    ) : null }
                    {
                        !this.state.selectedPerson && <h1>Not Found</h1>
                    }
                </div>
            </div>
        )
    }
}

export default People;
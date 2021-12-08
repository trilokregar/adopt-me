import { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';
import Results from './Results';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

class SearchParams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: props.location,
            animal: props.animal,
            breed: props.breed,
            pet: [],
            breeds: "animal",
            theme: props.theme,
        };
    }

    // in place of useEffect(after render)= componentDidMount + componentDidUpdate //
    componentDidMount() {
        requestPets();
    }
    componentDidUpdate() {
        requestPets();
    }

    requestPets() {
        var res = fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();

        this.setState({ pet: json.pets });
    }


    render() {
        return (
            <div className="search-params">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        requestPets();
                    }}
                >
                    {/* location */}
                    <label htmlFor="location">
                        Location
                        <input
                            id="location"
                            onChange={(e) => {
                                let state = this.state;
                                state.location = e.target.value;
                                this.setState(state);
                            }}
                            value={this.state.location}
                            placeholder="Location"

                        />
                    </label>

                    {/* animal */}
                    <label htmlFor="animal">
                        animal
                        <select
                            id="animal"
                            value={this.state.animal}
                            onChange={(e) => {
                                let state = this.state;
                                state.animal = e.target.value;
                                this.setState(state);
                            }}
                            onBlur={(e) => {
                                let state = this.state;
                                state.animal = e.target.value;
                                this.setState(state);
                            }}
                        >
                            <option id="nullSelection" />
                            {
                                ANIMALS.map((animal) => (
                                    <option value={this.state.animal} key={this.state.animal}>
                                        {this.state.animal}
                                    </option>
                                ))
                            }
                        </select>
                    </label>

                    {/* breed */}
                    <label htmlFor="breed">
                        Breed
                        <select
                            id="breed"
                            value={this.state.breed}
                            onChange={(e) => {
                                let state = this.state;
                                state.breed = e.target.value;
                                this.setState(state)
                            }}
                            onBlur={(e) => {
                                let state = this.state;
                                state.breed = e.target.value;
                                this.setState(state);
                            }}
                        >
                            <option id="nullSelection" />

                            {
                                breeds.map((breed) => (
                                    <option value={this.state.breed} key={this.state.breed}>
                                        {this.state.breed}
                                    </option>
                                ))
                            }
                        </select>
                    </label>

                    {/* theme */}
                    <label htmlFor="theme">
                        Theme
                        <select value={this.state.theme}
                            onChange={(e) => {
                                let state = this.state;
                                state.theme = e.target.value;
                                this.setState(state);
                            }}
                            onBlur={(e) => {
                                let state = this.state;
                                state.theme = e.target.value;
                                this.setState(state);
                            }} >
                            <option value="darkblue">Dark Blue</option>
                            <option value="peru">Peru</option>
                            <option value="chartreuse">Chartreuse</option>
                            <option value="mediumorchid">Medium Orchid</option>
                            <option value="red">Red</option>
                        </select>
                    </label>

                    <button style={{ backgroundColor: theme }}>Submit</button>
                </form>

                <Results pets={pets} />

            </div >
        );
    }

}

export default SearchParams;
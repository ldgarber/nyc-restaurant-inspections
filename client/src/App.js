import React, { Component } from 'react';
import SelectedRestaurants from './SelectedRestaurants'; 
import RestaurantSearch from './RestaurantSearch'; 
import './App.css';

class App extends Component {
  state = {
    selectedRestaurants: [],  
  }

  removeRestaurantItem = (itemIndex) => {
    const filteredRestaurants = this.state.selectedRestaurants.filter(
       (item, idx) => itemIndex !== idx,  
        ); 
    this.setState({ selectedRestaurants: filteredRestaurants }); 
  }

  addRestaurant = (restaurant) => {
    const newRestaurants = this.state.selectedRestaurants.concat(restaurant); 
    this.setState({ selectedRestaurants: newRestaurants }); 
  }

  render() {
    const { selectedRestaurants } = this.state; 

    return (
      <div className="App">
        <div className="ui text container">
          <SelectedRestaurants
            restaurants={selectedRestaurants}
            onRestaurantClick={this.removeRestaurantItem}
          />
          <RestaurantSearch
            onRestaurantClick={this.addRestaurant}
          />
        </div>
      </div>
    );
  }
}

export default App;

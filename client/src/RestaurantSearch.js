import React from 'react'; 
import Client from './Client'; 

const MATCHING_ITEM_LIMIT = 25; 

class RestaurantSearch extends React.Component {
  state = {
    restaurants: [], 
    showRemoveIcon: false, 
    searchValue: '', 
  }

  handleSearchChange = (e) => {
    const value = e.target.value; 

    this.setState({
      searchValue: value,  
    }); 

    if (value === '') {
      this.setState({
        restaurants: [], 
        showRemoveIcon: false, 
      });  
    } else {
      this.setState({
        showRemoveIcon: true,  
      });  

      Client.search(value, (restaurants) => {
        this.setState({
          restaurants: restaurants.slice(0, MATCHING_ITEM_LIMIT),  
        });  
      }); 
    }
  }; 

  handleSearchCancel = () => {
    this.setState({
      restaurants: [], 
      showRemoveIcon: false, 
      searchValue: '', 
    });  
  }; 

  render() {
    const { showRemoveIcon, restaurants } = this.state;  
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' }; 

    const restaurantRows = restaurants.map((restaurant, idx) => (
      <tr 
        key={idx}
        onClick={() => this.props.onRestaurantClick(restaurant)}
      >
        <td>{restaurant.name}</td>
        <td className='right aligned'>{restaurant.address}</td>
        <td className='right aligned'>{restaurant.violation_description}</td>
        <td className='right aligned'>{restaurant.score}</td>
        <td classname='right aligned'>{restaurant.grade}</td>
      </tr>
    )); 

    return (
      <div id='restaurant-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search restaurants...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  <i 
                    className='remove icon'
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Name</th>
              <th>Address</th>
              <th>Violation(s)</th>
              <th>Score (Lower=Better)</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {restaurantRows}
          </tbody>
        </table>
      </div>
    ); 
  }
}

export default RestaurantSearch; 

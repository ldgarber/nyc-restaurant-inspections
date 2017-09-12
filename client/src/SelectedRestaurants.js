import React from 'react'; 

export default function SelectedRestaurants(props) {
  const { restaurants } = props; 

  const restaurantRows = restaurants.map((restaurant, idx) => (
    <tr 
       key={idx}
       onClick={() => props.onRestaurantClick(idx)}
    >
      <td>{restaurant.name}</td>
      <td className='right aligned'>{restaurant.address}</td>
      <td className='right aligned'>{restaurant.violation_description}</td>
      <td className='right aligned'>{restaurant.score}</td>
      <td classname='right aligned'>{restaurant.grade}</td>
    </tr>
  )); 

  return (
     <table className='ui selectable structured large table'>
      <thead>
        <tr>
          <th colSpan='5'>
            <h3>Selected restaurants</h3>
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
  ); 
}

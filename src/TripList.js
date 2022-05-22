import React from 'react';

const TripList = ({ trips }) => {
  return (
    <div className="blog-list">
      {trips.map(trip => (
        <div className="blog-preview" key={trip.id} >
            <h2>{ trip.route }</h2>
            <p>Companion(s): { trip.companion }</p>
            <p>Description: { trip.preference }</p>
        </div>
      ))}
    </div>
  );
}
 
export default TripList;
import React from 'react';
import TripList from "./TripList";
import useFetch from "./useFetch";

const Trips = () => {
  const { error, isPending, data: trips } = useFetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/climbing-app-vbozf/endpoint/get_trip')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { trips && <TripList trips={trips} /> }
    </div>
  );
}
 
export default Trips;
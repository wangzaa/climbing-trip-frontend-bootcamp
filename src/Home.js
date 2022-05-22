import React from 'react';
import RouteList from "./RouteList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: routes } = useFetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/climbing-app-vbozf/endpoint/get_route')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { routes && <RouteList routes={routes} /> }
    </div>
  );
}
 
export default Home;
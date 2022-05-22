import React from 'react';

const RouteList = ({ routes }) => {
  return (
    <div className="blog-list">
      {routes.map(route => (
        <div className="blog-preview" key={route.id} >
            <h2>{ route.Route }</h2>
            <p>Country: { route.Country }</p>
            <p>Description: { route.Description }</p>
            <p>YDS: { route.YDS }</p>
        </div>
      ))}
    </div>
  );
}
 
export default RouteList;
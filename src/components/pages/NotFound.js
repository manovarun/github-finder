import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exists</p>
      <p>
        Click <Link to="/">Here</Link> to Go Home
      </p>
    </div>
  );
};

export default NotFound;

import { useEffect } from 'react';

export const App = () => {

  useEffect(() => {
    fetch('http://localhost:6543')
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Error fetching data:', error));

  }, [])

  return (
    <div className="app">
         Hello React
    </div>
  );
};

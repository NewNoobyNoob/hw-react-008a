// React Router: https://reactrouter.com/en/main
// npm install react-router-dom
// although routes are the same components from syntax point of view, but as the have specific purpose we need to create for routes, to be correct for pages the routes will be used a seperate folter called pages, while for the routes specific js file is created called router.js

import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div>
      {/* <h1>Hello Friend!</h1> */}
      <RouterProvider router={createBrowserRouter(router)} />

    </div>
  );
}

export default App;

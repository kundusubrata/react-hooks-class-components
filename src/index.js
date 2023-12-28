// ---------------------- React Hooks ------------------


// import React, { createContext } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const Context = createContext();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Context.Provider value={"Krishna"}>
//       <div>
//         <App />
//       </div>
//     </Context.Provider>
//   </React.StrictMode>
// );

// export { Context };




// ---------------------- React Class Based Componnents ------------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <div>
        <App />
      </div>
  </React.StrictMode>
);

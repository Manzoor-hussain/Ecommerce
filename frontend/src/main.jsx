// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';

// import { AuthProvider } from './utils/AuthContext'; 
// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider> {/* Wrap the entire application with AuthProvider */}
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
//ReactDOM.createRoot(document.getElementById("root")).render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

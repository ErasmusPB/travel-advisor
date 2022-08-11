import React from 'react';
import ReactDom from 'react-dom'
import App from './App';

//React 17 approach

ReactDom.render(<App />, document.getElementById('root'));

//React 18 approach

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

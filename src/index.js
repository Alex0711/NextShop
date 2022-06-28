import React from "react";
import ReactDOM from "react-dom";
import App from './router/App';

ReactDOM.render(<App />, document.getElementById('app'));

//------------------------ Una sintaxis nueva dicen los comentarios ------------------------------

// import { createRoot } from'react-dom/client';
// import App from'./routes/App';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<Apptab="Home" />);
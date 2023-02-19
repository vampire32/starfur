import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HelmetProvider} from "react-helmet-async"
import { hydrate, render } from "react-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// function tick() {
// 	const element = (
// 		<HelmetProvider>
// 			<App />
// 		</HelmetProvider>
// 	);
// 	root.render(element);
// }

// setInterval(tick, 1000);
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	hydrate(
		<HelmetProvider>
			<App />
		</HelmetProvider>,

		rootElement
	);
} else {
	render(
		<HelmetProvider>
			<App />
		</HelmetProvider>,
		rootElement
	);
}





//  ReactDOM.render(
//    <React.StrictMode>
// <HelmetProvider>
//    <App />
//    </HelmetProvider>

//    </React.StrictMode>,
//    document.getElementById('root')
//  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

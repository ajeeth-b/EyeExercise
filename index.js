'use strict';

import App from "./app.js";

const rootElement = document.querySelector('#app');

const e = React.createElement
ReactDOM.render(e(App), rootElement);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Questions from './components/QuestionsContext';

import 'antd/dist/antd.less';

import './styles/index.less';
import './styles/modifiedAntd.less';

ReactDOM.render(
	<React.StrictMode>
		<Questions>
			<App />
		</Questions>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

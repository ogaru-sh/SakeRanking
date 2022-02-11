import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.css';
// import { App } from './components/page/Top/App';
// import { PokerField } from './components/page/ScenarioCreate/PokerField';
import { Home } from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

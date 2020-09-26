import React, {ReactElement} from 'react';
import './App.css';
import Home from './components/layout/Home'
import Banner from './components/navigation/Banner'

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render(): ReactElement {
    return (
      <div className="App">
        <header className="app-header">
          <Banner />
        </header>
        <body className="app-body">
          <Home/>
        </body>
      </div>
    );
  }
}


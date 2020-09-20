import React, {ReactElement} from 'react';
import './App.css';
import Home from './components/Home'

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render(): ReactElement {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Home/>
        </body>
      </div>
    );
  }
}


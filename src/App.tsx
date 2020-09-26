import React, {ReactElement} from 'react';
import './App.css';
import './util/padding-util.css'
import Home from './components/layout/Home'
import Banner from './components/navigation/Banner'

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render(): ReactElement {
    return (
      <div className="App">
        <a className="skip-link" href="#main">Skip to main</a>
        <header className="app-header">
          <Banner title={process.env.REACT_APP_TITLE as string}/>
        </header>
        <main id="main" className="app-body" role="main">
          <Home/>
        </main>
      </div>
    );
  }
}

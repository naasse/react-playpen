import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './util/padding-util.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Banner from './components/navigation/Banner';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render(): ReactElement {
    return (
      <BrowserRouter basename={process.env.REACT_APP_CONTEXT}>
        <div className="App">
          <a className="skip-link" href="#main">Skip to main</a>
          <header className="app-header">
            <Banner title={process.env.REACT_APP_TITLE as string} />
          </header>
          <main id="main" className="app-body" role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

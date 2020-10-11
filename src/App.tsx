import React, { ReactElement } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import './util/icons.css';
import './util/padding-util.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Banner from './components/navigation/Banner';
import { HashLink } from 'react-router-hash-link';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

type Props = Record<string, unknown>;
type State = Record<string, unknown>;

export default class App extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="App">
        <HashRouter>
          {/* TODO - this no longer works with HashRouter. Fix for accessibility. */}
          <HashLink className="skip-link" to="/home#main">Skip to content</HashLink>
          <header className="app-header">
            <Banner title={process.env.REACT_APP_TITLE as string} />
          </header>
          <main id="main" className="app-body" role="main">
            <Route render={({ location }): ReactElement => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames="fade"
                  timeout={600}>
                  <Switch location={location}>
                    <Route name="home" exact path="/home" component={Home} />
                    <Route name="about" path="/about" component={About} />
                    <Route render={(): ReactElement => <Redirect to="/home" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </main>
        </HashRouter>
      </div>
    );
  }
}

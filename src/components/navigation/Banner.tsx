import React, {ReactElement} from 'react';
import './Banner.css'

type Props = {};
type State = {};

export default class Banner extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="Banner">
        <img src={require("../../assets/logo.png")} className="logo" alt="Logo" />
        <nav className="nav">
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
        </nav>
      </div>
    );
  }
}


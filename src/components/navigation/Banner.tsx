import React, { ReactElement } from 'react';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

type Props = { title: string };
type State = {};

export default class Banner extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="Banner">
        <img src={require("../../assets/logo.png")} className="logo" alt="Logo" />
        <span className="title">{this.props.title}</span>
        <nav className="nav">
          <a href="https://github.com/naasse" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
            Github
          </a>
          <a href="/">???</a>
          <a href="/">???</a>
        </nav>
      </div>
    );
  }
}

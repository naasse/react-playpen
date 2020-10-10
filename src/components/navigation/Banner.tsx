import React, { ReactElement } from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

type Props = { title: string };
type State = Record<string, unknown>;

export default class Banner extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="Banner">
        <img src={require("../../assets/logo.png")} className="logo" alt="Logo" />
        <span className="title">{this.props.title}</span>
        <nav className="full-nav nav">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://github.com/naasse" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
            Github
          </a>
        </nav>
        <nav className="overflow-nav nav">
          <a>
            <FontAwesomeIcon icon={faBars} className="anchor-icon" />
          </a>
        </nav>
      </div>
    );
  }
}

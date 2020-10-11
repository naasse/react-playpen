import React, { ReactElement } from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

type Props = { title: string };
type State = { showOverflowMenu: boolean; overflowMenuClass: string };

export default class Banner extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
    this.state = {
      showOverflowMenu: false,
      overflowMenuClass: "overflow-menu overflow-closed"
    };
    this.toggleOverflow = this.toggleOverflow.bind(this);
  }

  toggleOverflow (): void {
    this.setState({
      showOverflowMenu: !this.state.showOverflowMenu,
      overflowMenuClass: this.state.showOverflowMenu ? "overflow-menu overflow-closed" : "overflow-menu"
    });
  }

  // TODO - combine the list of links into an array and iterate through when rendering.
  // Prevents repeating ourselves.
  render(): ReactElement {
    return (
      <div className="Banner">
        <div className="bannerNav">
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
            <button className="button-icon" onClick={this.toggleOverflow}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </nav>
        </div>
        <div className={this.state.overflowMenuClass}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://github.com/naasse" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
                  Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

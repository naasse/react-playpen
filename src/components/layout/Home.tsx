import React, { ReactElement } from 'react';
import './Home.css'

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="Home">
        <p>
          Hello, world!
        </p>
        <p>
          This repository exists as a React playpen to simply play with website design
          that I simply haven't tested yet. It is not meant to be a true tool, useful,
          or demoed really. It's just a place for me to stay up to date and implement
          cool things I may happen to read about.
        </p>
        <p>
          Cheers!
        </p>
      </div>
    );
  }
}

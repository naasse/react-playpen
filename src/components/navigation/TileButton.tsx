import React, { ReactElement } from 'react';
import './TileButton.css';

type Props = { text: string };
type State = {};

export default class TileButton extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <button className="TileButton">
        {this.props.text}
      </button>
    );
  }
}

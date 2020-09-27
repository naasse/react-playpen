import React, { ReactElement } from 'react';
import './TileButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { isNil } from 'lodash';

type Props = { text: string, icon?: IconDefinition };
type State = {};

export default class TileButton extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <button className="TileButton">
        <span className="tile-text">
          {this.props.text}
        </span>
        {!isNil(this.props.icon) &&
          <div>
          <FontAwesomeIcon icon={this.props.icon as IconDefinition} className="tile-icon fa-2x" />
          </div>
        }
      </button>
    );
  }
}

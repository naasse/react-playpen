import React, { ReactElement } from 'react';
import './Home.css';
import TileButton from '../navigation/TileButton';
import { faGamepad, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

type Props = Record<string, unknown>;
type State = Record<string, unknown>;

export default class Home extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="Home">
        <h1>
          Hello world!
        </h1>
        <section>
          <div className="tile-containers">
            <TileButton text="Checkers" icon={faGamepad} />
            <TileButton text="???" icon={faQuestionCircle} />
            <TileButton text="???" icon={faQuestionCircle} />
          </div>
        </section>
      </div>
    );
  }
}

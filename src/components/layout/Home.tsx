import React, {ReactElement} from 'react';
import './Home.css'

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="Home">
        Hello, world!
      </div>
    );
  }
}

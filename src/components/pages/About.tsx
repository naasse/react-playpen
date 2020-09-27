import React, { ReactElement } from 'react';
import './About.css';

type Props = Record<string, unknown>;
type State = Record<string, unknown>;

export default class About extends React.Component<Props, State> {

  render(): ReactElement {
    return (
      <div className="About">
        <h1>
          About
        </h1>
        <section>
          <p>
            This repository exists as a React playpen to simply play with website design
            that I simply haven't tested yet. It is not meant to be a true tool, useful,
            or demoed really. It's just a place for me to stay up to date and implement
            cool things I may happen to read about.
          </p>
          <p>
            Cheers!
          </p>
        </section>
        <h2>Okay, so now what?</h2>
        <section>
          <p>
            My initial work was just researching CSS grid, basic transitions, and accessibility.
            Next, I'd like to build something complex enough to be a challenge, but still fun.
            My plan is a simple checkers game, then see if I can network this.
            That's something I've never done - so I'm not sure if it'll even be possible (wihtout server side logic).
            For now I'm just hosting on github pages, and I'd like all functionality to work there.
          </p>
          <p>
            Following that, I'll probably work on some basic CSS animations, and maybe better responsive media CSS.
          </p>
          <p>
            Finally, I'll at least do some basic internationalization (i18n).
          </p>
        </section>
      </div>
    );
  }
}

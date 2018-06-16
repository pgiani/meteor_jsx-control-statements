// Main
import React from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
  class Main extends React.Component {
    render() {
      return (
        <div>
          Before IF
          <br />
          <br />
          <If condition={false}>
            <span>SHOULD NOT SHOW</span>
          </If>
          <br />
          <br />
          After IF
        </div>
      );
    }
  }
  render(<Main />, document.querySelector('.MyApp'));
});

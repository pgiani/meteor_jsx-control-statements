// Main
import React from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
  class Main extends React.Component {
    render() {
      return (
        <div>
          <If condition={false}>
            <span>SHOULD NOT SHOW</span>
          </If>
        </div>
      );
    }
  }

  render(<Main />, document.querySelector('.MyApp'));
});

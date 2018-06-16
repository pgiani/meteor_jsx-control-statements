// Main
import React from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
  class Main extends React.Component {
    render() {
      return <div>hello</div>;
    }
  }

  render(<Main />, document.querySelector('.MyApp'));
});

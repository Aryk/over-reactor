import * as React from 'react';
import * as Helmet from 'react-helmet';
const s = require('./style.css');

class About extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.about}>
        <Helmet
          title="About"
          meta={[{property: 'og:title', content: 'About'}]} />
        <h4>About</h4>
      </div>
    );
  }
}

export { About }

import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';

const Home = () => (
  <div>
    <FormattedMessage id="app.content" defaultMessage="Learn React" />
    <FormattedMessage
      id="app.channel.plug"
      defaultMessage="Video brought to you by Coding with Chaim"
      values={{channelName: 'Coding with Chaim'}}
    />
    <FormattedMessage
      id="app.header"
      defaultMessage="Edit <code>src/App.js</code> js and save to reload."
      values={{
        fileName: 'src/App.js',
        'my-tag': fileName => <strong>{fileName}</strong>,
      }}
    />
    <br />
    <FormattedDate
      value={Date.now()}
      year="numeric"
      month="long"
      day="numeric"
      weekday="long"
    />
  </div>
);

export {Home};

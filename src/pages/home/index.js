import React from 'react';
import {FormattedMessage} from 'react-intl';

const Home = () => (
  <div>
    <FormattedMessage id="app.content" defaultMessage="Learn React" />
    <FormattedMessage
      id="app.channel.plug"
      defaultMessage="Video brought to you by Coding with Chaim"
      values={{channelName: 'Coding with Chaim'}}
    />
  </div>
);

export {Home};

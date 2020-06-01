import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';

import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en';

const selectOne = new Intl.PluralRules('en-US').select(0);
console.log('xxx selectOne', selectOne)

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
      defaultMessage="Edit <my-tag>src/App.js</my-tag> js and save to reload."
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

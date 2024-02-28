import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Chat = () => (
  <div>
    <Helmet title="Chat in Lojban language - la.jbotcan." meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div  className={cx('paragraph')}>
      <h1 className={cx('heading')}>Chat in Lojban language</h1>
        <p>Lojban is a living language, and you can contact experts in Lojban in a chat.<br/>A popular way of joing the Lojban chat is to use the free <a target="_blank" href="https://telegram.org">Telegram messenger</a>.</p>
        <ul><li>Type "@lojbo" in the search inside Telegram messenger,</li><li>get a channel with the main links to Lojban channels.</li><li>Here are some of them:</li></ul>
      <h2><img className={cx('ralju_pixra')} src="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/logo-24.png?raw=true"/>&nbsp;la lojban - "Lojban"</h2>
        <p>The main Lojban channel.</p>
      <h2><img src="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/jduli-24.png?raw=true" alt="jduli"/>&nbsp;la ckule - "School"</h2>
        <p>Channel where you ask questions about Lojban and get answers from fluent knowledgeable speakers.<br/>
        Fun fact: this is the symbol of <i>jelly</i> called <b>lo jduli</b> in Lojban {'('}pronounced as <i>loh zhdooh-leeh</i>{')'}, which rhymes with <b>lo ckule</b>, <i>school</i> {'('}<i>loh shkooh-leh</i>{')'}</p>
      <h2><img src="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/slack-24.png?raw=true" alt="slack"/>&nbsp;Joining via Slack</h2>
        <p>Using this method you will be able to read the history of the chat for the last ~7 days or so. Note that joining via Telegram or Slack leads you to the same chat so you can use either of those two messengers.</p>
        <ul>
        <li>Open <a href="https://slaka.herokuapp.com">slaka.herokuapp.com</a>, submit your email and get an invite to <a href="https://lojban.slack.com">lojban.slack.com</a> to your e-mail inbox.</li>
        <li>Open <a href="https://lojban.slack.com">lojban.slack.com</a>.</li>
        <li>Ask questions on Lojban in #ckule channel, talk in or about Lojban in #lojban channel and talk only in Lojban in #jbosnu channel.</li>
        </ul>
    </div>
  </div>
)

export default Chat;

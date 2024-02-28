import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Speed of thought" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Speed of thought</h1>
    <div className={cx('content-panel', 'paragraph')}>
    <p>
      A language with only two words
      <Mupli sefanva="be'uro'o" xefanva="I'm hungry!"/> and
      <Mupli sefanva="be'unairo'o" xefanva="I'm not hungry!"/>
      would probably provide the highest speed of thought.
    </p>
    </div>
  </div>
)

export default Comp;

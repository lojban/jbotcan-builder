import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {
  Valsi,
  Vlavla,
  Url,
  Mupli,
  PrituPixra
} from './selfu/sutysisku.js';
const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Meaning of {le} and {lo}" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Meaning of {'{'}lo{'}'} and {'{'}lo{'}'}</h1>
    <div className={cx('content-panel', 'paragraph', 'kuku')}>
      What is the meaning of {'{'}le{'}'}?<br/>
      {'{'}ra voi{'}'}
    </div>
  </div>
)

export default Comp;

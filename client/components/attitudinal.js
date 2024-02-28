import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Use attitudinals instead of full phrases in Lojban language?" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Common phrases and their short equivalents</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <p>Here are some most common phrases in Lojban. Let's rephrase them making them shorter. Maybe this rephrasing will catch on.</p>
      <Mupli sefanva="mi na djuno lo du'u makau broda" xefanva="su'o da i'u nai broda"/>
      <Mupli sefanva="mi djica lo nu broda" xefanva="au broda"/>
      <Mupli sefanva="mi na birti lo du'u broda" xefanva="broda ju'o cu'i"/>
      <Mupli sefanva="mi na birti lo du'u broda" xefanva="broda ia cu'i"/>
      <Mupli sefanva="cumki fa lo nu broda" xefanva="la'a broda"/>
      <Mupli sefanva="cumki fa lo nu broda" xefanva="ju'o cu'i broda"/>
      <Mupli sefanva="mi nelci lo nu broda" xefanva="iu broda"/>
    </div>
  </div>
)

export default Comp;

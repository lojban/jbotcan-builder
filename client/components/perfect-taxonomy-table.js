import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/table.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Perfect taxonomy of live beings (table)" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1 className={cx('bar')}>Perfect taxonomy of live beings (table)</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <p>
        April 14, 2017
      </p>

    </div>
  </div>
)

export default Comp;

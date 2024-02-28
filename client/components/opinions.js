import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Lojban - opinions" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Lojban - opinions</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <p>A rather absurd opinion is expressed by R.L. Trask and Peter Stockwell in their 2007's edition of 'Language and Linguistics: The Key Concepts (Key Guides)':</p>
      <blockquote>
        <p>The linguist Marc Okrand was commissioned to invent a Klingon language for the Star Trek films, and there are now Klingon translations of the Bible and Shakespeare. Lastly, loglangs (logical languages) such as computer-programming languages can have a practical purpose, though most (like ‘Loglan’ and its descendant ‘Lojban’ maintained by the Logical Language Group) display a fundamental wrong-headedness about what a language is and what it is used for.</p>
      </blockquote>
    </div>
  </div>
)

export default Comp;

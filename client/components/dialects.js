import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Dialects of Lojban" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Dialects of Lojban</h1>
    <div className={cx('content-panel', 'paragraph')}>
    <p>
      <ol>
        <li>Most common dialect of Lojban is "Lojban in use". E.g. the reference grammar book doesn't mention how to say "Good morning" but it contains enough grammar, which used together with the core wordlist can provide enough options to say "Good morning" depending on what it means for you.</li>
        <li>Other dialects extensively use new words not in the core wordlist. E.g. to describe properties of black holes in outer space.</li>
        <li>Other dialects use new rules of grammar that are not possible in the core wordlist, use words that follow these new grammar rules.</li>
        <li>Other dialects change the meaning of existing words (especially words that are engaged in forming the structure of formal grammar).</li>
      </ol>
    </p>
    </div>
  </div>
)

export default Comp;

import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Perfect taxonomy of live beings" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1 className={cx('bar')}>Perfect taxonomy of live beings (April 1 aftershocks)</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <p>
        April 14, 2017
      </p>
      <p>
        Let's take taxonomy run by NCBI.
      </p>
      <h2>Approach 1</h2>
      <p>
        <b>.ence-</b> pseudoprefix for id of a taxon provides us with around than 800 000 taxa.
      </p>
      <p>
        <b>.encesoxanoxa</b> is a live being of species Homo sapiens (id 9606).<br/>
        <b>.encesomusoze</b> is Bonobo earlier known in Lojban as <b>jbonobo</b>.
      </p>
      <p>
        Definitely, <b>.encesoxabimu</b> (Felis catus, id 9685) is easier to use than <b>zdani mlatu</b>.
      </p>
      <p>
        jbonobo happily got a new name, jboremna can start using it.
      </p>
      <h2>Approach 2</h2>
      <p>
        Another approach is to make an algorithm where Latin names are adapted into Lojban morphology so that back conversion is unambiguous.
      </p>
      <p>
        We've successfully converted &gt;99% of names of species.<br/>
        You can see a table with all those names and a special columns telling whether back conversion from Lojban correctly restores original Latin name. We've ignored distinction between upper and lower case since it's of no importance:
      </p>
      <p>
        <b><a href="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/lojban-taxonomy-in-one-page.tsv">Open table...</a></b>
      </p>
      <h2>Other notes</h2>
      <p>
        Few names haven't been converted:
        <ul>
          <li>Opisthoteuthis sp. B-PCHH2001</li>
          <li>Gautieria sp. HH2221Swiss</li>
        </ul>
      </p>
      <p>
        and only 2,600 other names out of ~800,000. Those are mostly names of subspecies (that can be additionally handled when capital letter abbreviations are found) or ad hoc names that are better to quote with <b>zoi. ... zoi.</b> as provided by Lojban language.
      </p>
      <p>
        la jbovlaste is the main database of Lojban words and soon it will get 800,000 new words.
        <br/><br/><br/>
        <i>&lt;/aftershock&gt;</i>
      </p>
    </div>
  </div>
)

export default Comp;

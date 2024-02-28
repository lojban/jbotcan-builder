import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Vlavla, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Anti = () => (
  <div>
    <Helmet title="Lojban against other languages" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Lojban language against other languages</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <div>
      <ol>
      <li>Bezhta language. In Bezhta language spoken in Dagestan, Caucasus, the word <Vlavla valsi='mi' bangu='Bezhta'/> means <Vlavla valsi='you' bangu='English'/>, the word <Vlavla valsi='do' bangu='Bezhta'/> means <Vlavla valsi='I' bangu='English'/>. In Lojban it's just the reverse!</li>
      <li>French language. In French language the word <Vlavla valsi='glagla'/> means <Vlavla valsi='very cold'/>, in Lojban the word <Vlavla valsi='glagla'/> means <Vlavla valsi='very hot'/>.</li>
      </ol>
      </div>
    </div>
  </div>
)

export default Anti;

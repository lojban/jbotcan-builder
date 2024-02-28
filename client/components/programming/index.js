import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Programming = () => (
  <div>
    <Helmet title="Lojban language forums and resources - la.jbotcan." meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div className={cx('galtu_dasri')}>
      <h1 className={cx('heading')}>Lojban language site - la .jbotcan.</h1>
      <div>
        <p className={cx('cfari')}>Lojban is a language, proposed as a means of knowledge representation and as a bridge between spoken languages, programming languages and the languages of science and math.</p>
        <img className={cx('ralju_pixra')} src="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/lojbangu3.png?raw=true"/>
      </div>
    </div>
    <div className={cx('content-panel')}>
      <div>
        <h2>Boards</h2>
        <div className={cx('margin')}>
          <a href="/jbo/" className={cx('jbo', 'forum')}>
            <span>
              <b>/jbo/</b>
              <br/>
              i e'o do tavla bau la lojban po'o<br/>
            </span>
          </a>
          <a href="/en/" className={cx('en', 'forum')}>
            <span>
              <b>/en/</b>
              <br/>
              Talk in English about Lojban<br/>
            </span>
          </a>
          <a href="/ideas/" className={cx('ideas', 'forum')}>
            <span>
              <b>/ideas/</b>
              <br/>
              Ideas about Lojban<br/>
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2>Lojban stuff</h2>
        <div className={cx('tapla')}>
          <h2>Learning materials</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="https://mw.lojban.org/papri/Lojban_Live_Chat">Chat with Lojbanists!</a>
            </li>
            <li>
              <a href="https://drive.google.com/open?id=0Bxngu1CNj7wdfnh2eXU2TTFJZi1TeDV1cVlqbjl6TWxYbXgwbldRRzRoaFF5ay1oOFlWYVk">Lojban in simple phrases</a>
            </li>
            <li>
              <a href="https://mw.lojban.org/papri/The_Crash_Course_in_Lojban">The Crash Course</a>
            </li>
            <li>
              <a href="https://mw.lojban.org/papri/la_karda">la karda, a distilled overview of the language</a>
            </li>
            <li>
              <a href="https://mw.lojban.org/papri/Lojban_Wave_Lessons">Wave Lessons</a>
            </li>
            <li>
              <a href="https://mw.lojban.org/images/4/46/la_stika.pdf">'Steekah girl', a book with pictures</a>
            </li>
            <li>
              <a href="https://lojban.github.io/cll/">The Complete Lojban Language</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Apps</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="https://la-lojban.github.io/sutysisku/en/">la sutysisku — online dictionary</a>
            </li>
            <li>
              <a href="https://la-lojban.github.io/parser/">Lojban visual text helper (parser)</a>
            </li>
            {/*<li><a href='/jbofihe.cgi'>la jbofihe &mdash; Lojban translator and parser</a></li>*/}
            <li>
              <a href="/sance/">/sance/ — upload/play sound recordings</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Reference</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="/bnf/">BNF grammar</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Board Archives</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="/jbo/arch/res/">/jbo/</a>
            </li>
            <li>
              <a href="/en/arch/res/">/en/</a>
            </li>
            <li>
              <a href="/xamselsku/">xamselsku quote dump</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('tapla')}>
        <h2>Contact</h2>
        <ul className={cx('inner_list')}>
          <li>
            <a href="mailto:gleki.is.my.name@gmail.com">Email jbotcan's admin</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Programming;

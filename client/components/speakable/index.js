import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Speakable = () => (
  <div>
    <Helmet title="Lojban as a speakable language - la.jbotcan." meta={[{
        name: 'Lojban language',
        content: 'natural language, forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div className={cx('galtu_dasri')}>
      <h1 className={cx('heading')}>Lojban as a speakable language</h1>
      <div>
        <p className={cx('cfari')}>Lojban is a spoken language. Here are some tools to help you master it:</p>
        <p className={cx('cfari')}>Get <a href="https://lojban.pw/en/books/learn-lojban/">'Learn Lojban' course</a> now!</p>
        <div className={cx('tapla')}>
          <h2>Other learning materials</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="https://mw.lojban.org/papri/Lojban_Live_Chat">Chat with Lojbanists!</a>
            </li>
            <li>
              <a href="https://drive.google.com/open?id=0Bxngu1CNj7wdfnh2eXU2TTFJZi1TeDV1cVlqbjl6TWxYbXgwbldRRzRoaFF5ay1oOFlWYVk">Lojban in simple phrases</a>
            </li>
            <li>
              <a href="http://ldlework.com/lojban/la-karda/">la karda, a distilled overview of the language</a>
            </li>
            <li>
              <a href="https://mw.lojban.org/papri/Lojban_Wave_Lessons">Wave Lessons</a>
            </li>
            <li>
              <a href="https://mw.lojban.org/images/4/46/la_stika.pdf">'Steekah girl', a book with pictures</a>
            </li>
            <li>
              <a href="https://la-lojban.github.io/uncll/romoi/xhtml_section_chunks/">The Complete Lojban Language</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Speakable;

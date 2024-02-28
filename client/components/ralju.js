import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Comp = () => (
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
      <h1>Lojban language site</h1>
      <h2>la .jbotcan.</h2>
      <div>
        <p className={cx('cfari')}>Lojban is a language, proposed as a means of knowledge representation and as a bridge between spoken languages, programming languages and the languages of science and math.</p>
        <p className={cx('cfari')}>Get a free open-source <a href="https://lojban.pw/en/books/learn-lojban/">'Learn Lojban' course</a> now!</p>

        <img className={cx('ralju_pixra')} src="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/lojbangu3.png?raw=true"/>
      </div>
    </div>
    <div className={cx('content-panel')}>
      <div>
        <h2>Boards</h2>
        <div style={{
          textAlign: 'center',
          display: 'block'
        }}>
          <div style={{
            width: 'auto'
          }}>
            <a target="_blank" href="https://jbotcan.org/jbo/" className={cx('jbo', 'forum')}>
              <span>
                <b>/jbo/</b>
                <br/>
                i e'o do tavla bau la lojban po'o<br/>
              </span>
            </a>
            <a target="_blank" href="https://jbotcan.org/en/" className={cx('en', 'forum')}>
              <span>
                <b>/en/</b>
                <br/>
                Talk in English about Lojban<br/>
              </span>
            </a>
            <a target="_blank" href="https://jbotcan.org/ideas/" className={cx('ideas', 'forum')}>
              <span>
                <b>/ideas/</b>
                <br/>
                Ideas about Lojban<br/>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2>Lojban stuff</h2>
        <div className={cx('tapla')}>
          <h2>Useful resources</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="/speakable/">Learning materials</a>
            </li>
            <li>
              <a target="_blank" href="https://la-lojban.github.io/sutysisku/en/">la sutysisku — online dictionary</a>
            </li>
            <li>
              <a target="_blank" href="https://la-lojban.github.io/parser/">Lojban visual text helper (parser)</a>
            </li>
            {/*<li><a target="_blank" href='/jbofihe.cgi'>la jbofihe &mdash; Lojban translator and parser</a></li>*/}
            <li>
              <a target="_blank" href="https://jbotcan.org/sance/">/sance/ — upload/play sound recordings</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Articles</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="/lojban/en/tlon-uqbar-la-gleki-fishy-apples/">Tlön, Uqbar and La Gleki's fishy apples</a>
            </li>
            <li>
              <a href="/lojban/en/navy-seal-copypasta/">Navy Seals copypasta translated into Lojban</a>
            </li>
            <li>
              <a href="/lojban/en/speed-of-thought/">Speed of thought</a>
            </li>
            <li>
              <a href="/free-gismu-space/">How many gismu are possible?</a>
            </li>
            <li>
              <a href="/lojban/en/attitudinal/">Attitudinals and their expansions</a>
            </li>
            <li>
              <a href="/lojban/en/dialects/">4 types of Lojban language dialects</a>
            </li>
            <li>
              <a href="/lojban/en/krulermorna/">la krulermorna - a new orthography of Lojban</a>
            </li>
            <li>
              <a href="/lojban/en/opinions.html">Opinions on Lojban</a>
            </li>
            <li>
              <a href="/lojban/en/verbs-broken.html">Are verbs in Lojban language broken?</a>
            </li>
            <li>
              <a href="/lojban/en/how-the-enemy-came-to-thlunrana/">How the enemy came to Thlunrana, a story by Lord Dunsany in Lojban logical language</a>
            </li>
            <li>
              <a href="/bnf/">BNF grammar</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Humour</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="https://lojban.pw/en/humour/sapir-whorf-hypothesis-confirmed/">Sapir-Whorf hypothesis confirmed</a>
            </li>
            <li>
              <a href="/lojban/en/lojban-liberated/">Lojban language liberated</a>
            </li>
            <li>
              <a href="/lojban/en/lojban-taxonomy.html">Lojban perfect taxonomy of live beings</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Linguistics</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a href="/tokipona/enhanced/">toki pona enhanced, a language</a>
            </li>
          </ul>
        </div>
        <div className={cx('tapla')}>
          <h2>Board Archives</h2>
          <ul className={cx('inner_list')}>
            <li>
              <a target="_blank" href="https://jbotcan.org/jbo/arch/res/">/jbo/</a>
            </li>
            <li>
              <a target="_blank" href="https://jbotcan.org/en/arch/res/">/en/</a>
            </li>
            <li>
              <a target="_blank" href="https://jbotcan.org/xamselsku/">xamselsku quote dump</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('tapla')}>
        <h2>Contact</h2>
        <ul className={cx('inner_list')}>
          <li>
            <a target="_blank" href="mailto:gleki.is.my.name@gmail.com">Email jbotcan's admin</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

// <Card>
//   <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
//   <CardBlock>
//     <CardTitle>Card title</CardTitle>
//     <CardSubtitle>Card subtitle</CardSubtitle>
//     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//     <Button>Button</Button>
//   </CardBlock>
// </Card>

export default Comp;

import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Speed of thought" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>krulermorna alphabet</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <div>
        <p>
          <strong>la krulermorna</strong>&nbsp;is an alternative orthography that more strictly implements audio-visual isomorphism of Lojban spelling.</p>
        <ol>
          <li>Most letters are from the original Latin-based orthography.</li>
          <li>Glides&nbsp;<strong>i</strong>&nbsp;and&nbsp;<strong>u</strong>&nbsp;between vowels are considered consonants and thus are expressed via distinct letters:
            <ul>
              <li>
                <strong>i</strong>&nbsp;=&gt;&nbsp;<strong>ɩ</strong>
              </li>
              <li>
                <strong>u</strong>&nbsp;=&gt;&nbsp;<strong>w</strong>
              </li>
            </ul>
          </li>
          <li>Diphthongs that act like other "pure" vowels are expressed via distinct letters:
            <ul>
              <li>
                <strong>au</strong>&nbsp;=&gt;&nbsp;<strong>ǎ</strong>
              </li>
              <li>
                <strong>ai</strong>&nbsp;=&gt;&nbsp;<strong>ą</strong>
              </li>
              <li>
                <strong>ei</strong>&nbsp;=&gt;&nbsp;<strong>ę</strong>
              </li>
              <li>
                <strong>oi</strong>&nbsp;=&gt;&nbsp;<strong>ǫ</strong>
              </li>
            </ul>
          </li>
          <li>in other positions&nbsp;<strong>i</strong>&nbsp;and&nbsp;<strong>u</strong>&nbsp;are retained as they are in the original Latin orthography.</li>
        </ol>
        <h2>
          <span id="Usage" className="mw-headline">Usage</span>
        </h2>
        <p>la krulermorna is used by an algorithm in&nbsp;<a title="la sutysisku" href="https://mw.lojban.org/papri/la_sutysisku">la sutysisku</a>&nbsp;app to search for rhymes to Lojban words.</p>
        <p>It can also help understand Lojban morphology.</p>
        <p>Other than that it's mostly an art project.</p>
        <p>The overal number of letters in Lojban alphabet is raised from 26 in the official spelling up to 32 in la krulermorna, which may not be desirable for people using small on-screen keyboards like those on portable devices.</p>
        <h2>
          <span id="la_vlipa_krulermorna" className="mw-headline">la vlipa krulermorna</span>
        </h2>
        <PrituPixra url="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/320px-la_vlipa_krulermorna.png?raw=true" name="<center>.i coi do<br/>.i mi ca jai gau djuno fai do<br/>lo du'u wi mi ca pilno<br/>la krulermorna<br/>lo ka ciska dei<br/>.i ɩa ky. jai cinri</center>"/>
        <p>
          <em>la vlipa krulermorna</em>&nbsp;is a modification of la krulermorna where the letter&nbsp;<strong>ǎ</strong>&nbsp;is replaced with Unicode Character 'LATIN SMALL LETTER AU'. The latter isn't supported in most used fonts and therefore this variant of la krulermorna orthography is less used.</p>
        <h2>
          <span id="Interjections_according_to_krulerske" className="mw-headline">Interjections according to krulerske</span>
        </h2>
        <table className="wikitable">
          <tbody>
            <tr>
              <td>.ǎ</td>
              <td>.ą</td>
              <td>.ę</td>
              <td>.ǫ</td>
            </tr>
            <tr>
              <td>Wish ...</td>
              <td>I'm gonna</td>
              <td>it should be</td>
              <td>ouch!</td>
            </tr>
          </tbody>
        </table>
        <table className="wikitable">
          <tbody>
            <tr>
              <th>&nbsp;</th>
              <th>a</th>
              <th>e</th>
              <th>i</th>
              <th>o</th>
              <th>u</th>
            </tr>
            <tr>
              <th>.</th>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>ɩ</th>
              <td>I believe</td>
              <td>aye! agreed!</td>
              <td>yikes!</td>
              <td>respect</td>
              <td>I love it</td>
            </tr>
            <tr>
              <th>w</th>
              <td>discovery</td>
              <td>What a surprise</td>
              <td>hooray!</td>
              <td>voila!</td>
              <td>oh poor thing</td>
            </tr>
            <tr>
              <th>.a'</th>
              <td>I'm listening</td>
              <td>alertness</td>
              <td>oomph! (effort)</td>
              <td>I hope</td>
              <td>hm, I wonder...</td>
            </tr>
            <tr>
              <th>.e'</th>
              <td>you may</td>
              <td>come on, do it!</td>
              <td>do it!</td>
              <td>please, do it</td>
              <td>I suggest</td>
            </tr>
            <tr>
              <th>.i'</th>
              <td>ok, I accept it</td>
              <td>I approve!</td>
              <td>I know that feeling</td>
              <td>thanks to it</td>
              <td>familiarity</td>
            </tr>
            <tr>
              <th>.o'</th>
              <td>pride</td>
              <td>closeness</td>
              <td>danger!</td>
              <td>patience</td>
              <td>relaxation</td>
            </tr>
            <tr>
              <th>.u'</th>
              <td>gain</td>
              <td>what a wonder!</td>
              <td>hahaha!</td>
              <td>courage</td>
              <td>sorry!</td>
            </tr>
          </tbody>
        </table>
        <h3>
          Alternative representation
        </h3>
        <table className="wikitable">
          <tbody>
            <tr>
              <th>&nbsp;</th>
              <th>a</th>
              <th>e</th>
              <th>i</th>
              <th>o</th>
              <th>u</th>
              <th>ǎ</th>
              <th>ą</th>
              <th>ę</th>
              <th>ǫ</th>
            </tr>
            <tr>
              <th>.</th>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>desire</td>
              <td>intent</td>
              <td>obligation</td>
              <td>complaint/pain</td>
            </tr>
            <tr>
              <th>ɩ</th>
              <td>belief</td>
              <td>agreement</td>
              <td>fear</td>
              <td>respect</td>
              <td>love</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>w</th>
              <td>discovery</td>
              <td>surprise</td>
              <td>happiness</td>
              <td>completion</td>
              <td>pity</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>.a'</th>
              <td>attentive</td>
              <td>alertness</td>
              <td>effort</td>
              <td>hope</td>
              <td>interest</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>.e'</th>
              <td>permission</td>
              <td>competence</td>
              <td>constraint</td>
              <td>request</td>
              <td>suggestion</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>.i'</th>
              <td>acceptance</td>
              <td>approval</td>
              <td>togetherness</td>
              <td>appreciation</td>
              <td>familiarity</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>.o'</th>
              <td>pride</td>
              <td>closeness</td>
              <td>caution</td>
              <td>patience</td>
              <td>relaxation</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>.u'</th>
              <td>gain</td>
              <td>wonder</td>
              <td>amusement</td>
              <td>courage</td>
              <td>repentance</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="last">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Comp;

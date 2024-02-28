import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const GismuFreeSpace = () => (
  <div>
    <Helmet title="Free gismu space in Lojban - la.jbotcan." meta={[{
        name: 'Lojban language',
        content: 'natural language, forum, resources, sutysisku, jbotcan, parser'
      },
      { property: 'og:image', content: 'https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/free-gismu-space.png?raw=true' }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div className={cx('galtu_dasri')}>
      <h1 className={cx('heading')}>The limit of Lojban</h1>
      <h2>How many gismu are possible?</h2>
      <div className={cx('paragraph')}>
        <p>Gismu is a 5-letter word that functions as a verb in Lojban language.<br/>It has a specific structure of the form CVCCV or DVCV,<br/>where C is a consonant, V is a vowel and D is an initial cluster of two consonants like <b>pl</b>. There is a rule a gismu can't exist if it's too similar to an already existing gismu. E.g. there is a gismu <b>dansu</b> (<i>to dance</i>) and a could-be gismu <b>tansu</b> can't exist because <b>t</b> is blocked by a similar sound <b>d</b>. On the same token two official gismu can't exist if they differ in the last vowel only. Like no <b>dansa</b> since <b>dansu</b> already exists.<br/>This rule applies to official gismu only. What if we extend this rule to all possible gismu. How many of them would we able to get?<br/>The answer is...</p>
        <h3 className={cx('galtu_dasri')}>around 17903<br/>possible experimental gismu<br/>+ 1392 official gismu</h3>
        <p>How did I count it? Here is the algorithm.</p>
        <ul>
        <li>Create all possible gismu (<b>larfa</b>, <b>panfo</b>)</li>
        <li>Try adding them one by one to the list of already existing gismu including official ones.</li>
        <li>If they are not blocked by any similarity rule every new candidate gismu is added to the list.</li>
        <li>Finally, count how many of them you got.</li>
        <li>Repeat the operation from step 1 but first shuffle the list of possible gismu so that you'd be trying to add them in another order.</li>
        </ul>
        <p>To my surprise the last step doesn't change the result much. It's always around 17850 - 17903 possible gismu. A future research could determine the maximum number of experimental gismu if the optimal order of candidate gismu is used.</p>
        <p className={cx('cfari')}><a target="_blank" href="https://github.com/La-Lojban/free-gismu-space">The code on Github implementing this algorithm</a></p>
        <h2>Speed of depletion of free gismu space</h2>
        <div className={cx('paragraph')}>
        Obviously, at first almost every new possible gismu arbitrarily taken from the possible space can become a new gismu not blocking any other gismu. Over time, it's getting harder and harder to find vacant gismu. Here is the chart showing the speed of depletion. X-axis shows the number of gismu assigned by far. Y-axis shows after how many attempts a new gismu is successfully assigned. Looks like Y-axis needs a double logarithm scale.<br/>
        <img className={cx('ralju_pixra','galtu-dasri')} src="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/free-gismu-space.png?raw=true"/>
        </div>
      </div>
    </div>
  </div>
)

export default GismuFreeSpace;

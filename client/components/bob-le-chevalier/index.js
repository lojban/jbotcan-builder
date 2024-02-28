import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const Bob = () => (
  <div>
    <Helmet title="Answers from Bob, an author of Lojban - la.jbotcan." meta={[{
        name: 'Lojban language',
        content: 'Bob Le\'Chevalier, forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div className={cx('galtu_dasri')}>
      <h1 className={cx('heading')}>Answers from a Founder</h1>
      <div>
        <p className={cx('paragraph')}>Bob (Robert) Le'Chevalier (aka la lojbab.) is one of the developers who in 1987 constructed the famous Lojban language.<br/>Bob is sometimes the last source of information regarding intents behind Lojban (together with the official <a href="https://lojban.org/publications/cll/cll_v1.1_xhtml-no-chunks/">Reference Grammar</a>).<br/>And so in this section I will be posting my questions to Bob, his responses and my comments.</p>
      </div>
      <h1 className={cx('heading')}>Answers from a Founder</h1>
      <div>
        <p className={cx('paragraph')}>
          <b>La Gleki</b>: - As Curtis [one of Lojbanists] noted the U.S. American "frown" primarily means a downturned mouth and usually means negative emotions. The British sense is just a furrowed brow (forehead), which can mean all sorts of things, including negative ones but also (but not limited too): a reaction to pain (possibly covered in the Usian sense too, as a grimace), concentration, a questioning look, a prompting look, or surprise. So what was meant by "frumu". Should we stick to "grimace" reading more, that is any facial expression would do?<br/>
          <b>la lojbab.</b>: - I suspect that grimace would work, since it an alternative to frown in the definition. Until I looked them up (see below), I would have thought grimace to be a synonym of frown. But that seems not to be the case.<br/>I don't know the answer to this for sure.<br/>Since the question is one of various meanings in different languages/cultures, it is probably best to look at the source words that were used to make frumu. mukti scanned the original worksheets when he was last here. I don't know if he put them online yet. Actually I think we put the etymology summary file up a while back. But the original sheets will identify the words we used in word-making that did NOT make it into the final etymology.<br/>Thinking about it, I probably had in mind "frown" as the opposite expression to "smile", which would fit what Curtis called the American version. But I think that the American definition also includes the furrowed brow as well as the downturned mouth, and could therefore include concentration and disapproval as well as sadness.<br/>Hmm.<br/>
          http://dictionary.cambridge.org/us/dictionary/english/frown<br/>
          http://dictionary.cambridge.org/us/dictionary/english/grimace<br/>
          allows you to look at the British and American definitions in comparison. There is some difference, but I think I would have frumu cover both the American and British meanings of both words.<br/>Broader is better for gismu, especially if we can find a way to make simple lujvo to distinguish between kinds of frumu. drifru for a sad frown; na'efru for a denial/disapproval frown, jurfru and jusfru for the to-me subtle difference between a serious expression and a severe one (subtle in that I couldn't tell you the difference in the facial expressions for each). So that is what I would propose - that frumu be a kind of basket of non-smiling facial expressions, not necessarily for a negative emotion, with lujvo bringing out the various possible kinds of emotion/attitude being expressed.
        </p>
      </div>
      <div>
        <p className={cx('paragraph')}></p>
      </div>
      <div>
        <p className={cx('paragraph')}></p>
      </div>

    </div>
  </div>
)

export default Bob;

import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Mad proposals: connective system" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Mad proposals: connective system</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <h2>History</h2>
      <p>In 1994 Jorge Llambías proposed revising connectives in Lojban language.</p>
      <p>This posting contains proposals regarding some extensions and/or replacements to the logical and non-logical connectives system.</p>
      <p>Lojban Central is unanimously opposed to it, but does not mind my posting it for your perusal. If public opinion is strongly in favour they may consider it again (they say), so get paper and pen ready and start writing to your senator.</p>
      <p>I will also present some of the counterarguments to the proposal, but you can be certain that it will be in a biased manner.</p>
      <p>I will use <Valsi valsi="joi"/> to refer to all the non-logical connectives of selmaho JOI, <Valsi valsi="je"/> for all of selmaho JA, etc. Since by definition all the members of a selmaho have the same grammar, this makes the discussion easier.</p>
      <p>(The proposals are called "mad" for historical reasons.)</p>
      <p> MAD PROPOSAL NUMBER 1:</p>
      <p>Allow <Valsi valsi="je"/> everywhere that <Valsi valsi="joi"/> is allowed.</p>
      <p>RATIONALE:</p>
      <p><Valsi valsi="je"/> and <Valsi valsi="joi"/>, the basic logical and non-logical connectives (BIAS ALARM: <Valsi valsi="je"/> is being called the basic logical connective), have very similar grammar. However, there are a few places where <Valsi valsi="joi"/> is allowed, but <Valsi valsi="je"/> is not.</p>
      <p>This restriction doesn't stop us from being able to say anything, because there are other structures provided to cope with those functions.</p>
      <p>For instance:</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; le xunre joi blanu bolci (the red mixed-and blue ball) &nbsp; &nbsp; &nbsp; &nbsp; le xunre je blanu bolci (the red and blue ball)</p>
      <p>are both legal, but:</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; mi joi do &nbsp; &nbsp; &nbsp; &nbsp; *mi je do</p>
      <p>The second one is illegal. The corresponding grammatical structure is:</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; mi .e do</p>
      <p>Why is the <Valsi valsi="je"/> form illegal? Because to link sumti in general, we'd have to use lots of <Valsi valsi="ku"/>'s:</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; le ninmu ku joi le nanmu vs. &nbsp; &nbsp; &nbsp; &nbsp; le ninmu .e le nanmu</p>
      <p>with <Valsi valsi="je"/> we'd have to use <Valsi valsi="ku"/>, just like we do with <Valsi valsi="joi"/>:</p>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; *le ninmu ku je le nanmu</p>
      <p>My point is that, since we have to use <Valsi valsi="ku"/>'s with <Valsi valsi="joi"/>'s anyway, why not allow the <Valsi valsi="je"/> versions to be legal. The <Valsi valsi=".e"/> version would still be there when needed.</p>
      <p>(At this point I should say that John has ran the proposals through the YACC, and there were no problems with that.)</p>
      <p>One argument against, is that people will generalize from <Valsi valsi="mi je do"/> to <Valsi valsi="le ninmu je le nanmu"/>. My response to that is that then people will generalize from <Valsi valsi="mi joi do"/> to <Valsi valsi="le ninmu joi le nanmu"/>, so that is not a new problem. The reply that <Valsi valsi="joi"/>'s are less central to Lojban is not convincing to me, because I think that in real speech, logical connectives are not more significant than non-logical ones.</p>
      <p>(BTW, the ku-less form is illegal only because the parser can't handle it, not because it generates any ambiguity.)</p>
      <p>In short: Proposal 1 is not a change, but simply an extension that removes an unnecessary restriction. It goes well with the many stones for one bird philosophy, because it allows more than one way to say the same thing. It doesn't introduce any weird interpretation of anything, it's a natural extension that I bet fluent speakers will make, whether the parser likes it or not.</p>
      <p> MAD PROPOSAL NUMBER 1 part B:</p>
      <p>Eliminate selmaho GA.</p>
      <p>RATIONALE:</p>
      <p>They become redundant. Just like <Valsi valsi="joigi"/> serves currently as the forethought non-logical connective, <Valsi valsi="jegi"/> would do for the logical one.</p>
      <p>The trade-off for the simplicity (we'll end up with only one series of logical connectors when we're through, instead of the current 5) is that they have two syllables instead of one.</p>
      <p>My argument was that since they're forethought connectives, that doesn't matter: people are supposed to think more and thus take more time when using forethought. This didn't seem to be convincing enough, though.</p>
      <p> MAD PROPOSAL NUMBER 2:</p>
      <p>Replace <Valsi valsi="gi'e"/>'s by <Valsi valsi="gije"/>'s, and extend the grammar to allow <Valsi valsi="gijoi"/>'s in the same function of bridi-tail connection.</p>
      <p>RATIONALE:</p>
      <p>A whole selmaho with 5 cmavo, of type <Valsi valsi="gi'e"/>, is eliminated, and replaced by the almost identical compound cmavo of type <Valsi valsi="gije"/>, with the same number of syllables. This requires almost no relearning.</p>
      <p>As a bonus, afterthought bridi-tail connection (this is what <Valsi valsi="gi'e"/>'s do) is also possible for the non-logical connectives.</p>
      <p>Also, the afterthought form is made to look just like the one for whole bridi:</p>
      <p>.ije &nbsp;(for a whole bridi) gije &nbsp;(for bridi-tail)</p>
      <p>same as</p>
      <p>.ijoi (existing) gijoi (currently not possible)</p>
      <p> MAD PROPOSAL NUMBER 3:</p>
      <p>Eliminate <Valsi valsi="gu'e"/>'s and replace them by <Valsi valsi="guje"/>'s. Also allow <Valsi valsi="gujoi"/>'s to fullfill the same function for non-logical connectives.</p>
      <p>RATIONALE:</p>
      <p>Again, 5 cmavo eliminated. This time a new one <Valsi valsi="gu"/>, parallel to <Valsi valsi="gi"/> is introduced (we eliminated its previous function in 1b, right?)</p>
      <p>In case you don't remember, <Valsi valsi="gu'e"/>'s serve as forethought connectives within tanru. IMHO a useless construction, but since they're there, we provide them with a substitute.</p>
      <p><Valsi valsi="guje"/>'s would be most similar to the current form, but <Valsi valsi="jegu"/>'s would be the logical choice. Then forethought connectives would all be of the same form, instead of today's variety:</p>
      <p>je gi .... gi .... &nbsp;(instead of &nbsp; &nbsp;ge ... gi ...) joigi .... gi .... &nbsp;(as is now &nbsp;joigi ... gi ...)</p>
      <p>je gu .... gu .... &nbsp;(instead of &nbsp;gu'e ... gi ...) joigu .... gu .... &nbsp;(no current equivalent)</p>
      <p> MAD PROPOSAL NUMBER 4:</p>
      <p>Change <Valsi valsi="ji"/> from selmaho A to selamho JA</p>
      <p>RATIONALE:</p>
      <p>This one is just to round everything off. The question connective becomes regular.</p>
      <p> -------------------- END OF PROPOSALS ----------------------</p>
      <p>The net result is:</p>
      <p>- Instead of five series of logical connectives: A, JA, GA, GIhA, GUhA &nbsp; we are left with a single one: JA (plus A in case we want to spare ku's, &nbsp; but cut the flow of our speech)</p>
      <p>- We eliminate 15 (yes, you read correctly: fifteen!) cmavo: &nbsp; ga, ge, go, je'i, ge'i, gi'a, gi'e, gi'i, gi'o, gi'u, gu'a, &nbsp; gu'e, gu'i, gu'o, gu'u.</p>
      <p>- We lose no expressive power. Every feature of the current language is &nbsp; preserved, and the only small drawback is two syllables instead of one &nbsp; for the forethought logical connectives.</p>
      <p>- We gain two previously non-existing forms for the non-logical &nbsp; connectives: afterthought bridi-tail, and forethought tanru.</p>
      <p>- As a result, logical and non-logical connectives are equal, and there &nbsp; is complete regularity between them. They could almost be put into the &nbsp; same selmaho if it wasn't for a small difference in how <Valsi valsi="na"/> and <Valsi valsi="nai"/> &nbsp; affect them.</p>
      <p>The price to pay is that people who have already learned the complicated system have to forget it and learn the simple one. (What? that's not an unbiased way to say it? :) For those who are still learning, and for the future generations, it would be a great gain.</p>
      <p>If you are in favour of regularity and simplicity, now is the time to speak up!</p>
      <p>(I'm considering becoming a preacher.)</p>
      <p>Jorge</p>
      <p>(The fact that this proposal is presented while Colin is off the list, and I suspect he would be against any changes, is purely coincidental. The fact that Nick is also not connected is also coincidental. Really!)</p>
    </div>
  </div>
)

export default Comp;

import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Are verbs in Lojban broken?" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Are verbs in Lojban broken?</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <h2>Question</h2>
      <p>It looks like it would be difficult to learn such definitions of verbs like
        <Mupli senfanva="bajra" xefanva="x1 runs on surface x2 using limbs x3 with gait x4"/>
        because almost every verb has its own own distinct place structure. Why not create something that would require less mental effort? Why is Lojban this way?</p>
      <h2>Answer</h2>
      <p>English is pragmatically the same. It has verbs with their implied place structure. The only difference is that Lojban dictionaries don't cheat whereas most English dictionaries hide such place structure.<br/>
        The reason behind such system is that having a separate preposition denoting each place would be even more tiresome and sometimes even unusable. Imagine:
        <Mupli xefanva="I depend to you (?!)"/>
        Also having a limited set of such prepositions would make it highly subjective and not universal. E.g. in English we say
        <Mupli xefanva="I depend on you"/>
        but in Russian
        <Mupli gloso="I depend from you"/>
        Certain prepositions in combination with certain verbs would have a weird meaning leading ultimately to even more randomness than the current system with x1, x2 ...<br/>
        Also note that most verbs in Lojban have up to three places only. Only ~30 core verbs (lo gismu) have 5 places. And you don't need to know every place of every core verb to be able to speak fluent Lojban. Indeed, is it really important to know the place structure of 'trigonometric sine function' when you are going to talk about preparing food?<br/>
        It's true that "I give you a present" doesn't require prepositions while place structures of other verbs do require them. There isn't more memorization. English requires you to learn metaphors. Why "I give TO you" and "I talk TO you"? Why "to" both times despite completely different processes here?<br/>
        Also consider
        <Mupli bangu="English" sefanva="I think of you"/>
        <Mupli bangu="Russian" sefanva="Ya dumayu o tebe" gloso="I think about you"/>
        <Mupli bangu="Spanish" sefanva="Yo pienso en ti" gloso="I think in/into you"/>
        Some Lojban place structures are less straightforward than others.<br/>
        This happens in English too all the time. Why "This movie is pleasing to me" but ... "I like this movie"?<br/>
        Also note that verbs in Lojban as in English can be grouped into frames with identical place structure, e.g.
        <Mupli sefanva="mlatu" xefanva="x1 is a cat of species x2"/>
        <Mupli sefanva="gerku" xefanva="x1 is a dog of species x2"/>
      </p>
      <h2>Place structure is easy to learn but ...</h2>
      <p>Often the place structure is easy to learn. However, the concept of movement has a random set of place structures. Look at this:
        <Mupli sefanva="muvdu" xefanva="x1 (object) moves to destination / receiver x2 [away] from origin x3 over path / route x4."/>
        <Mupli sefanva="bajra" xefanva="x1 runs on surface x2 using limbs x3 with gait x4."/>
        Why not one place structure for all of them?</p>
      <h2>Answer</h2>
      <p>
        <Valsi valsi="muvdu"/>, <Valsi valsi="bajra"/> and <Valsi valsi="cadzu"/> view similar process from very different angles. It's not important in <Valsi valsi="bajra"/> to where from where you are going. The emphasis is on the form. It's not "running to from" as we have in English. Please, don't mix English glosses for the real process that those Lojban verbs describe. To be in <Valsi valsi="bajra"/> state is to have some gait while touching some surface with your limbs and do that quickly :).<br/>
        A person using a treadmill doesn't have any "to" or "from" points but is simply running while staying at the same place. I think this is a good example of bajra state while not being in klama state.<br/>
        In short, Lojban is not a relexed Engish, although common usage and Lojban-English dictionary might suggest that.<br/>
        It is a problem of English's ambiguity than something to do with Lojban language.<br/>
        Finally one can employ lo tanru like bajra klama (to run-come) to express both running and coming to some place.</p>
    </div>
  </div>
)

export default Comp;

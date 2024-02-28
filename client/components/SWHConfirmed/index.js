import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);

const SWHConfirmed = () => (
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
    <h1>Sapir-Whorf hypothesis confirmed!
    </h1>
    <h2>Lojban language took it all.</h2>
    <div className={cx('content-panel', 'paragraph')}>
      <p>
        You know those remarks "If Einstein had spoken another language his theory of relativity would have been different".
      </p>
      <p>
        Now some people have been using Lojban constructed language in order to free themselves from words and concepts created in previous epochs.
      </p>
      <p>
        Have they been able to shatter the walls of historical languages?
      </p>
      <p>
        It seems so now thanks to a recent scientific research.
      </p>
      <p>
        Researchers from the University of Laguna Verde took logs of English chats, Lojban chats and chats in a few other languages and then used a sophisticated algorithm to compare how and in what context words are used together by turning them into mathematical vectors.
      </p>
      <p>
        If all languages gravitate towards words with still same meanings all across the globe then it would mean that
      </p>
      <p>
        Language does not affect Thought.
      </p>
      <p>
        But what has been discovered with Lojban community shows quite the opposite.<br/>
        Not only words do not gravitate towards centers common for all languages but Lojban chats show exponential runaway over time from centers of meanings in other languages.
      </p>
      <p>
        Lojbanists are really out of this world!
      </p>
      <p>
        This is what they themselves are saying:<br/>
        "Unlimited by the lexicon of our mother tongues we invent and use words we need.<br/>
        We move to a truly creative expression of our feelings and our reasoning."
      </p>
      <p>
        So can we peek into the world of the language allegedly free from social restraints?<br/>
        Can we get understanding what they are discussing in their chats?<br/>
        It's yes and no.
        <br/>
        Since words in this flexible language tend to deviate over time more and more from this-world languages it's getting harder and harder to find approximate translations of those words.
      </p>
      <p>
        Nevertheless, starting from today the new Twitter account
        <span className={cx('twitter')}>
          <a href="https://twitter.com/LojbanIsCrazy">@Lojban_is_crazy</a>
        </span>
        will be posting new and previously unpublished Lojban words with their rough translations into English.
      </p>
      <p>
        But here are some examples already:
      </p>
        <ul>
          <li>zdebuzeku - a toxic breakfast</li>
          <li>lebmeteno - a careful maneuver</li>
          <li>dreguri - a structure over which navigational songs can be heard miles ahead</li>
          <li>irvinagi - a soothsaying as the treatment of insincerity</li>
          <li>emdoki - a dive for weed</li>
          <li>vibdaito - a game with paper and jewelry</li>
          <li>avnifiku - a wildflower in a buttonhole</li>
          <li>orvanu - evanescent windborne smell</li>
          <li>gonruve - a contestant who ends in an oven due to paranoia</li>
          <li>uknura - a boat on one's back</li>
          <li>pronokabu - a shade of flying birds</li>
          <li>erlegina - a craftsman's shell found by bees</li>
          <li>irtire - a community that is crazy at your corpse</li>
          <li>zveizefi - a feeling of being visited</li>
          <li>zibgora - a text printed on a cookie</li>
          <li>gilkaume - a ceremonial pouch</li>
          <li>lulrima - verbal clothes</li>
          <li>unrugivo - a flap of a small envelope</li>
          <li>dergale - a frivolous inhabitant</li>
          <li>troidiki - a horse that protects women</li>
          <li>afturu - a fine candy with pictures under a sexy lid</li>
          <li>kinzemo - a programming tunic</li>
          <li>skiroge - a road made by trampling</li>
          <li>obzevi - a word performed on one's sister</li>
          <li>momnoiso - a violent consequence of sleeping</li>
          <li>erneta - a building that absorbs people</li>
          <li>pruvuge - a long skirt that is used during the examination of food</li>
          <li>zemvaido - a reply in the air</li>
          <li>spatazo - a semitransparent vertebrate</li>
          <li>dafpeka - a small victory-shaped part of fruits</li>
          <li>tonraibipe - an intrusive sound of a ticket being torn</li>
          <li>zboimuvu - a quickly worn garment currently in the state of not being worn</li>
          <li>afpapo - a personal portable telescope</li>
        </ul>
      <p>
        Well, well, enough. The Twitter account
        <span className={cx('twitter')}>
          <a href="https://twitter.com/LojbanIsCrazy">@Lojban_is_crazy</a>
        </span>
        is promised to be posting only a few words a day. Let's follow it.
      </p>
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

export default SWHConfirmed;

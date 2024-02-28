import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="toki pona enhanced" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>toki pona enhanced</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <PrituPixra url="https://mw.lojban.org/images/thumb/e/e9/tpe.png/300px-tpe.png" name="toki pona enhanced, one of the unoffical symbols"/>
      <div>
        <em>toki pona enhanced (aka TPE)</em>&nbsp;is a dialect of&nbsp;<a title="toki pona" href="/tokipona/">toki pona</a>&nbsp;that formalizes the syntax and the lexicon of toki pona employing advances in the science of Lojban.</div>
      <div style={{float: "left"}}>
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#Basic_sentence_structure">
              <span>Basic sentence structure</span>
            </a>
          </li>
          <li>
            <a href="#Two_nouns_of_a_verb">
              <span>Two nouns of a verb</span>
            </a>
          </li>
          <li>
            <a href="#Compound_verbs">
              <span>Compound verbs</span>
            </a>
          </li>
          <li>
            <a href="#Modal_verbs">
              <span>Modal verbs</span>
            </a>
          </li>
          <li>
            <a href="#Negation">
              <span>Negation</span>
            </a>
          </li>
          <li>
            <a href="#Questions">
              <span>Questions</span>
            </a>
          </li>
          <li>
            <a href="#Pre-nouns">
              <span>Pre-nouns</span>
            </a>
          </li>
          <li>
            <a href="#Topic_and_comment">
              <span>Topic and comment</span>
            </a>
          </li>
          <li>
            <a href="#Anaphora">
              <span>Anaphora</span>
            </a>
          </li>
          <li>
            <a href="#Separating_sentences">
              <span>Separating sentences</span>
            </a>
          </li>
          <li>
            <a href="#Linking_sentences_together">
              <span>Linking sentences together</span>
            </a>
          </li>
          <li>
            <a href="#Metaphorical_usage_of_prepositions">
              <span>Metaphorical usage of prepositions</span>
            </a>
          </li>
          <li>
            <a href="#Differences_from_toki_pona">
              <span>Differences from toki pona</span>
            </a>
          </li>
          <li>
            <a href="#Dictionary">
              <span>Dictionary</span>
            </a>
          </li>
        </ul>
      </div>
      <h2>
        <span id="Basic_sentence_structure">Basic sentence structure</span>
      </h2>
      <div>Main TPE words are verbs like</div>
      <Mupli sefanva="soweli" xefanva="to be an animal (e.g. a dog or a cat)"/>
      <Mupli sefanva="moku" xefanva="to eat (something)"/>
      <Mupli sefanva="soweli li moku" xefanva="A mouse eats."/>
      <div>The verb before the particle <Valsi bangu="toki" valsi="li"/> becomes a noun. The verb after <Valsi bangu="toki" valsi="li"/> remains a verb.</div>
      <div>TPE also have words that act only as nouns. Those are pronouns:</div>

      <Mupli sefanva="mi" xefanva="I"/>
      <Mupli sefanva="sina" xefanva="you"/>

      <div>Thus they don't require <Valsi bangu="toki" valsi="li"/> to separate them from the forthcoming verb:</div>
      <Mupli sefanva="mi moku" xefanva="I eat"/>
      <h2>
        <span id="Two_nouns_of_a_verb">Two nouns of a verb</span>
      </h2>
      <div>Verb can have more than one noun:</div>
      <Mupli sefanva="mi moku e ijo" xefanva="I eat something.<br/>I eat food."/>

      <Mupli sefanva="moku" xefanva="to eat (something)"/>

      <div>The second noun is put after the verb and separated with the particle <Valsi bangu="toki" valsi="e"/>.</div>
      <h2>
        <span id="Compound_verbs">Compound verbs</span>
      </h2>

      <Mupli sefanva="toki" xefanva="to talk, say (something)"/>
      <Mupli sefanva="pona" xefanva="to be good, to repair (something)"/>
      <Mupli sefanva="toki pona" xefanva="to talk in a good way"/>
      <Mupli sefanva="toki pona li moku" xefanva="A good talker eats."/>
      <div>Stringing verbs together makes the second, third etc. verbs modify the first verb. Thus we get adjectives that unlike English is put afterwards: literally in TPE we say "talker, the good, eats."</div>
      <div>Pronouns can also modify verbs:</div>

      <Mupli sefanva="soweli" xefanva="to be an animal (e.g. cat)"/>
      <Mupli sefanva="soweli mi" xefanva="to be my animal"/>
      <Mupli sefanva="ni li soweli mi" xefanva="This is my cat."/>

      <Mupli sefanva="ni" xefanva="this"/>
      <Mupli sefanva="ona li soweli sina" xefanva="It is your cat."/>
      <h2>
        <span id="Modal_verbs">Modal verbs</span>
      </h2>
      <div>Some verbs can be used as modal verbs (auxiliary verbs):</div>
      <Mupli sefanva="mi wile toki" xefanva="I want to talk."/>
      <Mupli sefanva="wile" xefanva="modal verb: to want to ..."/>

      <div>Compound verb rule is applied to them. However, some modal verbs can function as verbs, in this case the rule with "e" is applied.</div>
      <h2>
        <span id="Negation">Negation</span>
      </h2>
      <Mupli sefanva="mi moku ala" xefanva="I don't eat."/>
      <Mupli sefanva="ala" xefanva="to be false, not"/>

      <div>To negate a verb you put "ala" after it thus getting a compound verb.</div>
      <h2>
        <span id="Questions">Questions</span>
      </h2>
      <div>The question verb <Valsi bangu="toki" valsi="seme"/> is used for asking content questions:</div>
      <Mupli sefanva="seme li moku" xefanva="Who eats?"/>
      <div>Sentences with questions usually have a raising intonation.</div>
      <Mupli sefanva="sina moku ala moku" xefanva="Do you eat?"/>
      <Mupli sefanva="moku" xefanva="I do (eat)."/>
      <Mupli sefanva="moku ala" xefanva="I don't (eat)."/>
      <div>To ask&nbsp;<em>yes/no</em>&nbsp;questions repeat the verb twice with the word <Valsi bangu="toki" valsi="ala"/> inside. To answer&nbsp;<em>yes</em>&nbsp;repeat that verb. To answer&nbsp;<em>no</em>&nbsp;repeat the verb with&nbsp;<Valsi bangu="toki" valsi="ala"/>&nbsp;after it.</div>
      <h2>
        <span id="Pre-nouns">Pre-nouns</span>
      </h2>
      <div>Pre-nouns work the same as modal verbs but make the next word a noun:</div>
      <Mupli sefanva="mi kepeken ijo" xefanva="I use a tool."/>
      <Mupli sefanva="kepeken" xefanva="modal verb: to use ..."/>
      <Mupli sefanva="ijo" xefanva="is a tool (like fork, knife ...)"/>

      <h2>
        <span id="Topic_and_comment">Topic and comment</span>
      </h2>
      <div>Common sentence has two parts: topic and comment, which are separated by the particle <Valsi bangu="toki" valsi="la"/>:</div>
      <Mupli sefanva="soweli li moku la ona li kepeken ijo" xefanva="A mouse eats using a fork (actual meaning)" gloss="When a mouse eats it uses a fork (literally)."/>
      <Mupli sefanva="ona" xefanva="he, she, they, it"/>

      <div>Topic is before <Valsi bangu="toki" valsi="la"/>, comment is after <Valsi bangu="toki" valsi="la"/>.</div>
      <div><Valsi bangu="toki" valsi="la"/> is used to express prepositions. In this case the preposition "with" is rephrased in TPE with the modal verb <Valsi bangu="toki" valsi="kepeken"/>.</div>
      <div><Valsi bangu="toki" valsi="la"/> can also be used to express conditions like "if" and "when". This sentence can also be translated as "If a mouse eats it uses a fork."</div>
      <h2>
        <span id="Anaphora">Anaphora</span>
      </h2>
      <Mupli sefanva="soweli li moku la ona li kepeken ijo" xefanva="A mouse eats using a fork (actual meaning)" gloss="When a mouse eats it uses a fork (literally)."/>
      <div>Anaphoric verb <Valsi bangu="toki" valsi="ona"/> refers to the previous noun known from context. In this isolated example it definitely refers to the noun <Valsi bangu="toki" valsi="soweli"/> since there are no other nouns before "ona".</div>
      <h2>
        <span id="Separating_sentences">Separating sentences</span>
      </h2>
      <div>Sentences are separated by lowering the intonation till the end of the sentence and putting an at least short pause after them.</div>
      <div>Question sentences are separated by raising the intonation till the end of the sentence and putting an at least short pause after them.</div>
      <div>In writing sentence is separated by a dot placed at the end of it.</div>
      <h2>
        <span id="Linking_sentences_together">Linking sentences together</span>
      </h2>
      <Mupli sefanva="mi moku. en la mi tawa"/>

      <Mupli sefanva="tawa" xefanva="to go, to move (to some place)"/>
      <Mupli sefanva="en" xefanva="and"/>

      <div>If you want to show that two sentences express the same idea use <Valsi bangu="toki" valsi="en la"/> to connect them.</div>
      <Mupli sefanva="mi moku. sin la kon li seli"/>
      <Mupli sefanva="seli" xefanva="to be hot, to burn (something)"/>
      <Mupli sefanva="sin" xefanva="to be new"/>

      <div>If you change the subject of what you are talking about start the next sentence with <Valsi bangu="toki" valsi="sin la"/> to show it belongs to a new subject. In books "sin la" is also used to separate paragraphs.</div>
      <h2>
        <span id="Metaphorical_usage_of_prepositions">Metaphorical usage of prepositions</span>
      </h2>
      <div>The verb&nbsp;<em>to say</em>&nbsp;actually requires three nouns:</div>
      <Mupli xefanva="I say this to you."/>

      <Mupli sefanva="toki" xefanva="to say (something)"/>

      <div><Valsi bangu="toki" valsi="toki"/> specifies only the first two nouns. In such cases metaphors are used. In english&nbsp;<em>to</em>&nbsp;is used. TPE is similar in this regard. It uses <Valsi bangu="toki" valsi="tawa"/>:</div>
      <Mupli sefanva="mi tawa sina la mi toki e ni" gloss="When I am towards you, I say this. (literally)" xefanva="I say this to you."/>
      <Mupli sefanva="tawa" xefanva="to go to (some place), to be oriented towards (something or someone)"/>
      <h2>
        <span id="Differences_from_toki_pona">Differences from toki pona</span>
      </h2>
      <div>In toki pona language <Valsi bangu="toki" valsi="moku"/> as a noun can mean both "eater" ("the one who eats") and "food". in TPE it means onle "eater". For the second meaning you say:</div>
      <Mupli sefanva="mi moku e ijo. ona li pona" xefanva="I eat something. It (i.e. food) is good."/>
      <h2>
        <span id="Dictionary">Dictionary</span>
      </h2>
      <table className="wikitable">
        <tbody>
          <tr>
            <th>TPE word</th>
            <th>class</th>
            <th>translation</th>
            <th>translation with "e"</th>
            <th>as modal verb</th>
            <td>as pre-noun</td>
          </tr>
          <tr>
            <td>a, kin</td>
            <td>[interjection]</td>
            <td>(emphasis, emotion or confirmation)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>akesi</td>
            <td>[verb]</td>
            <td>is a non-cute animal (e.g. reptile, amphibian)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ala</td>
            <td>[verb]</td>
            <td>to be false, is not</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ala</td>
            <td>[number]</td>
            <td>zero</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>alasa</td>
            <td>[verb]</td>
            <td>to be a hunter</td>
            <td>to hunt, forage (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ale, ali</td>
            <td>[verb]</td>
            <td>to represent all of them or each of them; is in abundance, is countless, bountiful, plentiful</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>anpa</td>
            <td>[verb]</td>
            <td>to bow down, to be downwards, to be humble, low, dependent</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ante</td>
            <td>[verb]</td>
            <td>is different, altered, changed; other</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>anu</td>
            <td>[verb]</td>
            <td>to present either option; or</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>awen</td>
            <td>[verb]</td>
            <td>is enduring, kept, protected, safe, waiting, staying</td>
            <td>&nbsp;</td>
            <td>to continue to</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>e</td>
            <td>[particle]</td>
            <td>(before the second noun of a verb)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>en</td>
            <td>[verb]</td>
            <td>is a union, is connected; and</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>esun</td>
            <td>[verb]</td>
            <td>is a market, shop, fair, bazaar, business transaction</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ijo</td>
            <td>[verb]</td>
            <td>is a thing, phenomenon, object, matter</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ike</td>
            <td>[verb]</td>
            <td>is bad, non-essential, irrelevant</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ilo</td>
            <td>[verb]</td>
            <td>is a tool, implement, machine, device</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>insa</td>
            <td>[verb]</td>
            <td>is a center, content, the inside, is between, is an internal organ, stomach</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>jaki</td>
            <td>[verb]</td>
            <td>is disgusting, obscene, sickly, toxic, unclean, unsanitary</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>jan</td>
            <td>[verb]</td>
            <td>is a human being, person, somebody</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>jelo</td>
            <td>[verb]</td>
            <td>is yellow, yellowish</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>jo</td>
            <td>[verb]</td>
            <td>to have, carry, contain, hold</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kala</td>
            <td>[verb]</td>
            <td>is a fish, marine animal, sea creature</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kalama</td>
            <td>[verb]</td>
            <td>to produce a sound; recite; utter aloud</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kama</td>
            <td>[verb]</td>
            <td>to arrive, come, is in future</td>
            <td>to arrive to, come to (place)</td>
            <td>to become, manage to, succeed in</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kasi</td>
            <td>[verb]</td>
            <td>is a plant, vegetation, herb, leaf</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ken</td>
            <td>[verb]</td>
            <td>to be possible</td>
            <td>&nbsp;</td>
            <td>to be able to, be allowed to, can, may</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kepeken</td>
            <td>[verb]</td>
            <td>to use, is a user</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>to use (something); with, by means of (something)</td>
          </tr>
          <tr>
            <td>kili</td>
            <td>[verb]</td>
            <td>is a fruit, vegetable, mushroom</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kiwen</td>
            <td>[verb]</td>
            <td>is a rock, stone, metal, hard object</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ko</td>
            <td>[verb]</td>
            <td>is a clay, clinging form, dough, semi-solid, paste, powder</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kon</td>
            <td>[verb]</td>
            <td>is an air, to breath, is the essence, spirit, is a hidden reality, unseen agent</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kule</td>
            <td>[verb]</td>
            <td>is colorful, pigmented, painted</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kulupu</td>
            <td>[verb]</td>
            <td>is a community, company, group, nation, society, tribe</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>kute</td>
            <td>[verb]</td>
            <td>is an ear, to hear, listen, to pay attention to, obey</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>la</td>
            <td>[particle]</td>
            <td>(between the topic and comment)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lape</td>
            <td>[verb]</td>
            <td>to sleep, to rest</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>laso</td>
            <td>[verb]</td>
            <td>is blue, green</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lawa</td>
            <td>[verb]</td>
            <td>is a head, to represent a mind</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lawa</td>
            <td>[verb]</td>
            <td>to control, direct, guide, lead, own, plan, regulate, rule</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>len</td>
            <td>[verb]</td>
            <td>is a cloth, clothing, fabric, textile, cover, layer of privacy</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lete</td>
            <td>[verb]</td>
            <td>is cold, cool, uncooked, raw</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>li</td>
            <td>[particle]</td>
            <td>between any first noun except mi alone or sina alone and its verb; also used to introduce a new verb for the same first noun</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lili</td>
            <td>[verb]</td>
            <td>is little, small, short, to represent a small number; few, a bit, young</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>linja</td>
            <td>[verb]</td>
            <td>is long and flexible thing, is a line, cord, hair, rope, thread, yarn</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lipu</td>
            <td>[verb]</td>
            <td>is a flat object, book, document, card, paper, record, website</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>loje</td>
            <td>[verb]</td>
            <td>is red, reddish</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lon</td>
            <td>[verb]</td>
            <td>is located at, is present at, is real, true, existing</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>luka</td>
            <td>[verb]</td>
            <td>arm, hand, tactile organ</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>luka</td>
            <td>[number]</td>
            <td>five</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lukin</td>
            <td>[verb]</td>
            <td>to look, see, examine, observe, read, watch</td>
            <td>to look at, to see, examine, observe, read, watch (something)</td>
            <td>to seek, look for, try to</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>lupa</td>
            <td>[verb]</td>
            <td>is a door, hole, orifice, window</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ma</td>
            <td>[verb]</td>
            <td>is an earth, land, outdoors, world, country, territory, soil</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mama</td>
            <td>[verb]</td>
            <td>is a parent, ancestor, creator, originator, caretakes, sustainer</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mani</td>
            <td>[verb]</td>
            <td>is some money, cash, savings, wealth, large domesticated animal</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>meli</td>
            <td>[verb]</td>
            <td>is a woman, female, feminine person, wife</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mi</td>
            <td>[pronoun]</td>
            <td>I; me, we, us</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mije</td>
            <td>[verb]</td>
            <td>is a man, male, masculine person, husband</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>moku</td>
            <td>[verb]</td>
            <td>to eat, drink, consume, swallow, ingest</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>moli</td>
            <td>[verb]</td>
            <td>is dead, to die</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>monsi</td>
            <td>[verb]</td>
            <td>is back, behind, rear</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mu</td>
            <td>[interjection]</td>
            <td>(animal noise or communication)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mun</td>
            <td>[verb]</td>
            <td>is a moon, night sky object, star</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>musi</td>
            <td>[verb]</td>
            <td>is artistic, entertaining, frivolous, playful, recreational</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>mute</td>
            <td>[verb]</td>
            <td>to represent a large number; many, a lot, more, several, very</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>nanpa</td>
            <td>[particle]</td>
            <td>_-th (ordinal number)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>nanpa</td>
            <td>[verb]</td>
            <td>is a number, to represent some quantity</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>nasa</td>
            <td>[verb]</td>
            <td>is unusual, strange, foolish, crazy, drunk, intoxicated</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>nasin</td>
            <td>[verb]</td>
            <td>is a way, custom, doctrine, method, path, road</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>nena</td>
            <td>[verb]</td>
            <td>is a bump, button, hill, mountain, nose, protuberance</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ni</td>
            <td>[verb]</td>
            <td>is that, this (object or event)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>nimi</td>
            <td>[verb]</td>
            <td>is a name, word</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>noka</td>
            <td>[verb]</td>
            <td>is a foot, leg, organ of locomotion; bottom, lower part</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>o</td>
            <td>[interjection]</td>
            <td>hey! O! (vocative or imperative marker)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>oko</td>
            <td>[verb]</td>
            <td>is an eye</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>olin</td>
            <td>[verb]</td>
            <td>to love</td>
            <td>to love, have compassion for, respect, show affection to (someone or something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>ona</td>
            <td>[verb]</td>
            <td>is he, she, it, they</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>open</td>
            <td>[verb]</td>
            <td>to begin, start, open</td>
            <td>to begin, start, open, turn on (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pakala</td>
            <td>[verb]</td>
            <td>is botched, broken, damaged, harmed, messed up</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pali</td>
            <td>[verb]</td>
            <td>to do, take action on, work on, build, make, prepare (something)</td>
            <td>to do (some event)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>palisa</td>
            <td>[verb]</td>
            <td>is a long hard thing, branch, rod, stick</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pan</td>
            <td>[verb]</td>
            <td>is a cereal, grain; barley, corn, oat, rice, wheat; bread, pasta</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pana</td>
            <td>[verb]</td>
            <td>to give, send, emit, provide, put, release</td>
            <td>to give, send, emit, provide, put, release (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pi</td>
            <td>[particle]</td>
            <td>of</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pilin</td>
            <td>[verb]</td>
            <td>is a heart (physical or emotional)</td>
            <td>to feel (something; an emotion, a direct experience)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pimeja</td>
            <td>[verb]</td>
            <td>is black, dark, unlit</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pini</td>
            <td>[verb]</td>
            <td>is in past, is completed, ended, finished</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pipi</td>
            <td>[verb]</td>
            <td>is a bug, insect, ant, spider</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>poka</td>
            <td>[verb]</td>
            <td>is a hip, side, nearby</td>
            <td>to be next to (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>poki</td>
            <td>[verb]</td>
            <td>is a container, bag, bowl, cup, cupboard, drawer, vessel</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pona</td>
            <td>[verb]</td>
            <td>is good, positive, useful, friendly, peaceful, simple</td>
            <td>to repair (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>pu</td>
            <td>[verb]</td>
            <td>to interact with the official Toki Pona book</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sama</td>
            <td>[verb]</td>
            <td>is the same, similar, is a sibling, peer, fellow; each other</td>
            <td>is the same as (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>seli</td>
            <td>[verb]</td>
            <td>is a fire, is a cooking element, chemical reaction, heat source</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>selo</td>
            <td>[verb]</td>
            <td>is an outer form, outer layer, bark, peel, shell, skin, boundary</td>
            <td>is an outer part of (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>seme</td>
            <td>[verb]</td>
            <td>is what? is which?</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sewi</td>
            <td>[verb]</td>
            <td>is an area above, highest part, something elevated, is awe-inspiring, divine, sacred, supernatural</td>
            <td>is an area above (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sijelo</td>
            <td>[verb]</td>
            <td>is a body (of person or animal), physical state, torso</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sike</td>
            <td>[verb]</td>
            <td>is round or circular thing, ball, circle, cycle, sphere, wheel, one year long</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sin</td>
            <td>[verb]</td>
            <td>is new, fresh, additional, another, extra</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>namako</td>
            <td>[verb]</td>
            <td>is special, gist, new, fresh, woman as a special thing, to have umami taste</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sina</td>
            <td>[PRONOUN]</td>
            <td>you</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sinpin</td>
            <td>[verb]</td>
            <td>is a face, foremost, front, wall</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sitelen</td>
            <td>[verb]</td>
            <td>is an image, picture, representation, symbol, mark</td>
            <td>is an image, picture, representation, symbol, mark of (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>sona</td>
            <td>[verb]</td>
            <td>to know</td>
            <td>to be skilled in, be wise about, have information on (something)</td>
            <td>to know how to</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>soweli</td>
            <td>[verb]</td>
            <td>is an animal, beast, land mammal</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>suli</td>
            <td>[verb]</td>
            <td>is big, heavy, large, tall, important; adult</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>suno</td>
            <td>[verb]</td>
            <td>is the sun, light, bright, is a glow, radiance, shine, light source</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>supa</td>
            <td>[verb]</td>
            <td>is a horizontal surface, thing to put or rest something on</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>suwi</td>
            <td>[verb]</td>
            <td>is sweet, fragrant, cute, innocent, adorable</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>tan</td>
            <td>[verb]</td>
            <td>to be the reason or source</td>
            <td>to be the reason or source of (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>taso</td>
            <td>[verb]</td>
            <td>to contradict; but, however, only</td>
            <td>to contradict (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>tawa</td>
            <td>[verb]</td>
            <td>to go, move, be oriented</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>to go to, to move to, to be oriented towards (something)</td>
          </tr>
          <tr>
            <td>telo</td>
            <td>[verb]</td>
            <td>is a water, liquid, fluid, wet substance, beverage</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>tenpo</td>
            <td>[verb]</td>
            <td>is the time, duration, moment, occasion, period, situation</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>toki</td>
            <td>[verb]</td>
            <td>to say, speak, talk (something), to communicate, use language, think</td>
            <td>to say (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>tomo</td>
            <td>[verb]</td>
            <td>is an indoor space, building, home, house, room</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>tu</td>
            <td>[number]</td>
            <td>two</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>tu</td>
            <td>[verb]</td>
            <td>is a pair</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>unpa</td>
            <td>[verb]</td>
            <td>to have sexual or marital relations</td>
            <td>to have sexual or marital relations with (someone)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>uta</td>
            <td>[verb]</td>
            <td>is a mouth, lips, oral cavity, jaw</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>utala</td>
            <td>[verb]</td>
            <td>to battle, challenge, compete against, struggle against</td>
            <td>to battle, challenge, compete against, struggle against (something)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>walo</td>
            <td>[verb]</td>
            <td>is white, whitish, light-colored, pale</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>wan</td>
            <td>[verb]</td>
            <td>is unique, united</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>wan</td>
            <td>[number]</td>
            <td>one</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>waso</td>
            <td>[verb]</td>
            <td>is a bird, flying creature, winged animal</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>wawa</td>
            <td>[verb]</td>
            <td>is strong, powerful, confident, sure, energetic, intense</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>weka</td>
            <td>[verb]</td>
            <td>is absent, away, ignored</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>wile</td>
            <td>[verb]</td>
            <td>must, need, require, should, want, wish</td>
            <td>&nbsp;</td>
            <td>must, need, require, should, want, wish to do (something)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Comp;

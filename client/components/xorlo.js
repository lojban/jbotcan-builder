import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import {Valsi, Url, Mupli, PrituPixra, Title} from './selfu/sutysisku.js';
const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Title title="What is xorlo in Lojban and how to use it" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div className={cx('content-panel', 'paragraph')}>
      <div>
        <div className="thumb tright">
          <div className="thumbinner">
            <a className="image" href="https://mw.lojban.org/papri/File:khor-lo.jpg"><img className="thumbimage" src="https://mw.lojban.org/images/0/0a/khor-lo.jpg" alt width={275} height={305}/></a>
            <div className="thumbcaption">
              <div className="magnify">&nbsp;</div>
              zoi by.འཁོར་ལོ།.by.<br/>noi se sance zoi zoi.<strong>xorlo</strong>.zoi<br/>valsi lu&nbsp;<strong>lo xislu</strong>&nbsp;li'u lo banbu'odu</div>
          </div>
        </div>
        <div id="toc" className="toc">
          <div id="toctitle" className="toctitle">
            <h2>Contents</h2>
          </div>
          <ul>
            <li className="toclevel-1 tocsection-1">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#Abbrevs">
                <span className="tocnumber">1</span>&nbsp;<span className="toctext">Abbrevs</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-2">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#Scope_generators">
                <span className="tocnumber">2</span>&nbsp;<span className="toctext">Scope generators</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-3">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#lo">
                <span className="tocnumber">3</span>&nbsp;<span className="toctext">
                  <strong>lo</strong>
                </span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-4">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#Pragmatic_utility_of_lo">
                <span className="tocnumber">4</span>&nbsp;<span className="toctext">Pragmatic utility of&nbsp;<strong>lo</strong>
                </span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-5">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#lo.2C_da_poi.2C_pa_broda_similarity_and_differences">
                <span className="tocnumber">5</span>&nbsp;<span className="toctext">
                  <strong>lo</strong>,&nbsp;<strong>da poi</strong>,&nbsp;<strong>pa broda</strong>&nbsp;similarity and differences</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-6">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#pa_broda">
                <span className="tocnumber">6</span>&nbsp;<span className="toctext">
                  <strong>pa broda</strong>
                </span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-7">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#Examples_of_scope_boundaries">
                <span className="tocnumber">7</span>&nbsp;<span className="toctext">Examples of scope boundaries</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-8">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#ci_gerku_and_ci_lo_gerku">
                <span className="tocnumber">8</span>&nbsp;<span className="toctext">
                  <strong>ci gerku</strong>&nbsp;and&nbsp;<strong>ci lo gerku</strong>
                </span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-9">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#le_and_particularity_vs._any-ness">
                <span className="tocnumber">9</span>&nbsp;<span className="toctext">
                  <strong>le</strong>&nbsp;and particularity vs. any-ness</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-10">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#voi">
                <span className="tocnumber">10</span>&nbsp;<span className="toctext">
                  <strong>voi</strong>
                </span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-11">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#Veridicality">
                <span className="tocnumber">11</span>&nbsp;<span className="toctext">Veridicality</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-12">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#outer_quantifiers_for_predicate_arguments_in_the_discourse">
                <span className="tocnumber">12</span>&nbsp;<span className="toctext">outer quantifiers for predicate arguments in the discourse</span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-13">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#pre-xorlo_expansions_of_lo.2C_le.2C_la">
                <span className="tocnumber">13</span>&nbsp;<span className="toctext">pre-xorlo expansions of&nbsp;<strong>lo</strong>,&nbsp;<strong>le</strong>,&nbsp;<strong>la</strong>
                </span>
              </a>
            </li>
            <li className="toclevel-1 tocsection-14">
              <a href="https://mw.lojban.org/index.php?title=xorlo_as_seen_by_La_Gleki&action=render#.22Back_to_CLL_1.0.22_ideology_.28Neo-prexorloism.29">
                <span className="tocnumber">14</span>&nbsp;<span className="toctext">"Back to CLL 1.0" ideology (Neo-prexorloism)</span>
              </a>
            </li>
          </ul>
        </div>
        <h2>
          <span id="Abbrevs" className="mw-headline">Abbrevs</span>
        </h2>
        <dl>
          <dt>UD</dt>
          <dd>Universe of Discourse</dd>
        </dl>
        <h2>
          <span id="Scope_generators" className="mw-headline">Scope generators</span>
        </h2>
        <p>
          <strong>da</strong>&nbsp;series,&nbsp;<a className="mw-redirect" title="preposition" href="https://mw.lojban.org/papri/preposition">prepositions</a>&nbsp;create scope.</p>
        <p>lo bridi can have a prenex that declares&nbsp;<strong>da</strong>.</p>
        <p>All&nbsp;<strong>da</strong>&nbsp;that are not declared in the prenex of the bridi where they are used are inherited from lo bridi from higher levels:&nbsp;<strong>su'o da zo'u da broda lo nu da brode</strong>&nbsp;- here, the last&nbsp;<strong>da</strong>&nbsp;in inherited from the first&nbsp;<strong>da</strong>.</p>
        <p>All&nbsp;<strong>da</strong>&nbsp;that are declared in the prenex of the bridi where they are used shadow all the&nbsp;<strong>da</strong>&nbsp;declared at higher levels:&nbsp;<strong>su'o da zo'u da broda lo nu su'o da da zo'u da brode</strong>&nbsp;- here, the last&nbsp;<strong>da</strong>&nbsp;is given a new scope, it's actually a new variable and in this inner bridi the first&nbsp;<strong>da</strong>&nbsp;is longer valid.</p>
        <p>Prepositions,&nbsp;<strong>pa da</strong>-like and&nbsp;<strong>pa broda</strong>-like nouns create scope to the right of each of them.</p>
        <p>Pure&nbsp;<strong>da</strong>&nbsp;with its quantification declared in the prenex doesn't create scope.</p>
        <p>
          <strong>lo</strong>-like nouns have the top priority scope within the entire UD to the left and to the right of them up to the boundaries of UD, they don't scope over each other.</p>
        <h2>
          <span id="lo" className="mw-headline">
            <span className="plainlinks">
              <strong>
                <a className="external text" href="http://jbovlaste.lojban.org/dict/lo" target="_blank" rel="nofollow noreferrer noopener">lo</a>
              </strong>
            </span>
          </span>
        </h2>
        <ul>
          <li>This construct doesn't have a prenex thus every usage of it creates a new scope and a new variable.</li>
          <li>Additionally all variables implicitly created by&nbsp;<strong>lo</strong>&nbsp;have top scope.</li>
        </ul>
        <p>
          <span className="plainlinks">
            <strong>
              <a className="external text" href="http://jbovlaste.lojban.org/dict/lo" target="_blank" rel="nofollow noreferrer noopener">lo</a>
            </strong>
          </span>&nbsp;means the same as&nbsp;<span className="plainlinks">
            <strong>
              <a className="external text" href="http://jbovlaste.lojban.org/dict/da" target="_blank" rel="nofollow noreferrer noopener">da</a>
            </strong>
          </span>&nbsp;<span className="plainlinks">
            <strong>
              <a className="external text" href="http://jbovlaste.lojban.org/dict/poi" target="_blank" rel="nofollow noreferrer noopener">poi</a>
            </strong>
          </span>&nbsp;except it's implicitly declared in an implicit UD-wide prenex and therefore has a different scope.</p>
        <p>UD-wide prenex is always implicit, in other words&nbsp;<strong>lo broda</strong>&nbsp;has no prenex, it's always quantified only in place where it is used.&nbsp;<strong>lo</strong>&nbsp;is imposible to redeclare in UD.</p>
        <p>No matter how much context is given&nbsp;<strong>lo</strong>&nbsp;can always be rephrased using a&nbsp;<strong>da poi</strong>&nbsp;prenex wrapped into new scopes</p>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>lo plise cu kukte<br/>su'o da poi plise zo'u da kukte</strong><br/>
                <em>Apples are tasty.</em>
              </td>
            </tr>
          </tbody>
        </table>
        <p>The difference is that&nbsp;<strong>lo</strong>&nbsp;doesn't require and is not capable of any explicit variable declarations.</p>
        <p>More examples:</p>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>lo pa valsi cu se vamji ko'a<br/>rau da poi valsi zo'u da se vamji ko'a</strong><br/>
                <em>One word (any word) is worth ko'a.</em>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>lo pa bangu noroi jai banzu<br/>no nu pa da bangu cu banzu</strong><br/>
                <em>One language (any language) is never enough.</em>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>
          <span id="Pragmatic_utility_of_lo" className="mw-headline">Pragmatic utility of&nbsp;<strong>lo</strong>
          </span>
        </h2>
        <p>The only utility of&nbsp;<strong>lo</strong>&nbsp;compared to&nbsp;<strong>da poi</strong>&nbsp;is</p>
        <ol>
          <li>the ability to percolate through boundaries imposed by prepositions,&nbsp;<strong>da</strong>&nbsp;and&nbsp;<strong>pa broda</strong>-like nouns</li>
        </ol>
        <p>As one of the consequences of that is that&nbsp;<strong>lo</strong>&nbsp;allow for free word order.</p>
        <h2>
          <span id="lo.2C_da_poi.2C_pa_broda_similarity_and_differences" className="mw-headline">
            <strong>lo</strong>,&nbsp;<strong>da poi</strong>,&nbsp;<strong>pa broda</strong>&nbsp;similarity and differences</span>
        </h2>
        <p>The basic and most important similarity is that</p>
        <ul>
          <li>nothing within UD is able to penetrate the scope of&nbsp;<strong>lo</strong>.</li>
          <li>declared&nbsp;<strong>da</strong>&nbsp;from upper scopes is not able to penetrate the scope of another&nbsp;<strong>da</strong>&nbsp;declared at levels inner to the first (upper)&nbsp;<strong>da</strong>. When needed&nbsp;<strong>goi</strong>-type assignments to intermediate pointers can be used.</li>
        </ul>
        <p>Examples:</p>
        <ul>
          <li>
            <strong>su'o da zo'u da gasnu lo nu su'o da zo'u da brode</strong>
            <ol>
              <li>
                <strong>da</strong>&nbsp;is not able to redeclare the&nbsp;<strong>da</strong>&nbsp;in&nbsp;<strong>da brode</strong>&nbsp;because the latter&nbsp;<strong>da</strong>&nbsp;is explicitly declared in the inner bridi.</li>
              <li>the scope of&nbsp;<strong>da brode</strong>&nbsp;is beyond the scope of the first&nbsp;<strong>da</strong>
              </li>
            </ol>
          </li>
          <li>
            <strong>su'o da zo'u da gasnu lo brode</strong>
            <ol>
              <li>
                <strong>da</strong>&nbsp;is not able to redeclare&nbsp;<strong>lo brode</strong>&nbsp;(because there are not explicit variables)</li>
              <li>the scope of&nbsp;<strong>lo brode</strong>&nbsp;is beyond the scope of&nbsp;<strong>da</strong>
              </li>
            </ol>
          </li>
          <li>
            <strong>su'o da zo'u da gasnu pa brode</strong>
            <ol>
              <li>
                <strong>da</strong>&nbsp;is not able to redeclare&nbsp;<strong>pa brode</strong>&nbsp;(because there are not explicit variables)</li>
              <li>the scope of&nbsp;<strong>pa brode</strong>&nbsp;is within the scope of&nbsp;<strong>da</strong>
              </li>
            </ol>
          </li>
        </ul>
        <h2>
          <span id="pa_broda" className="mw-headline">
            <strong>pa broda</strong>
          </span>
        </h2>
        <ul>
          <li>This construct doesn't have a prenex thus every usage of it creates a new scope and a new variable.</li>
        </ul>
        <h2>
          <span id="Examples_of_scope_boundaries" className="mw-headline">Examples of scope boundaries</span>
        </h2>
        <p>Some scopes are shown here with their boundaries marked with&nbsp;<strong>[ ... ]</strong>.</p>
        <ul>
          <li>
            <strong>nu [mi broda] kei</strong>
          </li>
          <li>
            <strong>su'o da [broda de]</strong>
          </li>
          <li>
            <strong>mi na ku [bai ku [klama da]]</strong>
          </li>
        </ul>
        <h2>
          <span id="ci_gerku_and_ci_lo_gerku" className="mw-headline">
            <strong>ci gerku</strong>&nbsp;and&nbsp;<strong>ci lo gerku</strong>
          </span>
        </h2>
        <blockquote className="toccolours">By a quirk of Lojban syntax, it is possible to omit the descriptor “lo”, but never any other descriptor, from a description like that of Example 7.5; namely, one which has an explicit outer quantifier but no explicit inner quantifier.
          <p>—&nbsp;<a className="external text" href="https://lojban.github.io/cll/6/8/" target="_blank" rel="nofollow noreferrer noopener">CLL 1.0</a>
          </p>
        </blockquote>
        <p>In other words, in CLL 1.0&nbsp;<strong>ci gerku</strong>&nbsp;and&nbsp;<strong>ci lo gerku</strong>&nbsp;meant the same. After the&nbsp;<a className="mw-redirect" title="xorlo" href="https://mw.lojban.org/papri/xorlo">xorlo</a>&nbsp;reform the expansions are:</p>
        <p>
          <code>
            <strong>ci &nbsp;&nbsp;&nbsp;gerku</strong>&nbsp;=&nbsp;<em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>ci da poi ke'a</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>gerku</strong>
            </em>
          </code><br/>
          <code>
            <strong>ci lo gerku = ci me lo gerku</strong>&nbsp;=&nbsp;<em>
              <strong>ci da poi ke'a</strong>&nbsp;me lo&nbsp;<strong>gerku</strong>
            </em>
          </code>
        </p>
        <p>Hence, the difference is only in top-level declarations of dogs (by saying of implying&nbsp;<strong>lo gerku</strong>&nbsp;somewhere in UD) in&nbsp;<strong>ci lo gerku</strong>&nbsp;construct.</p>
        <p>After the xorlo reform the difference is still very subtle to think of any useful difference between them.</p>
        <h2>
          <span id="le_and_particularity_vs._any-ness" className="mw-headline">
            <strong>le</strong>&nbsp;and particularity vs. any-ness</span>
        </h2>
        <dl>
          <dd>
            <strong>le</strong>&nbsp;=&nbsp;<em>non-veridical descriptor: the one(s) described as ...</em>
          </dd>
        </dl>
        <dl>
          <dd>
            <strong>le zarci</strong>&nbsp;=&nbsp;<em>one-or-more-specific-things-each-of-which-I-describe-as being-a-market</em>
          </dd>
        </dl>
        <blockquote className="toccolours">“le” is quite close in meaning to English “the”...<br/>...“le” ... indicates that the speaker has one or more specific markets in mind (whether or not the listener knows which ones they are). Second, it also indicates that the speaker is merely describing the things he or she has in mind ..., without being committed to the truth of that description.
          <p>—&nbsp;<a className="external text" href="https://lojban.github.io/cll/6/2/" target="_blank" rel="nofollow noreferrer noopener">CLL 1.0</a>
          </p>
        </blockquote>
        <p>The description of the meaning of&nbsp;<strong>le</strong>&nbsp;is not very precise. Instead of</p>
        <dl>
          <dd>
            <strong>le zarci</strong>&nbsp;=&nbsp;<em>one-or-more-specific-things-each-of-which-I-describe-as being-a-market</em>
          </dd>
        </dl>
        <p>I suggest this glossing:</p>
        <dl>
          <dd>
            <strong>le zarci</strong>&nbsp;=&nbsp;<em>one-or-more-specific-things-each-of-which-I-describe-in-this-UD-as being-a-market</em>
          </dd>
        </dl>
        <p>Other explanations of&nbsp;<strong>le</strong>&nbsp;above are fine whether or not they are useful to turn Lojban into a colloquial language to be used to bake cookies. Namely, these explanations are fine if we assume that "the" is to be used anaphorically/cataphorically/exophorically:</p>
        <ul>
          <li>
            <code>“le” is quite close in meaning to English “the”</code>
          </li>
          <li>
            <code>whether or not the listener knows which ones they are</code>
          </li>
        </ul>
        <p>In CLL 1.0 both&nbsp;<strong>da poi</strong>&nbsp;and&nbsp;<strong>lo</strong>&nbsp;can be translated as "some/any".&nbsp;<strong>le</strong>&nbsp;is opposed to both of them.</p>
        <h2>
          <span id="voi" className="mw-headline">
            <strong>voi</strong>
          </span>
        </h2>
        <p>
          <strong>le</strong>&nbsp;was poorly understood because people were relying on logical theories that for most parts ignored the notion of discourse (that is more related to linguistics). However, although&nbsp;<strong>le</strong>&nbsp;was more or less caught a similar particle&nbsp;<strong>voi</strong>&nbsp;was not popular.</p>
        <p>The relation is</p>
        <ul>
          <li>
            <strong>noi/poi</strong>&nbsp;-&nbsp;<strong>lo</strong>
          </li>
          <li>
            <strong>voi</strong>&nbsp;-&nbsp;<strong>le</strong>
          </li>
        </ul>
        <p>Here,&nbsp;<strong>voi</strong>&nbsp;starts a relative clause but unlike&nbsp;<strong>noi</strong>&nbsp;and&nbsp;<strong>poi</strong>&nbsp;it refers to things/events/etc. that the speaker has in their mind, that is that have already been created for the speaker's UD.</p>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>za'a melbi vanbi i lo vacri voi melbi vanbi cu vifne</strong><br/>
                <em>Such a nice neighbourhood. The air here is fresh.</em>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>mu da prenu gi'e zvati le kumfa i pa pendo be mi ku voi zvati cu xanka</strong><br/>
                <em>There are five people present in the room. There is one friend of mine present there and he/she is nervous.</em>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>
          <span id="Veridicality" className="mw-headline">Veridicality</span>
        </h2>
        <dl>
          <dd>
            <strong>lo</strong>&nbsp;=&nbsp;<em>at least one of all of those which really are</em>
          </dd>
        </dl>
        <p>CLL deals with veridicality when showing&nbsp;<strong>lo</strong>/<strong>le</strong>&nbsp;distinction.</p>
        <p>"veritas" implies knowledge, thus implies either&nbsp;<span className="plainlinks">
            <strong>
              <a className="external text" href="http://jbovlaste.lojban.org/dict/jetnu" target="_blank" rel="nofollow noreferrer noopener">jetnu</a>
            </strong>
          </span>2 or&nbsp;<span className="plainlinks">
            <strong>
              <a className="external text" href="http://jbovlaste.lojban.org/dict/djuno" target="_blank" rel="nofollow noreferrer noopener">djuno</a>
            </strong>
          </span>1 and thus requires for presence either epistemology or the subject who knows.</p>
        <ul>
          <li>for&nbsp;<strong>lo</strong>&nbsp;<code>at least one of all of those which really are</code>, the definition provided by CLL, is fine provided that veridicality is explained (even if implicitly or by context) in UD.</li>
        </ul>
        <p>Hence, the whole idea of veridicality is correct and only needs paedagogical rephrasings leading to a colloquial "logical" Lojban becoming real.</p>
        <h2>
          <span id="outer_quantifiers_for_predicate_arguments_in_the_discourse" className="mw-headline">outer quantifiers for predicate arguments in the discourse</span>
        </h2>
        <p>Nouns to be referred to can also be quantified:</p>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>ci gerku cu batci lo remna i re le gerku cu citka lo rectu</strong><br/>
                <em>There are 3 dogs that bite humans. For two of them: each eats meat.</em>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Notice that when using this method "<strong>ci gerku</strong>"/"<strong>ci lo gerku</strong>" distinction is unreachable.</p>
        <h2>
          <span id="pre-xorlo_expansions_of_lo.2C_le.2C_la" className="mw-headline">pre-xorlo expansions of&nbsp;<strong>lo</strong>,&nbsp;<strong>le</strong>,&nbsp;<strong>la</strong>
          </span>
        </h2>
        <p>They were expanded as</p>
        <ul>
          <li>
            <strong>le</strong>:
            <ul>
              <li>
                <strong>ro le su'o</strong>
              </li>
              <li>all of the at-least-one described as</li>
            </ul>
          </li>
          <li>
            <strong>lo</strong>:
            <ul>
              <li>
                <strong>su'o lo ro</strong>
              </li>
              <li>at least one of all of those which really are</li>
            </ul>
          </li>
          <li>
            <strong>la</strong>:
            <ul>
              <li>
                <strong>ro la su'o</strong>
              </li>
              <li>all of the at least one named</li>
            </ul>
          </li>
        </ul>
        <p>That's too late to take them into account due to a natural shift in Lojban usage leading to the adoption of&nbsp;<a title="BPFK Section: gadri" href="https://mw.lojban.org/papri/BPFK_Section:_gadri#Formal_definitions">BPFK</a>&nbsp;expansions.</p>
        <h2>
          <span id=".22Back_to_CLL_1.0.22_ideology_.28Neo-prexorloism.29" className="mw-headline">"Back to CLL 1.0" ideology (Neo-prexorloism)</span>
        </h2>
        <p>With the explanations provided above the distinction between "&nbsp;<strong>lo/da</strong>&nbsp;and&nbsp;<strong>le</strong>&nbsp;", which is described in CLL 1.0 (no matter how awkward or inutile the description is for colloquial usage), is nevertheless in general fine and useful for the language design and its applications (e.g. through translations into Laymen English).</p>
        <p>In short it describes the difference between indefiniteness (<strong>lo</strong>&nbsp;and&nbsp;<strong>da</strong>) and definiteness, id est anaphora/cataphora/exophora.</p>
      </div>
    </div>
  </div>
);

export default Comp;

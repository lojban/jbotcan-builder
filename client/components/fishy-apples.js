import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';
const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="Tlön, Uqbar and La Gleki's fishy apples" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>Tlön, Uqbar and La Gleki's fishy apples</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <p><PrituPixra url="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/C_solarcorona2003.gif?raw=true" name="Their language and the derivations of their language — religion, letters, metaphysics — all presuppose idealism. The world for them is not a concourse of objects in space; it is a heterogeneous series of independent acts. It is successive and temporal, not spatial."/><PrituPixra url="https://github.com/La-Lojban/suho-pixra-pe-la-jbotcan/blob/master/Costa_Rica_Unicorn_2800px.jpg?raw=true" name="A Chinese prose writer has observed that the unicorn, because of its own anomaly, will pass unnoticed. Our eyes see what they are accustomed to seeing."/>What I state here is that there are no objects in linguistic sense. Do they exist in reality is of no matter from this viewpoint. What is an apple? It's not an object. It's just a combination of properties.</p>
      <p><Mupli sefanva="Something smooth+red+round+tasty =&gt; apple."/></p>
      <p>In order to make this even more clear let's assume you close your eyes and someone puts a slice of something salty in your mouth. You <u>taste</u>&nbsp; it. You are sure it's a piece of a fish. You say "It's a fish".</p>
      <p>Now open your eyes. Now you <u>see</u> that it's an apple. Whaat?? An apple that tasted of fish? Yes. And yes, that's unusual.</p>
      <p>Now you would probably be shocked. You'll definitely try to invent a new word for this apple as it's not a true apple. You'll probably call it "fishy apple".</p>
      <p>This is where fuzzy logic starts. I don't think I would call a brown apple&nbsp;<Valsi valsi='cribe'/>&nbsp; just because it shares some properties with bears (namely, the color). Although I wouldn't object much if you decide otherwise.</p>
      <p>However, what I state is that humans can't perceive such continuum. They need fixed combinations of time/space/property. They call such combinations "objects".</p>
      <p>There is a legend that the Indians could not see Christopher Columbus' ships as they approached just because they didn't perceive such strange combinations of properties as objects. They obviously had no words for "ships". They had to learn to understand such things. The same can be said about UFOs. In Middle Ages people called them "angels". We call them "alien ships". Camera thinks otherwise. One needs to get clear understanding what's going on to convert a number of properties into an "object=combination of properties".</p>
      <p>And of course one needs to read the story <Url url="https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/Uqbar.pdf" name="Tl&ouml;n, Uqbar, Orbis Tertius"/> to get full understanding what it means to have words for such combinations of properties as</p>
      <blockquote>the sun and the water on a swimmer's chest, the vague tremulous rose color we see with our eyes closed, the sensation of being carried along by a river and also by sleep.</blockquote>
      <p>When you come home and hear someone scratching against your door (whether it's a hypothetical situation or you hear it every day when you come home) it's the same object&nbsp;<Valsi valsi='da'/>. More precisely&nbsp;<Valsi valsi='da sraku'/>. However, even if you have two animals at home each of whom can scratch it'll be the same&nbsp;<Valsi valsi='da'/>&nbsp;every day. <Valsi valsi='da'/> doesn't need to distribute over real individuals. <Valsi valsi='da'/>&nbsp; just has the property of scratching. It can magically transform from a dog into a cat. That's how&nbsp;<Valsi valsi='da mlatu ca de'/> or <Valsi valsi='da mlatu fau de'/> works (<Valsi valsi="de"/> = <Valsi valsi="lo nu da sraku"/>, <Valsi valsi="de"/> is a world/situation).</p>
      <h1>Three types of languages</h1>
      <p>There are 3 types of languages in the world: object languages, property languages and process languages.</p>
      <p>The verb "to be" can be split into two in certain Romance languages. For example, the Spanish "ser" vs. "estar". This permanent vs. temporary sort of difference might be expressed in Lojban by the abundance of aspects and tenses, but what is really important that Sapir-Whorf hypothesis is clearly shown here. If some Native Americans call river "flowing of water" it is indeed a process. It's the same as if you start pouring water from a kettle. Likewise, the river might've started flowing thousands of years ago and might stop one day due to tectonic process for example.</p>
      <p>In property languages instead of "Moon" one has to say something like "bright yellow high round".</p>
      <p>In object languages people divide the world into</p>
      <ul>
        <li>objects that</li>
        <li>exist or do not exist</li>
        <p>Lojban shouldn't force people to use either philosophy.</p>
      </ul>
      <h2>Further reading</h2>
      <ul>
        <li>
          <Url url="https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/Uqbar.pdf" name="'Tlön, Uqbar, Orbis Tertius' by Jorge Luis Borges"/>
        </li>
        <li>
          <Url url="https://mw.lojban.org/papri/Sapir-Whorf_Hypothesis" name="Sapir-Whorf Hypothesis"/>
        </li>
        <li>
          <Url url="https://mw.lojban.org/papri/Bear_goo" name="Bear goo"/>
        </li>
        <li>
          <Url url="https://mw.lojban.org/papri/BPFK_Section:_sensory_gismu" name="BPFK Section: sensory gismu"/>
        </li>
        <li>
          <Url url="https://mw.lojban.org/papri/ELG:_Subjunctives_in_detail" name="ELG: Subjunctives in detail"/>
        </li>
        <li>
          <Url url="https://en.wikipedia.org/wiki/Cognitive_dissonance" name="Cognitive dissonance"/>
        </li>
        <li>
          <Url url="http://www.themodernword.com/borges/Zahir_and_I.html" name="Andrew Hurley,&nbsp;'The Zahir and I, The Garden of Forking Paths, part of TheModernWorld.com.'"/>
        </li>
      </ul>
    </div>
  </div>
)

export default Comp;

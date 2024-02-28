import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/index.js';
import Ralju from './components/ralju.js';
import About from './components/about/';
import Bob from './components/bob-le-chevalier/';
import Speakable from './components/speakable/';
import History from './components/history/';
import Chat from './components/chat/';
import Programming from './components/programming/';
import GismuFreeSpace from './components/gismu-free-space/';
import BNF from './components/bnf/';
import SWHConfirmed from './components/SWHConfirmed/';
import Attitudinal from './components/attitudinal.js';
import Dialects from './components/dialects.js';
import Opinions from './components/opinions.js';
import VerbsBroken from './components/verbs-broken.js';
import PerfTax from './components/perfect-taxonomy.js';
import Fishy from './components/fishy-apples.js';
import Speed from './components/speed-of-thought.js';
import Kru from './components/krulermorna.js';
import TPE from './components/toki-pona-enhanced.js';
import TP from './components/tokipona.js';
import Xorlo from './components/xorlo.js';
import Anti from './components/anti-lojban-medals.js';
import Liberated from './components/liberated.js';
import PLDead from './components/predicate-language-dead.js';
import Navy from './components/navy-seal.js';
import Thlunrana from './components/thlunrana.js';
import Le from './components/meaning-of-le.js';
import NotFound from './components/not_found.js';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Ralju} />
    <Route path="about/" component={About} />
    <Route path="bob-le-chevalier/" component={Bob} />
    <Route path="speakable/" component={Speakable} />
    <Route path="history/" component={History} />
    <Route path="programming/" component={Programming} />
    <Route path="chat-in-lojban/" component={Chat} />
    <Route path="free-gismu-space/" component={GismuFreeSpace} />
    <Route path="bnf/" component={BNF} />
    <Route path="lojban/en/SWH_confirmed.html/" component={SWHConfirmed} />
    <Route path="lojban/en/attitudinal/" component={Attitudinal} />
    <Route path="lojban/en/dialects/" component={Dialects} />
    <Route path="lojban/en/opinions.html/" component={Opinions} />
    <Route path="lojban/en/lojban-taxonomy.html/" component={PerfTax} />
    <Route path="lojban/en/verbs-broken.html/" component={VerbsBroken} />
    <Route path="lojban/en/tlon-uqbar-la-gleki-fishy-apples/" component={Fishy} />
    <Route path="lojban/en/speed-of-thought/" component={Speed} />
    <Route path="lojban/en/krulermorna/" component={Kru} />
    <Route path="tokipona/enhanced/" component={TPE} />
    <Route path="tokipona/" component={TP} />
    <Route path="lojban/en/xorlo/" component={Xorlo} />
    <Route path="lojban/en/lojban-against-languages/" component={Anti} />
    <Route path="lojban/en/lojban-liberated/" component={Liberated} />
    <Route path="lojban/en/predicate-language-dead/" component={PLDead} />
    <Route path="lojban/en/navy-seal-copypasta/" component={Navy} />
    <Route path="lojban/en/meaning-of-le-and-lo/" component={Le} />
    <Route path="lojban/en/how-the-enemy-came-to-thlunrana/" component={Thlunrana} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;

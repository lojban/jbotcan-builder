import React from 'react';
import classnames from 'classnames/bind';
import styles from '../styling/style.css';
import Helmet from 'react-helmet';
import {Valsi, Url, Mupli, PrituPixra} from './selfu/sutysisku.js';

const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet title="toki pona" meta={[{
        name: 'Lojban language',
        content: 'forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <h1>toki pona</h1>
    <div className={cx('content-panel', 'paragraph')}>
      <PrituPixra url="https://mw.lojban.org/images/thumb/e/e9/tpe.png/300px-tpe.png" name="toki pona enhanced, one of the unoffical symbols"/>
      <p>A minimalistic language with simplified grammar and lexicon. Has around ~150 words only. Created by Sonja Elen Kisa in 2001.</p>
        <p>Here are some examples of Lojban and toki pona sentences.</p>
        <table className="wikitable">
          <tbody>
            <tr>
              <td>sina</td>
              <td>tawa</td>
              <td>ala</td>
              <td colspan="5">tawa</td>
            </tr>
            <tr>
              <td><strong>do</strong></td>
              <td><strong>klama</strong></td>
              <td><strong>ji</strong></td>
              <td colspan="5"><strong>klama</strong></td>
            </tr>
            <tr>
              <td colspan="5"></td>
            </tr>
            <tr>
              <td>mi</td>
              <td>moku</td>
              <td>e</td>
              <td>kili</td>
            </tr>
            <tr>
              <td><strong>mi</strong></td>
              <td><strong>citka</strong></td>
              <td><strong>fe lo</strong></td>
              <td><strong>grute</strong></td>
            </tr>
            <tr>
              <td colspan="5"></td>
            </tr>
            <tr>
              <td>sina</td>
              <td>wile</td>
              <td>pali</td>
              <td>e</td>
              <td>seme</td>
            </tr>
            <tr>
              <td><strong>do</strong></td>
              <td><strong>audji lo ka</strong></td>
              <td><strong>zukte</strong></td>
              <td><strong>fe lo</strong></td>
              <td><strong>mo</strong></td>
            </tr>
          </tbody>
        </table>
        <h2>An approximate translation of toki pona words</h2>
        <table className="wikitable">
          <tbody>
            <tr>
              <td>a</td>
              <td><strong>ge'e, .ue, .ua</strong></td>
            </tr>
            <tr>
              <td>akesi</td>
              <td><strong>rigni danlu, respa</strong></td>
            </tr>
            <tr>
              <td>ala</td>
              <td><strong>to'e, to'e go'i, na go'i, no</strong></td>
            </tr>
            <tr>
              <td>ali, ale</td>
              <td><strong>ro, jmive, munje, mulno, culno</strong></td>
            </tr>
            <tr>
              <td>anpa</td>
              <td><strong>cnita, dizlo</strong></td>
            </tr>
            <tr>
              <td>ante</td>
              <td><strong>drata, frica, binxo, cenba, galfi, stika</strong></td>
            </tr>
            <tr>
              <td>anu</td>
              <td><strong>.a</strong></td>
            </tr>
            <tr>
              <td>awen</td>
              <td><strong>stali denpa zvati cando vreta</strong></td>
            </tr>
            <tr>
              <td>e</td>
              <td><strong>lo … ku</strong></td>
            </tr>
            <tr>
              <td>en</td>
              <td><strong>.e</strong></td>
            </tr>
            <tr>
              <td>ijo</td>
              <td><strong>dacti marji zo'e da</strong></td>
            </tr>
            <tr>
              <td>ike</td>
              <td><strong>xlali mabla palci fengu .u'u</strong></td>
            </tr>
            <tr>
              <td>ilo</td>
              <td><strong>cabra minji tutci zmiku</strong></td>
            </tr>
            <tr>
              <td>insa</td>
              <td><strong>ne'i nenri betfu midju</strong></td>
            </tr>
            <tr>
              <td>jaki</td>
              <td><strong>na jinsa toljinsa mabla</strong></td>
            </tr>
            <tr>
              <td>jan</td>
              <td><strong>remna prenu ra</strong></td>
            </tr>
            <tr>
              <td>jelo</td>
              <td><strong>pelxu</strong></td>
            </tr>
            <tr>
              <td>jo</td>
              <td><strong>ponse ricfu lebna</strong></td>
            </tr>
            <tr>
              <td>kala</td>
              <td><strong>finpe</strong></td>
            </tr>
            <tr>
              <td>kalama</td>
              <td><strong>sance savru voksa janbe</strong></td>
            </tr>
            <tr>
              <td>kama</td>
              <td><strong>fasnu cfari krasi</strong></td>
            </tr>
            <tr>
              <td>kasi</td>
              <td><strong>spati pezli tricu srasu</strong></td>
            </tr>
            <tr>
              <td>ken</td>
              <td><strong>kakne cumki</strong></td>
            </tr>
            <tr>
              <td>kepeken</td>
              <td><strong>pilno</strong></td>
            </tr>
            <tr>
              <td>kili</td>
              <td><strong>grute stagi mledi</strong></td>
            </tr>
            <tr>
              <td>kin</td>
              <td><strong>ji'a ba'e je'u</strong></td>
            </tr>
            <tr>
              <td>kiwen</td>
              <td><strong>sligu rokci jinme dertu</strong></td>
            </tr>
            <tr>
              <td>ko</td>
              <td><strong>ckabu purmo</strong></td>
            </tr>
            <tr>
              <td>kon</td>
              <td><strong>vacri brife gapci panci pruxi</strong></td>
            </tr>
            <tr>
              <td>kule</td>
              <td><strong>skari cinta</strong></td>
            </tr>
            <tr>
              <td>kute</td>
              <td><strong>tirna</strong></td>
            </tr>
            <tr>
              <td>kulupu</td>
              <td><strong>bende girzu cecmu kampu</strong></td>
            </tr>
            <tr>
              <td>la</td>
              <td><strong>zo'u</strong></td>
            </tr>
            <tr>
              <td>lape</td>
              <td><strong>sipna surla cando</strong></td>
            </tr>
            <tr>
              <td>laso</td>
              <td><strong>blanu</strong></td>
            </tr>
            <tr>
              <td>lawa</td>
              <td><strong>stedu menli pensi jitro</strong></td>
            </tr>
            <tr>
              <td>len</td>
              <td><strong>taxfu bukpu</strong></td>
            </tr>
            <tr>
              <td>lete</td>
              <td><strong>lenku</strong></td>
            </tr>
            <tr>
              <td>li</td>
              <td><strong>cu</strong></td>
            </tr>
            <tr>
              <td>lili</td>
              <td><strong>cmalu citno jdika</strong></td>
            </tr>
            <tr>
              <td>linja</td>
              <td><strong>skori cilta linsi</strong></td>
            </tr>
            <tr>
              <td>lipu</td>
              <td><strong>karda pelji pikta</strong></td>
            </tr>
            <tr>
              <td>loje</td>
              <td><strong>xunre</strong></td>
            </tr>
            <tr>
              <td>lon</td>
              <td><strong>zvati fatci</strong></td>
            </tr>
            <tr>
              <td>luka</td>
              <td><strong>birka xance</strong></td>
            </tr>
            <tr>
              <td>lukin</td>
              <td><strong>viska catlu zgana tcidu</strong></td>
            </tr>
            <tr>
              <td>lupa</td>
              <td><strong>canko vorme</strong></td>
            </tr>
            <tr>
              <td>ma</td>
              <td><strong>gugde jecta tumla tutra canlu stuzi</strong></td>
            </tr>
            <tr>
              <td>mama</td>
              <td><strong>rirni mamta patfu</strong></td>
            </tr>
            <tr>
              <td>mani</td>
              <td><strong>jdini ricfu</strong></td>
            </tr>
            <tr>
              <td>meli</td>
              <td><strong>ninmu fetsi nixli</strong></td>
            </tr>
            <tr>
              <td>mi</td>
              <td><strong>mi</strong></td>
            </tr>
            <tr>
              <td>mije</td>
              <td><strong>nanmu nakni nanla</strong></td>
            </tr>
            <tr>
              <td>moku</td>
              <td><strong>cidja citka pinxe tunlo</strong></td>
            </tr>
            <tr>
              <td>moli</td>
              <td><strong>morsi catra</strong></td>
            </tr>
            <tr>
              <td>monsi</td>
              <td><strong>trixe</strong></td>
            </tr>
            <tr>
              <td>mu</td>
              <td><strong>??? cmoni ki'ai sa'ei</strong></td>
            </tr>
            <tr>
              <td>mun</td>
              <td><strong>lunra</strong></td>
            </tr>
            <tr>
              <td>musi</td>
              <td><strong>zdile ci'erkei jvikei</strong></td>
            </tr>
            <tr>
              <td>mute</td>
              <td><strong>so'i du'e klani jmina</strong></td>
            </tr>
            <tr>
              <td>nanpa</td>
              <td><strong>namcu</strong></td>
            </tr>
            <tr>
              <td>nasa</td>
              <td><strong>bebna fenki cizra</strong></td>
            </tr>
            <tr>
              <td>nasin</td>
              <td><strong>dargu pluta cuxna logji</strong></td>
            </tr>
            <tr>
              <td>nena</td>
              <td><strong>cmana batke</strong></td>
            </tr>
            <tr>
              <td>ni</td>
              <td><strong>ti</strong></td>
            </tr>
            <tr>
              <td>nimi</td>
              <td><strong>cmene valsi</strong></td>
            </tr>
            <tr>
              <td>noka</td>
              <td><strong>tuple</strong></td>
            </tr>
            <tr>
              <td>o</td>
              <td><strong>ko ju'i be'e</strong></td>
            </tr>
            <tr>
              <td>oko</td>
              <td><strong>kanla</strong></td>
            </tr>
            <tr>
              <td>olin</td>
              <td><strong>prami</strong></td>
            </tr>
            <tr>
              <td>ona</td>
              <td><strong>ra</strong></td>
            </tr>
            <tr>
              <td>open</td>
              <td><strong>kalri cfari</strong></td>
            </tr>
            <tr>
              <td>pakala</td>
              <td><strong>srera daspo spofu</strong></td>
            </tr>
            <tr>
              <td>pali</td>
              <td><strong>gasnu zukte gunka</strong></td>
            </tr>
            <tr>
              <td>palisa</td>
              <td><strong>grana</strong></td>
            </tr>
            <tr>
              <td>pana</td>
              <td><strong>dunda</strong></td>
            </tr>
            <tr>
              <td>pi</td>
              <td><strong>??? pe be</strong></td>
            </tr>
            <tr>
              <td>pilin</td>
              <td><strong>cinmo ganse pencu</strong></td>
            </tr>
            <tr>
              <td>pimeja</td>
              <td><strong>xekri manku ctino</strong></td>
            </tr>
            <tr>
              <td>pini</td>
              <td><strong>fanmo sisti</strong></td>
            </tr>
            <tr>
              <td>pipi</td>
              <td><strong>cinki jukni</strong></td>
            </tr>
            <tr>
              <td>poka</td>
              <td><strong>mlana korbi lamji</strong></td>
            </tr>
            <tr>
              <td>poki</td>
              <td><strong>kabri</strong></td>
            </tr>
            <tr>
              <td>pona</td>
              <td><strong>vrude zabna xamgu ki'e mu'o</strong></td>
            </tr>
            <tr>
              <td>sama</td>
              <td><strong>mintu dunli</strong></td>
            </tr>
            <tr>
              <td>seli</td>
              <td><strong>fagri glare</strong></td>
            </tr>
            <tr>
              <td>selo</td>
              <td><strong>sefta skapi bartu</strong></td>
            </tr>
            <tr>
              <td>seme</td>
              <td><strong>ma</strong></td>
            </tr>
            <tr>
              <td>sewi</td>
              <td><strong>galtu gapru lijda</strong></td>
            </tr>
            <tr>
              <td>sijelo</td>
              <td><strong>xadni</strong></td>
            </tr>
            <tr>
              <td>sike</td>
              <td><strong>cukla bolci xislu djine</strong></td>
            </tr>
            <tr>
              <td>sin</td>
              <td><strong>cnino vifne drata</strong></td>
            </tr>
            <tr>
              <td>sina</td>
              <td><strong>do be do</strong></td>
            </tr>
            <tr>
              <td>sinpin</td>
              <td><strong>crane cutne flira bitmu</strong></td>
            </tr>
            <tr>
              <td>sitelen</td>
              <td><strong>pixra</strong></td>
            </tr>
            <tr>
              <td>sona</td>
              <td><strong>sanji djuno jimpe cilre tadni prije</strong></td>
            </tr>
            <tr>
              <td>soweli</td>
              <td><strong>mabru</strong></td>
            </tr>
            <tr>
              <td>suli</td>
              <td><strong>barda clani makcu vajni</strong></td>
            </tr>
            <tr>
              <td>suno</td>
              <td><strong>solri gusni</strong></td>
            </tr>
            <tr>
              <td>supa</td>
              <td><strong>pinta nilce jubme stizu</strong></td>
            </tr>
            <tr>
              <td>suwi</td>
              <td><strong>titla melbi</strong></td>
            </tr>
            <tr>
              <td>tan</td>
              <td><strong>rinka krasi</strong></td>
            </tr>
            <tr>
              <td>taso</td>
              <td><strong>??? ku'i</strong></td>
            </tr>
            <tr>
              <td>tawa</td>
              <td><strong>fa'a klama</strong></td>
            </tr>
            <tr>
              <td>telo</td>
              <td><strong>djacu litki jisra lumci</strong></td>
            </tr>
            <tr>
              <td>tenpo</td>
              <td><strong>temci vitno tcini</strong></td>
            </tr>
            <tr>
              <td>toki</td>
              <td><strong>bangu bacru cusku tavla coi</strong></td>
            </tr>
            <tr>
              <td>tomo</td>
              <td><strong>zdani dinju kumfa</strong></td>
            </tr>
            <tr>
              <td>tu</td>
              <td><strong>re fendi</strong></td>
            </tr>
            <tr>
              <td>unpa</td>
              <td><strong>cinse gletu</strong></td>
            </tr>
            <tr>
              <td>uta</td>
              <td><strong>moklu bacru</strong></td>
            </tr>
            <tr>
              <td>utala</td>
              <td><strong>damba jamna fapro gunta darxi</strong></td>
            </tr>
            <tr>
              <td>walo</td>
              <td><strong>blabi</strong></td>
            </tr>
            <tr>
              <td>wan</td>
              <td><strong>pa pagbu bliku</strong></td>
            </tr>
            <tr>
              <td>waso</td>
              <td><strong>cipni</strong></td>
            </tr>
            <tr>
              <td>wawa</td>
              <td><strong>vlipa tsali nejni</strong></td>
            </tr>
            <tr>
              <td>weka</td>
              <td><strong>darno claxu</strong></td>
            </tr>
            <tr>
              <td>wile</td>
              <td><strong>djica nitcu</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
)

export default Comp;

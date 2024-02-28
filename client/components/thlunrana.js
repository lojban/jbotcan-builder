import React from "react";
import classnames from "classnames/bind";
import styles from "../styling/style.css";
import Helmet from "react-helmet";
import { Valsi, Vlavla, Url, Mupli, PrituPixra } from "./selfu/sutysisku.js";
const cx = classnames.bind(styles);

const Comp = () => (
  <div>
    <Helmet
      title="How the enemy came to Thlunrana, by Lord Dunsany"
      meta={[
        {
          name: "Lojban language",
          content: "forum, resources, sutysisku, jbotcan, parser"
        }
      ]}
      link={[
        {
          rel: "shortcut icon",
          href:
            "https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico"
        }
      ]}
    />
    <h1>How the enemy came to Thlunrana, by Lord Dunsany</h1>
    <div className={cx("content-panel", "paragraph")}>
      <p>
        Before a meeting of the members of the Logical Language Group I decided
        to make a translation of a short story by Edward Plunkett (Lord
        Dunsany).<br />I translated it into reduced Lojban for new learners,
        into richer Lojban and into Russian.<br />
        <br />Even if you can't read Lojban reading the English original could
        be elucidating as well.
      </p>
    </div>
    <div className={cx("content-panel", "translation", "kuku")}>
      <table dir="ltr">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>ni'o lisri le nu le bradi cu klama la tlunranan.</th>
            <th>How the enemy came to Thlunrana</th>
            <th>
              ni'o sei lisri be me'e lu le su'u le bradi mo'u klama la
              tlunranan. se'u
            </th>
            <th>Как Враг пришел в Тлунрану</th>
          </tr>
          <tr>
            <td>
              .i la danseini ku voi nobli cu finti .i la gleki cu fanva fi le
              sampu .a'o
            </td>
            <td />
            <td>
              to'i la danseini ku voi nobli cu finti .i la gleki ku noi na nobli
              cu fanva toi
            </td>
            <td>(Автор - Лорд Дансани. Перевод - la gleki)</td>
          </tr>
          <tr>
            <td>
              .i lei dzena pu ze'u jijnu le du'u le bradi be la tlunranan. ba
              klama ri
            </td>
            <td>
              It had been prophesied of old and foreseen from the ancient days
              that its enemy would come upon Thlunrana.
            </td>
            <td>
              pu ze'u se djuno lei ze'u renvi gi'e se jijnu ca le temci be le nu
              le dzena ca jmive vau fa le du'u le bradi be le la tlunranan. ba klama ri
            </td>
            <td>
              Было предсказано старцами и предвосхищено с древних времён, что
              враг придёт в Тлунрану.
            </td>
          </tr>
          <tr>
            <td>
              .i djuno fi le detri .e le vorme voi le bradi ba klama fo lu'i
              ke'a .i djuno le du'u le bradi cu me le cevni gi'e ku'i xabju vi
              le remna .i na djuno su'o drata le bradi
            </td>
            <td>
              And the date of its doom was known and the gate by which it would
              enter, yet none had prophesied of the enemy who he was save that
              he was of the gods though he dwelt with men.
            </td>
            <td>
              .i le ji'a detri cu jai se djuno fa le ji'a pa vorme voi le bradi
              cu klama fo lu'i ke'a .i je no da djuno fi le bradi fe su'o drata
              be le du'u ri me le cevni gi'e ku'i kansa le remna le ka xabju
            </td>
            <td>
              И дата её гибели была известна и ворота, через которые он придёт,
              только никто не предсказал, кем будет враг, за исключением того,
              что что он будет из богов, хотя будет жить среди людей.
            </td>
          </tr>
          <tr>
            <td>
              .i ca ku le'e prenu voi xabju vi lei cmana .e le sruri tumla cu
              terpa la tlunranan. noi zdani le se lijda gi'e ralju malsi be le
              nu makfa
            </td>
            <td>
              Meanwhile Thlunrana, that secret lamaserai, that chief cathedral
              of wizardry, was the terror of the valley in which it stood and of
              all lands round about it.
            </td>
            <td>
              .i ca ku la tlunranan. noi sivni zdani le se lijda zi'e noi ralju
              le'i malsi be le nu makfa cu se terpa le'e jbini be le'i cmana
              be'o noi le nei cu malsi fi ke'a vau .e lei sruri tumla
            </td>
            <td>
              Тем временем Тлунрана, этот тайный лама-серай, эта опора
              колдовства, была ужасом долины, в которой она стояла, и всех
              земель вокруг неё.
            </td>
          </tr>
          <tr>
            <td>
              .i le canko cu jarki gi'e galtu gi'e cizra ca le nicte ca le nu lo
              gusni cu pagre le canko .i le canko cu simsa lo palci poi catlu le
              remna bu'u le manku
            </td>
            <td>
              So narrow and high were the windows and so strange when lighted at
              night that they seemed to regard men with the demoniac leer of
              something that had a secret in the dark.
            </td>
            <td>
              .i tai ku jarki gi'e galtu vau fa le canko .i je bo tai cizra fa
              ri ca le nu ri se pagre lo gusni ca lo'e nicte .i ja'e bo le go'i
              cu simlu le ka du lo palci poi catlu le remna bu'u le manku
            </td>
            <td>
              Столь узкими и высокими были окна и столь странными, когда
              светились ночью, что казалось, будто они разглядывали людей
              злобным демоническим взглядом чего-то, что хранило секрет во
              мраке.
            </td>
          </tr>
          <tr>
            <td>
              .i no le xabju cu pendo le te makfa .a le vipsi te makfa .e le pa
              ralju te makfa .i le te makfa cu dasni lo xekri gacri be lo flira
              .e le stedu .e le xadni
            </td>
            <td>
              Who were the magicians and the deputy-magicians and the great
              arch-wizard of that furtive place nobody knew, for they went
              veiled and hooded and cloaked completely in black.
            </td>
            <td>
              .i fe le du'u ma kau sevzi le te makfa gi'a sevzi le vipsi be ri
              gi'a sevzi le pa banli ke ralju te makfa vau fa no le xabju cu
              djuno .i ki'u bo ro boi ma bu dasni lo xekri gacri be lo flira .e
              lo stedu .e lo xadni
            </td>
            <td>
              Кто были маги и посланники магов и великий архимаг этого скрытного
              места, никто не знал, ибо они ходили в покрывалах, капюшонах и
              были полностью покрыты всем чёрным.
            </td>
          </tr>
          <tr>
            <td>
              .i le dimna be la tlunranan. pu'o fasnu .i je ca le lamji nicte le
              bradi cu .ei klama fo lu'i le snanu vorme noi ca kalri gi'e se
              cmene lu dimna vorme li'u .i ku'i la tlunranan. noi rokci dinju ca
              cizra smaji gi'e se terpa gi'e manku
            </td>
            <td>
              Though her doom was close upon her and the enemy of prophecy
              should come that very night through the open, southward door that
              was named the Gate of the Doom, yet that rocky edifice Thlunrana
              remained mysterious still, venerable, terrible, dark, and
              dreadfully crowned with her doom.
            </td>
            <td>
              .i to'e ki'u nai le nu le dimna be la tlunranan. pu'o fasnu vau e
              le nu le bradi pe le nu jijnu ne pu cu .ei klama ca le lamji nicte
              ne ba fo lu'i le kalri ke snanu vorme noi pu ze'u ca se cmene lu
              vorme co dimna li'u vau vau fu'e ku'i le rokci dinju goi la
              tlunranan. ca'o ku cizra smaji gi'e se sinma gi'e se terpa gi'e
              manku gi'e pe'a se ke nobli mapku le jai nu dimna be le nei fu'o
            </td>
            <td>
              Хотя её гибель была близка и враг из пророчества должен был прийти
              той самой ночью через открытую южную дверь, названную Вратами
              Гибели, тем не менее скалистое здание Тлунраны оставалось
              таинственно тихим, почитаемым, ужасным, тёмным и грозно увенчанным
              своей судьбой.
            </td>
          </tr>
          <tr>
            <td>
              .i na cafne fa le nu lo prenu cu cadzu vi la tlunranan. ca lo
              nicte ca lo nu le te makfa cu cmoni gi'e cusku fi lo cevni la'a
              vau bu'u le nenri kumfa ri'a lo nu lo fulta bianfu co'a terpa .i
              ku'i ca ku ca le nicte le pa prenu cu klama fi le sampu dinju mu'i
              le ka viska la tlunranan. pu le nu le bradi cu klama gunta la
              tlunranan. ja'e le nu daspo ri
            </td>
            <td>
              It was not often that anyone dared wander near to Thlunrana by
              night when the moan of the magicians invoking we know not Whom
              rose faintly from inner chambers, scaring the drifting bats: but
              on the last night of all the man from the black-thatched cottage
              by the five pine-trees came, because he would see Thlunrana once
              again before the enemy that was divine, but that dwelt with men,
              should come against it and it should be no more.
            </td>
            <td>
              .i na cafne fa le nu lo prenu cu cadzu vi la tlunranan. ca lo
              nicte ca lo nu lo se cmoni be lei te makfa bei fau le nu lu'i ri
              cusku fi le na jai se djuno be ma'a cu ruble ra'i le nenri kumfa
              ri'a lo nu lo fulta bianfu co'a terpa .i ku'i ca le ro moi be le'i
              ro nicte le pa prenu fi le dinju voi se drudi loi sudga je xekri
              srasu vi le mu ckunu cu mo'u klama mu'i le ka viska la tlunranan.
              za'u re'u ku ce'e pu le nu le bradi noi me le cevni gi'e ku'i
              kansa le remna le ka xabju cu klama gunta la tlunranan. ja'e le nu
              ri mo'u marji
            </td>
            <td>
              Нечасто кто осмеливался бродить около Тлунраны по ночам, когда
              завывания магов, призывавших неизвестно Кого, еле слышно
              доносились из внутренних комнат, пугая парящих летучих мышей: но в
              последнюю ночь из крытой чёрной соломой хижины у пяти сосен вышел
              человек, чтобы увидеть Тлунрану ещё раз, до того как враг, кто был
              из богов, хотя и проживал среди людей, выступит против Тлунраны, и
              её не станет.
            </td>
          </tr>
          <tr>
            <td>
              .i bu'u le jbini be le'i cmana fa'a le galtu le prenu cu klama tai
              le nu ri virnu. i ku'i le prenu cu mutce terpa gi'e jdika le ni
              virnu
            </td>
            <td>
              Up the dark valley he went like a bold man, but his fears were
              thick upon him; his bravery bore their weight but stooped a little
              beneath them.
            </td>
            <td>
              .i bu'u le jbini be le'i cmana fa'a le galtu le go'i goi prenu bu
              klama tai le nu ri virnu. i ku'i le go'i cu mutce le ka terpa .i
              je le go'i ca'o jdika le ka xo kau va'e virnu vau li so'o
            </td>
            <td>
              По тёмной долине он шёл как бравый человек, но его страхи плотно
              покрывали его; его храбрость держала их вес, но опускалась всё
              ниже.
            </td>
          </tr>
          <tr>
            <td>.i le prenu cu mo'u klama fo lu'i le snanu vorme</td>
            <td>
              He went in at the southward gate that is named the Gate of the
              Doom.
            </td>
            <td>
              .i prenu bu mo'u klama fo lu'i le snanu vorme noi pu ze'u ca se
              cmene lu vorme co dimna li'u
            </td>
            <td>Он вошел в южные ворота, что носили имя Врат Гибели.</td>
          </tr>
          <tr>
            <td>
              .i le prenu mo'u klama le manku ke clani kumfa gi'e klama le galtu
              fo lu'i le marmaro serti vau mu'i le ka viska le ro moi pe la
              tlunranan.
            </td>
            <td>
              He came into a dark hall, and up a marble stairway passed to see
              the last of Thlunrana.
            </td>
            <td>
              .i prenu bu mo'u klama nu'i pu gi le manku ke clani kumfa gi le
              galtu fo lu'i le marmaro serti nu'u mu'i le ka viska le ro moi voi
              co'e la tlunranan.
            </td>
            <td>
              Он вошел в тёмный зал и поднялся по мраморному лестничному маршу,
              чтобы увидеть последние мгновения Тлунраны.
            </td>
          </tr>
          <tr>
            <td>
              .i bu'u le galtu pa xekri silka murta cu dandu .i le prenu cu
              klama le kumfa .i bu'u ri ge so'i murta cu dandu gi traji le ka
              xekri
            </td>
            <td>
              At the top a curtain of black velvet hung and he passed into a
              chamber heavily hung with curtains, with a gloom in it that was
              blacker than anything they could account for.
            </td>
            <td>
              .i bu'u le galtu pa xekri silka murta cu dandu .i je prenu bu mo'u
              pagre fi le kumfa voi bu'u ke'a so'i murta cu dandu zi'e voi ke'a
              manku ja'e le nu ke'a zmadu fi le ka xo kau va'e le ka xekri vau
              vau fe ro skari be ri bei ma'a
            </td>
            <td>
              На вершине висел занавес из чёрного бархата, и он прошёл в
              комнату, сильно завешанную шторами, в которой был такой мрак,
              чернее всего, чему можно приписать такую черноту.
            </td>
          </tr>
          <tr>
            <td>
              .i bu'u le drata ke manku kumfa voi bancu le kunti se bargu vau
              lei te makfa cu jgari le fagri be lei lakse gi'e zukte le makfa
              gi'e to'e cladu bacru le jai makfa
            </td>
            <td>
              In a sombre chamber beyond, seen through a vacant archway,
              magicians with lighted tapers plied their wizardry and whispered
              incantations.
            </td>
            <td>
              .i bu'u le manku kumfa voi bancu fo le ka se viska vau fe le kunti
              se bargu vau lei te makfa ne le ve'i jelca voi fagri lei lakse cu
              zukte le makfa be fi le nei gi'e to'e cladu bacru cusku le valsi
              be le fasnu ba'a
            </td>
            <td>
              В тёмной комнате по ту сторону штор, видимой сквозь свободный
              сводчатый проход, маги с зажженными свечками сейчас занимались
              своим колдовством и шептали заклинания.
            </td>
          </tr>
          <tr>
            <td>
              .i ro ratcu pe le stuzi ca'o klama le bartu fo lu'i le serti
            </td>
            <td>
              All the rats in the place were passing away, going whimpering down
              the stairway.
            </td>
            <td>
              .i ro ratcu pe le stuzi ca'o pagre fi ku fau le nu le nei cu klama
              le dizlo fo lu'i le serti
            </td>
            <td>
              Все крысы этого места убегали, с писком спускаясь по лестничному
              маршу.
            </td>
          </tr>
          <tr>
            <td>
              .i le prenu voi klama fi le sampu dinju cu pagre le bi'u nai drata
              kumfa .i je le te makfa na catlu le go'i gi'e ca'o bacru
            </td>
            <td>
              The man from the black-thatched cottage passed through that second
              chamber: the magicians did not look at him and did not cease to
              whisper.
            </td>
            <td>
              .i prenu bu noi klama fi le dinju voi se drudi loi sudga je xekri
              srasu cu pagre le bi'u nai kumfa noi re moi lu'i ke'a .i je le te
              makfa na catlu le go'i gi'e na co'u to'e cladu bacru
            </td>
            <td>
              Человек из крытой чёрной соломой хижины прошел через эту вторую
              комнату: маги не смотрели на него и не прекращали шептать.
            </td>
          </tr>
          <tr>
            <td>
              .i le prenu cu klama zo'a le te makfa pa'o le tilju murta voi si'a
              xekri silka ku gi'e mo'u klama le kumfa voi co'e lei xekri marmaro
              gi'e se zvati no muvdu
            </td>
            <td>
              He passed from them through heavy curtains still of black velvet
              and came into a chamber of black marble where nothing stirred.
            </td>
            <td>
              .i prenu bu pagre fo lo jbini be le'i te makfa fe le tilju murta
              voi si'a xekri silka ku gi'e mo'u klama le kumfa voi co'e lei
              xekri marmaro gi'e se zvati no muvdu
            </td>
            <td>
              Он прошёл мимо них, через тяжёлые шторы из того же черного бархата
              и вошел в комнату из чёрного мрамора, где ничто не шевелилось.
            </td>
          </tr>
          <tr>
            <td>
              .i bu'u le bi'u nai kumfa noi cnino vau pa da fagri .i je no da
              canko
            </td>
            <td>
              Only one taper burned in the third chamber; there were no windows.
            </td>
            <td>
              .i pa ve'i jelca cu fagri bu'u le kumfa noi ci moi lu'i ke'a .i je
              no da canko kumfa bu
            </td>
            <td>Только одна свечка горела в третьей комнате; окон не было.</td>
          </tr>
          <tr>
            <td>
              .i le silka marbi cu cpana le xutla loldi gi'e ve'i kumfa fi lei
              murta ku noi na se kevna .i le marbi cu du le traji censa ne le
              palci stuzi
            </td>
            <td>
              On the smooth floor and under the smooth wall a silk pavilion
              stood with its curtains drawn close together: this was the holy of
              holies of that ominous place, its inner mystery.
            </td>
            <td>
              .i cpana le xutla loldi gi'e jibni le xutla bitmu vau fa le silka
              marbi voi ve'i kumfa fi lei murta noi lu'i ke'a simxu le ka lamji
              .i le nei cu du le traji be le ka censa be'o ne le palci stuzi
              gi'e sivni kernelo ri
            </td>
            <td>
              На гладком полу и под гладкой стеной стоял шёлковый шатёр со
              шторами, тесно стянутыми друг к другу: здесь была святая святых
              этого зловещего места, его внутренняя тайна.
            </td>
          </tr>
          <tr>
            <td>
              .i vi ro mlana be le marbi cu zvati fa lo manku marji poi lo nanmu
              .a lo ninmu .a lo se dasni rokci .a lo danlu poi kakne le ka smaji
              cu me ke'a
            </td>
            <td>
              One on each side of it dark figures crouched, either of men or
              women or cloaked stone, or of beasts trained to be silent.
            </td>
            <td>
              .i ro mlana be le bi'u nai marbi cu se jibni lo manku marji poi me
              ke'a fa lo nanmu .a lo ninmu .a lo se dasni rokci .a lo danlu poi
              se ctuca certu le ka smaji
            </td>
            <td>
              С каждой стороны её сидели припавши к полу тёмные фигуры, мужчины,
              женщины, укрытые плащами камни, животные, обученные хранить
              тишину.
            </td>
          </tr>
          <tr>
            <td>
              .i na ka'e renvi le mabla nu na muvdu ne le sivni .i je le prenu
              voi klama fi le sampu dinju cu klama le silka marbi gi'e virnu je
              xanka lacpu pa le murta gi'e viska le censa gi'e cmila
            </td>
            <td>
              When the awful stillness of the mystery was more than he could
              bear the man from the black-thatched cottage by the five
              pine-trees went up to the silk pavilion, and with a bold and
              nervous clutch of the hand drew one of the curtains aside, and saw
              the inner mystery, and laughed.
            </td>
            <td>
              .i ca le nu le mabla nu na muvdu ne le sivni co'u ka'e se renvi le
              nei vau prenu bu noi klama fi le dinju voi se drudi loi sudga je
              xekri srasu vi le mu ckunu cu klama fa'a le galtu le silka marbi
              gi'e co'a virnu je xanka jgari fi le xance fe pa le murta gi'e
              lacpu ri ja'e le nu ri mlana kei gi'e viska le sivni kernelo gi'e
              cmila
            </td>
            <td>
              Когда жуткая неподвижность таинства стала невыносимой, человек из
              крытого чёрной соломой дома под пятью соснами подошёл к шёлковому
              шатру и смело и нервно схватил и отодвинул одну из штор в сторону,
              увидел внутреннюю тайну и засмеялся.
            </td>
          </tr>
          <tr>
            <td>
              .i le pu se djuno co'a fatci .i je la tlunranan. na di'a se terpa
              le xabju be vi lei cmana .i le te makfa cu klama fi le banli kumfa
              gi'e bajra klama fo lu'i le foldi gi'e klaku gi'e darxi le tatru
              le xance .i sa'u le jai nu cmila cu du le bi'u nai bradi be la
              tlunranan. be'o voi dimna fa le nu ke'a klama fo lu'i le snanu
              vorme noi se cmene lu dimna vorme li'u .i je le jai nu cmila cu
              cevni gi'e ku'i xabju vi le remna
            </td>
            <td>
              And the prophecy was fulfilled, and Thlunrana was never more a
              terror to the valley, but the magicians passed away from their
              terrific halls and fled through the open fields wailing and
              beating their breasts, for laughter was the enemy that was doomed
              to come against Thlunrana through her southward gate (that was
              named the Gate of the Doom), and it is of the gods but dwells with
              man.
            </td>
            <td>
              .i le pu se djuno co'a fatci .i je la tlunranan. na ba di'a se
              terpa le jbini be le'i cmana .i ku'i je le te makfa cu klama fi le
              banli ke clani kumfa ne le nei gi'e bajra klama fo lu'i le foldi
              fau le nu le nei cu klaku gi'e darxi le tatru be le nei .i se ki'u
              la'e di'u le jai nu cmila cu du le bi'u nai bradi be la tlunranan.
              be'o voi jai se dimna ri fai le ka klama fo lu'i le pa snanu vorme
              noi pu ze'u ca se cmene lu vorme co dimna li'u .i je le go'i cu
              cevni gi'e ku'i kansa le remna le ka xabju
            </td>
            <td>
              И пророчество было исполнено, и Тлунрана больше не была никогда
              ужасом долины, а маги покинули свои колоссальные залы и убежали
              через открытые поля, плача и бья себя в грудь, ибо смех был тем
              врагом, что был обречён явиться в Тлунрану через её южные ворота
              (названные Вратами Гибели), и он был тем, кто был из богов, хотя и
              жил среди людей.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Comp;

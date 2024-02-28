import React from 'react';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
import bnf_staile from '../../styling/bnf-staile.css';
import Helmet from 'react-helmet';

const cx = classnames.bind(styles);
const bnfs = classnames.bind(bnf_staile);

const Speakable = () => (
  <div>
    <Helmet title="Lojban as a speakable language - la.jbotcan." meta={[{
        name: 'Lojban language',
        content: 'natural language, forum, resources, sutysisku, jbotcan, parser'
      }
    ]} link={[{
        rel: 'shortcut icon',
        href: 'https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico'
      }
    ]}/>
    <div className={cx('galtu_dasri')}>
      <h1 className={cx('heading')}>Interactive formal grammar of Lojban language</h1>
      <div className={bnfs('menu-bar')}>
        <span className={bnfs('menu')}>
          Sources
          <div className={bnfs('menu-item')}>
            <ul>
              <li>
                <a href="format.py">Formatter</a>
              </li>
              <li>
                <a href="lojban.bnf">Unformatted EBNF</a>
              </li>
              <li>
                <a href="http://lojban.org/publications/cll/cll_v1.1_xhtml-section-chunks/chapter-grammars.html#section-EBNF">Reformatted and Updated Original</a>
              </li>
            </ul>
            Written by
            <a href="mailto:purpleposeidon@gmail.com">purpleposeidon</a>
          </div>
        </span>
        <span className={bnfs('menu')}>
          Symbols
          <div className={bnfs('menu-item')}>
            <h2>Meaning</h2>
            <dl>
              <dt>A B</dt>
              <dd>concatenation</dd>
              <dt>grammatical-construct</dt>
              <dd>invokes another rule</dd>
              <dt>TERMINAL</dt>
              <dd>a selma'o</dd>
              <dt>[ A ]</dt>
              <dd>optional</dd>
              <dt>...</dt>
              <dd>repeat previous construct zero or more</dd>
              <dt>A | B</dt>
              <dd>alternation</dd>
              <dt>A &amp; C</dt>
              <dd>and/or</dd>
              <dt>#</dt>
              <dd> [<a href="#free">free</a>
                ...]</dd>
              <dt>/ A /</dt>
              <dd>contents only required if changes the parse tree</dd>
            </dl>
            <h2>Precedence</h2>
            <ol>
              <li>...</li>
              <li>&amp;</li>
              <li>|</li>
              <li>concatenation</li>
            </ol>
          </div>
        </span>
      </div>
      <div className={bnfs('rule')}>
        <a name="text">text</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>
            ...]</span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/cmene">CMENE</a>
            ... # |
            <span className={bnfs('paren')}> (<a href="#indicators">indicators</a>
              &amp;
              <a href="#free">free</a>
              ...)</span>]</span>
          <span className={bnfs('paren')}> [<a href="#joik-jek">joik-jek</a>] </span>
          <a href="#text-1">text-1</a>
        </div>
      </div>
      <div className={bnfs('rule')}>
        <a name="text-1">text-1</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/I">I</a>
              <span className={bnfs('paren')}> [<a href="#jek">jek</a>
                |
                <a href="#joik">joik</a>] </span>
              <span className={bnfs('paren')}>[<span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
                <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>] </span>
              #)</span>
            ... |
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NIhO">NIhO</a>
            ... #] </span>
          <span className={bnfs('paren')}> [<a href="#paragraphs">paragraphs</a>] </span>
        </div>
      </div>
      <div className={bnfs('rule')}>
        <a name="paragraphs">paragraphs</a>
        =
        <div className={bnfs('value')}>
          <a href="#paragraph">paragraph</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NIhO">NIhO</a>
            ... #
            <a href="#paragraphs">paragraphs</a>] </span>
        </div>
      </div>
      <div className={bnfs('rule')}>
        <a name="paragraph">paragraph</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> (<a href="#statement">statement</a>
            |
            <a href="#fragment">fragment</a>)</span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/I">I</a>
            #
            <span className={bnfs('paren')}> [<a href="#statement">statement</a>
              |
              <a href="#fragment">fragment</a>] </span>] </span>
          ...
        </div>
      </div>
      <div className={bnfs('rule')}>
        <p>
          <a name="statement">statement</a> = <div className={bnfs('value')}><a href="#statement-1">statement-1</a> | <a href="#prenex">prenex</a> <a href="#statement">statement</a></div>
        </p>
      </div>
      <div className={bnfs('rule')}>
        <a name="statement-1">statement-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#statement-2">statement-2</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/I">I</a>
             <a href="#joik-jek">joik-jek</a>
            <span className={bnfs('paren')}> [<a href="#statement-2">statement-2</a>] </span>] </span>
          ...
        </div>
      </div>
      <div className={bnfs('rule')}>
        <a name="statement-2">statement-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#statement-3">statement-3</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/I">I</a>
            <span className={bnfs('paren')}> [<a href="#jek">jek</a>
              |
              <a href="#joik">joik</a>] </span>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #
            <span className={bnfs('paren')}> [<a href="#statement-2">statement-2</a>] </span>] </span>
        </div>
      </div>
      <div className={bnfs('rule')}>
        <a name="statement-3">statement-3</a>
        =
        <div className={bnfs('value')}>
          <a href="#sentence">sentence</a>
          |
          <span className={bnfs('paren')}> [<a href="#tag">tag</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/TUhE">TUhE</a>
          #
          <a href="#text-1">text-1</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TUhU">TUhU</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="fragment">fragment</a>
        =
        <div className={bnfs('value')}>
          <a href="#ek">ek</a>
          # |
          <a href="#gihek">gihek</a>
          # |
          <a href="#quantifier">quantifier</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>
          # |
          <a href="#terms">terms</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VAU">VAU</a>#/ |
          <a href="#prenex">prenex</a>
          |
          <a href="#relative-clauses">relative-clauses</a>
          |
          <a href="#links">links</a>
          |
          <a href="#linkargs">linkargs</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="prenex">prenex</a>
        =
        <div className={bnfs('value')}>
          <a href="#terms">terms</a>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZOhU">ZOhU</a>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sentence">sentence</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="#terms">terms</a>
            <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/CU">CU</a>
              #] </span>] </span>
          <a href="#bridi-tail">bridi-tail</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="subsentence">subsentence</a>
        =
        <div className={bnfs('value')}>
          <a href="#sentence">sentence</a>
          |
          <a href="#prenex">prenex</a>
          <a href="#subsentence">subsentence</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="bridi-tail">bridi-tail</a>
        =
        <div className={bnfs('value')}>
          <a href="#bridi-tail-1">bridi-tail-1</a>
          <span className={bnfs('paren')}> [<a href="#gihek">gihek</a>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
            #
            <a href="#bridi-tail">bridi-tail</a>
            /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/
            <a href="#tail-terms">tail-terms</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="bridi-tail-1">bridi-tail-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#bridi-tail-2">bridi-tail-2</a>
          <span className={bnfs('paren')}> [<a href="#gihek">gihek</a>
            #
            <a href="#bridi-tail-2">bridi-tail-2</a>
            <a href="#tail-terms">tail-terms</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="bridi-tail-2">bridi-tail-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#bridi-tail-3">bridi-tail-3</a>
          <span className={bnfs('paren')}> [<a href="#gihek">gihek</a>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #
            <a href="#bridi-tail-2">bridi-tail-2</a>
            <a href="#tail-terms">tail-terms</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="bridi-tail-3">bridi-tail-3</a>
        =
        <div className={bnfs('value')}>
          <a href="#selbri">selbri</a>
          <a href="#tail-terms">tail-terms</a>
          |
          <a href="#gek-sentence">gek-sentence</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="gek-sentence">gek-sentence</a>
        =
        <div className={bnfs('value')}>
          <a href="#gek">gek</a>
          <a href="#subsentence">subsentence</a>
          <a href="#gik">gik</a>
          <a href="#subsentence">subsentence</a>
          <a href="#tail-terms">tail-terms</a>
          |
          <span className={bnfs('paren')}> [<a href="#tag">tag</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
          #
          <a href="#gek-sentence">gek-sentence</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>
          #
          <a href="#gek-sentence">gek-sentence</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="tail-terms">tail-terms</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="#terms">terms</a>] </span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VAU">VAU</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="terms">terms</a>
        =
        <div className={bnfs('value')}>
          <a href="#terms-1">terms-1</a>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="terms-1">terms-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#terms-2">terms-2</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/PEhE">PEhE</a>
            #
            <a href="#joik-jek">joik-jek</a>
            <a href="#terms-2">terms-2</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="terms-2">terms-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#term">term</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/CEhE">CEhE</a>
            #
            <a href="#term">term</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="term">term</a>
        =
        <div className={bnfs('value')}>
          <a href="#sumti">sumti</a>
          |
          <span className={bnfs('paren')}> (<a href="#tag">tag</a>
            |
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/FA">FA</a>
            #)</span>
          <span className={bnfs('paren')}> (<a href="#sumti">sumti</a>
            | /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KU">KU</a>#/)</span>
          |
          <a href="#termset">termset</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KU">KU</a>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="termset">termset</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NUhI">NUhI</a>
          #
          <a href="#gek">gek</a>
          <a href="#terms">terms</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NUhU">NUhU</a>#/
          <a href="#gik">gik</a>
          <a href="#terms">terms</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NUhU">NUhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NUhI">NUhI</a>
          #
          <a href="#terms">terms</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NUhU">NUhU</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti">sumti</a>
        =
        <div className={bnfs('value')}>
          <a href="#sumti-1">sumti-1</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VUhO">VUhO</a>
            #
            <a href="#relative-clauses">relative-clauses</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-1">sumti-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#sumti-2">sumti-2</a>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="#ek">ek</a>
              |
              <a href="#joik">joik</a>)</span>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
            #
            <a href="#sumti">sumti</a>
            /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-2">sumti-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#sumti-3">sumti-3</a>
          <span className={bnfs('paren')}> [<a href="#joik-ek">joik-ek</a>
            <a href="#sumti-3">sumti-3</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-3">sumti-3</a>
        =
        <div className={bnfs('value')}>
          <a href="#sumti-4">sumti-4</a>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="#ek">ek</a>
              |
              <a href="#joik">joik</a>)</span>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #
            <a href="#sumti-3">sumti-3</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-4">sumti-4</a>
        =
        <div className={bnfs('value')}>
          <a href="#sumti-5">sumti-5</a>
          |
          <a href="#gek">gek</a>
          <a href="#sumti">sumti</a>
          <a href="#gik">gik</a>
          <a href="#sumti-4">sumti-4</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-5">sumti-5</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="#quantifier">quantifier</a>] </span>
          <a href="#sumti-6">sumti-6</a>
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          |
          <a href="#quantifier">quantifier</a>
          <a href="#selbri">selbri</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KU">KU</a>#/
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-6">sumti-6</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LAhE">LAhE</a>
            # |
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #)</span>
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          <a href="#sumti">sumti</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LUhU">LUhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KOhA">KOhA</a>
          # |
          <a href="#lerfu-string">lerfu-string</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BOI">BOI</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LA">LA</a>
          #
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/cmene">CMENE</a>
          ... # |
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LA">LA</a>
            |
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LE">LE</a>)</span>
          #
          <a href="#sumti-tail">sumti-tail</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KU">KU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LI">LI</a>
          #
          <a href="#mex">mex</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LOhO">LOhO</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZO">ZO</a>
          any-word # |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LU">LU</a>
          <a href="#text">text</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LIhU">LIhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LOhU">LOhU</a>
          any-word ...
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LEhU">LEhU</a>
          # |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZOI">ZOI</a>
          any-word anything any-word #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-tail">sumti-tail</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="#sumti-6">sumti-6</a>
            <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>] </span>
          <a href="#sumti-tail-1">sumti-tail-1</a>
          |
          <a href="#relative-clauses">relative-clauses</a>
          <a href="#sumti-tail-1">sumti-tail-1</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="sumti-tail-1">sumti-tail-1</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="#quantifier">quantifier</a>] </span>
          <a href="#selbri">selbri</a>
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          |
          <a href="#quantifier">quantifier</a>
          <a href="#sumti">sumti</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="relative-clauses">relative-clauses</a>
        =
        <div className={bnfs('value')}>
          <a href="#relative-clause">relative-clause</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZIhE">ZIhE</a>
            #
            <a href="#relative-clause">relative-clause</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="relative-clause">relative-clause</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GOI">GOI</a>
          #
          <a href="#term">term</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/GEhU">GEhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NOI">NOI</a>
          #
          <a href="#subsentence">subsentence</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KUhO">KUhO</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri">selbri</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="#tag">tag</a>] </span>
          <a href="#selbri-1">selbri-1</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri-1">selbri-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#selbri-2">selbri-2</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>
          #
          <a href="#selbri">selbri</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri-2">selbri-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#selbri-3">selbri-3</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/CO">CO</a>
            #
            <a href="#selbri-2">selbri-2</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri-3">selbri-3</a>
        =
        <div className={bnfs('value')}>
          <a href="#selbri-4">selbri-4</a>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri-4">selbri-4</a>
        =
        <div className={bnfs('value')}>
          <a href="#selbri-5">selbri-5</a>
          <span className={bnfs('paren')}> [<a href="#joik-jek">joik-jek</a>
            <a href="#selbri-5">selbri-5</a>
            |
            <a href="#joik">joik</a>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
            #
            <a href="#selbri-3">selbri-3</a>
            /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri-5">selbri-5</a>
        =
        <div className={bnfs('value')}>
          <a href="#selbri-6">selbri-6</a>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="#jek">jek</a>
              |
              <a href="#joik">joik</a>)</span>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #
            <a href="#selbri-5">selbri-5</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="selbri-6">selbri-6</a>
        =
        <div className={bnfs('value')}>
          <a href="#tanru-unit">tanru-unit</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #
            <a href="#selbri-6">selbri-6</a>] </span>
          |
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>
            #] </span>
          <a href="#guhek">guhek</a>
          <a href="#selbri">selbri</a>
          <a href="#gik">gik</a>
          <a href="#selbri-6">selbri-6</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="tanru-unit">tanru-unit</a>
        =
        <div className={bnfs('value')}>
          <a href="#tanru-unit-1">tanru-unit-1</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/CEI">CEI</a>
            #
            <a href="#tanru-unit-1">tanru-unit-1</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="tanru-unit-1">tanru-unit-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#tanru-unit-2">tanru-unit-2</a>
          <span className={bnfs('paren')}> [<a href="#linkargs">linkargs</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="tanru-unit-2">tanru-unit-2</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/brivla">BRIVLA</a>
          # |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GOhA">GOhA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/RAhO">RAhO</a>] </span>
          # |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
          #
          <a href="#selbri-3">selbri-3</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ME">ME</a>
          #
          <a href="#sumti">sumti</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/MEhU">MEhU</a>#/
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/MOI">MOI</a>
            #] </span>
          |
          <span className={bnfs('paren')}> (<a href="#number">number</a>
            |
            <a href="#lerfu-string">lerfu-string</a>)</span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/MOI">MOI</a>
          # |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NUhA">NUhA</a>
          #
          <a href="#mex-operator">mex-operator</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>
          #
          <a href="#tanru-unit-2">tanru-unit-2</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/JAI">JAI</a>
          #
          <span className={bnfs('paren')}> [<a href="#tag">tag</a>] </span>
          <a href="#tanru-unit-2">tanru-unit-2</a>
          | any-word
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZEI">ZEI</a>
            any-word)</span>
          ... |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>
          #
          <a href="#tanru-unit-2">tanru-unit-2</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NU">NU</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          #
          <span className={bnfs('paren')}> [<a href="#joik-jek">joik-jek</a>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NU">NU</a>
            <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
            #] </span>
          ...
          <a href="#subsentence">subsentence</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEI">KEI</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="linkargs">linkargs</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BE">BE</a>
          #
          <a href="#term">term</a>
          <span className={bnfs('paren')}> [<a href="#links">links</a>] </span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BEhO">BEhO</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="links">links</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BEI">BEI</a>
          #
          <a href="#term">term</a>
          <span className={bnfs('paren')}> [<a href="#links">links</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="quantifier">quantifier</a>
        =
        <div className={bnfs('value')}>
          <a href="#number">number</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BOI">BOI</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/VEI">VEI</a>
          #
          <a href="#mex">mex</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VEhO">VEhO</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="mex">mex</a>
        =
        <div className={bnfs('value')}>
          <a href="#mex-1">mex-1</a>
          <span className={bnfs('paren')}> [<a href="#operator">operator</a>
            <a href="#mex-1">mex-1</a>] </span>
          ... |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/FUhA">FUhA</a>
          #
          <a href="#rp-expression">rp-expression</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="mex-1">mex-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#mex-2">mex-2</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BIhE">BIhE</a>
            #
            <a href="#operator">operator</a>
            <a href="#mex-1">mex-1</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="mex-2">mex-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#operand">operand</a>
          |
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/PEhO">PEhO</a>
            #] </span>
          <a href="#operator">operator</a>
          <a href="#mex-2">mex-2</a>
          ... /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KUhE">KUhE</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="rp-expression">rp-expression</a>
        =
        <div className={bnfs('value')}>
          <a href="#rp-operand">rp-operand</a>
          <a href="#rp-operand">rp-operand</a>
          <a href="#operator">operator</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="rp-operand">rp-operand</a>
        =
        <div className={bnfs('value')}>
          <a href="#operand">operand</a>
          |
          <a href="#rp-expression">rp-expression</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operator">operator</a>
        =
        <div className={bnfs('value')}>
          <a href="#operator-1">operator-1</a>
          <span className={bnfs('paren')}> [<a href="#joik-jek">joik-jek</a>
            <a href="#operator-1">operator-1</a>
            |
            <a href="#joik">joik</a>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
            #
            <a href="#operator">operator</a>
            /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operator-1">operator-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#operator-2">operator-2</a>
          |
          <a href="#guhek">guhek</a>
          <a href="#operator-1">operator-1</a>
          <a href="#gik">gik</a>
          <a href="#operator-2">operator-2</a>
          |
          <a href="#operator-2">operator-2</a>
          <span className={bnfs('paren')}> (<a href="#jek">jek</a>
            |
            <a href="#joik">joik</a>)</span>
          <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
          #
          <a href="#operator-1">operator-1</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operator-2">operator-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#mex-operator">mex-operator</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
          #
          <a href="#operator">operator</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="mex-operator">mex-operator</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>
          #
          <a href="#mex-operator">mex-operator</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>
          #
          <a href="#mex-operator">mex-operator</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/MAhO">MAhO</a>
          #
          <a href="#mex">mex</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TEhU">TEhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhU">NAhU</a>
          #
          <a href="#selbri">selbri</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TEhU">TEhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/VUhU">VUhU</a>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operand">operand</a>
        =
        <div className={bnfs('value')}>
          <a href="#operand-1">operand-1</a>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="#ek">ek</a>
              |
              <a href="#joik">joik</a>)</span>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KE">KE</a>
            #
            <a href="#operand">operand</a>
            /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KEhE">KEhE</a>#/] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operand-1">operand-1</a>
        =
        <div className={bnfs('value')}>
          <a href="#operand-2">operand-2</a>
          <span className={bnfs('paren')}> [<a href="#joik-ek">joik-ek</a>
            <a href="#operand-2">operand-2</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operand-2">operand-2</a>
        =
        <div className={bnfs('value')}>
          <a href="#operand-3">operand-3</a>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="#ek">ek</a>
              |
              <a href="#joik">joik</a>)</span>
            <span className={bnfs('paren')}> [<a href="#stag">stag</a>] </span>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #
            <a href="#operand-2">operand-2</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="operand-3">operand-3</a>
        =
        <div className={bnfs('value')}>
          <a href="#quantifier">quantifier</a>
          |
          <a href="#lerfu-string">lerfu-string</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BOI">BOI</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NIhE">NIhE</a>
          #
          <a href="#selbri">selbri</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TEhU">TEhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/MOhE">MOhE</a>
          #
          <a href="#sumti">sumti</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TEhU">TEhU</a>#/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/JOhI">JOhI</a>
          #
          <a href="#mex-2">mex-2</a>
          ... /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TEhU">TEhU</a>#/ |
          <a href="#gek">gek</a>
          <a href="#operand">operand</a>
          <a href="#gik">gik</a>
          <a href="#operand-3">operand-3</a>
          |
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LAhE">LAhE</a>
            # |
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BO">BO</a>
            #)</span>
          <a href="#operand">operand</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/LUhU">LUhU</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="number">number</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/PA">PA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/PA">PA</a>
            |
            <a href="#lerfu-word">lerfu-word</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="lerfu-string">lerfu-string</a>
        =
        <div className={bnfs('value')}>
          <a href="#lerfu-word">lerfu-word</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/PA">PA</a>
            |
            <a href="#lerfu-word">lerfu-word</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="lerfu-word">lerfu-word</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BY">BY</a>
          | any-word
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BU">BU</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/LAU">LAU</a>
          <a href="#lerfu-word">lerfu-word</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/TEI">TEI</a>
          <a href="#lerfu-string">lerfu-string</a>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/FOI">FOI</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="ek">ek</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/A">A</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="gihek">gihek</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GIhA">GIhA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="jek">jek</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NA">NA</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/JA">JA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="joik">joik</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/JOI">JOI</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          |
          <a href="#interval">interval</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GAhO">GAhO</a>
          <a href="#interval">interval</a>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GAhO">GAhO</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="interval">interval</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BIhI">BIhI</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="joik-ek">joik-ek</a>
        =
        <div className={bnfs('value')}>
          <a href="#joik">joik</a>
          # |
          <a href="#ek">ek</a>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="joik-jek">joik-jek</a>
        =
        <div className={bnfs('value')}>
          <a href="#joik">joik</a>
          # |
          <a href="#jek">jek</a>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="gek">gek</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GA">GA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          # |
          <a href="#joik">joik</a>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GI">GI</a>
          # |
          <a href="#stag">stag</a>
          <a href="#gik">gik</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="guhek">guhek</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GUhA">GUhA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="gik">gik</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/GI">GI</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          #
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="tag">tag</a>
        =
        <div className={bnfs('value')}>
          <a href="#tense-modal">tense-modal</a>
          <span className={bnfs('paren')}> [<a href="#joik-jek">joik-jek</a>
            <a href="#tense-modal">tense-modal</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="stag">stag</a>
        =
        <div className={bnfs('value')}>
          <a href="#simple-tense-modal">simple-tense-modal</a>
          <span className={bnfs('paren')}>[<span className={bnfs('paren')}> (<a href="#jek">jek</a>
              |
              <a href="#joik">joik</a>)</span>
            <a href="#simple-tense-modal">simple-tense-modal</a>] </span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="tense-modal">tense-modal</a>
        =
        <div className={bnfs('value')}>
          <a href="#simple-tense-modal">simple-tense-modal</a>
          # |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/FIhO">FIhO</a>
          #
          <a href="#selbri">selbri</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/FEhU">FEhU</a>#/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="simple-tense-modal">simple-tense-modal</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SE">SE</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/BAI">BAI</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KI">KI</a>] </span>
          |
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAhE">NAhE</a>] </span>
          <span className={bnfs('paren')}> (<a href="#time">time</a>
            <span className={bnfs('paren')}> [<a href="#space">space</a>] </span>
            |
            <a href="#space">space</a>
            <span className={bnfs('paren')}> [<a href="#time">time</a>] </span>)</span>
          &amp;
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/CAhA">CAhA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/KI">KI</a>] </span>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/KI">KI</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/CUhE">CUhE</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="time">time</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZI">ZI</a>
          &amp;
          <a href="#time-offset">time-offset</a>
          ... &amp;
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZEhA">ZEhA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/PU">PU</a>
            <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>] </span>
          &amp;
          <a href="#interval-property">interval-property</a>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="time-offset">time-offset</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/PU">PU</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZI">ZI</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="space">space</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/VA">VA</a>
          &amp;
          <a href="#space-offset">space-offset</a>
          ... &amp;
          <a href="#space-interval">space-interval</a>
          &amp;
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/MOhI">MOhI</a>
            <a href="#space-offset">space-offset</a>)</span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="space-offset">space-offset</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/FAhA">FAhA</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VA">VA</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="space-interval">space-interval</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}>(<span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VEhA">VEhA</a>
              &amp;
              <a href="https://la-lojban.github.io/sutysisku/en/#sisku/VIhA">VIhA</a>)</span>
            <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/FAhA">FAhA</a>
              <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>] </span>)</span>
          &amp;
          <a href="#space-int-props">space-int-props</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="space-int-props">space-int-props</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/FEhE">FEhE</a>
            <a href="#interval-property">interval-property</a>)</span>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="interval-property">interval-property</a>
        =
        <div className={bnfs('value')}>
          <a href="#number">number</a>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ROI">ROI</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/TAhE">TAhE</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/ZAhO">ZAhO</a>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="free">free</a>
        =
        <div className={bnfs('value')}>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/SEI">SEI</a>
          #
          <span className={bnfs('paren')}> [<a href="#terms">terms</a>
            <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/CU">CU</a>
              #] </span>] </span>
          <a href="#selbri">selbri</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SEhU">SEhU</a>/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/SOI">SOI</a>
          #
          <a href="#sumti">sumti</a>
          <span className={bnfs('paren')}> [<a href="#sumti">sumti</a>] </span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/SEhU">SEhU</a>/ |
          <a href="#vocative">vocative</a>
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          <a href="#selbri">selbri</a>
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/DOhU">DOhU</a>/ |
          <a href="#vocative">vocative</a>
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/cmene">CMENE</a>
          ... #
          <span className={bnfs('paren')}> [<a href="#relative-clauses">relative-clauses</a>] </span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/DOhU">DOhU</a>/ |
          <a href="#vocative">vocative</a>
          <span className={bnfs('paren')}> [<a href="#sumti">sumti</a>] </span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/DOhU">DOhU</a>/ |
          <span className={bnfs('paren')}> (<a href="#number">number</a>
            |
            <a href="#lerfu-string">lerfu-string</a>)</span>
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/MAI">MAI</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/TO">TO</a>
          <a href="#text">text</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/TOI">TOI</a>/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/XI">XI</a>
          #
          <span className={bnfs('paren')}> (<a href="#number">number</a>
            |
            <a href="#lerfu-string">lerfu-string</a>)</span>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/BOI">BOI</a>/ |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/XI">XI</a>
          #
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/VEI">VEI</a>
          #
          <a href="#mex">mex</a>
          /<a href="https://la-lojban.github.io/sutysisku/en/#sisku/VEhO">VEhO</a>/
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="vocative">vocative</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/COI">COI</a>
            <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>)</span>
          ... &amp;
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/DOI">DOI</a>
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="indicators">indicators</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/FUhE">FUhE</a>] </span>
          <a href="#indicator">indicator</a>
          ...
        </div>
      </div>

      <div className={bnfs('rule')}>

        <a name="indicator">indicator</a>
        =
        <div className={bnfs('value')}>
          <span className={bnfs('paren')}> (<a href="https://la-lojban.github.io/sutysisku/en/#sisku/UI">UI</a>
            |
            <a href="https://la-lojban.github.io/sutysisku/en/#sisku/CAI">CAI</a>)</span>
          <span className={bnfs('paren')}> [<a href="https://la-lojban.github.io/sutysisku/en/#sisku/NAI">NAI</a>] </span>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/Y">Y</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/DAhO">DAhO</a>
          |
          <a href="https://la-lojban.github.io/sutysisku/en/#sisku/FUhO">FUhO</a>
        </div>
      </div>
    </div>
  </div>
)

export default Speakable;

import React from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames/bind';
import styles from '../../styling/style.css';
const cx = classnames.bind(styles);

const Valsi = ({valsi, bangu}) => {
  if (!bangu)
    bangu = "en";
  const url = `https://la-lojban.github.io/sutysisku/${bangu}/#sisku/${valsi}`;
  return (
    <div style={{
      display: 'inline-block'
    }}>
      <b>
        <a href={url} target="_blank">{valsi}</a>
      </b>
    </div>
  )
};

const Vlavla = ({valsi, bangu}) => {
  return (
    <div style={{
      display: 'inline-block'
    }}>
      <b>
        {valsi||''}
      </b>
      <div style={{
        display: 'inline-block',
        verticalAlign: 'super',
        fontSize: '50%',
        fontStyle: 'italic'
      }}>
      {bangu||''}
      </div>
    </div>
  )
};

const Url = ({url, name}) => {
  return (
    <span>
      <a href={url}>{name}</a>
    </span>
  )
};

const Mupli = ({bangu, sefanva, xefanva, gloso}) => {
  if (bangu) {
    bangu = <div style={{
      "fontSize": "80%"
    }}>
      <i>[{bangu}]</i>
    </div>;
  } else {
    bangu = '';
  };
  if (sefanva) {
    sefanva = <div>
      <b dangerouslySetInnerHTML={{
        __html: sefanva
      }}/>
    </div>;
  } else {
    sefanva = '';
  };
  if (xefanva) {
    xefanva = <div>
      <i dangerouslySetInnerHTML={{
        __html: xefanva
      }}/>
    </div>;
  } else {
    xefanva = '';
  };
  if (gloso) {
    gloso = <div style={{
      "fontFamily": "monospace",
      "whiteSpace": "pre"
    }} dangerouslySetInnerHTML={{
      __html: gloso
    }}/>;
  } else {
    gloso = '';
  };
  return (
    <table style={{
      border: 0,
      lineHeight: '2.0em',
      borderLeft: 'solid 3px #1E90FF',
      borderRadius: 0,
      margin: '10px 25px 10px 25px',
      width: 'auto'
    }}>
      <tbody>
        <tr>
          <td style={{
            paddingLeft: '8px',
            paddingRight: '8px',
            textAlign: "left"
          }}>
            {bangu}
            {sefanva}
            {xefanva}
            {gloso}
          </td>
        </tr>
      </tbody>
    </table>
  )
};

const PrituPixra = ({url, name}) => {

  return (
    <div className={cx('pritupixra')}>
      <div style={{
        "textAlign": "center",
        "perspectiveOrigin": "119px 163px",
        "transformOrigin": "119px 163px",
        "background": "rgb(248, 249, 250) none repeat scroll 0% 0% / auto padding-box border-box",
        "border": "1px solid rgb(200, 204, 209)",
        "font": "normal normal normal normal 13.16px / 21.056px sans-serif",
        "overflow": "hidden",
        "padding": "3px"
      }}>
        <img alt={name} src={url} className={cx('pixra')}/>
        <div className={cx('pinka_lepixra')}><div dangerouslySetInnerHTML={{
      __html: name
    }}/></div>
      </div>
    </div>
  )
};

const Title = ({title, meta, link}) => {
  return (
    <div>
      <Helmet title={title} meta={meta} link={link}/>
      <h1>{title}</h1>
    </div>
  )
};

module.exports = {
  Valsi,
  Vlavla,
  Url,
  Mupli,
  PrituPixra,
  Title
}

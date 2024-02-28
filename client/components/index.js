import Helmet from "react-helmet";
import { Link } from "react-router";
import PropTypes from "prop-types";
import "../styling/bootstrap.min.css";
import "../styling/cnino.css";
import "../styling/style.css";
import GoogleTagManager from "./gtm";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <GoogleTagManager gtmId="GTM-KF5MXGP" />
        <Helmet
          title="Lojban"
          meta={[{ property: "fb:app_id", content: "532038500474607" }]}
          link={[
            {
              rel: "shortcut icon",
              href: "https://raw.githubusercontent.com/La-Lojban/suho-pixra-pe-la-jbotcan/master/favicon.ico",
            },
          ]}
        />
        <Navbar color="inverse" className="header" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
            <img
              className="logo"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjMyNC45NzcyIgogICBoZWlnaHQ9IjI2My4wNjUxOSIKICAgaWQ9InN2ZzIiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIKICAgc29kaXBvZGk6ZG9jbmFtZT0icGx1a2FfbGFuY2lfbGVfdWl0a2kuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXGJhbGFuZGluX2FcRGVza3RvcFxsb191aXRraV9sb2pibyAoMSkucG5nIgogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMzAwLjAzOTY3IgogICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMzAwLjAzOTY3Ij4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExNiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczE0IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMCIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iODQ1IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjU2OSIKICAgICBpZD0ibmFtZWR2aWV3MTIiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjAuNTI2NjY2NjUiCiAgICAgaW5rc2NhcGU6Y3g9IjEwNy44OTk5OCIKICAgICBpbmtzY2FwZTpjeT0iNDIuMzYxMTg1IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI0NjgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjM4MSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiCiAgICAgZml0LW1hcmdpbi10b3A9IjIiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIyIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjIiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjIiIC8+CiAgPGcKICAgICBpZD0iZzQxMzUiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC41MDc3MzkzZS04LC02MS45MzQ3ODQpIj4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg0MTc3IgogICAgICAgZD0ibSAxODQuODI1NjUsNjYuNzg3Njk3IC0zOS44MTU2LDQ5LjY4NTU0MyAyMC45MzM5NywtNy44MjIyNiAtMTEuMzA5MDMsNjQuMTM2NzEgLTEuNjE4NjMsOS4xNzk2OSBIIDQ4LjY5OTk2IEwgNTkuOTcwMjQ0LDE2Mi40MTI2OSA0LjgwODkxOCwxOTMuNDY3MzggNDkuMDE4Njg1LDIyNC41MjIwNyA0NC42NDQ0MzksMjA0Ljk2NzM4IEggMTQ4Ljk2MDg0IGwgLTEuNjE4NjMsOS4xNzk2OSAtMTEuMzA5MDMsNjQuMTM2NzIgLTE4LjE3NTQxLC03LjgyMjI3IDIyLjI5Mzc4LDQ5LjY4NTU1IDM5LjgxNTYsLTQ5LjY4NTU1IC0yMC45MzM5Nyw3LjgyMjI3IDExLjMwOTAzLC02NC4xMzY3MiAxLjYxODYzLC05LjE3OTY5IGggMTA0LjMxNjQxIGwgLTExLjI3MDI5LDE5LjU1NDY5IDU1LjE2MTMzLC0zMS4wNTQ2OSAtNDQuMjA5NzcsLTMxLjA1NDY5IDQuMzc0MjUsMTkuNTU0NjkgSCAxNzYuMDE2MzYgbCAxLjYxODYzLC05LjE3OTY5IDExLjMwOTAzLC02NC4xMzY3MSAxOC4xNzU0MSw3LjgyMjI2IHoiCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZmYxYjAxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoMzc4NyIKICAgICAgIGQ9Im0gMTQ0LjY2ODM5LDEyNC40NjczOCBjIC0zOC4wMTAxLDAgLTc0LjQ2MDA5NSwzMC45ODc5NCAtODEuMTYyMzA0LDY4Ljk5ODA1IC02LjcwMjIwOCwzOC4wMTAxMSAxOC44MTk3Nyw2OC45OTgwNCA1Ni44Mjk4NzQsNjguOTk4MDQgMzguMDEwMTIsMCA3NC40NjIwNiwtMzAuOTg3OTMgODEuMTY0MjcsLTY4Ljk5ODA0IDYuNzAyMiwtMzguMDEwMTEgLTE4LjgyMTcyLC02OC45OTgwNSAtNTYuODMxODQsLTY4Ljk5ODA1IHogbSAtMy4xMjgwOCwxNy43NDAyNCBjIDI4LjQxNzIsMCA0Ny4yMDU0MSwyMi44MzgzNCA0Mi4xOTQyOSw1MS4yNTc4MSAtNS4wMTExMiwyOC40MTk0NyAtMzEuODUzMzYsNTEuMjU3ODEgLTYwLjI3MDU2LDUxLjI1NzgxIC0yOC40MTcxODksMCAtNDcuMjMwMzkyLC0yMi44NDA2MSAtNDIuMjE5NjczLC01MS4yNTc4MSA1LjAxMDcxOSwtMjguNDE3MiAzMS44Nzg3NTMsLTUxLjI1NzgxIDYwLjI5NTk0MywtNTEuMjU3ODEgeiIKICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6U2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOlNhbnM7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZmY5YzAxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6U2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOlNhbnM7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNvcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBkPSJtIDIwNC42NTEwMSwxMjQuNDY2MjkgYyAtMzguMDEwMSwwIC03NC40NjAxLDMwLjk4Nzk0IC04MS4xNjIzMSw2OC45OTgwNSAtNi43MDIyMSwzOC4wMTAxMSAxOC44MTk3Nyw2OC45OTgwNCA1Ni44Mjk4Nyw2OC45OTgwNCAzOC4wMTAxMiwwIDc0LjQ2MjA2LC0zMC45ODc5MyA4MS4xNjQyNywtNjguOTk4MDQgNi43MDIyMSwtMzguMDEwMTEgLTE4LjgyMTcxLC02OC45OTgwNSAtNTYuODMxODMsLTY4Ljk5ODA1IHogbSAtMy4xMjgwOSwxNy43NDAyNCBjIDI4LjQxNzIsMCA0Ny4yMDU0MSwyMi44MzgzNCA0Mi4xOTQyOSw1MS4yNTc4MSAtNS4wMTExMiwyOC40MTk0NyAtMzEuODUzMzYsNTEuMjU3ODEgLTYwLjI3MDU2LDUxLjI1NzgxIC0yOC40MTcxOSwwIC00Ny4yMzAzOSwtMjIuODQwNjEgLTQyLjIxOTY3LC01MS4yNTc4MSA1LjAxMDcyLC0yOC40MTcyIDMxLjg3ODc1LC01MS4yNTc4MSA2MC4yOTU5NCwtNTEuMjU3ODEgeiIKICAgICAgIGlkPSJwYXRoNDI1NSIgLz4KICA8L2c+Cjwvc3ZnPgo="
            />
            <div className="logo_text">Lojban</div>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://lojban.pw/en/books/learn-lojban"
                  style={{ color: "white" }}
                >
                  'Learn Lojban' course
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/speakable/">Speakable</NavLink>
              </NavItem>
              {/*<NavItem>
                <NavLink href="/programming/">Programming</NavLink>
              </NavItem>*/}
              <NavItem>
                <NavLink href="/chat-in-lojban/">Live chat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bob-le-chevalier/">
                  Answers from a Founder
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://lojban.pw/en/questions/history-of-lojban/">History</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="content" ref="content">
          <div className="content-inner-alma">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

// <div className='header'>
//   <div className='header-inner-alma'>
//     {this.props.children}
//   </div>
// </div>

Container.propTypes = {
  fluid: PropTypes.bool,
  // applies .container-fluid class
};

Row.propTypes = {
  noGutters: PropTypes.bool,
};

const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
};

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  className: PropTypes.string,
};

CardBlock.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

// CardColumns.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardDeck.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardFooter.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardGroup.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardHeader.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

// CardImgOverlay.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardLink.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

export default Layout;

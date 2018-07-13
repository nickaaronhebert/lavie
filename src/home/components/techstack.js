import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Icon, Card, Carousel, Divider } from 'antd';

let react_logo      = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K";
let babel_logo      = "https://d33wubrfki0l68.cloudfront.net/f35d49d959deb5bfd7deb80c2668128367e2917c/eb35e/images/logo.svg";
let node_logo       = "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png";
let webpack_logo    = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTE2IDE1MjQiPjx0aXRsZT5sb2dvLW9uLXdoaXRlLWJnPC90aXRsZT48cGF0aCBmaWxsPSIjRkZGIiBkPSJNODA4IDMzNmwzODcgMjE4Ljl2NDM3LjlsLTM4NyAyMTguOS0zODctMjE4LjlWNTU0Ljl6Ii8+PHBhdGggZmlsbD0iIzhFRDZGQiIgZD0iTTExMjUuOSA5NzcuN2wtMzA1LjEgMTcyLjZ2LTEzNC40bDE5MC4xLTEwNC42IDExNSA2Ni40em0yMC45LTE4LjlWNTk3LjlsLTExMS42IDY0LjV2MjMybDExMS42IDY0LjR6bS02NTcuOSAxOC45TDc5NCAxMTUwLjN2LTEzNC40TDYwMy44IDkxMS4zbC0xMTQuOSA2Ni40ek00NjggOTU4LjhWNTk3LjlsMTExLjYgNjQuNXYyMzJMNDY4IDk1OC44em0xMy4xLTM4NC4zbDMxMi45LTE3N3YxMjkuOUw1OTMuNSA2MzcuN2wtMS42LjktMTEwLjgtNjQuMXptNjUyLjYgMGwtMzEyLjktMTc3djEyOS45bDIwMC41IDExMC4yIDEuNi45IDExMC44LTY0eiIvPjxwYXRoIGZpbGw9IiMxQzc4QzAiIGQ9Ik03OTQgOTg1LjNMNjA2LjQgODgyLjFWNjc3LjhMNzk0IDc4Ni4xdjE5OS4yem0yNi44IDBsMTg3LjYtMTAzLjFWNjc3LjhMODIwLjggNzg2LjF2MTk5LjJ6bS0xMy40LTIwN3pNNjE5LjEgNjU0LjJsMTg4LjMtMTAzLjUgMTg4LjMgMTAzLjUtMTg4LjMgMTA4LjctMTg4LjMtMTA4Ljd6Ii8+PHBhdGggZmlsbD0iIzFBMUMxQyIgZD0iTTE1ODUuMyA5MTIuM2g4Mi41bDg0LjEtMjgwLjJoLTgwLjRsLTQ5LjggMTk4LjgtNTMuMS0xOTguOEgxNDk5bC01My42IDE5OC44LTQ5LjMtMTk4LjhoLTgwLjRsODMuNiAyODAuMmg4Mi41bDUyLTE3OS41IDUxLjUgMTc5LjV6TTE3NTYuMiA3NzNjMCA4NC4xIDU3LjMgMTQ2LjMgMTQ3LjQgMTQ2LjMgNjkuNyAwIDEwNy4yLTQxLjggMTE3LjktNjEuNmwtNDguOC0zN2MtOCAxMS44LTMwIDM0LjMtNjguMSAzNC4zLTQxLjMgMC03MS4zLTI2LjgtNzIuOS02NC4zSDIwMjljLjUtNS40LjUtMTAuNy41LTE2LjEgMC05MS42LTQ5LjMtMTQ5LjUtMTM2LjEtMTQ5LjUtNzkuOSAwLTEzNy4yIDYzLjItMTM3LjIgMTQ3Ljl6bTc3LjctMzAuNmMzLjItMzIuMSAyNS43LTU2LjggNjAuNi01Ni44IDMzLjggMCA1OC40IDIyLjUgNjAgNTYuOGgtMTIwLjZ6bTIyMy41IDE2OS45aDY5Ljd2LTI4LjljNy41IDkuMSAzNS40IDM1LjkgODMuMSAzNS45IDgwLjQgMCAxMzcuMi02MC41IDEzNy4yLTE0Ni44IDAtODYuOC01Mi41LTE0Ny4zLTEzMi45LTE0Ny4zLTQ4LjIgMC03Ni4xIDI2LjgtODMuMSAzNi40VjUyNC45aC03My45djM4Ny40em03MS44LTEzOS4zYzAtNTIuNSAzMS4xLTgyLjUgNzEuOC04Mi41IDQyLjkgMCA3MS44IDMzLjggNzEuOCA4Mi41IDAgNDkuOC0zMCA4MC45LTcxLjggODAuOS00NSAwLTcxLjgtMzYuNS03MS44LTgwLjl6bTI0NyAyMzkuNWg3My45Vjg4My4zYzcgOS4xIDM0LjggMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzMi45LTYwLjUgMTMyLjktMTQ3LjMgMC04NS43LTU2LjgtMTQ2LjgtMTM3LjItMTQ2LjgtNDcuNyAwLTc1LjYgMjYuOC04My4xIDM2LjRWNjMyaC02OS43djM4MC41em03MS44LTI0MS4xYzAtNDQuNSAyNi44LTgwLjkgNzEuOC04MC45IDQxLjggMCA3MS44IDMxLjEgNzEuOCA4MC45IDAgNDguOC0yOC45IDgyLjUtNzEuOCA4Mi41LTQwLjcgMC03MS44LTMwLTcxLjgtODIuNXptMjMxLjUgNTQuMWMwIDU4LjkgNDguMiA5My44IDEwNSA5My44IDMyLjIgMCA1My42LTkuNiA2OC4xLTI1LjJsNC44IDE4LjJoNjUuNFY3MzQuOWMwLTYyLjctMjYuOC0xMDkuOC0xMTYuOC0xMDkuOC00Mi45IDAtODUuMiAxNi4xLTExMC40IDMzLjJsMjcuOSA1MC40YzIwLjktMTAuNyA0Ni42LTE5LjggNzQuNS0xOS44IDMyLjcgMCA1MC45IDE2LjYgNTAuOSA0MS4zdjE4LjJjLTEwLjItNy0zMi4yLTE1LjUtNjAuNi0xNS41LTY1LjQtLjEtMTA4LjggMzcuNC0xMDguOCA5Mi42em03My45LTIuMmMwLTIzIDE5LjgtMzkuMSA0OC4yLTM5LjFzNDguOCAxNC41IDQ4LjggMzkuMWMwIDIzLjYtMjAuNCAzOC42LTQ4LjIgMzguNnMtNDguOC0xNS41LTQ4LjgtMzguNnptMzQ4LjkgMzAuNmMtNDYuNiAwLTc5LjgtMzMuOC03OS44LTgxLjQgMC00NSAyOS41LTgyIDc3LjItODIgMzEuNiAwIDUzLjEgMTUuNSA2NS40IDI2LjhsMjAuOS02Mi4yYy0xOC4yLTEzLjktNDcuMi0zMC04OC40LTMwLTg1LjIgMC0xNDkgNjIuNy0xNDkgMTQ3LjlzNjIuMiAxNDYuMyAxNDkuNSAxNDYuM2M0MC43IDAgNzEuMy0xNy4xIDg3LjMtMzBsLTE5LjgtNjAuNWMtMTIuNCAxMC4xLTM0LjkgMjUuMS02My4zIDI1LjF6bTExMC45IDU4LjRoNzMuOVY3NjcuNmw5My44IDE0NC43aDg2LjhMMzM2MS42IDc1OWw5OC42LTEyN2gtODMuMWwtOTAgMTE3Ljl2LTIyNWgtNzMuOXYzODcuNHoiLz48L3N2Zz4=";
let flux_logo       = "https://facebook.github.io/flux/img/flux_logo.svg";

export default class Techstack extends React.Component {
    componentWillMount() { }

	render() {
		return (
			<div>
                Techstack
                <div style={{ display: "inline-block" }}>
                <Card style={{ width: 175 }}>
                    <img src={react_logo}    height="50" />
                    <div>React</div>
                </Card>
                <Card style={{ width: 175 }}>
                    <img src={babel_logo}    height="50" />
                    <div>Babel</div>
                </Card>
                <Card style={{ width: 175 }}>
                    <img src={node_logo}     height="50" />
                    <div>Node</div>
                </Card>
                <Card style={{ width: 175 }}>
                    <img src={webpack_logo}  height="50" />
                    <div>Webpack</div>
                </Card>
                <Card style={{ width: 175 }}>
                    <img src={flux_logo}     height="50" />
                    <div>Flux</div>
                </Card>
                </div>
            </div>
		);
	}
}

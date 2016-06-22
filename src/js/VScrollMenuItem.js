import React from 'react';
import { Link } from 'react-router';

import iconArrowRight from '../img/icons/icon-arrow-right.svg';

export default class VScrollMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to={this.props.menuItem.link} className="vscrollmenu-item th-b-color th-bb-color-secondary">
                <div className="vscrollmenu-item__name">
                    <p className="t-large t-light th-f-color">{this.props.menuItem.name}</p>
                    <p className="t-large t-light th-f-color-secondary">{this.props.menuItem.info}</p>
                </div>
                <div>
                    <span className="svg-wrap" dangerouslySetInnerHTML={{__html: iconArrowRight}} />
                </div>
            </Link>
        )
    }
}
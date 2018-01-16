import React, {Component} from 'react';
import '../styles/badge-notification.css';
import Notification from "./Notification";

class BadgeNotification extends Component {
    render() {
        return (
            <span className="badge-notification">
                <Notification quantity={this.props.quantity}/>
                { this.props.children }
            </span>
        );
    }
}

export default BadgeNotification;
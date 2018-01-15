import React, {Component} from 'react';
import '../styles/badge-notification.css';

class BadgeNotification extends Component {
    componentDidUpdate(oldProps) {
        let a = oldProps.quantity;
        let b = this.props.quantity;
        if(a !== b) {
            console.log(a,b);
        }
    }

    render() {
        return(
            <span className="badge-notification">
                <span className="notification" style={this.props.quantity>0 ? {display: "block"} : {display:"none"}}>
                    { this.props.quantity }
                </span>
                { this.props.children }
            </span>
        );
    }
}

export default BadgeNotification;
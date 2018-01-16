import React, {Component} from 'react';
import '../styles/notification.css';

class Notification extends Component {
    componentDidUpdate(oldProps) {
        let a = oldProps.quantity;
        let b = this.props.quantity;
        if (a !== b) {
            console.log(a, b);
        }
    }

    render() {
        if(this.props.quantity <= 0) {
            return null;
        }
        return (
            <span className="notification" ref={"notification"}>
                { this.props.quantity }
            </span>
        );
    }
}

export default Notification;
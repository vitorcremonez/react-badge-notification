import React, {Component} from 'react';
import './App.css';
import BadgeNotification from "./components/BadgeNotification";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityNotifications: 0,
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({quantityNotifications: this.state.quantityNotifications - 1})}}>-</button>
                <button onClick={() => {this.setState({quantityNotifications: this.state.quantityNotifications + 1})}}>+</button>
                {this.state.quantityNotifications}
                <br/><br/><br/><br/>
                <BadgeNotification quantity={this.state.quantityNotifications}>
                    <button>Hello World!</button>
                </BadgeNotification>
            </div>
        );
    }
}

export default App;

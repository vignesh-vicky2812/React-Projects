import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// const App = () => {
//     return (
//         <div>Latitude: </div>
//     );
// };
class App extends React.Component {

    //componentdidmount() 

    state = { lat: null, errorMessage: '' }
    componentDidMount() {
        console.log('1')
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //we called setstate!!
                this.setState({ lat: position.coords.latitude });
                //we didnt
                // this.state.lat = position.coords.latitude
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    renderContent() {
        console.log('2');
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />;
    };

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    };
}
ReactDOM.render(
    <App />, document.querySelector('#root')
);
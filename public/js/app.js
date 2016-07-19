'use strict';



var DisplayField = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <div className="display-field col-xs-9">
                {this.props.text}
            </div>
        );
    }
});

var CalculatorButton = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        link: React.PropTypes.bool.isRequired,
        isSpecial: React.PropTypes.bool.isRequired,
        onButtonPressed: React.PropTypes.func.isRequired
    },
    handleButtonClick: function (e) {
        if (this.props.link === undefined) return;
        this.props.onButtonPressed(this.props.link);
    },
    render: function () {
        let buttonStyle = "btn btn-default btn-lg col-xs-3"
        if (this.props.isSpecial) buttonStyle += " btn-warning"
        return (
            <button className={buttonStyle}  onClick={this.handleButtonClick}>
                {this.props.text}
            </button>
        );
    }
});

var Calculator = React.createClass({
    getInitialState: function () {
        return {
            display: "200",
            links: {}
        };
    },
    makeRequest(url) {
        $.get(url, function (result) {
            console.log(result)
            this.setState({
                display: result.display,
                links: result.links
            })
        }.bind(this)).fail(function () {
            alert("Something went wrong! Reload the page to try again");
        });
    },
    handleButtonPressed(url) {
        this.setState({ links: {} })
        this.makeRequest(url)
    },
    componentDidMount() {
        this.makeRequest("/calculator")
    },
    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <CalculatorButton text="C" link={this.state.links.clear} isSpecial={true} onButtonPressed={this.handleButtonPressed}/>
                    <DisplayField text={this.state.display}/>
                </div>
                <div className="row">
                    <CalculatorButton text="7" link={this.state.links.seven} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="8" link={this.state.links.eight} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="9" link={this.state.links.nine} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="+" link={this.state.links.add} isSpecial={true} onButtonPressed={this.handleButtonPressed}/>
                </div>
                <div className="row">
                    <CalculatorButton text="4" link={this.state.links.four} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="5" link={this.state.links.five} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="6" link={this.state.links.six} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="-" link={this.state.links.subtract} isSpecial={true} onButtonPressed={this.handleButtonPressed}/>
                </div>
                <div className="row">
                    <CalculatorButton text="1" link={this.state.links.one} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="2" link={this.state.links.two} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="3" link={this.state.links.three} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="*" link={this.state.links.multiply} isSpecial={true} onButtonPressed={this.handleButtonPressed}/>
                </div>
                <div className="row">
                    <CalculatorButton text="0" link={this.state.links.zero} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="." link={this.state.links.dot} isSpecial={false} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="=" link={this.state.links.equal} isSpecial={true} onButtonPressed={this.handleButtonPressed}/>
                    <CalculatorButton text="/" link={this.state.links.divide} isSpecial={true} onButtonPressed={this.handleButtonPressed}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Calculator />, document.getElementById('content'));
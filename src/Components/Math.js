import React from 'react';
import './Math.css';
import Result from './Result';

class Math extends React.Component {
    state = {
        result: 0
    }
    // componentDidUpdate() {
    //     console.log(this.state.result);
    // }

    sum = () => {
        this.setState({
            result: +this.refs.a.value + +this.refs.b.value * +this.refs.c.value
        });
    };

    render() {
        return (
            <div>
                <h2>Math</h2>
                <div className="Form">
                    <label className="Label">Nhập a:</label>
                    <input type="number" placeholder="Nhập a" ref="a"></input>
                </div>
                <div className="Form">
                    <label className="Label">Nhập b:</label>
                    <input type="number" placeholder="Nhập b" ref="b"></input>
                </div>
                <div className="Form">
                    <label className="Label">Nhập c:</label>
                    <input type="number" placeholder="Nhập c" ref="c"></input>
                </div>
                <button className="Button" onClick={this.sum}>Kết quả</button>
                <Result result={this.state.result} />
            </div>
        );
    };
};

export default Math;
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    formatCount(){
        const { count } = this.state.count;
        return count === 0 ? "Zero" : count;
    }

    render() { 
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
}
 
export default Counter;
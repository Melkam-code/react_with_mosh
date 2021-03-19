import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['tag1','tag2','tag3']
    };

    constructor(){
        super();
        this.handleincrement = this.handleincrement.bind(this);
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    } 

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleincrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() { 
 
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={this.handleincrement} className="btn btn-secondary btn-sm">Increment</button>

                {this.state.tags.length === 0 && "Please create a new tag"}
                { this.renderTags() }
            </div>
        );
    }
}
 
export default Counter;
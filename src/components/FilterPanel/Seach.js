import React, {Component} from "react";

export default class Search extends Component {
    state = {
        term: ""
    };
    onType = e => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };
    render() {
        return (
            <>
                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                <input
                    id="filter"
                    type="text"
                    placeholder="start typing here..."
                    className="shop__search-input"
                    value={this.state.term}
                    onChange={this.onType}
                />
            </>
        )
    }
}
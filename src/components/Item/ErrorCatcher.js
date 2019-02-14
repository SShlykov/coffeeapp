import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Spinner from "../Spinner";
import CurrItem from "./Item"
import ErrorMessage from "../ErrorMessage";
import cDataService from "../../services/cDataService"

class Item extends Component {
    state = {
        item:{},
        type: this.props.type,
        id: this.props.id,
        error: false,
        loading: true
    };
    cDataService = new cDataService();
    onItemLoaded = ( item ) => {
        this.setState({
            item,
            loading: false
        })
    };
    onError = (error) => {
        this.setState({
            error: error,
            loading: false
        })
    };
    loadItem = (id) => {
        this.cDataService.getCoffee(id)
            .then(this.onItemLoaded)
            .catch((error)=> error.name||error.message)
            .then(this.onError)
    };
    componentDidMount() {
        this.loadItem(this.props.id)
    }
    componentDidCatch(error) {
        this.setState({
            error: error.name||error.message,
            loading: false,
        })
    }

    render() {
        const { error, loading } = this.state;
        const {url} = this.state.item|| "0";
        const content = this.state.loading? <Spinner/>:
            !(loading || error)? <CurrItem {...this.state.item} id={this.state.id} type={this.state.type} imgSrc={url} />:
                <ErrorMessage error={error}/>;
        return (
            <>{content}</>
        )
    }
}
export default withRouter(Item);
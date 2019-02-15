import React, {Component} from "react";
import ProductPage from "./ProductPage";
import ErrorMessage from "../../ErrorMessage";
import cDataService from "../../../services/cDataService";
import Spinner from "../../Item/ErrorCatcher";

export default class ErrorCatcher extends Component {
    state = {
        data: [],
        loader: true,
        error: false
    };
    _isMounted = false;
    cDataService = new cDataService();
    onItemLoaded = ( data ) => {
        if(this._isMounted) {
            this.setState({
                data,
                loading: false
            })
        }
    };
    onError = (error) => {
        if (this._isMounted) {
            this.setState({
                error: error,
                loading: false
            })
        }
    };
    loadItem = (id) => {
        this.cDataService.getCoffee(id)
            .then(data => {
                if(data.description){
                if(data.description.length>200){
                    data.smallDescr = `${data.description.slice(0,200)}...`
                    }}
                return data
            })
            .then(this.onItemLoaded)
            .catch((error)=> error.name||error.message)
            .then(this.onError)
    };
    componentDidMount() {
        this._isMounted = true;
        this.loadItem(this.props.id)
    }
    componentDidCatch(error) {
        this.setState({
            error: error.name||error.message
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { error, loading } = this.state;
        const content = this.state.loading? <Spinner/>:
            !(loading || error || !this.state.data )? <ProductPage {...this.state.data}/>:
                (!this.state.data)?<ErrorMessage error="We cant found product you searching" button/>: <ErrorMessage error={error} button/>;
        return(
            <>{content}</>
        )
    }
}
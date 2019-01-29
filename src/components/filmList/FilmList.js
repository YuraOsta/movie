import React, { Component } from 'react';
import styles from './FilmList';
import { connect } from 'react-redux';

class FilmList extends Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>FilmList</div>
        )
    }
}

function mapStateToProps(state) {
    return{

    }
}

function mapDispatchToProps(){
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
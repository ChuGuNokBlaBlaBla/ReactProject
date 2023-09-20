import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../../redux/profileReducer';
import axios from 'axios';
import BlockProfile from '../ProfileBlock';

const mapStateToProps = (state)=> {
    return{
        user: state.profilePage.activeUser
    }
}

class ContainerProfile extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//profile/2').then((list) => {
            this.props.setUser(list.data)
        })
    }
    render(){
        return(
            <BlockProfile state={this.props.user}/>
        )
    }
}

export default connect(mapStateToProps, {setUser} )(ContainerProfile)
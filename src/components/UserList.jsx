import React, { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this._fetchUserData()
    }

    _fetchUserData = async () => {
        const response = await fetch(`https://randomuser.me/api/?results=5`).then(response => response.json());
        this.setState({
            data: response.results
        });
    }

    render() {
        const { data } = this.state;
        const userList = data.map((user, index) => {
            return <UserCard key={index} name={user.name} email={user.email} phone={user.phone} picture={user.picture} location={user.location} />
        });

        return (
            <>{userList}</>
        );
    }

}

export default UserList;
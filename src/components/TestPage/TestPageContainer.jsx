import { connect } from "react-redux";
import { getTestUsers } from "../../Redux/testPage-reducer";
import TestPage from "./TestPage";
import React from 'react';


class TestPageWrapper extends React.Component {
    componentDidMount () {
        this.props.getTestUsers()
    }

    render() {
        return <TestPage 
            users = {this.props.users}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.testPage.users
    }
}


const TestPageContainer = connect(mapStateToProps, {getTestUsers})(TestPageWrapper)
export default TestPageContainer;
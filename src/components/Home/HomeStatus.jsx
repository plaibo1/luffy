import React, { Component } from 'react';

class HomeStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeMode = () => {
        this.setState({
            editMode: true
        })
    }
    
    noneActiveMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusUpdate = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevP, prevS) {
        if (prevP.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode && 
                    <div onClick={this.activeMode}>
                        {this.props.status}
                    </div>
                }
                {
                    this.state.editMode && 
                    <div>
                        <input type="text"
                        value={this.state.status}
                        onChange={this.onStatusUpdate} 
                        autoFocus onBlur={this.noneActiveMode} />
                    </div>
                }
            </div>
        );
    }
}

export default HomeStatus;

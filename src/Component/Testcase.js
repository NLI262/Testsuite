import React, { Component } from 'react';
import { Button } from 'antd';


export default class Testcase extends Component {

    state = {
        value: "this is editable",
        isInEditMode: false
    };
    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    renderEditView = () => {
        return <div>
            <input
                type="text"
                defaultValue={this.state.value}
                ref="theTextInput"
            />
            <Button onClick={this.updateComponentValue}>Save</Button>
            <Button onClick={this.changeEditMode}>cancel</Button>
        </div>
    }

    renderDefaultView = () => {
        return <div >
            {this.state.value}<Button onClick={this.changeEditMode}>
                <i class="fa fa-pencil-square-o fa-1x " ></i>
            </Button>
        </div>
    }
    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.theTextInput.value,
        })
    }

    render() {
        return (
            this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView()

        )
    }
}
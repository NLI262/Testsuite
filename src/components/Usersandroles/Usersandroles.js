import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Modal } from "antd";
import EditableFormTable from "./Table";

class Usersandroles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      disabled: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Users & Roles
        </Button>
        <Modal
          title="Users & Roles"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={850}
        >
          <EditableFormTable />
          <Button type="primary">Add User</Button>
        </Modal>
      </div>
    );
  }
}

export default Usersandroles;

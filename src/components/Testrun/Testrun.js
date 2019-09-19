import React, { Component } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Typography, Table, Divider, Layout } from "antd";

const { Header } = Layout;
const { Title } = Typography;

class Testrun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(response => {
        return response.json();
      })
      .then(result => {
        // console.log(result);
        this.setState({
          data: result
        });
      });
  }

  render() {
    const data = this.state.data;
    const columns = [
      {
        title: "Testrun",
        dataIndex: "id",
        key: "id",
        width: 100
      },
      {
        title: "Status",
        dataIndex: "title",
        key: "email"
      },
      {
        title: "",
        dataIndex: "",
        width: 500,
        render: () => (
          <div align="center">
            <Button type="primary" icon="play-circle" size="large">
              Run
            </Button>
          </div>
        )
      }
    ];
    
    return (
      <div style={{ padding: "0 50px" }}>
        <Layout>
          <Header>Header</Header>
        </Layout>
        <div align="right">
          <br />
          <Button type="primary" icon="plus" size="large">
            Add Module
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" icon="form" size="large">
            Create Testrun
          </Button>
        </div>
        <Divider />
        <Title level={3}>Your Tasks :</Title>
        <div style={{ background: "#F8F8FF" }}>
          <Table //To display the data in a table
            columns={columns}
            dataSource={data}
            bordered={true}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

export default Testrun;

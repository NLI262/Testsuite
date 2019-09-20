import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button, Table } from "antd";

export default class TestcaseSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      testCaseTitle: "",
      testCaseType: "",
      testPriority: "",
      testEstimate: "",
      prerequisites: "",
      steps: "",
      expectedOutput: "",
      projectTitle: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      sprintId: "",
      history: [],
      visible: false,
      data: []
    };
  }
  componentDidMount() {
    fetch("/TSM/testrun/last/14")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          history: result
        });
      });
    fetch("/TSM/test/list/14")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          id: result.id,
          testCaseTitle: result.testCaseTitle,
          testCaseType: result.testCaseType,
          testPriority: result.testPriority,
          testEstimate: result.testEstimate,
          prerequisites: result.prerequisites,
          steps: result.steps,
          expectedOutput: result.expectedOutput
        });
      });
    fetch("/TSM/testrun/history/14")
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

  displayDetails() {
    const classes = makeStyles(theme => ({
      root: {
        width: "100%",
        marginTop: theme.spacing(3),
        padding: theme.spacing(3, 2),
        overflowX: "auto"
      },
      table: {
        minWidth: 650
      }
    }));

    showModal = () => {
      this.setState({
        visible: true
      });
    };

    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false
      });
    };

    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false
      });
    };

    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            <h1>
              {this.state.id} . {this.state.testCaseTitle}
            </h1>
          </Typography>
          <Typography component="p"></Typography>
          <Typography component="p">
            <h4>Details</h4>
            <Typography component="p">
              <p>Type:{this.state.testCaseType}</p>
              <p>Estimate:{this.state.testEstimate}</p>
              <p>Priority:{this.state.testPriority}</p>
              <p>Prerequisites:{this.state.prerequisites}</p>
              <p>Steps:{this.state.steps}</p>
              <p>Expected Output:{this.state.expectedOutput}</p>
            </Typography>
            <h4>Test Run and Results</h4>
            <div>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Executed On</TableCell>
                      <TableCell align="center">Actual Output</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.history.map(
                      function(item, key) {
                        return (
                          <TableRow key={item.id}>
                            <TableCell align="center">
                              {item.lastUpdate}
                            </TableCell>
                            <TableCell align="center">
                              {item.actualOutput}
                            </TableCell>
                            <TableCell align="center">{item.status}</TableCell>
                          </TableRow>
                        );
                      }.bind(this)
                    )}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
  render() {
    const data = this.state.data;
    const columns = [
      {
        title: "Execution ID",
        dataIndex: "id",
        key: "id"
        // eslint-disable-next-line
        //render: text => <a><font color="blue"><u>{text}</u></font></a>
      },
      {
        title: "Testcase Title",
        dataIndex: "test.testCaseTitle",
        key: "test.testCaseTitle"
      },
      {
        title: "Expected Output",
        dataIndex: "test.expectedOutput",
        key: "test.expectedOutput"
      },
      {
        title: "Executed On",
        dataIndex: "lastUpdate",
        key: "lastUpdate"
      },
      {
        title: "Actual Output",
        dataIndex: "actualOutput",
        key: "actualOutput"
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "Attachment",
        dataIndex: "attachment",
        key: "attachment",
        // eslint-disable-next-line
        render: text => (
          <a>
            <font color="blue">
              <u>{text}</u>
            </font>
          </a>
        )
      }
    ];
    return (
      <div>
        {" "}
        {this.displayDetails()}
        <div>
          <Button type="primary" onClick={this.showModal}>
            Summary
          </Button>
          <Modal
            title="Test Case Summary"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={850}
          >
            <Table
              columns={columns}
              dataSource={data}
              onChange={this.handleChange}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

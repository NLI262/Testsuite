import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
  Table,
  Select,
  InputNumber,
  Popconfirm,
  Form,
  Button,
  message
} from "antd";

const { Option } = Select;

function confirm(e) {
  message.success("User Deleted");
}

function cancel(e) {
  // console.log(e);
}

function handleChange(value) {
  console.log(`${value}`);
}

const data = [];
for (let i = 1; i < 11; i++) {
  data.push({
    key: i.toString(),
    name: `Employee ${i}`,
    email: "example@nineleaps.com",
    address: `Tester`
  });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return (
      <div>
        <Select
          defaultValue="Tester"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="Developer">Developer</Option>
          <Option value="Lead">Lead</Option>
          <Option value="Tester">Tester</Option>
        </Select>
      </div>
    );
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: "" };
    this.columns = [
      {
        title: "User",
        dataIndex: "name",
        width: "15%",
        editable: false
      },
      {
        title: "Email",
        dataIndex: "email",
        width: "15%",
        editable: false
      },
      {
        title: "Role",
        dataIndex: "address",
        width: "15%",
        editable: true
      },
      {
        title: "",
        dataIndex: "",
        width: "20%",
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <Button>
                    <a
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  </Button>
                )}
              </EditableContext.Consumer>
              <Popconfirm
                title="Sure to cancel?"
                onConfirm={() => this.cancel(record.key)}
              >
                <Button>
                  <a>Cancel</a>
                </Button>
              </Popconfirm>
            </span>
          ) : (
            <div>
              <Button>
                <a
                  disabled={editingKey !== ""}
                  onClick={() => this.edit(record.key)}
                >
                  Edit
                </a>
              </Button>
              &nbsp;&nbsp;
              <Popconfirm
                title="Sure to delete?"
                onConfirm={confirm}
                onCancel={cancel}
              >
                <Button> Delete </Button>
              </Popconfirm>
            </div>
          );
        }
      }
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
        message.success("Edited");
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
        message.success("Edited");
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel
          }}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;

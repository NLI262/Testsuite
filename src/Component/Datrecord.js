import React, { Component } from "react";
import 'antd/dist/antd.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

export default class Datrecord extends Component {
  constructor(props) {
    super(props);
    //this.getRow = this.getRow.bind(this);
    this.state = {
      // selectedRows: [],
      //temp: '',
      // search: "",
      // filteredData: [],
      columns: [
        {
          dataField: 'id',
          text: 'Testcase',
        },

      ],
      data: [
        {
          id: 'testcase1',
          Testcase: 'testcase1',

        },
        {
          id: 'testcase2',
          Testcase: 'testcase2',

        },
        {
          id: 'testcase3',
          Testcase: 'testcase3',

        },
        {
          id: 'testcase4',
          Testcase: 'testcase4',

        },
      ],
    };
  }

  // getRow(data) {
  //   this.setState({ selectedRow: data });
  // }

  // async componentDidMount() {
  //   this.setState({
  //     selectedRows: this.state.selectedRows,
  //   })
  // }

  handleClick = (data) => {
    this.state.temp = data[0].key;
    console.log("clicked", this.state.temp);

  }

  // handleInputChange = e => {
  //   const search = e.target.value;
  //   this.setState(prevState => {
  //     const filteredData = prevState.data.filter(data => {
  //       return data.Testcase.toLowerCase().includes(this.state.search.toLowerCase());
  //     });

  //     return {
  //       search,
  //       filteredData
  //     };
  //   });
  // };

  // getData = () => {

  //       const { search } = this.state;
  //       const filteredData = this.state.data.filter( data => {
  //         return data.Testcase.toLowerCase().includes(search.toLowerCase());
  //       });

  //       this.setState({
  //         data: this.state.data,
  //         filteredData
  //       });

  // };

  // async componentDidMount() {
  //   this.getData();
  // }


  render() {

    // const { Search } = Input;
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     this.handleClick(selectedRows);
    //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //   },
    // };
    const { SearchBar } = Search;
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      // onChange: ( selectRow) => {
      //      this.handleClick(selectRow);
      //      console.log( 'selectedRow: ', selectRow);
      //     },
    };

    return (
      // <div>
      // <div>

      //     <Search
      //       placeholder="Search for..."
      //       value={this.state.search}
      //       onChange={this.handleInputChange}
      //     />


      //   <div>{this.state.filteredData.map(i => <p>{i.Testcase}</p>)}</div>
      //     <Table rowSelection={rowSelection}
      //       columns={this.state.columns}
      //       dataSource={this.state.data}
      //       getRow={this.getRow}
      //       value={this.state.selectedRows}
      //       onChange={e => this.setState({ selectedRows: e.target.value })}
      //       data={this.state.selectedRows} bordered />
      //   </div>
      // </div>
      <ToolkitProvider
        keyField="id"
        data={this.state.data}
        columns={this.state.columns}
        search
      >
        {
          props => (
            <div>

              <SearchBar {...props.searchProps} />
              <br />
              <BootstrapTable
                {...props.baseProps}
                striped
                hover
                //condensed
                bordered={true}
                selectRow={selectRow}
                bootstrap4
              //pagination={ paginationFactory() }
              />
            </div>
          )
        }
      </ToolkitProvider>
    )
  }
}
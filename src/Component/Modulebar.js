import React, { Component } from "react";
import 'antd/dist/antd.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

export default class Datarecord extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

      selectRow:{},
      
      columns: [
        {
          dataField: 'id',
          text: 'Module',
         
        },

      ],
      data: [
        {
          id: 'module1',
          Module: 'module1',

        },
        {
          id: 'module2',
          Module: 'module2',

        },
        {
          id: 'module3',
          Module: 'module3',

        },
        {
          id: 'module4',
          Module: 'module4',

        },
      ],
    };
  }
 handleSort= () =>{
  // console.log(this.node.table.props.data);
  // console.log(this.node.selectionContext.selected);
  // console.log(this.node.sortContext.state.sortColumn);
  // console.log(this.node.filterContext.currFilters);
  // console.log(this.node.sortContext.state.sortOrder);
  this.props.onHeaderClick(this.props.value);
 }
 
  

  render() {
    const { SearchBar } = Search;
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
    };
    return (
     
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
                ref={ n => this.node = n }
                striped
                //value={column}
                hover
                bordered={true}
                selectRow={selectRow}
                bootstrap4
                onClick={() => this.handleSort(this.state.columns)}
                value= {this.state.columns}
              />
            </div>
          )
        }
      </ToolkitProvider>
    )
  }
}
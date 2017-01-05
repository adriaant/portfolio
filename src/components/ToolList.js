import React, { Component } from 'react';
import tools from './ToolContent';
import '../styles/Tools.css';

class ToolList extends Component {

  renderTools() {
    return tools.map((item, idx) =>
      <li key={idx} className={"tool_item tool_item_" +item.name} title={item.content}></li>
    );
  }

  render() {
    return (
      <div className="tool_list">
        <hr/>
        <h2>Toolbox</h2>
        <ul>
          {this.renderTools()}
        </ul>
      </div>
    );
  }
}

export default ToolList;

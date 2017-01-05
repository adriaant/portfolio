import React, { Component } from 'react';

class TabHeader extends Component {
  render() {
    const {handleTabClick, tab} = this.props;
    let className = "tab_header_item tab_header_item_" + tab.title;
    return (
      <div className={className} onClick={handleTabClick.bind(this, tab)}>
      </div>
    );
  }
}

export default TabHeader;

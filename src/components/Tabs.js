import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Modal from 'react-modal';
import TabHeader from './TabHeader';
import '../styles/Tabs.css';


class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      active: null
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleTabClick(selected) {
    console.log(selected);
    this.setState({ showModal: true, active: selected });
  }

  renderModalTitle() {
    if (this.state.active) {
      return this.state.active.name;
    }
    return null;
  }

  renderModalContent() {
    if (this.state.active) {
      return this.state.active.content.map((item, idx) =>
        item
      );
    }
    return null;
  }

  render() {
    var tabHeaders = this.props.tabs.map((tab, i) => {
      return(<TabHeader handleTabClick={this.handleTabClick.bind(this)} key={i} tab={tab} />)
    });
    return (
      <Flexbox className="tabs" flexDirection="column">
        <Flexbox className="tab_header" flexDirection="row" justifyContent="center">{tabHeaders}</Flexbox>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Countries"
          className="tab_modal"
          overlayClassName="tab_modal_overlay"
        >
          <h2>{this.renderModalTitle()}
            <span className="modal_close" onClick={this.handleCloseModal}></span>
          </h2>
          <div>{this.renderModalContent()}</div>
        </Modal>
      </Flexbox>
    );
  }
}

export default Tabs;

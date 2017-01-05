import React, { Component } from 'react';
import countries from './CountryContent';
import Tabs from './Tabs';


class CountryList extends Component {

  constructor(props) {
    super(props);
    this.state = { active: 'nl' };
    this.setActiveCountry = this.setActiveCountry.bind(this);
  }

  setActiveCountry(countryName) {
    this.setState({ active: countryName });
  }

  render() {
    return (
      <div className="country-list">
        <hr/>
        <h2>Background</h2>
        <Tabs tabs={countries} />
      </div>
    );
  }
}

export default CountryList;

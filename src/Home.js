import React, { Component } from 'react';
import Loadable from 'react-loadable';

const PhoneAsync = Loadable({
  loader: () => import("react-telephone-input"),
  loading: () => <span>Loading the phone number</span>
});

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <PhoneAsync
          placeholder="Start typing a phone number"
          value={"+445555555555"}
          onChange={mobile => null}
          flagsImagePath="/flags.png"
          defaultCountry="us"
        />
        <PhoneAsync
          placeholder="Start typing a phone number"
          value={"+44555555555"}
          onChange={mobile => null}
          flagsImagePath="/flags.png"
          defaultCountry="us"
        />
      </div>
    );
  }
}

export default Home;

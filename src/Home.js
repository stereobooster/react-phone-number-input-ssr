import React, { Component } from 'react';
import Loadable from 'react-loadable';

import "react-phone-number-input/rrui.css";
import "react-phone-number-input/style.css";
const PhoneAsync = Loadable({
  loader: () => import("react-phone-number-input"),
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
        />
        <PhoneAsync
          placeholder="Start typing a phone number"
          value={"+44555555555"}
          onChange={mobile => null}
        />
      </div>
    );
  }
}

export default Home;

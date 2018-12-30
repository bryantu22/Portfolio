import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <span>Made by Bryan Tu © {new Date().getFullYear()}</span>
      </div>
    );
  }
}

export default Footer;

import React from 'react'

import './AppLayout.css'

class AppLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppLayout

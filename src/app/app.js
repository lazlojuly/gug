import React from 'react'
import ReactDom from 'react-dom'

var SimpleComponent = React.createClass({
  render: function() {
    return (
      <div>Hello {this.props.message}</div>
    )
  }
})

ReactDom.render(
  <SimpleComponent message="React Demo" />,
  document.querySelector('.js-app')
)

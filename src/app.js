import React from 'react'
import ReactDom from 'react-dom'

var SimpleComponent = React.createClass({
  render: function() {
    setTimeout(function () {
      return (
        <div>Hello {this.props.message}</div>
      )
    }, 1200)
  }
})

ReactDom.render(
  <SimpleComponent message="React Demo" />,
  document.querySelector('.js-app')
)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('ws.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

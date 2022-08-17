import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Spinner extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div className='text-center'>
       <img src="greengif.gif" className='my-4' style={{width:"60px"}} alt="loader" />  
      </div>
    )
  }
}

export default Spinner

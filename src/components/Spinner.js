import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center mx-2 my-5'>
        <img src={spinner} alt="loading.." />
      </div>
    )
  }
}

export default Spinner

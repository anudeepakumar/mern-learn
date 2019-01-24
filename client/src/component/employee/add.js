import React, { Component } from 'react'

class AddEmployee extends Component {
  render() {
    return (
        <div>
            <form>
                <input name="number" type="text" onChange="onChange" />
                <input name="name" type="text" onChange="onChange" />
                <input name="email" type="text" onChange="onChange" />
                <input name="phone" type="text" onChange="onChange" />
                <input name="account" type="text" onChange="onChange" />
                <input type="submit" value="submit"/>
            </form> 
      </div>
    )
  }
}

export default AddEmployee;
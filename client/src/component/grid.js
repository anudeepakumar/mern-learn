import React, { Component } from 'react';
import '../App.css'

export default class grid extends Component {
  render() {
    return (
      <div>
        <table border="1">
            <tbody>
                <tr>
                    <td>number</td>
                    <td>name</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>account</td>
                    <td>action</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

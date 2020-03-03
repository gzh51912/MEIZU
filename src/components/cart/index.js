import React, { Component } from 'react'
import Hoc from '../hoc'
 class Cart extends Component {
    render() {
        return (
            <div>
                购物车
            </div>
        )
    }
}
export default Hoc(Cart)
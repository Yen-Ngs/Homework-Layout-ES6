import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div class="container">
                <div >
                <div >
                    <BT3ProductItem></BT3ProductItem>
                </div>
                <div >
                    <BT3ProductItem />
                </div>
                <div >
                    <BT3ProductItem />
                </div>

                </div>
            </div>
        )
    }
}

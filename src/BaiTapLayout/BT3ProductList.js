import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div class="container">
                <div className="row" >
                <div className="col-3 my-5">
                    <BT3ProductItem></BT3ProductItem>
                </div>
                <div className="col-3 my-5">
                    <BT3ProductItem />
                </div>
                <div className="col-3 my-5">
                    <BT3ProductItem/>
                </div>
                <div className="col-3 my-5">
                    <BT3ProductItem/>
                </div>

                </div>
            </div>
        )
    }
}

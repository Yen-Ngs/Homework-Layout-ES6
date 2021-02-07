import React, { Component } from 'react'

export default class BT3ProductItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div >
                <div className="card h-100">
                    <img className="card-img-top" src="https://picsum.photos/id/1000/1000/250" 
        />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Description</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>

        )
    }
}

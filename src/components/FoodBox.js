import React, { Component } from 'react'

export default class FoodBox extends Component {

    state = {
        quantity : 1
    }

    handleQuantity = (event) =>{
        this.setState({
            quantity: event.target.value
        })
    }

    render() {

        const {name, image, calories, onItemAdd} = this.props


        return (
            <div>
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image}  alt="food"/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" onChange={this.handleQuantity} />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={()=>{ onItemAdd(this.props , this.state.quantity)}} >
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
            
        </div>
        )
    }
}



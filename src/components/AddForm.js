import React, { Component } from 'react'

export default class AddForm extends Component {
    render() {

        const {onAdd} = this.props

        return (
            <form onSubmit={onAdd}>
                <input name="name" type="text" placeholder="Enter here the food" />
                <input name="calories" type="number" placeholder="Enter calories"/>
                <input name="image" type="text" placeholder="Image URL"/>
                <button type="submit" >Add Item</button>
            </form>
        )
    }
}

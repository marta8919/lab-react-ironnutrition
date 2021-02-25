
import React, { Component } from 'react'

class Total extends Component {
    
    render() {
        const {items} = this.props

        let total = items.reduce(function(total, singleItem){return total+singleItem.calories * singleItem.quantity}, 0);


        return (
            <div>
                <h1>Today's foods</h1>
                {
                   items.map((singleItem) => {

                    // totalCalories = {singleItem.calories * singleItem.quantity}

                        return (
                        <div>
                            {singleItem.name} {singleItem.calories} x {singleItem.quantity}
                            </div>
                            )
                        
                    })
                }

                <div>Total cal : {total}</div>
            </div>
        )
    }
}

export default Total

import React, {Component} from 'react';
import Bux from '../../hoc/Bux'
import Burger from '../../components/Burger/Burger.js'

class BurgerBuilder extends Component {
    render () {
        return (
            <Bux>
                <Burger/>
                <div>Build Controls</div>
            </Bux>
        );
    }
}
export default BurgerBuilder; 
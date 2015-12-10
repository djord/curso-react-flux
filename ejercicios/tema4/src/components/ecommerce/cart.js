import React, { PropTypes } from 'react';
import Header from './header';
import CartItem from './cart_item';


const Cart = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  getDefaultProps(){
    return {
      items: []
    }
  },
  calculateTotal(){
    return this.props.items.reduce((acc, item) => {
      return acc + (item.quantity * item.price);
    }, 0).toFixed(2);
  },
  handleBack(e){
    e.preventDefault();
    //TODO
  },
  handleCheckout(e){
    e.preventDefault();
    //TODO
  },
  render(){
    const cartItems = this.props.items.map(item =>
      <CartItem key={item.id} product={item} />);

    return (
      <div className='cart'>
        <Header text='Tu compra' />
        <div className='cart-contents'>
          <table>
            <thead>
              <tr>
                <th className="qty">Cant</th>
                <th className="description">Producto</th>
                <th className="unit-price">Precio</th>
                <th className="subtotal">Total</th>
                <th className="actions"></th>
              </tr>
            </thead>
            <tbody>
              { cartItems }
              <tr className='summary'>
                <td colSpan="4" className="total">
                  { this.calculateTotal() } &euro;
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <a className="button" onClick={ this.handleBack }>Seguir comprando</a>
          { cartItems.length === 0 ? null : <a className="button" onClick={ this.handleCheckout }>Finalizar compra</a> }
        </div>
      </div>
    )
  },
});

export default Cart;

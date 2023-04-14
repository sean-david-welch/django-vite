import React from 'react';
import { CartItemProps } from '../../types/Types';

const CartItem: React.FC<CartItemProps> = ({
    item,
    handleChangeQuantity,
    handleRemove,
}) => (
    <li key={item.id}>
        <img src={item.image} alt={item.name} />
        <span>{item.name}</span>
        <span>€{Number(item.price).toFixed(2)}</span>
        <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={event => handleChangeQuantity(item.id, event)}
        />
        <button onClick={() => handleRemove(item.id)}>Remove</button>
    </li>
);

export default CartItem;

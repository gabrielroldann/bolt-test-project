import React from 'react';
import { CreditCard } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

const CartSummary: React.FC = () => {
  const { subtotal, totalItems } = useCart();
  
  // For demo purposes, let's add tax calculation
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + tax;
  
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Order Summary
      </h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <p>Subtotal ({totalItems} items)</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <p>Tax (7%)</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-medium text-gray-900 dark:text-white">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          className="flex items-center justify-center"
        >
          <CreditCard className="h-5 w-5 mr-2" />
          Checkout
        </Button>
        
        <div className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>Secure checkout powered by Stripe</p>
          <p className="mt-1">All transactions are encrypted and secure</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
import { useContext, useEffect } from "react";
import useCartStore from "../store/authStore";
import { StoreContext } from "./context/StoreProvider";
import { Trash2, ShoppingCart, Package } from "lucide-react";

const AddCart = () => {
  const { cart, fetchProducts, deleteProduct } = useCartStore();
  const { selectedData = [], updateCalculate } = useContext(StoreContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingCart className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold ">Your Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className=" rounded-xl shadow-sm p-8 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Your cart is empty</p>
            <button className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <ul className="space-y-4">
              {cart.map((product) => (
                <li
                  key={product._id}
                  className=" rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="">
                    <h3 className="text-lg font-semibold  mb-2">
                      {product.product}
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-[100px] flex-shrink-0">
                        <img
                          src={selectedData?.image}
                          alt={selectedData?.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="space-y-2 ">
                            <p className="flex items-center justify-between">
                              <span>Price:</span>
                              <span className="font-medium ">
                                ${product.price.toFixed(2)}
                              </span>
                            </p>
                            <p className="flex items-center justify-between">
                              <span>Quantity:</span>
                              <span className="font-medium ">
                                {product.quantity}
                              </span>
                            </p>
                            <p className="flex items-center justify-between">
                              <span>Subtotal:</span>
                              <span className="font-medium ">
                                ${(product.price * product.quantity).toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteProduct(product._id)}
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className=" rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCart;

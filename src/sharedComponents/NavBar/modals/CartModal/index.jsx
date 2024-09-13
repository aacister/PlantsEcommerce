import { useState, useContext, useEffect, useCallback } from "react";
import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "context/sessionContext";
import LoadingSpinner from "sharedComponents/LoadingSpinner";
import * as cartService from "services/cart";
import CartItem from "./CartItem";
import clsx from "clsx";

const CartModal = (props) => {
  const { setCartOpen } = props;
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { username } = useContext(SessionContext);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    const response = await cartService.getCart();
    setItems(await response.json());
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;
  for (let item of items) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }

  return (
    <div className="flex flex-col w-full h-screen max-w-xl bg-white">
      <div className="text-3xl text-center text-white shadow-md py-7 bg-emerald-800 font-playfair">
        {username}&apos;s Cart
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-1 pb-20 overflow-y-scroll">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={clsx("pt-8 mx-5 mt-8", idx !== 0 && "border-t border-slate-200")}
              >
                <CartItem item={item} fetchCart={fetchCart} />
              </div>
            ))}
          </div>
          <div className="flex flex-col px-4 pb-4 border-t border-slate-200">
            <div className="flex justify-between py-4 text-slate-400">
              <div>{totalQuantity} items</div>
              <div>
                subtotal
                <span className="ml-2 text-lg text-slate-500">${subTotal}</span>
              </div>
            </div>
            <button
              className="flex items-center justify-center py-3 text-lg text-white rounded-full bg-emerald-700"
              onClick={() => alert("this app is not a real plant selling site :)")}
            >
              checkout <i className="ml-2 text-2xl fa-regular fa-arrow-right-to-line"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;

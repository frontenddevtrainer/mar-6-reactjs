import { useDispatch, useSelector } from "react-redux";
import { CartSliceState, removeFromCart } from "../../store/slices/cart";
import { Album } from "../../interfaces/Album";
import { placeOrder } from "../../store/async-actions/cart";
import { useNavigate } from "react-router-dom";

const CartpageScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state: { cart: CartSliceState }) => {
    return state?.cart;
  });

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="divide-y divide-gray-700">
        {cart.items.length > 0 &&
          cart.items.map((album: Album) => {
            return (
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Album"
                    className="w-16 h-16"
                  />
                  <div>
                    <p className="text-md font-bold">{album.name}</p>
                    <p className="text-xs text-gray-400">
                      {album.singers.join(", ")}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeFromCart(album));
                  }}
                  className="text-red-400 hover:text-red-300 material-icons"
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>

      <div className="mt-6">
        <input
          type="text"
          className="bg-gray-700 text-white rounded px-2 py-1 w-1/2"
          placeholder="Enter Discount Code"
        />
        <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300 ml-2">
          Apply
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Summary</h2>
        <div className="flex justify-between items-center">
          <span>Total</span>
          <span>$100</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Taxes</span>
          <span>$20</span>
        </div>
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Grand Total</span>
          <span>$120</span>
        </div>
      </div>
      
      <div className="mt-6">
        <button
          disabled={cart.order.loading}
          onClick={() => {
            dispatch(placeOrder() as any);
            navigate("/")
          }}
          className="bg-green-400 text-white px-8 py-3 rounded hover:bg-green-300 w-full"
        >
        {
          !cart.order.loading ? "Checkout" : "Placing ordering"
        }
        </button>
      </div>
    </>
  );
};

export default CartpageScreen;

import { useSelector } from "react-redux";
import { SectionTitle } from "../components/SectionTitle";
import { CartItemsList } from "../components/CartItemsList";
import { CartTotals } from "../components/CartTotals";
import { Link } from "react-router-dom";

export const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numItemsCart = useSelector((state) => state.cartState.numItemsCart);

  if (numItemsCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

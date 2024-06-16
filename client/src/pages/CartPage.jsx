import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { useRecoilValue } from "recoil";
import cartAtom from "../atoms/cartAtom";
import toast from "react-hot-toast";
import logo from "../pages/media/logo.png";
import axios from "axios";
function CartPage() {
  const cart = useRecoilValue(cartAtom);
  let amount = 0;
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    amount = amount + cartItem.price;
  }

  async function handleSubmit() {
    try {
      const {
        data: { key },
      } = await axios.get(`${import.meta.env.VITE_APP_URL}/getKey`);
      const {
        data: { order },
      } = await axios.post(`${import.meta.env.VITE_APP_URL}/pay/checkout`, {
        amount: amount,
      });
      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Vidyut",
        description: "Test Transaction",
        image: logo,
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `${import.meta.env.VITE_APP_URL}/pay/paymentVerification`,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = window.Razorpay(options);
      razor.open();
    } catch (error) {
      return toast.error(error.message);
    }
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to={"/"} href="#">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1 className={styles.heading}>Nature&apos;s Cart</h1>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((tree) => {
              return (
                <tr key={tree.name} className={styles.cartItem}>
                  <td className={styles.itemDetails}>
                    <img src={tree.image} alt="Tree Image" />
                    <span>{tree.name}</span>
                  </td>
                  <td>{tree.price} INR</td>
                  <td>
                    <div className={styles.quantity}>
                      <button className={styles.decrease}>-</button>
                      <input type="number" value="1" min="1" />
                      <button className={styles.increase}>+</button>
                    </div>
                  </td>
                  <td>10.00 INR</td>
                </tr>
              );
            })}
            {/* <tr className="cart-item">
              <td className="item-details">
                <img src="./rubber.avif" alt="Tree Image" />
                <span>Tree Name 2</span>
              </td>
              <td>15.00 INR</td>
              <td>
                <div className="quantity">
                  <button className="decrease">-</button>
                  <input type="number" value="1" min="1" />
                  <button className="increase">+</button>
                </div>
              </td>
              <td>55.00 INR</td>
            </tr>
            <tr className="cart-item">
              <td className="item-details">
                <img
                  src="./WhatsApp Image 2024-06-14 at 4.11.00 PM (2).jpeg"
                  alt="Tree Image"
                />
                <span>Tree Name 3</span>
              </td>
              <td>45.00 INR</td>
              <td>
                <div className="quantity">
                  <button className="decrease">-</button>
                  <input type="number" value="1" min="1" />
                  <button className="increase">+</button>
                </div>
              </td>
              <td>75.00 INR</td>
            </tr> */}
          </tbody>
        </table>
        <button onClick={handleSubmit} className={styles.payment}>
          Proceed to Pay
        </button>
      </main>

      {/* <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer> */}
    </>
  );
}

export default CartPage;

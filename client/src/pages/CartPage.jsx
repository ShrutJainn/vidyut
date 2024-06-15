import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { useRecoilValue } from "recoil";
import cartAtom from "../atoms/cartAtom";
import toast from "react-hot-toast";
import axios from "axios";
function CartPage() {
  async function handleSubmit() {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_URL}/users/send-sms`
      );

      console.log(data);
    } catch (error) {
      return toast.error(error.message);
    }
  }
  const cart = useRecoilValue(cartAtom);
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

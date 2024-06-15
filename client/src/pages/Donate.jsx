import styles from "./Donate.module.css";
import banyan from "./media/tree-images/banyan.jpeg";
import atc from "./media/tree-images/atc.png";
import peepal from "./media/tree-images/peepal.png";
import neem from "./media/tree-images/neem.avif";
import sandalwood from "./media/tree-images/sandalwood.jpeg";
import rubber from "./media/tree-images/rubber.avif";
import teak from "./media/tree-images/teak.jpg";
import { useRecoilState } from "recoil";
import cartAtom from "../atoms/cartAtom";
import { useNavigate } from "react-router-dom";

function Donate() {
  const [cart, setCart] = useRecoilState(cartAtom);
  const navigate = useNavigate();
  const trees = [
    {
      name: "Banyan Tree",
      description:
        "The Banyan tree is known for its large canopy and aerialroots. It's a symbol of longevity and eternal life in many cultures.",
      price: 10,
      image: banyan,
    },
    {
      name: "Peepal Tree",
      description:
        "The Peepal tree, also known as the sacred fig, is revered inmany cultures.It is used in making medicines also.",
      price: 10,
      image: peepal,
    },
    {
      name: "Neem Tree",
      description:
        "Neem tree is widely known for its medicinal properties.It's often used in traditional medicine and as a naturalpesticide.",
      price: 10,
      image: neem,
    },
    {
      name: "Sandalwood Tree",
      description:
        "Sandalwood trees are known for their aromatic wood. They are used in incense, perfumes, and traditional rituals.",
      price: 10,
      image: sandalwood,
    },
    {
      name: "Rubber Tree",
      description:
        "Rubber trees are the primary source of natural rubber. They are cultivated extensively in tropical regions, used for medical purposes.",
      price: 10,
      image: rubber,
    },
    {
      name: "Teak Tree",
      description:
        "Teak trees are valued for their durable wood, which is resistant to pests and weather conditions. High oxygen producing",
      price: 10,
      image: teak,
    },
  ];

  function handleAddItem(tree) {
    setCart((prev) => [...prev, tree]);
  }

  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.heading1}>THINK GLOBAL,</h1>
        <h1 className={styles.heading2}>PLANT LOCAL!</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.trees2}>
            {trees.map((tree) => {
              return (
                <div key={tree.name} className={styles.tree}>
                  <img
                    src={tree.image}
                    className={styles.treeImage}
                    alt={tree.name}
                  />
                  <div className={styles.treeDetails}>
                    <span className={styles.treeName}>{tree.name}</span>
                    <p className={styles.treeDescription}>{tree.description}</p>
                  </div>
                  <div className={styles.buttons}>
                    <button
                      onClick={() => handleAddItem(tree)}
                      className={styles.addCartBtn}
                    >
                      Add To Cart{" "}
                      <img
                        src={atc}
                        className={styles.cartIcon}
                        alt="Cart Icon"
                      />
                    </button>
                    <button className={styles.priceBtn}>@Rs{tree.price}</button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => navigate("/cart")}
            className={styles.paymentBtn}
          >
            Proceed To Payment ({cart.length} Items){" "}
          </button>
        </div>
      </div>
      n
      <div className={styles.footer}>
        <p>© 2024 Think Global, Plant Local. All rights reserved.</p>
      </div>
      {/* <button className={styles.imgUser}>
        {" "}
        <img src={user} />{" "}
      </button>
      <button className={styles.imgUser1}>
        {" "}
        <img src={help} />{" "}
      </button>
      <button className={styles.imgUser3}>
        {" "}
        <img src={home} />{" "}
      </button> */}
    </>
  );
}

export default Donate;

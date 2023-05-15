import React from "react";
import styles from "../../styles/components.module.scss";
import { BsCart3 } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className={styles.card_container}>
      <div
        className={styles.box_tech}
        style={{ backgroundImage: `url('/assets/img/product-10.webp')` }}
      >
        {/* <div><Image src='/assets/img/product/product-10.webp' width={300} height={100} alt="/"/></div> */}
        <div className={styles.content}>
          <div className={styles.desc}>
            <div className={styles.hover_btn_container}>
              <BsCart3 className={styles.hover_btn} />
              <p>|</p>
              <AiOutlinePlus className={styles.hover_btn} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heading_container}>
        <h3>Dog Calcium Food</h3>
        <p>22$</p>
      </div>
    </div>
  );
};

export default ProductCard;

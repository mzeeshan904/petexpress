import React from "react";
import styles from "../../styles/components.module.scss";
import Image from "next/image";
import Link from "next/link";

const DealSection = () => {
  return (
    <div className={styles.deal_section_container}>
      <h4>Best Product</h4>
      <h2>Deal Of The Week</h2>
      <div className={styles.deal_container}>
        <Image
          className={styles.deal_image}
          src="/assets/img/banner-4.webp"
          alt=""
          width={500}
          height={400}
          style={{ width: "40%" }}
        />
        <div className={styles.content_container}>
          <h3>Name Your Product</h3>
          <strong>$ 10.00</strong>
          <p>
            Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod
            tempor labore incididunt et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud nisi exercita ullamco laboris ut aliquip ex ea
            commodo ullamco laboris nisi ut aliquip ex ea commodo consequat aute
            irure dolor in reprehendrit.
          </p>

          <div className={styles.time_container}>
            <div className={styles.time_container}>
              <p>0</p>
              <hr />
              <p>Days</p>
            </div>
            <div className={styles.time_container}>
              <p>00</p>
              <hr />
              <p>Hours</p>
            </div>
            <div className={styles.time_container}>
              <p>00</p>
              <hr />
              <p>Min</p>
            </div>
            <div className={styles.time_container}>
              <p>00</p>
              <hr />
              <p>Sec</p>
            </div>
          </div>
          <Link href='product-details.html' className={styles.deal_btn}>SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default DealSection;

import React from "react";
import styles from "../../styles/components.module.scss";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className={styles.feature_section_container}>
      <h3>----- BENEFITS FOR YOU -----</h3>
      <h1>OUR FEATURES</h1>

      {/* card */}
      <div className={styles.cards_main_container}>
        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor<br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>



        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>


        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>

        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>

        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/>  placerat, nec elem entum ipsum convall.
          </p>
        </div>

        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>

        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>
        <div className={styles.card_container}>
          <Image
            className={styles.feature_image}
            src="/assets/img/Capture1.PNG"
            width={100}
            height={85}
            alt="features image"
          />
          <h3>Natural products</h3>
          <p>
            Etiam rhoncus leo a dolor <br/> placerat, nec elem entum ipsum convall.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

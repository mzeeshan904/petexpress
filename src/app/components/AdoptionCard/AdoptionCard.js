import React from "react";
import styles from "../../styles/components.module.scss";
import Image from "next/image";

const AdoptionCard = () => {
  return (
    <div className={styles.adoption_card_container}>
      <div className={styles.card_info_section}>
        {/* <div className={styles.card_image}>image</div> */}
        <Image src='/assets/img/adoption1.jpg' width={185} height={185} alt="Adoption Image"/>
        <div className={styles.card_info}>
          <h3>Magdalene</h3>
          <p>
            <strong>Gender:</strong> Female
          </p>
          <hr/>
          <p>
            <strong>Age:</strong> 2 Years
          </p>
          <hr/>
          <p>
            <strong>Breed:</strong> Poodle Mix
          </p>
          <hr/>
        </div>
      </div>
      <div className={styles.more_info_section}>
        <p>SPECIAL NEEDS | FRIENDLY TO OTHER PETS</p>
        <button>MORE INFO</button>
      </div>
    </div>
  );
};

export default AdoptionCard;

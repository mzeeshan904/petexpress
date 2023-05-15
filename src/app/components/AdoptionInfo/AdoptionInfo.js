import React from "react";
import styles from "../../styles/components.module.scss";

const AdoptionInfo = () => {
  return (
    <div className={styles.Adoption_info_container}>
      {/* <div className={styles.Adoption_headings_container}> */}
      <p style={{ margin: "1rem", fontSize: "1.25rem", fontWeight: 600 }}>
        ----- Find your friend -----
      </p>
      <h2 style={{ margin: "1rem", fontSize: "3rem", fontWeight: 800 }}>
        ADOPTION
      </h2>
      <h3 style={{ margin: "1rem", fontSize: "1.75rem", fontWeight: 600 }}>
        Adopting is an act of <span>love</span>
      </h3>
      <p style={{ margin: "1rem", fontSize: "1.25rem" }}>
        Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.
      </p>
      <p style={{ margin: "1rem", fontSize: "1rem" }}>
        Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
        nibh hendrerit id Maecenas at arcu ro In aliquet magna nec lobortis
        maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum
        convall.
      </p>
    </div>
  );
};

export default AdoptionInfo;

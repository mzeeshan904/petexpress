import React from 'react'
import AdoptionCard from '../AdoptionCard/AdoptionCard'
import styles from "../../styles/components.module.scss";

const AdoptionCardsSection = () => {
  return (
    <div className={styles.adoption_cards_section}>
      <AdoptionCard/>
      <AdoptionCard/>
      <AdoptionCard/>
      <AdoptionCard/>
      <AdoptionCard/>
      <AdoptionCard/>
    </div>
  )
}

export default AdoptionCardsSection

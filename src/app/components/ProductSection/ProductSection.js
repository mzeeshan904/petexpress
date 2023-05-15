import React from 'react'
import styles from "../../styles/components.module.scss";
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = () => {
  return (
    <div className={styles.product_section_container}>
      <div className={styles.product_section_heading_container}>
        <h3>Most Populer</h3>
        <h2>Recent Products</h2>
      </div>
      <div className={styles.product_cards_view_container}>        
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      
    </div>
  )
}

export default ProductSection

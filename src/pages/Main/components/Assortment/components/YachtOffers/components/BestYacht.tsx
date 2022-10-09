import React from "react";

import { YACHTS } from "@config/yachts";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const BestYacht: React.FC = () => {
  const bestYacht = YACHTS.find((yachts) => yachts.best);

  return (
    <>
      {bestYacht && (
        <Link
          to={`/yacht/${bestYacht.id}`}
          key={bestYacht.id}
          className={styles.bestYachtOffer}
        >
          <div className={styles.bestYachtOffer_offer}>
            <img
              src={bestYacht.image}
              className={styles.bestYachtOffer_offer_img}
              alt="yacht"
            />
            <div className={styles.bestYachtOffer_offer_price}>
              {bestYacht.price}
            </div>
            <div className={styles.bestYachtOffer_offer_bestOffer}>
              Лучшее предложение
            </div>
            <div className={styles.bestYachtOffer_offer_model}>
              {bestYacht.model}
            </div>
            <div className={styles.bestYachtOffer_offer_made}>
              <div className={styles.bestYachtOffer_offer_made_year}>
                {bestYacht.year}
              </div>
              <div className={styles.bestYachtOffer_offer_made_place}>
                {bestYacht.place}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BestYacht;
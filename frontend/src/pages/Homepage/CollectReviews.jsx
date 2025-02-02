import React from "react";
import collect_review_img1 from "../../assets/Homepage/collect-review-img1.webp";
import collect_review_img2 from "../../assets/Homepage/collect-review-img2.webp";
import collect_review_img3 from "../../assets/Homepage/collect-review-img3.webp";
import card_review from '../../assets/Homepage/card-review.webp'

export default function CollectReviews() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-5 max-lg:text-center">
          THE EASIEST WAY TO COLLECT REVIEWS FASTER
        </h1>
        <p className="text-md mb-10 max-lg:text-center">THE EASIEST WAY TO COLLECT REVIEWS FASTER</p>
        <div className="flex justify-between items-center w-full gap-10 mb-20 max-lg:flex-col">
        <div className="flex flex-col justify-center items-center text-center">
            <img src={collect_review_img1} alt="" className="w-[20rem]"/>
            <h1 className="text-xl font-semibold">Tap for the Reviews</h1>
            <p>
              Simply tap the card on customer's phone to start. Customer get
              served your Google review link.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img src={collect_review_img2} alt="" className="w-[20rem]"/>
            <h1 className="text-xl font-semibold">Tap for the Reviews</h1>
            <p>
              Simply tap the card on customer's phone to start. Customer get
              served your Google review link.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img src={collect_review_img3} alt="" className="w-[20rem]"/>
            <h1 className="text-xl font-semibold">Tap for the Reviews</h1>
            <p>
              Simply tap the card on customer's phone to start. Customer get
              served your Google review link.
            </p>
          </div>
          
        </div>
        <h1 className="text-3xl mb-10 max-md:text-center">Explore Our Smart Google Review Card</h1>
        <img src={card_review} alt="" />
      </div>
    </section>
  );
}

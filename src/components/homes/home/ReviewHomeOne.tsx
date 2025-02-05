"use client";
import React, { useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewHomeOne() {
  return (
    <>
      <section id="reviews" className="review section-padding">
        <div className="container">
          <div className="row">
            <div className="col-10 wow fadeInUp">
              <div className="section-title">
                <span>Our Students Review</span>
                <h2>What Our Students Are Says</h2>
              </div>
            </div>

            <div className="col-xl-12 wow fadeIn">
              <div className="review-slider owl-carousel owl-loaded owl-drag">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  pagination={{ el: ".owl-dots", clickable: true }}
                  modules={[Autoplay, Navigation, Pagination]}
                  navigation={{ nextEl: ".owl-next", prevEl: ".owl-prev" }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  centeredSlides={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  className="owl-stage-outer"
                >
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/user.png" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Kalindu Aragorn</h4>
                        <p>
                          Vicky is an excellent teacher! I got my G thanks to
                          him, and he was extremely helpful throughout the
                          process. He doesn't just teach you what you need for
                          the exam, he teaches you what you need to learn to
                          drive in Canada! He covered many traffic scenarios
                          that are veryyy useful when actually driving a
                          vehicle. He is very friendly and very easy to work
                          with. I highly recommend him to anyone!!
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/user.png" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Qusai Alsheikh</h4>
                        <p>
                          I took my test for full G today at Port union and
                          passed. I recommend Vignesh for his 1 hr only lesson
                          from which I learnt a lot. The key in this job is
                          giving confidence throughout the true guidance and
                          teaching. This man truly has them and he makes you
                          feel you already passed. And now I passed! Thanks
                          Vignesh!!
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/user.png" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Vuyyuru Sai Sravani</h4>
                        <p>
                          I had a fantastic experience with SVB driving
                          school!From start to finish, the service was
                          top-notch. Vignesh is not only professional but also
                          incredibly patient and encouraging. He made sure I was
                          comfortable with each driving skill and provided
                          clear, constructive feedback. I highly recommend SVB
                          driving school to anyone looking to get their drivers
                          license. The quality of instruction and the supportive
                          atmosphere made all the difference.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/user.png" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Dilbagh Singh</h4>
                        <p>
                          I passed my G2 driving test today and I owe all the
                          credit to Vignesh. He is excellent in his approach,
                          highly informative, empathetic & supportive during
                          sessions. I strongly recommend newcomers/new drivers
                          to reach out to him for learning and their test
                          preparation. Big thanks to him again!
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="owl-item"
                    style={{ width: "408.667px", marginRight: "35px" }}
                  >
                    <div className="review-item">
                      <div className="rimage">
                        <img src="assets/img/review/user.png" alt="review" />
                        <span className="rating-number">5.00</span>
                      </div>

                      <div className="rev-content">
                        <h4>Ares H.</h4>
                        <p>
                          Vignesh is the best driving instructor out there. He
                          instantly made me feel comfortable, safe and prepared.
                          Passed G2 on my first try! I'd give him 100 stars or
                          more if I could! ✨ Thank you for being a great
                          teacher! Gonna miss driving with you.
                        </p>

                        <div className="rev-rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="bx bx-chevrons-left"></i>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="bx bx-chevrons-right"></i>
                  </button>
                </div>

                <div className="owl-dots"></div>
              </div>
            </div>
          </div>
        </div>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
}

"use client"
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function CoursesHomeOne() {
  return (
    <>
      <section  id="courses" className="courses">
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <div className="section-title">
                <span>Our Courses List</span>
                <h2>Most Popular Courses</h2>
              </div>
            </div>

            <div className="col-12 wow fadeIn">

              <div className="courses-slider owl-carousel owl-loaded owl-drag">
                
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={
                      { nextEl: '.owl-next', prevEl: '.owl-prev' }
                    }
                    breakpoints={{
                      0: {
                        slidesPerView: 1
                      },
                      768: {
                        slidesPerView: 2
                      },
                      1200: {
                        slidesPerView: 3
                      }
                    }}
                    className="courses-slider owl-carousel owl-loaded owl-drag">

                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src="assets/img/courses/1.jpg" alt="course image" />
                        
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                          </a>
                        </div>
                        <h4>Package #1</h4>
                        <h1>$563</h1>
                        <p><b>+ HST + Certification Fee</b></p>
                        <ul>
                          <li>20 Hours of Online Theory</li>
                          <li>10 Hours of In-Car Training</li>
                          <li>10 Hours of Homework</li>
                          <li>Free Pick and Drop</li>
                          <li>Free Road Test</li>
                          <li>MTO Certicate Processing</li>
                          <li>Defensive Driving Techniques</li>
                          <li>Advanced Intersection Techniques</li>
                        </ul>
                        
                        <div className="course_btm">
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src="assets/img/courses/2.jpg" alt="course image" />
                        
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                          </a>
                        </div>
                        <h4>Package #2</h4>
                        <h1>$740</h1>
                        <p><b>+ HST + Certification Fee</b></p>
                        <ul>
                          <li>20 Hours of Online Theory</li>
                          <li>10 Hours of In-Car Training</li>
                          <li>10 Hours of Homework</li>
                          <li>Free Pick and Drop</li>
                          <li>Free Road Test</li>
                          <li>MTO Certicate Processing</li>
                          <li>Defensive Driving Techniques</li>
                          <li>Advanced Intersection Techniques</li>
                          <li><b>Test Booking Provided</b></li>
                          <li><b>Use of Instructor's Car for Local Road Test</b></li>
                        </ul>
                        
                        <div className="course_btm">
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-course">
                      <div className="course-img">
                        <img src="assets/img/courses/3.jpg" alt="course image" />
                        
                      </div>

                      <div className="course_content">
                        <div className="crating">
                          <a href="#">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                          </a>
                        </div>
                        <h4>Package #1</h4>
                        <h1>$890</h1>
                        <p><b>+ HST + Certification Fee</b></p>
                        <ul>
                          <li>20 Hours of Online Theory</li>
                          <li><b>14 Hours of Practical in Car</b></li>
                          <li>10 Hours of Homework</li>
                          <li>Free Pick and Drop</li>
                          <li>Free Road Test</li>
                          <li>MTO Certicate Processing</li>
                          <li>Defensive Driving Techniques</li>
                          <li>Advanced Intersection Techniques</li>
                          <li><b>Test Booking Provided</b></li>
                          <li><b>Use of Instructor's Car for Local Road Test</b></li>
                        </ul>
                        
                        <div className="course_btm">
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>

               

                  <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev"><i className="bx bx-chevrons-left"></i></button>
                    <button type="button" role="presentation" className="owl-next"><i className="bx bx-chevrons-right"></i></button>
                  </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    </>
  )
}

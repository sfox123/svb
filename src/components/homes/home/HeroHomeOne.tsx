"use client";
import React, { useEffect } from "react";

export default function HeroHomeOne() {
  // const parallax = (event: MouseEvent) => {
  //   const elements = document.querySelectorAll<HTMLElement>(".eitem");

  //   elements.forEach((shift) => {
  //     const position = Number(shift.getAttribute("value")); // Convert the attribute value to a number
  //     const x = (window.innerWidth - event.pageX * position) / 90;
  //     const y = (window.innerHeight - event.pageY * position) / 90;

  //     shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   });
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", parallax);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     document.removeEventListener("mousemove", parallax);
  //   };
  // }, []);

  const parallax = (event: MouseEvent) => {
    const elements = document.querySelectorAll<HTMLElement>(".eitem");

    elements.forEach((shift) => {
      const position = Number(shift.getAttribute("value")); // Convert the attribute value to a number
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  useEffect(() => {
    // Add the mousemove event listener when the component mounts
    const handleMouseMove = (event: MouseEvent) => parallax(event);

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to ensure it runs once on mount

  return (
    <>
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="banner-content d-flex align-items-center">
                <div className="banner-content-inner">
                  <span className="subtitle">SVB DRIVING SCHOOL INC</span>
                  <h2 className="title">
                    <span>Beginner’s </span>Driving Lesson
                  </h2>
                  <p>
                    Basic Skills a learner driver must learn to attempt the
                    practical Driving.
                  </p>

                  <div className="bbtns">
                    <a href="/contact" className="bg_btn bt">
                      Contact Us
                    </a>
                  </div>

                  <div className="sinfo">
                    <img src="assets/img/rev-img.png" alt="image" />
                    <span>150+ Happy Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_shapes moeffect">
            <div className="bshape1 eitem" defaultValue={1}>
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 151 151"
              >
                <path
                  d="M83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96ZM83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96ZM83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96ZM83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96ZM83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96ZM83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96ZM83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96Z"
                  fill="#fff"
                  opacity=".1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  d="M75.5,1.5C34.63,1.5,1.5,34.63,1.5,75.5s33.13,74,74,74,74-33.13,74-74S116.37,1.5,75.5,1.5ZM75.5,142.69c-37.11,0-67.19-30.08-67.19-67.19,0-14.5,4.59-27.93,12.41-38.91,1.61-2.26,3.36-4.43,5.24-6.48,12.28-13.4,29.93-21.8,49.54-21.8s37.26,8.4,49.54,21.8c1.88,2.05,3.63,4.22,5.24,6.48,7.82,10.98,12.41,24.41,12.41,38.91,0,37.11-30.08,67.19-67.19,67.19Z"
                  fill="#fff"
                  opacity=".1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  d="M142.69,75.5c0,37.11-30.08,67.19-67.19,67.19l43.01-97.74,6.53-14.84c1.88,2.05,3.63,4.22,5.24,6.48,7.82,10.98,12.41,24.41,12.41,38.91Z"
                  fill="none"
                  opacity=".1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  d="M83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11l6.53,14.84,43.01,97.74,43.01-97.74,6.53-14.84-41.92,29.96Z"
                  fill="#fff"
                  opacity=".1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <g opacity=".1">
                  <path
                    d="M75.5,87.84v54.85L32.49,44.95l-6.53-14.84,41.92,29.96,4.78,3.42c-5.45,1.29-9.5,6.18-9.5,12.01,0,6.81,5.53,12.34,12.34,12.34Z"
                    fill="#6fc387"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                  />
                  <path
                    d="M125.04,30.11l-6.53,14.84-43.01,97.74v-54.85c6.81,0,12.34-5.53,12.34-12.34,0-5.83-4.05-10.72-9.5-12.01l4.78-3.42,41.92-29.96Z"
                    fill="#6fc387"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                  />
                </g>
                <path
                  d="M83.12,60.07l-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01,0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42c-5.68,2.81-9.58,8.67-9.58,15.43,0,9.5,7.7,17.2,17.2,17.2s17.2-7.7,17.2-17.2c0-6.76-3.9-12.62-9.58-15.43Z"
                  fill="#fff"
                  opacity=".1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  d="M87.84,75.5c0,6.81-5.53,12.34-12.34,12.34s-12.34-5.53-12.34-12.34c0-5.83,4.05-10.72,9.5-12.01l-4.78-3.42L25.96,30.11c12.28-13.4,29.93-21.8,49.54-21.8s37.26,8.4,49.54,21.8l-41.92,29.96-4.78,3.42c5.45,1.29,9.5,6.18,9.5,12.01Z"
                  fill="#6fc387"
                  opacity=".1"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <div className="bshape2 eitem" defaultValue={2.5}></div>

            <div className="bshape3 eitem" defaultValue={1.5}></div>

            <div className="bshape1 eitem" defaultValue={5}></div>
          </div>

          <div className="tpshape">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 204 204"
            >
              <g opacity=".35">
                <polyline
                  points="202 196 202 202 196 202"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <line
                  x1="183.47"
                  y1="202"
                  x2="14.27"
                  y2="202"
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="12.53 12.53"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <polyline
                  points="8 202 2 202 2 196"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <line
                  x1="2"
                  y1="183.47"
                  x2="2"
                  y2="14.27"
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="12.53 12.53"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <polyline
                  points="2 8 2 2 8 2"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <line
                  x1="20.53"
                  y1="2"
                  x2="189.73"
                  y2="2"
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="12.53 12.53"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <polyline
                  points="196 2 202 2 202 8"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
                <line
                  x1="202"
                  y1="20.53"
                  x2="202"
                  y2="189.73"
                  fill="none"
                  stroke="#fff"
                  strokeDasharray="12.53 12.53"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </g>
              <text
                transform="translate(59.54 147.98)"
                fill="#fff"
                fontFamily="BalboaPlus-Primary, BalboaPlus"
                fontSize="156.12"
                opacity=".5"
              >
                <tspan x="0" y="0">
                  L
                </tspan>
              </text>
            </svg>
          </div>

          <div className="btmshape">
            <svg fill="none" viewBox="0 0 236 409">
              <path
                fillRule="evenodd"
                stroke="#fff"
                strokeOpacity=".11"
                strokeWidth="2"
                d="M-89.755 52.094c37.15-14.894 77.387 2.568 112.843 19.565 34.705 16.637 69.624 37.842 81.693 73.691 11.968 35.549-6.127 72.04-20.797 107.193-16.373 39.233-26.341 88.982-67.167 103.584-40.895 14.626-80.23-17.547-117.945-37.376-34.682-18.235-76.17-33.695-87.396-70.589-11.017-36.203 16.557-70.85 33.888-105.254 17.307-34.357 28.555-76.251 64.881-90.814z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                stroke="#fff"
                strokeOpacity=".11"
                strokeWidth="2"
                d="M-55.387 52.63C-19.19 39.093 19.54 57.897 53.646 76.07c33.383 17.787 66.909 40.134 78.094 76.268 11.091 35.832-6.952 71.55-21.66 106.056-16.414 38.509-26.772 87.72-66.526 100.837-39.82 13.14-77.47-20.287-113.723-41.36-33.338-19.38-73.309-36.232-83.663-73.378-10.16-36.45 17.039-70 34.313-103.666 17.251-33.62 28.738-74.961 64.132-88.197z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                stroke="#fff"
                strokeOpacity=".11"
                strokeWidth="2"
                d="M-21.667 51.68c36.473-12.776 74.8 6.834 108.518 25.718 33.003 18.482 66.054 41.526 76.48 77.886 10.338 36.057-8.449 71.39-23.876 105.58-17.217 38.157-28.604 87.139-68.623 99.421C30.745 372.588-6.196 338.381-42 316.553c-32.925-20.073-72.534-37.759-82.108-75.114-9.395-36.654 18.501-69.627 36.477-102.925 17.95-33.251 30.3-74.342 65.964-86.834z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                stroke="#fff"
                strokeOpacity=".11"
                strokeWidth="2"
                d="M-4.929 45.706C31.293 32.23 70.173 51.77 104.418 70.625c33.518 18.454 67.198 41.561 78.54 78.527 11.247 36.657-6.7 72.929-21.309 107.995-16.305 39.134-26.502 89.242-66.289 102.256-39.855 13.038-77.706-21.411-114.113-43.244-33.48-20.078-73.596-37.639-84.11-75.63-10.317-37.278 16.813-71.254 33.998-105.44C-51.704 100.95-40.347 58.882-4.93 45.706z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

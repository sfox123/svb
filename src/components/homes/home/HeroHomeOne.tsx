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

          <div className="banner_img">
            <div className="banner_img_inner moeffect">
              <img src="assets/img/banner.png" alt="Banner Image" />
              <div className="total_students_badge eitem" defaultValue="1">
                <div className="icon">
                  <svg fill="none" viewBox="0 0 31 35">
                    <path
                      fill="#fff"
                      d="M7.684 4.17C3.583 6.46.18 8.4.117 8.483c-.157.192-.157.417.007.616.068.088.889.512 1.893.984l1.771.827.02.834.021.834h-.383c-.314 0-.41.027-.547.171l-.17.164v5.346l.17.164c.164.17.178.17 1.47.17s1.306 0 1.47-.17l.17-.164v-5.346l-.17-.164c-.137-.144-.233-.17-.547-.17h-.376v-.548c0-.3.02-.547.048-.547.034 0 .95.417 2.05.937 1.97.916 1.997.93 2.12 1.21.068.15.225.41.348.567.26.349.28.5.062.5-.089 0-.315.081-.513.177-.93.465-1.367 1.64-1.012 2.693.247.718 1.101 1.367 1.791 1.367.205 0 .233.035.431.452.3.642.738 1.23 1.306 1.75l.478.45V22.703l-.178-.137c-.369-.294-.519-.218-1.455.704-.862.841-.862.841-1.245.89-1.018.109-2.645.785-3.575 1.49a8.61 8.61 0 00-3.083 4.593c-.24.896-.307 1.607-.307 3.104 0 1.312 0 1.319.17 1.483l.164.171h25.58l.178-.178.171-.17-.034-1.69c-.027-1.49-.055-1.777-.205-2.412-.403-1.689-1.169-3.035-2.42-4.239a7.671 7.671 0 00-2.16-1.497c-.65-.307-1.607-.594-2.16-.656-.383-.048-.383-.048-1.244-.889-.937-.922-1.087-.997-1.457-.704l-.177.137v-1.114l.478-.451a5.583 5.583 0 001.306-1.75c.198-.417.226-.451.43-.451.691 0 1.546-.65 1.792-1.368.355-1.052-.082-2.228-1.012-2.693-.198-.096-.424-.178-.513-.178-.218 0-.198-.164.041-.471.11-.137.267-.39.349-.568l.157-.314 2.058-.957c1.134-.527 3.09-1.443 4.347-2.03 1.388-.643 2.352-1.135 2.448-1.238.294-.335.164-.65-.417-.97-.192-.11-2.721-1.525-5.62-3.138-2.891-1.62-6.097-3.405-7.122-3.972C16.29.465 15.381 0 15.293 0c-.082.007-3.507 1.88-7.609 4.17zm14.41.786c3.706 2.065 6.72 3.78 6.693 3.808-.102.095-6.802 3.199-6.836 3.165-.027-.02-.061-1.019-.082-2.215l-.034-2.174-.185-.232c-.355-.479-1.285-.841-2.727-1.08-3.958-.657-9.058-.11-9.953 1.066l-.192.246-.034 2.174c-.02 1.196-.055 2.194-.075 2.215-.02.02-.875-.356-1.9-.834l-1.853-.862.014-1.64.02-1.64 5.161-2.886c2.837-1.592 5.182-2.884 5.202-2.878.02 0 3.077 1.696 6.782 3.767zM17.87 7.171c1.142.137 2.536.485 2.823.71.055.049.082.343.082 1.04v.977l-.526-.17c-1.71-.54-5.428-.732-7.916-.397-.848.11-2.133.39-2.365.513-.123.068-.13.04-.13-.91 0-.71.027-1.004.089-1.052.314-.253 1.688-.588 2.884-.704.417-.034.875-.082 1.026-.096.485-.048 3.397.02 4.033.089zM3.808 9.153l-.02.54-.957-.437c-.526-.246-.978-.465-1.005-.492-.027-.028.403-.301.957-.609l1.005-.553.02.499c.014.28.014.752 0 1.052zm14.377 1.265c1.538.212 2.474.52 2.597.84.178.459-.082 1.628-.499 2.25l-.157.24-1.812-.021-1.811-.02-.465-.22c-.766-.362-1.374-1.12-1.518-1.886-.075-.383-.273-.595-.553-.595-.342 0-.575.253-.575.608 0 .445-.26 1.026-.628 1.415-.458.486-.875.656-1.662.698l-.615.027-.157-.246a2.956 2.956 0 01-.52-1.695c-.006-.459.02-.623.103-.705.267-.273 1.846-.635 3.343-.786.93-.089 4.06-.027 4.928.096zm-2.878 3.938c.806.41.936.43 2.795.464l1.73.028-.034 1.476c-.034 1.593-.082 1.86-.445 2.632-.567 1.203-1.709 2.126-3.021 2.447-.485.117-1.566.117-2.05 0a4.587 4.587 0 01-2.981-2.365c-.404-.813-.451-1.08-.486-2.72l-.034-1.484h.349c1.06 0 2.249-.608 2.741-1.408l.13-.205.506.492c.273.267.636.56.8.643zm-10.391 1.23V17.5H3.822v-3.828h1.094v1.914zm4.799 1.21c.013.56.02 1.025.013 1.039-.04.048-.478-.267-.567-.417a1.231 1.231 0 01-.137-.902c.069-.26.451-.725.595-.725.041 0 .082.41.096 1.005zm11.573-.78c.376.377.444.95.164 1.402-.089.15-.526.465-.567.417-.055-.075.054-2.044.109-2.044.041 0 .17.103.294.226zm-6.61 6.55a5.644 5.644 0 002.283-.212c.24-.076.451-.137.485-.137.027 0 .048.362.048.806v.8L16.4 24.917l-1.093 1.094-1.094-1.094-1.094-1.094V22.176l.465.15c.253.089.745.192 1.094.24zm-1.662 2.727l1.504 1.504-.43.424-.424.43-1.518-1.517-1.524-1.525.41-.41c.226-.225.424-.41.444-.41.02 0 .711.677 1.539 1.504zm6.563-1.094l.41.41-1.524 1.525-1.518 1.517-.424-.43-.43-.424 1.504-1.504c.827-.827 1.517-1.504 1.538-1.504.02 0 .218.185.444.41zm-8.032 2.905c1.716 1.716 1.907 1.88 2.112 1.88.198 0 .328-.095.937-.697l.71-.697.711.697c.609.602.739.697.937.697.205 0 .396-.17 2.12-1.886l1.893-1.894.383.048c1.312.15 3.055 1.087 4.012 2.146 1.367 1.518 1.976 3.227 1.976 5.53v.978H23.51v-.923c0-.895-.007-.936-.171-1.093a.503.503 0 00-.752 0c-.164.157-.171.198-.171 1.093v.923H8.197v-.923c0-.895-.007-.936-.17-1.093a.502.502 0 00-.753 0c-.164.157-.17.198-.17 1.093v.923H3.254l.04-1.285c.028-1.073.062-1.38.206-1.948.724-2.755 2.741-4.758 5.414-5.373.71-.164.56-.267 2.632 1.805z"
                    />
                  </svg>
                </div>
                <h4>150+</h4>
                <span>Total Students</span>
              </div>

              <div
                className="total_course_badge align-self-center eitem"
                defaultValue="1.5"
              >
                <div className="icon">
                  <svg fill="none" viewBox="0 0 37 32">
                    <path
                      fill="#fff"
                      d="M2.389.481c-.748.24-1.51.932-1.8 1.652l-.162.402-.021 13.19C.392 30.115.37 29.353.78 30.06c.254.424.811.932 1.291 1.15l.403.191h25.548l.388-.183a2.972 2.972 0 001.623-2.104c.035-.204.07-.755.07-1.213v-.84h2.28c2.505 0 2.738-.028 3.268-.417.155-.12.374-.38.494-.585l.204-.375V24.06c0-1.828-.02-1.912-.578-2.449-.523-.508-.55-.508-3.247-.536l-2.42-.021v-1.765c0-2.117-.036-2.25-.629-2.25a.53.53 0 00-.345.161c-.149.163-.156.212-.156 2.012v1.849H23.54c-4.474 0-5.484.014-5.674.099-.127.049-1.045.607-2.04 1.235-1.708 1.072-1.828 1.136-2.16 1.136-.296 0-.373.028-.493.183-.19.248-.19.466.014.7.12.147.247.197.579.24.388.049.578.154 2.286 1.227l1.863 1.179h11.073l-.028 1.002c-.021.811-.05 1.066-.155 1.277-.177.36-.501.678-.854.833-.268.127-.826.134-12.703.134H2.826l-.36-.17a1.657 1.657 0 01-.846-.938c-.078-.219-.092-2.124-.1-10.417V8.64h27.454v1.842c0 1.037.029 1.891.07 1.962.036.07.163.17.276.218.261.106.558-.014.692-.282.113-.226.134-9.083.02-9.669A2.89 2.89 0 0028.488.644l-.465-.226L15.353.404C5.014.397 2.63.41 2.39.48zM27.95 1.646c.353.155.677.473.854.833.12.247.134.48.155 2.646l.021 2.386H1.521V5.18c0-2.526.007-2.575.402-3.09.099-.135.346-.318.543-.41l.36-.17h12.422c11.877 0 12.435.008 12.703.135zm3.352 22.414v1.87H18.6v-1.82c0-1.002.021-1.85.05-1.87.02-.029 2.879-.05 6.351-.05h6.302v1.87zm3.494-1.771c.423.183.473.367.444 1.877l-.02 1.341-.198.19-.191.198-1.2.021-1.2.021V22.19h1.06c.761 0 1.128.028 1.305.099zm-17.34 2.435l-.022.698-1.08-.67-1.08-.678.516-.324c.282-.184.77-.487 1.08-.685l.564-.353.021.65c.008.36.008.974 0 1.362z"
                    />
                    <path
                      fill="#fff"
                      d="M4.568 3.022c-.685.226-1.073.755-1.073 1.482 0 .868.65 1.524 1.525 1.524.973 0 1.672-.854 1.496-1.835-.163-.875-1.101-1.44-1.948-1.171zm.734 1.207c.176.183.183.367.014.578-.099.127-.515.113-.621-.014-.141-.17-.106-.473.07-.614.212-.17.325-.162.537.05zM8.754 2.986c-1.22.31-1.644 1.715-.769 2.59.353.36.692.48 1.235.438.558-.042.946-.304 1.214-.826.29-.586.233-1.164-.176-1.665-.353-.424-1.01-.657-1.504-.537zm.657 1.257c.303.402-.261.875-.635.536-.29-.261-.022-.783.352-.692a.548.548 0 01.283.156zM12.757 2.987c-.797.204-1.34 1.086-1.143 1.856.19.72.783 1.185 1.51 1.185.614 0 1.108-.31 1.398-.875.219-.43.162-1.136-.134-1.538-.353-.494-1.066-.77-1.63-.628zm.607 1.178c.177.12.219.501.07.65-.147.148-.528.105-.648-.071-.156-.219-.142-.318.063-.515.198-.205.296-.22.515-.064zM6.617 11.625c-.303.325-.14.826.304.939.099.021.388.028.649.014.381-.021.487-.056.593-.19.183-.226.17-.58-.028-.77-.142-.134-.247-.155-.763-.155-.536 0-.62.014-.755.162zM11.804 11.547c-.19.156-.275.466-.177.678.184.374.015.367 6.218.367h5.78l.205-.205c.254-.254.261-.515.028-.748l-.17-.176h-5.885c-4.595 0-5.907.02-6 .084zM29.277 14.215c-.212.085-.304.29-.304.691 0 .417.198.65.55.65.565 0 .791-.897.318-1.27-.197-.156-.317-.17-.564-.071zM6.617 15.365c-.261.276-.198.692.134.861.296.156 11.546.156 11.842 0a.53.53 0 00.128-.868l-.163-.155H6.765l-.148.162zM22.404 15.274c-.204.12-.303.459-.19.677.141.304.374.389.967.367.466-.02.536-.042.684-.218.22-.255.212-.502-.007-.72-.155-.163-.226-.177-.755-.177-.325 0-.635.036-.699.07zM6.615 19.106a.622.622 0 00-.085.684c.141.269.395.283 4.355.283 4.05 0 4.164-.007 4.283-.318.092-.24.043-.508-.12-.656l-.162-.155H6.763l-.148.162z"
                    />
                  </svg>
                </div>
                <div className="tcourse_content">
                  <h4>10+</h4>
                  <span>Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="book_icon">
            <i className="bx bx-book-open"></i>
          </div>

          <div className="bg_shapes moeffect">
            <div className="bshape1 eitem" defaultValue={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 32 32"
                viewBox="0 0 32 32"
                id="driving-course"
              >
                <path d="M29.901062 20.5803833c-.0040283-.008667-.0022583-.019104-.0065308-.0276489C28.4902344 17.7441406 25.6674805 16 22.527832 16h-2.8710938c-3.8022461 0-7.3833008 1.4375-10.1220703 4.0566406L6.8676758 20.4375C4.0927734 20.8339844 2 23.2460938 2 26.0488281V27c0 .5527344.4477539 1 1 1h2.1843262C5.5984497 29.161499 6.6980591 30 8 30s2.4016113-.838501 2.8157349-2h10.3685913C21.5984497 29.161499 22.6980591 30 24 30c1.3914185 0 2.553772-.956604 2.8914795-2.2434692l2.4249268-.8082886C29.7246094 26.8125 30 26.4306641 30 26v-5C30 20.8486938 29.9611206 20.7088623 29.901062 20.5803833zM27.0986938 20h-5.8179321l.5-2h.7470703C24.3029175 18 25.9385376 18.7419434 27.0986938 20zM19.7192383 18l-.5 2h-6.3822632c2.0179443-1.296936 4.3630371-2 6.8197632-2H19.7192383zM8 28c-.5512695 0-1-.4482422-1-1s.4487305-1 1-1 1 .4482422 1 1S8.5512695 28 8 28zM24 28c-.5512695 0-1-.4482422-1-1s.4487305-1 1-1 1 .4482422 1 1S24.5512695 28 24 28zM26.6986694 25.7132568C26.2151489 24.7038574 25.1920166 24 24 24c-1.3019409 0-2.4016113.838501-2.8157349 2H10.8157349C10.4016113 24.838501 9.3019409 24 8 24s-2.4016113.838501-2.8157349 2H4.0004883c.0239258-1.7929688 1.3696289-3.328125 3.1499023-3.5820313L10.0733032 22H28v3.2792969L26.6986694 25.7132568zM2.59375 7.9140625L6 9.4279785V13c0 .4091797.2490234.7763672.628418.9287109l5 2C11.7480469 15.9765625 11.8740234 16 12 16s.2519531-.0234375.371582-.0712891l5-2C17.7509766 13.7763672 18 13.4091797 18 13V9.4279785l2-.888916V14c0 .5527344.4477539 1 1 1s1-.4472656 1-1V7c0-.3955078-.2329102-.7529297-.59375-.9140625l-9-4c-.2587891-.1152344-.5537109-.1152344-.8125 0l-9 4C2.2329102 6.2470703 2 6.6044922 2 7S2.2329102 7.7529297 2.59375 7.9140625zM16 12.3232422l-4 1.5996094-4-1.5996094v-2.0064087l3.59375 1.597229C11.7231445 11.9716797 11.8618164 12 12 12s.2768555-.0283203.40625-.0859375L16 10.3168335V12.3232422zM12 4.0947266L18.5375977 7 12 9.9052734 5.4624023 7 12 4.0947266z"></path>
              </svg>
            </div>

            <div className="bshape2 eitem" defaultValue={2.5}>
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlLang="http://svgjs.com/svgjs" id="SvgjsSvg1001" width="288" height="288" version="1.1"><defs id="SvgjsDefs1002"/><g id="SvgjsG1008"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48" viewBox="0 0 48 48" width="288" height="288"><path fill="#ffffff" d="M37 6h-5c-.55 0-1 .45-1 1v8c-.03.97 1.35 1.38 1.85.53 0 0 5-8 5-8C38.27 6.9 37.76 5.98 37 6zM37 19h-5c-.55 0-1 .45-1 1v8c-.03.97 1.35 1.38 1.85.53 0 0 5-8 5-8C38.27 19.9 37.76 18.98 37 19zM37 31h-5c-.55 0-1 .45-1 1v8c-.03.97 1.35 1.38 1.85.53 0 0 5-8 5-8C38.27 31.9 37.76 30.98 37 31zM15.15 15.53c.49.85 1.88.45 1.85-.53 0 0 0-8 0-8 0-.55-.45-1-1-1h-5c-.36 0-.7.2-.87.52s-.17.71.03 1.01L15.15 15.53zM10.15 20.53l5 8c.49.85 1.88.45 1.85-.53 0 0 0-8 0-8 0-.55-.45-1-1-1h-5C10.24 18.98 9.73 19.9 10.15 20.53zM10.15 32.53l5 8c.49.85 1.88.45 1.85-.53 0 0 0-8 0-8 0-.55-.45-1-1-1h-5C10.24 30.98 9.73 31.9 10.15 32.53z" className="color414f66 svgShape"/><path fill="#ffffff" d="M30,4H18c-1.65,0-3,1.35-3,3v36c0,1.65,1.35,3,3,3h12c1.65,0,3-1.35,3-3V7C33,5.35,31.65,4,30,4z" className="color434343 svgShape"/><circle cx="24" cy="13" r="5" fill="#4be45a" className="colorc65d7f svgShape"/><circle cx="24" cy="25" r="5" fill="#da9c11" className="colore5c06e svgShape"/><circle cx="24" cy="37" r="5" fill="#ff4e4e" className="color536b40 svgShape"/><path d="M24 18c6.61-.21 6.61-9.79 0-10C17.39 8.21 17.39 17.79 24 18zM24 10c3.96.1 3.96 5.9 0 6C20.04 15.9 20.04 10.1 24 10zM24 30c6.61-.21 6.61-9.79 0-10C17.39 20.21 17.39 29.79 24 30zM24 22c3.96.1 3.96 5.9 0 6C20.04 27.9 20.04 22.1 24 22zM24 42c6.61-.21 6.61-9.79 0-10C17.39 32.21 17.39 41.79 24 42zM24 34c3.96.1 3.96 5.9 0 6C20.04 39.9 20.04 34.1 24 34z"/><path d="M11,31c-0.76-0.03-1.27,0.9-0.85,1.53c0,0,4.85,7.76,4.85,7.76V43c0,1.65,1.35,3,3,3h12c1.65,0,3-1.35,3-3v-2.71l4.85-7.76   c0.42-0.63-0.09-1.55-0.85-1.53c0,0-4,0-4,0v-2.71l4.85-7.76C38.27,19.9,37.76,18.98,37,19c0,0-4,0-4,0v-3.71l4.85-7.76   C38.27,6.9,37.76,5.97,37,6c0,0-4.18,0-4.18,0C32.4,4.84,31.3,4,30,4h-5V3c-0.02-1.3-1.98-1.32-2,0c0,0,0,1,0,1h-5   c-1.3,0-2.4,0.84-2.82,2H11c-0.76-0.02-1.27,0.9-0.85,1.53c0,0,4.85,7.76,4.85,7.76V19h-4c-0.76-0.02-1.27,0.9-0.85,1.53   c0,0,4.85,7.76,4.85,7.76V31H11z M12.8,33H15v3.51L12.8,33z M35.2,33L33,36.51V33H35.2z M35.2,21L33,24.51V21H35.2z M33,11.51V8   h2.2L33,11.51z M18,6h12c0.55,0,1,0.45,1,1v36c0,0.55-0.45,1-1,1H18c-0.55,0-1-0.45-1-1V7C17,6.45,17.45,6,18,6z M12.8,8H15v3.51   L12.8,8z M12.8,21H15v3.51L12.8,21z"/></svg></g></svg>
            </div>

            <div className="bshape3 eitem" defaultValue={1.5}>
              <svg fill="none" viewBox="0 0 57 57">
                <path
                  fill="#fff"
                  fillOpacity=".2"
                  d="M46.865.174c-.345.122-.846.367-1.113.557-.268.19-9.479 9.334-20.46 20.316l-19.96 19.97-2.629 6.393C1.255 50.92.041 53.993.02 54.227-.171 55.597 1.089 57 2.514 57c.479 0 .902-.167 7.496-2.885l5.947-2.45 20.038-20.026c11.015-11.016 20.17-20.25 20.349-20.527.768-1.215.869-2.785.234-4.055-.279-.557-.836-1.18-3.208-3.542C50.964 1.121 50.396.608 49.85.363c-.868-.4-2.105-.479-2.985-.19zm-1.693 11.628c2.228 2.228 4.044 4.088 4.044 4.155 0 .144-2.139 2.283-2.284 2.283-.056 0-1.949-1.838-4.199-4.088l-4.099-4.099 1.136-1.136c.635-.635 1.192-1.147 1.26-1.147.055 0 1.926 1.816 4.142 4.032zm-5.87 1.259l1.727 1.726-7.106 7.106c-7.685 7.696-7.429 7.384-6.816 7.986.601.613.29.869 7.986-6.817l7.106-7.106 1.726 1.727c.947.947 1.726 1.77 1.726 1.838 0 .055-6.783 6.894-15.07 15.18l-15.058 15.06-1.782-1.783-1.782-1.782 7.106-7.106c7.685-7.696 7.429-7.384 6.816-7.986-.601-.612-.29-.869-7.986 6.817l-7.106 7.106-1.782-1.782-1.782-1.782 15.059-15.06c8.287-8.286 15.125-15.069 15.18-15.069.068 0 .892.78 1.839 1.727zM10.178 46.864c2.072 2.072 3.753 3.799 3.731 3.82-.09.068-6.16 2.551-6.382 2.618-.156.045-.68-.412-2.038-1.77-1.003-1.003-1.827-1.872-1.827-1.939 0-.156 2.606-6.516 2.673-6.516.034 0 1.76 1.705 3.843 3.787z"
                />
              </svg>
            </div>

            <div className="bshape4 eitem" defaultValue={2}>
              <svg fill="none" viewBox="0 0 146 91">
                <path
                  stroke="#fff"
                  strokeOpacity=".25"
                  strokeWidth="3"
                  d="M1 88.974c57.757 1.132 10.964-35.222 26.06-46.86 15.097-11.638 32.815 14.148 53.859 8.381 21.044-5.766-12.378-39.299 12.998-47.543C119.292-5.29 116.734 43.06 145 29.644"
                />
              </svg>
            </div>
          </div>

          <div className="tpshape">
            <svg fill="none" viewBox="0 0 147 297">
              <path
                fillRule="evenodd"
                stroke="#fff"
                strokeOpacity=".05"
                strokeWidth="7"
                d="M83.755-55.798c33.904 36.979 10.442 93.21 19.058 142.218 9.073 51.606 59.065 103.667 31.95 147.908-27.292 44.529-94.427 31.803-146.613 39.177-53.094 7.503-112.908 37.432-155.043 3.451-41.916-33.803-18.758-98.921-28.438-151.421-10.342-56.091-57.129-112.778-29.34-161.951 28.69-50.767 97.899-59.728 156.706-63.423 54.33-3.414 114.657 3.619 151.72 44.041z"
                clipRule="evenodd"
              />
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

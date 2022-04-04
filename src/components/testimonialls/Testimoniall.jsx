import styles from './testimonialls.module.css'
import Avtr1 from '../../assets/client1.jpg';
import Avtr2 from '../../assets/client2.jpg';
import Avtr3 from '../../assets/client3.jpg';
import Avtr4 from '../../assets/client4.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const pa = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt ut hic cupiditate. Odit maiores esse tenetur possimus fugiat deleniti,tempore explicabo soluta doloribus sed quod quo. Laborum maxime in fuga!";
const data = [
  {
    avatar: Avtr1,
    name: 'Jhon Smith',
    review: pa
  }, {
    avatar: Avtr2,
    name: 'Sara Smith',
    review: pa
  }, {
    avatar: Avtr3,
    name: 'Carlos Smith',
    review: pa
  }, {
    avatar: Avtr4,
    name: 'Lucia Smith',
    review: pa
  }]

const Testimoniall = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className={`${styles.testimonial__container} ${styles.container}`}
      // Install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className={styles.testimonial}>
                <div className={styles.client__avatar}>
                  <img src={avatar} alt="Client" />
                </div>
                <h5 className={styles.client__name}>{name}</h5>
                <small className={styles.client__review}>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default Testimoniall
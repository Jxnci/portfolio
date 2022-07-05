import React from 'react';

import styles from './testimonialls.module.css'
import Avtr1 from '../../assets/client1.jpg';
import Avtr2 from '../../assets/client2.jpg';
import Avtr3 from '../../assets/client3.jpg';
import Avtr4 from '../../assets/client4.jpg';


import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const pa = "¡Mi sitio se ve maravilloso! Un gran paso adelante del Marco de publicidad y trabajo.";
const data = [
  {
    avatar: Avtr1,
    name: 'Jimmy Shuan',
    review: pa
  }, {
    avatar: Avtr2,
    name: 'Sara Palacios',
    review: pa
  }, {
    avatar: Avtr3,
    name: 'Carlos Montes',
    review: pa
  }, {
    avatar: Avtr4,
    name: 'Lucia Vera',
    review: pa
  }]

const Testimoniall = () => {
  return (
    <section id='Testimoniall'>
      <h5>Revisión de los clientes</h5>
      <h2>Comentarios</h2>
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
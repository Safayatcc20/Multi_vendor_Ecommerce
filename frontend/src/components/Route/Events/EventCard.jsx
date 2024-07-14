import React from 'react'
import styles from '../../../styles/styles'

const EventCard = () => {
  return (
    <div className='w-full  block  bg-white rounded-lg lg:flex p -2 '>
        <div className=' w-full lg:-w[50%] m-auto'>
            <img src="https://m.media-amazon.com/imagesk/I/31Vle5tVdal.jpg" alt="" />
        </div>
        <div className="w-full lg:[w-50%]  flex  flex-col  justify-center">
            <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor quis ullam quam repellendus laudantium, exercitationem nulla nostrum esse, quisquam id tempore eius culpa nisi molestias dolores rerum quae deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam expedita, fugit repudiandae dignissimos cum blanditiis ut consequuntur temporibus in laudantium earum! Assumenda deleniti reiciendis deserunt placeat ad molestias rerum?
                
            </p>
        </div>
      
    </div>
  )
}

export default EventCard

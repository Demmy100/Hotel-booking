import React from 'react'
import './gallery.css'
import gallery1 from '../../images/gallery_img1.jpg'
import gallery2 from '../../images/gallery_img2.jpg'
import gallery3 from '../../images/gallery_img3.jpg'
import gallery4 from '../../images/gallery_img4.jpg'
const images = [
    {
        id: 1,
        image: gallery1,
    },
    {
        id: 2,
        image: gallery2,
    },
    {
        id: 3,
        image: gallery3,
    },
    {
        id: 4,
        image: gallery4,
    },
];
const Gallery = () => {
  return (
    <div className='gallery'>
      <h1><span>OUR</span> GALLERY</h1>
      <div className="galleryLine">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <div className="galleryWrapper">
        {images.map((item) => (
            <div className="galleryImgContainer" key={item.id}>
                <img src={item.image} alt="" className="galleryImg" />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

import React, { useState } from 'react';
import Navbar from './Navbar';
import "./Products.css";
import img from "../assets/xiomi11pro.jpg";
import img1 from "../assets/cpp.jpg";
import img2 from "../assets/python.jpg";
import img3 from "../assets/powerbank1.jpg";
import img4 from "../assets/powerbank2.jpg";
import img5 from "../assets/powerbank3.jpg";

const Products = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const products = [
    {
      name: "C Programming Basics",
      
      img: img,
      link: "https://www.youtube.com/embed/KJgsSFOSQv0"
    },
    {
      name: "C++ Programming Basics",
     
      img: img1,
      link: "https://www.youtube.com/embed/8jLOx1hD3_o"
    },
    {
      name: "Python Programming",
      
      img: img2,
      link: "https://www.youtube.com/embed/rfscVS0vtbw"
    },
    {
      name: "Javascript",
      
      img: img3,
      link: "https://www.youtube.com/embed/jS4aFq5-91M"
    },
    {
      name: "HTML",
      
      img: img4,
      link: "https://www.youtube.com/embed/kUMe1FH4CHE"
    },
    {
      name: "CSS",
     
      img: img5,
      link: "https://www.youtube.com/embed/OXGznpKZ_sA"
    }
  ];

  const handleLearnMoreClick = (link) => {
    setSelectedVideo(link);
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsVideoPlaying(false);
  };

  return (
    <>
      <Navbar />
      <div className={`products ${isVideoPlaying ? 'blur-background' : ''}`}>
        {products.map((product, index) => (
          <div key={index} className='products-card'>
            <img src={product.img} alt="product" height={250} width={280} />
            <h1>Course Name: {product.name}</h1>
           
            {product.link && (
              <button onClick={() => handleLearnMoreClick(product.link)}>Click to Learn</button>
            )}
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div>
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
            <iframe
              src={selectedVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
              width="560"
              height="315"
              onLoad={() => setIsVideoPlaying(true)}
            />
            <button className="close" onClick={handleCloseVideo}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;

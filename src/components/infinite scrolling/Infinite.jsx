import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import '../infinite scrolling/infinite.css'

const Infinite = () => {

  const [imageData, setimageData] = useState([]);

  const [page, setpage] = useState(1)

  const loadingRef = useRef(false);

  

  async function callapi() {
     loadingRef.current = true;
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );

    const data = responce.data;

    setimageData(prev => [...prev, ...data]);
     loadingRef.current = false;
  }

  function scroling() {
    let total = window.scrollY + window.innerHeight;
    let device = document.body.offsetHeight;
    let reminder = device - total;
    console.log(reminder);
    if (reminder <= 200 && !loadingRef.current) {
      console.log("near the end");
      setpage(p => p+1);
      console.log(page+" page answer");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scroling);
    return ()=>{
      window.removeEventListener("scroll", scroling);
    }
  }, []);

  useEffect(()=>{
    callapi();
  },[page])

  return (
    <div className="try-container">
      {imageData.length < 1 && <h1 className="try-loading">Loading...</h1>}

      <div className="try-image-container">
        {imageData.map((e) => (
          <a href={e.url} key={e.id} className="try-image-link">
            <div className="try-image-card">
              <img
                src={e.download_url}
                width={e.width / 10}
                height={e.height / 10}
                alt={e.author}
              />

              <h3>
                {Number(e.id) + 1}. {e.author}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Infinite
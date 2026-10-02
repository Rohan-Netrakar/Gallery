import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import '../pagination/pagination.css'

const Pagination = () => {
  const [photoData, setphotoData] = useState([]);

  const [no, setno] = useState(1);

  const totalPages = 100;

  async function apicall() {
    let apipage= no+2;
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${apipage}&limit=10`,
    );
    const data = response.data;
    setphotoData(data);
  }


  useEffect(() => {
    apicall();
  }, [no]);

  return (
    <div className="container">

      {/* image rending */}

    {photoData.length < 1 && <h1>Loading...</h1>}
      <div className="image-container">

        {photoData.map((e) => (

          <a href={e.url} key={e.id}>

            <div className="imagediv">
              <img
                src={e.download_url}
                width={e.width / 10}
                height={e.height / 10}
                alt="images"
              />
              <h3>
                {Number(e.id) -19}. {e.author}
              </h3>
            </div>

          </a>

        ))}
      </div>

      <ResponsivePagination
        current={no}
        total={totalPages}
        onPageChange={setno}
        previousLabel="‹ Prev"
        nextLabel="Next ›"
        renderNav="button"
        containerClassName="custom-pagination"
        pageItemClassName="custom-page-item"
        pageLinkClassName="custom-page-link"
        activeItemClassName="custom-active"
        disabledItemClassName="custom-disabled"
        previousClassName="custom-prev"
        nextClassName="custom-next"
      />
    </div>
  );
}

export default Pagination
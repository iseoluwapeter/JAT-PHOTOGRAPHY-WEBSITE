import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import ReactPaginate from "react-paginate";

interface ImageData {
  images: string[]; // Array of image URLs
  total: number; // Total number of images available
}

const OurWork = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 21;

  const gallery_url = import.meta.env.VITE_GALLERY_API_URL


  const fetchImages = async () => {
    try {
      const { data } = await axios.get<ImageData>(`${gallery_url}/images`);
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  //Pagination Logic
  const pageCount = Math.ceil(images.length / pageSize)
  const currentImages = images.slice(currentPage * pageSize, (currentPage+1) *pageSize)

  const handlePageChange = (data:any) => {
    setCurrentPage(data.selected)
  }
  return (
    <div className="py-20 px-7 md:px-20">
      <p className="text_2 text-2xl text-center py-10">SEE OUR WORK</p>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {currentImages.map((url, index) => (
          <img key={index} src={url} alt="" className="masonry-item" />
        ))}
      </Masonry>

      {/* Pagination Component  */}
      <div>
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"flex space-x-3 justify-center py-20"}
          activeClassName={"font-bold text-blue-600"}
          pageClassName={"px-3 py-1 border rounded cursor-pointer"}
          previousClassName={"px-3 py-1 border rounded cursor-pointer"}
          nextClassName={"px-3 py-1 border rounded cursor-pointer"}
          disabledClassName={"text-gray-400"}
        />
      </div>
    </div>
  );
};

export default OurWork;

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Blogs = ({ blogsArticle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 6;

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = blogsArticle.slice(indexOfFirstElement, indexOfLastElement);

  const totalPages = Math.ceil(blogsArticle.length / elementsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    // Scroll to the top of the page when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  const MAX_VISIBLE_PAGES = 9;
  const totalVisiblePages = Math.min(totalPages, MAX_VISIBLE_PAGES);
  const halfVisiblePages = Math.floor(totalVisiblePages / 2);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

    if (endPage - startPage + 1 < totalVisiblePages) {
      startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <li
          key="viewMoreLeft"
          className="text-white cursor-pointer h-[100%] w-[10%] flex items-center justify-center"
          onClick={() => handlePageChange(startPage - MAX_VISIBLE_PAGES)}
        >
          ...
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`text-white h-[100%] w-[10%] flex items-center justify-center hover:bg-gradient-to-br hover:from-[#EE203B] hover:to-[#EE5E20] cursor-pointer ${
            currentPage === i ? 'bg-gradient-to-br from-[#EE203B] to-[#EE5E20]' : ''
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <li
          key="viewMoreRight"
          className="text-white cursor-pointer h-[100%] w-[10%] flex items-center justify-center"
          onClick={() => handlePageChange(endPage + 1)}
        >
          ...
        </li>
      );
    }

    return pageNumbers;
  };
  console.log(currentElements);
  return (
    <>
      <img className='absolute md:flex hidden w-[20%] h-[120%] z-20' src="/top-bottom-border.png" alt="" />
      <img className='absolute md:flex hidden right-0 w-[20%] h-[120%] z-20 scale-x-[-1]' src="/top-bottom-border.png" alt="" />
      <div className='md:w-[100vw] w-[125vw] h-auto flex justify-center pt-[120px]'>

        <div key={currentPage} className='w-[80%] h-auto flex flex-wrap gap-3 justify-center'>

          {currentElements.map((article) => (
            <div key={article.id} className='md:w-[30%] w-[100%] md:h-[40vh] h-[35vh] bg-[#1C1C25] rounded-lg flex flex-col'>

              <div className='w-[100%] h-[65%] rounded-lg flex justify-start items-end' style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${article.attributes.image?.data?.attributes?.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                <span className='h-[3vh] py-3 px-4 ml-2 mb-2 text-white text-[10px] flex items-center w-auto bg-[#2e2e2d] rounded-md'>{article.attributes.type}</span>
              </div>

              <div className='w-[100%] h-auto'>
                <Link href={`/Article/${article.attributes.slug}`} className='text-justify flex flex-wrap text-white md:text-[12px] text-[14px] px-3 tracking-widest py-2'>{article.attributes.title.slice(0,100)}{article.attributes.title.length >100 ? '...':''} </Link>
              </div>

              <div className='flex flex-row justify-between w-[100%] h-auto px-3 text-[12px] text-[#7e7d81] pb-2'>
                <p className='flex items-center gap-1'>by <span className='tracking-widest'>{article.attributes.author}</span></p>
                <p className='flex items-center gap-1'><span className='md:w-[1vw] w-[4vw] h-[2vh]'><img className='w-[100%] h-[100%]' src="/clock.png" alt="clock" /></span>{new Date(article.attributes.published).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</p>
              </div>

            </div>
          ))
          }
          
        </div>
      </div>

      {/* pagination */}
      <div className='mt-8 md:w-[100vw] w-[125vw] h-[6vh] flex justify-center items-center'>
        <ul className='md:w-[35%] w-[70%] h-[100%] flex items-center bg-[#1C1C25] rounded-full justify-between'>
          <li
            className={`bg-[#343339] h-[100%] w-[10%] flex items-center justify-center rounded-[50%_0%_0%_50%] cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <img className='w-[.8vw] h-[.8vh]' src="/paginationArrow.png" alt="arrow" />
          </li>

          <div className='flex w-[100%] h-[100%]'>
            {renderPageNumbers()}
          </div>

          <li
            className={`bg-[#343339] h-[100%] w-[10%] flex items-center justify-center rounded-[0%_50%_50%_0%] cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <img className='w-[.8vw] h-[.8vh] scale-x-[-1]' src="/paginationArrow.png" alt="arrow" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Blogs;

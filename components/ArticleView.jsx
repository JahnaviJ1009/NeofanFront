import Link from 'next/link';
import React from 'react'

const ArticleView = ({ data, articles }) => {
  console.log(data, 'data');
  console.log(articles, 'articles');
  return (
    <>
      <img className='absolute md:flex hidden w-[20%] h-[120%] z-20' src="/top-bottom-border.png" alt="" />
      <img className='absolute md:flex hidden right-0 w-[20%] h-[120%] z-20 scale-x-[-1]' src="/top-bottom-border.png" alt="" />

      <div className='md:w-[100vw] w-[90vw] h-auto text-white flex md:flex-row flex-col justify-center pt-[12vh] md:pt-[20vh] gap-2'>

        {/* selected article */}

        <div className='md:w-[60%] w-[120vw] h-auto flex flex-col gap-5'>
          <p className='flex md:max-w-[55%] text-justify flex-wrap font-thin tracking-wider md:text-[15px] text-[20px]'>{data.attributes.title}</p>

          <div className='flex md:text-[13px] text-[16px] text-[#7e7d81] gap-3'>
            <p className='flex items-center gap-1'>by <span className='tracking-wider'>{data.attributes.author}</span></p>
            <p className='flex items-center gap-1'><span className='md:w-[1vw] w-[3.5vw] h-[2vh]'><img className='w-[100%] h-[100%]' src="/clock.png" alt="clock" /></span>{new Date(data.attributes.published).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</p>
            <p>{data.attributes.type}</p>
          </div>

          <div style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${data.attributes.image?.data?.attributes?.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} className='md:w-[90%] md:h-[60vh] w-[120vw] h-[40vh] md:ml-0 ml-1' />

          <div className='w-[100%] h-auto md:text-[13px] text-[18px] text-justify text-[#7e7d81]'>
            {
              data.attributes.body.map((paras, indx) => (

                <p key={indx} className='my-2'>{paras.children[0].text}</p>
              ))
            }
          </div>
        </div>

        {/* articles list */}

        <p className='md:hidden flex flex-wrap text-[18px]'>You might also like</p>
        <div className='md:w-[20%] w-[120vw]  md:h-[110vh] flex md:flex-col flex-row gap-2'>
          <p className='md:flex hidden flex-wrap text-[12px]'>You might also like</p>
          {articles.map((article) => (
            <div key={article.id} className='md:w-[100%] w-[33%] md:h-[30vh] bg-[#1C1C25] rounded-lg flex flex-col'>

              <div className='w-[100%] md:h-[65%] h-[15vh] rounded-lg flex justify-start items-end' style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}${article.attributes.image?.data?.attributes?.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                <span className='h-[3vh] py-3 px-4 ml-2 mb-2 text-white text-[10px] flex items-center w-auto bg-[#2e2e2d] rounded-md'>{article.attributes.type}</span>
              </div>

              <div className='w-[100%] h-auto'>
                <Link href={`/Article/${article.attributes.slug}`} className='text-justify flex flex-wrap text-white md:text-[10px] text-[12px] px-3 md:tracking-wider py-1'>{article.attributes.title.slice(0, 100)}{article.attributes.title.length > 100 ? '...' : ''} </Link>
              </div>

              <div className='text-justify flex md:flex-row flex-col justify-between w-[100%] h-auto px-3 mb:text-[10px] text-[13px] text-[#7e7d81] md:pb-1 pb-2 md:gap-0 gap-2'>
                <p className='flex items-center gap-1'>by <span className='md:tracking-wider'>{article.attributes.author}</span></p>
                <p className='flex items-center gap-1'><span className='md:w-[1vw] w-[3vw] md:h-[2vh] h-[1.5vh]'><img className='w-[100%] h-[100%]' src="/clock.png" alt="clock" /></span>{new Date(article.attributes.published).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</p>
              </div>

            </div>
          ))
          }

        </div>
      </div>
    </>
  )
}

export default ArticleView
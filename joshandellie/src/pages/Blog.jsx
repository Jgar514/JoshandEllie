import React from 'react'

function Blog() {
  return (
    <div className='bg-gray-200 w-full h-full overflow-y-auto'>
      <div className='flex flex-col gap-2 w-full items-center p-4'>
        <div className='flex flex-col p-4 w-full md:w-4/6 bg-white '>
          <h2 className='text-xl'>Dev.to - @Jgar514</h2>
          <div className='w-full h-full flex justify-start bg-blue bg-white p-2 underline'>
            <a href="https://dev.to/jgar514/building-a-full-stack-web-application-with-free-resources-54eg" target="_blank" rel="noopener noreferrer">
              Fullstack Business Application - Josh Garvey
            </a>
          </div>

        </div>
        <div className='flex flex-col p-4 w-full md:w-4/6 bg-white '>
          <h2 className='text-xl'>Homie.Mobi</h2>
          <div className='w-full h-full flex flex-col gap-2 justify-start  bg-white p-2 underline '>

            <div className='border-b-2 border-gray-100 p-2'>
              <a href="https://homie.mobi/blog/free-places-to-host-your-website" target="_blank" rel="noopener noreferrer">
                Free Places to Host Your Website - Josh Garvey
              </a>
            </div>

            <div className='border-b-2 border-gray-100 p-2'>
              <a href="https://homie.mobi/blog/contributing-to-someone-elses-code-on-github-for-the-first-time" target="_blank" rel="noopener noreferrer">
                Contributing to Someone Else's Code For The First Time - Josh Garvey
              </a>
            </div>

            <div className='border-b-2 border-gray-100 p-2'>
              <a href="https://homie.mobi/blog/the-technology-behind-homie-mobi" target="_blank" rel="noopener noreferrer">
                The Technology Behind Homie.Mobi - Josh Garvey
              </a>
            </div>

          </div>
        </div>



      </div>
    </div >

  )
}

export default Blog

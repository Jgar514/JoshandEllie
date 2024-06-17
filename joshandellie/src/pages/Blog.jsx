import React from 'react'

function Blog() {
  return (
    <div className='bg-gray-200 w-full h-full overflow-y-auto'>
      <div className='flex flex-col w-full items-center p-4'>
        <div className='flex flex-col p-4 w-full md:w-4/6 bg-white '>
          <h2 className='text-xl'>Dev.to</h2>
          <div className='w-full h-full flex justify-start bg-blue bg-white p-2 underline'>
            <a href="https://dev.to/jgar514/building-a-full-stack-web-application-with-free-resources-54eg" target="_blank" rel="noopener noreferrer">
              Fullstack Business Application - Josh Garvey
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

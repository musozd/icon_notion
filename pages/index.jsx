import React from 'react'
import Form from '../components/form'

const iconCardData = [
  {
    name: 'Cube',
    src: '/icons/cube.svg'
  },
  {
    name: 'Home',
    src: '/icons/home.svg'
  },
  {
    name: 'Code',
    src: '/icons/code.svg'
  },
  {
    name: 'book',
    src: '/icons/book.svg'
  },
  {
    name: 'Diamond',
    src: '/icons/diamond.svg'
  },
  {
    name: 'Stationery',
    src: '/icons/pen.svg'
  },
  {
    name: 'Trending',
    src: '/icons/trending.svg'
  },
  {
    name: 'Film',
    src: '/icons/film.svg'
  },
  {
    name: 'Triangle',
    src: '/icons/triangle.svg'
  }
]

function HomePage() {
  const copyToClipBoard = (text) => {
    // Get the text field - Copy //
    const hiddenInputEl = document.getElementById('input-for-copying')
    hiddenInputEl.value = text
    hiddenInputEl.select()
    hiddenInputEl.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(hiddenInputEl.value)
  }
  const onCopyButtonClick = (src) => {
    const baseUrl = 'https://icon-notion.vercel.app'
    const iconUrl = `${baseUrl}${src}`
    copyToClipBoard(iconUrl)
  }
  return (
    <div className="site-container space-y-20 mt-20">
      <input
        type="text"
        style={{ width: 0, height: 0, visibility: 'hidden', display: 'none' }}
        id="input-for-copying"
      />
      <div className="space-y-4">
        <h1 className="text-4xl text-center font-bold">Notion Icons</h1>
        <div className="space-y-2">
          <p className="text-center font-light">
            The easiest way to use gorgeous icons in Notion.
          </p>
          <p className="text-center font-light">
            Copy the <strong className="font-medium">URL;</strong> paste it as a
            Link when selecting your icon in Notion.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
        {iconCardData.map((iconData, i) => {
          const { name, src } = iconData
          return (
            <div key={i} className="card-container">
              <div>
                <img
                  className="object-center object-cover mt-2"
                  src={src}
                ></img>
              </div>
              <div className="text-center">
                <p className="text- text-black font-medium mt-6">{name}</p>
              </div>

              <button
                onClick={() => onCopyButtonClick(src)}
                className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
                      p-2 px-4 hover:text-white hover:bg-black "
              >
                copy
              </button>
            </div>
          )
        })}
      </div>
      <div>
        <h1 className="text-2xl text-center font-medium" id="comments">
          Comments
        </h1>
      </div>
      <Form />
    </div>
  )
}

export default HomePage

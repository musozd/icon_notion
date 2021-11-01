import Link from 'next/link'

function HomePage() {
  return (
    <div className="site-container space-y-20 mt-20">
      <div className="space-y-4">
        <h1 className="text-4xl text-center font-bold">Notion Icons</h1>
        <div className="space-y-2">
        <p className="text-center font-light">The easiest way to use gorgeous icons in Notion.</p>
        <p className="text-center font-light">Copy the URL; paste it as a Link when selecting your icon in Notion.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/cube.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Cube</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/home.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Home</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/code.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Code</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/book.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Book</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/diamond.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Diamond</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/pen.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Stationery </p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/Trending.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Trending </p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/film.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Film</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
        <div className="card-container">
          <div>
            <img className="object-center object-cover mt-2" src="/icons/triangle.svg"></img>
          </div>
          <div className="text-center">
            <p className="text- text-black font-medium  mt-6">Triangle</p>
          </div>
          <Link href="/">
            <a className="bg-white text-sm text-black font-base border border-gray-100 rounded-md mt-5 
            p-2 px-4 hover:text-white hover:bg-black ">copy</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

{/* To do
  - copy a href
  - copy clicked (check mark) (temporary)
  -components 
*/}
export default HomePage

import 'tailwindcss/tailwind.css'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="antialiased text-gray-800">
        <Header />
        <main className="mt-10 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp

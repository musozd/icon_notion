import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import Comments from './comments'


export default function Form() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently
  } = useAuth0()

  const [text, textSet] = useState('')
  const [url, urlSet] = useState(null)
  const [comments, commentsSet] = useState([])

  const fetchComment = async () => {
    const query = new URLSearchParams({ url })
    const newUrl = `/api/comment?${query.toString()}`
    const response = await fetch(newUrl, {
      method: 'GET'
    })
    const data = await response.json()
    commentsSet(data)
  }

  useEffect(() => {
    if (!url) return
    fetchComment()
  }, [url])

  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    urlSet(url)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()

    const userToken = await getAccessTokenSilently()

    // text, token, url

    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ text, userToken, url }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetchComment()
    textSet('')
  }

  return (
    <form className="mt-10 m-2" onSubmit={onSubmit}>
      <textarea
        rows="2"
        className="border border-gray-300 rounded w-full block px-2 py-2"
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <div className="mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <button className="bg-gray-800 text-white px-2 py-1 rounded">
              Send
            </button>
            <img src={user.picture} width={30} className="rounded-full" />
            <span>{user.name}</span>
            <button
              typeof="button"
              onClick={() => logout({ returnTo: process.env.NEXT_PUBLIC_URL })}
            >
              x
            </button>
          </div>
        ) : (
          <button
            className="bg-gray-800 text-white px-2 py-1 rounded"
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
      <Comments comments={comments} />
    </form>
  )
}

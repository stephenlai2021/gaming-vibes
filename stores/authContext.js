import { useState, useEffect, createContext } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    // register 'login' listener
    netlifyIdentity.on('login', (user) => {
      setUser(user)

      // close the modal
      netlifyIdentity.close()
      console.log('login event')
    })

    // register 'logout' listener
    netlifyIdentity.on('logout', () => {
      setUser(null)
      console.log('logout event')
    })

    netlifyIdentity.on('init', (user) => {
      setUser(user)
      setAuthReady(true)
      console.log('init event')
    })

    // init netlify identity connection
    netlifyIdentity.init()

    // unregister listeners
    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
    }
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const logout = () => {
    netlifyIdentity.logout()
  }

  const context = { user, login, logout, authReady }

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
import { useState,useEffect } from 'react'
import { CacheProvider } from '@emotion/react'
import UserLayout from 'src/layouts/UserLayout'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../../styles/globals.css'
import LoginPage from './pages/login/index'
import RegisterPage from './pages/register/index'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

const clientSideEmotionCache = createEmotionCache()

const App = props => {
  const [showRegister, setShowRegister] = useState(false)
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  useEffect(() => {
    
    setShowRegister(true)
    
  }, [])
  


  return (
    <>
      {typeof window !== 'undefined' && !window.localStorage.getItem('jwt') ? (
        showRegister ? (
          <RegisterPage setShowRegister={setShowRegister} />
        ) : (
          <LoginPage setShowRegister={setShowRegister} />
        )
      ) : (
        <>
          <CacheProvider value={emotionCache}>
            <SettingsProvider>
              <SettingsConsumer>
                {({ settings }) => {
                  return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </CacheProvider>
        </>
      )}
    </>
  )
}

export default App
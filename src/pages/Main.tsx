import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useLoginDispatch, useLoginState } from '../context/LoginContext'
import TodoPage from './TodoPage'
import Welcome from './Welcome'

const MainPage = () => {
  // check if it is logged in (localStorage)
  const { token } = useLoginState()
  const dispatch = useLoginDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch({ type: 'SET_TOKEN', token: token })
    } else {
      // Not logged in, continue
    }
  }, [])

  return <Layout>{token ? <TodoPage /> : <Welcome />}</Layout>
}

export default MainPage

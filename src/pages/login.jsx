import { useRouter } from 'next/router'
import React from 'react'

const LoginScreen = () => {
    const router = useRouter();
    
  return (
    <main>
      <button onClick={(e) => router.push('/api/auth/signin/github')}>Logearse con Github</button>
    </main>
  )
}

export default LoginScreen
import React, { useEffect, useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ email: '' })

  useEffect(() => {
    console.log('Email changed:', formData.email)

    return () => {
      console.log('Cleanup before next run or unmount')
    }
  }, [formData.email])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Form submitted with email:', formData.email)
  }

  return (


      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <button type="submit" style={{ backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }}>Submit</button>
      </form>
  )
}

export default App

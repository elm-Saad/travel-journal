import React from 'react'
import Data from "./Data"
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const cards=Data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <>
      <Header />
      <main>
        <section className='container'>
          {cards}
        </section>
      </main>
    </>
  )
}

export default App

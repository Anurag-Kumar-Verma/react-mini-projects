import React from 'react'
import SearchForm from './Components/SearchForm'
import CocktailList from './Components/CocktailList'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
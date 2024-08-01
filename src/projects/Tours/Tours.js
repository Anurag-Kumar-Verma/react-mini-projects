import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import data from './tour_data';
import ToursList from './Tour_list';
import './style.css';

function ToursApp() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState(data)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    setTours(data);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => setTours(data)}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <ToursList tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default ToursApp
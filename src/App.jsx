import './App.css'
import { Card, Input } from 'antd'
import data from './data/MOCK_DATA.json'
import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState([])
  const [active, setActive] = useState('')
  const [button, setButton] = useState([])

  const clearSearch = () => {
    setSearch('')
    setFilterData(data)
    setActive(undefined)
    setButton([])
  }

  const handleActiveTwoButton = (e) => {
    setButton((oldArray) => [...oldArray, e])
  }

  const handleClickFiltertwoElements = (e) => {
    const filterBigender = filterData.filter((item) => item.gender === e || item.country === e)
    setFilterData(filterBigender)
  }

  useEffect(() => {
    setFilterData(data)
  }, [])

  return (
    <div className='App'>
      <h1>Test</h1>
      <div className='title'>
        <button
          value='Male'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Male') ? 'active' : undefined}
        >
          Male
        </button>
        <button
          value='Female'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Female') ? 'active' : undefined}
        >
          Female
        </button>
        <button
          value='Bigender'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Bigender') ? 'active' : undefined}
        >
          Bigender
        </button>
        <button
          value='Non-binary'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Non-binary') ? 'active' : undefined}
        >
          Non-binary
        </button>
        <button
          value='Agender'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Agender') ? 'active' : undefined}
        >
          Agender
        </button>
        <button
          value='Polygender'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Polygender') ? 'active' : undefined}
        >
          Polygender
        </button>
        <button
          value='Genderfluid'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Genderfluid') ? 'active' : undefined}
        >
          Genderfluid
        </button>
        <button
          value='Genderqueer'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          type='button'
          className={button.includes('Genderqueer') ? 'active' : undefined}
        >
          Genderqueer
        </button>
      </div>
      <div className='title'>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          value='Brazil'
          className={button.includes('Brazil') ? 'active' : undefined}
        >
          Brazil
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          value='Thailand'
          className={button.includes('Thailand') ? 'active' : undefined}
        >
          Thailand
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          value='Sweden'
          className={button.includes('Sweden') ? 'active' : undefined}
        >
          Sweden
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          value='Japan'
          className={button.includes('Japan') ? 'active' : undefined}
        >
          Japan
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleActiveTwoButton(e.target.value)
          }}
          value='Netherlands'
          className={button.includes('Netherlands') ? 'active' : undefined}
        >
          Netherlands
        </button>
      </div>
      <div className='search'>
        <Input
          placeholder='Search'
          style={{ width: 240 }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className='btn-clear'
          type='button'
          onClick={clearSearch}
        >
          Clear
        </button>
      </div>
      <div className='card'>
        {filterData
          .filter((val) => {
            const firstname = val.first_name
            const lastname = val.last_name
            if (search === '') {
              return val
            } else if (firstname.toLowerCase().includes(search.toLowerCase())) {
              return val
            } else if (lastname.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
          })
          .map((item) => {
            return (
              <div
                className='details-card'
                key={item.id}
              >
                <Card
                  hoverable
                  style={{ width: 250 }}
                  cover={
                    <img
                      alt='example'
                      src={item.image}
                      style={{ width: '100%`', height: '234px' }}
                    />
                  }
                >
                  <div className='fullname'>
                    <p>{item.first_name}</p>
                    <p>{item.last_name}</p>
                  </div>
                  <p>{item.gender}</p>
                  <p>{item.email}</p>
                  <p>{item.country}</p>
                </Card>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App

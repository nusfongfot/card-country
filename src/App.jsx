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

  const handleClick = (event) => {
    setActive(event)
  }

  const handleSecondClick = (e) => {
    setButton((oldArray) => [...oldArray, e])
    handleClick(e)
  }

  const handleClickFiltertwoElements = (e) => {
    let filterBigender
    if (
      e === 'Male' ||
      e === 'Female' ||
      e === 'Bigender' ||
      e === 'Non-binary' ||
      e === 'Agender' ||
      e === 'Polygender' ||
      e === 'Genderfluid' ||
      e === 'Genderqueer'
    ) {
      filterBigender = filterData.filter((item) => item.gender === e)
      setFilterData(filterBigender)
    }

    if (
      e === 'Sweden' ||
      e === 'Thailand' ||
      e === 'Brazil' ||
      e === 'Japan' ||
      e === 'Netherlands'
    ) {
      filterBigender = filterData.filter((item) => item.country === e)
      setFilterData(filterBigender)
    }
    console.log(e)
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
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='1'
          className={
            active === 'Male'
              ? 'active'
              : undefined || button.includes('Male')
              ? 'active'
              : undefined
          }
        >
          Male
        </button>
        <button
          value='Female'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='2'
          className={
            active === 'Female'
              ? 'active'
              : undefined || button.includes('Female')
              ? 'active'
              : undefined
          }
        >
          Female
        </button>
        <button
          value='Bigender'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='3'
          className={
            active === 'Bigender'
              ? 'active'
              : undefined || button.includes('Bigender')
              ? 'active'
              : undefined
          }
        >
          Bigender
        </button>
        <button
          value='Non-binary'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='4'
          className={
            active === 'Non-binary'
              ? 'active'
              : undefined || button.includes('Non-binary')
              ? 'active'
              : undefined
          }
        >
          Non-binary
        </button>
        <button
          value='Agender'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='5'
          className={
            active === 'Agender'
              ? 'active'
              : undefined || button.includes('Agender')
              ? 'active'
              : undefined
          }
        >
          Agender
        </button>
        <button
          value='Polygender'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='6'
          className={
            active === 'Polygender'
              ? 'active'
              : undefined || button.includes('Polygender')
              ? 'active'
              : undefined
          }
        >
          Polygender
        </button>
        <button
          value='Genderfluid'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='7'
          className={
            active === 'Genderfluid'
              ? 'active'
              : undefined || button.includes('Genderfluid')
              ? 'active'
              : undefined
          }
        >
          Genderfluid
        </button>
        <button
          value='Genderqueer'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          type='button'
          id='8'
          className={
            active === 'Genderqueer'
              ? 'active'
              : undefined || button.includes('Genderqueer')
              ? 'active'
              : undefined
          }
        >
          Genderqueer
        </button>
      </div>
      <div className='title'>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          value='Brazil'
          id='9'
          className={
            active === 'Brazil'
              ? 'active'
              : undefined || button.includes('Brazil')
              ? 'active'
              : undefined
          }
        >
          Brazil
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          value='Thailand'
          id='10'
          className={
            active === 'Thailand'
              ? 'active'
              : undefined || button.includes('Thailand')
              ? 'active'
              : undefined
          }
        >
          Thailand
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          value='Sweden'
          id='11'
          className={
            active === 'Sweden'
              ? 'active'
              : undefined || button.includes('Sweden')
              ? 'active'
              : undefined
          }
        >
          Sweden
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          value='Japan'
          id='12'
          className={
            active === 'Japan'
              ? 'active'
              : undefined || button.includes('Japan')
              ? 'active'
              : undefined
          }
        >
          Japan
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
            handleSecondClick(e.target.value)
          }}
          value='Netherlands'
          id='13'
          className={
            active === 'Netherlands'
              ? 'active'
              : undefined || button.includes('Netherlands')
              ? 'active'
              : undefined
          }
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

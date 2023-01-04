import './App.css'
import { Card, Input } from 'antd'
import data from './data/MOCK_DATA.json'
import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState([])

  const clearSearch = () => {
    setSearch('')
    setFilterData(data)
  }

  const handleClickGender = (e) => {
    switch (e.target.value) {
      case 'Male':
        const filterMale = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterMale)
        break
      case 'Female':
        const filterFemale = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterFemale)
        break
      case 'Bigender':
        const filterBigender = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterBigender)
        break
      case 'Non-binary':
        const filterNonBinary = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterNonBinary)
        break
      case 'Agender':
        const filterAgender = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterAgender)
        break
      case 'Polygender':
        const filerPolygender = data.filter((item) => item.gender === e.target.value)
        setFilterData(filerPolygender)
        break
      case 'Genderfluid':
        const filterGenderfluid = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterGenderfluid)
        break
      case 'Genderqueer':
        const filterGenderqueer = data.filter((item) => item.gender === e.target.value)
        setFilterData(filterGenderqueer)
        break
      default:
    }
  }
  const handleClickCountry = (e) => {
    switch (e.target.value) {
      case 'Brazil':
        const filterBrazil = data.filter((item) => item.country === e.target.value)
        setFilterData(filterBrazil)
        break
      case 'Thailand':
        const filterThailand = data.filter((item) => item.country === e.target.value)
        setFilterData(filterThailand)
        break
      case 'Sweden':
        const filerSweden = data.filter((item) => item.country === e.target.value)
        setFilterData(filerSweden)
        break
      case 'Japan':
        const filterJapan = data.filter((item) => item.country === e.target.value)
        setFilterData(filterJapan)
        break
      case 'Netherlands':
        const filterNetherlands = data.filter((item) => item.country === e.target.value)
        setFilterData(filterNetherlands)
        break
      default:
    }
  }

  const handleClickFiltertwoElements = (e) => {
    let filterBigender
    if (e === 'Bigender' || e === 'Female') {
      filterBigender = filterData.filter((item) => item.gender === e)
      setFilterData(filterBigender)
    }

    if (e === 'Sweden' || e === 'Thailand') {
      filterBigender = filterData.filter((item) => item.country === e)
      setFilterData(filterBigender)
    }
    console.log(e)
  }

  // useEffect(() => {
  //   setFilterData(data)
  // }, [])

  return (
    <div className='App'>
      <h1>Test</h1>
      <div className='title'>
        <button
          value='Male'
          onClick={handleClickGender}
          type='button'
        >
          Male
        </button>
        <button
          value='Female'
          onClick={(e) => handleClickFiltertwoElements(e.target.value)}
          type='button'
        >
          Female
        </button>
        <button
          value='Bigender'
          onClick={(e) => handleClickFiltertwoElements(e.target.value)}
          type='button'
        >
          Bigender
        </button>
        <button
          value='Non-binary'
          onClick={handleClickGender}
          type='button'
        >
          Non-binary
        </button>
        <button
          value='Agender'
          onClick={handleClickGender}
          type='button'
        >
          Agender
        </button>
        <button
          value='Polygender'
          onClick={handleClickGender}
          type='button'
        >
          Polygender
        </button>
        <button
          value='Genderfluid'
          onClick={handleClickGender}
          type='button'
        >
          Genderfluid
        </button>
        <button
          value='Genderqueer'
          onClick={handleClickGender}
          type='button'
        >
          Genderqueer
        </button>
      </div>
      <div className='title'>
        <button
          type='button'
          onClick={handleClickCountry}
          value='Brazil'
        >
          Brazil
        </button>
        <button
          type='button'
          onClick={(e) => handleClickFiltertwoElements(e.target.value)}
          value='Thailand'
        >
          Thailand
        </button>
        <button
          type='button'
          onClick={(e) => {
            handleClickFiltertwoElements(e.target.value)
          }}
          value='Sweden'
        >
          Sweden
        </button>
        <button
          type='button'
          onClick={handleClickCountry}
          value='Japan'
        >
          Japan
        </button>
        <button
          type='button'
          onClick={handleClickCountry}
          value='Netherlands'
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

import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Coutries = () => {
    const [searchCountry, setSearchCountry] = useState('')
    const [Data,setData] = useState(data);
    const [selectedRegion, setSelectedRegion] = useState('nullOption');

    const handleSubmit = (searchCountry,event) => {
        event.preventDefault();
        const filteredCountries = data.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase()),
        );
        setData(filteredCountries);
    }
    const handleRegionChange = (event) => {
        event.preventDefault();
        const region = event.target.value;
        setSelectedRegion(region);
    
        if(region==='nullOption'){
            setData(data)
        }
        else{
            const countriesInRegion = data.filter((country) => country.region === region);
            setData(countriesInRegion);
        }
        
      };

  return (
    <div className='bg-slate-200 dark:bg-slate-900'>
    <div className='flex flex-col md:flex-row justify-start md:justify-between pl-8 md:pl-0 md:items-center'>
        <form className=' pt-3 md:pl-10 md:pt-10 pb-5  ' onSubmit={(event)=>handleSubmit(searchCountry,event)} >
        <button className='dark:text-white p-4 bg-white dark:bg-slate-700 rounded-md -mr-4 shadow-lg '>
            <FontAwesomeIcon icon={faSearch} />
        </button>
            <input
            className='px-8 py-4 md:w-96 dark:bg-slate-700 dark:text-slate-200 rounded-md shadow-lg '
            type="text"
            placeholder="Search for a country..."
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
            
        />
        </form>

        <div className='md:pr-10 md:pt-10 ' >
            
            <select id="dropdown" value={selectedRegion} onChange={(event)=>handleRegionChange(event)} 
            className=' px-4 md:px-8  py-4 w- md:w-96 dark:bg-slate-700 dark:text-slate-200 rounded-md shadow-lg'>
                <option className='p-2' value="nullOption">Filter by region</option>
                <option className='p-2' value="Asia">Asia</option>
                <option className='p-2' value="Africa">Africa</option>
                <option className='p-2' value="Americas">America</option>
                <option className='p-2' value="Europe">Europe</option>
                <option className='p-2' value="Oceania">Oceania</option>
            </select>
         </div>
    </div>
        {
        !data? <p className='font-bold text-5xl flex justify-center dark:text-white'>Loading...</p>: <div className='p-8' >
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
                {Data.map((item) => (
                    <Link to={`/${item.name}`} key={item.name}>
                    <li key={item.numericCode}>
                        <div className=" bg-white rounded-lg hover:bg-slate-100  overflow-hidden cursor-pointer shadow dark:bg-slate-800 dark:hover:bg-slate-700">
                            <img className='h-56 w-full' src={item.flags.svg} alt='flag'/>
                            <div className='p-4'>
                                <p className='font-semibold text-lg pb-2 dark:text-slate-100'>{item.name}</p>
                                <p className='dark:text-slate-400'><span className='font-semibold dark:text-slate-200'>Population:</span> {item.population}</p>
                                <p className='dark:text-slate-400'><span className='font-semibold dark:text-slate-200'>Region:</span> {item.region}</p>
                                <p className='dark:text-slate-400'><span className='font-semibold dark:text-slate-200'>Capital:</span> {item.capital}</p>
                            </div>
                        </div>
                    </li>
                    </Link>
                ))}
        </ul>
        </div>
        }
    </div>
  )
}

export default Coutries
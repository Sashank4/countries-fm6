import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const CountryDetails = () => {
    const {name} = useParams();
    

    const CountriesData = data.find((eachcountry) => eachcountry.name === name)

    const findBorderingCountryNames = (alpha3Codes) => {
        const borderingCountryNames = [];
        
        if(CountriesData.borders){
            alpha3Codes.forEach((alpha3Code) => {
                const borderingCountry = data.find((country) => country.alpha3Code === alpha3Code);
            
                if (borderingCountry) {
                  borderingCountryNames.push(borderingCountry.name);
                }
              });
        }
        
      
        return borderingCountryNames;
      };

      const borderAlpha3Codes = CountriesData.borders;
      const borderingCountryNames = findBorderingCountryNames(borderAlpha3Codes);
      
      
    
   
    return (
    <div className='bg-white dark:bg-slate-800 h-full md:h-screen pt-20'>
        <Link  to={'/'}><button className='shadow-lg mx-10 md:mx-40 px-4 py-1 dark:text-white dark:bg-slate-700 rounded-md'><FontAwesomeIcon icon={faArrowLeft} /> Back</button></Link>
        <div  className='flex flex-col md:flex-row p-4 md:p-20' >
            <div className='mx-auto md:w-1/2'><img className=' md:h-80 mx-auto' src={CountriesData.flags.svg} alt='flag'/></div>

            <div className='p-8  md:w-1/2 items-center '>
                <p className='font-bold text-4xl dark:text-white'>{CountriesData.name}</p>
                
                <div >

                    <div className='py-4 flex flex-col md:flex-row md:gap-28 md:justify-between'>
                    <div className=''>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Native Name: </span>{CountriesData.nativeName}</p>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Population: </span>{CountriesData.population}</p>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Region: </span>{CountriesData.region}</p>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Sub Region: </span>{CountriesData.subregion}</p>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Capital: </span>{CountriesData.capital}</p>
                    </div>
                    <div className=''>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Top Level Domain: </span>{CountriesData.topLevelDomain}</p>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Currencies: </span>{CountriesData.currencies.map((item)=><p>{item.name},</p>)}</p>
                        <p className='dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Languages: </span>{CountriesData.languages.map((item)=><p>{item.name},</p>)}</p>
                    </div>
                    </div>

                    { CountriesData.borders && <div className='flex gap-3 pt-6'>
                            <p className='items-center dark:text-slate-400 text-lg'><span className='font-semibold  dark:text-slate-200 '>Border Countries: </span> </p>
                            <ul className='flex flex-col md:flex-row gap-2 flex-nowrap'>
                                {borderingCountryNames.map((border,index)=>(
                                    <Link to={`/${border}`} key={border}>
                                    <li className='cursor-pointer text-base my-auto shadow-lg rounded-md px-1 md:px-2 text-black bg-slate-100 dark:bg-slate-700 dark:text-white' key={index}>
                                        { border} 
                                    </li>
                                    </Link>
                                ))

                                }
                            </ul>
                        </div>
                    }

                    
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default CountryDetails
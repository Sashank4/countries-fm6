import {Route,Routes} from "react-router-dom"
import Coutries from "./Components/Coutries";
import Error from "./Components/Error";
import CountryDetails from "./Components/CountryDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="">

      <div className="flex justify-between p-2 md:p-6 dark:bg-slate-800 items-center">
        <p className=" text-base font-bold md:text-4xl px-2 md:px-8 dark:text-white">Where in the world ?</p>
        <button className='p-4 px-2 md:px-8   dark:text-white' ><FontAwesomeIcon className="px-2" icon={faMoon} /> Dark Mode</button>
      </div>
      <Routes>
          <Route path="/" element={<Coutries/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/:name" element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

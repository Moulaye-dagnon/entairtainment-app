import { useEffect, useState } from "react";
import icon_search from "../../assets/icon-search.svg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
export function SearchComponent({}) {

	const [search, setSearch] = useState('')
	const navigate = useNavigate()
	const location = useLocation()
	const [previousUrl,setprevriousUrl] = useState()

	useEffect(()=>{
		setprevriousUrl(location.pathname)
	},[])

	const handleChange = (e)=>{
		const {value} = e.target
		setSearch(value)
		if(value.trim()){
			navigate(`/search?q=${value}`)
		}else{
			navigate(previousUrl)
		}

	}
  return (
    <div className=" w-63.5 my-6.5 md:my-8.5 h-6 md:w-95 md:h-8   pl-10 md:pl-14 relative">
      <div className=" absolute left-0 size-6 top-0 md:size-8">
        <img src={icon_search} alt="" />
      </div>

      <input
        className="w-full border-none outline-0 caret-red text-lg caret "
        placeholder="Search for movies or TV series"
        type="text"
        name="search"
        value={search}
        onChange={(e)=>handleChange(e)}
      />
    </div>
  );
}

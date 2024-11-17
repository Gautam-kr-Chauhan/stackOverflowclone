import React,{useState} from 'react'
import assets from '../assets/assets'
import './Left.css'
const Left = () => {
    const [active, setactive] = useState("home")
  return (
    <div>
        <div className='w-40'>
            <ul className='side mt-1 space-y-1'>
                <li className={`cursor-pointer ${active==='home'?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("home")} >Home</li>
                <li className={`cursor-pointer text-slate-400 ${active==='public' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("public")}>PUBLIC</li>
                <li className={`cursor-pointer ${active==='question' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("question")}>Questions</li>
                <li className={`cursor-pointer ${active==='tags' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("tags")}>Tags</li>
                <li className={`cursor-pointer ${active==='user' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("user")}>Users</li>
                <li className={`cursor-pointer text-slate-400 ${active==='collective' ?'bg-orange-300 border-r-4  border-orange-600':""}`} onClick={()=>setactive("collective")}>COLLECTIVES</li>
                <li className={`cursor-pointer ${active==='explore jobs' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("explore jobs")}>Explore Jobs</li>
                <li className={`cursor-pointer text-slate-400 ${active==='find jobs' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("find jobs")}>FIND JOBS</li>
                <li className={`cursor-pointer ${active==='jobs' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("jobs")}>Jobs</li>
                <li className={`cursor-pointer ${active==='companies' ?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("companies")}>Companies</li>
                <li className={`cursor-pointer text-slate-400 ${active==='teams'?'bg-orange-300 border-r-4 border-orange-600':""}`} onClick={()=>setactive("teams")}>TEAMS</li>
                <li className='cursor-pointer'>+ Create a team</li>
            </ul>
        </div>
    </div>
  )
}

export default Left
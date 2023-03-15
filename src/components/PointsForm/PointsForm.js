import { useEffect, useState } from "react"


export default function PointsForm({speeds, randomNum, bounce, item, setTasks, tasks}){
    const min = 1;
    const max = 20;
  
    const [value, setValue] = useState(1);
  
    const handleChange = event => {
      const value = Math.max(min, Math.min(max, Number(event.target.value)));
      setValue(value);
      setTasks((prev)=>{
        let copy = [...prev]
        copy.map((obj)=>{
            if(obj.title===item){
                obj.value=value
            }
        })
        return copy
      })
    };

    return (
        <div className={`inputPointsContainer ${speeds[randomNum]} ${bounce ? `animate__animated animate__jello` : null}`}>
        <div className="input-group mb-3 input-points">
        <span className="input-group-text bg-warning text-white" id="basic-addon3">{item}</span>
            <input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={handleChange} value={value}/>
        </div></div>
    )
}
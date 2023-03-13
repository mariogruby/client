export default function TaskListFormButton({text, btns, setBtns, i, isChoosePrizeView, setIndex}){
    function handleClick(i){
      if(isChoosePrizeView){
        setIndex(i)
        setBtns(prevBtns => {
          let copy = {...prevBtns}
          Object.keys(copy).forEach(v => copy[v] = false)
          copy[`btn${i}`] = !copy[`btn${i}`]
          return copy
        })
      }else{
        setBtns(prevBtns => {
          const updatedBtns = {}
            updatedBtns[`btn${i}`] = !btns[`btn${i}`]
          return {...prevBtns, ...updatedBtns}
        })
      }
    }

    return(
        <button onClick={()=>{handleClick(i)}} className={`btn mb-2 btn-form-tasks ${btns[`btn${i}`] ? "btn-primary": "btn-secondary"}`}>{text}</button>
    )
}
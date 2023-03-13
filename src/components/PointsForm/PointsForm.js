export default function PointsForm({speeds, randomNum, bounce, item, isChoosePrizeView}){
    return (
        <div className={`inputPointsContainer ${speeds[randomNum]} ${bounce ? `animate__animated animate__jello` : null}`}>
        <div class="input-group mb-3 input-points">
        <span class="input-group-text bg-warning text-white" id="basic-addon3">{item}</span>
            <input type="number" class="form-control" id="basic-url" aria-describedby="basic-addon3" min="0" max="20"/>
        </div></div>
    )
}
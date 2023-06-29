import { useDispatch, useSelector } from "react-redux"
import BubbleSort from "../../Algorithms/BubbleSort"
import InsertionSort from "../../Algorithms/InsertionSort"
import MergeSort from "../../Algorithms/MergeSort"
import QuickSort from "../../Algorithms/QuickSort"
import SelectionSort from "../../Algorithms/SelectionSort"
import './Visuals.css'
import { changeValues, playOrPause, updateColor } from "../../slices/updatePropsSlice"
import { useEffect } from "react"

const Visuals = () => {
  const myState = useSelector(state => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.color;
  const range = myState.range;

  const handleChangeValues = () => {

    let new_arr = [...myState.values];
    for (let i = 0; i < new_arr.length; i++){
      document.getElementById(i).style.transform = `translateX(${i * 11}px)`;
    }
    dispatch(changeValues())
    dispatch(updateColor(document.getElementById('color').value))
  }

  const handlePlayPause = (play) => {
    if (!myState.play) {
      document.getElementById('change-btn').disabled = true;
      document.getElementById('change-btn').style.backgroundColor = 'grey';
      document.getElementById('play-btn').disabled = true;
      document.getElementById('play-btn').style.backgroundColor = 'grey';
    }
    else {
      return;
    }
    dispatch(playOrPause(play))
  }

  useEffect(() => {
    if (!myState.play) {
      document.getElementById('play-btn').disabled = false;
      document.getElementById('play-btn').style.backgroundColor = 'rgb(0, 149, 199)';
      document.getElementById('change-btn').disabled = false;
      document.getElementById('change-btn').style.backgroundColor = 'rgb(0, 149, 199)';
    }
  }, [myState.play]);

  let speed = myState.speed;
  if (myState.algorithm === 'selection')
    speed *= 3;
  else if (myState.algorithm === 'merge')
    speed *= 5;
  else if (myState.algorithm === 'quick')
    speed *= 6;
  return (
    <div className="visuals">
      <h1>{myState.algorithm} Sort</h1>
      <div className="visualizer">
        {myState.algorithm === 'quick' && <div className="legend"><div className="legend__lable"></div> Pivot elements</div>}
        {
          <div className="visual__items" style={{ width: `${myState.values.length * 11 }px` }}>
            {
              myState.values.map((item) => {

                return <div
                  className="visual__item"
                  key={item[1]}
                  id={item[1]}
                  style={{
                    transition: `${speed / 1000}s linear all`,
                    transform: `translateX(${item[1] * 11}px)`
                  }}>
                  <h4>{item[0]}</h4>
                  <div className="visual" style={{ height: `${item[0] * 3}px`, backgroundColor: color, width: (range < 35 ? '8px' : '6px') }}></div>
                </div>
              })
            }
          </div>
        }
      </div>
      <div className="visual__btns">
        <button id='change-btn' className="button" onClick={handleChangeValues}>change values</button>
        <button id='play-btn' className="button" onClick={() => handlePlayPause(true)}>play</button>
      </div>

      <BubbleSort />
      <InsertionSort />
      <MergeSort />
      <QuickSort />
      <SelectionSort />
    </div>
  )
}

export default Visuals
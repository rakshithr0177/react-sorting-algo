import './Details.css'
import { useSelector } from "react-redux";

const Details = () => {

    
    const myState = useSelector(state => state.updateProps);

    const bubble = {
        time: {
            bestcase: "O(n)",
            avgcase: "O(n^2)",
            worstcase: "O(n^2)",
        },
        space: "O(1)"
    }
    const insertion = {
        time: {
            bestcase: "O(n)",
            avgcase: "O(n^2)",
            worstcase: "O(n^2)",
        },
        space: "O(1)"
    }
    const selection = {
        time: {
            bestcase: "O(n^2)",
            avgcase: "O(n^2)",
            worstcase: "O(n^2)",
        },
        space: "O(1)"
    }
    const merge = {
        time: {
            bestcase: "O(nlogn)",
            avgcase: "O(nlogn)",
            worstcase: "O(nlogn)",
        },
        space: "O(n)"
    }
    const quick = {
        time: {
            bestcase: "O(nlogn)",
            avgcase: "O(nlogn)",
            worstcase: "O(n^2)",
        },
        space: "O(logn)"
    }

    let algo = {};
        if (myState.algorithm === 'bubble')
            algo = bubble
        else if (myState.algorithm === 'insertion')
            algo = insertion
        else if (myState.algorithm === 'selection')
            algo = selection
        else if (myState.algorithm === 'merge')
            algo = merge
        else if (myState.algorithm === 'quick')
            algo = quick



    return (
        <div className="details">
            <div className="time">
                <h3>Time Complexity</h3>
                <div>
                    <h3>Best Case : {algo.time.bestcase}</h3>
                    <h3>Average Case : {algo.time.avgcase}</h3>
                    <h3>Worst Case : {algo.time.worstcase}</h3>
                </div>
            </div>
            <div className="space">
                <h3>Space Complexity</h3>
                <div>
                    <h3>{algo.space}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Details
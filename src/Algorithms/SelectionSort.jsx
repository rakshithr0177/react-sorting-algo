import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playOrPause, updateColor } from '../slices/updatePropsSlice';

const SelectionSort = () => {
    const myState = useSelector(state => state.updateProps);
    const dispatch = useDispatch();

    let values = myState.values.map((item) => item[0]);
    let ids = myState.values.map((item) => item[1]);

    const solve = () => {
        let n = values.length;

        for (let i = 0; i < n; i++) {

            setTimeout(() => {
                let ind = i;
                for (let j = i; j < n; j++) {
                    if (values[ind] > values[j])
                        ind = j;
                }
                let temp = values[i];
                values[i] = values[ind];
                values[ind] = temp;

                temp = ids[i];
                ids[i] = ids[ind];
                ids[ind] = temp;

                document.getElementById(ids[i]).style.transform = `translateX(${i * 11}px)`;
                document.getElementById(ids[ind]).style.transform = `translateX(${ind * 11}px)`;

                document.getElementById(ids[i]).childNodes[1].style.backgroundColor = 'black';

                setTimeout(() => {
                    document.getElementById(ids[i]).childNodes[1].style.backgroundColor = myState.color;
                }, myState.speed * 2);

            }, i * myState.speed * 3);
        }

        setTimeout(() => {
            dispatch(playOrPause(false))

            dispatch(updateColor('rgb(0, 182, 0)'))

        }, (myState.speed * 3 * n) + 50);
    };

    useEffect(() => {
        if (myState.algorithm === 'selection') {
            if (myState.play)
                solve();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myState.play]);
    return (
        <div></div>
    )
}

export default SelectionSort
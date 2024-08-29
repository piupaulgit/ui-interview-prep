
import {data} from './data';
import {useEffect, useMemo, useState} from 'react';
import './card.css';

const Card = () => {
    const [selectedBoxes, setSelectedBoxes] = useState(new Set())
    const [isUnmounting, setIsUnmounting] = useState(false)
    const visisbleBoxCount = useMemo(() => {
        return data.reduce((acc,box) => {
            box.forEach(itm => {
                if(itm === 1){
                    acc++
                }
            });
            return acc;
        }, 0)
    }, [data])

    const unLoad = () => {
        setIsUnmounting(true)
        const keys = Array.from(selectedBoxes.keys());
        
        const removeNextkey = () => {
            if(keys.length){
                const currentKey = keys.shift()

                setSelectedBoxes(prev => {
                    const updatedKeys = new Set(prev);
                    updatedKeys.delete(currentKey);
                    return updatedKeys;
                })
            }

            setTimeout(removeNextkey, 1000)
        }
        setTimeout(removeNextkey, 500)
    }

    useEffect(() => {
        if(selectedBoxes.size === visisbleBoxCount){
            unLoad()
        }
    }, [selectedBoxes]);

    const handleClick = (e) => {
        if(isUnmounting){
            return;
        }
        const currentvalue = e.target.getAttribute('data-value');
        const isSelected = e.target.getAttribute('data-status');

        if(isSelected === 'false') {
            setSelectedBoxes(prev => {
                return new Set(prev.add(currentvalue))
            })
        }
    }
    return (
        <div className="card" onClick={handleClick}>
            {
                data.length && data.map((boxes,index) => {
                    return (
                        <div key={index} className='row'>
                            {
                                boxes.map((box,ind) => {
                                    const isVisible = box === 1;
                                    const isSelected = selectedBoxes.has(`${index}-${ind}`)
                                    return (
                                        <div className={`each_box ${isVisible ? 'visible' : ''} ${isSelected ? 'selected' : ''}`} 
                                        key={index-ind} 
                                        data-value={`${index}-${ind}`} data-status={isSelected ? true : false}>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;
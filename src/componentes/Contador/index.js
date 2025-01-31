import { FaMinus, FaPlus } from 'react-icons/fa'
import './Contador.css'
import { useState } from 'react';


const Contador = () => {
    const [num, setNum] = useState(0);

    const aumentar = () => setNum(num + 1);

    const diminuir = () => {
        if (num > 0) {
            setNum(num - 1);
            
        }
    };

    return(
        <div className="container">
            <FaMinus className='minus' onClick={diminuir}/>
            <div className="num" id="num">
                {num}
            </div>
            <FaPlus className='plus'onClick={aumentar}/>
            
        </div>
    )
}

export default Contador

import React, { useState } from 'react';

function Counter() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count »
    // Déclare une fonction setCount qui permet de modifier la valeur de count




    const [count, setCount] = useState(0);

    let newCount;







    return (
        <div>
            <p>Le compteur est  à : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
            <div>
                <form >
                    <label>Counter start:</label>
                    <input type="number"  onChange={e => setCount(parseInt(e.target.value))} value={newCount}></input>

                </form>
            </div>
        </div>
    );
}

export default Counter;
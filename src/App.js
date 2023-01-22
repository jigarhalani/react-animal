import {useState} from 'react';

function App(){
    const [count, setCount ] = useState(0);

    const handleClick = () => {
        console.log("button is clicked");
        setCount(count+1);
    };

    return <div>
        <button onClick={handleClick}>Add Animal</button>
        Animal to show : {count}
    </div>
}


export default App;
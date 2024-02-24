import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
    const button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const button2Foo = () => {
        console.log('Im Igor')
    }
    const button3Foo = () => {
        console.log('Im stupid button')
    }
    return (
        <div className="App">
            {/*<button>myYouTubeChanel-1</button>*/}
            {/*<button>myYouTubeChanel-2</button>*/}
            <Button name={'myYouTubeChanel-1'} callBack={() => button1Foo('Im Vasya', 21)}/>
            <Button name={'myYouTubeChanel-2'} callBack={button2Foo}/>
            <Button name={'stupidButton'} callBack={button3Foo}/>
        </div>
    );
}

export default App;

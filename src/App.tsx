import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber: string, age: number, city: string) => {
        console.log(subscriber, age, city)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('Im Stupid Button')
    }

    return (
        <div className="App">
            <Button name='YouTubeChanel-1' callBack={() => Button1Foo('Im Vasya', 21, 'Minsk')}/>
            <Button name='YouTubeChanel-2' callBack={() => Button2Foo('Im Ivan')}/>
            <Button name='StupidButton' callBack={Button3Foo}/>
        </div>
    );
}

export default App;

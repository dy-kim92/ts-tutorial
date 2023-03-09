import React from 'react';

type GreetingsProps = {
  name : string;
  mark : string;
  optional? : string;   //  생략할 수 있는 props
  onClick : (name : string) => void;    //  아무것도 리턴하지 않는 함수
};

function Greetings({ name, mark, optional, onClick } : GreetingsProps) {
    const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
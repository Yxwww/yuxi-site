import { useState } from 'react';

function createIdGenerator() {
  let counter = 0;
  return function next() {
    counter++;
    return `fancyid-${counter}`;
  };
}
const gen = createIdGenerator();
function createEntity() {
  return {
    id: gen(),
    item: 0,
  };
}
const arr = [{ id: '' }];
// arr.reduce((acc, cur) => {}, []);
export default function RegroupExample() {
  // const [] = useState([]);
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Regroup</h1>
    </div>
  );
}

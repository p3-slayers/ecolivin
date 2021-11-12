// convert this to useDatabaseStorage

import { useEffect, useState } from 'react';

// this custom react hook can be used in the same way as other hooks and will both read and set values to localStorage depending on context and what is passed.
export default function useLocalStorage(key, initialValue) {
  // value is set to this function. Thus, the function set to value is called on inital render ONLY to prepare inital value, and the return from that function is set to the value of the value state.
  // In subsequent renders (due to a change of state in the component or a parent component), the argument of the useState Hook will be ignored and the current value will be retrieved.
  const [value, setValue] = useState(() => {
    // check localStorage for the passed key
    const jsonValue = localStorage.getItem(key);

    // if value in localStorage is NOT null, return the parsed value as the value state
    if (jsonValue != null) return JSON.parse(jsonValue);

    // if value in localStorage IS null, and the inital value passed is of type function, return the called function result as the value state
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      // if value in localStorage IS null, and the inital value passed is NOT a function, return the initial value as the value state
      return initialValue;
    }
  });

  // get called every time this hook is invoked
  useEffect(() => {
    // store the value of the value state into localStorage with the key, and the stringified value of the value state
    localStorage.setItem(key, JSON.stringify(value));
    // run this hook any time the key changes, or the value changes.
  }, [key, value]);

  // return the value of the value state, and the method for adjusting that value, which then recalls this hook.
  return [value, setValue];
}

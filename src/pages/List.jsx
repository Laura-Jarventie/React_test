import React from "react";
import { useState } from "react";


export const List = () => {
    const [content, setContent] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const removeHandler = (removeIndex) => { //Remove handler that deletes individual items from content array using the item index.
        const removeItem = content.filter((content, index) => {
                return removeIndex !== index;
              });
              setContent(removeItem);
      };

    function clearList() {// Function to clear the whole array by using setContent, setting the state to empty array, like it is in the initial state.
        setContent([]);
      }

    return (
<div>
    <div>
        <form onSubmit={(event) => {
                    event.preventDefault() //Preventing the page from refreshing after submit
                    const temp = [inputValue, ...content]; {/*Since we can't push content straight to the content array (Because we're using setContent, which requires a completely new array)
                                                            we will take copy of the existing array and with the spread method adding both, 
                                                            the content array and sumbitted item into to the same array. After that setting the 
                                                            content to the temp array using useState.*/}
                    setContent(temp);
                    setInputValue(''); // Clearing the text field after submit.
                }}>
            <input type="text" placeholder="Type here..."  value={inputValue} onChange={e => setInputValue(e.target.value)}  required/>
            <input type="submit" value= "Submit"/>
            {
                content.map((item, index) => (
                    <ul>
                        <li>
                            <h2 key = {index}>{item}</h2>
                            <button onClick={() => removeHandler(index)}>Remove</button>
                        </li>
                    </ul>
                )
            )}
        </form>
        <button className='btn-clear' onClick={clearList}>Clear list</button> {/*Button where clearList function is assigned with onClick.*/}
    </div>
    
</div>
    );
}
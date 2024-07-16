import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        const newValue = e.target.value;
        setValue((prevValue) => prevValue + newValue);
    };

    const deleteHandler = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
    };

    const calculateResult = () => {
        try {
            
            const sanitizedValue = value.replace(/pow/g, '**');
          
            const total = new Function("return " + sanitizedValue)();
            setValue(total.toString());
        } catch (error) {
            setValue("Error");
        }
    };

    return (
        <>
            <div className="calc">
                <h1>Calculator</h1>
                <input type="text" value={value} readOnly />

                <div className="container">
                    <button className="btn" onClick={() => setValue("")}>AC</button>
                    <button className="btn" value="pow" onClick={changeHandler}>pow</button>
                    <button className="btn" onClick={deleteHandler}>DEL</button>
                    <button className="btn" value="/" onClick={changeHandler}>/</button>
                    <button className="btn" value="7" onClick={changeHandler}>7</button>
                    <button className="btn" value="8" onClick={changeHandler}>8</button>
                    <button className="btn" value="9" onClick={changeHandler}>9</button>
                    <button className="btn" value="*" onClick={changeHandler}>*</button>
                    <button className="btn" value="4" onClick={changeHandler}>4</button>
                    <button className="btn" value="5" onClick={changeHandler}>5</button>
                    <button className="btn" value="6" onClick={changeHandler}>6</button>
                    <button className="btn" value="-" onClick={changeHandler}>-</button>
                    <button className="btn" value="1" onClick={changeHandler}>1</button>
                    <button className="btn" value="2" onClick={changeHandler}>2</button>
                    <button className="btn" value="3" onClick={changeHandler}>3</button>
                    <button className="btn" value="+" onClick={changeHandler}>+</button>
                    <button className="btn" value="00" onClick={changeHandler}>00</button>
                    <button className="btn" value="0" onClick={changeHandler}>0</button>
                    <button className="btn" value="." onClick={changeHandler}>.</button>
                    <button className="btn" onClick={calculateResult}>=</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;

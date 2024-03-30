import React, {useState} from "react";
import '../styles/my-style.css'


export default function Comp(props) {

    const [state, setState] = useState("unselected");
    const [color, setColor] = useState("")
    const {number, price, updatePriceHandler} = props;

    const changeStateHandler = () => {
        switch (state) {
            case "unselected":
                setState("selected");
                setColor("green");
                break;
            case "selected":
                setState("temporary reservation");
                setColor("orange");
                break;
            case "temporary reservation":
                setState("reserved");
                setColor("red");
                updatePriceHandler(price);
                break;
            case "reserved":
                alert("قبلا رزرو شده است");
        }

        
    }


    return (
        <abbr title={price}>
            <button className={"btn " + color} onClick={changeStateHandler}  >{number}</button>
        </abbr>
               
    )
}

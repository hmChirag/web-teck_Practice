import { useState } from "react";
import "./lottery.css"
import { genTicket,sum } from "./helper";

export default function Lottery(){
    let [ticket,setTicket]=useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    let buyTicket=()=>{
        setTicket(genTicket(3));
    }
    return (
        <div>
            <h1>lottery game</h1>   
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>buy ticket</button>
            <h3>{isWinning && "congratulations you won"}</h3>
        </div>
    );
}
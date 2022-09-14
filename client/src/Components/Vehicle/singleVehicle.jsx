import React, { useState } from 'react'
import { useTimer } from "react-timer-hook";
import "./vehicle.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const SingleVehicle = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [book, setbook] = useState("book")

    const {
        seconds,
        minutes,
        pause,
        restart,
    } = useTimer({
       
        onExpire: () => expire(setbook("error"))

    });

    const expire = () => {
        if (minutes + seconds <= 0) {
            console.log("Time Expired");
        }
    }
    return (
        <div className="singleVehicleDetaile">
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.type}</p>
            {book === "book" ? (

                <button onClick={() => {
                    // Restarts to 2 minutes timer
                    const time = new Date();
                    const value = time.setSeconds(time.getSeconds() + 10);
                    restart(value);
                    setbook("pick")
                }}>
                    Book
                </button>

            ) : book === "pick" ?
                (
                    <>
                        <div style={{ fontSize: "38px" }}>
                            <span>{minutes}</span>:<span>{seconds}</span>
                        </div>

                        <button onClick={() =>

                            pause(setbook("booked"))}

                        >Pick</button>


                    </>
                ) : book === "booked" ? (
                    <>

                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="success">You Successfully booked and put it in Outlets!</Alert>
                        </Stack><br />
                        <button style={{ backgroundColor: "green" }}>Booked</button>
                       
                    </>
                ) : book === "error" ? (
                    <>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">Expired The time!!! you cannot book now!</Alert>
                        </Stack>

                    </>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

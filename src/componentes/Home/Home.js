import React from "react";
import "./Home.css";
import Intro from "../../imagen/playa3.jpg"
import { useState } from "react"
import DateRangePicker from "tw-daterange"

const ReservaHome = () => {
    const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    })

        return (
    <   DateRangePicker
        initialRange={range}
        onUpdate={(dateRange) => {
        setRange(dateRange)
        }}
    />
    )
}



const Home = () => {
    return (

        <section className="sectionintro">
            <div className="reservaFecha">
            <form action="#" target="" method="get" name="formDatosPersonales">
                <label for="adultos">Cantidad de adultos </label>
                <input type="number" name="adulto" id="adulto" placeholder="Cantidad"/>
                <label for="niños">Cantidad de niños </label>
                <input type="number" name="niños" id="niños" placeholder="Cantidad"/>

                <label for="checkin" >Check in</label>
                <input type="text" name="Check in" id="checkin" placeholder="Check In" required />

                <label for="checkout">check out</label>
                <input type ="text" name="check out" onClick={ReservaHome} id="checkout" placeholder="Check Out"/>

                <input type="submit" name="enviar" value="Reservar"/>
            </form>

            </div>
            <div className="imgdiv">
                <img className="imgcss" alt="imgintro" />
            </div>
            <div className="divtext">
                <h2 className="textIntro">
                    <p>Un entorno de ensueño con la naturaleza en todo su esplendor </p>
                </h2>

            </div>

        </section>




    );
}

export default Home;
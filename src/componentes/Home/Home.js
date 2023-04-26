import React from "react";
import "./Home.css";
import Intro from "../../imagen/playa3.jpg"
import ReservaHome from "../Reserva/Reserva";

const Home = () => {
    return (

        <section className="sectionintro">
            <div className="reservaFecha">
            <form action="#" target="" method="get" name="formDatosPersonales">
                <label for="adultos">Cantidad de adultos </label>
                <input type="number" name="adulto" id="adulto" placeholder="Cantidad"/>
                <label for="niños">Cantidad de niños </label>
                <input type="number" name="niños" id="niños" placeholder="Cantidad"/>
                <label for="checkout">check in / check out</label>
                <ReservaHome />
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
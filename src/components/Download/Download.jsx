import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import PWAPrompt from "react-ios-pwa-prompt";
import { usePWAInstall } from "react-use-pwa-install";
import Push from "push.js";



export default function Download() {

 
 

  const install = usePWAInstall();

  async function handlerNotification(e) {
    e.preventDefault();

    Push.create("Mensaje Especial para ti!", {
      body: "Puto el que lee",
      icon: "./copa.png",
      timeout: 4000,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  }

  return (
    <div className="flex flex-col justify-between h-screen w-full items-center">
      <NavBar />
      <PWAPrompt
        promptOnVisit={1}
        timesToShow={3}
        copyShareButtonLabel="1) Presiona el botón compartir en la esquina superior derecha ↑."
        copyAddHomeButtonLabel="2) Presiona para descargar."
        copyClosePrompt="Mas Tarde"
        copyTitle="Descargar APP"
        copyBody="Agrega el album al menú principal."
        permanentlyHideOnDismiss={false}
      />


   
      <div className="bg-green-600 justify-between mt-24 rounded-lg flex flex-col items-center">
        <button
          className="p-5 font-bold bg-[#F6D50E] m-5 rounded-lg shadow-lg"
          onClick={(e) => handlerNotification(e)}
          // onClick={activateMessages}
        >
        🔔MENSAJE ESPECIAL🔔
        </button>
        {!install ? (
          <div className="flex flex-col items-center rounded-lg bg-gray-300 w-96 h-56 m-5 p-5 border justify-center opacity-80 shadow-lg">
            <h1 className="text-black font-bold items-center justify-center">
              {" "}
              Esta aplicación ya esta descargada en su dispositivo.
            </h1>

            <Link to="/">
              <button className="p-5 font-bold bg-green-800 text-white rounded-lg shadow-lg">
                Ir al Inicio
              </button>
            </Link>
          </div>
        ) : (
          install && (
            <div className="flex flex-col items-center rounded-lg bg-gray-300 w-96 h-56 m-5 p-5 border justify-center opacity-80 shadow-lg">
              <h1 className="text-black font-bold items-center justify-center">
                {" "}
                Bienvenido a Aconcagua Cup!.
              </h1>
              <button
                className="p-5 font-bold bg-[#14ABD5] rounded-lg shadow-lg"
                onClick={install}
              >
                Instalar Aplicación
              </button>
            </div>
          )
        )}{" "}
      </div>

    </div>
  );
}

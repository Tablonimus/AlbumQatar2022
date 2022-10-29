import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";
import campo from "../../assets/images/campodefutbol.jpg";
import chini from "../../assets/images/chini.jpeg";
import gabi from "../../assets/images/fabi.jpeg";
import fabian from "../../assets/images/fabian.jpeg";
import facu from "../../assets/images/facu.jpeg";
import ivan from "../../assets/images/ivan.jpeg";
import larry from "../../assets/images/larry.jpeg";
import lede from "../../assets/images/lede.jpeg";
import lucho from "../../assets/images/lucho.jpeg";
import mano from "../../assets/images/mano.jpeg";
import nahuel from "../../assets/images/nahuel.jpeg";
import pipo from "../../assets/images/pipo.jpeg";
import pipoleg from "../../assets/images/pipoleg.jpeg";
import polaleg from "../../assets/images/polaleg.jpeg";
import polino from "../../assets/images/polino.jpeg";
import tabla from "../../assets/images/tabla.jpeg";
import tomas from "../../assets/images/tomas.jpeg";
import torta from "../../assets/images/torta.jpeg";
import troy from "../../assets/images/troy.jpeg";

import { Modal } from "flowbite-react";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const controls = useDragControls();

  const constraintsRef = useRef(null);
  const constraintsRefPro = useRef(null);
  const [show, SetShow] = useState(false);
  const [showGabi, SetShowGabi] = useState(false);
  const [fchini, SChini] = useState(false);
  const [ffabian, SFabian] = useState(false);
  const [ffacu, SFacu] = useState(false);
  const [fivan, SIvan] = useState(false);
  const [flarry, SLarry] = useState(false);
  const [flede, SLede] = useState(false);
  const [flucho, SLucho] = useState(false);
  const [fmano, SMano] = useState(false);
  const [fnahuel, SNahuel] = useState(false);
  const [fpipo, SPipo] = useState(false);
  const [fpipoleg, SPipoLeg] = useState(false);
  const [fpolaleg, SPolaLeg] = useState(false);
  const [fpolino, SPolino] = useState(false);
  const [ftabla, STabla] = useState(false);
  const [ftomas, STomas] = useState(false);
  const [ftorta, STorta] = useState(false);
  const [ftroy, STroy] = useState(false);

  function onClick(e) {
    SetShow(true);
    console.log(e.target.alt);
  }
  function onClose() {
    SetShow(false);
  }
  //-----------Chini--------------
  function onChino() {
    SChini(true);
  }
  function onCloseChino() {
    SChini(false);
  }
  //-----------
  //-----------Gabi*--------------
  function onClickGabi(e) {
    SetShowGabi(true);
    console.log(e.target.alt);
  }
  function onCloseGabi() {
    SetShowGabi(false);
  }
  //-----------
  //-----------FABIANLEG*--------------
  function onClickFabian(e) {
    SFabian(true);
    console.log(e.target.alt);
  }
  function onCloseFabian() {
    SFabian(false);
  }
  //-----------
  //-----------Facu*--------------
  function onFacu(e) {
    SFacu(true);
    console.log(e.target.alt);
  }
  function closeFacu() {
    SFacu(false);
  }
  //-----------
  //-----------Ivan*--------------
  function onIvan(e) {
    SIvan(true);
    console.log(e.target.alt);
  }
  function closeIvan() {
    SIvan(false);
  }
  //-----------
  //-----------LArry*--------------
  function onLarry(e) {
    flarry === false ? SLarry(true) : SLarry(false);
  }

  //-----------
  //-----------Lede*--------------
  function onLede(e) {
    flede === false ? SLede(true) : SLede(false);
  }

  //-----------
  //-----------lucho*--------------
  function onLucho(e) {
    flucho === false ? SLucho(true) : SLucho(false);
  }

  //-----------
  //-----------mano*--------------
  function onMano(e) {
    fmano === false ? SMano(true) : SMano(false);
  }
  //-----------
  //-----------Nahuel*--------------
  function onNahu(e) {
    fnahuel === false ? SNahuel(true) : SNahuel(false);
  }
  //-----------
  //-----------pipo*--------------
  function onPipo(e) {
    fpipo === false ? SPipo(true) : SPipo(false);
  }
  //-----------
  //-----------PIPOLEG*--------------
  function onPipoLeg(e) {
    fpipoleg === false ? SPipoLeg(true) : SPipoLeg(false);
  }
  //-----------
  //-----------POLALEG*--------------
  function onPolaLeg(e) {
    fpolaleg === false ? SPolaLeg(true) : SPolaLeg(false);
  }
  //-----------
  //-----------POLINO*--------------
  function onPolino(e) {
    fpolino === false ? SPolino(true) : SPolino(false);
  }
  //-----------
  //-----------tabla*--------------
  function onTabla(e) {
    ftabla === false ? STabla(true) : STabla(false);
  }
  //-----------
  //-----------tomas*--------------
  function onTomas(e) {
    ftomas === false ? STomas(true) : STomas(false);
  }
  //-----------
  //-----------torta*--------------
  function onTorta(e) {
    ftorta === false ? STorta(true) : STorta(false);
  }
  //-----------
  //-----------troy*--------------
  function onTroy(e) {
    ftroy === false ? STroy(true) : STroy(false);
  }
  //-----------

  return (
    <div className="  bg-[#881136] w-screen h-full">
      <NavBar />
      <motion.div
        className=" bg-green-600 h-full w-full flex lg:flex-row flex-col items-center justify-between"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 0 }}
        // exit={{ opacity: 0 }}
      >
        <div className="mt-20 lg:ml-10 ">
          <img
            src={campo}
            alt=""
            className="shadow-lg rounded-lg lg:w-[600px]"
          />
        </div>

        <div className=" w-full grid grid-cols-5 gap-1 m-2">
          {/*--------------------- troy------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onTroy(e)}
                  src={troy}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={ftroy} position="center" onClose={onTroy}>
              <Modal.Header>
                <img src={troy} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- torta------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onTorta(e)}
                  src={torta}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={ftorta} position="center" onClose={onTorta}>
              <Modal.Header>
                <img src={torta} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- tomas------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onTomas(e)}
                  src={tomas}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={ftomas} position="center" onClose={onTomas}>
              <Modal.Header>
                <img src={tomas} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- tabla------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onTabla(e)}
                  src={tabla}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={ftabla} position="center" onClose={onTabla}>
              <Modal.Header>
                <img src={tabla} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- POLINO------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onPolino(e)}
                  src={polino}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={fpolino} position="center" onClose={onPolino}>
              <Modal.Header>
                <img src={polino} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- pipoleg------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onPipoLeg(e)}
                  src={pipoleg}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={fpipoleg} position="center" onClose={onPipoLeg}>
              <Modal.Header>
                <img src={pipoleg} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}

          {/*--------------------- pipo------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onPipo(e)}
                  src={pipo}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={fpipo} position="center" onClose={onPipo}>
              <Modal.Header>
                <img src={pipo} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- nahuel------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onNahu(e)}
                  src={nahuel}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={fnahuel} position="center" onClose={onNahu}>
              <Modal.Header>
                <img src={nahuel} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- manon------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onMano(e)}
                  src={mano}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={fmano} position="center" onClose={onMano}>
              <Modal.Header>
                <img src={mano} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- lucho------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onLucho(e)}
                  src={lucho}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={flucho} position="center" onClose={onLucho}>
              <Modal.Header>
                <img src={lucho} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}

          {/*--------------------- lede------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onLede(e)}
                  src={lede}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={flede} position="center" onClose={onLede}>
              <Modal.Header>
                <img src={lede} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}

          {/*--------------------- larry------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onLarry(e)}
                  src={larry}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={flarry} position="center" onClose={onLarry}>
              <Modal.Header>
                <img src={larry} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- ivan------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onIvan(e)}
                  src={ivan}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={fivan} position="center" onClose={closeIvan}>
              <Modal.Header>
                <img src={ivan} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- gabi------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onClickGabi(e)}
                  src={gabi}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={showGabi} position="center" onClose={onCloseGabi}>
              <Modal.Header>
                <img src={gabi} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}

          {/*--------------------- facu------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={(e) => onFacu(e)}
                  src={facu}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={ffacu} position="center" onClose={closeFacu}>
              <Modal.Header>
                <img src={facu} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- FABIAN LEG------------------ */}
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              {" "}
              <motion.div
                drag
                dragControls={controls}
                // dragConstraints={constraintsRef}
                whileDrag={{ scale: 1 }}
                className="shadow-lg"
              >
                <img
                  onClick={onClickFabian}
                  src={fabian}
                  alt="js"
                  width="100px"
                  className="shadow-lg"
                />
              </motion.div>
            </div>
            <Modal show={ffabian} position="center" onClose={onCloseFabian}>
              <Modal.Header>
                <img src={fabian} alt="" />
              </Modal.Header>
            </Modal>
          </React.Fragment>
          {/* -------------------------------------------- */}
          {/*--------------------- chino------------------ */}

          <div className="flex flex-wrap gap-4">
            {" "}
            <motion.div
              drag
              dragControls={controls}
              // dragConstraints={constraintsRef}
              whileDrag={{ scale: 1 }}
              className="shadow-lg"
            >
              <img
                onClick={onChino}
                src={chini}
                alt="js"
                width="100px"
                className="shadow-lg"
              />
            </motion.div>
          </div>
          <Modal show={fchini} position="center" onClose={onCloseChino}>
            <Modal.Header>
              {" "}
              <img src={chini} alt="" />
            </Modal.Header>
          </Modal>

          {/* -------------------------------------------- */}
        </div>
      </motion.div>
    </div>
  );
}

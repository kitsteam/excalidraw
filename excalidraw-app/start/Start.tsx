import React, { useEffect } from "react";
import DialogActionButton from "../../src/components/DialogActionButton";
import { KitsLastUsedState } from "../../src/data/types";
import { loadLastUsedRoomsToLocalStorage } from "../data/localStorage";
import "./start.scss"

const Start: React.FC = () => {
  const [windowInnerHeight, setWindowInnerHeight] = React.useState(window.innerHeight);

  const handleResize = () => {
    setWindowInnerHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const rooms = loadLastUsedRoomsToLocalStorage();
  const roomsAsList = () => {
    return rooms.map((r: KitsLastUsedState, i: number) => {
      const date = new Date(r.createdAt);
      const dateString = `${date?.getDate()}.${date?.getMonth()+1}.${date?.getFullYear()} um ${date?.getHours()}:${date?.getMinutes()} Uhr`
      return (
        <li key={`room-${i}`}>
          <a href={r.link}>{`Raum vom ${dateString}`}</a>
        </li>
      )
    })
  }

  return (
    <div>
      <div className="row kits-start">
          <div className="d-none d-lg-block">
            <div
              className="col-lg-6 kits-content-left gradient"
              style={{height: `${windowInnerHeight}px`}}
            >
              <img src="/excalidraw-logo-white.svg" alt="Excalidraw Logo" />
              <div className="kits-footer-wrapper-left">
                <div className="kits-footer-text kits-footer-text-left">

                  <a className="padding-8 font-white" href="https://github.com/kitsteam/excalidraw"
                    >GitHub</a
                  >
                  <a className="padding-8 font-white" href="https://kits.blog/impressum/">Impressum</a>
                  <a className="padding-8 font-white" href="https://kits.blog/datenschutzerklaerung/"
                    >Datenschutz</a
                  >
                </div>
              </div>
            
            </div>
          </div>
          <div
            className="kits-content-right col-lg-6 col-xs-12"
            style={{minHeight: `${windowInnerHeight}px`}}
          >
            <div className="header">
              <a href="https://kits.blog/tools/"
                        ><img src="/kits-logo.svg"  alt="Kits Logo"
                      /></a>
            </div>
            <div className="kits-container">

              <a href="/"><h1 className="fw-bold">Excalidraw</h1></a>

              <ul className="list-border kits-list">
                <li>Zeichne im Sketchnote-Stil!</li>
                <li>Füge Bilder hinzu!</li>
                <li>Arbeite im Team!</li>
              </ul>

              <DialogActionButton
                label="Zeichnung erstellen"
                className="kits-primary-button"
                onClick={() => {
                  window.location.href = "/app"
                }}
              >
              </DialogActionButton>

              <div className="mt-10">
                <small className="muted">
                  Dieses Tool darf nur in Bildungskontexten genutzt werden. Die Eingabe personenbezogener Daten ist
                  nicht gestattet.<br />
                  <br />
                  Achtung: Erstellte Multi-User-Räume werden nach 30 Tagen gelöscht.
                </small>
              </div>

              { rooms.length > 0 &&
                <div>
                  <h5>Zuletzt erstellte Räume:</h5>
                  <ul id="start-rooms" className="muted list-inline">
                    {roomsAsList()}
                  </ul>
                </div>
              }
            </div>
        </div>
      </div>
      <div
          className="kits-mobile-footer-wrapper d-lg-none"
        >
          <div className="gradient kits-footer-container">
            <div className="kits-footer-logo">
              <img src="/excalidraw-logo-white.svg" alt="Excalidraw Logo" />
            </div>
            <div className="kits-footer-text kits-footer-text-right">
              <a className="padding-8 font-white" href="https://github.com/kitsteam/excalidraw"
                >GitHub</a
              >
              <a className="padding-8 font-white" href="https://kits.blog/impressum/">Impressum</a>
              <a className="padding-8 font-white" href="https://kits.blog/datenschutzerklaerung/"
                >Datenschutz</a
              >
            </div>
          </div>
        </div>
    </div>
    )
}

export default Start;
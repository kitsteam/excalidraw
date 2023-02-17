import React from "react";
import "./InfoDialog.scss";
import { Dialog } from "./Dialog";
export const InfoDialog = ({ onClose }: { onClose?: () => void }) => {
  const handleClose = React.useCallback(() => {
    if (onClose) {
      localStorage.setItem("InfoDialogSeen", JSON.stringify(true));
      onClose();
    }
  }, [onClose]);
  return (
    <>
      <Dialog
        onCloseRequest={handleClose}
        title="Über Excalidraw"
        className={"InfoDialog"}
      >
        <div className="InfoDialog">
          Mit »Excalidraw« kannst du Vorgänge in einem Flussdiagramm
          veranschaulichen, kollaborativ Ideen in einem Brainstorming sammeln
          und Sketchnotes erstellen.
          <div className="kitsFooter">
            <a
              href="https://kits.blog/tools/"
              target="_blank"
              rel="noreferrer"
              title="Zurück zur Tools-Seite"
            >
              <img
                className="InfoDialogKitsLogo"
                alt="kits"
                src="./kits-logo.svg"
              />
            </a>

            <div className="InfoDialogLinks">
              <ul>
                <li>
                  <a
                    href="https://kits.blog/impressum/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="https://kits.blog/datenschutzerklaerung/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
            <div className="InfoDialogGithub">
              <img
                className="GithubLink"
                alt="github_logo.svg"
                src="./GitHub-Mark-32px.png"
              />
              <a
                href="https://github.com/kitsteam/excalidraw"
                rel="noreferrer"
                target="_blank"
              >
                Excalidraw
              </a>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

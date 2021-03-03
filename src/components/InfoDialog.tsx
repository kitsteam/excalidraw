import React from "react";
import "./InfoDialog.scss";
import { Dialog } from "./Dialog";
import Stack from "./Stack";
export const InfoDialog = ({ onClose }: { onClose?: () => void }) => {
  const handleClose = React.useCallback(() => {
    if (onClose) {
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
          <Stack.Col align="center">
            <Stack.Row>
              Mit »Excalidraw« kannst du Vorgänge in einem Flussdiagramm
              veranschaulichen, kollaborativ Ideen in einem Brainstorming
              sammeln und Sketchnotes erstellen.
            </Stack.Row>
            <Stack.Row>
              <button
                type="button"
                className="infoDialogButton"
                onClick={() => handleClose()}
                title="Weiter"
              >
                Weiter
              </button>
            </Stack.Row>
            <Stack.Row>
              <div>
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
              </div>
            </Stack.Row>
            <Stack.Row>
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
            </Stack.Row>
            <Stack.Row>
              <div className="InfoDialogGitlab">
                <img
                  className="GitlabLink"
                  alt="gitlab_logo.svg"
                  src="./gitlab-logo.svg"
                />
                <a
                  href="https://gitlab.com/kits-apps/excalidraw"
                  rel="noreferrer"
                  target="_blank"
                >
                  Excalidraw
                </a>
              </div>
            </Stack.Row>
          </Stack.Col>
        </div>
      </Dialog>
    </>
  );
};

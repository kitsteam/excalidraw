import React from "react";
import "./InfoDialog.scss";
import { Dialog } from "./Dialog";
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
        <div>
          <span>
            Mit »Excalidraw« kannst du Vorgänge in einem Flussdiagramm
            veranschaulichen, kollaborativ Ideen in einem Brainstorming sammeln
            und Sketchnotes erstellen.
          </span>
          <br />
          <button
            type="button"
            className="zIndexButton"
            onClick={() => handleClose()}
            title="Weiter"
          >
            Weiter
          </button>
        </div>
      </Dialog>
    </>
  );
};

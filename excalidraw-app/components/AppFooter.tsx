import React from "react";
import { Footer } from "@excalidraw/excalidraw/index";
import { EncryptedIcon } from "./EncryptedIcon";
import { DebugFooter, isVisualDebuggerEnabled } from "./DebugCanvas";
export const AppFooter = React.memo(
  ({ onChange }: { onChange: () => void }) => {
    return (
      <Footer>
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          {isVisualDebuggerEnabled() && <DebugFooter onChange={onChange} />}
          <EncryptedIcon />
        </div>
      </Footer>
    );
  });

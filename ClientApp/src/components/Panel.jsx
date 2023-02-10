import { useState } from "react";
import { createPortal } from "react-dom";
import PanelContent from "./PanelContent";
import { Button } from "react-bootstrap";

export default function Panel({ variant, text }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant={variant} onClick={() => setShowModal(true)}>
        {text}
      </Button>

      {showModal &&
        createPortal(
          <PanelContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

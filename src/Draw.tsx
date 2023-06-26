import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/editor.css";
import "@tldraw/tldraw/ui.css";

export default function Draw() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
      }}
    >
      <Tldraw />
    </div>
  );
}

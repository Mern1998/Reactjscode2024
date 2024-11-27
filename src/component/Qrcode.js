// import { QrCode } from "@mui/icons-material"
import QRCode from "qrcode.react";
import { useState } from "react";
export default function QRCodeGenerator() {
  const [Qrcod, setQrcod] = useState("");
  const [input, setInput] = useState("");

  function handleGenerate() {
    setQrcod(input);
  }
  return (
    <>
      <h2>Qr code </h2>
      <div>
        <input
          type="text"
          name="qr-code"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerate}
          type="button"
        >
          Generator
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <QRCode id="qr" value={Qrcod} size={200} bgColor="#fff" />
      </div>
    </>
  );
}

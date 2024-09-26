"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Grid from "./Grid";

export default function Home() {
  const [value, setValue] = useState("");

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const handleChange = useCallback((e) => {
    let value = e.target.value;

    if (isJsonString(value)) {
      let parsed = JSON.parse(value);
      setValue(parsed);
    } else {
      alert("Put a valid JSON...");
      setValue("");
    }
  }, []);

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ margin: "auto", marginBottom: "20px", marginTop: "20px" }}>
        Put the json here:
      </h1>
      <input
        type="textarea"
        value={value}
        placeholder="JSON..."
        onChange={handleChange}
        ref={ref}
        defaultValue=""
        style={{
          width: 500,
          height: 50,
          margin: "auto",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />
      <Grid gridData={value.Entity} />
    </div>
  );
}

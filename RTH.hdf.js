export function RTH_HDF_VIEW(blob){
    return {
        sizeMB: blob ? (blob.size / 1024 / 1024).toFixed(2) : 0,
        type: "HDF‑Chunk",
        status: blob ? "OK" : "Fehlt"
    };
}

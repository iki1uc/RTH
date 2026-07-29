export function RTH_PQ_MONITOR(blob){
    return {
        loaded: !!blob,
        approxGB: blob ? (blob.size / 1024 / 1024 / 1024).toFixed(2) : 0,
        status: blob ? "OK" : "Fehlt"
    };
}

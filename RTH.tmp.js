export function RTH_TMP_MATRIX(blob){
    return {
        loaded: !!blob,
        grid: "9×9",
        status: blob ? "OK" : "Fehlt"
    };
}

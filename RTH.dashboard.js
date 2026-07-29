export function RTH_DASHBOARD(pq, tmp, albertus){
    return {
        pq: pq ? "PQ OK" : "PQ fehlt",
        tmp: tmp ? "TMP OK" : "TMP fehlt",
        albertus: albertus ? "Albertus OK" : "Albertus fehlt",
        timestamp: Date.now(),
        station: "RTH – Runtime Transfer Hub"
    };
}

export function RTH_FUSION(team, hh, iki){
    return {
        team: team ? "TEAM OK" : "TEAM fehlt",
        hh: hh ? "HH OK" : "HH fehlt",
        iki: iki ? "iki1uc OK" : "iki1uc fehlt",
        fusion: team && hh && iki ? "AKTIV" : "INAKTIV"
    };
}
1

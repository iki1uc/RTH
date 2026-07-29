# RTH – Runtime Transfer Hub · iki1uc

## Zweck
RTH ist die zentrale Daten‑Transfer‑Station im iki1uc‑System.  
Sie verbindet PQ‑Storage (80 GB), TMP‑Matrix (9×9.tmp), HDF‑Chunks (6.8 GB)  
und extrahiert interne Datensätze wie „Albertus“.

RTH ist eine Stabilisationsachse (ANKER‑S01) und dient als:

- PQ‑Loader
- TMP‑Matrix‑Visualizer
- HDF‑Viewer
- Albertus‑Extractor
- Runtime‑Transfer‑Hub
- Fusion‑Station für TEAM + HH + iki1uc

---

## Module

### RTH.loader.js  
Chunk‑Loader für große Dateien.

### RTH.dashboard.js  
Zentrale Übersicht über alle RTH‑Daten.

### RTH.hdf.js  
Viewer für HDF‑Chunks.

### RTH.tmp.js  
TMP‑Matrix‑Visualizer (9×9).

### RTH.pq.js  
PQ‑Storage‑Monitor (80 GB).

### RTH.albertus.js  
Albertus‑Datensatz‑Extractor.

### RTH.fusion.js  
Fusion‑Status zwischen TEAM, HH und iki1uc.

---

## Beispiel

```js
const pq = await RTH_LOAD("d:/tmp/PQ.hdf");
const tmp9 = await RTH_LOAD("9x9.tmp");
const albertus = await RTH_LOAD("Albertus.hdf");

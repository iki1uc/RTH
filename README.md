# RTH – Runtime Transfer Hub · iki1uc

## Zweck
RTH ist die zentrale Station für große Datenmengen im iki1uc‑System.  
Sie verbindet PQ‑Storage (80 GB), TMP‑Matrix (9×9.tmp), HDF‑Chunks (6.8 GB)  
und extrahiert interne Datensätze wie „Albertus“.

RTH ist eine Stabilisationsachse (ANKER‑S01) und dient als:

- PQ‑Loader
- TMP‑Matrix‑Reader
- HDF‑Chunk‑Sequencer
- Albertus‑Extractor
- Runtime‑Transfer‑Hub zwischen PQ ↔ TMP ↔ NET ↔ HUB

---

## Module

### PQ‑Storage (d:/tmp)
Große Datenmengen (bis 80 GB), chunked lesbar über RTH.

### TMP‑Matrix (9×9.tmp)
TMP‑Grid für schnelle Runtime‑Operationen.

### HDF‑Chunks (6.8 GB)
Segmentierte Datenblöcke, sequenziell ladbar.

### Albertus
Interner Datensatz innerhalb der HDF‑Chunks.

---

## RTH Loader

RTH nutzt einen Chunk‑Reader, um große Dateien ohne Speicherüberlauf zu laden:

```js
export async function RTH_LOAD(path){
    const response = await fetch(path);
    if(!response.ok) return null;

    const reader = response.body.getReader();
    let chunks = [];
    let done = false;

    while(!done){
        const {value, done: d} = await reader.read();
        done = d;
        if(value) chunks

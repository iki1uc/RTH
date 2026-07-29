export async function RTH_LOAD(path){
    const response = await fetch(path);
    if(!response.ok) return null;

    const reader = response.body.getReader();
    let chunks = [];
    let done = false;

    while(!done){
        const {value, done: d} = await reader.read();
        done = d;
        if(value) chunks.push(value);
    }

    return new Blob(chunks);
}

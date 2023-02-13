const address = "http://127.0.0.1:3000";


export async function fetchRead(extension){
    const options = {method:'GET'};

    return await fetch(address+extension, options)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));

}

export async function fetchReadSingleUser(extension){
    const options = {method:'GET'};

    return await fetch(address+extension, options)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));

}

export async function fetchCreate(extension, data){
    const options = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return await fetch(address+extension, options)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));

}

export async function fetchUpdate(extension, data){
    const options = {
        method:'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return await fetch(address+extension, options)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));

}

export async function fetchDelete(extension){
    const options = {method:'DELETE'};

    return await fetch(address+extension, options)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));

}

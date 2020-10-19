export async function requestGetPeople() {
    const response = await fetch('/people')

    const responseData = await response.json();

    if (response.status >= 400) {
        throw new Error(responseData.errors);
    }
    return responseData;
}

export async function requestGetPerson(id) {
    const response = await fetch(`/people/${id}`);
    const responseData = await response.json();

    if (response.status >= 400) {
        throw new Error(responseData.errors);
    }
    return responseData;
}

export async function requestCreatePersonSaga({firstName, lastName, age}) {
    const response = await fetch('/people', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName, lastName, age}),
    })

    const responseData = await response.json();

    if (response.status >= 400) {
        throw new Error(responseData.errors);
    }
    return responseData;
}
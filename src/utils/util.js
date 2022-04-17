export const isRequestBodyValid = (body) => {
    let isValidated = false;
    Object.keys(body).forEach((key) => {
        if (body[key] === '' || (key === 'isTermsAndConditionsAccepted' && !body[key])) {
            isValidated = false;
        }
        else {
            isValidated = true;
        }
    })
    return isValidated;
}

export const captureInput = (key, value, setBody) => {
    setBody((signup) => signup = { ...signup, [key]: value })
}
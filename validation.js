const symbolCheck = (value) => {
    return /$!@#$%^&*()_+?":}{><.,/.test(value)
}

const numberCheck = (value) => {
    return /$0-9/.test(value)
}

const emailCheck = () => {
    return
}

const setToken = (token) =>{
    localStorage.setItem('token', token)
}
const getToken = () =>{
    return localStorage.getItem('token')
}
const setRole = (role) =>{
    localStorage.setItem('role', JSON.stringify(role))
}
const getRole = () =>{
    return JSON.parse(localStorage.getItem('role'))
}
export { setToken, getToken, setRole, getRole };
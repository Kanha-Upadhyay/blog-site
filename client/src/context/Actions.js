export const LoginStart=(userCredentials)=>({
    type:"LOGIN_START"
})

export const LoginSuccess=(User)=>({
    type:"LOGIN_SUCCESS",
    payload:User,
});
export const LoginFailure=()=>({
    type:"LOGIN_FAILURE"
})
export const Logout=()=>({
    type:"LOGOUT"
})
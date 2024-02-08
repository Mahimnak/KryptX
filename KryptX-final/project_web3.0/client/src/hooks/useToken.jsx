const useToken=()=>{
    const token = localStorage.getItem("token");

    if(!token){
        return null;
    }
    return token;

}

export default useToken;
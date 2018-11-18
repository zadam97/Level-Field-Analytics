const initialState = {
    blur: 0,
}
const authBlur = (state = initialState, action) => {
    switch(action.type){
        case 'BLUR':
         return {blur: 5}
        case 'unBLUR' :
         return  { blur: 0}
    }
    return state
}

export default authBlur

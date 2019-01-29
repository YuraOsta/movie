function validationEmail(input){
    let isValid ={
        valid: true,
        error: false
    }
    const val = input.current.value;
    if(!val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      isValid = {
          valid: false,
          error: 'Введіть коректну поштову адресу'
      }  
    }
    return isValid;
}
function validationPassword(input){
    let isValid ={
        valid: true,
        error: false
    }
    const val = input.current.value;
    const letterType = checkNumbers(val);
    const maxLength = 6
    if(val.length <= maxLength){
      isValid = {
          valid: false,
          error: `Пароль має містити більше ${maxLength} симолів.`
      }  
    }else if(!letterType.number || !letterType.letter){
        isValid = {
            valid: false,
            error: 'Пароль має містити символи і цифри.'
        }    
    }
    return isValid;
}
function checkNumbers(val){
    const arrVal = val.split('');
    const elemsType = {
        number: false,
        letter: false
    }
    for(let i = 0, l = arrVal.length; i <= l; i++ ){
        const valEl = arrVal[i];
        const num = parseInt(valEl);
        if(Number.isInteger(num) && !elemsType.number){
            elemsType.number = true;
        }else if(typeof valEl === 'string' && !elemsType.letter){
            elemsType.letter = true;
        }
    }
    return elemsType;
}
export function checkInputValid(input){
    const inputType = input.current.type;
    console.log(input)
    switch (inputType) {
        case 'email':
            return validationEmail(input);
        case 'password':
            return validationPassword(input);
        default:
            break;
    }
}


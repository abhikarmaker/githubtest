function fnRequired(arg){
    if(arg.value == null | arg.value == ""){
        arg.focus();
        return false;
    }
    else
    return true;
}
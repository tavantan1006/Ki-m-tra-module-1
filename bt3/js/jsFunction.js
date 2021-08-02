let arrayCharacter = ['a','o','e','u','i'];
function check (){
    let stringA = document.getElementById("stringFind").value;
    let count = 0;
    for (let i = 0; i < stringA.length; i++) {
        for (let j = 0; j < arrayCharacter.length; j++) {
            if (stringA[i].toUpperCase() == arrayCharacter[j].toUpperCase()){
                count++;
            }
        }
    }
    if (count == 0){
        document.getElementById("result").innerText = "Chuỗi bạn nhập vào không chứa ký tự nguyên âm !!";
    }else {
        document.getElementById("result").innerText = "Chuỗi bạn nhập vào có chứa "+count+" ký tự nguyên âm !!";
    }
}
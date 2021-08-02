let arrayA = new Array(1,2,3,4,5,6,7,0);
document.getElementById("arrayA").innerHTML = "arrayA = ["+arrayA+"]";
function check (){
    let check = false;
    let numberFind = +document.getElementById("numberFind").value;
    let position = 0;
    for (let i = 0; i < arrayA.length; i++) {
        if(arrayA[i] == numberFind){
            check = true;
            position = i;
            break;
        }
    }
    if (check){
        document.getElementById("result").innerText = "Số nhập vào nằm ở vị trí thứ :  "+position +" trong mảng arrayA["+position+"] = "+numberFind;
    }else {
        document.getElementById("result").innerText = "Số nhập vào không nằm trong mảng !!"
    }
}
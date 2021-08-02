function returnResult(){
    let a = +document.getElementById("thamSoA").value;
    let b = +document.getElementById("thamSoB").value;
    if (a == 0 && b != 0){
        document.getElementById("result").innerText = "Phương trình vô nghiệm ! ";
    }else if (a == 0 && b== 0){
        document.getElementById("result").innerText = "Phương trình vô số nghiệm !!";
    }else{
        document.getElementById("result").innerText = "Nghiệm phương trình là : "+(-b/a);
    }
}
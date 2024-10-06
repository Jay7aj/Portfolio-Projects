function showMoreInfo(){
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === "none"){
        moreInfo.style.display = "block";
    }else{
        moreInfo.style.display = "none";
    }
    
}
const moreBttn = document.getElementById("more");

moreBttn.addEventListener('click', showMoreInfo);
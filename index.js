function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const rndNum = randomNumGen(1,6);
var firstImgSrc = "./images/dice"+rndNum+".png";
document.querySelector("img.img1").setAttribute("src",firstImgSrc);

const rndNum2 = randomNumGen(1,6);
var secImgSrc = "./images/dice"+rndNum2+".png";
document.querySelector("img.img2").setAttribute("src",secImgSrc);

if(rndNum > rndNum2)
{
    document.querySelector("h1").innerHTML="Winner - PLAYER-1";
}
else if(rndNum2 > rndNum)
{
    document.querySelector("h1").innerHTML="Winner - PLAYER-2";
}
else{
    document.querySelector("h1").innerHTML="Oh! It was a Draw";
}
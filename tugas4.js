var rendi_1 = 60
var sarah_2 = 90
var jainal_3 = 80

if (rendi_1>sarah_2 && rendi_1>jainal_3 && sarah_2>jainal_3){
    console.log("Rendi adalah siswa tergemuk pertama, kedua adalah sarah, dan yang ketiga adalah jainal");
}
else if(rendi_1>sarah_2 && rendi_1>jainal_3 && jainal_3>sarah_2){
    console.log("Rendi adalah siswa tergemuk pertama, kedua adalah jainal, dan yang ketiga adalah sarah");
}
else if(sarah_2>rendi_1 && sarah_2>jainal_3 && rendi_1>sarah_2){
    console.log("Sarah adalah siswa tergemuk pertama, kedia adalah jainal, dan yang ketiga adalah sarah");
}
else if(sarah_2>rendi_1 && sarah_2>jainal_3 && jainal_3>rendi_1){
    console.log("Sarah adalah siswa tergemuk pertama, kedua adalah jainal, dan yang ketiga adalah rendi");
}
else if(jainal_3>sarah_2 && jainal_3>rendi_1 && sarah_2>rendi_1){
    console.log("Jainal adalah siswa tergemuk pertama, kedua adalah sarah, dan yang ketiga adalah rendi");
}
else if(jainal_3>sarah_2 && jainal_3>rendi_1 && rendi_1>sarah_2){
    console.log("Jainal adalah siswa tergemuk pertama, kedia adalah rendi, dan yang ketiga adalah sarah");
}
else{
    console.log("gatau siapa yang paling gemuk");
}
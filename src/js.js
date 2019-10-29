temp=[[30, 75], [0, 50], [60, 150], [45, 50], [90, 120]]
a=0
i=1
//console.log(temp[1][1]) 50
while(i<temp.length){
if ((temp[0][0]>temp[i][0]&&temp[0][0]>temp[i][1])||(temp[0][1]<temp[i][0]&&temp[0][1]<temp[i][1])){
    console.log(temp[i])
//} else if() {}
}

i++
}


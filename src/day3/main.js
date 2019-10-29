function main(str) {
	// Your code begins here;
    let count =0
    let chaCount = 0
     let firstCha=0
     var temp_arr =[]
while(count<str.length){  
    if(str[firstCha]!==str[firstCha+1]) {
        temp_arr.push(chaCount+1)
        temp_arr.push(str[firstCha])
        str =str.substr(1)
        chaCount=0
    } else {
        chaCount++
        str =str.substr(1)
    }
}
   let a=temp_arr.join('')
    return a

}
module.exports = { main };



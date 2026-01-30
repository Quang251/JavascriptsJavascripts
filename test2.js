function generateSlug(str) {
    const cleanedStr = str.trim().toLowerCase().replace(' ', '-')
    const words = cleanedStr.replace(/[^a-z0-9]/g, '')
    let result =[]
    for(let i = 0; i < words.length; i++){
        if(words.length > 0){
            let newSen = words.slice[0];
            result.push(newSen)
            console.log(newSen);
            
        }
    }
    return result.join('-')
}
console.log(result);

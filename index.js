let Digital=()=>{
    setInterval(()=>{

    let Time = new Date();
    let Hours = String(Time.getHours()).padStart(2, '0');
    let Minutes = String(Time.getMinutes()).padStart(2, '0');
    let Seconds = String(Time.getSeconds()).padStart(2, '0');
    
    


    let show = document.querySelector("#show")
    show.innerHTML = `${Hours} : ${Minutes} : ${Seconds}`

},1000)
}
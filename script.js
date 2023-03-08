const spacecraftsurl =  ("https://isro.vercel.app/api/centres")
const spacecraftsapi=async ()=>{
    const spacecraftsrequest = await fetch(spacecraftsurl)
    const spacecraftsresponse= await spacecraftsrequest.json()
    const spacecraftsout= await spacecraftsresponse.centres
    console.log(spacecraftsout)
    spacecraftsout.forEach((element, index)=>{
        const spacecraftslist=document.getElementById("root")
        spacecraftslist.innerHTML+=`<div class="container">
        <div class="card number">ID- ${element.id}</div>
        <div class="card names">NAME :  ${element.name}</div>
        <div class="card states" >STATE : ${element.State} </div>
        <div class="card places">PLACE : ${element.Place} </div>
        </div>`
    })
}
spacecraftsapi()









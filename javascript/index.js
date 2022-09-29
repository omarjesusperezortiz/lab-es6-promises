// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
      getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
        getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        },(error) => console.log(error))  
      });
    }); 
  }); 
});

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  obtainInstruction('steak', 1)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    obtainInstruction('steak', 2)
    .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      obtainInstruction('steak', 3)
      .then( (step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
        obtainInstruction('steak', 4)
        .then( (step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
          obtainInstruction('steak', 5)
          .then( (step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
            obtainInstruction('steak', 6)
            .then( (step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
              document.querySelector("#steakImg").removeAttribute("hidden");
                obtainInstruction('steak', 7)
                .then( (step7) => {
                 document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                  document.querySelector("#steak").innerHTML += `<li>Ya esta listo!</li>`
               
              })
            })
          })
        })
      })
    })
  })
})

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here
  const paso1 = await obtainInstruction('broccoli',0);
  document.querySelector("#broccoli").innerHTML += `<li>${paso1}</li>`
  //console.log(paso1)
  const paso2 = await obtainInstruction('broccoli',1);
  document.querySelector("#broccoli").innerHTML += `<li>${paso2}</li>`
  const paso3 = await obtainInstruction('broccoli',2);
  document.querySelector("#broccoli").innerHTML += `<li>${paso3}</li>`
  const paso4 = await obtainInstruction('broccoli',3);
  document.querySelector("#broccoli").innerHTML += `<li>${paso4}</li>`
  const paso5 = await obtainInstruction('broccoli',4);
  document.querySelector("#broccoli").innerHTML += `<li>${paso5}</li>`
  const paso6 = await obtainInstruction('broccoli',5);
  document.querySelector("#broccoli").innerHTML += `<li>${paso6}</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden");
  const paso7 = await obtainInstruction('broccoli',6);
  document.querySelector("#broccoli").innerHTML += `<li>${paso7}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>El brocoli esta listo!</li>`
}
makeBroccoli()

//return new Await

// Bonus 2 - Promise all
// ...

const promesasPromesas = async() =>{

 const paso1 = obtainInstruction('brusselsSprouts',0)
 const paso2 = obtainInstruction('brusselsSprouts',1)
 const paso3 = obtainInstruction('brusselsSprouts',2)
 const paso4 = obtainInstruction('brusselsSprouts',3)
 const paso5 = obtainInstruction('brusselsSprouts',4)
 const paso6 = obtainInstruction('brusselsSprouts',5)
 const paso7 = obtainInstruction('brusselsSprouts',6)
 const paso8 = obtainInstruction('brusselsSprouts',7)

const [va1,va2,va3,va4,va5,va6,va7,va8] = await Promise.all([paso1,paso2,paso3,paso4,paso5,paso6,paso7,paso8])


document.querySelector("#brusselsSprouts").innerHTML += `<li>${va1}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va2}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va3}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va4}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va5}</li>`
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va6}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va7}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${va8}</li>`

}

promesasPromesas()

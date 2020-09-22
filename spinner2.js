let action = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r|   ", ]
const roll = function(rolls){
  let addtime = 100
  rolls.forEach(frame => {
    setTimeout(() => {  
      process.stdout.write(frame);
    }, addtime);
    addtime += 200}) 
  }
roll(action)
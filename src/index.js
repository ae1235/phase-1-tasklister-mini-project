document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    
    p = document.createElement('p');
    p.textContent = `${e.target['new-task-description'].value} `
    button = document.createElement('button')
    button.textContent = 'X'
    form.appendChild(p)
    p.appendChild(button)

    
    button.addEventListener('click', function(e){
      e.target.parentNode.remove()
    })
   
  })
  
  
  

});


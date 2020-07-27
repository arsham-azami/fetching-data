
  const fetchingText = url =>{

    fetch(url)
       .then(res => res.text())
       .then(data => document.getElementById('demoTwo').innerHTML=data)
      .catch(err => console.log(err))
  
    }
  
  const fetchingJson = () =>{
    fetch('data.json')
     .then(res => res.json())
     .then(data =>{ 
          console.log(data)
          let result ='<h2>users</h2>'
          data.forEach(user =>{
              result += `
                 <ul>
                   <li>id:${user.id}</li>
                   <li>name:${user.name}</li>
                   <li>age:${user.age}</li>
                   <li>city:${user.city}</li>
                 </ul>
              `
          })
          document.getElementById('demoOne').innerHTML=result
        })
     .catch(err => console.log(err))
 }


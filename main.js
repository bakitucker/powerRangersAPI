const button = document.querySelector('button').addEventListener('click', rangerInfo)




function rangerInfo(){

    const userName = document.querySelector("input").value;
  
    fetch(`/api/${userName}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector("h2").textContent = data.title
        document.querySelector("h4").textContent = data.description
        document.querySelector("img").src = data.url
        
      });

    }




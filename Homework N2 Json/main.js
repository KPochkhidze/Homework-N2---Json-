// დავალება N1.1 და 1.4 //

const getTodo = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const res = await response.json()

  console.log(res)

  res.forEach((todos)=> {
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    h2.textContent = todos.title
    document.body.append(h2)

    p.textContent = todos.completed
    document.body.append(p)
    
  });

}

getTodo();

// დავალება 1.2 //
// დააბრუნა სტატუსი 200/ დაბრუნებას დასჭირდა 94 წამი/გადმოწერა 24.3 კილობაიტის დატა //

// დავალება 1.3 //
// დაბრუნებული დატა წარმოადგენს მასივში არსებულ ბევრ ობიექტს //


// დავალება 2 //

const getRandomDogImage = async() => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random")
  const data = await response.json()

  console.log(data)

  const dogImage = document.createElement("img")
  dogImage.src = data.message;
  dogImage.alt = "Random dog Image"

  document.body.appendChild(dogImage)
}

getRandomDogImage();
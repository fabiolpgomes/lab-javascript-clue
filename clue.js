//Suspects
let mrGreen = {
    name: "Jacob Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  };
  
  let drOrchid = {
    name: "Doctor Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  };
  
  let profPlum ={
    name: "Victor Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  };
  
  let missScarlet = {
    name: "Kasandra Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  };
  
  let mrsPeacock = {
    name: "Eleanor Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  };
  
  let mrMustard = {
    name: "Jack Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  };
  
   
  //### Weapons
  let rope = {
  name: 'rope',
  weight: 10,
  };
  
  let knife = {
  name: 'knife',
  weight: 8,
  };
  
  let candlestick = {
  name: 'candlestick', 
  weight: 2,
  };
  
  let dumbbell = {
  name: 'dumbbell',
  weight: 30,
  };
  
  let poison = {
  name: 'poison',
  weight: 2,
  };
  
  let axe = {
  name: 'axe',
  weight: 15,
  };
  
  let bat = {
  name: 'bat',
  weight: 13,
  };
   
  let trophy = {
  name: 'trophy',
  weight: 25,
  };
  
  
  // ### Rooms
  let diningRoom = {
  name: "Dining Room",
  };
  
  let conservatory = {
  name: "Conservatory",
  };
    
  let kitchen = {
  name: "Kitchen",
  };
  
  let study = {
  name: "Study",  
  };
  
  let library = {
  name: "Library",
  };
  
  let billiardRoom = {
  name: "Billiard Room",
  };
  
  let lounge = {
  name: "Lounge",  
  };
  
  let ballRoom = {  
  name: "Ballroom",
  };
  
  let hall = {
  name: "Hall",
  };
  
  let spa = {
  name: "Spa",
  };
  
  let livingRoom = {
  name: "Living Room",
  };  
  
  let observatory = {
  name: "Observatory",
  };  
  
  let theater = {
  name: "Theater",
  };  
  
  let guestHouse = {
  name: "Guest House",
  };  
  
  let patio = {
  name: "Patio",
  }; 
  
  let rooms = {
    name: "Rooms",
  };
  
  
  
  let suspectsArray = [ 
    mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard
    ]
  let roomsArray = [
       diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio, rooms
  ]
  let weaponsArray = [ 
      rope, knife, candlestick, dumbbell, poison, axe, bat, trophy ]
  
  
  //Gets random item from each array and constructs the mystery
  function pickMystery(){
    let suspects = suspectsArray[Math.floor ( Math.random() * suspectsArray.length)]
    let rooms = roomsArray[Math.floor ( Math.random() * roomsArray.length)]
    let weapons = weaponsArray[Math.floor ( Math.random() * weaponsArray.length)]
    
    return {suspects,rooms,weapons}
    
    }
  
  let mystery = pickMystery()  //Who killed Mrs.Bady with what in which room....
  
  showArrays(suspectsArray) 
  showArrays(weaponsArray)
  showArrays(roomsArray)
  //loops though all of our arrays and shows eachItem's name
  
  function showArrays(arr){
    console.log(arr)
    arr.forEach(function(eachItem){
      document.body.innerHTML += `<li>${eachItem.name}</li>`
    })
  }
  
  document.querySelector("button").onclick = guess;
  
  function guess(){
    console.log("guess")
    console.log(
      mystery.suspects.name, 
      mystery.rooms.name, 
      mystery.weapons.name)
  
  let guessedSuspect = document.querySelector('#suspect').value 
  let guessedRoom = document.querySelector('#room').value  
  let guessedWeapon = document.querySelector('#weapon').value
  console.log(guessedSuspect,guessedRoom,guessedWeapon)
    if(
        guessedSuspect === mystery.suspects.name 
       && guessedRoom === mystery.rooms.name 
       && guessedWeapon === mystery.weapons.name)
    {
        alert("You Guessed Right. You WIN!!!")
    } else {
        alert("You guessed wrong, you LOOSE!")
        alert(mystery.suspects.name + ' Killed Mrs.Boddy in the ' + mystery.rooms.name + ' with the ' + mystery.weapons.name)
            }
    
    document.body.innerHTML = `<img src=${mystery.suspects.image} />`
    
      }
  
  
  
  
  
  //console.log(
  //  mystery.suspects.name, 
  //  mystery.rooms.name, 
  //  mystery.weapons.name)
  
  
  
  // Math.floor ( Math.random() * 5) //Random number between 0 and 5
  
  
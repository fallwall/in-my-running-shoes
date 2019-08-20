# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username:"luis", 
    name: "Luis Carbonel", 
    email: "luis.carbonel.gk@hotmail.com", 
    dob:"1996-08-05", 
    password: "luisluis"
  )

  User.create(
    username:"steve", 
    name: "Steve Kim", 
    email: "stevekim1337@gmail.com", 
    dob:"1995-02-09", 
    password: "stevesteve"
  )

  User.create(
    username:"ana", 
    name: "Ana Benedict", 
    email: "anabenedict12@gmail.com", 
    dob:"1991-02-12", 
    password: "anaanaana"
  )

  User.create(
    username:"carol", 
    name: "Carol Park", 
    email: "cjp2287@gmail.com", 
    dob:"1991-12-12", 
    password: "carolcarol"
  )

  User.create(
    username:"brian", 
    name: "Brian Weitz", 
    email: "brianevanweitz@gmail.com", 
    dob:"1991-12-12", 
    password: "brianbrian"
  )

  User.create(
    username:"tibby", 
    name: "Tibby Xu", 
    email: "fallwall19@gmail.com", 
    dob:"1991-12-25", 
    password: "tibbytibby"
  )

  User.create(
    username:"alex", 
    name: "Alex Curtin", 
    email: "alexhcurtin@gmail.com", 
    dob:"1981-03-24", 
    password: "alexalex"
  )

  Race.create(
    name: "Pasadena Half Marathon",
    date: "2019-08-05",
    description: "Alley cat style road race through the heart of old town Pasadena",
    location: "Pasadena, California, United States",
    organization: "Conquer",
    distance: 13.1,
    website: "https://conquerendurance.com",
    user_id: 1
  )

  Race.create(
    name: "Sleepy Hollow Half",
    date: "2019-03-28",
    description: "trail race with insane elevation",
    location: "Tarrytown, New York, United States",
    organization: "Rivertown Road Runner",
    distance: 13.1,
    website: "https://rivertown.com",
    user_id: 1
   )

  Race.create(
    name: "Sleepy Half",
    date: "2019-06-19",
    description: "West side high way haul",
    location: "New York, New York, United States",
    organization: "General Assembly",
    distance: 26.2,
    website: "https://generalassemb.ly",
    user_id: 1
  )

  Race.create(
    name: "Aspen Backcountry Marathon",
    date: "2019-08-10",
    description: "Altitude High",
    location: "Aspen, Colorado, United States",
    organization: "ADIDAS",
    distance: 26.2,
    website: "http://www.aspenbackcountrymarathon.com",
    user_id: 6
  )

  Race.create(
    name: "Skyline Marathon",
    date: "2019-09-08",
    description: "Scienic trail race",
    location: "Montana",
    organization: "n/a",
    distance: 26.2,
    website: "https://runtheskyline.com/",
    user_id: 6
  )

  Race.create(
    name: "Sleepy Half",
    date: "2019-06-19",
    description: "West side high way haul",
    location: "New York, NY, USA",
    organization: "General Assembly",
    distance: 5,
    website: "https://generalassemb.ly",
    user_id: 3
  )

  Note.create(     
    message: "First race. Yay.",
    finish_time: "1:50:00",
    bib_number: 2332,
    race_id: 2,
    user_id: 1
  )

  Note.create(
    message: "Best rainbow bagels post-race.",
    finish_time: "02:00:00",
    bib_number: 321,
    race_id: 1,
    user_id:2
  )
  
  Note.create(
    message: "would never do this again.",
    finish_time: "05:00:00",
    bib_number: 888,
    race_id: 3,
    user_id: 2
  )

  Note.create(
    message: "THUMBS DOWN. no course supply",
    finish_time: "05:00:00",
    bib_number: 29,
    race_id: 3,
    user_id: 2
  )

  Note.create(
    message: "A little routisty",
    finish_time: "01:20:00",
    bib_number: 109,
    race_id: 1,
    user_id: 6
  )


  Note.create(
    message: "Your glutes will burn",
    finish_time: "01:40:00",
    bib_number: 204,
    race_id: 2,
    user_id: 6
  )

  Note.create(
    message: "Your glutes will burn",
    finish_time: "01:40:00",
    bib_number: 99,
    race_id: 3,
    user_id: 6
  )

  Note.create(
    message: "I'm flawless",
    finish_time: "01:30:00",
    bib_number: 101,
    race_id: 3,
    user_id: 7
  )

  Note.create(
    message: "Easy Piecy",
    finish_time: "01:30:00",
    bib_number: 101,
    race_id: 1,
    user_id: 7
  )

  Note.create(
    message: "Hands down the best post race festival.",
    finish_time: "01:30:00",
    bib_number: 333,
    race_id: 2,
    user_id: 7
  )
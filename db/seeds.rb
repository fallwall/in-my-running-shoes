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
    password_digest: "luisluis"
  )

  Race.create(
    name: "Panda Half",
    date: "2019-08-05",
    description: "Alley cat style road race through the heart of Flatiron",
    city: "New York",
    state: "New York",
    country: "United States",
    organization: "General Assembly",
    distance: 13.1,
    website: "https://generalassemb.ly",
    user_id: 1
  )

  Race.create(
    name: "Sleepy Half",
    date: "2019-05-28",
    description: "trail race with insane elevation",
    city: "New York",
    state: "New York",
    country: "United States",
    organization: "General Assembly",
    distance: 13.1,
    website: "https://generalassemb.ly",
    user_id: 1
   )

  Race.create(
    name: "Sleepy Half",
    date: "2019-06-19",
    description: "West side high way haul",
    city: "New York",
    state: "New York",
    country: "United States",
    organization: "General Assembly",
    distance: 5,
    website: "https://generalassemb.ly",
    user_id: 1
  )

  Note.create(     
    message: "First race. Yay.",
    finish_time: 021500,
    bib_number: 2332,
    race_id: 2
  )

  Note.create(
    message: "Best rainbow bagels post-race.",
    finish_time: 020000,
    bib_number: 111,
    race_id: 1
  )
  
  Note.create(
    message: "Best rainbow bagels post-race.",
    finish_time: 005000,
    bib_number: 99,
    race_id: 3
  )
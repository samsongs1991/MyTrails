# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Demo user
User.create(email: "demo@gmail.com", password: 123456, fname: "Sam", lname: "Song", about_me: "I am the creator of this AllTrails clone site. I actually do love hiking and being outside with nature. My favorite hike is Bandera Mountain near Seattle, WA.", city: "Dallas", state: "TX")

trails = [
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
    { name: "", lat: "", lng: "", location: "", city: "", state: "", country: "", difficulty: "", length: "", gain: "", category: "" }, 
]

trails.each do |trail|
    Trail.create(trail)
end

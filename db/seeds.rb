# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {
    email:'hello@gmail.com',
    password:'123456'
    },
    {
    email:'cattinder@gmail.com',
    password:'555555'
    },
    {
    email:'facebook@gmail.com',
    password:'654321'
    }
]



apartments = [
    {
      user_id: 1,
      street: "444 B St.",
      city: "Developer",
      state: "CA",
      manager_name: "Luis",
      manager_contact_email: "luis@gmail.com",
      monthly_rental_price: 3321.9,
      number_of_bedrooms: 4,
      number_of_bathrooms: 2,
      allow_pets: false,
    },
    {
      user_id: 2,
      street: "3742 Hamill Avenue",
      city: "San Diego",
      state: "CA",
      manager_name: "Kira Beasley",
      manager_contact_email: "kbeasley@123.com",
      monthly_rental_price: 1850,
      number_of_bedrooms: 2,
      number_of_bathrooms: 1.5,
      allow_pets: true,
    },
    {
      user_id: 3,
      street: "814 Carriage Court",
      city: "San Diego",
      state: "CA",
      manager_name: "Shannon Atkinson",
      manager_contact_email: "satkinson@123.com",
      monthly_rental_price: 2230,
      number_of_bedrooms: 3,
      number_of_bathrooms: 2,
      allow_pets: true,
    },
    {
      user_id: 3,
      street: "3956 Poplar Avenue",
      city: "San Diego",
      state: "CA",
      manager_name: "Edith Farrell",
      manager_contact_email: "efarrell@123.com",
      monthly_rental_price: 1575,
      number_of_bedrooms: 1,
      number_of_bathrooms: 1.5,
      allow_pets: false,
    }
  ]

users.each do |user|
    User.create user
end

apartments.each do |apartment|
    user = User.find(apartment[:user_id])
    user.apartments.create(
        street:apartment[:street],
        city:apartment[:city],
        state:apartment[:state],
        manager_name:apartment[:manager_name],
        manager_contact_email:apartment[:manager_contact_email],
        monthly_rental_price:apartment[:monthly_rental_price],
        number_of_bedrooms:apartment[:number_of_bedrooms],
        number_of_bathrooms:apartment[:number_of_bathrooms],
        allow_pets:apartment[:allow_pets]
    )
end
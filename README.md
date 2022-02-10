# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Created app: $rails new apartment_app -d postgresql -T
- Connect database to rails: $db:create
- Added Rspec testing to rails: $bundle rspec-rails, $rails generate rspec:install
- Added Devise for authentication/Authorization: $bundle add devise, $rails generate devise:install
- $rails generate devise User
- Add React to Rails: $bundle add react-rails
- $rails webpacker:install:react
- $rails generate react:install
- $rails generate react:component App
- $rails generate controller Home
- $rails db:migrate
- Create a model for apartments $rails generate resource Apartment street:string city:string state:string manager_name:string manager_contact_email:string monthly_rental_price:float number_of_bedrooms:integer number_of_bathrooms:float allow_pets:boolean
- Create a one to many relationship with user(One) to apartment(Many) $has_many :apartments, $belongs_to :user
- Create a column for user_id(one to many relationship) $rails generate migration add_column_foreign_key_to_Apartment then do a $rails db:migrate
- Add mailer settings: $config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
- Passed props to the App component
- Add the react-routing: $ yarn add react-router-dom@5.3.0
- Code line to separate React and Rails routing, prevent conflict: $get '\*path', to: 'home#index', constraints: ->(request){ request.format.html? }
- Create a logout for device by get, config => initializers => devise.rb: $config.sign_out_via = :get
- Create view documents for devise routes: $rails generate devise:views

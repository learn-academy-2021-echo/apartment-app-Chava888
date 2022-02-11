class ApartmentsController < ApplicationController
    def index
        if user_signed_in?
        apartments = Apartment.all
        render json: apartments
       else
        render 'index.html.erb'
       end
        
 
    end
end

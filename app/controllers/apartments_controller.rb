class ApartmentsController < ApplicationController
    def index
        if user_signed_in?
        apartments = Apartment.all
        render json: apartments
       else
        render json: 'please log-in you are not authorized'
       end
    end
    def create
        if user_signed_in?
            user = User.find(current_user.id)
            apartment = user.apartment.create(apartment_params)
        else
            render json: 'please log-in you are not authorized'
        end
    end
    def new
        render json: 'Rails new method'
    end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager_name, :manager_contact_email, :monthly_rental_price, :number_of_bedrooms, :number_of_bathrooms, :allow_pets)
    end
end

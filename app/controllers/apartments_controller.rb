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
            user = User.find(params[:user_id])
            apartment = user.apartments.create(apartment_params)
            render json: apartment
        else
            render json: 'please log-in you are not authorized'
        end
    end
    def update
        if user_signed_in?
            user = User.find(params[:apartment][:user_id])
            apartment = user.apartments.find(params[:apartment][:id])
            apartment.update(apartment_params)
            render json: apartment
        else
            render json: 'please log-in you are not authorized'
        end
    end
    def destroy
        if user_signed_in?
            user = User.find(params[:user_id])
            apartment = user.apartments.find(params[:id])
            apartment.destroy
            render json: apartment
            else
            render json: 'please log-in you are not authorized'
        end
    end


    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager_name, :manager_contact_email, :monthly_rental_price, :number_of_bedrooms, :number_of_bathrooms, :allow_pets, :user_id)
    end
end

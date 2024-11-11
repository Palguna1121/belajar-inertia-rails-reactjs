class Auth::AuthController < ApplicationController

    def login
        render inertia: "Auth/Login"
    end

    def create
        render inertia: "Auth/Login"
    end

    def register
        render inertia: "Auth/Register"
    end

    def store
        render inertia: "Auth/Register"
    end

end

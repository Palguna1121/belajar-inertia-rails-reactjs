class InertiaExampleController < ApplicationController
  def index
    render inertia: "InertiaExample", props: {
      name: params.fetch(:name, "World")
    }
  end

  def home
    @user = {
      name: params.fetch(:name, "Palguna"),
      age: params.fetch(:age, 18)
    }
    render inertia: "Home", props: { user: @user }
  end

end

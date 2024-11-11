class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound do |exception|
    flash[:error] = "User not found"
    redirect_to user_index_url
  end
  
  def index
    @users = User.all
    # Menambahkan logika untuk mengambil flash messages jika ada
    flash_message = handle_flash
    props = flash_message.empty? ? { users: @users, csrfToken: form_authenticity_token } : { users: @users, flash: flash_message, csrfToken: form_authenticity_token }
    render inertia: "Users/Index", props: props
  end

  def create
    render inertia: "Users/Create", props: { csrfToken: form_authenticity_token }
  end

  def store
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "User created successfully."
      # Set handle_flash sebelum redirect
      redirect_to user_index_url
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render inertia: "Users/Create", props: { user: @user, flash: flash.to_hash }
    end
  end

  def edit
    @user = User.find(params[:id])
    render inertia: "Users/Edit", props: { user: @user, csrfToken: form_authenticity_token }
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = "User updated successfully."
      redirect_to action: :index
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render inertia: "Users/Edit", props: { user: @user, flash: flash.to_hash }
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      flash[:success] = "User deleted successfully."
      redirect_to action: :index
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render inertia: "Users/Index", props: { users: @users, flash: flash.to_hash }
    end
  end

  private

  def handle_flash
    # Cek apakah ada flash yang sudah diset
    flash_message = flash.to_hash
    # Hapus flash untuk menghindari pengiriman dua kali
    flash.clear
    flash_message
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

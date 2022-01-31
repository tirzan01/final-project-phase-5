class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(user_name: params[:user][:user_name])
    return render json: {err: 'Username or password incorrect'}, status: 422 unless user.present? && user.authenticate(params[:user][:password])
    session[:user_id] = user.id
    render json: user
  end

  def omniauth
    user = User.from_omniauth(request.env['omniauth.auth'])
    if user.valid?
      session[:user_id] = user.id
    end
  end

  def destroy
    session.delete(:user_id)
  end
end
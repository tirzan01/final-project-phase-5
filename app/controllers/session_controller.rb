class Api::V1::SessionsController < ApplicationController
  def create
    p '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    p '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    p '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    p '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    p '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    p '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
  end

  def omniauth
    user = User.from_omniauth(request.env['omniauth.auth'])
    if user.valid?
      session[:user_id] = user.id
    end
  end
end
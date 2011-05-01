require 'rubygems'
require 'sinatra'

get '/' do
  erb :home
end

post '/form' do
  require 'gibbon'
  gibbon = Gibbon::API.new('e0fd1a1da8203273f0d7374de97d47a8-us2')
  options = {
    :id            => '7577694b51',
    :email_address => "#{params[:email]}",
    :double_optin  => true,
    :send_welcome  => true,
  }
  gibbon.list_subscribe(options)
  redirect 'http://blog.expertnovice.com'
end

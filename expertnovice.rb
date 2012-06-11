require 'rubygems'
require 'sinatra'

get '/' do
  erb :home
end

post '/form' do
  require 'gibbon'
  gibbon = Gibbon.new('e0fd1a1da8203273f0d7374de97d47a8-us2')
  options = {
    :id            => '7577694b51',
    :email_address => "#{params[:email]}",
    :double_optin  => false,
    :send_welcome  => false,
  }
  gibbon.list_subscribe(options)
  redirect 'http://blog.expertnovice.com'
end

post '/dk_form' do
  require 'gibbon'
  gibbon = Gibbon.new('e0fd1a1da8203273f0d7374de97d47a8-us2')
  options = {
    :id            => '7577694b51',
    :email_address => "#{params[:email]}",
    :double_optin  => false,
    :send_welcome  => false,
  }
  gibbon.list_subscribe(options)
  redirect 'http://blog.dianakimball.com'
end

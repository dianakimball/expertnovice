require 'rubygems'
require 'sinatra'

configure :production do
end

get '/' do
  "Congratulations!
  You're running a Sinatra application on Heroku!"
end

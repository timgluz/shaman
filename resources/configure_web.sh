#!/bin/sh


# update nginx site config
sudo rm /etc/nginx/sites-enabled/default
sudo cp -f /vagrant_data/predictionio.conf /etc/nginx/sites-enabled/default

# copy web files into webfolder
sudo mkdir -p /var/www/predictionio/static
sudo cp -f /www_data/main.js /var/www/predictionio/static
sudo cp -f /www_data/repl.html /var/www/predictionio/static


# restart nginx
sudo service nginx restart

#!/bin/sh

sudo add-apt-repository ppa:nginx/stable
sudo apt-get update
sudo apt-get -y install nginx

service nginx status



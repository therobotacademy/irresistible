Run instruction
===============
git clone https://github.com/therobotacademy/irresistible Irresistible_API   # Fork of https://github.com/synedra/irresistible

$ cd Irresistible_API
$ npm install express
$ node webapp/server.js

#### Go to (book ad)   http://localhost:8080
#### Go to (front end) http://localhost:8080/demo/
#### Check the API:    http://localhost:8080/api/v1.0/toppings

Docker
======
docker run -p 80:3000 synedra/irresistible

#### Access in a separate image: $ docker exec -it <container ID or name> bash
docker run -i -t synedra/irresistible /bin/bash  # Access to bash

HTTP sniffer (Charles)
======================
# Charles is a http sniffer to inspect http traffic (requires a restart after 30 minutes if it is an unlicensed copy)
# https://www.charlesproxy.com/documentation/installation/apt-repository/
wget -q -O - https://www.charlesproxy.com/packages/apt/PublicKey | sudo apt-key add -
sudo sh -c 'echo deb https://www.charlesproxy.com/packages/apt/ charles-proxy main > /etc/apt/sources.list.d/charles.list'
sudo apt-get update
sudo apt-get install charles-proxy
# The package creates a "charles" command in /usr/bin, and adds Charles in your application menus in your window manager.

# For the browser to use charles
# https://www.charlesproxy.com/documentation/configuration/browser-and-system-configuration/
Mozilla Firefox Proxy Settings

# Configure Firefox to use your system proxy settings.
# In Firefox, go to Preferences > Advanced > Network > Connection Mozilla Firefox can now be configured to use
# the system proxy settings, which is usually preferable as Charles can control the system proxy settings on Windows and macOS
# without the need for installing an add-on.
# Check your Firefox proxy settings in Preferences > Advanced > Network > Connection
# and press the Settings button. Then choose "Use system proxy settings".

--------------------------------------------------------------------
Docker Demo Repository
==========================

Demonstration repository for Irresistible APIs book.

## Create your own github repository
Browse to http://www.github.com/synedra/irresistible.git
On github, Fork this repository to your own username

In a browser, browse to http://hub.docker.com
Register with DockerHub
In the menu bar, click on "Create... Automated Build"
You will be prompted to link with GitHub or Bitbucket
Connect Dockerhub account to Github account
Again, click on Create -> Automated Build
Select the repository that you just created - the fork of my repository
Click on "Start Build"
Under "Build details" the status of the build will appear - it can take minutes or hours to build the first container.

Or build locally using docker build:
- Check out your forked version of my repository to a local directory on your computer /path_to_checkout/ from github
- Change to the checkout directory. `cd /path_to_checkout/irresistible/`
- Setup terminal environment variables. `eval "$(docker-machine env default)"`
- Build docker image and tag it. `docker build --tag=<username>/docker-demo .` (where <username> is your docker account username)

To set the system up on Windows or Macintosh using Docker:
- Browse to http://www.docker.com/toolbox
- Install the docker client for your operating system
- Run the installed application
- After you have started up the Docker instance, note the IP address for your docker instance
  - Execute this command: # docker run -i -t -p 3000:80 --name docker-demo <username>/docker-demo /bin/bash
  - In the docker container, type # node toppings.js
Browse to the IP address for your docker instance in a web browser (docker-machine ip default)

There, you've created your own docker container.  All you need is the Dockerfile to tell the system how to build, and any changes you make to the git respository will kick off a new build in docker.

To kill the container docker-demo:
- Stop the node process inside the container. `cntl c`
- Detach from the docker-demo container. `cntl p + cntl q`
- Stop the docker-demo container from the host. `docker stop docker-demo`
- Delete the docker-demo container `docker rm docker-demo`
- Check that the container has been deleted `docker ps -a`

## License

Apache 2.0

## Copyright

Copyright Kirsten Hunter <synedra@gmail.com>

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

To set the system up on Windows or Macintosh using Docker:
- Browse to http://www.docker.com/toolbox
- Install the docker client for your operating system
- Run the installed application
- After you have started up the Docker instance, note the IP address for your docker instance
  - Execute this command: # docker run -i -t -p 80:3000 <username>/docker-demo /bin/bash
  - In the docker container, type # node toppings.js
Browse to the IP address for your docker instance in a web browser.

There, you've created your own docker container.  All you need is the Dockerfile to tell the system how to build, and any changes you make to the git respository will kick off a new build in docker.

## License

Apache 2.0

## Copyright

Copyright Kirsten Hunter <synedra@gmail.com>




Prequisites:

1. Install a git client
    Option 1: Command Line Client
        Download and configure git client using the instructions found here:
        https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
        https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

    Option 2: GUI Client
        Install Git Hub Desktop (or another graphical git client)
        https://desktop.github.com/

2. Install VS Code (or another HTML editor of your choosing)
    https://code.visualstudio.com/

3. Setup SSH keys for github access.
    https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

4. Install Jekyll (optional)
    It's useful to install Jekyll so that you can view the website changes you make before pushing them to github.
    https://jekyllrb.com/docs/


Clone the project for the troops website to your local machine
    1. Open a web browser to github.com and logon (using credentials provided)
    2. On the left hand side of the screen, click the "troop374/troop374.github.io" link under Top Repositories.
    3. Select the Code drop down buttion (in green) on the right hand side of the screen.
    4. In the drop down select the "SSH" option and then copy the url underneath it. This approach requries SSH keys to be configured on your machine.
    5. Open a terminal and change to a directory where you would like to save the project on your local machine. 
    5. Run the following command. The part after git clone is the information copied.
        
        git clone git@github.com:troop374/toop374.github.io.git

    6. Switch to the project directory by running the following command.

        cd troop374.github.io

    7. Start VS Code and open the project. If VS code is on your path you can run the follow command in the same terminal.

        code .

    8. You can now edit files for the website in vs code. 

        Project layout:
            _data - data that is used to build website pages in YAML format
            _includes - snippets of HTMl pages that are included in the HTML pages.
            _layouts - The overall layout of the website
            _sass - style sheet (https://jekyllrb.com/docs/configuration/sass/)
            _scripts - A script we use to start jekyll on our linux machine
            _assets/css - cascading style sheet (The site uses bootstrap 5.02 - https://getbootstrap.com/docs/4.4/getting-started/introduction/)
            _assets/img - site images are stored here
            _assets/img/eagles - photos of scouts who earned the rank of eagle scout
            _assets/js - javascript files
            _doc - documentation for the website. 
            <root dir> - location of HTML files. 
                       - CNAME a file which is required for mapping our domain name to github pages for hosting. Should not be deleted.
                       - _config.yml - Jekyll config file (https://jekyllrb.com/docs/structure/)
                       - .gitignore - git file which is used to ignore files you don't want to commit to the project
            _site - where jekyll generates the website to on your local machine


    9. After modifying the files, if you have installed jekyll you can view the website changes by running the following command:

        ./_scripts/start-jekyll.sh

        or 

        bundle exec jekyll serve

        The output of this command will be something like this:

        julien@CodeSageDesktop  ~/ws/troop374/toop374.github.io   gh-pages  ./_scripts/start-jekyll.sh 
        Configuration file: /home/rob/ws/troop374/toop374.github.io/_config.yml
        To use retry middleware with Faraday v2.0+, install `faraday-retry` gem
                    Source: /home/rob/ws/troop374/toop374.github.io
            Destination: /home/rob/ws/troop374/toop374.github.io/_site
        Incremental build: disabled. Enable with --incremental
            Generating... 
                        done in 0.827 seconds.
        Auto-regeneration: enabled for '/home/rob/ws/troop374/toop374.github.io'
            Server address: http://127.0.0.1:4000
        Server running... press ctrl-c to stop.


        You can then open a web browser to http://127.0.0.1:4000 to see the website.

    10. In the terminal open to the troop website directory and add the modified files to git and commit them.

        For example, here are the commands we ran to update the senior patrol leader on the about page.

        git add about.html
        git commit -m "update senior patrol leader"
        git push

        In a few minutes github will refresh the troop website with the changes from the latest commit.
        You can view the updated site by browsing to the troop's website at https://www.troop374raleigh.com/home.html.



    



# README: Getting Started with Troop374 Website Development

This guide provides step-by-step instructions to set up your development environment for the Troop374 website. It covers everything from installing necessary tools to running the website locally on your machine.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Install System Dependencies](#install-system-dependencies)
3. [Clone the Project Repository](#clone-the-project-repository)
4. [Set Up Ruby and Jekyll](#set-up-ruby-and-jekyll)
5. [Install Node.js and PostCSS (For `jekyll-postcss`)](#install-nodejs-and-postcss-for-jekyll-postcss)
6. [Project Structure](#project-structure)
7. [Running the Website Locally](#running-the-website-locally)
8. [Making Changes and Pushing to GitHub](#making-changes-and-pushing-to-github)
9. [Troubleshooting](#troubleshooting)
10. [Conclusion](#conclusion)

---

## Prerequisites

Before you begin, ensure you have the following:

1. **Git Client**

   - **Option 1: Command Line Client**

     Install Git using the instructions:

     - [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
     - [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

   - **Option 2: GUI Client**

     Install GitHub Desktop or another graphical Git client:

     - [GitHub Desktop](https://desktop.github.com/)

2. **Visual Studio Code (VS Code)**

   Download and install VS Code or another HTML editor of your choice:

   - [VS Code Download](https://code.visualstudio.com/)

3. **SSH Keys for GitHub Access**

   Set up SSH keys to securely connect to GitHub:

   - [Generating a New SSH Key and Adding it to the SSH Agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

4. **Ubuntu Operating System**

   This guide assumes you're using Ubuntu. Adjust commands accordingly if you're using a different OS.

---

## Install System Dependencies

Update your package list and install essential dependencies:

```bash
sudo apt update
sudo apt install -y git curl build-essential libssl-dev libreadline-dev zlib1g-dev \
                     libsqlite3-dev libffi-dev
```

---

## Clone the Project Repository

1. **Log In to GitHub**

   Open a web browser, navigate to [GitHub](https://github.com), and log in using your credentials.

2. **Navigate to the Repository**

   - Click on `troop374/troop374.github.io` under your repositories.

3. **Clone the Repository**

   - Click the green **Code** button.
   - Select the **SSH** option.
   - Copy the SSH URL (e.g., `git@github.com:troop374/troop374.github.io.git`).

4. **Open a Terminal**

   Navigate to the directory where you want to clone the project:

   ```bash
   cd ~/your/preferred/directory
   ```

5. **Clone the Repository**

   ```bash
   git clone git@github.com:troop374/troop374.github.io.git
   ```

6. **Navigate to the Project Directory**

   ```bash
   cd troop374.github.io
   ```

7. **Open the Project in VS Code**

   ```bash
   code .
   ```

---

## Set Up Ruby and Jekyll

### Step 1: Install rbenv and ruby-build

We'll use **rbenv** to manage Ruby versions.

```bash
# Clone rbenv repository
git clone https://github.com/rbenv/rbenv.git ~/.rbenv

# Add rbenv to PATH
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc

# Initialize rbenv
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc

# Install ruby-build as a plugin
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

### Step 2: Install Ruby 3.1.2

```bash
rbenv install 3.1.2
rbenv global 3.1.2
```

Verify the installation:

```bash
ruby -v
```

You should see something like:

```
ruby 3.1.2p0 (2021-04-05 revision 0) [x86_64-linux]
```

### Step 3: Install Bundler

Bundler helps manage gem dependencies.

```bash
gem install bundler
rbenv rehash
```

### Step 4: Install Jekyll and Gems

Ensure you're in the project directory:

```bash
cd /path/to/troop374.github.io
```

Install the required gems using Bundler:

```bash
bundle install
```

---

## Install Node.js and PostCSS (For `jekyll-postcss`)

The project uses `jekyll-postcss`, which requires Node.js and PostCSS.

### Step 1: Install Node.js and npm

```bash
sudo apt install -y nodejs npm
```

### Step 2: Install PostCSS and Autoprefixer Globally

```bash
sudo npm install -g postcss-cli autoprefixer
```

---

## Project Structure

Here's an overview of the project layout:

- **`_data`**: Data files in YAML format used to build website pages.
- **`_includes`**: HTML snippets included in other pages.
- **`_layouts`**: Overall layout templates of the website.
- **`_sass`**: Stylesheets using Sass ([Jekyll Sass Documentation](https://jekyllrb.com/docs/configuration/sass/)).
- **`_scripts`**: Scripts for starting Jekyll on a Linux machine.
- **`_assets`**
  - **`css`**: Cascading Style Sheets (the site uses [Bootstrap 5.0.2](https://getbootstrap.com/docs/5.0/getting-started/introduction/)).
  - **`img`**: Site images.
    - **`eagles`**: Photos of scouts who earned the rank of Eagle Scout.
  - **`js`**: JavaScript files.
- **`_doc`**: Documentation for the website.
- **Root Directory**:
  - HTML files.
  - **`CNAME`**: Required for mapping the custom domain to GitHub Pages.
  - **`_config.yml`**: Jekyll configuration file ([Jekyll Configuration](https://jekyllrb.com/docs/configuration/)).
  - **`.gitignore`**: Specifies files for Git to ignore.
- **`_site`**: The directory where Jekyll generates the website locally.

---

## Running the Website Locally

### Option 1: Using the Provided Script

If you're on a Linux machine:

```bash
./_scripts/start-jekyll.sh
```

### Option 2: Using Bundler Directly

```bash
bundle exec jekyll serve
```

**Expected Output:**

```
Configuration file: /path/to/troop374.github.io/_config.yml
To use retry middleware with Faraday v2.0+, install `faraday-retry` gem
            Source: /path/to/troop374.github.io
       Destination: /path/to/troop374.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in X.Y seconds.
 Auto-regeneration: enabled for '/path/to/troop374.github.io'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

### Viewing the Site

Open your web browser and navigate to <http://127.0.0.1:4000> to view the website locally.

---

## Making Changes and Pushing to GitHub

### Step 1: Modify Files

Use VS Code to edit the files you need. For example, to update the Senior Patrol Leader on the `about.html` page.

### Step 2: Add Changes to Git

In the terminal, ensure you're in the project directory:

```bash
cd /path/to/troop374.github.io
```

Add the modified files:

```bash
git add about.html
```

### Step 3: Commit Your Changes

```bash
git commit -m "Update Senior Patrol Leader"
```

### Step 4: Push Changes to GitHub

```bash
git push
```

### Step 5: Verify the Changes

After a few minutes, GitHub will deploy the changes. Visit <https://www.troop374raleigh.com/home.html> to see the updates.

---

## Troubleshooting

- **Dependency Conflicts**: If you encounter issues with gem versions, ensure that the `Gemfile` matches the required versions for `github-pages`.

- **Missing Node Modules**: If you get errors related to `postcss`, ensure `postcss-cli` and `autoprefixer` are installed globally.

- **Permission Issues**: Avoid using `sudo` with `gem` or `bundle` commands when using `rbenv`.

- **SSH Issues**: If cloning via SSH fails, make sure your SSH keys are correctly set up and added to your GitHub account.

---

## Conclusion

You've successfully set up your development environment for the Troop374 website. You can now edit, preview, and deploy changes to the site.

---

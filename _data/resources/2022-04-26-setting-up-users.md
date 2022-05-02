---
template: BlogPost
path: /resources/setting-up-users-for-server
date: 2022-04-26T12:00:00.137Z
title: Setting up user for the server
thumbnail: ""
metaDescription: Descriptions for setting up users for the server
---

We have the server at the lab. It runs on Ubuntu operating system and has
Python and CUDA installed. To use the server, you can ask and admin to create
the new user. Here is an instruction for creating the new user and setting up
`.bashrc` file.

## In gist

You have to do 2 things

1. Create new user from root account
2. Add python path to your `~/.bashrc` file

## Create a new user

We follow [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart)
for creating the new user. You have to do the following from the root:

```sh
adduser <yourteamname> # such as badcrew
```

Then fill the information needed such as password and basic
information. Now, you can use

```py
su <yourteamname>
```

to access the user or simply log-in to the new account if you're at the server.

## Add python path to your user

We only install Python from the root. You should **not**
try to install Python yourself from your own user. To add
Python environment variables to your user, you can open the
the `.bashrc` file from the root user. Copy Python environment to your user.
It should look something like the following:

```sh
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('<roothome>/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "<roothome>/anaconda3/etc/profile.d/conda.sh" ]; then
        . "<roothome>/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="<roothome>/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

`roothome` is the path to the root user. After you added
the path, you can now run the Python script and train your model.

## Training logistics

We only have a few GPUs running and we don't use any
queuing system for training the model. It is up on
your communication to discuss with your labmate and
arrange GPU usage. You can always use your notebook,
Google Colab and Kaggle notebook if you want to test out your
idea and code before running on the server.

## Accessing the server

There are multiple ways to access the server. One way is to use the **Jupyter notebook**.
If you are on the same network as the server. Run the following:

```py
jupyter notebook --ip * --port 8888 --no-browser
```

Then you use the notebook token and then access the browser via its IP address.
You can find IP address of the server by running

```
ifconfig
```

To get the current IP address of the server. Another way to access the notebook is
to use `ssh` to access the server (TBA).

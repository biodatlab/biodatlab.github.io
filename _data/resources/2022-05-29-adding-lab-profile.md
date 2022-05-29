---
template: BlogPost
path: /resources/adding-lab-profile
date: 2022-05-29T07:08:53.137Z
title: Adding profile to lab webpage
thumbnail: ""
metaDescription: Adding profile to lab webpage
---

We use host our lab website on Github at [github.com/biodatlab/biodatlab.github.io](https://github.com/biodatlab/biodatlab.github.io).
The website runs on [GatsbyJS](https://www.gatsbyjs.com/) template.
To add your profile, you can simply fork and clone the repository.
Then you can add yourself by adding a markdown file to `_data/people/<your_profile.md>` and adding
your profile image to `static/assets/people/<your_photo.png>`. That's it!

After adding your profile page and image, you can make the pull request back to the repository.
We use Github actions to build the page and put it into `gh-pages` branch.
Then, it will be accessible on [biodatlab.github.io](https://biodatlab.github.io/).

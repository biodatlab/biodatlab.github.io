# Lab website

Build with [gatsby-starter-delog](https://github.com/W3Layouts/gatsby-starter-delog).
You can run the website from the root of this repository as follows:

```sh
npm install
gatsby develop # see localhost:8000
```

## Structure

Information is located in `website` folder.

- `_data`
  - `blog` contains a list of markdown for blog posts
  - `people` contains a list of people in the lab
  - `resources` contains a list of resources at the lab
  - `publications.yml` is a YAML file for publications
  - `resources.yml` is a YAML file for tools and resources produced from the lab
- `src/pages` contains all the pages
- `site-meta-data.json` contains basic information for the site and landing page

## Contact Page

We use [EmailJS](https://www.emailjs.com/) for sending email in contact page. In this repository, we have a set of key-value pairs as an example in `.env.example`. To test functionality of the contact page, you will need an EmailJS account (a free one is fine) and setup three keys in `.env` file:

- Email services -- to link your email via SMTP
- Email templates -- to structure the email message
- Integration -- to get `User ID`

Then put these keys in `.env` file before running development.

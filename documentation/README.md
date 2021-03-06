# Specification

__*Project Codename Scuba-Noodle*__

##Concept 


###Main Functions 

Codename Scuba Noodle will be a web interface for users to collaborate
on a story a few paragraphs at a time. Each user will be able to create
a new story with a short description of the premise. That description is
posted to a public listing that orders them on popularity and newness.
Users may enter a blurb of up to a predefined amount of letters that
they think would be a good writing for the story, and they may also
enter blurbs to follow preceding blurbs. Users may also rate each blurb,
which is handled by a voting system, the exact score or each blurb is
hidden from users. Blurbs with similar ratings are placed near
each-other, with high ratings near the top, but with some randomization
that slightly changes the ordering for each user to prevent biasing.
After a predetermined amount of time, voting to finish a story is
opened, there will be a balanced method of determining how many positive
and negative votes will be required to keep a story alive or lock it as
finished. The user will be able to view stories that are in progress as
a concatenation of all connected blurbs, they may choose an alternate
blurb at any point which changes all children blurbs past that point,
but the highest rated blurb chain will be viewable with a hot-link “show
most popular storyline”.

Ancillary Functions

There will be the ability to make short comments in a tiered system that
display in a separate pane for each blurb, limited in length by a small
predetermined amount. Users can log in to preserve their blurb history,
as well as comments, and their popularity rating.

##Features 

###Supported Devices 

The project will contain an API such that access to content may be
extended by developers to any platform with Internet access.

Browser support for the main web-page at paracite.org will include:

- Chrome
- Firefox
- Internet Explorer (latest version only)

###Minimum System Requirements 

Web-page must not exceed memory use above 350MB.

Page must animate better than 20fps on hardware of **<to be determined>**.

###User Accounts 

Accounts may be verified by Facebook API

Account passwords and other credentials must be stored as their salted
hashed values

Accounts must store post history, comment history, and score

Accounts can be set as administrative

###Posting 

Users have the ability to create a new story thread

Users can post blurbs on threads

Users can vote on blurbs

Users can comment on blurbs in a tier system, meaning they can comment
on comments (like Reddit.com).

Users can vote a story as finished.

###Ordering and Sorting 

Blurbs are to be sorted based on a mathematical function of newness,
voting score, and a randomization factor. High scores will outweigh both
newness and randomization over time.

Actual scores are kept hidden, but a qualitative indicator (akin to
color or a progress bar) is presented to the user to show how “good” a
blurb is.

###GUI 

#### View From a Thread 

From the thread interface, there is a list of blurbs stacked oldest on
top newest on bottom within a scrolling box that takes up the largest
portion of the screen. There is an obviously placed link to go to the
latest portion of the story. If a story becomes larger than an amount
**<to be determined>** of lines then an area will become available as a
side bar on the left that allows for navigating pages similar to a PDF
reader. Each blurb may be selected, upon selecting a blurb a side bar on
the right populates with alternate blurbs for the user to select among
other blurbs for that branching point in the story.

Each blurb will have the following displayed near the top of it's
container: a rating indicator, the author.

Each blurb will have the following displayed near the bottom of it's
container: voting controls, a report button, and a comment button.

#### View From the Comments 

When the comment button is pressed a new floating window is created with
the comments for that blurb, clicking a new blurb comment button while
this window is still open will repopulate this window with the new
comments.

#### Main view 

A list of threads

A place to login or sign up

## Modules

As this is yet-to-be-determined, I will present two paths (Flask and
Node.js) with the understanding that other options are available. I 
will also list some alternative solutions in-line. 

### Flask (Python) Path

Flask is a light-weight web application framework written in Python. It is 
100% WSGI 1.0 compliant, modular in design, provides RESTful request
dispatching, and is extensively documented.

In this configuration, the server will run Ubuntu **<15.10 || version 
to be determined>**. The web-server will be NGINX, and the database server
will be SqlAlchemy. Front-end to database requests will be handled within Flask
via pluggable modules. Front-end technologies will include the standards
of HTML, CSS, JavaScript (including jQuery) and AngularJS for dynamic content.

**Alternative Web Servers:** Apache

**Alternative Database Servers:** MySQL, SQLite, MongoDB

**Pros:**
- Lightweight and modular (only use what we need)
- Utilizes Python
- Can make DB CRUD natively
- Make powerful apps with less code


**Cons:**
- Learning curve
- Fragments language requirements

### Node.JS Path
Node.JS is a runtime environment for server-side web applications. It utlizes
JavaScript, and can act as its own web server.

In this configuration, the server will run Ubuntu **<15.10 || version 
to be determined>**. The web-server will be Node.JS, and the database server
will be MongoDB. The true back-end work will be performed by Express.JS as
facilitated by Node.JS. Front-end to database requests will be handled in
PHP via the GroceryCrud and the Codeigniter framework. Front-end technologies 
will include the standards of HTML, CSS, JavaScript (including jQuery) and
PHP for dynamic content.

**Alternative Web Servers:** Apache, NGINX

**Alternative Database Servers:** MySQL, SqlAlchemy, SQLite


**Pros:**
- Currenlty very popular (easy to find support and answers to questions)
- Utilizes javascript, narrowing the language requirements
- Has a history of quick prototyping
- Works extremely well with "real-time applications"


**Cons:**
- Managing callbacks is difficult
- Debugging can be difficult

#### Module Proposal for Node.JS Path.
*All user-facing pages can be implemented with Node.JS templates and then
further customized with HTML, CSS, and Javascript as needed*
- Main Page
  - Basic framework and styling: Html/css
  - Advanced styling: jQuery
  - Dynamic / auto-update content: AngularJS
- Registration Page, Log-in Page, Users' Account Management Page, Administrative Dashboard
  - Basic framework and styling: Html/css
  - View: AngularJS
  - Authentication: NodeJS.Passport
  - CRUD: NodeJS.Mongoose
- Database and Database Schema
  - MongoDB
- Nodejs / Express server
  - Web server: nodejs
  - Url routing: express
  - Templates: EJS
- Other CRUD processing
  - NodeJS.Mongoose
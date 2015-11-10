**Specification**

Project Codename Scuba-Noodle

Concept {.western}
=======

Main Functions {.western}
--------------

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

Features {.western}
========

Supported Devices {.western}
-----------------

The project will contain an API such that access to content may be
extended by developers to any platform with Internet access.

Browser support for the main web-page at paracite.org will include:

-   -   -   

Minimum System Requirements {.western}
---------------------------

Web-page must not exceed memory use above 350MB.

Page must animate better than 20fps on hardware of \<to be determined\>.

User Accounts {.western}
-------------

Accounts may be verified by Facebook API

Account passwords and other credentials must be stored as their salted
hashed values

Accounts must store post history, comment history, and score

Accounts can be set as administrative

Posting {.western}
-------

Users have the ability to create a new story thread

Users can post blurbs on threads

Users can vote on blurbs

Users can comment on blurbs in a tier system, meaning they can comment
on comments (like Reddit.com).

Users can vote a story as finished.

Ordering and Sorting {.western}
--------------------

Blurbs are to be sorted based on a mathematical function of newness,
voting score, and a randomization factor. High scores will outweigh both
newness and randomization over time.

Actual scores are kept hidden, but a qualitative indicator (akin to
color or a progress bar) is presented to the user to show how “good” a
blurb is.

GUI {.western}
---

### View From a Thread {.western}

From the thread interface, there is a list of blurbs stacked oldest on
top newest on bottom within a scrolling box that takes up the largest
portion of the screen. There is an obviously placed link to go to the
latest portion of the story. If a story becomes larger than an amount
\<to be determined\> of lines then an area will become available as a
side bar on the left that allows for navigating pages similar to a PDF
reader. Each blurb may be selected, upon selecting a blurb a side bar on
the right populates with alternate blurbs for the user to select among
other blurbs for that branching point in the story.

Each blurb will have the following displayed near the top of it's
container: a rating indicator, the author.

Each blurb will have the following displayed near the bottom of it's
container: voting controls, a report button, and a comment button.

### View From the Comments {.western}

When the comment button is pressed a new floating window is created with
the comments for that blurb, clicking a new blurb comment button while
this window is still open will repopulate this window with the new
comments.

### Main view {.western}

A list of threads

A place to login or sign up

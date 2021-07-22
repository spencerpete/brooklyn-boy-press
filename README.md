# brooklyn-boy-press.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**brooklyn boy press** a new online magazine for the brooklyn boy, a mostly saterical take on the online magazine brooklyn boy press is a well designed fully functional publication with a bit of tongue a cheeck humor at the expense of millenial brooklynites (like myself). 


<br>

## MVP

**brooklyn boy press** MVP 

<br>

### Goals

- Online Magazine with Articles and Reviews
- Ability to sign up and subcribe
- Users are able to comment on articles/reviews and other comments
- Styled with Tailwind 


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|   Ruby on rails  |  DataBase set up                           |
|   Tailwind CSS   | Library used to design website             |

<br>

### Client (Front End)

#### Wireframes
Link to figma: https://www.figma.com/file/9e4eCJsjX3xA3d1NZZHcB4/Untitled?node-id=1%3A2
#### Home page
![image](https://user-images.githubusercontent.com/69879139/126583720-f52e0309-35e7-4cc6-a5f7-80690e84f3c2.png)

#### sign up page
![image](https://user-images.githubusercontent.com/69879139/126583961-dfae3e9d-5a72-404f-b7fc-48d0a9e767bd.png)


#### Sign in page
![image](https://user-images.githubusercontent.com/69879139/126647568-5b4ed85e-203c-4795-994f-f496474b2fb9.png)

#### Artcles view 
![image](https://user-images.githubusercontent.com/69879139/126584014-51278047-799c-4a66-b426-4b22985745f4.png)
![image](https://user-images.githubusercontent.com/69879139/126647834-ce14eaff-a16f-4d1f-87df-12c3f84a4087.png)
![image](https://user-images.githubusercontent.com/69879139/126584056-c6c32af8-33dd-4109-bba4-dd3ebcdb78d7.png)


#### Article and Review list
![image](https://user-images.githubusercontent.com/69879139/126584168-8ce31f0c-c587-4d66-9423-c3147d321d7a.png)
![image](https://user-images.githubusercontent.com/69879139/126584094-be938bc6-dc7c-4b39-b4e7-d7cadc269611.png)

#### Mobile View 
![image](https://user-images.githubusercontent.com/69879139/126643734-b7ce5f40-7e44-4021-99d9-965b14ed8dc4.png)
![image](https://user-images.githubusercontent.com/69879139/126647184-f769bfd3-ea9e-4908-84f4-3b19e967005b.png)




#### Component Tree
![untitled](https://user-images.githubusercontent.com/69879139/126586529-a4ca6898-26d7-43a2-b787-464cb6ab41ff.png)


#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ css
|__ components/
      |__ CommentHolder.jsx
      |__ CommentInput.jsx
      |__ CommentSection.jsx
      |__ FeaturedContentBox.jsx
      |__ FeaturedContentHolder.jsx
      |__ Header.jsx
      |__ Footer.jsx
      |__ ListHolder.jsx
|__ layouts/
      |__Layout.jsx
      |__Nav.jsx
      |__Footer.jsx
|__ screens/
      |__ HomePage.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ ArticlePage.jsx
      |__ ReviewPage.jsx
      |__ArticleList.jsx
      |__ ReviewList.jsx
|__ services/
      |__ api_config.js
      |__ auth.js
      |__ comment.js
      |__ post.js
      |__ contributer.js 

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Back End  Set up    |    H     |     4 hrs      |     TBD       |     TBD     |
| Create CRUD         |    H     |     3 hrs      |     TBD       |     TBD     |
| Creat Seed Data     |    H     |     3 hrs      |     TBD       |     TBD     |
| Test Back End Funct.|    H     |     3 hrs      |     TBD       |     TBD     |
| Create Client       |    H     |     1 hr       |     TBD       |     TBD     |
| Set Up Directories  |    H     |     1 hr       |     TBD       |     TBD     |
| Fill out Services   |    H     |     2 hrs      |     TBD       |     TBD     |
| Set up Sign in/up   |    H     |     1 hrs      |     TBD       |     TBD     |
| Set Up MainContainer|    H     |     2 hrs      |     TBD       |     TBD     |
| Set up Homepage.jsx |    H     |     2 hrs      |     TBD       |     TBD     |
| Set Up Article.jsx  |    H     |     3 hrs      |     TBD       |     TBD     |
| Set Up Review.jsx   |    H     |     3 hrs      |     TBD       |     TBD     |
| Set Up Comment.jsx  |    H     |     2 hrs      |     TBD       |     TBD     |
| Do some styling     |    H     |     3 hrs      |     TBD       |     TBD     |
|Setup ArticleList.jsx|    H     |     1 hr       |     TBD       |     TBD     |
|Set up ReviewList.jsx|    H     |     1 hr       |     TBD       |     TBD     |
| major styling       |    H     |     6 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     41 hrs     |     TBD       |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![Untitled Diagram](https://user-images.githubusercontent.com/69879139/126583415-aff8bc94-cf8a-470c-a59c-285f3fe828eb.jpg)

<br>

***

## Post-MVP

- Allow creation of Contributors
- Contributor's are given ability to create posts 
- add Share/post to twitter button to articles and reviews

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

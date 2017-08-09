# Django React Redux Boilerplate project

## About this boilerplate

This is intended to be a simple project that uses Django as the backend for authentication and React and Redux as the frontend stack so the user can get set up fast. It comes with login, signup and logout already configured. The rest is up to you! I meant it to be this way, so that the user can configure it to their needs. It uses the following stack:

* [React](https://facebook.github.io/react/), for interactive UI development
* [Redux](http://redux.js.org/docs/introduction/), as a state container
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools), DevTools for Redux with hot reloading, action replay, and customizable UI. Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs)
* [Redux Thunk](https://github.com/gaearon/redux-thunk), Thunk middleware for Redux - used in async actions
* [React Router Redux](https://github.com/reactjs/react-router-redux), Ruthlessly simple bindings to keep react-router and redux in sync
* [Webpack](https://webpack.js.org/), for bundling static assets
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/), for responsive styling
* [classnames](https://github.com/JedWatson/classnames), for dynamic styling
* [Django](https://www.djangoproject.com/), to serve as the backend
* [django-rest-framework](http://www.django-rest-framework.org/), for bulding the web API in order to retrieve user info saved on the database
* [django-rest-framework-jwt](https://github.com/GetBlimp/django-rest-framework-jwt), for obtaining, verifying and refreshing token the jwt token used to verify users

## How to get up and running

* `$ git clone git@github.com:mtusman/django-react-redux.gitt`
* `$ cd django-react-redux/backend`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

Then open up another terminal

* `$ cd django-react-redux`
* `npm install`
* `npm start`

Then just visit `http://localhost:7770/`

## Todo
* Upload test file

## Images
<p align="center"><img src="https://raw.githubusercontent.com/mtusman/django-react-redux/master/media/photo1.PNG" width=80%></p>
<p align="center"><img src="https://raw.githubusercontent.com/mtusman/django-react-redux/master/media/photo2.PNG" width=80%></p>
<p align="center"><img src="https://raw.githubusercontent.com/mtusman/django-react-redux/master/media/photo3.PNG" width=80%></p>
<p align="center"><img src="https://raw.githubusercontent.com/mtusman/django-react-redux/master/media/photo4.PNG" width=80%></p>
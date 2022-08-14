# README

# [MyTrails](https://hike-my-trails.herokuapp.com)
[MyTrails](https://hike-my-trails.herokuapp.com) is an [AllTrails](https://www.alltrails.com) clone project.
In MyTrails, users can create an account and search for hiking trails on an interactive map. 
Filters can be applied to the trails and map, and users can click on a trail to view its details.
To save a trail for later, a user can create a list and add trails to it.

## System Dependencies
* Ruby version - 2.5.1
* Rails version - 5.2.3
* Node version - 10.13.0
* Npm version - 6.4.1
* PostgreSQL database - 0.18 to 2.0

## Technologies Used
* Rails
    * Ruby on Rails was used for the project's backend.
* React / Redux
    * The React library and Redux library for JavaScript were used in conjunction for the project's frontend.
* PostgreSQL
    * PostgreSQL was used for the project's database. It is a relational database that uses tables to store data. 

## Features 
* [Map](#map)
* [Lists](#lists)

## Map
The map is implemented using a Google Map API. The area of the map shown in the user's browser, or map bounds, is the area that is used to search for hiking trails in the database. It starts out centered at the user's device location, and the map bounds are stored in the browser. As a user clicks and drags or zooms in or out of the map, the bounds are updated and stored in the browser. New hiking trails are retreived from the database and loaded onto the map based on the continually changing bounds that the user is providing by interacting with the map.

In addition to grabbing the hiking trails based on the bounds of the map, a user can select additional filters such as trail length or elevation gain. If a user inputs a maximum trail length of 2 miles, only trails within the map bounds AND trails of less than or equal to 2 miles will be loaded onto the map for the user to browse through. Multiple filters can be used in combination to get more selective search results on the map. If a user inputs a trail difficulty of "easy" and "moderate", a maximum trail length of 2 miles, and a minimum time of 45 minutes, then the filters will stack on top of each other and only trails that are 1) within the map bounds, 2) easy or moderate, 3) less than or equal to 2 miles, and 4) take at least 45 minutes (estimated time based on length) to complete will be loaded onto the map. 

## Lists
Users can create lists of trails like creating a playlist of songs. Once a list is created, a user can enter the details page of any hiking trail and click a button to add it to any of the lists the user has created. If the trail is already on the list, then a remove button will replace the add button to remove it from the list. Any list can be deleted by the user and trails can be removed from any list in the user's list management page. 

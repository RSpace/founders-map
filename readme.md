# Considerations

This part of the readme describes my considerations about the different aspects of the project.

## Requirements

The requirements do not make it clear if the project is about making a page only for inputting and previewing the data, or also to make a page for others to view the entered data. For simplicity, this code base focuses on just the former.

### User stories

* [ ] User can input data in CSV format
* [ ] User can separate CSV columns with comma, semicolon or tab
* [ ] User can see each row as a single marker on a map
* [ ] User can see input data visualized in a table
* [ ] User can select which columns contain latitude/longitude information
* [ ] User can select which columns contain geolocating point on map
* [ ] User can select a column for marker labels
* [ ] User can click links in the table
* [ ] User can see referenced images in the table
* [ ] User can select which rows to show on the map
* [ ] User can sort the table by any column
* [ ] User can filter the table by any column
* [ ] User can take advantage of viewing the application on a large display
* [ ] User can use the application on a small display

## UX

The user interface consists of three components: The input field, the table and the map. For a full application, a main navigation, footer etc. would also be relevant, but are not considered here.

The three compoments should stay syncronised at all times, ie. when user changes the CSV data, both the table and the map should update, and when the configuration in the table is change, the map should update.

### Input field

The input field is specified as a text area, which is a good fit for entering, pasting and quickly editing text. It is, however, not a great choice for large data set (slow to paste in, hard to get an overview), and must be considered a prototype or MVP solution. A long term solution would to allow file upload from multiple locations and sources, as well as importing from other systems.

### Table

The table is the most advanced part of the UI, both visualizing the data and - in this solution - handling the configuration of which rows to display in the map and which columns to use as labels and for geocoding.

Not really honoring Bob's wish of making things as easy as possible, I have gone for a power user approach and used check boxes and drop down lists in the table for the configuration. A more user friendly approach would have been to split the whole process into a number of different steps, explaining the purpose of each step in details to guide the user.

While it's unclear from the requirements whether the user can filter by text in all colums at the same time, or has to select a specific column to filter by, I believe the former to be most user friendly and the latter to probably be more performant and easier to implement.

### Map

From the mention of specifying a column to use for marker labels I have deduced an implicit requirement of displaying such a label with the marker in the map. I also think it's important to be able to get the full information about the startup in an info window when the marker is clicked.

## Technical

While a full application would require persistence of data using a BaaS such as Firebase or by implementing our own backend exposing an API to the frontend, this project has no such requirement.

This means that "full-stack" client-side frameworks such as Angular or Ember are less relevant with the complixity they add, and that data management/binding framework such as Backbone is not inherintly needed either.

The greatest challenge lies in tying a quite substantial user interface with complex interactions between multiple components together, ensuring tight syncronization and efficient rendering at all times. Using React components and the Flux data flow architecture seems like a good fit for this.

### Stack

* UI components: React
* Module bundler: Webpack
* Tests: Karma, Unexpected

### Structure

### Components
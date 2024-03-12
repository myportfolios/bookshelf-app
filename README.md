# Overview
1. The Bookshelf app displays a list of books fetched from an api
2. The idea is to provide the user with a list of articles which the user can glance through
3. The user is also provided with Search an d filter functionalities.
4. States are only kept within functions where necessary and there is no global state as the app can function efficiently with component states. No need for global state. 

# App.js
1. This is the parent app that renders the following component:

# BookShelf
1.  The BookShelf component fetches the initial list of articles on page load and uses some functions within the app. They are:
     - handlePageChange: handles data fetching and pagination
     - handleSearch: for search fuctionality
     - onFilter: for filtering the articles based on criteria stated in categories list
     - onClear: function for resetting the book list when no search criteria is met
      
     
2. # Books
    Receives the list of books fetched and iterates over them. it returns a list of <Book>

3. # Book
   A single book that renders the bookk details based on parameters received.


4. # BookDetail
    This is a seprate page for rendering an article/book based on the user's selection
    It provides functionality for the user to navigate back to the homw screen
     

# apis
    The apis folder contains the fucntions used for asunchronously fetching the books

##### Categories ##################     
 [
  'Modern Art, Essentials',
  'Prints and Drawings',
  'Contemporary Art',
  'painting, european painting',
  'Painting and Sculpture of Europe',
]
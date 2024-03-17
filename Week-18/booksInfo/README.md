# Intro To React Assignment
# Problem Statement
You are tasked with creating a simple React application that displays a list of books. Each book in the list should have a title, author, and publication year. Your task is to complete the following steps:

Set up a new React project using Create React App (CRA).

Create a new component called BookList that will be responsible for rendering the list of books.

Inside the BookList component, create an array of book objects with the following structure:

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
  // Add more books if you'd like
];

Render the list of books in the BookList component. Each book should be displayed as a separate list item with the book's title, author, and year.

Create a new component called App that will serve as the entry point of your application.

Inside the App component, render the BookList component.

Finally, render the App component in the root div element of the index.html file.

Your task is to complete the implementation of the BookList and App components to achieve the desired functionality. Make sure to use JSX syntax and leverage the appropriate React concepts to build the application.

Once you have completed the coding task, verify that the list of books is displayed correctly in the browser when you run the React development server.

Follow up Assignment Question:
You are tasked with extending the existing React application that displays a list of books. In addition to rendering the book list, you need to implement the following task to practice JSX and component composition:

Follow the previous instructions to set up the React project and create the BookList and App components.

Create a new component called Book that represents an individual book in the book list.

Inside the Book component, create a JSX structure to render each book's details. The JSX structure should include the book's title, author, and publication year, similar to the following:

<div>
  <h3>{title}</h3>
  <p>Author: {author}</p>
  <p>Year: {year}</p>
</div>
Make sure to receive the book details as props in the Book component and use those props in the JSX structure.

Update the BookList component to use the Book component for rendering each book in the list. Iterate over the books array and render a Book component for each book, passing the book details as props.

Verify that the application still displays the list of books correctly, with each book's details rendered using the Book component.

Make sure to utilize JSX syntax, component composition, and props effectively to accomplish the given tasks. Test the application by running the React development server and ensuring that the book list is rendered with the correct book details and any added styles are applied appropriately.


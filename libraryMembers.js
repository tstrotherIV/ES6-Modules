import library from "./library.js";
console.log(library.js);
/*
    Purpose:
    This file contains all code related to manipulating,
    or accessing the list of library member's books.
*/

const MembersBooksDatabase = [
  {
    id: 1,
    firstName: "Rose",
    lastName: "Thorne",
    books: ["To Kill a Mockingbird", "Pride and Prejudice"],
  },
  {
    id: 1,
    firstName: "Daisy",
    lastName: "Stemm",
    books: [
      "Harry Potter and the Sorcerer's Stone",
      "The Hunger Games",
      "The Book Thief",
    ],
  },
];

const MembersBooksMethods = {
  getMember: function (memberFirstName, memberLastName) {
    return MembersBooksDatabase.find(
      (member) =>
        member.firstName === memberFirstName &&
        member.lastName === memberLastName
    );
  },
  getCheckedOutBooks: function (memberFirstName, memberLastName) {
    return this.getMember(memberFirstName, memberLastName).books;
  },
  memberCheckOutBook: function (memberFirstName, memberLastName, book) {
    // console.log(library.availableBooks());
    library.checkOutBook(book);
    // console.log(library.availableBooks());
    this.getMember(memberFirstName, memberLastName).books.push(book);
  },
};

export default MembersBooksMethods;

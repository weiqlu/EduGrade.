import React from "react";
import "../styles/ClassList.css";
import DataTable from "react-data-table-component";

function ClassList(props) {
  const [items, setItems] = React.useState([]);

  // table headers
  const columns = [
    {
      name: "Academic Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Term",
      selector: (row) => row.term,
      sortable: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "Course No.",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "Course Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Instructor",
      selector: (row) => row.instructor,
      sortable: true,
    },
    {
      name: "GPA",
      selector: (row) => row.gpa,
      sortable: true,
    },
    {
      name: "CRN",
      selector: (row) => row.crn,
      sortable: true,
    },
    {
      name: "Enrollments",
      selector: (row) => row.enrollments,
      sortable: true,
    },
    {
      name: "Credits",
      selector: (row) => row.credits,
      sortable: true,
    },
  ];

  /* currently hardcoded data, need to
   populate the DB and connect to it using axios request*/
  const data = [
    {
      year: "2022-2023",
      term: "Fall",
      subject: "CS",
      number: "3114",
      title: "Data Structures and Algorithms",
      instructor: "Fargally",
      gpa: "3.82",
      enrollments: "300",
      crn: "84125",
      credits: "3",
    },
    {
      year: "2021-2022",
      term: "Spring",
      subject: "CS",
      number: "2114",
      title: "Data Structures and Algorithms",
      instructor: "Emebo",
      gpa: "3.12",
      enrollments: "150",
      crn: "84125",
      credits: "3",
    },
  ];

  /* Still need to style the table to fit appropriately on the page */
  return (
    <div>
      <br></br>
      <DataTable
        title="Grade Distribution"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default ClassList;

import React from "react";
import "../styles/ClassList.css";
import DataTable from "react-data-table-component";

function ClassList({ search }) {
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

  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },  
    },
  };

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
    {
      year: "2021-2022",
      term: "Spring",
      subject: "CS",
      number: "9114",
      title: "Data Structures and Algorithms",
      instructor: "Ekebo",
      gpa: "3.12",
      enrollments: "150",
      crn: "84125",
      credits: "3",
    },
    {
      year: "2021-2022",
      term: "Spring",
      subject: "CS",
      number: "9114",
      title: "Data Structures and Algorithms",
      instructor: "Elebo",
      gpa: "3.12",
      enrollments: "150",
      crn: "84125",
      credits: "3",
    },
    {
      year: "2021-2022",
      term: "Spring",
      subject: "CS",
      number: "9114",
      title: "Data Structures and Algorithms",
      instructor: "Emebo",
      gpa: "3.12",
      enrollments: "150",
      crn: "84125",
      credits: "3",
    },
  ];

  //filters the table for the search query, showing only what is given
  const filteredData = data.filter((item) =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  /* Still need to style the table to fit appropriately on the page */
  return (
    <div className="data-table-wrapper">
      <DataTable
        title="Grade Distribution"
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        pagination
      />
    </div>
  );
}

export default ClassList;

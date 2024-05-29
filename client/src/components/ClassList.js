import React from "react";
import "../styles/ClassList.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SectionData } from "../data/Sections.js";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function ClassList({ search }) {
  const [classes, setClasses] = React.useState([]);
  const [filter, setFilter] = React.useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  React.useEffect(() => {
    const data = SectionData.getData();
    setClasses(data);
  }, []);

  const filteredClasses = classes.filter((classItem) => {
    const lowerCaseSearch = search.toLowerCase();
    return (
      classItem.year.toString().includes(lowerCaseSearch) ||
      classItem.term.toLowerCase().includes(lowerCaseSearch) ||
      classItem.subject.toLowerCase().includes(lowerCaseSearch) ||
      classItem.number.toLowerCase().includes(lowerCaseSearch) ||
      classItem.title.toLowerCase().includes(lowerCaseSearch) ||
      classItem.instructor.toLowerCase().includes(lowerCaseSearch) ||
      classItem.gpa.toString().includes(lowerCaseSearch) ||
      classItem.enrollments.toString().includes(lowerCaseSearch) ||
      classItem.crn.toLowerCase().includes(lowerCaseSearch) ||
      classItem.credits.toString().includes(lowerCaseSearch)
    );
  });

  return (
    <div className="grade-distribution">
      <div className="header">
        <p> Course History</p>
        <div className="input-text">
          <InputText
            onChange={(event) =>
              setFilter({
                global: {
                  value: event.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              })
            }
            placeholder="Keyword Search..."
          />
        </div>
      </div>

      <DataTable
        value={filteredClasses}
        paginator
        rows={80}
        rowsPerPageOptions={[25, 50, 100]}
        removableSort
        filters={filter}
        scrollable
        scrollHeight="1000px"
      >
        <Column field="year" header="Year" sortable></Column>
        <Column field="term" header="Term" sortable></Column>
        <Column field="subject" header="Subject" sortable></Column>
        <Column field="number" header="Number" sortable></Column>
        <Column field="title" header="Title" sortable></Column>
        <Column field="instructor" header="Instructor" sortable></Column>
        <Column field="gpa" header="GPA" sortable></Column>
        <Column field="enrollments" header="Enrollments" sortable></Column>
        <Column field="crn" header="CRN" sortable></Column>
        <Column field="credits" header="Credits" sortable></Column>
      </DataTable>
    </div>
  );
}

export default ClassList;

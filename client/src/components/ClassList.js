import React from "react";
import "../styles/ClassList.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SectionData } from "../data/Sections.js";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";


function ClassList() {
  const [classes, setClasses] = React.useState([]);
  const [filter, setFilter] = React.useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  React.useEffect(() => {
    const data = SectionData.getData();
    setClasses(data);
  }, []);

  return (
    <div className="classlist-container">
      <div className="classlist-header">
        <h2>Grade Distribution</h2>
        <div className="classlist-keyword">
          <FloatLabel>
            <InputText
              id="input"
              onChange={(event) =>
                setFilter({
                  global: {
                    value: event.target.value,
                    matchMode: FilterMatchMode.CONTAINS,
                  },
                })
              }
            />
            <label htmlFor="input" className="keyword-search-label">
              Keyword Search
            </label>
          </FloatLabel>
        </div>
      </div>

      <DataTable
        value={classes}
        dataKey="id"
        paginator
        rows={50}
        rowsPerPageOptions={[25, 50, 75]}
        removableSort
        filters={filter}
        scrollable
        scrollHeight="1000px"
        tableStyle={{ minWidth: "62rem" }}
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

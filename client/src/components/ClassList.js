import React from "react";
import "../styles/ClassList.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SectionData } from "../data/Sections.js";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Chart } from "react-chartjs-2";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function ClassList() {
  const [classes, setClasses] = React.useState([]);
  const [filters, setFilters] = React.useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    year: { value: null, matchMode: FilterMatchMode.CONTAINS },
    term: { value: null, matchMode: FilterMatchMode.CONTAINS },
    subject: { value: null, matchMode: FilterMatchMode.CONTAINS },
    number: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
    instructor: { value: null, matchMode: FilterMatchMode.CONTAINS },
    gpa: { value: null, matchMode: FilterMatchMode.CONTAINS },
    enrollments: { value: null, matchMode: FilterMatchMode.CONTAINS },
    crn: { value: null, matchMode: FilterMatchMode.CONTAINS },
    credits: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  React.useEffect(() => {
    const data = SectionData.getData();
    setClasses(data);
  }, []);

  const onFilterChange = (e, field) => {
    const value = e.target.value;
    const updatedFilters = { ...filters };
    updatedFilters[field].value = value;
    setFilters(updatedFilters);
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h3>Filter Options</h3>
        <div className="p-field">
          <label htmlFor="year">Year</label>
          <InputText
            id="year"
            value={filters.year.value}
            onChange={(e) => onFilterChange(e, "year")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="term">Term</label>
          <InputText
            id="term"
            value={filters.term.value}
            onChange={(e) => onFilterChange(e, "term")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="subject">Subject</label>
          <InputText
            id="subject"
            value={filters.subject.value}
            onChange={(e) => onFilterChange(e, "subject")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="number">Number</label>
          <InputText
            id="number"
            value={filters.number.value}
            onChange={(e) => onFilterChange(e, "number")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="title">Title</label>
          <InputText
            id="title"
            value={filters.title.value}
            onChange={(e) => onFilterChange(e, "title")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="instructor">Instructor</label>
          <InputText
            id="instructor"
            value={filters.instructor.value}
            onChange={(e) => onFilterChange(e, "instructor")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="gpa">GPA</label>
          <InputText
            id="gpa"
            value={filters.gpa.value}
            onChange={(e) => onFilterChange(e, "gpa")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="enrollments">Enrollments</label>
          <InputText
            id="enrollments"
            value={filters.enrollments.value}
            onChange={(e) => onFilterChange(e, "enrollments")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="crn">CRN</label>
          <InputText
            id="crn"
            value={filters.crn.value}
            onChange={(e) => onFilterChange(e, "crn")}
          />
        </div>
        <div className="p-field">
          <label htmlFor="credits">Credits</label>
          <InputText
            id="credits"
            value={filters.credits.value}
            onChange={(e) => onFilterChange(e, "credits")}
          />
        </div>
      </div>

      <div className="content">
        <div className="header">
          <h2>Grade Distribution</h2>
          <div className="input-text">
            <FloatLabel>
              <InputText
                id="input"
                onChange={(event) =>
                  setFilters({
                    ...filters,
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
          rows={25}
          rowsPerPageOptions={[25, 50, 75]}
          removableSort
          filters={filters}
          scrollable
          scrollHeight="1000px"
          tableStyle={{ minWidth: "60rem" }}
          emptyMessage="No sections found."
        >
          <Column field="year" header="Year" sortable></Column>
          <Column field="term" header="Term" sortable></Column>
          <Column field="subject" header="Subject" sortable></Column>
          <Column field="number" header="Course No." sortable></Column>
          <Column field="title" header="Course Title" sortable></Column>
          <Column field="instructor" header="Instructor" sortable></Column>
          <Column field="gpa" header="GPA" sortable></Column>
          <Column field="enrollments" header="Enrollments" sortable></Column>
          <Column field="crn" header="CRN" sortable></Column>
          <Column field="credits" header="Credits" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default ClassList;

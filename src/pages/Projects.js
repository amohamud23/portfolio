import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectsView from "../components/ProjectView";

function Projects() {
  const [Projects, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectsPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/Projects").then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, [Projects]);

  const indexOfLastProjects = currentPage * ProjectsPerPage;
  const indexOfFirstProjects = indexOfLastProjects - ProjectsPerPage;
  const currentProjects = Projects.slice(
    indexOfFirstProjects,
    indexOfLastProjects
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Projects" />
          {<ProjectsView Projects={currentProjects} />}
          {!(Projects.length > ProjectsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={ProjectsPerPage}
              totalItems={Projects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;

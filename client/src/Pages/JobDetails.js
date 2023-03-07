import React from "react";
import jobCard from "../components/JobCard";
import companyCard from "../components/CompanyCard";

function JobDetails() {
  return (
    <>
      <div
        className="jobDetails"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Job Details</h1>
        <div
          className="companyInfo"
          style={{
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <companyCard />
        </div>
      </div>
    </>
  );
}

export default JobDetails;

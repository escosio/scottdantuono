import React from "react";
import "../css/Experience.css";

export const Experience = () => {
  const jobs = [
    {
      company: "Boldin",
      url: "https://www.boldin.com/",
      years: "2024 – now",
      roles: [
        { title: "Engineering Manager", dates: "May 2026 – now" },
        { title: "Senior QA Engineer", dates: "Feb 2024 – May 2026" },
      ],
      summary:
        "Built the Playwright automation framework and CI gates for the React app and a Pytest suite for the planning engine API, then moved into managing the team.",
    },
    {
      company: "Peloton",
      url: "https://www.onepeloton.com/",
      years: "2020 – 2023",
      roles: [
        { title: "Senior QA Engineer", dates: "Feb 2023 – Jul 2023" },
        { title: "QA Engineer", dates: "Jul 2020 – Feb 2023" },
      ],
      summary:
        "Ran weekly releases for the Bike and Tread apps, trained teammates for on-call rotations, and automated the reporting around releases with Python.",
    },
    {
      company: "SeatGeek",
      url: "https://seatgeek.com/",
      years: "2018 – 2020",
      roles: [{ title: "QA Engineer", dates: "Jan 2018 – Apr 2020" }],
      summary:
        "First QA hire. Set up the QA process and test case management, and wrote the mobile and web regression suites.",
    },
    {
      company: "Meetup",
      url: "https://www.meetup.com/",
      years: "2013 – 2017",
      roles: [
        { title: "Senior QA Engineer", dates: "Jan 2017 – Dec 2017" },
        { title: "QA Engineer", dates: "Dec 2013 – Jan 2017" },
      ],
      summary:
        "Tested across web, iOS and Android, and wrote the automated web and API tests that supported the move to CI/CD and AWS.",
    },
  ];

  return (
    <section id="experience" className="section page">
      <h2>Experience</h2>
      <ul className="job-list">
        {jobs.map((job) => (
          <li className="job" key={job.company}>
            <span className="job-years">{job.years}</span>
            <div>
              <h3>
                <a href={job.url}>{job.company}</a>
              </h3>
              <ul className="job-roles">
                {job.roles.map((role) => (
                  <li key={role.title}>
                    {role.title}
                    <span className="job-role-dates">{role.dates}</span>
                  </li>
                ))}
              </ul>
              <p className="job-summary">{job.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

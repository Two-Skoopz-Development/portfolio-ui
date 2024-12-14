import React from 'react';

import Markdown from '@components/markdown';

const experience = `
### Experience
* __Software Engineer__ - Jan 2021 - Present
  * Led development of full-stack VM automation tool with React and Django, increasing server deployment speed by 100%.
  * Designed and implemented API endpoints to auto-populate and validate user inputs, reducing errors caused by invalid entries.
  * Improved unit testing for in-house Python application, expanding lines of code covered by 80% through development and refinement of Pytest unit test cases.
  * Designed Django models to migrate server configuration and manufacturing site data to PostgreSQL, improving user lookup efficiency by enabling filter capabilities and removing redundant sites.
  * Rapidly engineered PowerShell script to automate migration of Azure TFS data to the cloud, saving approx 150 work hours for engineers in the server infrastructure space
* __Scada Engineer__ - Mar 2020 - Dec 2020
  * Created displays and controls for real-time equipment statistics and facility management.
  * Migrated from legacy Wonderware Intouch implementation to Ignition software.
  * Assisted in troubleshooting SCADA system HMI displays using Ignition software.
* __Electronic Warfare Systems Journeyman__ - Dec 2010 - Dec 2016
  * Maintained defense systems and countermeasures on the B-52 Bomber.
  * Handled wiring, conducted system diagnostics and repairs, and performed pre-flight inspections.
  * Managed and trained new recruits on procedures and systems for inspections and repairs.
  * Documented and preserved historical data on all aircraft maintenance tasks performed.

`;

export const Experience: React.FC = () => {
  return <Markdown content={experience} />;
};

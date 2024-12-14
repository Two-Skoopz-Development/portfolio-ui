import React from 'react';

import Markdown from '@components/markdown';

const educationAndSkills = `
### Skills
* __Programming Languages__: Python, JavaScript/TypeScript, Powershell, C#, HTML/CSS, PHP, SQL, Protobuf\n
* __Tools/Frameworks__: Django, React, GitHub, Redis, VMWare, gRPC, Docker, Ansible, ADO

### Education
* __Georgia Institute of Technology__ - Expected Graduation May 2026
  * M.S Computer Science - Interactive Intelligence
  * Current GPA: 3.75
  * Courses
    * CS 6200 - Graduate Introduction to Operating Systems
    * CS 6457 - Video Game Design
    * CS 6250 - Computer Networks
    * CS 6300 - Software Development Process
    * CS 7632 - Game AI ( Current )
    * CS 6603 - AI, Ethics, and Society ( Current )
* __California State University, Bakersfield__ - Graduated May 2020
  * B.S Computer Science - Information Systems
  * GPA: 3.74 - Magna Cum Laude
  * Courses
    * CMPS 2020 - Programming II: Data Structures and Algorithms
    * CMPS 2680 - Web Programming I: Client -side Web Programming
    * CMPS 3680 - Web Programming II: Server-side Web Programming
    * CMPS 3120	- Algorithm Analysis	
    * CMPS 3350	- Software Engineering
    * CMPS 3480 - Computer Graphics
    * CMPS 3420	- Database Systems	
    * CMPS 3500	- Programming Languages	
    * CMPS 3600	- Operating Systems	
    * CMPS 3620	- Computer Networks 
    * CMPS 3640	- Distributed and Parallel Computation
    * CMPS 2650 - Linux Environment and Administration
    * CMPS 3560 - Artificial Intelligence
    * CMPS 4450 - Data Mining and Visualization
    * CMPS 3390 - Application Development
    * CMPS 4910 - Senior Project I
    * CMPS 4928 - Senior Project II
`;

export const Education: React.FC = () => {
  return <Markdown content={educationAndSkills} />;
};

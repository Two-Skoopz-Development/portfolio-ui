import React from 'react';

import Markdown from '@components/markdown';

const projects = `
### Projects
* __SDE Web App (General Motors)__
  * Tools: TypeScript/React, Python/Django, Redis, Ansible, and VSphere / VM
  * Create a data retrieval and automation solution. This tool consolidates site, network, and configuration data into an application. Moreover, it simplifies the deployment of virtual machines to manufacturing plants through a custom Python library and Ansible. The primary objective behind this initiative was to streamline data management, and reduce input error.
* __TFS to ADO (General Motors)__
  * Tools: Powershell and Azure Devops API
  * Leveraged Powershell and the Azure Devops REST API to automate the  process of User Stories in an on prem TFS instance, and recreating them with all info including, images, attachments, and comments for 3 years worth of User Stories. Saved approximately 150 hours of manual work. 
* __Voxel Physics on Multi-user Network (School, Senior Project, [Link](https://cs.csub.edu/~nlarson/SP/))__
  * Tools: Unity, C#, and AWS EC2
  * Utilized C# and Unity to engineer a server/client system within Unity. The server broadcasted user movements, actions, and projectile interactions, while also managing the behavior of destructible objects. Upon projectile impact, the server dynamically updates the destructible object by removing affected voxels and executing a greedy meshing algorithm to reconstruct its form. The updated object data is relayed to the client for rendering, ensuring seamless synchronization between server and client environments.
* __F-TSW-KOD-R-2 (School)__
  * Tools: OpenGL, C++
  * Implemented a linux based game utilizing OpenGL and C++. My main task was to develop a camera system and 3D mouse selection through ray casting and transformation matrices. I also generated 3D models using Blender exported OBJ files, and placed them in the map based on the positioning of the camera.
* __Browser Game (School)__
  * Tools:  Javascript, HTML5, Bootstrap
  * Developed a browser-based game using HTML5 Canvas and JavaScript.
* __Browser Game Converted to C++/OpenGL (School)__
  * Tools: OpenGL, C++, Makefile
  * Convert browser game to run as an application on Linux. Purpose of this project was to teach a class how to troubleshoot and debug code in a fun environment.
* __Voxel model from triangle mesh (School)__
  * Tools: OpenGL, C++
  * Generate voxel models from triangle mesh generated in Blender. Used Octree data-structure and ray cast collision to add voxels.
* __Maintenance Plus Database (School)__
  * Tools: HTML, CSS, JavaScript, PHP, and PostreSQL
  * Built an application for the admin of a janitorial/carpet cleaning company to handle hiring new employees, assigning them to contracts, and displaying contract receipts.
* __Java Chat Client/Server (School)__
  * Tools: Java
  * Created tcp server/client for instant messaging either through public or private interfaces/rooms.

`;

export const Projects: React.FC = () => {
  return <Markdown content={projects} />;
};

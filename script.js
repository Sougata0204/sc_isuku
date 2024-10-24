// Sample projects data
const projects = [
    {
        name: 'Radar Detection System',
        description: 'Developed a radar detection system using Arduino and Processing IDE for real-time object detection and visualization.',
        technologies: 'Arduino, Processing IDE, Python',
        image: 'path/to/image1.jpg' // Replace with actual image paths
    }
];

// Function to load projects into the DOM
function loadProjects() {
    const projectsList = document.getElementById('projects-list');
    
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies Used:</strong> ${project.technologies}</p>
            <img src="${project.image}" alt="${project.name}" style="max-width: 100%;">
        `;
        
        projectsList.appendChild(projectDiv);
    });
}

// Load projects on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

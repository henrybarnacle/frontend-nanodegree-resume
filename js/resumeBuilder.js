var bio = {

    "name": " Henry Barnacle",
    "role": " Web Developer",

    "contacts": {
        "email": "henrybarnacle@yahoo.com",
        "mobile": "646-512-0056",
        "github": "github.com/henrybarnacle",
        "location": "New York"
    },
    "biopic": "images/resume2.jpg",
    "welcomeMessage": "I like building & creating",
    "skills": ["Web Design", "Front-End Development", "HTML & CSS", "Javascript", "JQuery"],
};

var work = {
    "jobs": [{
            "employer": "Self-employed",
            "title": "Fashion model",
            "dates": "2004-present",
            "location": "London, United Kingdom",
            "description": "International modelling for a variety of renowned brands"
        },
        {
            "employer": "Self-employed",
            "title": "Web developer",
            "dates": "2016-present",
            "location": "New York",
            "description": "Freelance web design and developing"
        }
    ]
};

var education = {
    "schools": [{
            "name": "St Mary Redcliffe & Temple",
            "location": "Bristol, United Kingdom",
            "dates": "1996-2003",
            "degree": "High School",
            "majors": [],
            "url": ""
        },
        {
            "name": "University of Westminster",
            "location": "London",
            "dates": "2006",
            "degree": "BA",
            "majors": ["Business"],
            "url": ""
        }
    ],
    "onlineCourses": [{
            "title": "Javascript Road Trip 1-3",
            "school": "Codeschool",
            "dates": "August-Septermber 2016",
            "url": "https://www.codeschool.com"
        },
        {
            "title": "Front-end web developer",
            "school": "Udacity",
            "dates": "September 2016-present",
            "url": "https://www.udacity.com/nanodegree"
        }
    ]

};

var projects = {
    "projects": [{
            "title": "Portfolio Project",
            "dates": "November 2016",
            "description": "A portfolio site to display projects.",
            "images": ["images/portfolio_project copy.jpg"]
        },
        {
            "title": "Project 2",
            "dates": "December 2016",
            "description": "A design based project.",
            "images": ["images/project2.jpg"]
        }
    ]
};

var data = "%data%";

bio.display = function() {

    var formattedName = HTMLheaderName.replace(data, bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").append(formattedRole);

    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedMessage);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);


    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

};

bio.display();

education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

        $("#education").append(HTMLonlineClasses);
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {

        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[i].images.length > 0) {
            for(var index = 0; index < projects.projects[i].images.length; index ++){

        var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[index]);
        $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

function inName(name) {

    var names = name.split(" ");
    var finalName = (" ");
    names[2] = names[2].toUpperCase();
    names[1] = names[1].slice(0, 1).toUpperCase() + names[1].slice(1).toLowerCase();
    finalName = names.join(" ");

    return finalName;

};

$("#main").prepend(internationalizeButton);

function displayMap() {

    $("#mapDiv").append(googleMap);
}
displayMap();

$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;
});




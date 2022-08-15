// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15;

//Electronic system for student management
contract ESSM {
  
    struct Student{
        uint id;
        string name; 
        string surname;
    }
    Student student;


    struct Subject {
        uint id;
        string subjectName;
        uint ects;
    }
    Subject subject;

    struct Professor {
        uint id;
        address _address;
        string name;
        string surname;
    }
    Professor professor;

    struct Course {
        uint id;
        Professor lecturer;
        Subject subject;
    }
    Course course;

    struct Grade {
        uint id;
        Course course;
        Student student;
        uint grade;
    }
    Grade grade;

    Grade[] grades;

    function addGrades(uint courseId, uint studentId, uint grade) external {
        grades.push(Grade(grades.length, courses[courseId], students[studentId], grade));
    }

    function getGradeById(uint id) external view returns (Grade memory) {
       for (uint i = 0; i < grades.length; i++) {
           if(grades[i].id == id) {
               return grades[i];
           }
       }
       return Grade(0, Course(0, Professor(0, address(0), "", ""), Subject(0, "", 0)), Student(0, "", ""), 0);
    }
     
 
    Professor[] professors;

    function addProfessors(address _address,string memory name, string memory surname) external {
        professors.push(Professor(professors.length, _address, name, surname));
    }

    function getProfessorById(uint id) external view returns (Professor memory) {
       for (uint i = 0; i < professors.length; i++) {
           if(professors[i].id == id) {
               return professors[i];
           }
       }
        return Professor(0, address(0) ,"", "");
    }
  
  
    Subject[] subjects;
    function addSubjects(string memory subjectName, uint ects) external {
        subjects.push(Subject(subjects.length, subjectName, ects));
    }

     function getSubjectById(uint id) external view returns (Subject memory) {
       for (uint i = 0; i < subjects.length; i++) {
           if(subjects[i].id == id) {
               return subjects[i];
           }
       }
       return Subject(0, "", 0);
    }
  
  
  
    Student[] students;

    function addStudents(string memory name, string memory surname) external {
        students.push(Student(students.length, name, surname)); 
    }

    function getStudentById(uint id) external view returns (Student memory) {
       for (uint i = 0; i < students.length; i++) {
           if(students[i].id == id) {
               return students[i];
           }
       }
       return Student(0, "", "");
    }
   
    function allStudents() external view returns(Student[] memory){
            return students;
    }

    function allProfessors() external view returns(Professor[] memory){
        return professors;
    }

    function allSubjects() external view returns(Subject[] memory) {
        return subjects;
    }

    function allCourses() external view returns(Course[] memory) {
        return courses;
    }

    function getCoursesAttendedBy(uint studentId) external view returns(Grade[] memory){
        return grades;
        // Grade[] memory tempgrades;
        // uint count = 0;
        // for(uint i = 0; i < grades.length; i++){
        //     if(grades[i].student.id == studentId){
        //     tempgrades[count] = grades[i];
        //     count++;
        //     }
        // }
        // return tempgrades;
    }

    Course [] courses; 

     function addCourses(uint professorId, uint subjectId) external {
        courses.push(Course(courses.length, professors[professorId], subjects[subjectId]));
    }

     function getCoursesById(uint id) external view returns (Course memory) {
       for (uint i = 0; i < courses.length; i++) {
           if(courses[i].id == id) {
               return courses[i];
           }
       }
       return Course(0, Professor(0, address(0), "", ""), Subject(0, "", 0));
    }
   

    
   function setGrade(uint gradeId, uint  _grade)  public {
        require(grades[gradeId].course.lecturer._address == msg.sender, "Only the respective professor can set the grade");
        require(_grade >= 5 && _grade <= 10, "Grade should be in range of 5 to 10 inclusive");
        grades[gradeId].grade = _grade;
    }


    function getCoursesByProfessor() external view returns(Course[] memory ){
        Course[] memory coursesToReturn;
        uint index = 0;
        for(uint i = 0; i < courses.length; i++){
            if(courses[i].lecturer._address == msg.sender){
                coursesToReturn[index] = courses[i];
                index++;
            }
        }
        return coursesToReturn;
    }

      constructor() {
        subjects.push(Subject(subjects.length, "Blockchain", 7));
        subjects.push(Subject(subjects.length, "Web3", 5));
        subjects.push(Subject(subjects.length, "Solidity", 6));
        subjects.push(Subject(subjects.length, "Cryptography", 7));

        professors.push(Professor(professors.length, 0x6b9A41B9BfcE15c00cA92440F389b936681cc557, "William", "Dyer"));
        professors.push(Professor(professors.length, 0x2aec76AfB92f28B28856c9920A49395203125594, "Digory", "Kirke"));
        professors.push(Professor(professors.length, 0x3d4fC741Bd137D89712af2E514Ba4fD36C5d4c2D, "Alastor", "Moody"));
        professors.push(Professor(professors.length, 0xfD3b409C388F5607558819864Df2B08c87953ba1, "Elwin", "Ransom"));

        students.push(Student(students.length, "Dave", "Smith")); 
        students.push(Student(students.length, "Gilbert", "Wilson"));
        students.push(Student(students.length, "Brian", "Harris"));
        students.push(Student(students.length, "Ethan", "Robinson"));

        courses.push(Course(courses.length, professors[0],subjects[0]));
        courses.push(Course(courses.length, professors[1],subjects[1]));
        courses.push(Course(courses.length, professors[1],subjects[2]));
        courses.push(Course(courses.length, professors[2],subjects[2]));
        courses.push(Course(courses.length, professors[3],subjects[3]));

        grades.push(Grade(grades.length, courses[0], students[0], 0));
        grades.push(Grade(grades.length, courses[1], students[0], 0));
        grades.push(Grade(grades.length, courses[2], students[0], 0));
        grades.push(Grade(grades.length, courses[3], students[0], 0));
        grades.push(Grade(grades.length, courses[1], students[1], 0));
        grades.push(Grade(grades.length, courses[2], students[2], 0));
        grades.push(Grade(grades.length, courses[3], students[3], 0));
    }
}
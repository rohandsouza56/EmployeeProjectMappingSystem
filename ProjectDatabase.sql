create database epms;
use epms;
drop database epms;
show tables;

create table Projects(
Project_Id int primary key auto_increment,
Project_Name varchar(50) Not Null,
`Description` varchar(100) Not Null,
Start_Date date not null,
End_Date date not null,
Location varchar(50) not null,
Manager_Id int not null
);

CREATE TABLE Project_Requirment(
Requirement_id int,
Project_Id int,
Project_Name varchar(50),
Constraint fk_Project_Requirment_Project_Id foreign key(Project_Id) references Projects(Project_Id)
);

CREATE TABLE Departments (
Department_Id int primary key,
Project_Id int,
Name varchar(50),
Current_Strength int,
Maximum_Strength int,
Constraint fk_Departments_Projects foreign key	(Project_Id) references Projects(Project_Id)
);
drop table departments;

create table Resource
(
Resource_Id int primary key,
link varchar(50),
Resource_Name varchar(50)
);

Create Table Technology
(
Technology_Id int primary key,
Technology_Name varchar(50),
Resource_Id int,
constraint fk_Technology_Resource_Id_ foreign key (Resource_Id) references Resource(Resource_Id)
);

Create Table Quiz 
(
Question_Id int primary key,
Technology_Id int,
Question varchar(200),
constraint fk_Quiz_Technology_Id_ foreign key (Technology_Id) references Technology(Technology_Id)
);


Create Table Options 
(
Option_Id int primary key,
Question_Id int,
`Option` varchar(200),
isTrue boolean,
constraint fk_Options_Question_Id_ foreign key (Question_Id) references Quiz(Question_Id)
);

create table Skills(Skill_Id int primary key,Skill varchar(50),Date_of_Completion date,Certification_Link varchar(50),Certificate_pdf mediumblob,
Technology_Id int,
constraint fk_Skills_Skill_Id_ foreign key (Technology_Id) references Technology(Technology_Id)
);

create table Employee(
Employee_Id int primary key auto_increment , 
Employee_Name varchar(20) Not Null,
Designation varchar(20) Not Null,
DateOfJoining date Not Null,
MobileNo varchar(10) Not Null,
Email varchar(30) Not Null,
Pan_Number varchar(20) Not Null,
Gender varchar(10) Not Null,
UserName varchar(20) Not Null,
`Password` varchar(20) Not Null,
Project_Id int Not Null,
Department_Id int Not Null,
Is_Manager boolean Not Null,
Manager_Id int Not Null,
Skill_Id int Not Null,
Resume blob Not Null, 
Is_Tagged boolean Not Null,
Constraint fk_Employee_Projects_Id foreign key	(Project_Id) references Projects(Project_Id),
Constraint fk_Employee_Department_Id foreign key (Department_Id) references Departments(Department_Id),
Constraint fk_Employee_Skill_Id foreign key	(Skill_Id) references Skills(Skill_Id)
);

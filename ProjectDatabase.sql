create database epms;
use epms;
drop database epms;
show tables;

create table Projects(
Project_Id int primary key auto_increment,
Project_Name varchar(50),
`Description` varchar(100),
Start_Date date,
End_Date date,
Location varchar(50),
Manager_Id int
);


CREATE TABLE Departments (
Department_Id int primary key auto_increment,
Project_Id int,
Name varchar(50),
Current_Strength int,
Maximum_Strength int,
Constraint fk_Departments_Projects foreign key	(Project_Id) references Projects(Project_Id) ON DELETE CASCADE ON UPDATE CASCADE
);
drop table departments;

create table Resource
(
Resource_Id int primary key  auto_increment,
link varchar(50),
Resource_Name varchar(50)
);

Create Table Technology
(
Technology_Id int primary key  auto_increment,
Technology_Name varchar(50),
Resource_Id int,
constraint fk_Technology_Resource_Id_ foreign key (Resource_Id) references Resource(Resource_Id) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE Project_Requirment(
Requirement_id int 
primary key auto_increment,
Project_Id int,
Technology_Id int,
Constraint fk_Project_Requirment_Project_Id foreign key(Project_Id) references Projects(Project_Id) ON DELETE CASCADE ON UPDATE CASCADE,
Constraint fk_Project_Requirment_Technology_Id foreign key(Technology_Id) references Technology(Technology_Id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create Table Question 
(
Question_Id int primary key  auto_increment,
Technology_Id int,
Question varchar(200),
constraint fk_Quiz_Technology_Id_ foreign key (Technology_Id) references Technology(Technology_Id) ON DELETE CASCADE ON UPDATE CASCADE
);


Create Table Options 
(
Option_Id int primary key  auto_increment,
Question_Id int,
`Option` varchar(200),
isTrue boolean,
constraint fk_Options_Question_Id_ foreign key (Question_Id) references Question(Question_Id) ON DELETE CASCADE ON UPDATE CASCADE
);


create table Roles(
Roll_Id int primary key  auto_increment,
Roll_Name varchar(50)
);


create table Employee(
Employee_Id int primary key auto_increment , 
Employee_Name varchar(255),
Designation varchar(255) ,
DateOfJoining date,
MobileNo varchar(255) unique,
Email varchar(255) unique,
`Password` varchar(255),
Gender varchar(255),
Project_Id int ,
Department_Id int,
Roll_Id int,
Resume blob,
Constraint fk_Employee_Projects_Id foreign key	(Project_Id) references Projects(Project_Id) ON DELETE SET NULL ON UPDATE CASCADE,
Constraint fk_Employee_Department_Id foreign key (Department_Id) references Departments(Department_Id) ON DELETE SET NULL ON UPDATE CASCADE,
Constraint fk_Employee_Roll_Id_Id foreign key (Roll_Id) references Roles(Roll_Id) ON DELETE SET NULL ON UPDATE CASCADE
);


create table `Admin`(
Admin_Id int primary key  auto_increment,
Email varchar(50) unique,
`Password` varchar(255),
Roll_Id int,
Constraint fk_Admin_Roll_Id_Id foreign key (Roll_Id) references Roles(Roll_Id) ON DELETE SET NULL ON UPDATE CASCADE
);
 

create table Skills(Skill_Id int primary key  auto_increment,
Skill varchar(50),
Employee_Id int,
Date_of_Completion date,
Certification_Link varchar(50),
Certificate_Pdf mediumblob,
Technology_Id int,
constraint fk_Skills_Skill_Id_ foreign key (Technology_Id) references Technology(Technology_Id) ON DELETE CASCADE ON UPDATE CASCADE,
constraint fk_Skills_Employee_Id_ foreign key (Employee_Id) references Employee(Employee_Id) ON DELETE CASCADE ON UPDATE CASCADE
);


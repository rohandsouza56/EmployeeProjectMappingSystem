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


CREATE TABLE Departments (
Department_Id int primary key auto_increment,
Project_Id int,
Name varchar(50),
Current_Strength int,
Maximum_Strength int,
Constraint fk_Departments_Projects foreign key	(Project_Id) references Projects(Project_Id)
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
constraint fk_Technology_Resource_Id_ foreign key (Resource_Id) references Resource(Resource_Id)
);


CREATE TABLE Project_Requirment(
Requirement_id int primary key auto_increment,
Project_Id int,
Technology_Id int,
Constraint fk_Project_Requirment_Project_Id foreign key(Project_Id) references Projects(Project_Id),
Constraint fk_Project_Requirment_Technology_Id foreign key(Technology_Id) references Technology(Technology_Id)
);
Create Table Question 
(
Question_Id int primary key  auto_increment,
Technology_Id int,
Question varchar(200),
constraint fk_Quiz_Technology_Id_ foreign key (Technology_Id) references Technology(Technology_Id)
);


Create Table Options 
(
Option_Id int primary key  auto_increment,
Question_Id int,
`Option` varchar(200),
isTrue boolean,
constraint fk_Options_Question_Id_ foreign key (Question_Id) references Question(Question_Id)
);

/*
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
Resume blob Not Null, 
Is_Tagged boolean Not Null,
Constraint fk_Employee_Projects_Id foreign key	(Project_Id) references Projects(Project_Id),
Constraint fk_Employee_Department_Id foreign key (Department_Id) references Departments(Department_Id)
);
*/
create table Employee(
Employee_Id int primary key auto_increment , 
Employee_Name varchar(255),
Designation varchar(255) ,
DateOfJoining date,
MobileNo varchar(255),
Email varchar(255),
Pan_Number varchar(255),
Gender varchar(255),
UserName varchar(255),
`Password` varchar(255),
Project_Id int ,
Is_Manager boolean ,
Manager_Id int,
Resume blob, 
Is_Tagged boolean ,
Constraint fk_Employee_Projects_Id foreign key	(Project_Id) references Projects(Project_Id)
);


create table Skills(Skill_Id int primary key  auto_increment,
Skill varchar(50),
Employee_Id int,
Date_of_Completion date,
Certification_Link varchar(50),
Certificate_Pdf mediumblob,
Technology_Id int,
constraint fk_Skills_Skill_Id_ foreign key (Technology_Id) references Technology(Technology_Id),
constraint fk_Skills_Employee_Id_ foreign key (Employee_Id) references Employee(Employee_Id)
);



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


insert into Projects(Project_Name,`Description`,Start_Date,End_Date,Location,Manager_Id)
values("Project 1","Description 1","2020-08-05","2025-08-06","Mumbai",101),
("Project 2","Description 2","2019-08-10","2024-08-06","Pune",201),
("Project 3","Description 3","2018-05-05","2023-08-06","Hydrabad",301),
("Project 4","Description 4","2017-01-01","2022-08-06","Kolkata",401),
("Project 5","Description 5","2016-02-02","2022-08-06","Hampi",501),
("Project 6","Description 6","2021-12-12","2025-08-06","Balaji",601);
select *from Projects;





CREATE TABLE Departments (
Department_Id int primary key  auto_increment,
Project_Id int,
Name varchar(50),
Current_Strength int,
Maximum_Strength int,
Constraint fk_Departments_Projects foreign key	(Project_Id) references Projects(Project_Id)
);

select *from Departments ;
insert into Departments values(1,2,"ABC",25,200);
insert into Departments values(2,2,"XYZ",20,200),
(3,3,"XYZ",25,200),
(4,4,"AAA",50,200),
(5,5,"BBB",100,200),
(6,6,"CCC",100,200);
drop table departments;






create table Resource
(
Resource_Id int primary key,
link varchar(50),
Resource_Name varchar(50)
);
insert into Resource values(10,"Link 1","Resource 1"),
(20,"Link 2","Resource 2"),
(30,"Link 3","Resource 3"),
(40,"Link 4","Resource 4"),
(50,"Link 5","Resource 5"),
(60,"Link 6","Resource 6");
select *from Resource;









Create Table Technology
(
Technology_Id int primary key,
Technology_Name varchar(50),
Resource_Id int,
constraint fk_Technology_Resource_Id_ foreign key (Resource_Id) references Resource(Resource_Id)
);

Create Table Technology
(
Technology_Id int primary key,
Technology_Name varchar(50),
Resource_Id int,
constraint fk_Technology_Resource_Id_ foreign key (Resource_Id) references Resource(Resource_Id)
);

insert into Technology values(1,"Technology 1",10);
insert into Technology values(2,"Technology 2",20),
(3,"Technology 3",30),
(4,"Technology 4",40),
(5,"Technology 5",50),
(6,"Technology 6",60);
select *from Technology;





CREATE TABLE Project_Requirment(
Requirement_id int,
Project_Id int,
Technology_Id int,
Constraint fk_Project_Requirment_Project_Id foreign key(Project_Id) references Projects(Project_Id),
Constraint fk_Project_Requirment_Technology_Id foreign key(Technology_Id) references Technology(Technology_Id)
);

insert into  Project_Requirment
values(100,1,1);
insert into  Project_Requirment values
(101,2,2),
(102,3,3),
(103,4,4),
(104,5,5),
(105,6,6);




Create Table Question 
(
Question_Id int primary key,
Technology_Id int,
Question varchar(200),
constraint fk_Quiz_Technology_Id_ foreign key (Technology_Id) references Technology(Technology_Id)
);

desc Question;
insert into Question values(1,1,"Question1");
insert into Question values(2,2,"Question2"),
(3,3,"Question3"),
(4,4,"Question4"),
(5,5,"Question5"),
(6,6,"Question6");
select *from Question;

Create Table Options 
(
Option_Id int primary key,
Question_Id int,
`Option` varchar(200),
isTrue boolean,
constraint fk_Options_Question_Id_ foreign key (Question_Id) references Question(Question_Id)
);



insert into Options values(10,1,"Option 1",true);
insert into Options values(20,2,"Option 1",true),
(30,3,"Option 1",true),
(40,4,"Option 1",true),(50,5,"Option 1",true),(60,6,"Option 1",true);
select *from Options;





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
Pass_word varchar(255),
Project_Id int ,
Is_Manager boolean ,
Manager_Id int,
Re_sume blob, 
Is_Tagged boolean ,
Constraint fk_Employee_Projects_Id foreign key	(Project_Id) references Projects(Project_Id),
);
drop table employee;
select *from employee;
insert into employee(Employee_Name,Designation,DateOfJoining,MobileNo,Email,Pan_Number,Gender,UserName,`Password`,Project_Id,Department_Id,Is_Manager,Manager_Id,`Resume`,Is_Tagged) 
values("Abc","Testing","2022-05-02","123456789","Abc@gmail.com","Abc.pan","Male","Abc","Password123",1,1,true,101,null,false);
desc employee;
select *from employee;





create table Skills(Skill_Id int primary key,
Skill varchar(50),
Employee_Id int,
Date_of_Completion date,
Certification_Link varchar(50),
Certificate_Pdf mediumblob,
Technology_Id int,
constraint fk_Skills_Skill_Id_ foreign key (Technology_Id) references Technology(Technology_Id),
constraint fk_Skills_Employee_Id_ foreign key (Employee_Id) references Employee(Employee_Id)
);
drop table Skills;
select *from Skills;
insert into Skills values (1,"Skill 1",1,"2022-5-5","Link 1","Pdf",1);
insert into Skills values (2,"Skill 2",1,"2021-5-5","Link 2","Pdf",1);
insert into Skills values (3,"Skill 3",1,"2020-5-5","Link 3","Pdf",1);
insert into Skills values (4,"Skill 4",1,"2022-10-15","Link 4","Pdf",1);
insert into Skills values (5,"Skill 5",1,"2022-1-1","Link 5","Pdf",1);
insert into Skills values (6,"Skill 6",1,"2019-4-3","Link 6","Pdf",1);







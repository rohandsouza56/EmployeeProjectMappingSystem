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
select *from Project_Requirment;
select *from Projects;


drop table Project_Requirment;
CREATE TABLE Project_Requirment(
Requirement_id int primary key auto_increment,
Project_Id int ,
Project_Name varchar(50),
Constraint fk_Project_Requirment_Project_Id foreign key(Project_Id) references Projects(Project_Id)
);
insert into Project_Requirment(Project_Id,Project_Name)
values(1,"Project 1"),
(2,"Project 2"),
(3,"Project 3"),
(4,"Project 4"),
(5,"Project 5"),
(6,"Project 6");




CREATE TABLE Departments (
Department_Id int primary key ,
Project_Id int,
Name varchar(50),
Current_Strength int,
Maximum_Strength int,
Constraint fk_Departments_Projects foreign key	(Project_Id) references Projects(Project_Id)
);
select *from Departments ;
drop table Departments;
insert into Departments values(1,1,"ABC",25,200);
insert into Departments values(2,2,"XYZ",20,200),
(3,3,"XYZ",25,200),
(4,4,"AAA",50,200),
(5,5,"BBB",100,200),
(6,6,"CCC",100,200);

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

insert into Technology values(1,"Technology 1",10);
insert into Technology values(2,"Technology 2",20),
(3,"Technology 3",30),
(4,"Technology 4",40),
(5,"Technology 5",50),
(6,"Technology 6",60);
select *from Technology;








Create Table Quiz 
(
Question_Id int primary key,
Technology_Id int,
Question varchar(200),
constraint fk_Quiz_Technology_Id_ foreign key (Technology_Id) references Technology(Technology_Id)
);
select *from Quiz;
insert into Quiz values(101,1,"Question1");
insert into Quiz values(102,1,"Question2"),
(103,1,"Question3"),
(104,1,"Question4"),
(105,1,"Question5"),
(106,1,"Question6");







Create Table Options 
(
Option_Id int primary key,
Question_Id int,
`Option` varchar(200),
isTrue boolean,
constraint fk_Options_Question_Id_ foreign key (Question_Id) references Quiz(Question_Id)
);
insert into Options values(10,101,"Option 1",true);
insert into Options values(20,102,"Option 1",true),
(30,103,"Option 1",true),
(40,104,"Option 1",true),(50,105,"Option 1",true),(60,106,"Option 1",true);
select *from Options;
desc Options;
ALTER TABLE Options
DROP COLUMN is_true;



create table Skills(Skill_Id int primary key,Skill varchar(50),Date_of_Completion date,Certification_Link varchar(50),Certificate_pdf mediumblob,
Technology_Id int,
constraint fk_Skills_Skill_Id_ foreign key (Technology_Id) references Technology(Technology_Id)
);

select *from Skills;
insert into Skills values (10,"Skill 1","2022-5-5","Link 1","Pdf",1);
insert into Skills values (20,"Skill 2","2022-5-5","Link 1","Pdf",2),
(30,"Skill 3","2022-5-5","Link 1","Pdf",3),
(40,"Skill 4","2022-10-5","Link 1","Pdf",4),
(50,"Skill 5","2022-12-5","Link 1","Pdf",5),
(60,"Skill 6","2021-2-2","Link 1","Pdf",6);





drop table employee;
create table Employee(
Employee_Id int primary key, 
Employee_Name varchar(20),
Designation varchar(20),
DateOfJoining date,
MobileNo varchar(10),
Email varchar(30),
Pan_Number varchar(20),
Gender varchar(10) ,
UserName varchar(20) ,
`Password` varchar(20) ,
Project_Id int ,
Department_Id int ,
Is_Manager boolean ,
Manager_Id int,
Skill_Id int ,
Resume blob , 
Is_Tagged boolean ,
Constraint fk_Employee_Projects_Id foreign key	(Project_Id) references Projects(Project_Id),
Constraint fk_Employee_Department_Id foreign key (Department_Id) references Departments(Department_Id),
Constraint fk_Employee_Skill_Id foreign key	(Skill_Id) references Skills(Skill_Id)
);

select *from employee;
drop table employee;
insert into employee values(1,"Abc","Testing","2022-05-02","123","Abc@gmail.com","Abc","Male","Abc","Abc",1,2,true,101,10,null,false);

desc employee;




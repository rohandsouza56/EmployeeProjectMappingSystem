
create database epms;
use epms;
drop database epms;
show tables;

insert into Projects(Project_Name,`Description`,Start_Date,End_Date,Location,Manager_Id)
values("Project 1","Description 1","2020-08-05","2025-08-06","Mumbai",101),
("Project 2","Description 2","2019-08-10","2024-08-06","Pune",201),
("Project 3","Description 3","2018-05-05","2023-08-06","Hydrabad",301),
("Project 4","Description 4","2017-01-01","2022-08-06","Kolkata",401),
("Project 5","Description 5","2016-02-02","2022-08-06","Hampi",501),
("Project 6","Description 6","2021-12-12","2025-08-06","Balaji",601);
select *from Projects;


insert into Departments(Project_Id,Name,Current_Strength ,Maximum_Strength)
values(2,"ABC",25,200),
(2,"XYZ",20,200),
(3,"XYZ",25,200),
(4,"AAA",50,200),
(5,"BBB",100,200),
(6,"CCC",100,200);
select *from Departments ;
drop table departments;



insert into Resource (link,Resource_Name)
values("Link 1","Resource 1"),
("Link 2","Resource 2"),
("Link 3","Resource 3"),
("Link 4","Resource 4"),
("Link 5","Resource 5"),
("Link 6","Resource 6");
select * from Resource;
truncate Resource;


insert into Technology (Technology_Name,Resource_Id)
values("Technology1",1),
("Technology2",2),
("Technology3",3),
("Technology4",4),
("Technology5",5),
("Technology6",6);
select * from Technology;
truncate Technology;



insert into  Project_Requirment(Project_Id,Technology_Id)
values(1,1),
(1,2),
(1,3),
(2,4),
(3,5),
(3,6);

select * from Project_Requirment;


desc Question;
insert into Question (Technology_Id,Question)
values(1,"Question1"),
(2,"Question2"),
(3,"Question3"),
(4,"Question4"),
(5,"Question5"),
(6,"Question6");
select *from Question;



insert into Options (Question_Id,`Option`,isTrue)
values(1,"Option 1",true),
(2,"Option 1",true),
(3,"Option 1",true),
(4,"Option 1",true),
(5,"Option 1",true),
(6,"Option 1",true);
select *from Options;


insert into Roles (Roll_Name)
values("Employee"),
("Manager"),
("Admin");
select * from roles;


insert into employee(Employee_Name,Designation,DateOfJoining,MobileNo,Email,Pan_Number,Gender,UserName,`Password`,Project_Id,Department_Id,Manager_Id,Roll_Id,`Resume`,Is_Tagged) 
values("admin","Testing","2022-05-02","123456789","Abc@gmail.com","Abc.pan","Male","admin","$10$mybMGl4uELNixxm77TlpBOugvykfT.WinkQwVXtfY0FdxMgmvySOm",1,1,2,1,null,false),
("LMN","Developer","2022-05-02","24123789","lmn@gmail.com","lmn.pan","Male","lmn","Password123",2,2,1,2,null,false);

desc employee;
select *from employee;


insert into `Admin` (Email,`Password`,Roll_Id)
values("rohan@gmail.com","Rohan123",3),
("sachin@gmail.com","Sachin123",3);
Select * from `Admin`;

ALTER TABLE `Admin`
Modify COLUMN `password` varchar(255);


insert into Skills (Skill,Employee_Id,Date_of_Completion,Certification_Link,Certificate_Pdf,Technology_Id)
values ("Skill 1",1,"2022-5-5","Link 1","Pdf",1),
("Skill 2",1,"2021-5-5","Link 2","Pdf",1),
("Skill 3",1,"2020-5-5","Link 3","Pdf",1),
("Skill 4",2,"2022-10-15","Link 4","Pdf",1),
("Skill 5",2,"2022-1-1","Link 5","Pdf",1),
("Skill 6",2,"2019-4-3","Link 6","Pdf",1);

select *from Skills;
select * from Employee;







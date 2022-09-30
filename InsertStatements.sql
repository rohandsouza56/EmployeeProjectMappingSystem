
create database epms;
use epms;
drop database epms;
show tables;

insert into Projects(Project_Name,`Description`,Start_Date,End_Date,Location,Manager_Id)
values("Oracle","Oracle Corporation is an American multinational computer technology company, headquartered in Redwood Shores, California. Oracle specializes primarily in developing and marketing database software and technology, cloud engineered systems and enterprise software products, and database management systems
","2020-08-05","2025-08-06","Mumbai",100),
("Qualtrics","Experience management legend Qualtrics continues its twenty-year campaign of excellence for transparent, international enterprise acceleration. Among the 16,000 brands that have made use of the company’s cutting-edge experience management platform are Ferrari, Coca-Cola, and Samsung.
","2019-08-10","2024-08-06","Pune",100),
("Adobe","As one of the top software providers in the world, tech giant Adobe serves millions of users across the globe. Since its start in 1982, the company has primarily been known for its multimedia and creativity software offerings. Its popular products include Photoshop, Acrobat Reader, and Creative Cloud.
","2018-05-05","2023-08-06","Hydrabad",100),
("Apeiron Remote Integrated Arctic Solar Solution
","A tier-one telecommunications client enlisted Apeiron Energy to provide a way to reduce its cellular tower’s reliance on two AC diesel generators to meet Environmental, Social, and Governance (ESG) goals, all while maintaining 99.5% reliability. The tower’s remote location in Northern Manitoba’s arctic conditions added to the appeal of using renewable energy. 
","2017-01-01","2022-08-06","Kolkata",100),
("Snowflake
","Snowflake is a cloud-based data platform provided as a SaaS solution with a completely new SQL query engine. Its innovative architecture was natively designed for the cloud, meaning it can’t be run on-premises. To the user, Snowflake provides all of the functionality of an enterprise analytic database, along with many additional special features and unique capabilities. 
","2016-02-02","2022-08-06","Hampi",100),
("Box","Box, which develops and markets cloud-based content management, collaboration, and file sharing tools for businesses
","2017-01-01","2022-08-06","Kolkata",100),
("Zscaler","Zscaler is a cloud security company that offers a platform for businesses to securely transform their networks and applications for a mobile and cloud first world
","2016-02-02","2022-08-06","Hampi",100),
("Altimetrik","The Altimetrik journey began in 2012 when Raj Vattikuti created the company to challenge the conventional approach to how businesses develop digital products and to deliver quick, lasting results.
","2017-01-01","2022-08-06","Kolkata",100),
("Pure Storage","All-flash data storage hardware and software producer Pure Storage is a rising star in the field of data center-grade solid state storage services.
","2016-02-02","2022-08-06","Hampi",100),
("Databricks","Founded in 2013 as a UC Berkeley lab project by the originators of Apache Spark, and now boasting a roughly 3,000-strong employee base, Databricks is an open-source distributed computing framework that provides clients with automated cluster management.
","2021-12-12","2025-08-06","Balaji",100);
select *from Projects;


insert into Departments(Project_Id,Name,Current_Strength ,Maximum_Strength)
values(1,"Accounts",25,30),
(1,"Development",20,21),
(1,"Operations",25,26),
(2,"Network",15,18),
(2,"Linux",10,15),
(2,"Production",14,15),
(2,"Human Resources",23,24),
(3,"Business Development",8,10),
(3,"Risk Management",12,13),
(3,"Human Resources",14,15),
(4,"Research and Development (R&D)",21,24),
(4,"Testing",16,18),
(4,"Business Development",10,13),
(5,"Mobilization",12,20),
(5,"PMO(Project Management Team)",17,20),
(6,"Human Resources",13,15),
(6,"Business Development",6,10),
(6,"Risk Management",19,24),
(7,"Human Resources",10,18),
(7,"Research and Development (R&D)",10,12),
(8,"Development",13,20),
(8,"Testing",23,27),
(9,"Testing",30,35),
(9,"Operations",26,29),
(10,"Development",22,23),
(10,"Operations",24,26);
select *from Departments ;
drop table departments;

insert into Technology (Technology_Name)
values("Spring Boot"),
("React"),
("MySql"),
("DotNet"),
("Java"),
("Python");
select * from Technology;
-- truncate Technology;

insert into Resource (link,`Description`,Technology_Id)
values("https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/","Spring Boot Notes,PDFs,E-Books",1),
("https://reactjs.org/docs/getting-started.html","React Notes,PDFs,E-Books",2),
("https://dev.mysql.com/doc/","MySql Notes,PDFs,E-Books",3),
("https://learn.microsoft.com/en-us/dotnet/","DotNet Notes,PDFs,E-Books",4),
("https://docs.oracle.com/en/java/","Java Notes,PDFs,E-Books",5),
("https://docs.python.org/3/","Python Notes,PDFs,E-Books",6);
select * from Resource;
truncate Resource;



insert into  Project_Requirment(Project_Id,Technology_Id)
values(1,1),(1,2),(1,3),(2,4),(2,5),(2,6),(3,2),(3,1),(3,6),(4,4),(4,6),
(4,5),(5,4),(5,1),(5,2),(6,1),(6,6),(7,3),(7,2),(7,5),(8,4),(8,5),
(8,1),(9,2),(9,4),(9,5),(10,1),(10,2),(10,3);
select * from Project_Requirment;



insert into Roles (Role_Name)
values("Employee"),
("Manager"),
("Admin");
select * from roles;


insert into employee(Employee_Name,Designation,DateOfJoining,MobileNo,Email,`Password`,Gender,Project_Id,Department_Id,Role_Id,`Resume`) 
values("Rohan","Testing","2020-05-02","9820571545","rohandsouza5656@gmail.com","$2a$10$vN/uMRnu8yL/g0r0PDQcPOMMK0GFD/Ofn7wx2TeqBXfdRm8hY6qY2","Male",1,1,1,null),
("Sanket","Developer","2022-05-02","9921149469","srdongare10@gmail.com","$2a$10$kfy.hhz7ZifGMTyYc5OEm.zQRyBzz6TDY5FyZeZR2RGCLDp4NHXam","Male",2,5,1,null),
("Sachin","Developer","2021-02-28","9651149455","sachinbichitkar335@gmail.com","$2a$10$5ulvgvc5I57MmW1aX3nz6eHEavof8NFkRnRK6aJ1sl5qD8sxK4XMu","Male",3,9,1,null),
("Sakshi","Developer","2018-05-02","9733449485","arzaresakshi1@gmail.com","$2a$10$Wo0WZizNR67ogYJVfplwP.Cff7ZHYlRgRxwXvAbBzOCoNLiyKFEiW","Female",4,12,1,null),
("Shubham","Developer","2022-05-02","9921149485","shubhamkrps@gmail.com","$2a$10$s9Oa0CMcMHnnGKrS6MFgC.YxY/dRHomTE4MLlCpST9iXtlQZ60HJC","Male",5,15,1,null),
("Rohan M","Developer","2016-10-20","9894149995","rohandsouza974@gmail.com","$2a$10$U056/lKEIB.BothAZSLUNOFqqM2FpUrQ0N79jAcH1JkYtWJ.kwZ3G","Male",1,1,2,null);

desc employee;
select *from employee;


insert into `Admin` (`Name`,Email,`Password`,Role_Id)
values("Admin","projectmappingsystems@gmail.com","$2a$10$zjv/.BAggkJAF3f1SY9DCejNoGaYOrz1ReExWCsZI/Duglyg2ba32",3);

Select * from `Admin`;

truncate table `Admin`;

-- ALTER TABLE `Admin`
-- Modify COLUMN `password` varchar(255);


insert into Skills (Skill,Employee_Id,Date_of_Completion,Certification_Link,Certificate_Pdf,Technology_Id)
values ("Skill Description",1,"2022-5-5","Link 1","Pdf",1),
("Skill Description",1,"2021-5-5","Link 2","Pdf",2),
("Skill Description",2,"2020-5-5","Link 3","Pdf",3),
("Skill Description",2,"2022-10-15","Link 4","Pdf",4),
("Skill Description",3,"2021-5-5","Link 2","Pdf",5),
("Skill Description",3,"2020-5-5","Link 3","Pdf",6),
("Skill Description",4,"2022-10-15","Link 4","Pdf",1),
("Skill Description",4,"2021-5-5","Link 2","Pdf",2),
("Skill Description",5,"2020-5-5","Link 3","Pdf",3),
("Skill Description",5,"2022-10-15","Link 4","Pdf",4),
("Skill Description",6,"2021-5-5","Link 2","Pdf",5),
("Skill Description",6,"2021-5-5","Link 2","Pdf",6);


select *from Skills;
select * from Employee;


show variables like 'max_allowed_packet';
SET GLOBAL max_allowed_packet=1073741824;








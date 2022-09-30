-- 1. Spring Boot 
insert into Question (Technology_Id,Question)
values(1,"What is Dependency Injection?"),
(1,"What is global-session scope?"),
(1,"What is bean autowiring?"),
(1,"What is true about @Autowired annotation?"),
(1,"What is Target object?"),
(1,"What is Spring MVC framework?"),
(1,"SpEL is part of core container?"),
(1,"How to handle shut down of IoC container?"),
(1," Which of the following class can be used to call Stored Procedures in spring?"),
(1,"Which one of following is an alternative to Spring HibernateTemplate?");

select *from Question;
truncate table question;
select *from Options;
insert into Options (Question_Id,`Option`,isTrue)
values(1,"It is a de
sign pattern which implements Inversion of Control for software applications.",true),(1,"It is one of the spring module.",false),(1,"It is a technique to get dependencies of any project.",false),(1,"It is used to promote tight coupling in code.",false),
(2,"This scopes a bean definition to an HTTP Application/ Global session.",true),(2,"This scopes the bean definition to Spring IoC container.",false),(2,"This scopes the bean definition to HTTP request.",false),(2,"This scopes the bean definition to HTTP Session.",false),
(3,"Autowiring helps in wiring a list of values, allowing duplicates.",false),(3,"Autowiring lets Spring resolve collaborators (other beans) for your bean by inspecting the contents of the BeanFactory without using <constructor-arg> and <property> elements.",true),(3,"Autowiring injects values in spring beans.",false),(3,"Autowiring injects one bean into another.",false),
(4,"The @Autowired annotation can be used to autowire bean on the setter method.",false),(4,"The @Autowired annotation can be used to autowire bean on the methods with arbitrary names and/or multiple arguments.",false),(4,"This annotation provides more fine-grained control over where and how autowiring should be accomplished.",true),(4,"All of above.",false),
(5,"A represents a object in your application where you can plug-in AOP aspect.",false),(5,"The object being advised by one or more aspects, this object will always be a proxy object, also referred to as the advised object.",true),(5,"This is used to inject values in objects.",false),(5,"This is not invoked during program execution by Spring AOP framework.",false),
(6,"Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",false),(6,"Spring MVC framework is used for Transaction management for Web Applications.",false),(6,"Spring MVC framework is used for AOP for Web Applications.",false),(6,"The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",true),
(7,"False",false),(7,"True",true),
(8,"Using shutdownHook()",false),(8,"Using shutdownHandler()",false),(8,"Using registerHook()",false),(8,"Using registerShutdownHook()",true),
(9,"SPHelper",false),(9,"JdbcTemplateCall",false),(9,"SimpleJdbcCall",true),(9,"JdbcTemplate",false),
(10,"Hibernate contextual sessions",true),(10,"HibernateContext",false),(10,"All of the mentioned",false),(10,"None of the mentioned",false);

-- 2. React
insert into Question (Technology_Id,Question)
values(2,"Which of the following is the correct name of React.js?"),
(2,"Which of the following command is used to install create-react-app?"),
(2,"What of the following is used in React.js to increase performance?"),
(2," Which of the following acts as the input of a class-based component?"),
(2,"What is the default port where webpack-server runs?"),
(2," How many numbers of elements a valid react component can return?"),
(2,"What is a state in React?"),
(2,"What are the two ways to handle data in React?"),
(2,"In which of the following directory React.js components are saved?"),
(2,"Which of the following is a must API for every React.js component?");

insert into Options (Question_Id,`Option`,isTrue)
values(11,"React",false),(11,"React.js",false),(11,"ReactJS",false),(11,"All of the above",true),
(12,"npm install -g create-react-app",true),(12,"npm install create-react-app.",false),(12,"npm install -f create-react-app",false),(12,"install -g create-react-app",false),
(13,"Original DOM",false),(13,"Virtual DOM.",true),(13,"Both A and B",false),(13,"None of the above.",false),
(14,"Class",false),(14,"Factory",false),(14,"Render",false),(14,"Props",true),
(15,"3000",false),(15,"8080",true),(15,"3030",false),(15,"6060",false),
(16,"1",true),(16,"2",false),(16,"4",false),(16,"5",false),
(17,"A permanent storage.",false),(17,"Internal storage of the component.",true),(17,"External storage of the component.",false),(17,"None of the above",false),
(18,"State & Props",true),(18,"Services & Components",false),(18,"State & Services",false),(18,"State & Component",false),
(19,"Inside the js/components/",true),(19,"Inside the vendor/components/",false),(19,"Inside the external/components/",false),(19,"Inside the vendor/",false),
(20,"SetinitialComponent",false),(20,"renderComponent",true),(20,"render",false),(20,"All of the above",false);

-- 3.SQL
insert into Question (Technology_Id,Question)
values(3,"Which of these is also known as a virtual table?"),
(3, "A view can refer to multiple tables via __________?"),
(3, "A view can be deleted using the command __________?"),
(3, "What cannot be done on a view?"),
(3, " Which subquery returns a single value?"),
(3,"The facility that allows nesting one select statement into another is called __________?"),
(3,"Which of these operators perform similar operations like ALL and ANY?"),
(3,"Which operators test whether a subquery returns any rows?"),
(3,"Which of these operators does not perform relative-value comparisons?"),
(3, "Usage of aggregates in WHERE clause is allowed.?");

insert into Options (Question_Id,`Option`,isTrue)
values(21,"VIEW.",true),(21,"JOIN.",false),
(22,"DATABASE",false),(22,"SCHEMA",false),(22,"JOIN",true),(22,"SCHEMA",false),
(23,"REMOVE.",false),(23,"DELETE.",false),(23,"GROUP",false),(23,"DROP",true),
(24,"DISPLAY.",false),(24,"INDEX.",true),(24,"DROP",false),(24,"FILTER",false),
(25,"SCALER.",true),(25,"COLUMN",false),(25,"ROW",false),(25,"TABLE",false),
(26,"NESTING.",false),(26,"SUBQUERING.",true),(26,"BINDING",false),(26,"ENCAPSULATING",false),
(27,"SOME",true),(27,"MANY",false),(27,"GROUP",false),(27,"SELECT",false),
(28,"IN AND NOT IN.",false),(28,"EXISTS AND NOT EXISTS.",true),(28,"PRESENT",false),(28,"ABSENT",false),
(29,"=.",false),(29,"<=.",false),(29,">=",false),(29,"==",true),
(30,"TRUE.",false),(30,"FALSE.",true);

-- .Net
insert into Question (Technology_Id,Question)
values(4,"Which of the following is a .net obfuscation solution"),
(4,"Which of the following does the actual .Net code execute?"),
(4,"When does Garbage collector run?"),
(4,"Which tool can be used to precompile a window application?"),
(4,".Net remote server object must implement"),
(4,"Which of the CLR component allows .net application exchange data with COM application?"),
(4,"__________ contains information about the assembly and the resources that it depends on"),
(4,"What are the configuration files used by the .Net Framework?"),
(4,"Which of the following is the tool to modify configuration files?"),
(4,"The first event triggers in an aspx page is.");

insert into Options (Question_Id,`Option`,isTrue)
values(31,"Decompiles DLL back into actual source code",false),(31,"It determines if or not a piece of code is allowed to run",false),(31," Prevent a .NET DLL to be decompiled",true),(31,"None of the above",false),
(32,"CLS",false),(32," MSIL",false),(32,"CTS",false),(32,"CLR",true),
(33,"Every one minute",false),(33,"When application is running low of memory",true),(33,"It runs randomly",false),
(34,"ngen.exe",true),(34," caspol.exe",false),(34,"caspol.dll",false),(34,"ngen.dll",false),
(35,"ISingleCall",false),(35,"ISerializable",true),(35,"IUnknown",false),(35,"IMarshalByValue",false),
(36,"Base class library",false),(36,"COM marshaller",true),(36,"Class loader",false),(36,"Thread support",false),
(37,"MSIL",false),(37,"Assembly manifest",true),(37,"GAC",false),(37,"Type metadata",false),
(38,"Machine configuration, Machine.config file",false),(38,"Application configuration file",false),(38,"Security configuration file",false),(38,"All of the above",true),
(39,"Mscorcfg.msc",false),(39,"Caspol.exe",false),(39," IIASM.exe",false),(39,"a and b",true),
(40," Page_Init()",true),(40,"Page_Load()",false),(40,"Page_click()",false);

-- 5.Java
insert into Question (Technology_Id,Question)
values(5,"Which of the following is not OOPS concept in Java?"),
(5,"Which of the following is a type of polymorphism in Java?"),
(5,"When does method overloading is determined?"),
(5," When Overloading does not occur?"),
(5,"Which concept of Java is a way of converting real world objects in terms of class?"),
(5,"Which concept of Java is achieved by combining methods and attribute into a class?"),
(5,"What is it called if an object has its own lifecycle and there is no owner?"),
(5,"What is it called where child object gets killed if parent object is killed?"),
(5,"What is it called where object has its own lifecycle and child object cannot belong to another parent object?"),
(5,"Method overriding is combination of inheritance and polymorphism?");

insert into Options (Question_Id,`Option`,isTrue)
values(41,"Inheritance",false),(41,"Encapsulation",false),(41,"Polymorphism",false),(41,"Compilation",true),
(42,"Compile time polymorphism",true),(42," Execution time polymorphism",false),(42,"Multiple polymorphism",false),(42," Multilevel polymorphism",false),
(43," At run time",false),(43,"At compile time",true),(43,"At coding time",false),(43,"At execution time",false),
(44," More than one method with same name but different method signature and different number or type of parameters",false),(44,"More than one method with same name, same signature but different number of signature",false),(44,"More than one method with same name, same signature, same number of parameters but different type",false),(44,"More than one method with same name, same number of parameters and type but different signature",true),
(45,"Polymorphism",false),(45,"Encapsulation",false),(45,"Abstraction",true),(45,"Inheritance",false),
(46,"Encapsulation",true),(46,"Inheritance",false),(46,"Polymorphism",false),(46,"Abstraction",false),
(47,"Aggregation",false),(47,"Composition",false),(47,"Encapsulation",false),(47,"Association",true),
(48,"Aggregation",false),(48,"Composition",true),(48,"Encapsulation",false),(48,"Association",false),
(49,"Aggregation",true),(49,"Composition",false),(49,"Encapsulation",false),(49,"Association",false),
(50,"True",true),(50,"False",false);

-- 6.Python
insert into Question (Technology_Id,Question)
values(6,"What is the maximum length of a Python identifier?"),
(6,"Who developed the Python language?"),
(6,"In which language is Python written?"),
(6,"Which one of the following is the correct extension of the Python file?"),
(6,"In which year was the Python 3.0 version developed?"),
(6,"What do we use to define a block of code in Python language?"),
(6,"Which character is used in Python to make a single line comment?"),
(6,"Which of the following statements is correct regarding the object-oriented programming concept in Python?"),
(6," What is the method inside the class in python language?"),
(6,"Why does the name of local variables start with an underscore discouraged?");

insert into Options (Question_Id,`Option`,isTrue)
values(51,"32",false),(51,"16",false),(51,"28",false),(51,"No fixed length is specified",true),
(52,"Zim Den",false)
,(52,"Guido van Rossum",true),(52,"Niene Stom",false),(52,"Wick van Rossum",false),
(53,"English",false),(53,"PHP",false),(53,"C",true),(53,"All of the above",false),
(54,".py",true),(4,".python",false),(54,".pyt",false),(54,"None of these",false),
(55,"2008.",true),(55,"2000",false),(55,"2010",false),(55,"2005",false),
(56,"Key",false),(56,"Brackets",false),(56,"Indentation",true),(56,"None of these",false),
(57,"/",false),(57,"//",false),(57,"#",true),(57,"!",false),
(58,"Classes are real-world entities while objects are not real",false),(58,"Objects are real-world entities while classes are not real",true),(58,"Both objects and classes are real-world entities",false),(58,"All of the above",false),
(59,"Object",false),(59,"Function",true),(59,"Attribute",false),(59,"Argument",false),
(60,"To identify the variable",false),(60,"It confuses the interpreter",true),(60,"It indicates a private variable of a class",true),(60,"None of these",false);

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

insert into Options (Question_Id,`Option`,isTrue)
values(1,"It is a design pattern which implements Inversion of Control for software applications.",true),(1,"It is one of the spring module.",false),(1,"It is a technique to get dependencies of any project.",false),(1,"It is used to promote tight coupling in code.",false),
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
values(31,"VIEW.",true),(31,"JOIN.",false),
(32,"DATABASE",false),(32,"SCHEMA",false),(32,"JOIN",true),(32,"SCHEMA",false),
(33,"REMOVE.",false),(33,"DELETE.",false),(33,"GROUP",false),(33,"DROP",true),
(34,"DISPLAY.",false),(34,"INDEX.",true),(34,"DROP",false),(34,"FILTER",false),
(35,"SCALER.",true),(35,"COLUMN",false),(35,"ROW",false),(35,"TABLE",false),
(36,"NESTING.",false),(36,"SUBQUERING.",true),(36,"BINDING",false),(36,"ENCAPSULATING",false),
(37,"SOME",true),(37,"MANY",false),(37,"GROUP",false),(37,"SELECT",false),
(38,"IN AND NOT IN.",false),(38,"EXISTS AND NOT EXISTS.",true),(38,"PRESENT",false),(38,"ABSENT",false),
(39,"=.",false),(39,"<=.",false),(39,">=",false),(39,"==",true),
(40,"TRUE.",false),(40,"FALSE.",true);

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
values(41,"Decompiles DLL back into actual source code",false),(41,"It determines if or not a piece of code is allowed to run",false),(41," Prevent a .NET DLL to be decompiled",true),(41,"None of the above",false),
(42,"CLS",false),(42," MSIL",false),(42,"CTS",false),(42,"CLR",true),
(43,"Every one minute",false),(43,"When application is running low of memory",true),(43,"It runs randomly",false),
(44,"ngen.exe",true),(44," caspol.exe",false),(44,"caspol.dll",false),(44,"ngen.dll",false),
(45,"ISingleCall",false),(45,"ISerializable",true),(45,"IUnknown",false),(45,"IMarshalByValue",false),
(46,"Base class library",false),(46,"COM marshaller",true),(46,"Class loader",false),(46,"Thread support",false),
(47,"MSIL",false),(47,"Assembly manifest",true),(47,"GAC",false),(47,"Type metadata",false),
(48,"Machine configuration, Machine.config file",false),(48,"Application configuration file",false),(48,"Security configuration file",false),(48,"All of the above",true),
(49,"Mscorcfg.msc",false),(49,"Caspol.exe",false),(49," IIASM.exe",false),(49,"a and b",true),
(50," Page_Init()",true),(50,"Page_Load()",false),(50,"Page_click()",false);

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
values(51,"Inheritance",false),(51,"Encapsulation",false),(51,"Polymorphism",false),(51,"Compilation",true),
(52,"Compile time polymorphism",true),(52," Execution time polymorphism",false),(52,"Multiple polymorphism",false),(52," Multilevel polymorphism",false),
(53," At run time",false),(53,"At compile time",true),(53,"At coding time",false),(53,"At execution time",false),
(54," More than one method with same name but different method signature and different number or type of parameters",false),(54,"More than one method with same name, same signature but different number of signature",false),(54,"More than one method with same name, same signature, same number of parameters but different type",false),(54,"More than one method with same name, same number of parameters and type but different signature",true),
(55,"Polymorphism",false),(55,"Encapsulation",false),(55,"Abstraction",true),(55,"Inheritance",false),
(56,"Encapsulation",true),(56,"Inheritance",false),(56,"Polymorphism",false),(56,"Abstraction",false),
(57,"Aggregation",false),(57,"Composition",false),(57,"Encapsulation",false),(57,"Association",true),
(58,"Aggregation",false),(58,"Composition",true),(58,"Encapsulation",false),(58,"Association",false),
(59,"Aggregation",true),(59,"Composition",false),(59,"Encapsulation",false),(59,"Association",false),
(60,"True",true),(60,"False",false);

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
values(61,"32",false),(61,"16",false),(61,"28",false),(61,"No fixed length is specified",true),
(62,"Zim Den",false),(62,"Guido van Rossum",true),(62,"Niene Stom",false),(62,"Wick van Rossum",false),
(63,"English",false),(63,"PHP",false),(63,"C",true),(63,"All of the above",false),
(64,".py",true),(4,".python",false),(64,".pyt",false),(64,"None of these",false),
(65,"2008.",true),(65,"2000",false),(65,"2010",false),(65,"2005",false),
(66,"Key",false),(66,"Brackets",false),(66,"Indentation",true),(66,"None of these",false),
(67,"/",false),(67,"//",false),(67,"#",true),(67,"!",false),
(68,"Classes are real-world entities while objects are not real",false),(68,"Objects are real-world entities while classes are not real",true),(68,"Both objects and classes are real-world entities",false),(68,"All of the above",false),
(69,"Object",false),(69,"Function",true),(69,"Attribute",false),(69,"Argument",false),
(70,"To identify the variable",false),(70,"It confuses the interpreter",true),(70,"It indicates a private variable of a class",true),(70,"None of these",false);

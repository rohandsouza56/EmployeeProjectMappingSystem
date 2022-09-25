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
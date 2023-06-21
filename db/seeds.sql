INSERT INTO department (id, names)
VALUES (1,"Sales"),
       (2,"Sales"),
       (3,"Engineering"),
       (4,"Engineering"),
       (5,"Finance"),
       (6,"Finance"),
       (7,"Legal"),
       (8,"Legal");


INSERT INTO role (id, title, salary, department_id)
VALUES (1,"Sales Lead",100000,1),
       (2,"Salesperson",80000,1),
       (3,"Lead Engineer",150000,3),
       (4,"Software Engineer",120000,3),
       (5,"Accountant",125000,5),
       (6,"Legal Team Lead",250000,7),
       (7,"Lawyer",190000,7);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1,"John","Doe",1,NULL),
       (2,"Mike","Chan",2,1),
       (3,"Ashley","Rodriguez",2,NULL),
       (4,"Kevin","Tupik",3,3),
       (5, "Kunal", "Singh", 4, NULL),
       (6,"Malia","Brown",4,5),
       (7,"Sarah","Lourd",3,NULL),
       (8,"Tom","Allen",5,7);

      

       

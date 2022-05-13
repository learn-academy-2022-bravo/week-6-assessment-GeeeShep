# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The student model will be the Foreign Key. It belongs_to :cohort

  Researched answer: so the foreign key relates the two databases. If you forget to create the foreign key you can execute an an alter script to add the foreign key after table creation. 
  The foreign key would be on the student model since it belongs to the cohort model.


2. Which RESTful routes must always be passed params? Why?

  Your answer: I think that would be create, show, update, delete.

  Researched answer: Show, update and delete should have params. I believe we need the param
  to point to the specific model that we are working with.



3. Name three rails generator commands. What is created by each?

  Your answer:i believe two of those commands are rails generate model and rails generate resource. I cannot recall the third command. 

  Researched answer: 
  generate model: creates a migration, model , and tests for the files that were generated
  generate controller:this is where  you put the methods you want included in the new controller
  generate resource: creates everything to work with the app as a data resource. it sets up the migration and the model to use the app as an active record class while also creating the controller, empty views and resource routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students  

This should be the INDEX method. This lists all the items in the model(show all), reps the 'R' in CRUD

action: "POST"   location: /students 
This should be the CREATE method. This adds info to the database(new data), reps the 'C' in CRUD     

action: "GET"    location: /students/new
This should be the NEW method. This makes the route that displays a form to the user, reps between the  'C'and 'R' in CRUD  

action: "GET"    location: /students/2  
This should be the SHOW method. This for listing one item in a model, (show one) reps  the  'R' in CRUD  

action: "GET"    location: /students/2/edit  
 This should be the EDIT method. This for updating the form in the model, also reps  the  'R' in CRUD  

action: "PATCH"  location: /students/2      
This should be the UPDATE method. This for modifying data in the model, also reps  the  'U' in CRUD  

action: "DELETE" location: /students/2      

This should be the DESTROY method. This for removing data in the model, also reps  the  'D' in CRUD  


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, i want to know all my listed tasks early, so can plan for the week.
2. As a user, i need to know which are priority, so i can organize them.
3. As a user, i want to knw the time limit on my list , so that I can ensure i have the appropriate time available.
4. As a user, i need to know which task will take more than 24hrs to complete, so i dont double up on tasks too lengthy.
5. As a user, i need to organize the lengthy items on the list so as to start them in a timely manner if needed
6. As a user , i want to know the progress of my list, so they can be tracked.
7. As a user, i want to know the daily tasks, to ensure the correct tasks are being done
8. As a user, i want to be able to inspect my list daily, so i can adapt or change if needed

9. As a user, I need to be able to update my list, to reflect completed items.
10. As a user, i want to know the dedicated extra time I have to complete tasks that were not completed in the alloted time
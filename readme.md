# User stories
1. As a user I can see the restaurants and their available products, each with the latest
review and the average rating, if they exist.
2. As a user I can rate and leave reviews for each restaurant and product.
3. As a user I can filter restaurants based on cuisine. (Optional)
4. As a user I can see all the restaurants I have rated in the past (Optional).


## Choice of tech stack
`Frontend` - React With Material-UI, react-router-dom

`Frontend-Testing` - Jest for unit test, Cypress for e2e (Not implemented yet)

`Backend` - Nestjs

`Backend-Testing` - Jest + @nestjs/testing

`Database` - MongoDb (Will change to PostgreSQL later, Just need to change the database driver)

## Database Design

A simple ER-Diagram for a simple task

<img src="assets/er-diagram.png">

## Adding test data

1. With mongo locally installed -> run importScript.sh 
2. The script should add Resturants and Products for the application
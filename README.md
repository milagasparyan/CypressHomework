# CypressHomework
Cypress e2e test in SauceDemo.com

Dependencies:
1. JavaScript 
2. Node v16.16.0
3. Cypress 10.3.0
 
cd to root directory of the project
Install Node modules using npm install

Running tests:
1. browser mode: npx cypress open
2. headless mode: npx cypress run


Steps:
1. Open web-page https://www.saucedemo.com/ 
2. Login an account
3. Add a product to cart
4. Assert the existance of the product in cart
5. Delete product
6. Assert the product is deleted
7. Logout the account

Cypress
=======

Agenda :-

1. What is Cypress.
2. IDE & Pre-requisites. 
3. Getting started.
4. Object locators. 
5. Cypress with JavaScript.  
6. Cypress with TypeScript. 
7. Assertions. 
8. App Actions. 
9. Group Tests. 
10. CLI. 
11. Package.json. 
12. File Handling. (Read, Write, Upload & Download)
13. Reporting. 
14. API Testing. 
15. Custom Commands. 
16. Cypress Studio. 
17. Cypress Dashboard. 
18. Cypress BDD framework. 
19. Data Integration. 
20. Git. 
21. Jenkins. 

================================================
1. What is Cypress. 
================================================

> Test Automation Tool, that can test any thing runs on a WEB BROWSER. 
> Test cases can be write in JavaScript OR TypeScript. 
> It DOESN'T use SELENIUM. 
> Open source. 
> cypress.io

Featurs:--
1. Time Travel - Take snapshots as your tests run. 
2. Debugging - Readable error & stack traces. 
3. Automatic Waiting - Automatically waits for Commands & Assertions before move on. 
4. Consistant Results - Does not use SELENIUM or WEBDRIVER. Fast, consistant & reliable. 
5. Screenshots & Videos
6. Cross Browser Testing - Locally or Remote

Links:--
Documenation: https://docs.cypress.io/guides/overview/why-cypress
Examples: https://example.cypress.io/

================================================
2. IDE & Pre-requisites. 
================================================

IDE: Visual Studio Code. 
Pre-requisites: NodeJS, basic JavaScript (jquary)

=================================================
3. Getting started.
=================================================

> Step 1: Install Node.js.
> Step 2: Install Visual Studio Code.
> Step 3: Create a folder for Cypress project. 
> Step 4: Open the Project folder in VScode. 
> Step 5: Open terminal in VScode and run below command, 
          which will create a Package.json file to start node project.
            npm init -y
> Step 6: Install Cypress :-- npm install cypress --save-dev
          Cypress version :-- npx cypress -v
          Verify cypress installation :-- npx cypress verify
> Step 7: Open Cypress :-- npx cypress open

Folder sturcture :--
--------------------
> Cypress
    > downloads
    > e2e
        > spec.cy.js
    > fixtures
        > example.json
    > supports
> node_modules
> cypress.config.js
> package-lock.json
> package.json

First Test :--
--------------

> Step 1: Create a file under Cypress folder
          test.cy.js
> Step 2: At the top, mention (it will provide cypress intel): 
            /// <reference types='cypress'/>
To write a test and run it, we need test runner - mocha
mocha comes built-in with cypress

> Step 3: Write test function. 

    it('Google Search', () => {
        cy.visit("https://www.google.com/")
    })

    it() block is used for test cases:: (title: string, fn?: Mocha.Func | undefined) => Mocha.Test
    IT have 2 parameters, title & fn. title is to discribe the test and test script should goes inside arrow fn.

    By default, script will re-execute on any code change. To spot that, add below configuration in below file under
    setupNodeEvents function and inside e2e object. 
        cypress.config.js
            watchForFileChanges: false

    check for more configurations :-- https://docs.cypress.io/guides/references/configuration

> Step 4: Test modification to open vacca vacca song

    it('Google Search', () => {
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type("Gangnam Style{Enter}")
        cy.get('.qm9rMe', {
            timeout: 5000
        }).click()
    })

    {Enter} is cypress keybord, which used to press enter key. To know about more cypress keyboard, checkout below link.
    Link: https://docs.cypress.io/api/commands/type

Commands we have learned
-------------------------
1. cy.visit()       cy.visit("https://www.google.com/")
2. cy.get()         cy.get('.class')
3. type()           cy.get('#id').type("Gangnam Style{Enter}")
4. click()          cy.contains('Videos').click()
5. timeout          cy.get('#id', {typeout: 5000}).type("Gangnam Style{Enter}")
                    In global level, you can add below config in cypress.config.js
                        defaultCommandTimeout: 10000
          
Cypress
=======

Agenda :-

1. What is Cypress.
2. IDE & Pre-requisites. 
3. Getting started.
4. Assertions. 
5. App Actions. 
6. Group Tests. 
7. CLI. 
8. Package.json. 
9. File Handling. (Read, Write, Upload & Download)
10. Reporting. 
11. API Testing. 
12. Custom Commands. 
13. Cypress Studio. 
14. Cypress Dashboard. 
15. Cypress BDD framework. 
16. Data Integration. 
17. Git. 
18. Jenkins. 

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

=================================================
4. Assertions.
=================================================    

1. Implicit :-- In-built assertions
    Commands in cypress like should() check for expected conditons without having any assert of expect command.
    > should()
    > and()

2. Explicit :-- user defined or referred
    Have to use specific assert commands like assert() or expect()
    > assert()
    > expect()

1. Implicit :-- In-built assertions
-----------------------------------

it('Assertion Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.id', 'query-btn')
        .should('be.visible')
        .should('be.enabled')
})

What we have learned:--

should-contain      .should('contain','Button')
should-have         .should('have.class','query-btn')
                             have.text
                             have.html
should-be           .should('be.visible')
                             be.selected
                             be.disabled
                             be.enabled
                             be.focused = have.focus
should-equal        .invoke('attr','id').should('equal','query-btn')
and                 changed assertions
                    cy.get('#query-btn')
                        .should('contain', 'Button')
                        .and('have.id', 'query-btn')
                        .and('be.visible')
                        .and('be.enabled')

 2. Explicit :-- user defined or referred
-----------------------------------------

expect:--

expect(true).to.be.true // Nothing will show, is assertion success
expect(true).to.be.false // Assertion fails and execution intrupte with error

let name = "cypress"
expect(name).to.be.equal("cypress")

to.not.equal()
to.be.a('string')
to.be.true
to.be.false
to.be.null
to.exist

assert:--

assert.equal(4, 5, "Not Equal") // Fail and intrupte execution
assert.equal(4, 4, "Is Equal") // it will pass
assert.equal(4, '4', "Is Equal (not strict '4')") // this will pass, js will consider 4 & '4' same, such case strictEqual is a choice
assert.strictEqual(4, 4, "Equal")// it will pass
assert.strictEqual(4, 4, "Equal") // it will fail

--> assert.equal(actual: any, expected: any, message?: string | undefined): void
--> assert.strictEqual<number>(actual: number, expected: number, message?: string | undefined): void

assert.notEqual             assert.true
assert.strictEqual                .false
assert.isAbove                    .isString
assert.isBelow                    .isNotString
assert.exist                      .isNumber
assert.notExist                   .isNotNumber

================================================
5. App Actions.
================================================

> App actions are shortcuts in application. 
> Provide users a quick way to navigate to specific activities in application.
> Change the state of the application without user intractions (GUI). 

================================================
6. Group Tests.
================================================

> Step 1: Create a file under Cypress folder
          grouptest.cy.js
> Step 2: At the top, mention (it will provide cypress intel): 
            /// <reference types='cypress'/>
> Step 3: Write test function inside describe(). 

.only - to run only a single text in describe
.skip - skip test in describe
beforeEach - this block can be used to run common script that need to be executed before each test
        within describe block - Run before each test in that describe group
        outside describe block - Runs before each test in that spec file
        inside e2e.js file - Runs before every test in every spec files.

describe("Group Test Demo", () => {

    beforeEach("Load Google", () => {
        cy.visit("https://www.google.com/")
    })

    it.only('Google Search', () => {
        cy.get('#APjFqb').type("Gangnam Style{Enter}")
        cy.contains('PSY - GANGNAM STYLE(강남스타일) M/V - YouTube', {
            timeout: 15000
        }).click()
        
    })

    it.skip('Google Search', () => {
        cy.get('#APjFqb').type("Gangnam Style{Enter}")
        cy.contains('PSY - GANGNAM STYLE(강남스타일) M/V - YouTube', {
            timeout: 15000
        }).click()
        
    })
})

========
7. CLI.
========

Why CLI
------

make the execution easier, faster and efficient. 
less memory consumption. 
to Integration testing with external process. 

> Step 1 - Open terminal and run command - npx cypress run
> Run spec with chrome browser
npx cypress run -s .\cypress\e2e\assertiontest.cy.js -b chromew to

How to run commands from package.json file
------------------------------------------

> Step 1 - open package.json file
> Step 2 - add commands in scripts section in json

 "scripts": {
    "pretest": "echo pretest",
    "posttest": "echo posttest",
    "test": "echo Im test",
    "cy-test": "npx cypress run -s ./cypress/e2e/assertiontest.cy.js -b chrome",
    "cy-run": "npx cypress run"
  },

How to add conifguration in commands
------------------------------------

cypress run --config pageLoadTimeout=10000 watchForFileChanges=false
cypress run --config {"pageLoadTimeout": 10000, "watchForFileChanges": false}

================================================
9. File Handling. (Read, Write, Upload & Download)
================================================

> Step 1. Create a folder, let say fixtures.
> Step 2. Create a json file and add json test data.
{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data for responses to routes"
}
> Step 3. To get that json data, be can user fixture()
it('Read file using fixture', () => {
    cy.fixture('example.json').then(data => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
})

alias
----

before(function() {
    cy.fixture('example.json').as('test_data')
})


it('Read file using fixture', () => {
    cy.fixture('example.json').then(data => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })

    cy.log(this.test_data.name) //Alias 
})

ReadFile
-------

it('Read File', () => {
    cy.readFile('./cypress/fixtures/example.json').then(data => {
        cy.log(data.name)
    })
})

WriteFile
---------

it('WriteFile', () => {
    cy.writeFile('.sample.txt', "Hello World")
})

File Upload
-----------
> Step 1: Install cypress-file-upload plugin
    npm install --save-dev cypress-file-upload
> Step 2: if TypeScript is using, ensure tsconfig.json contains 
    "compilerOptions": {
        "types": ["cypress", "cypress-file-upload"]
    }
> Step 3: Add to cypress/support/commands.js
    import 'cyprss-file-upload'
> Step 4: import command.js in e2e
    import "./commands'
> Step 5: upload file like this.
    cy.get('#id').attachFile(example.json)



module.exports = {

    "Frontend Test": function (browser){

          browser
          //Entering the given URL
          .url("https://simplepos.ai/")
          //Maximizing window of the browser
          .windowMaximize()
          //Waiting for the body page to be visible
          .waitForElementVisible('body', 1000)
          //Verifying that the title og the page is the one pass thru
          .assert.title("Factura Simple")
          //Waiting for the specific element to be visible
          .assert.visible("a[title='Login']")
          //Performing the following action to the element
          .click("a[title='Login']")
          //Waiting for the body page to be visible
          .waitForElementVisible('body', 1000)
          //Verifying that the element has the containing text
          .assert.containsText("button[type='submit']" , "Iniciar Sesión")
          //Setting the values for the email field
          .setValue("input[placeholder='Email']" , "demo@cualit.com")
          //Setting the value for the password field
          .setValue("input[placeholder='Contraseña']" , "facturasimple")
          //Verifying that the submit button is enable after the email and password is entered
          .assert.enabled("button[type='submit']")
          //Click on the submit button
          .click("button[type='submit']")
          //Waiting for the body page to be visible
          .waitForElementVisible('body', 1000)
          //Verifying that the title og the page is the one pass thru
          .assert.title("Factura Simple | Administración")
          //Verifying that the name of the user is displayed, also I didn't found another way to locate this element to verify it
          .assert.containsText("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)" , "Demo Admin")
          //Ending the test script
          .end();

    }

}
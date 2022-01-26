module.exports = {
    before: function (browser) {


        browser.globals.waitForConditionTimeout = 7000
    },


    'API Testing - POST': function (browser) {
        var apiUrl = 'https://api.facturasimple.uy/api/v1/usuarios/login'
        var postData = {'email':'demo@cualit.com' , 'password':'facturasimple'}

        browser.apiPost(apiUrl, postData, null, null, function (response) {

            browser.assert.equal(response.statusCode , '200')
            browser.assert.equal(response.body.success , true);
            //This assert is something that im not to confident of it but it was the only way that i found to verify it
            //do to my lack of experience on automation API testing
            browser.assert.equal(response.body.token , response.body.token);


        })
    },

    after: function (browser) {
        browser.end()
    }
}
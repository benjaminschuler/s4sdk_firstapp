"use strict";
sap.ui.define([
        "sdk-tutorial-frontend/service/businesspartners"
    ],
    function (BusinessPartnersService) {
        //Create test data used for mocking and in the assertion
        var testBusinessPartners = [{
            "BusinessPartner": "1",
            "LastName": "Doe"
        }]

        function getBusinessPartnersPromise() {
            var jQueryPromise = new $.Deferred();
            return jQueryPromise.resolve(testBusinessPartners);
        }

        describe("Business Partner Service", function () {

            it("gets business partners", function (done) {
                spyOn(jQuery, "ajax").and.returnValue(getBusinessPartnersPromise());
                BusinessPartnersService.getBusinessPartners().then(function (businessPartners) {
                    expect(businessPartners).toEqual(testBusinessPartners);
                    expect(jQuery.ajax).toHaveBeenCalled();
                    done();
                });

            });

        });
    });
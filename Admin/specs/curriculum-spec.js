'use strict';
var logInToAdmin = require('../modules/login.js');
var indexPage = require('../modules/index.js');
var coreData = require('../test-data/test-data.json');
var curriculum = require('../modules/curriculumCreation.js');
var singoff = require('../modules/logout.js')



describe("createorgination",function(){

	beforeAll(function () {
		indexPage.appInitialize(coreData.testData.environment.url);
		logInToAdmin.userLogin(coreData.testData.loginCredential.userName,coreData.testData.loginCredential.password);		
    });
	
/*	it("create Section And Module with Activities",function(){
		 curriculum.createSectionAndModulewithActivities();
	 });
	 it("create Section And Module with Major Activities",function(){
		 curriculum.createSectionAndModulewithMajorActivities();
	 });
	 
	 it("create Section And Module with Scheduled",function(){
		 curriculum.createSectionAndModulewithScheduled();
	 });
	 it("create Section And Module with HideDescrtiption",function(){
		 curriculum.createSectionAndModulewithHideDescrtiption();
	 });
	 it("create Section And Module with Hidden actvities",function(){
		 curriculum.createSectionAndModulewithHidden();
	 });*/
	 
	  it("create two Section One With activities And Aother With MajorA ctivities",function(){
		 curriculum.createtwoSectionOneWithactivitiesAndAotherWithMajorActivities();
		curriculum.checkCreationValidationMessage();
	 });
	 
	 
	 
	});
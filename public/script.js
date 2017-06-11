var app = angular.module("shopApp", ['ngRoute'])
app.controller('MainController', function(){

})

app.component("homepageComponent", {
    templateUrl: "app/homepage.html", 
    controller: function(){
        
    }
}).component("categoriesComponent", {
    templateUrl: "app/categories.html",
    controller: function(){
        
    }
}).component("detailsComponent", {
    templateUrl: "app/details.html",
    controller: function(){
        
    }
}).component("navComponent", {
    templateUrl: "app/nav.component.html", 
    controller: function(){
        this.makeActive = function(category){
           this.selected = category;
        }
        this.isActive = function(category){
            return this.selected == category;
        }
        this.selected = "1"
    },
    controllerAs: "navCtrl"
})


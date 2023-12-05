import { Component } from "@angular/core";


@Component({
    selector:'app-property-card',
   // template : `<h1>I am a card </h1>`,
   templateUrl:'property-card.component.html',
   // styles:['h1 {font-weight:normal;}']
    styleUrls : ['property-card.component.css']
})

//We define export because we are going to import this class in other component
export class PropertyCardComponent{

    Property:any = {
        Id : 1,
        Name : "Chintamani Nivas",
        Type : "Innova",
        Price : 12000
    }

}
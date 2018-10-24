import {Component} from '@angular/core'
//Hämtar angular core så vi kan använda nedan decorator.
@Component ({
    selector : 'world',
    templateUrl: './world.component.html',
    styleUrls: ['./world.component.css']
})
//template för att att visa world i index.
//På de flesta ställen menar dem templateURL: 'app/world/world.component.html' Detta fungerar inte.


//Export så vi kan använda den fritt.
//Skapar en klass som senare används för att anropas, och göra datan använbar.
export class WorldComponent {
    Name : string = 'Sweden';
    Population : number = 8861400;
    LifeExpectancy : number = 79.6;
    GovernmentForm : string ='Constitutional Monarchy';
    HeadOfState : string ='Carl XVI Gustaf';
    showDetails: boolean = false;
    btnTxt:string = "Show Details";

    //Eftersom showDetails är false, vill den starta med gömd data.
    //colspan:number = 2;
    //imagePath:string="http://www.varldensflaggor.se/bilder/flaggor/sveriges-flagga.png";
    //OBS inte imgPath, thats old.

    classtouse : string = 'class1';
    //Grunden till detta skapas i wolrd.comp.css.
    //Detta är class binding.


    worldCName() : string{
        return this.Name + ' ' + this.Population;
        //Name, pop etc, förklaras här med vad för innehåll dem skall innehålla string, number etc.
    }
    displayDetails() : void{
        this.showDetails = !this.showDetails;
        this.btnTxt = this.showDetails == true?"Hide Details":
        "Show Details";
    }
    //Hör till knapp,För att toggla, void betyder INGET...
}




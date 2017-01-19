import { Component } from "@angular/core";
import { CalculatorComponent } from './calculator.component';

@Component({
    moduleId: module.id,
    selector: "my-app",   
    templateUrl: 'calculator.component.html', 
    styleUrls: ['calculator.component.css'],   
    directives: [CalculatorComponent]

    
})
export class AppComponent {
   
}


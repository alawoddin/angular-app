import { Component } from "@angular/core";

@Component({
    selector: "header-app",
    standalone: true,
    template: 
    `
    <h2> header section</h2>
    <p>this is the header section and check the section</p>
    <button>submit</button>
    `,
    // styles: "h2{color:red}"
    styles: 
    `
    h2{
        color:red;
        background:black
    }
    `
    
})

export class header{}
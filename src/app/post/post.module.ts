import { NgModule } from "@angular/core";
import { PostAddComponent } from "./post-add/post-add.component";

@NgModule({ 
    imports:[
        PostAddComponent

    ],
    exports:[
        PostAddComponent
    ],
    providers:[

    ]
})

export class PostModule{}
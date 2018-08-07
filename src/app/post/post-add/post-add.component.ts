import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
    selector: 'app-post-add',
    templateUrl: './post-add.component.html',
    providers: [PostService]
})

export class PostAddComponent {

    postAddForm: FormGroup;

    constructor(
        private formBuider: FormBuilder,
        public postService: PostService
    ) {
        this.form();
    }

    public form() {
        this.postAddForm = this.formBuider.group({
            title: ['', [
                Validators.required,
                Validators.maxLength(10)]],
            categories: '',
            content: ''
        });
    }

    public onSubmit() {

        console.log(this.postAddForm.value);
        const { value } = this.postAddForm;

        this.postService.addPost(value)
            .subscribe(data => {
                console.log(data);
            });
    }

}


import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    templateUrl:'register.component.html'
})

export class RegisterComponent {
    form;

    // Constructor: Gets the FormBuilder reference injected
    // Injecting FormBuilder and AuthService into this constructor
    constructor(private fb: FormBuilder, private auth : AuthService) {
        // Form Group(model, validator_for_the_model)
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {
            validator: matchingFields('password', 'confirmPassword')
        }) // Object validator with matchindFields property
    }

    onSubmit() {
        this.auth.register(this.form.value);
    }

}

function matchingFields(field1, field2){
    return form => {
        if(form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true} 
    }
}

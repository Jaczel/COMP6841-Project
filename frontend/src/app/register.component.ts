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

    ///////////////////////
    // Stub to be used later
    isValid(control){
    }
    ///////////////////////
}

function matchingFields(field1, field2){
    return form => {
        if(form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true} 
    }
}

/*
Used Angular's Validators one instead
function emailValid() {
    // Return a function that returns a form control object (we've called it 'control')
    return control => {
        var regex = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;

        return regex.test(control.value) ? null : {invalidEmail: true}
    }
}
*/

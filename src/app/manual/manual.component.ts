import { Component } from "@angular/core"

@Component({
    selector: "app-manual",
    template: `<h3>Manual Component</h3><br/>
    <form><div class="form-group"><label for="exampleInputEmail1">{{lblEmailAddress}}</label><input class='form-control' type='email' id='exampleInputEmail1' [placeholder]='lblEmailAddress' /></div>
    <div class="form-group"><label for="exampleInputPassword1">{{lblPassword}}</label><input class='form-control' type='password' id='exampleInputPassword1' [placeholder]='lblPassword' /></div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="button" (click)="printLogin()" class="btn btn-primary">Print</button><br /><label>{{Message}}</label></form>`
})

export class ManualComponent {
    lblEmailAddress = "Email Address";
    lblPassword = "Password";
    Message = "";

    printLogin(){
        return this.Message = "Login at: " + new Date();
    }
}

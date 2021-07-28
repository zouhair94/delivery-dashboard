import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  users: any;
  user: any = {};
  userRule = [
  "_id",
  "name",
  "surname",
  "email",
  "phone",
  "role",
  "companyId",
  "password",]
  @ViewChild(ModalBasicComponent) modal;
  text = "Create new user.";
  update = false;
  userForm: FormGroup = this.fb.group({
    name: ['sss', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
    companyId: [''],
    password: [''],
  });

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUsers();


  }

  ngAfterViewInit() {
    /* console.log('only after THIS EVENT "child" is usable!!');
    this.modal.show();
    console.dir(this.modal) */
  }


  getUsers() {
    this.apollo.watchQuery({
      query: gql`
          query find{
                findAllUser{
                  _id
                  name
                  surname
                  email
                  phone
                  role
                }}
      `,
      variables: {

      }
    }).valueChanges.subscribe(
      (result: any) => {
        this.users = result?.data?.findAllUser;
      }
    )
  }


  updateUser(user) {
    
    Object.keys(user).forEach( e => {
      if(this.userRule.includes(e)) {
         this.user[e] = user[e];
      }
    } )
    console.log(this.user)
    
    this.text = `Update User ${user.surname} ${user.name} .`
    this.update = true;
    this.patchForm()
   
    

    this.modal.show();
  }


  patchForm() {
    this.userForm.patchValue(
      this.user
    )
    /* this.userForm.patchValue({
     
    }); */
  }

  compaireData(user){

    const edited = {};
    
    for(let item of Object.keys(user)) {
      
      if( item !== '_id' && this.userForm.value  && user[item] !== this.userForm.value[item]) {
        edited[item] = this.userForm.value[item];
      }
    }

    return edited;

  }

  getUser() {

  }

  getUserOne(id) {
    this.apollo.watchQuery({
      query: gql`
          query findUser($id: String!){
            findUser(id: $id){
                  _id
                  name
                  surname
                  email
                  phone
                  role
                }}
      `,
      variables: {
        id
      }
    }).valueChanges.subscribe(
      (result: any) => {
        this.user = result?.data?.findUser;
        this.userForm.patchValue(this.user);
      }
    )
  }
  onUpdate() {
    console.log(this.userForm);
  }

}

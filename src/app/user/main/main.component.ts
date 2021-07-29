import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Variables , Response } from '../../shared/model'
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  users: any;
  user: any = {};
  position = 'bottom-right';
  userRule = [
    "_id",
    "name",
    "surname",
    "email",
    "phone",
    "role",
    "companyId"]
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
    private fb: FormBuilder,
    private toastyService: ToastyService
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
      pollInterval: 500,
      variables: {

      }
    }).valueChanges.subscribe(
      (result: any) => {
        this.users = result?.data?.findAllUser;
        console.log(result)
      }
    )
  }


  updateUser(user) {

    Object.keys(user).forEach(e => {
      if (this.userRule.includes(e)) {
        this.user[e] = user[e];
      }
    })
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

  compaireData(user) {

    const edited = {};

    for (let item of Object.keys(user)) {

      if (item !== '_id' && this.userForm.value && user[item] !== this.userForm.value[item]) {
        edited[item] = this.userForm.value[item];
      }
    }

    return edited;

  }

  
  onUpdate() {
    
    console.log(this.user)
    const { _id: id } = this.user;

    this.apollo.mutate<Response,Variables>({
      mutation: gql`
        
        mutation editUser($id: String!, $data: UpdateUserDto!) {
              updateUser(id: $id, data: $data){
                _id
                name
                surname
                phone
                email
              }
            }
        
      `,
      variables: {
        id,
        data : this.userForm.value
      }
    }).subscribe(async (result: any) => {
      console.log('data updated ',result);
      this.modal.hide();
      this.users = null;
      this.user = {};
      await this.getUsers();
    },
    (err) => console.dir(err)
    );
  }


  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

}

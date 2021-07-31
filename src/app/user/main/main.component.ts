import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ModalBasicComponent } from '../../shared/modal-basic/modal-basic.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Variables, Response } from '../../shared/model'
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';


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
    "companyId"]

  @ViewChild(ModalBasicComponent) modal;
  text = "Create new user.";
  update = false;
  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
    companyId: [''],
    password: [''],
    credit: [''],
  });


  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;


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
        console.log('Toast  has been added!');
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
                  credit
                }}
      `,
      pollInterval: 500,
      variables: {

      }
    }).valueChanges.subscribe(
      (result: any) => {
        this.users = result?.data?.findAllUser;
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

  deleteUser(id) {



    this.apollo.mutate({
      mutation: gql`
        
        mutation deleteUser($id: String!) {
          deleteUser(id: $id){
                  surname
                }
            }
        
      `,
      variables: {
        id
      }
    }).subscribe(async (result: any) => {

      await this.getUsers();
    },
      (err) => console.dir(err)
    );
  }


  onUpdate() {

    const { _id: id } = this.user;
    const data = this.userForm.value;
    delete data.password;

    this.apollo.mutate<Response, Variables>({
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
        data: this.userForm.value
      }
    }).subscribe(async (result: any) => {
      console.log('data updated ', result);
      this.modal.hide();
      this.users = null;
      this.user = {};
      await this.getUsers();
    },
      (err) => console.dir(err)
    );
  }

  addUser() {
    //this.addToast({title:'Default Toasty', msg:'Turning standard Bootstrap alerts into awesome notifications', timeout: 5000, theme:'default', position:'bottom-right', type:'error'});
      this.text = `Add new User .`
      this.user = {};
      this.update = false;
      this.modal.show();
  }

  async createUser() {
    console.dir(this.userForm)
    const data = this.userForm.value;
    delete data.credit;
    if (this.userForm.valid) {
      this.apollo.mutate<Response, Variables>({
        mutation: gql`
          
          mutation create($InputUserDto: InputUserDto!){
  
                createUser(InputUserDto: $InputUserDto){
                  _id
                  name
                  surname
                  email
                  password
                  phone
                  role
                }
              }
          
        `,
        variables: {
          InputUserDto: data
        }
      }).subscribe(async (result: any) => {
        console.log('data updated ', result);
        this.modal.hide();
        this.users = null;
        this.user = {};
        await this.getUsers();
      },
        (err) => {
          this.addToast({ title: 'missed data', msg: 'check if all data is inserted!', timeout: 5000, theme: 'material', position: 'bottom-right', type: 'error' })
        }
      );
    }


  }


}

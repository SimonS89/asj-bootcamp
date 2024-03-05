import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  usuarios: any = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.userService.getUsers().subscribe((res) => {
      this.usuarios = res.data;
    });
  }

  create(form: NgForm) {
    this.userService.createUser(form.value).subscribe((data) => {
      console.log(data);
      this.list();
      form.reset();
    });
  }

  eliminar(id: any) {
    let confirmacion = confirm('¿Desea eliminar al usuario ? ' + id);
    confirmacion
      ? this.userService.deleteById(id).subscribe((res) => console.log(res))
      : console.log('no confirmó');
  }

  update(usuario: any) {
    console.log(usuario);
  }
}

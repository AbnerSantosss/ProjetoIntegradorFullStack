import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-candidates-page',
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.css']
})
export class CandidatesPageComponent implements OnInit{

listaTalentos: User[]= [];

constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.getAllContatos();
  }
  getAllContatos(){
  this.userService.getAllContatos().subscribe((listaTalentos)=>{
      this.listaTalentos = listaTalentos;
  }, err=>{
    alert(`Erro cod: ${err.message}`)
  })
  }

}

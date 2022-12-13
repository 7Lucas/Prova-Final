import { Component, OnInit } from '@angular/core';

import { status } from 'src/interfaceTarefas'
import { TarefasService } from 'src/app/tarefas.service'

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private getservice: TarefasService) { }
  
  tf: status[]=[];

  ngOnInit(): void {
    this.getservice.stTarefas().subscribe(tarefa => this.tf =tarefa)
  }

}

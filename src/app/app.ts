import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { // ✅ Nome padronizado e exportado
  novaTarefa: string = '';
  listaTarefas: string[] = [];

  adicionarTarefa(): void {
    const tarefa = this.novaTarefa.trim();
    if (tarefa) {
      this.listaTarefas.push(tarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(indice: number): void {
    this.listaTarefas.splice(indice, 1);
  }
}
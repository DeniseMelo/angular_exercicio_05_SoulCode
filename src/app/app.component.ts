import { Component,} from '@angular/core';
import  { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
 
constructor(private snack:MatSnackBar){}
 

opSnack1() {
  this.snack.open('item excluído com sucesso!','fechar');
}
opSnack2() {
  this.snack.open('Todos os itens foram excluidos com sucesso','fechar');
}
}



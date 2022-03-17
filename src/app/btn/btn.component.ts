import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  ItensdaminhaLista = [''];
  
  minhalistafofinha: string = ''

  itensdaminhalistanolocalstorage: string[] | null = []

  ngOnInit():void{
    this.recuperarDadosDoLocalStorage()
  }


  AdicionarLista(): void{
    this.ItensdaminhaLista.push(this.minhalistafofinha);
    this.minhalistafofinha = ""
  }
 
      salvarNoLocalStorage(valor: string): void {
      this.itensdaminhalistanolocalstorage?.push(valor)
      let arrStr = JSON.stringify(this.itensdaminhalistanolocalstorage)
      localStorage.setItem('dado', arrStr)
      this.recuperarDadosDoLocalStorage()
  
    }
  
    recuperarDadosDoLocalStorage(): void{
      let storage = localStorage.getItem('dado')
      let arr = JSON.parse(storage || '[]')
      this.itensdaminhalistanolocalstorage = arr
  
    }
  
    deletarDolocalStorage(index: number): void {
  this.itensdaminhalistanolocalstorage?.splice(index, 1)
  
  let arrStr = JSON.stringify(this.itensdaminhalistanolocalstorage)
  localStorage.setItem('dado', arrStr)
  this.recuperarDadosDoLocalStorage()
    }
       
  




    @Output()
  clicou2:EventEmitter<any> = new EventEmitter<any>()
  excluirlista(){
    this.ItensdaminhaLista.splice(this.minhalistafofinha.length)
    this.clicou2.emit()
  }
  @Output()
  clicou1:EventEmitter<string> = new EventEmitter<string>()
  RemoverLista(Itens:string){
      this.ItensdaminhaLista.splice(this.ItensdaminhaLista.indexOf(Itens),1)
      this.clicou1.emit()
    }
  }







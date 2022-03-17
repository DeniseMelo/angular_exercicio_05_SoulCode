import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

 /* ItensdaminhaLista = [''];
  
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
       
  




    
    }*/
  
  
    titulo: string = ''

    Itens = ['']

    Item = ''

    Adicionar() {
      this.Itens.push(this.Item);
      this.Item = ''
    }

    Retirar(Item: string){
      this.Itens.splice( this.Itens.indexOf(Item),1);
    }

    ExcluirListaFofinha(){
      this.Itens.splice(this.Item.indexOf(this.Item));
    }

    ngOnInit(): void{
      this.RecuperarDados()
    }

    SalvarDados(valor:string): void{
      this.Itens.push(valor)
      let ArSt = JSON.stringify(this.Itens)
      localStorage.setItem('item',ArSt)
      this.RecuperarDados()

    }

    RecuperarDados(): void{
      let storage = localStorage.getItem('item')
      let Array = JSON.parse(storage || '[]')
      this.Itens = Array

    }

    RemoverItem(index: number): void { 
      this.Itens.splice(index, 1)

      let ArSt = JSON.stringify(this.Itens)
      localStorage.setItem('Item',ArSt)
      this.RecuperarDados()

    }

}


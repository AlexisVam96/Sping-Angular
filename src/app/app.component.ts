import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from './services/producto-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'export-excel';

  constructor(private productoService: ProductoServiceService){
  }

  ngOnInit(){
    this.allData()
  }

  allData(){
    this.productoService.getUsuarios().subscribe(
      usuarios => console.log(usuarios)
    )
  }

  exportarExcel() {
    this.productoService.exportarExcel().subscribe( x =>{
      const blob = new Blob([x],{type: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});


    
      const data =  window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'usuarios.xlsx';
      link.dispatchEvent(new  MouseEvent('click', {bubbles: true, cancelable:true, view: window}))

      setTimeout( ()=>{
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100)
    })
  }
}

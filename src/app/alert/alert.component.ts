import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SweetAlert2Module, } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [RouterOutlet,SweetAlert2Module,],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
async sweet(): Promise<void>{
  try{
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to proceed or quit?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Proceed!',
      cancelButtonText: 'No, Quit!',
      reverseButtons: true
    });
    if(result.isConfirmed)
      {
        alert("Action Done");
      }
      else
      {
        alert("Quitted");
      }
  }
catch(error){
console.log(error);
}
}
}
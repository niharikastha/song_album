import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  title = 'list';
  list:any[]=[];
  addTask(item:string ){
    this.list.push({id:this.list.length,name:item} );
    console.log(this.list);
  }
  removeTask(id:number)
  {
    console.log(id);
    this.list = this.list.filter(item=>item.id!==id)
  }
}

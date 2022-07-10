import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { PeriodicElement } from './models/periodic.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-table';

  public ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
          dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
          @ViewChild(MatSort, { static: true }) sort!: MatSort;

          ngOnInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
}
//displayedColumns : tạo một mảng tên cột sẽ được hiển thị một cách cố định.
//dataSource: được sử dụng để liên kết với mảng dữ liệu mà bạn truyền cho hàm MatTableDataSource.
//ViewChild: giúp bạn trỏ tới một phần tử HTML hoặc components trong template và thao tác trực tiếp lên nó ở đây mình thao tác với MatPaginator , MatSort. Mình chưa build giao diện nên nhiều bạn còn thấy mơ hồ nhanh thôi cố nhé.

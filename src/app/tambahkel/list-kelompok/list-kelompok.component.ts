import { Component, OnInit } from '@angular/core';
import { DataService } from '../../prosesData/data.service';
import { KelompokMetic } from '../../prosesData/data.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-kelompok',
  templateUrl: './list-kelompok.component.html',
  styleUrls: ['./list-kelompok.component.scss']
})
export class ListKelompokComponent implements OnInit {
  kelompokList: KelompokMetic[];
  constructor(private fireService: DataService , private toast: ToastrService) { }

  ngOnInit() {
    var keldat = this.fireService.getDataKelompok();
    keldat.snapshotChanges().subscribe(item => {
      this.kelompokList = [];
      item.forEach(element => {
        var newitem = element.payload.toJSON();
        newitem["$key"] = element.key;
        this.kelompokList.push(newitem as KelompokMetic);
      });
    });
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.fireService.deletedDataKelompok(key);
      this.toast.warning('Deleted Success' , 'Attention')
    }
  }

  onEdit(klmp: KelompokMetic) {
    this.fireService.selectedKelompok = Object.assign({}, klmp);
  }

}

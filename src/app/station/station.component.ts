import { Component, OnInit } from '@angular/core';
import { DataService } from '../prosesData/data.service';
import { KelompokMetic } from '../prosesData/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  kelompokList: KelompokMetic[];
  test:string;
  

  constructor(private fireService: DataService , private routers: Router) {
    this.test = 'emstat';
    
  }

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

  onEdit(klmp: KelompokMetic) {
    this.routers.navigate(['/dashboard/score']);
    this.fireService.selectedKelompok = Object.assign({}, klmp);
  }



}

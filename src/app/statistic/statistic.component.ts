import { Component, OnInit } from '@angular/core';
import { KelompokMetic } from '../prosesData/data.model';
import { DataService } from '../prosesData/data.service';
import { AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  kelompokList: KelompokMetic[];
  skoreShort: AngularFireList<any>;
  key: string = 'skor'; 
  reverse: boolean = true;
  constructor(private fireService: DataService) { }

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

}

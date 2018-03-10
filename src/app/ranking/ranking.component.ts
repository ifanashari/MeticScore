import { Component, OnInit } from '@angular/core';
import { DataService } from '../prosesData/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { KelompokMetic } from '../prosesData/data.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
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

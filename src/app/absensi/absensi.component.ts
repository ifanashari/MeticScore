import { Component, OnInit } from '@angular/core';
import { DataService } from '../prosesData/data.service';
import { KelompokMetic, Peserta } from '../prosesData/data.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-absensi',
  templateUrl: './absensi.component.html',
  styleUrls: ['./absensi.component.scss']
})
export class AbsensiComponent implements OnInit {
  pesertaList: Peserta[];
  onStatus:boolean;

  constructor(private fireService: DataService , private toastr: ToastrService) { }

  ngOnInit() {
    var keldat = this.fireService.getDataPeserta();
    keldat.snapshotChanges().subscribe(item => {
      this.pesertaList = [];
      item.forEach(element => {
        var newitem = element.payload.toJSON();
        newitem["$key"] = element.key;
        this.pesertaList.push(newitem as Peserta);
      });
    });
  }

  updateAbsensiPeserta(key , name){
    this.fireService.updateStatusPeserta(key , name);
    this.toastr.success('Nama telah terabsen' , 'Selamat');
  }

}

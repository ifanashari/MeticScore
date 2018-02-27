import { Component, OnInit } from '@angular/core';
import { DataService } from '../prosesData/data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KelompokMetic } from '../prosesData/data.model';

@Component({
  selector: 'app-tambahkel',
  templateUrl: './tambahkel.component.html',
  styleUrls: ['./tambahkel.component.scss']
})
export class TambahkelComponent implements OnInit {
  kelompokList: KelompokMetic[];
  constructor(public fireService: DataService , private toast: ToastrService) { }

  ngOnInit() {
    
  }

  insertNewKelompok(kelForms: NgForm){
    if (kelForms.value.$key == null) {
      this.fireService.insertDataKelompok(kelForms.value);
      this.resetForm();
      this.toast.success('Tambah data kelompok berhasil' , 'Good Network');
    }else{
      this.fireService.updatedKelompok(kelForms.value);
      this.resetForm();
      this.toast.success('Updated Data Great' , 'Done');
    }
  }

  resetForm(kelForms?: NgForm){
    if (kelForms != null)
    kelForms.reset();
  this.fireService.selectedKelompok = {
    $key: null,
    namaKel: '',
    ketua: '',
    skor: 0,
    statusPos: false,
    deskrip: ''
  }
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../prosesData/data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { KelompokMetic } from '../prosesData/data.model';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {
  kelompokList: KelompokMetic[];

  constructor(public fireService: DataService , private toast: ToastrService , private routers: Router) { }

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

  updateNewScore(key , score){
    let confirm = window.confirm('Anda yakin ini benar?');

    if (confirm == true) {
     
      let newScore = parseInt(score);
      let hasil = this.fireService.selectedKelompok.skor += newScore;
      this.fireService.updatedScoreTeam1(key , hasil);
      this.resetForm();
      this.toast.success('Updated Data Great' , 'Done');
      this.routers.navigate(['/dashboard']); 
    
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

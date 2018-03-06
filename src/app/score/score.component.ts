import { Component, OnInit } from '@angular/core';
import { KelompokMetic } from '../prosesData/data.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from '../prosesData/data.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  kelompokList: KelompokMetic[];
  inputGuard:boolean;

  constructor(public fireService: DataService, private toast: ToastrService , private routers: Router) { 
    this.inputGuard = false;
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

  plusSkorHere(firstSkore , lastskore){
    var skorsaru = parseInt(firstSkore);
    var hasil = skorsaru += lastskore ;
    this.inputGuard = true;
    return hasil;
  }

  inputGuards(){
    
  }

  updateNewScore(key , score){
    let newScore = parseInt(score);
    let hasil = this.fireService.selectedKelompok.skor += newScore;
    this.fireService.updatedScoreTeam1(key , hasil);
    this.resetForm();
    this.toast.success('Updated Data Great' , 'Done');
    this.routers.navigate(['/dashboard']);
  }

  onEdit(klmp: KelompokMetic) {
    this.fireService.selectedKelompok = Object.assign({}, klmp);
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

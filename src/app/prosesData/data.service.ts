import { Injectable } from '@angular/core';

import { AngularFireDatabase , AngularFireList , AngularFireObject } from 'angularfire2/database';
import { KelompokMetic, Peserta, ScoreVal } from './data.model';

@Injectable()
export class DataService {
  kelompikList: AngularFireList<any>;
  skoreList: AngularFireList<{}>;
  pesertaList: AngularFireList<any>;
  selectedKelompok: KelompokMetic = new KelompokMetic();
  skorSee: ScoreVal = new ScoreVal();
  poshere = {};
  trynow:any;
  toJson:any;


  constructor(private realtime: AngularFireDatabase) { 
    for (let _i = 1; _i <= 18; _i++) {
      this.poshere["poske"+_i] = "emstat";
    }
    
  }

  getDataKelompok(){
    this.kelompikList = this.realtime.list('kelompok');
    return this.kelompikList;
  }

  getDataPeserta(){
    this.pesertaList = this.realtime.list('peserta');
    return this.pesertaList;
  }

  insertDataKelompok(kelompok: KelompokMetic){
    this.kelompikList.push({
      namaKel: kelompok.namaKel,
      ketua: kelompok.ketua,
      skor: kelompok.skor = 0,
      deskrip: kelompok.deskrip
    })
  }
  deletedDataKelompok($key: string){
    this.kelompikList.remove($key);
  }
  updatedKelompok(kelompok: KelompokMetic){
    this.kelompikList.update(kelompok.$key , {
      namaKel: kelompok.namaKel,
      ketua: kelompok.ketua,
      skor: this.selectedKelompok.skor,
      deskrip: kelompok.deskrip
    })
  }

  updatedScoreTeam1(key , score){
    this.kelompikList.set(key , {
      namaKel: this.selectedKelompok.namaKel,
      ketua: this.selectedKelompok.ketua,
      skor: score,
      deskrip: this.selectedKelompok.deskrip
    })
  }

  updateStatusPeserta(key , name){
    this.pesertaList.set(key , {
      Name: name,
      Status: "true",
    })
  }

}

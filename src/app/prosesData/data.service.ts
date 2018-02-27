import { Injectable } from '@angular/core';

import { AngularFireDatabase , AngularFireList , AngularFireObject } from 'angularfire2/database';
import { KelompokMetic } from './data.model';

@Injectable()
export class DataService {
  kelompikList: AngularFireList<any>;
  selectedKelompok: KelompokMetic = new KelompokMetic();
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

  insertDataKelompok(kelompok: KelompokMetic){
    this.kelompikList.push({
      namaKel: kelompok.namaKel,
      ketua: kelompok.ketua,
      skor: kelompok.skor = 0,
      deskrip: kelompok.deskrip,
      statusPos: this.poshere
    })
  }
  deletedDataKelompok($key: string){
    this.kelompikList.remove($key);
  }
  updatedKelompok(kelompok: KelompokMetic){
    this.kelompikList.update(kelompok.$key , {
      namaKel: kelompok.namaKel,
      ketua: kelompok.ketua,
      skor: kelompok.skor,
      deskrip: kelompok.deskrip,
      statusPos: this.poshere
    })
  }

}

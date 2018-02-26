import { Injectable } from '@angular/core';

import { AngularFireDatabase , AngularFireList , AngularFireObject } from 'angularfire2/database';
import { KelompokMetic } from './data.model';

@Injectable()
export class DataService {
  kelompikList: AngularFireList<any>;
  selectedKelompok: KelompokMetic = new KelompokMetic();  

  constructor(private realtime: AngularFireDatabase) { }

  getDataKelompok(){
    this.kelompikList = this.realtime.list('kelompok');
    return this.kelompikList;
  }

  insertDataKelompok(kelompok: KelompokMetic){
    this.kelompikList.push({
      namaKel: kelompok.namaKel,
      ketua: kelompok.ketua,
      skor: kelompok.skor,
      deskrip: kelompok.deskrip,
      statusPos: kelompok.statusPos = false
    })
  }

}

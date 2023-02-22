import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BerandaComponent } from './beranda/beranda.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListPengaduanComponent } from './list-pengaduan/list-pengaduan.component';
import { PengaduanFormComponent } from './pengaduan-form/pengaduan-form.component';
import { EditFormPengaduanComponent } from './edit-form-pengaduan/edit-form-pengaduan.component';
import { HttpClientModule } from '@angular/common/http';
import { PengaduFormComponent } from './pengadu-form/pengadu-form.component';
import { KorbanFormComponent } from './korban-form/korban-form.component';
import { PengaturanFormComponent } from './pengaturan-form/pengaturan-form.component';
import { TanggapanComponent } from './tanggapan/tanggapan.component';
import { EditPengaduFormComponent } from './edit-pengadu-form/edit-pengadu-form.component';
import { PetugasLoginFormComponent } from './petugas-login-form/petugas-login-form.component';
import { PetugasregisterComponent } from './petugasregister/petugasregister.component';
import { PetugasDaftarPengaduanComponent } from './petugas-daftar-pengaduan/petugas-daftar-pengaduan.component';
import { IsilaporanPetugasComponent } from './isilaporan-petugas/isilaporan-petugas.component';
import { PetugasTanggapanComponent } from './petugas-tanggapan/petugas-tanggapan.component';
import { RiwayatpengaduanComponent } from './riwayatpengaduan/riwayatpengaduan.component';
import { PengaturanpetugasComponent } from './pengaturanpetugas/pengaturanpetugas.component';
import { EditpetugasformComponent } from './editpetugasform/editpetugasform.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { DaftarpetugasComponent } from './daftarpetugas/daftarpetugas.component';
import { AdmindaftarComponent } from './admindaftar/admindaftar.component';
import { IsiadminComponent } from './isiadmin/isiadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BerandaComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ListPengaduanComponent,
    PengaduanFormComponent,
    EditFormPengaduanComponent,
    PengaduFormComponent,
    KorbanFormComponent,
    PengaturanFormComponent,
    TanggapanComponent,
    EditPengaduFormComponent,
    PetugasLoginFormComponent,
    PetugasregisterComponent,
    PetugasDaftarPengaduanComponent,
    IsilaporanPetugasComponent,
    PetugasTanggapanComponent,
    RiwayatpengaduanComponent,
    PengaturanpetugasComponent,
    EditpetugasformComponent,
    LoginadminComponent,
    RegisteradminComponent,
    DashboarComponent,
    DaftarpetugasComponent,
    AdmindaftarComponent,
    IsiadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { IsiadminComponent } from './isiadmin/isiadmin.component';
import { AdmindaftarComponent } from './admindaftar/admindaftar.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { EditpetugasformComponent } from './editpetugasform/editpetugasform.component';
import { PengaturanpetugasComponent } from './pengaturanpetugas/pengaturanpetugas.component';
import { RiwayatpengaduanComponent } from './riwayatpengaduan/riwayatpengaduan.component';
import { IsilaporanPetugasComponent } from './isilaporan-petugas/isilaporan-petugas.component';
import { PetugasDaftarPengaduanComponent } from './petugas-daftar-pengaduan/petugas-daftar-pengaduan.component';
import { PetugasLoginFormComponent } from './petugas-login-form/petugas-login-form.component';
import { EditPengaduFormComponent } from './edit-pengadu-form/edit-pengadu-form.component';
import { TanggapanComponent } from './tanggapan/tanggapan.component';
import { EditFormPengaduanComponent } from './edit-form-pengaduan/edit-form-pengaduan.component';
import { PengaturanFormComponent } from './pengaturan-form/pengaturan-form.component';
import { KorbanFormComponent } from './korban-form/korban-form.component';
import { PengaduFormComponent } from './pengadu-form/pengadu-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormModule } from './login-form/login-form.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterFormModule } from './register-form/register-form.module';
import { ListPengaduanComponent } from './list-pengaduan/list-pengaduan.component';
import { PengaduanFormComponent } from './pengaduan-form/pengaduan-form.component';
import { PengaduanFormModuleModule } from './pengaduan-form/pengaduan-form-module.module';
import { PetugasregisterComponent } from './petugasregister/petugasregister.component';
import { PetugasTanggapanComponent } from './petugas-tanggapan/petugas-tanggapan.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { DaftarpetugasComponent } from './daftarpetugas/daftarpetugas.component';

const routes: Routes = [
  {path: 'Beranda',
  component:BerandaComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'Login',
    component: LoginFormComponent,
    loadChildren:()=> LoginFormModule
  },
  {
    path: 'Register',
    component: RegisterFormComponent,
    loadChildren: () => RegisterFormModule
  },
  {
    path: 'pengaduanform',
    component: PengaduanFormComponent,
    loadChildren: () =>PengaduanFormModuleModule
  },
 {
    path: 'listpengaduan',
    component:ListPengaduanComponent,

    
 },
  {
    path: 'editpengadu',
    component: EditFormPengaduanComponent,


  },
 {
    path: 'pengadu',
    component: PengaduFormComponent,

    
 },
 {
    path: 'korban',
    component:KorbanFormComponent,


  },
  {
    path: 'pengaturan',
    component: PengaturanFormComponent,


  },
  {
    path: 'tanggapan',
    component: TanggapanComponent,


  },
  {
    path: 'editpengaduform',
    component: EditPengaduFormComponent,


  },
  {
    path: 'petugaslogin',
    component: PetugasLoginFormComponent,


  },
  {
    path: 'petugasregister',
    component: PetugasregisterComponent,


  },
  {
    path: 'petugasdaftarpengaduan',
    component: PetugasDaftarPengaduanComponent,


  },
  {
    path: 'isilaporanpetugas',
    component: IsilaporanPetugasComponent,


  },
  {
    path: 'petugastanggapan',
    component:PetugasTanggapanComponent,


  },
  {
    path: 'riwayatpengaduan',
    component: RiwayatpengaduanComponent,


  },
  {
    path: 'pengaturanpetugas',
    component: PengaturanpetugasComponent,


  },
  {
    path: 'editpetugas',
    component: EditpetugasformComponent,


  },
  {
    path: 'loginadmin',
    component: LoginadminComponent,


  },
  {
    path: 'regadmin',
    component: RegisteradminComponent ,


  },
  {
    path: 'dashboard',
    component: DashboarComponent,


  },
  {
    path: 'daftarpetugas',
    component: DaftarpetugasComponent,


  },
  {
    path: 'daftaradmin',
    component: AdmindaftarComponent,


  },
  {
    path: 'isiadmin',
    component:IsiadminComponent,


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

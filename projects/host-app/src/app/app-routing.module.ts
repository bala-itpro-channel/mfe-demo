import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";

const routes: Routes = [
  { 
    path: 'hello', 
    loadComponent: () => {
      return loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_URL,
        exposedModule: "./HelloComponent",
      }).then(m => m.HelloComponent).catch(err => console.log(err));
    }
  },
  {
    path: 'registration', 
    loadChildren: () => {
      return loadRemoteModule({
        type: "module",
        remoteEntry: MFE_APP_URL,
        exposedModule: "./RegistrationModule",
      }).then(m => m.RegistrationModule).catch(err => console.log(err));
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

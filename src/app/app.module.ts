import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ENV, URL_WS } from './config/envs';
import { SocketIoConfig ,SocketIoModule} from 'ngx-socket-io';
import { appReducers } from './store/app.reducers';
import { EffectsArray } from './store/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { HttpConfigInterceptor } from './core/interceptors/http-config.interceptor';

import { AuthModule } from './modules/auth/auth.module'; // Importa el módulo AuthModule
import { SharedModule } from './shared/shared.module'; // Importa el módulo AuthModule
import { UsuariosModule } from './modules/UserNacvar/Usuarios/usuarios.module'; // Importa el módulo AuthModule
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { AdministradorModule } from './modules/UserNacvar/Administrador/administrador.module';





const socketConfig:SocketIoConfig ={
  url:URL_WS,options:{}
}


@NgModule({
  declarations: [
    AppComponent,
    
   
 

  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    SocketIoModule.forRoot(socketConfig),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: ENV }),
    AuthModule,
    SharedModule,
    UsuariosModule,
    RouterModule,
    HomeModule,
    AdministradorModule,
 
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/dashboard/header/header.component';
import { MenuComponent } from './views/dashboard/menu/menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { QuickviewComponent } from './views/dashboard/quickview/quickview.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LinechartComponent } from './views/dashboard/charts/linechart/linechart.component';
import { BarchartComponent } from './views/dashboard/charts/barchart/barchart.component';
import { PiechartComponent } from './views/dashboard/charts/piechart/piechart.component';
import { CopyrightComponent } from './views/dashboard/copyright/copyright.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { ProfileComponent } from './common/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { SublevelMenuComponent } from './views/dashboard/menu/sublevel-menu.component';
import { FilterIconComponent } from './common/icons/filter-icon/filter-icon.component';
import { PdfIconComponent } from './common/icons/pdf-icon/pdf-icon.component';
import { CsvIconComponent } from './common/icons/csv-icon/csv-icon.component';
import { PrinterIconComponent } from './common/icons/printer-icon/printer-icon.component';
import { CalenderComponent } from './views/dashboard/calender/calender.component';
import { BellIconComponent } from './common/icons/bell-icon/bell-icon.component';
import { EmailIconComponent } from './common/icons/email-icon/email-icon.component';
import { GlobeIconComponent } from './common/icons/globe-icon/globe-icon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { UsuarioState } from './state-management/usuario/usuario.state';
import { LoginState } from './state-management/login/login.state';
import {MatGridListModule} from '@angular/material/grid-list';
import { CategoriaState } from './state-management/categoria/categoria.state';
import { SubcategoriaState } from './state-management/subcategoria/subcategoria.state';
import { SubsubcategoriaState } from './state-management/subsubcategoria/subsubcategoria.state';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MascotaState } from './state-management/mascota/mascota.state';
import { CreateMastcotaComponent } from './services/dialogs/create-mastcota/create-mastcota.component';
import { ProductoState } from './state-management/producto/producto.state';
import { ServicioState } from './state-management/servicio/servicio.state';
import { ProveedorState } from './state-management/proveedor/proveedor.state';
import { CreateProductComponent } from './services/dialogs/create-product/create-product.component';
import { RegistroProveedorComponent } from './services/dialogs/registro-proveedor/registro-proveedor.component';
import { DeleteConfirmComponent } from './services/dialogs/delete-confirm/delete-confirm.component';
import { LogoutComponent } from './services/dialogs/logout/logout.component';
import { CreateServicioComponent } from './services/dialogs/create-servicio/create-servicio.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import { TruncatePipe } from './utils/truncate.pipe';
import {MatSliderModule} from '@angular/material/slider';
import { SublevelCategoriaComponent } from './views/dashboard/menu/sublevel-categoria.component';
import { CarritoPageComponent } from './views/carrito-page/carrito-page.component';
import { CarritoState } from './state-management/carrito/carrito.state';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProductosItemComponent } from './views/productos-item/productos-item.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ConfirmarCompraComponent } from './services/dialogs/confirmar-compra/confirmar-compra.component';
import { AfterCompraComponent } from './services/dialogs/after-compra/after-compra.component';
import { TransactionHistoryState } from './state-management/transaccion/transaccion.state';
import { CalificacionComponent } from './services/dialogs/calificacion/calificacion.component';
import { ReporteComponent } from './services/dialogs/reporte/reporte.component';
import { SupportTicketState } from './state-management/ticket/ticket.state';
import { ResenaState } from './state-management/resena/resena.state';
import { UsuarioByIdState } from './state-management/usuario/usuarioById.state';
import { ProviderByIdState } from './state-management/proveedor/proveedorById.state';
import { ProductByIdState } from './state-management/producto/productoById.state';
import { ServiceByIdState } from './state-management/servicio/servicioById.state';
import { ProductoByProviderState } from './state-management/producto/productoByProvider.state';
import { ServiceByProviderState } from './state-management/servicio/servicioByProvider.state';
import { HorarioState } from './state-management/horarioAtencion/horarioAtencion.state';
import { ReservaState } from './state-management/reserva/reserva.state';
import { AgendarComponent } from './services/dialogs/agendar/agendar.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { SpecialityState } from './state-management/especialidad/especialidad.state';
import { EspecialidadProveedorState } from './state-management/especialidadProveedor/especialidadProveedor.state';
import { ProductoDetalleComponent } from './views/producto-detalle/producto-detalle.component';
import { AfterAgendarComponent } from './services/dialogs/after-agendar/after-agendar.component';
import { ComfirmarAgendaComponent } from './services/dialogs/comfirmar-agenda/comfirmar-agenda.component';
import { CodigoDescuentoState } from './state-management/codigoDescuento/codigoDescuento.state';
import { OfertaServicioState } from './state-management/ofertaServicio/ofertaServicio.state';
import { OfertaProductoState } from './state-management/ofertaProducto/ofertaProducto.state';
import { OfertaState } from './state-management/oferta/oferta.state';
import { NotificacionState } from './state-management/notificacion/notificacion.state';
import { RolState } from './state-management/rol/rol.state';
import { ActualizarCategoriaComponent } from './services/dialogs/actualizadores/actualizar-categoria/actualizar-categoria.component';
import { ActualizarsubCategoriaComponent } from './services/dialogs/actualizadores/actualizarsub-categoria/actualizarsub-categoria.component';
import { ActualizarsubsubCategoriaComponent } from './services/dialogs/actualizadores/actualizarsubsub-categoria/actualizarsubsub-categoria.component';
import { ActualizarCodigoPromoComponent } from './services/dialogs/actualizadores/actualizar-codigo-promo/actualizar-codigo-promo.component';
import { ActualizarEspecialidadesComponent } from './services/dialogs/actualizadores/actualizar-especialidades/actualizar-especialidades.component';
import { ActualizarProductosComponent } from './services/dialogs/actualizadores/actualizar-productos/actualizar-productos.component';
import { ActualizarProvidersComponent } from './services/dialogs/actualizadores/actualizar-providers/actualizar-providers.component';
import { ActualizarReviewsComponent } from './services/dialogs/actualizadores/actualizar-reviews/actualizar-reviews.component';
import { ActualizarServicioComponent } from './services/dialogs/actualizadores/actualizar-servicio/actualizar-servicio.component';
import { ActualizarTicketComponent } from './services/dialogs/actualizadores/actualizar-ticket/actualizar-ticket.component';
import { ActualizarUsuarioComponent } from './services/dialogs/actualizadores/actualizar-usuario/actualizar-usuario.component';
import { ResenasByProviderIdState } from './state-management/resena/resenaByProviderId.state';
import { CarouselState } from './state-management/carousel/carousel.state';
import { SublevelCathomeComponent } from './views/dashboard/menu/sublevel-cathome.component';
import { InhabilitarUsuarioComponent } from './services/dialogs/actualizadores/inhabilitar-usuario/inhabilitar-usuario.component';
import { ActivityLogState } from './state-management/actividad/actividad.state';
import { TransaccionByUserState } from './state-management/transaccion/transaccionByUser.state';
import { TransaccionByProviderState } from './state-management/transaccion/transaccionByProvider.state';
import { ActualizarOfertaProductoComponent } from './services/dialogs/actualizadores/actualizar-oferta-producto/actualizar-oferta-producto.component';
import { ActualizarOfertaServicioComponent } from './services/dialogs/actualizadores/actualizar-oferta-servicio/actualizar-oferta-servicio.component';
import { ActualizarTransaccionComponent } from './services/dialogs/actualizadores/actualizar-transaccion/actualizar-transaccion.component';
import { ReservaByProviderState } from './state-management/reserva/reservaByProvider.state';
import { ReservaByUserState } from './state-management/reserva/reservaByUser.state';
import { ActualizarReservaComponent } from './services/dialogs/actualizadores/actualizar-reserva/actualizar-reserva.component';
import { MascotasByUserState } from './state-management/mascota/mascotaByUserId.state';
import { ServicioUbicacionComponent } from './services/dialogs/servicio-ubicacion/servicio-ubicacion.component';
import { ProductosPageComponent } from './views/productos-page/productos-page.component';

@NgModule({
  imports: [
    RecaptchaModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    NgxMaterialTimepickerModule,
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCardModule,
    MatListModule,
    NgApexchartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    DragDropModule,    
    MatGridListModule,
    NgxsModule.forRoot([MascotasByUserState ,TransaccionByProviderState, TransaccionByUserState, ActivityLogState, CarouselState, ResenasByProviderIdState, RolState, NotificacionState ,OfertaState, OfertaProductoState, OfertaServicioState, CodigoDescuentoState, EspecialidadProveedorState, SpecialityState, ReservaState, HorarioState, ServiceByProviderState, ProductoByProviderState, ServiceByIdState, ProductByIdState, ProviderByIdState, UsuarioByIdState, ResenaState, SupportTicketState, TransactionHistoryState, CarritoState, UsuarioState, LoginState, CategoriaState, SubcategoriaState, SubsubcategoriaState, MascotaState,
      ProductoState, ServicioState, ProveedorState, ReservaByProviderState, ReservaByUserState
    ]),
    NgxsStoragePluginModule.forRoot({
      keys: ['carrito'], // Nombre de la clave en localStorage
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot() 
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    QuickviewComponent,
    LinechartComponent,
    BarchartComponent,
    PiechartComponent,
    CopyrightComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SublevelMenuComponent,
    SublevelCategoriaComponent,
    SublevelCathomeComponent,
    FilterIconComponent,
    PdfIconComponent,
    CsvIconComponent,
    PrinterIconComponent,
    CalenderComponent,
    BellIconComponent,
    EmailIconComponent,
    GlobeIconComponent,
    NotFoundComponent,
    ProductosPageComponent,
    CreateMastcotaComponent,
    CreateProductComponent,
    RegistroProveedorComponent,
    DeleteConfirmComponent,
    LogoutComponent,
    CreateServicioComponent,
    TruncatePipe,
    CarritoPageComponent,
    ProductosItemComponent,
    ConfirmarCompraComponent,
    AfterCompraComponent,
    CalificacionComponent,
    ReporteComponent,
    AgendarComponent,
    ProductoDetalleComponent,
    AfterAgendarComponent,
    ComfirmarAgendaComponent,
    ActualizarCategoriaComponent,
    ActualizarsubCategoriaComponent,
    ActualizarsubsubCategoriaComponent,
    ActualizarCodigoPromoComponent,
    ActualizarEspecialidadesComponent,
    ActualizarProductosComponent,
    ActualizarProvidersComponent,
    ActualizarReviewsComponent,
    ActualizarServicioComponent,
    ActualizarTicketComponent,
    ActualizarUsuarioComponent,
    InhabilitarUsuarioComponent,
    ActualizarOfertaProductoComponent,
    ActualizarOfertaServicioComponent,
    ActualizarTransaccionComponent,
    ActualizarReservaComponent,
    ServicioUbicacionComponent,
  ],
})
export class InventualModule {}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-historia',
//   templateUrl: './historia.component.html',
//   styleUrls: ['./historia.component.scss']
// })
// export class HistoriaComponent {
  
//   titulo: string = 'Historia EEST N°3';
//   extracto: string = 'La Educación Técnica se gestó durante el peronismo, paralela a la educación tradicional. En ese contexto se creó nuestra escuela. En agosto de 1947 se presentó un proyecto de Ley en Diputados de la Nación para crear una Escuela “técnica de oficios” en el Partido de San Isidro, Provincia de Buenos Aires.';
//   imagen: string = '../../assets/historia2.jpeg';
//   textoCompleto: string = ` Finalmente se decidió alquilar una vieja mansión, una casona construida en 1892. Esta fue una propiedad de 
//   fin de semana perteneciente a la familia Gil Pietranera. En su parte original, es de ladrillos de barro y de techos altos. El frente de la casona sigue siendo sobre la calle 25 de Mayo y detrás estaba una galería. A uno de los lados se ubicaba una gruta con la Virgen de Lourdes y, detrás, un enorme jardín con altas palmeras. Y también  existían unas caballerizas, al costado de ese jardín, que terminaba en la parte posterior, a la altura del 648 de la calle Chacabuco.
//   La propiedad, de 1404 metros cuadrados, se alquiló con su mobiliario incluido desde el día 3 de octubre de 1948. Y el casero de esa casa, Joaquín Ortiz, con el tiempo pasó a ser el primer ordenanza de la Escuela.
//   En 1848, por decreto (el 9098) el Ministerio de Educación creó la Escuela Técnica de Artes y Oficios con orientación fonotécnica, con  especialidad en telecomunicaciones, otorgándose un certificado de “Radio Operador Mayor y experto en Electricidad”. Y, también por decreto, se implantó un plan de estudios de cuatro años.
//   En 1949 los propietarios iniciaron un juicio por desalojo, seguramente sabiendo lo que se avecinaba en los dos años siguientes. Entre los años 1950 y 1951 se desmanteló el parque y se desmontaron las palmeras de la casona, en donde trabajaron tanto docentes como alumnos. Y en ese espacio se construyó la estructura del primer taller, gracias a un galpón que había sido de una Escuela Industrial de 9 de Julio, Provincia de Buenos Aires. Finalmente ese primer taller se desmontó en 1974 para pasar a construirse el actual.
//   En 1962 cambió su nombre a “Escuela Nacional de Educación Técnica Nº 1 de San Isidro”.
//   En 1966 se llegó a una situación crítica: la Corte Suprema de Justicia había ordenado el desalojo y por otra parte la Municipalidad pretendía mudarla a Boulogne, por ser considerada “Escuela Fábrica” en pleno casco histórico. Pero se había llegado a un acuerdo sobre el precio de venta del inmueble y hacia eso se enfocaron las autoridades y la Cooperadora del colegio, mediante colectas de dinero, donaciones y hasta la rifa de un auto marca FIAT. Del valor total de 9 millones de pesos de esa época se consiguieron pagar 5 millones. Y el dinero restante finalmente fue pagado por el CONET (el Consejo Nacional de Educación de Técnica), firmándose el boleto de compra–venta el 21 de Diciembre de 1966. En 1967 y a pedido de los antiguos propietarios, la institución debió entregar la Virgen de Lourdes que todavía estaba en una gruta al costado del patio de la Escuela. Finalmente, la escrituración recién se realizó en 1980.
//   Posteriormente se determinó por plan Nº 2164/62, los seis años de duración de la carrera, otorgándose los títulos de “Técnico en Electricidad” y “Técnico en Telecomunicaciones”. Estos, a su vez, fueron modificados y pasaron a ser de “Electrotécnico” y “Técnico en Electrónica con especialidad en Telecomunicaciones”. Y finalmente, en 1981 se modificó el nombre de este último por el de “Técnico Electrónico”.
//   En 1994, luego de la sanción de la Ley de Transferencia de los Servicios Educativos de la Nación a las Provincias, la Institución pasó a denominarse “Escuela de Educación Técnica Nº 3 de San Isidro”, y a partir de la Ley Federal de Educación, de 1993, la escuela comenzó con un nuevo plan de Educación, razón por la cual la
//   primaria de extendió a nueve años y en la secundaria el plan de estudios se redujo a tres años y formó parte de la “Educación Polimodal”.
//   Con la sanción de la Ley Nacional de Educación Nº 26.206 y la Ley Provincial de Educación Nº 13.688 y por aplicación de la Disposición 79/09 cambió su nombre al actual “Escuela de Educación Secundaria Técnica Nº 3”; con un plan de estudios de 7 años, recibiendo los alumnos al egresar los títulos de “Técnico en Electrónica” y “Técnico en Electromecánica”.
//   `;
//   imagenesAdicionales: string[] = ['../../assets/historia2.jpeg', '../../assets/historia3.jpeg'];
//   mostrarHistoria: boolean = false;

//   toggleHistoria() {
//     this.mostrarHistoria = !this.mostrarHistoria;
//     console.log(this.mostrarHistoria);
//   }
// }

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements AfterViewInit {
  titulo: string = 'Historia EEST N°3';
  extracto: string = 'La Educación Técnica se gestó durante el peronismo, paralela a la educación tradicional. En ese contexto se creó nuestra escuela. En agosto de 1947 se presentó un proyecto de Ley en Diputados de la Nación para crear una Escuela “técnica de oficios” en el Partido de San Isidro, Provincia de Buenos Aires.';
  imagen: string = '../../assets/historia2.jpeg';
  textoCompleto: string = ` Finalmente se decidió alquilar una vieja mansión, una casona construida en 1892. Esta fue una propiedad de 
  // ... El resto del texto completo`

  imagenesAdicionales: string[] = ['../../assets/historia2.jpeg', '../../assets/historia3.jpeg'];

  @ViewChild('myModal') modalElement!: ElementRef;

  ngAfterViewInit() {
    const modal: any = this.modalElement.nativeElement;
    // Aquí puedes realizar cualquier acción adicional con el modal
  }

  openModal() {
    const modal: any = this.modalElement.nativeElement;
    modal.show();
  }

  closeModal() {
    const modal: any = this.modalElement.nativeElement;
    modal.hide();
  }
}

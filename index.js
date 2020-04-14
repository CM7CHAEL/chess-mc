var app = new Vue({
  //https://imgbb.com/
  el: '#app',
  data: {
    books: [{
        img: 'https://www.ajedrezeureka.com/wp-content/uploads/2016/02/ajedrez-posicion-de-todas-las-piezas-600x326.jpg',
        title: 'Inicialización del ajedrez',
        fecha: 'Europa durante el siglo XV',
        description: 'El ajedrez es un juego entre dos contrincantes, cada uno dispone de 16 piezas móviles que se colocan sobre un tablero​ dividido en 64 casillas',
        link: 'https://drive.google.com/file/d/10zp9_Us_5wwcZe7_NEcQkVuMQuLCsUW_/view?usp=sharing'
      },
      {
        img: 'https://images.chesscomfiles.com/uploads/v1/blog/338546.f561ea46.668x375o.06cc43c8605a@2x.jpeg',
        title: 'Historia del ajedrez',
        fecha: 'Europa durante el siglo XV',
        description: 'El ajedrez tiene su origen en la India, más concretamente en el Valle del Indo, y data del siglo VI',
        link: 'https://drive.google.com/file/d/1Kt9ciMh3SaswtvG66C_XNEdmKDEIN2Ob/view?usp=sharing'
      }
    ]
  }
})
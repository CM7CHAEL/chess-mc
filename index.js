var app = new Vue({
  //https://imgbb.com/
  el: '#app',
  data: {
    books: [{
        img: 'https://www.ajedrezeureka.com/wp-content/uploads/2016/02/ajedrez-posicion-de-todas-las-piezas-600x326.jpg',
        title: 'Inicialización del ajedrez',
        description: 'El ajedrez es un juego entre dos contrincantes, cada uno dispone de 16 piezas móviles que se colocan sobre un tablero​ dividido en 64 casillas',
        link: 'https://drive.google.com/file/d/10zp9_Us_5wwcZe7_NEcQkVuMQuLCsUW_/view?usp=sharing'
      },
      {
        img: 'https://images.chesscomfiles.com/uploads/v1/blog/338546.f561ea46.668x375o.06cc43c8605a@2x.jpeg',
        title: 'Historia del ajedrez',
        description: 'El ajedrez tiene su origen en la India, más concretamente en el Valle del Indo, y data del siglo VI',
        link: 'https://drive.google.com/file/d/1Kt9ciMh3SaswtvG66C_XNEdmKDEIN2Ob/view?usp=sharing'
      },
      {
        img: 'https://4.bp.blogspot.com/-Mh6LZSbIgzo/V_qWV6nJIII/AAAAAAAACkU/KbXacwFjDuMVhJ-R9ca8D2jBT_AAZFkiwCLcB/s1600/ajedrezzGjpg.jpg',
        title: 'Entrenar niños',
        description: 'Muchos desean enseñar ajedrez a sus hijos, estas son algunas pautas para que el aprendizaje sea más divertido',
        link: 'https://drive.google.com/file/d/1wp68cmfTCZUcKPb6HmRUBb6015rP2ArQ/view?usp=sharing'
      },
      {
        img: 'https://images.chesscomfiles.com/uploads/v1/user/21927134.3913d45b.1200x1200o.604a4654b864.jpeg',
        title: 'Perfil de un Ajedrecista',
        description: 'El ajedrez tiene su origen en la India, más concretamente en el Valle del Indo, y data del siglo VI',
        link: 'https://drive.google.com/file/d/14E1vb1UBCOfRQSZn2wmtwtG3WNse_uhi/view?usp=sharing'
      }
    ],
    phrases: [
      'De pocas partidas he aprendido tanto como de la mayoría de mis derrotas. (J. R. Capablanca, ex campeón del mundo).',
      'Puedo adivinar en un momento lo que se oculta detrás de las posiciones y que es lo que puede ocurrir o lo que va a ocurrir. Otros maestros tienen que hacer análisis para obtener algunos resultados, mientras a mí me bastan unos instantes. (J. R. Capablanca).',
      'Hay que eliminar la hojarasca del tablero. (J. R. Capablanca)',
      'Con el fin de mejorar tu juego, debes de estudiar los finales antes que todo, ya que mientras que los finales pueden ser estudiados y dominados por sí mismos, el medio juego y la apertura deben de ser estudiados en relación con los finales. (J. R. Capablanca).',
      'Jamás he estudiado Ajedrez. Sólo estudio Ajedrez cuando juego una partida. (J. R. Capablanca)',
      'El buen jugador siempre tiene suerte. (J. R.Capablanca)',
      '7. En el Ajedrez, como en la vida, la mejor jugada es siempre la que se realiza. (Dr. S.Tarrasch, Clásico del Ajedrez).',
      'Aquel que teme a un Peón de Dama aislado, debería de retirarse del Ajedrez. (Dr. S.Tarrasch).',
      'Desconfianza es la característica más necesaria de un jugador de Ajedrez. (Dr. S.Tarrasch).',
      'La belleza de un movimiento no se refleja sólo en su apariencia, sino en el pensamiento detrás de él. (Dr. S.Tarrasch).',
      'Uno no tiene que jugar muy bien, es suficiente jugar mejor que el oponente. (Dr. S.Tarrasch)',
      'No es suficiente ser un buen jugador, se debe también jugar muy bien. (Dr. S.Tarrasch)',
      'El mejor entrenador del ajedrecista es uno mismo. (T. Petrosian)',
      'Yo no creo en la Psicología. Yo creo en las buenas jugadas (Robert –Bobby- Fischer, ex campeón del mundo)',
      'Petrosian sabía detectar y alejar el peligro veinte jugadas antes de que este surgiera. (Bobby Fischer)',
      'El Ajedrez es una guerra en un tablero. El objetivo es aplastar la mente del oponente (Bobby Fischer)',
      'La táctica fluye a partir de una posición superior. (Bobby Fischer)',
      'La acumulación de pequeñas ventajas lleva a una supremacía considerable. (Wilhelm Steinitz, ex campeón del mundo)',
      'El peón es la causa más frecuente de la derrota. (W. Steinitz)',
      'Solo el jugador con la iniciativa tiene el derecho a atacar. (W. Steinitz).',
      'El jugador que lleva ventaja debe atacar o perderá dicha ventaja. (W. Steinitz)',
      'El Rey es una pieza de pelea. ¡Úselo! (W. Steinitz)',
      'El peón es el más importante instrumento de la victoria. (W. Steinitz)',
      'Quien desee llegar a ser un gran jugador deberá perfeccionarse en el campo del análisis. (Mijail Botvinnik, ex campeón del mundo y padre de la Escuela Soviética de Ajedrez.',
      'El Ajedrez es arte y cálculo. (M. Botvinnik)',
      'Para competir en Ajedrez es preciso, ante todo, conocer la naturaleza humana y comprender la Psicología del contrario. (A. Alekhine, ex campeón del mundo).',
      'El Ajedrez por encima de todo... ¡es una pelea! (Em. Lasker, ex campeón del mundo).',
      'Cuando veas una buena jugada, trata de encontrar otra mejor. (Em. Lasker)',
      'En el tablero de Ajedrez luchan personas y no figuras. (Em. Lasker)',
      'La amenaza de la derrota es más terrible que la derrota misma.',
      'Quien no asume un riesgo nunca ganará una partida. (GM P. Keres)',
      'El Ajedrez es imaginación. (GM D. Bronstein, Antigua Unión Soviética)',
      'Jugar una partida de Ajedrez es pensar, elaborar planes y también tener una pizca de fantasía. (GM D. Bronstein).',
      'Ayudad a vuestras piezas para que os ayuden. (Paul Morphy, genio norteamericano)',
      'Bobby sólo arroja las piezas y solas caen en las casillas correctas. (Miguel Najdorf, GM polaco/argentino)',
      'Primero debe hacerse la jugada forzada y luego entregarse a la meditación. (Benjamín M. Blumenfeld, Maestro ruso)',
      'La combinación es la técnica de la belleza objetiva del juego. (MI R. Grau)',
      'Por medio del razonamiento se llega a descubrir las combinaciones. (MI R. Grau)',
      'La técnica del juego posicional puede ser adquirida. (GM A. Ninzowitch, Clásico del Ajedrez)',
      'La capacidad defensiva de una pieza clavada es solo imaginaria. (GM A. Nimzovitch)',
      'Un mal plan es mejor que no tener ningún plan. (GM Frank Marshall Clásico del Ajedrez)',
      'La genialidad consiste en saber transgredir las reglas en el momento adecuado. (R. Teichmann, Clásico del Ajedrez).',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  }
})
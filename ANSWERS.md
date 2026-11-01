# Preguntas de checkpoint

1. **`flexDirection` por defecto.** En React Native el valor por defecto es `column`, por lo que los hijos se apilan verticalmente. En la web, CSS con `display: flex` usa `row` por defecto.

2. **`justifyContent` vs `alignItems`.** `justifyContent` distribuye a los hijos a lo largo del eje principal (el definido por `flexDirection`). `alignItems` los alinea a lo largo del eje transversal.

3. **`flex: 1`.** Dentro de una fila hace que el elemento ocupe una parte igual del ancho disponible (tres stats con `flex: 1` forman columnas iguales). En el `View` más externo hace que la pantalla ocupe todo el alto disponible.

4. **`cover` vs `contain`.** `cover` escala la imagen para llenar toda la caja, manteniendo la proporción y recortando lo que no cabe. `contain` la escala para que quepa completa dentro de la caja, por lo que puede quedar espacio vacío.

5. **`StyleSheet.create`.** Valida los nombres de los estilos al definirlos, mantiene los estilos en un solo lugar y evita crear objetos nuevos en cada render, así el código es más claro y re-renderizar es más barato que con objetos en línea.

6. **Sombra en Android.** `shadowColor` y el resto de las props `shadow*` solo están implementadas en iOS. Android dibuja las sombras con `elevation`, por eso se usa `Platform.select`.

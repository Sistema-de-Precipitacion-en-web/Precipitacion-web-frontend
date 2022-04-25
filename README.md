# Precipitacion-Web



## Comandos utiles
```js
 npm start: //para arrancar el proyecto de manera local.
 npm run deploy: //compila y despliega el proyecto en github-pages.
```

## Componentes reutilizables
### Button
Para usar este componente debes hacer las importaciones necesarias

```js
import Button from "../../components/Button"; //la ubicacion del componente
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //usa iconos de font Awesome
```
Ahora solo debes implementarlo como el siguiente ejemplo:

```js
<Button icon={faPlus} to='/municipios/agregar' style="default" title="Agregar" size="1x"/>
```
Propiedades
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `icon{}` | `string` | Define el icono |
| `to='/'` | `string` | Establece la ruta de redireccion |




# 🗣️ Reinas del Chisme — Simulador POO

Este proyecto es una simulación interactiva en **Node.js** que modela el comportamiento de tres tipos de *chismosas legendarias*, cada una con sus habilidades únicas para recolectar y difundir chismes. Utiliza conceptos de **Programación Orientada a Objetos (POO)**, herencia, clases abstractas, y control de consola con la librería `chalk`.

---

## 📦 Requisitos

- Tener instalado **Node.js**
- Ejecutar `npm install` para instalar dependencias (específicamente `chalk`)
- El archivo `package.json` debe incluir:

```json
"type": "module"
````

---

## 🚀 Ejecución

Desde tu terminal, estando en la raíz del proyecto:

```bash
node index.js
```

---

## 📋 Menú Interactivo

Cuando inicies el programa, verás un menú:

```
=== Menú de Chismosas ===
1) Simular 1 ronda
2) Simular 2 rondas
3) Salir
```

Cada opción simula rondas donde las chismosas:

* Recolectan información
* Difunden su chisme
* Modifican su nivel de chisme y reputación

Al final, se muestran los resultados en consola con **colores visuales**:

| Color      | Significado                  |
| ---------- | ---------------------------- |
| Magenta    | Nivel de chisme alto (≥ 5.5) |
| Gris       | Reputación baja (≤ 3)        |
| Naranja 🔶 | Reputación alta (≥ 6)        |
| Blanco     | Valores medios               |

---

## 🧱 Estructura de Clases

### 🔹 `Chismosa` (Clase abstracta)

Clase base que **no puede ser instanciada directamente**. Define propiedades y métodos comunes:

* Propiedades privadas:

  * `#reputacion` (0 a 10)
  * `#nivelChisme` (0 a 10)

* Métodos disponibles:

  * `getReputacion()`
  * `getNivelChisme()`
  * `recolectarInfo()` → abstracto
  * `contarChisme()` → abstracto

---

## 👑 Subclases

### 🧓 `TiaVecina`

* Recolecta información en reuniones del barrio.
* Difunde chismes sirviendo café.
* Sube rápido el nivel de chisme pero pierde reputación fácilmente.

### 👩‍💼 `CompaneraCuriosa`

* Pregunta de forma disimulada en el trabajo.
* Usa los chismes como lecciones.
* Gana reputación fácilmente, pero el nivel de chisme sube lentamente.

### 🎓 `EstudianteEspia`

* Observa chats ajenos en clase.
* Publica chismes como estados de WhatsApp.
* Sube el chisme rápidamente pero puede perder reputación de forma aleatoria.

---

## 📁 Estructura del Proyecto

```
📁 Reinas-del-Chisme/
├── clases/
│   ├── Chismosa.js
│   ├── TiaVecina.js
│   ├── CompaneraCuriosa.js
│   └── EstudianteEspia.js
├── index.js
├── package.json
└── README.md
```

---

## 🧠 Conceptos aplicados

* Programación orientada a objetos en JavaScript
* Encapsulamiento con `#propiedadesPrivadas`
* Herencia de clases
* Métodos abstractos simulados
* Menús interactivos con `readline`
* Salida visual con colores (`chalk`)

---

## ✨ Créditos

Creado por **Santiago Pedraza** 

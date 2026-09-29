# Suno — operación desde el navegador

Todo esto ocurre en la cuenta del usuario, con su sesión. Tú operas la página; **las decisiones de cuenta son del usuario**. (Interfaz observada en septiembre de 2026; Suno la cambia seguido.)

## Qué NO hacer nunca
- Escribir contraseñas, completar logins o crear cuentas → el usuario inicia sesión o crea su cuenta él mismo.
- Comprar, suscribirse o aceptar pagos → si aparece "Unlock our best models / Actualiza a Pro", ciérralo.
- Pulsar **Publish / Publicar** sin que el usuario lo pida (las canciones quedan privadas por defecto).
- Borrar canciones, descargar archivos o subir audio ajeno sin permiso del usuario.

## 1. Llegar al formulario
1. Usa el navegador donde el usuario tiene la sesión (normalmente su Chrome con Claude in Chrome). Si el navegador que tienes no tiene sesión, díselo y ofrece: que inicie sesión ahí, o usar su Chrome.
2. Abre `https://suno.com/create`. Verifica que aparece su usuario en la barra lateral.
3. Elige **Advanced / Avanzado** (arriba del panel izquierdo). El modelo aparece arriba a la derecha del panel.
4. Mira los **créditos** disponibles. Cada tanda los gasta: una tanda por pedido, y pregunta antes de hacer más.

## 2. Cargar letra, estilo y título
- **Letra:** el editor de letras es un editor enriquecido (Lexical). **No** acepta `form_input`, ni un evento de pegado simulado, ni `execCommand` con saltos de línea (todo queda en una sola línea). Ejecuta `scripts/cargar_letra_suno.js` con la herramienta de JavaScript del navegador, reemplazando `LETRA_JSON` por la letra **codificada como string JSON** (entre comillas dobles, con `\n` en los saltos de línea, tal como sale de `JSON.stringify`). Verifica que `parrafosEnEditor` ≈ `lineas` y que `editoresLexical` sea 1, y confirma con una captura.
- **Estilo:** el textarea de estilos acepta `form_input` (búscalo con `find`: "styles textarea"; su placeholder cambia de idioma y de ejemplos).
- **Título:** input "Song Title (Optional) / Título de la canción" → `form_input`.
- **Instrumental:** si la canción no lleva voz, activa el interruptor **Instrumental**.
- Captura para confirmar los tres campos antes de crear.

## 3. Crear
- Pulsa **Create / Crear** con la referencia del botón (`find` → "Create song button"): un clic por coordenadas a veces no toma. Pulsa **una sola vez** y confirma con una captura que aparece el ícono de carga.
- Espera ~30–60 s. Aparecen 2 canciones con el título; en el plan gratis a veces también muestras cortas de un modelo superior ("Preview / Vista previa", con "Upgrade for full song").
- Si salta un aviso de venta, ciérralo con su botón "Close" (búscalo con `find`).

## 4. Leer resultados
Ejecuta `scripts/leer_canciones_suno.js` (con el título como filtro) para obtener título y link `https://suno.com/song/<id>` de cada versión. Las duraciones se ven en la miniatura: haz una captura con zoom de la lista (lo más nuevo sale arriba, bajo "Today/Hoy"). Tabla: versión · modelo · duración · link, marcando completas vs muestras.

## 5. Remix (cover) de una canción ya creada
Solo de canciones generadas en la cuenta del usuario o de audio sobre el que tenga derechos. No subas canciones comerciales ajenas.
1. En la fila de la canción, pulsa **Remix**. Si pregunta "Overwrite Styles? / ¿Sobrescribir estilos?", acepta (el botón puede verse con una traducción rara).
2. El panel queda con **Audio: <canción> · modo "Cover / Cubrir"** y un control **"Audio influence / Influencia del audio"** (cuánto se parece al original). El valor por defecto mantiene la melodía y deja cambiar el ritmo; súbelo para algo más fiel, bájalo para algo más libre.
3. Carga la letra ajustada (intro corto, gancho al inicio), el estilo del remix y un título con "(Remix)". Crear.
4. Las versiones salen marcadas como "COVER / CUBRIR".

## 6. Otras funciones
- **Extend / Extender:** alargar una versión corta o continuar desde un punto (también sirve si la letra pasa de 5000 caracteres).
- **Otra tanda:** cada Create da versiones distintas con la misma letra. Si el gancho o el intro no quedó bien, propón otra tanda (pregunta antes: gasta créditos) antes de reescribir.
- **Descargar (MP3/WAV):** lo hace el usuario desde el menú de la canción; en el plan gratis puede no estar disponible.
- **Idioma de la interfaz:** puede cambiar a mitad de sesión (Crear, Estilos, Lírica, Hoy). Busca los elementos por función, no por texto exacto.

## 7. Si la interfaz cambió o algo falla
- Si un selector, botón o etiqueta de esta guía no aparece: toma una captura, busca el elemento por lo que hace y no hagas clics a ciegas.
- Si el script de la letra falla: pide al usuario que pegue la letra a mano (Cmd/Ctrl+V funciona para un humano) o escríbela con la acción de teclado del navegador, línea por línea (Enter entre líneas), y verifica con una captura.
- Si no hay créditos: detente, avisa y entrega el texto para generarlo después.

## 8. Derechos y planes
- Plan gratis: sin derechos comerciales, y no se ganan después al subir de plan.
- Plan pago (Pro/Premier): derechos comerciales para lo generado mientras está activo, modelo de mayor calidad y descargas.
- Para eventos pagados, anuncios o marcas: la versión final se genera con un plan pago activo. Las condiciones cambian: que el usuario las confirme en suno.com/pricing y en los términos.

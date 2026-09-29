// MÚSICA STUDIO — leer las canciones de la lista de suno.com/create
// Ejecutar con la herramienta de JavaScript del navegador.
// Devuelve [{ titulo, link }] en el orden de la página (lo más nuevo arriba).
// USO: reemplaza TITULO por el título de la canción recién creada (o déjalo vacío para ver todo).
// Las duraciones no se leen aquí: míralas en una captura de la lista.

function leerCanciones(titulo = '', max = 6) {
  const vistos = new Map();
  for (const a of document.querySelectorAll('a[href*="/song/"]')) {
    const link = a.href.split('?')[0];
    const texto = (a.innerText || a.getAttribute('aria-label') || a.title || '').trim();
    if (!vistos.has(link) || (!vistos.get(link) && texto)) vistos.set(link, texto);
  }
  const filtro = titulo.toLowerCase();
  return [...vistos]
    .filter(([, t]) => !filtro || t.toLowerCase().includes(filtro))
    .slice(0, max)
    .map(([link, t]) => ({ titulo: t, link }));
}

leerCanciones('TITULO');

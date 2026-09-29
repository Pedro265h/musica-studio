// MÚSICA STUDIO — cargar la letra en el editor de letras de suno.com/create
// Ejecutar con la herramienta de JavaScript del navegador (admite await de nivel superior).
//
// El editor de letras de Suno es Lexical: NO acepta form_input, ni pegado simulado,
// ni execCommand con saltos de línea. Lo que funciona es reemplazar el estado del
// editor con un párrafo por línea.
//
// USO: en la línea `const LETRA = ...` reemplaza el marcador por la letra codificada como string JSON
//      (entre comillas dobles, con \n en los saltos de línea, como sale de JSON.stringify).
//      Ej.: const LETRA = "[Intro]\n¡Bienvenidos!\n\n[Chorus]\n...";

const LETRA = LETRA_JSON;

async function cargarLetra(letraCruda) {
  if (typeof letraCruda !== 'string' || !letraCruda.trim()) {
    return { ok: false, error: 'La letra está vacía: reemplaza el marcador de la línea const LETRA por la letra antes de ejecutar.' };
  }
  const letra = letraCruda.replace(/\r\n/g, '\n').trim();
  if (letra.length > 5000) {
    return { ok: false, excedeLimite: true, caracteres: letra.length, error: 'La letra pasa de 5000 caracteres (límite de Suno). Acórtala o divídela y usa Extend.' };
  }

  // Encontrar el editor Lexical correcto (el de letras), sin agarrar el de estilos u otros.
  const wrap = document.querySelector('.lyrics-editor-content');
  const candidatos = [wrap, wrap && wrap.querySelector('[contenteditable="true"]'),
                      ...document.querySelectorAll('[contenteditable="true"][role="textbox"]')].filter(Boolean);
  const conEditor = candidatos.filter(n => n.__lexicalEditor);
  const el = conEditor[0];
  if (!el) {
    return { ok: false, error: 'No encontré el editor de letras. ¿Estás en suno.com/create en modo Advanced/Avanzado? Si Suno cambió, pega la letra a mano o escríbela con el teclado.' };
  }

  const ed = el.__lexicalEditor;
  const parrafo = t => ({
    children: t ? [{ detail: 0, format: 0, mode: 'normal', style: '', text: t, type: 'text', version: 1 }] : [],
    direction: t ? 'ltr' : null, format: '', indent: 0, type: 'paragraph', version: 1, textFormat: 0, textStyle: ''
  });
  const lineas = letra.split('\n');
  const estado = { root: { children: lineas.map(parrafo), direction: 'ltr', format: '', indent: 0, type: 'root', version: 1 } };
  ed.setEditorState(ed.parseEditorState(JSON.stringify(estado)));
  ed.focus();
  await new Promise(r => setTimeout(r, 500));

  return {
    ok: true,
    lineas: lineas.length,
    parrafosEnEditor: el.querySelectorAll('p').length,  // debe coincidir con "lineas"
    editoresLexical: new Set(conEditor.map(n => n.__lexicalEditor)).size,  // debe ser 1
    caracteres: letra.length,
    inicio: el.innerText.replace(/\n\n/g, ' / ').slice(0, 120)
  };
}

await cargarLetra(LETRA);

# 🎵 Música Studio — Skill para Claude

> Tu compositor y productor musical con IA: escribe canciones originales en español que la gente quiere cantar, las deja listas para Suno y —si quieres— las genera él mismo en tu cuenta y te devuelve los links.

---

## ¿Qué hace?

Convierte una idea como *"quiero una canción para abrir mi evento"* en una canción terminada:

1. **Brief rápido** — para qué momento es, qué energía, qué frases o nombres deben aparecer (sin interrogatorios).
2. **Letra original** — con gancho para corear, momentos de pregunta-respuesta con el público y la estructura correcta para cada tipo de canción:
   - 🔥 **Apertura épica** — "¡Bienvenidos!" y explota desde el primer segundo
   - 🙌 **Himno para corear** — la canción del evento o de la marca
   - 🕊️ **Espiritual / medicina** — ceremonial, íntima que crece, con mantra
   - 🎛️ **Remix** — misma canción, otro ritmo
   - 📣 **Jingle de marca**
3. **Estilo listo para Suno** — biblioteca de estilos por género y cómo traducir "como [artista]" a una descripción de sonido.
4. **Producción en Suno (opcional)** — si le dices "hazlo tú", carga la letra, el estilo y el título en tu cuenta de Suno desde tu navegador, crea la canción, hace remixes (modo *cover*) y te entrega una tabla con los links.
5. **Iteración** — "más potente", "el inicio dura mucho", "más espiritual", "haz un remix": sabe qué cambiar en cada caso.

## 🚀 Instalación

**Claude Code (Mac / Linux):**

```bash
git clone https://github.com/Pedro265h/musica-studio.git ~/.claude/skills/musica-studio
```

**Claude Code (Windows, PowerShell):**

```powershell
git clone https://github.com/Pedro265h/musica-studio.git "$env:USERPROFILE\.claude\skills\musica-studio"
```

**Claude.ai:** descarga el repositorio como ZIP (viene como carpeta `musica-studio-main/`) y súbelo en **Settings → Capabilities → Skills**. En Claude.ai la skill escribe letras y estilos; para que genere las canciones en Suno por ti necesitas Claude Code, la app de escritorio o la extensión Claude in Chrome.

## 💬 Cómo usarla

Escríbele a Claude algo como:

> *"Hazme una canción épica para la apertura de mi evento en Bogotá, que se llama Despertar, para que la gente se ponga de pie"*

> *"Quiero una canción más espiritual, tipo música de medicina, para el cierre"*

> *"Métela a Suno y hazla tú"* · *"Haz un remix de la versión 2"*

## ⚙️ Requisitos

- Para escribir letras y estilos: solo Claude (en español, inglés, portugués…).
- Para que la genere en Suno por ti: una cuenta de [Suno](https://suno.com) con la sesión abierta en tu navegador y la extensión **Claude in Chrome** (o el navegador integrado de la app). **Tú inicias sesión**: la skill nunca escribe contraseñas, no compra planes y no publica canciones sin tu permiso.

## ⚖️ Ojo con los derechos

En Suno, lo que se genera con el **plan gratis no tiene derechos de uso comercial** (y no se ganan después al subir de plan). Para un evento pagado, un anuncio o una marca, genera la versión final con un plan pago activo.

## 📁 Estructura

```
musica-studio/
├── SKILL.md                     # flujo de trabajo
├── references/
│   ├── letras.md                # plantillas por tipo de canción + reglas de cantabilidad
│   ├── estilos.md               # biblioteca de estilos para Suno
│   └── suno.md                  # operación de Suno desde el navegador
└── scripts/
    ├── cargar_letra_suno.js     # carga la letra en el editor de Suno
    └── leer_canciones_suno.js   # devuelve título y link de las canciones creadas
```

---

Mantenida por **Pedro Hernández** — IA aplicada al marketing y la automatización, en español.

- **Instagram**: [@pedro.hernandez._](https://instagram.com/pedro.hernandez._)

_Creada por Pedro_

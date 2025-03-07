// Diccionario de mensajes personalizados y contraseñas
const mensajes = {
    mamita: { 
        pass: "11", 
        mensaje: `🌷 MAMITA LIZ - CHINITA 🌷<br>
        *"Mamita hermosa, en este Día de la Mujer quiero recordarte cuánto te amo y admiro. 
        Eres mi mayor ejemplo de amor, esfuerzo y dedicación. Gracias por cada sacrificio, por cada sonrisa que me regalas, 
        por enseñarme a ser fuerte y seguir adelante sin importar las dificultades. Sé que siempre puedo contar contigo, 
        y eso es un regalo invaluable en mi vida.<br><br>
        Eres una mujer increíble, con un corazón gigante y una luz que ilumina a todos los que te rodean. No hay palabras suficientes 
        para expresar todo lo que significas para mí. Hoy solo quiero desearte un día lleno de amor y felicidad, porque te lo mereces 
        más que nadie. Que la vida te devuelva multiplicado todo el cariño que nos das. ¡Te amo muchísimo, mamita!"* 💖✨`
    },
    abuelita: { 
        pass: "30", 
        mensaje: `💐 ABUELITA MAMA SERA 💐<br>
        *"Mi querida abuelita, en este Día de la Mujer quiero decirte cuánto te admiro y cuánto valoro cada momento contigo. 
        Tu amor, paciencia y sabiduría han sido un pilar fundamental en nuestra familia. Gracias por cada enseñanza, 
        por cada palabra de aliento y por el cariño infinito que siempre nos brindas.<br><br>
        Eres una mujer fuerte, llena de experiencias que han dejado huella en nuestras vidas. Que este día esté lleno de amor 
        y felicidad para ti, porque mereces todo lo hermoso del mundo. ¡Te quiero muchísimo, abuelita!"* 🥰🌸`
    },
    susi: { 
        pass: "12", 
        mensaje: `🌺 TIA SUSI 🌺<br>
        *"Tía Susi, en este Día de la Mujer quiero decirte que eres una persona maravillosa. 
        Tu alegría y cariño hacen que todo sea mejor a tu alrededor. Que hoy sea un día lleno de sonrisas y momentos especiales, 
        porque te lo mereces. ¡Feliz día!"* 💕`
    },
    paola: { 
        pass: "19", 
        mensaje: `🌸 HERMANITA PAOLA 🌸<br>
        *"Paolita, mi pequeña princesa, aunque aún eres chiquita, quiero que sepas que eres una niña increíble, 
        llena de luz y alegría. Eres mi hermanita preciosa y siempre voy a estar para ti. ¡Feliz Día de la Mujer, 
        que sigas creciendo con mucho amor y felicidad!"* 💖`
    },
    esther: { 
        pass: "26", 
        mensaje: `🌹 PRIMITA ESTHER 🌹<br>
        *"Esther, en este Día de la Mujer quiero recordarte lo increíble que eres. Eres fuerte, luchadora y una persona 
        que siempre aporta alegría. Que hoy recibas todo el amor y la felicidad que das a los demás. ¡Disfruta tu día!"* ✨`
    },
    madhuri: { 
        pass: "19", 
        mensaje: `🌷 PRIMITA MADHURI 🌷<br>
        *"Madhuri, eres una joven maravillosa con un futuro brillante por delante. No dejes de soñar ni de luchar por lo que quieres. 
        Hoy es tu día, así que celébralo con mucha alegría. ¡Feliz Día de la Mujer!"* 💐`
    }
};

// Función para validar contraseña
function validar() {
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("password").value;

    if (mensajes[nombre] && mensajes[nombre].pass === pass) {
        mostrarMensaje(mensajes[nombre].mensaje);
    } else {
        alert("Nombre o contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// Función para mostrar mensaje y rosas
function mostrarMensaje(mensaje) {
    // Crear ventana emergente
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `<p>${mensaje}</p><button onclick="cerrarPopup(this)">Cerrar</button>`;
    document.body.appendChild(popup);

    // Generar rosas 🌹 en toda la pantalla
    for (let i = 0; i < 40; i++) { 
        let rosa = document.createElement("div");
        rosa.classList.add("rosa");
        rosa.innerHTML = "🌹";
        rosa.style.left = Math.random() * 100 + "vw";
        rosa.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(rosa);

        // Eliminar rosas después de la animación
        setTimeout(() => rosa.remove(), 5000);
    }
}

// Función para cerrar la ventana emergente
function cerrarPopup(boton) {
    boton.parentElement.remove();
}


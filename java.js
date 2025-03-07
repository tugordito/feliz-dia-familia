// Diccionario de mensajes personalizados y contraseñas
const mensajes = {
    mamita: { 
        pass: "11", 
        mensaje: `🌷 Para tu mamita 🌷<br><br>
        *"Mamita hermosa, en este Día de la Mujer quiero recordarte cuánto te amo y admiro. 
        Eres mi mayor ejemplo de amor, esfuerzo y dedicación. Gracias por cada sacrificio, 
        por cada sonrisa que me regalas. Sé que siempre puedo contar contigo. <br><br>
        Que la vida te devuelva multiplicado todo el cariño que nos das. ¡Te amo muchísimo, mamita!"* 💖✨`
    },
    abuelita: { 
        pass: "30", 
        mensaje: `💐 Para tu abuela 💐<br><br>
        *"Mi querida abuelita, en este Día de la Mujer quiero decirte cuánto te admiro y cuánto valoro cada momento contigo. 
        Tu amor y sabiduría han sido un pilar en nuestra familia. Gracias por cada enseñanza y cariño. 
        ¡Te quiero muchísimo, abuelita!"* 🥰🌸`
    },
    susi: { 
        pass: "12", 
        mensaje: `🌺 Para tu tía Susi 🌺<br><br>
        *"Tía Susi, en este Día de la Mujer quiero decirte que eres una persona maravillosa. 
        Tu alegría hace que todo sea mejor. ¡Feliz día!"* 💕`
    },
    paola: { 
        pass: "19", 
        mensaje: `🌸 Para tu hermanita Paola 🌸<br><br>
        *"Paolita, mi pequeña princesa, eres una niña increíble, llena de luz y alegría. 
        ¡Feliz Día de la Mujer, que sigas creciendo con amor y felicidad!"* 💖`
    },
    esther: { 
        pass: "26", 
        mensaje: `🌹 Para tu prima Esther 🌹<br><br>
        *"Esther, en este Día de la Mujer quiero recordarte lo increíble que eres. 
        Que hoy recibas todo el amor y la felicidad que das a los demás. ¡Disfruta tu día!"* ✨`
    },
    madhuri: { 
        pass: "19", 
        mensaje: `🌷 Para tu prima Madhuri 🌷<br><br>
        *"Madhuri, eres una joven maravillosa con un futuro brillante. 
        Hoy es tu día, así que celébralo con alegría. ¡Feliz Día de la Mujer!"* 💐`
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


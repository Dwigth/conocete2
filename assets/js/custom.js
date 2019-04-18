/**
 * @copyright KrustyLabDevelopers
 * @version 1.0.0
 * @description Script que integra referencias dinámicas, mailTo de formulario de contacto
 *              y copyright de conocete y protegete.
 */
(function () {
    var name = document.querySelector('#name');
    var message = document.querySelector('#message');
    var input = document.querySelector('#btn');
    var copyright = document.querySelector('.copyright');
    var referencias = [
        "Estrategia Nacional para la Prevención del Embarazo en Adolescentes (2017). Ciudad de México.",
        "Keith L. Moore, Arthur F. Dalley, Anne M.R.Agur. (2010). Anatomía con orientación Cliníca. España: Lippincott Williams & Wilkins.",
        "Ross y Pawlina. (2009). Aparato Genital Femenino. En Histologia Texto y Atlas color con Biologia Celular y Molecular(844 849). Buenos Aires: Médica Panamericana.",
        "José María Murcia-Lora & María Luisa Esparza-Encina2. (Diciembre 2011). La ventana de la fertilidad y marcadores biológicos: revisión y análisis en ciclos ovulatorios normales. persona y bioetica •, 15, 149-165 . 2019, Marzo 07, De scielo Base de datos.",
        "Allen J. Wilcox, M.D., PH.D., Clarice R. Weinberg, PH.D., and Donna D. Baird, PH.D.. (December 7, 1995). Timing of Sexual Intercourse in relation to ovulation. The New England Journal of Medicine, 333, 1518-1521. 2018, Abril 15, De NEJMBase de datos. Allen J. Wilcox. M.D., PH-",
        "Prevención, diagnóstico y tratamiento de la Preeclampsia en segundo y tercer nivel de atención, Instituto Mexicano del Seguro Social; Ciudad de México, 16/03/2017.",
        "Guía de Práctica clínica para el Control Prenatal con Enfoque de Riesgo. México: Secre- taria de Salud; 2009.",
        "DRA. CARMINA VIDAL. (Septiembre 2011). Esterilidad e infertilidad humanas Abor- daje y tratamiento. CIENCIA Y VIDA, 15, 5-101. 2018, Junio 18, De Elsevier Base de datos.",
        "Jeffrey D. Klausner, Edward W. Hook III. (2008). Diagnóstico y tratamiento Enfermeda- des de Transmision Sexual. México: Mc Graw Hill.",
        "Prevención, Diagnóstico y tratamiento de la Vaginitis infecciosa en mujeres en edad reproductiva en el primerr nivel de Atención. México: Secretaría de Salud; 11 de Diciembre de 2014",
        "Guía de práctica clínica para la atención del paciente con infección por el VIH en el primer nivel de atención. México: Secretaría de Salud, 2008.",
        "Prevención y detección oportuna del cáncer cérvico uterino en el primer nivel de atención,México: Secretaía de Salud; 2008.",
        "Tratamiento del Condiloma Acuminado en mujeres de edad reproductiva en los tres niveles de atención, México: Secretaria de Salud: 27 de junio del 2013",
        "Norma Oficial Mexicana, NOM 005-SSA2-1993, De los Servicios de Planificación Familiar.",
        "Articulo 144-148. Código Penal para el Distrito Federal, Reformado, G.O. 26 de Abril de 2007.",
        "Justo Aznar , German Cerdá . (2014 - 10 - 20). Aborto y salud mental de la mujer. Acta Bioethica, 20 No. 2, 189-195.",
        "C. Gómez Lavín, R. Zapata García. (2005 Jul-Aug). Categorización diagnóstica del síndrome postaborto. Actas Españolas de Psiquiatria, 33, 267-72.",
        "David A. Eschenbach. (2015/05/01). Treating Spontaneous and Induced Septic Abor- tions. Obstetrics & Gynecology., 125, 1042–1048.",
        "Introducción a los métodos anticonceptivos: Información general. 2002 Secretaría de Salud",
        "José Luis Neyro1 Ignacio Cristóbal, Cuauhtémoc Celis-González, Miriam Gómez, Mi- guel Ángel Elorriag, Josefina Lira-Plascencia. (noviembre, 2015). Mitos y realidades de los anticonceptivos reversibles de larga duración. Ginecol Obstet Mex 2, 83, 707-721.",
        "Diagnóstico de la Pareja Infertíl y tratamiento con técnicas de baja complejidad. Méxi- co: Instituto Mexicano del Seguro Social, 2012",
        "Prevención y detección oportuna del cáncer cérvico uterino en el primer nivel de aten- ción. México: Secretaría de Salud, diciembre del 2011",
        "Pineda López M, Ceballos Blanco R. (2008). Evaluación de Tecnologías para la Salud: Evaluación de la Efectividad de los dispositivos para la toma de Frotis de Papanicolaou. CENETEC 1, 13. 2017, mayo 09., De Expediente CENETEC: 20S.6.2/05/2008",
        "Pérez-Palacios Gregorio. (1994). NOM-014-SSA2-1994, Para la prevención, detección, diagnóstico, tratamiento, control y vigilancia epidemiológica del cáncer cérvico uterino. 2 de marzo de 1998., de Secretaría de Salud."
    ];
    var listaReferencias = document.querySelector('#quoute-list');
    var referenciasEnLista = Array.from(listaReferencias.children);
    var incremento = 5;
    var inicio = 0;
    var final = incremento + inicio;
    referenciasDOM(inicio, final);
    setInterval(() => {
        referenciasDOM(inicio, final);
        inicio += incremento;
        final = incremento + inicio;
        if (inicio > referencias.length) {
            inicio = 0;
            final = incremento + inicio;
        }
    }, 25000);

    copyright.textContent += `Conocete Y Protegete. ${new Date().getFullYear()}.`

    input.addEventListener('click', function (evt) {
        // evt.preventDefault();
        input.href = `mailto:grupoikaro@gmail.com?body=Mi nombre es ${name.value}. ${message.value}`;
    });

    function referenciasDOM(inicio, final) {
        var referenciasActuales = referencias.slice(inicio, final);
        referenciasEnLista.forEach((li, i) => {
            li.children[0].textContent = referenciasActuales[i];
        });
    }

})();
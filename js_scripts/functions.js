

let isRotated = false;  
function bt_menu_principal(deg_final,){
    
    tempoTransition = 0.5;

    tempo_transicao("bt_menu", ".div_line1", tempoTransition);
    tempo_transicao("bt_menu", ".div_line2", tempoTransition);
    tempo_transicao("bt_menu", ".div_line3", tempoTransition);
    tempo_transicao("bt_menu", ".div_line4", tempoTransition);

    rotacao_line("bt_menu", ".div_line3", 
        deg_inicial = 0, 
        deg_final = 45, 
        opacity_final = 100, 
        opacity_inicial = 100,
    );
    rotacao_line("bt_menu", ".div_line2", 
        deg_inicial = 0, 
        deg_final = -45, 
        opacity_final = 100, 
        opacity_inicial = 100,
    );
    opacidade_line("bt_menu", ".div_line2",
        opacity_final = 100, 
        opacity_inicial = 0,
    );
    
    opacidade_line("bt_menu", ".div_line1",
        opacity_final = 0, 
        opacity_inicial = 100,
        delay_inicial = 0,
        delay_final = 0.25,
    );
    
    opacidade_line("bt_menu", ".div_line4",
        opacity_final = 0, 
        opacity_inicial = 100,
        delay_inicial = 0,
        delay_final = 0.25,
    );

    gradiente_ajustavel(
        id_div = "div_bg_menu",
        porcentagem_final = 0, 
        porcentagem_inicial = -130,
        delay_inicial= 0,
        delay_final= 0.5,
    );

    gradiente_ajustavel(
        id_div = "div_menu",
        porcentagem_final = 0, 
        porcentagem_inicial = -130,
        delay_inicial= 0.5,
        delay_final= 0,
    );
    
    trocar_visibility("div_menu", "visible", "hidden", isRotated);
    trocar_visibility("div_bg_menu", "visible", "hidden", isRotated);
    
    isRotated = !isRotated;
}


function tempo_transicao(
    id_bt,
    nome_div,
    tempo = 1,
){
    const button = document.getElementById(id_bt);
    const div_ = button.querySelector(nome_div);
    div_.style.transitionDuration = `${tempo}s`;
}

function rotacao_line(
    id_bt, 
    div_line,
    deg_inicial = 0, 
    deg_final = 45,
){
    let angulo = deg_inicial;
    const button = document.getElementById(id_bt);
    const line = button.querySelector(div_line);

    if (!isRotated) {
        angulo = deg_final;
    } else {
        angulo = deg_inicial;
    }
        
    line.style.transform = `rotate(${angulo}deg)`;
}

function opacidade_line(
    id_bt, 
    div_line,
    opacity_final = 100, 
    opacity_inicial = 100,
    delay_inicial=0,
    delay_final=0,
    ){
    let opacidade = opacity_inicial;
    const button = document.getElementById(id_bt);
    const line = button.querySelector(div_line);
    
    if (!isRotated) {
        opacidade = opacity_final;
        line.style.transitionDelay = `${delay_inicial}s`;
    } else {
        opacidade = opacity_inicial;
        line.style.transitionDelay = `${delay_final}s`;
    }
        
    line.style.opacity = `${opacidade}%`;
}

function gradiente_ajustavel(
    id_div, 
    porcentagem_final = 0, 
    porcentagem_inicial = -130,
    delay_inicial=0,
    delay_final=0,
    ){

    let porcentagem = porcentagem_inicial;
    const div_gradiente = document.getElementById(id_div);
    
    if (!isRotated) {
        porcentagem = porcentagem_final;
        div_gradiente.style.transitionDelay = `${delay_inicial}s`;
    } else {
        porcentagem = porcentagem_inicial;
        div_gradiente.style.transitionDelay = `${delay_final}s`;
    }

    div_gradiente.style.maskPosition = `0vh ${porcentagem}vh`;
}


function trocar_visibility(
    nome_div,
    mudanca_inicial,
    mudanca_final,
    referencia_boleano,
){
    const div_ = document.getElementById(nome_div);

    if (!referencia_boleano) {
        div_.style.visibility = `${mudanca_inicial}`;
    }

    div_.addEventListener("transitionend", function onTransition() {
        if (referencia_boleano) {
            div_.style.visibility = `${mudanca_final}`;
        } 
    
        div_.removeEventListener("transitionend", onTransition);
    });
}


const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pegando os valores dos campos
    const nome = formulario.nome.value;
    const email = formulario.email.value;
    const mensagem = formulario.mensagem.value;


    alert("Não foi possível enviar os dados. Por enquanto, este formulário é apenas visual." + `\n\nOs dados preenchidos foram:\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
  });
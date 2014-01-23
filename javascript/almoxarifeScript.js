/*						<!-- ================================================== -->
						<!-- ================================================== -->
						<!-- == AUTORES..: Bruno Oliveira e GIOVANI APARECIDO== -->
						<!-- == DATA.....: 14 de Janeiro de 2014             == -->
						<!-- == ============================================ == -->
						<!-- == PROJETO..: Sistema OnGR               		 == -->
						<!-- == VERSÃO...: 0.1 Beta							 == -->
						<!-- == ============================================ == -->
						<!-- == ARQUIVO..: almoxarifeScript.css				 == -->
						<!-- == DESCRIÇÃO: Folha de Script com formatação da == -->
						<!-- == da página de almoxarife      				 == -->
						<!-- ================================================== -->
						<!-- ================================================== -->
*/

//Função para desabilitar as div's
function divHidden(){		 
	principal.style.visibility = "hidden";	
	lista.style.visibility = "hidden";
	cadastro.style.visibility = "hidden";
	consulta.style.visibility = "hidden";
}

//Função para abilitar a div.
function divVisible(codDiv){	
	divHidden();
	codDiv.style.visibility = "visible";
}
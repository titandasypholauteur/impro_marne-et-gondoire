var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'    <head>'+
'        <title>ENGAGEMENTS TEMPORELS ET TARIFS</title>'+
'    </head>'+
'    <link rel="stylesheet" href="style.css">'+
'    <main>'+
'        <h1><center>ENGAGEMENTS TEMPORELS ET TARIFS</center></h1>'+
'        <br />'+
'        <p>Comme partout, il convient de respecter le matériel et les personnes.</p>'+
'        <br />'+
'        <p>Le respect passe aussi par l\'assiduité, la ponctualité et un minimum d\'investissement dans les activités. tu vas me dire, soit, ce sont des loisirs. Même si c\'est peut-être toléré dans les lieux où tu pratiques tes loisirs, pense aux personnes les suivant et aux animateurs/animatrices. Lorsque quelqu\'un arrive en retard, cela perturbe l\'atelier voire l\'interrompt, fait perdre du temps. Donc vous perdez du temps pour avancer dans le cours ou vous amuser, faire du bien. SI tu manques trop d\'ateliers tu ne sera pas prêt.e pour un spectacle ou championnat (en impro et en speed-ball).</p>'+
'        <br />'+
'        <h2>Engagement</h2>'+
'        <br />'+
'        <li>Impro</li>'+
'        <br />'+
'        <p>Quoique l\'audition soit offerte, les improvisateurs/improvisatrices s\'engagent pour un semestre (groupe initié et groupe découverte) ou pour l\'année (troupe principale)</p>'+
'        <p>Tout abandon en cas de semestre/année ne sera pas remboursé.</p>'+
'        <p>Une troupe d\'impro étant un groupe, des absences à répétition pénalisent le groupe tout comme des retards aux ateliers, encore plus aux spectacles.</p>'+
'        <p>Lors de mon année aux Grands Méchants Flous, l\'un d\'entre nous devait jouer deux cabarets au printemps. Il n\'est pas venu et impossible de le joindre. Il s\'est ensuite excusé sur les réseaux sociaux. Cela ne serait arrivé que ces deux fois mais imagine si tou.te.s les improvisateurs/improvisatrices faisaient ainsi. Nous serions obligés d\'annuler le spectacle ? De faire partir les spectateurs/spectatrices ? De défaire/démonter les équipements de la salle ?</p>'+
'        <br />'+
'        <li>speed-ball</li>'+
'        <br />'+
'        <p>Pour le speed-ball, il y aura le choix entre:</p>'+
'        <p>_l\'atelier d\'essai offert</p>'+
'        <p>_engagement teimestriel</p>'+
'        <p>_engagement semestriel</p>'+
'        <p>_engagement annuel</p>'+
'        <p>Les saisons commencent en janvier, en avril et en octobre.</p>'+
'        <br />'+
'        <li>mesures générales</li>'+
'        <br />'+
'        <p>Afin de respecter la tranquillité et le bon déroulement de tous les ateliers, les animateurs/animatrices voire le personnel s\'il y en aura tiendront un registre papier ou numérique. </p>'+
'        <p>En cas d\'assiduité insuffisante et/ou de retards systématiques, l\'adhérent.e sera exclu.e pendant plusieurs mois consécutifs puis définitivement si récidive ou si son comportement nuit au matériel et/aux personnes.</p>'+
'        <p>En cas de dommages sur le matériel, l\'adhérent.e devra rembourser l\'équipement avec quelques frais s\'élevant à un jour de selaire de tou.te.s les animateurs/animatrices et/ou employé.e.s.</p>'+
'        <br />'+
'        <li>quota de présence minimum obligatoire</li>'+
'        <p>Selon l\'abonnement chosi de l\'adhérent.e :</p>'+
'        <p>_deux ateliers par mois pour les abonnements mensuels et annuels</p>'+
'        <p>_trois ateliers obligatoires si forfait de dix unités.</p>'+
'        <p>Les forfaits sont valables un an. Les unités non utilisées seront définitivement perdues.</p>'+
'        <br />'+
'        <h3>formules/forfaits</h3>'+
'        <br />'+
'        <p>Les abonnements incluront les différentes activités : impro, speed-ball, body balance, streching, pilates.</p>'+
'        <p>Pour les études, c\'est cinq euros la demi-journée.</p>'+
'        <p>Les ateliers d\'essais et auditions d\'impro sont offerts.</p>'+
'        <br />'+
'        <p>Les formules proposées sont :</p>'+
'        <li>septante euros mensuels</li>'+
'        <li>sept cents euros annuels (avec une offre à cinq cent septante-deux euros si adhésion le quatre janvier)</li>'+
'        <p>Quant aux forules sans engagement, c\'est cinq euro l\'atelier ou trente-cinq euros le forfait de dix unités.</p>'+
'        <br />'+
'        <ul><a href="index.html">Retour page d\'accueil</a>'+
'        <br />'+
'    '+
'    </main>'+
''+
'    <footer>'+
''+
'        <h4><center>Remarques et suggestions</center></h4>'+
'       '+
'       '+
'       <p>Salut!</p>'+
'       <p>Si tu as des questions, des remarques, des suggestions, merci de m\'envoyer un message via ce formulaire.</p>'+
'       '+
'       <form id="inscription" class="formulaire" method="post" action="process_form.php" onsubmit="document.getElementById(\'validator\').disabled=true;">'+
''+
'       '+
'       <form id="inscription" class="formulaire" method="post" action="." onsubmit="document.getElementById(\'validator\').disabled=true;">'+
'       '+
'       <fieldset class="">'+
'          <legend>Informations personnelles</legend>'+
'              <p class="champ">'+
'              <label for="prenom">Prénom</label>'+
'              <input id="prenom" name="prenom" value="" class="" />'+
'            </p>'+
'       '+
'            <p class="champ">'+
'              <label for="nom">Nom</label>'+
'              <input id="nom" name="nom" value="" class="" />'+
'            </p>'+
'       '+
'            <p class="champ">'+
'              <label for="email">courriel</label>'+
'              <input id="email" name="email" value="" class="" />'+
'            </p>'+
'       '+
'            <p class="champ">'+
'              <label for="dtJr">Date de naissance</label>'+
'       '+
'              <select name="dtJr" class="">'+
'                <option value=""></option>'+
'                              <option value="1" >1</option>'+
'                              <option value="2" >2</option>'+
'                              <option value="3" >3</option>'+
'                              <option value="4" >4</option>'+
'                              <option value="5" >5</option>'+
'                              <option value="6" >6</option>'+
'                              <option value="7" >7</option>'+
'                              <option value="8" >8</option>'+
'                              <option value="9" >9</option>'+
'                              <option value="10" >10</option>'+
'                              <option value="11" >11</option>'+
'                              <option value="12" >12</option>'+
'                              <option value="13" >13</option>'+
'                              <option value="14" >14</option>'+
'                              <option value="15" >15</option>'+
'                              <option value="16" >16</option>'+
'                              <option value="17" >17</option>'+
'                              <option value="18" >18</option>'+
'                              <option value="19" >19</option>'+
'                              <option value="20" >20</option>'+
'                              <option value="21" >21</option>'+
'                              <option value="22" >22</option>'+
'                              <option value="23" >23</option>'+
'                              <option value="24" >24</option>'+
'                              <option value="25" >25</option>'+
'                              <option value="26" >26</option>'+
'                              <option value="27" >27</option>'+
'                              <option value="28" >28</option>'+
'                              <option value="29" >29</option>'+
'                              <option value="30" >30</option>'+
'                              <option value="31" >31</option>'+
'                          </select>  /'+
'                        <select name="dtMois" class="">'+
'                <option value=""></option>'+
'                              <option value="1" >Janvier</option>'+
'                              <option value="2" >Février</option>'+
'                              <option value="3" >Mars</option>'+
'                              <option value="4" >Avril</option>'+
'                              <option value="5" >Mai</option>'+
'                              <option value="6" >Juin</option>'+
'                              <option value="7" >Juillet</option>'+
'                              <option value="8" >Août</option>'+
'                              <option value="9" >Septembre</option>'+
'                              <option value="10" >Octobre</option>'+
'                              <option value="11" >Novembre</option>'+
'                              <option value="12" >Décembre</option>'+
'                          </select>  /'+
'       '+
'              <select name="dtAn" class="">'+
'                <option value=""></option>'+
'                              <option value="2016" >2016</option>'+
'                              <option value="2015" >2015</option>'+
'                              <option value="2014" >2014</option>'+
'                              <option value="2013" >2013</option>'+
'                              <option value="2012" >2012</option>'+
'                              <option value="2011" >2011</option>'+
'                              <option value="2010" >2010</option>'+
'                              <option value="2009" >2009</option>'+
'                              <option value="2008" >2008</option>'+
'                              <option value="2007" >2007</option>'+
'                              <option value="2006" >2006</option>'+
'                              <option value="2005" >2005</option>'+
'                              <option value="2004" >2004</option>'+
'                              <option value="2003" >2003</option>'+
'                              <option value="2002" >2002</option>'+
'                              <option value="2001" >2001</option>'+
'                              <option value="2000" >2000</option>'+
'                              <option value="1999" >1999</option>'+
'                              <option value="1998" >1998</option>'+
'                              <option value="1997" >1997</option>'+
'                              <option value="1996" >1996</option>'+
'                              <option value="1995" >1995</option>'+
'                              <option value="1994" >1994</option>'+
'                              <option value="1993" >1993</option>'+
'                              <option value="1992" >1992</option>'+
'                              <option value="1991" >1991</option>'+
'                              <option value="1990" >1990</option>'+
'                              <option value="1989" >1989</option>'+
'                              <option value="1988" >1988</option>'+
'                              <option value="1987" >1987</option>'+
'                              <option value="1986" >1986</option>'+
'                              <option value="1985" >1985</option>'+
'                              <option value="1984" >1984</option>'+
'                              <option value="1983" >1983</option>'+
'                              <option value="1982" >1982</option>'+
'                              <option value="1981" >1981</option>'+
'                              <option value="1980" >1980</option>'+
'                              <option value="1979" >1979</option>'+
'                              <option value="1978" >1978</option>'+
'                              <option value="1977" >1977</option>'+
'                              <option value="1976" >1976</option>'+
'                              <option value="1975" >1975</option>'+
'                              <option value="1974" >1974</option>'+
'                              <option value="1973" >1973</option>'+
'                              <option value="1972" >1972</option>'+
'                              <option value="1971" >1971</option>'+
'                              <option value="1970" >1970</option>'+
'                              <option value="1969" >1969</option>'+
'                              <option value="1968" >1968</option>'+
'                              <option value="1967" >1967</option>'+
'                              <option value="1966" >1966</option>'+
'                              <option value="1965" >1965</option>'+
'                              <option value="1964" >1964</option>'+
'                              <option value="1963" >1963</option>'+
'                              <option value="1962" >1962</option>'+
'                              <option value="1961" >1961</option>'+
'                              <option value="1960" >1960</option>'+
'                              <option value="1959" >1959</option>'+
'                              <option value="1958" >1958</option>'+
'                              <option value="1957" >1957</option>'+
'                              <option value="1956" >1956</option>'+
'                              <option value="1955" >1955</option>'+
'                              <option value="1954" >1954</option>'+
'                              <option value="1953" >1953</option>'+
'                              <option value="1952" >1952</option>'+
'                              <option value="1951" >1951</option>'+
'                              <option value="1950" >1950</option>'+
'                              <option value="1949" >1949</option>'+
'                              <option value="1948" >1948</option>'+
'                              <option value="1947" >1947</option>'+
'                              <option value="1946" >1946</option>'+
'                              <option value="1945" >1945</option>'+
'                              <option value="1944" >1944</option>'+
'                          </select>'+
'       '+
'            </p>'+
'       '+
'            <p class="champ">'+
'              <label for="sexe">Mode.s de communication de prédilection</label>'+
'                <span>'+
'                <select id="sexe" name="sexe" class="">'+
'                <option value="NULL"></option>'+
'                <option value="M" >'+
'                  SMS'+
'                </option>'+
'                <option value="F" >'+
'                  courriel'+
'                '+
'                <!-- <option value="S" >'+
'                  Etre humain 3 -->'+
'                  <!-- ça marche pas d\'erreur en modifiant les possibilités et en rajoutant -->'+
'       '+
'              '+
'                <option value="=F">'+
'                  Instagram'+
'                </option>'+
'                <option value="=F">'+
'                  tik-tok'+
'                </option>'+
'                <option value="=F">'+
'                  X'+
'                </option>'+
'                <option value="=F">'+
'                  Youtube'+
'                </option>'+
'                </select>'+
'                </span>'+
'            </p>'+
'            '+
'       '+
'            <!-- <p class="champ">'+
'              <label for="sexe">Sexe</label>'+
'                <span>'+
'                <select id="sexe" name="sexe" class="">'+
'                <option value="NULL"></option>'+
'                <option value="M" >'+
'                  Homme'+
'                </option>'+
'                <option value="F" >'+
'                  Femme'+
'                </option>'+
'                </select>'+
'                </span>'+
'            </p> -->'+
'       '+
'       '+
'        '+
'                  <p class="champ">'+
'          <label for="Info1">Téléphone</label>'+
'          <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'        </p>'+
'        <p class="champ">'+
'          <label for="Info1">réseau.x social/sociaux</label>'+
'          <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'        </p>'+
'        <p class="champ">'+
'          <label for="Info1">message</label>'+
'          <input id="Info1" name="Info1"	size="32" value="" class="" />'+
'        </p>'+
'          '+
'       '+
'          </fieldset>'+
'       '+
'       '+
'       '+
'       '+
'       <p class="submit">'+
'        <input type="submit" value="envoyer" name="validator" />'+
'       </p>'+
'       </form>'+
'       '+
'       '+
'       '+
'       </footer>'+
'</html>';
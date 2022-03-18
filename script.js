function myFunction() {  
         var click = document.getElementById("dropdown"); 
         if(click.style.display ==="none") {  
            click.style.display ="block";  
        } else {  
          click.style.display ="none";  
        }   
    } 
const cb = document.querySelector('#accept');
        const getquestion = document.querySelector('#getquestion');
const getanswers = document.querySelector("#getanswers");
const answer = document.querySelector("#answer");
        cb.onclick = () => {
  getquestion.onclick = () => {
    const question =  Math.floor(Math.random() * 4)+1;
console.log(question)
    if(question == "1"){
      document.querySelector("#end").innerHTML = "";
      document.querySelector("#topic").innerHTML = "";
      document.querySelector("#short-summary").innerHTML = "";
    document.getElementById("Study").style.display = "none";
      document.querySelector("#question").innerHTML = "";
      document.querySelector("#question").innerHTML = "A few months after this conflict, two belligerents quarreled over the sinking of the Eilat. Gunnar Jarring's peace mission after this war partly failed due to the <b>three nos</b> of the Khartoum Resolution. After losing this war, a leader ceded power to his vice-president Zakaria Mohieddin, but popular support drew him back to office. UN Security Council Resolution 242 dealt with the territorial exchanges in this war, which began with an attack on 25 different (*)) airfields after the Straits of Tiran were closed. In this conflict, the Sinai Peninsula and the Gaza Strip were seized from Gamal Abdel Nassers Egypt. This war was fought six years prior to the Yom Kippur War. For 10 points, name this 1967 victory for Israel over its Arab enemies, concluded in less than a week.";    getanswers.onclick = () => {
        if(answer.value === "Six-Day War"){
       document.querySelector("#question").innerHTML = "";
          document.querySelector("#end").innerHTML = "Correct";
        }else{
          document.querySelector("#question").innerHTML = "";
          answer.value = "";
          document.querySelector("#Study").style.display = "block";
        }
      
      document.querySelector("#Study").onclick = () => {
        document.querySelector("#topic").innerHTML = "Six-Day War"
        document.querySelector("#short-summary").innerHTML = "The Six-Day War also known as the June War, the 1967 Arab–Israeli War or the Third Arab–Israeli War, was an armed conflict fought from 5 to 10 June 1967 between Israel and a coalition of Arab states primarily comprising Jordan, Syria and Egypt (then known as United Arab Republic).";
        }
      }
    }
  
    if(question == "2"){
      document.querySelector("#end").innerHTML = "";
      document.querySelector("#topic").innerHTML = "";
      document.querySelector("#short-summary").innerHTML = "";
    document.getElementById("Study").style.display = "none";
      document.querySelector("#question").innerHTML = "";
      document.querySelector("#question").innerHTML = "This ruler was the last to employ architect Domenico da Cortona, who worked in the Loire valley to build the Chateau of Chambord to this ruler's specifications. This European ruler's navy besieged the city of Nice at the same time as the pasha Hayreddin Barbarossa. An anti-Catholic notice was covertly placed outside this man's bedchamber in the Affair of the Placards.This man met with an English monarch at a lavish meeting organized by Cardinal Wolsey, the Field of the Cloth of Gold. This man was captured at Pavia after his alliance with Suleiman the Magnificent brought the Ottoman Empire into western European politics. For 10 points, name this Valois king of France, a rival of Charles V of Spain who patronized Leonardo da Vinci.";    getanswers.onclick = () => {
        if(answer.value == "Francis I Valois"){
       document.querySelector("#question").innerHTML = "";
          document.querySelector("#end").innerHTML = "Correct";
        }else{
          document.querySelector("#question").innerHTML = "";
          answer.value = "";
          document.querySelector("#Study").style.display = "block";
        }
      
      document.querySelector("#Study").onclick = () => {
        document.querySelector("#topic").innerHTML = "Francis I Valois"
        document.querySelector("#short-summary").innerHTML = "Francois I was King of France from 1515 until his death in 1547. He was the son of Charles, Count of Angoulême, and Louise of Savoy. He succeeded his first cousin once removed and father-in-law Louis XII, who died without a son.";
        }
      }
    }
  if(question == "3"){
    document.querySelector("#end").innerHTML = "";
      document.querySelector("#topic").innerHTML = "";
      document.querySelector("#short-summary").innerHTML = "";
    document.getElementById("Study").style.display = "none";
      document.querySelector("#question").innerHTML = "";
      document.querySelector("#question").innerHTML = "The key figure in this event said its effect on the world was <b>like a match lighting a bonfire.</b> Harry F.Knight and Harold Bixby put up much of the funding needed to accomplish this action, which its achieverchronicled just weeks later in a popular memoir entitled <b>WE</b>. A 25,000-dollar reward from the owner ofthe Lafayette and Brevoort hotels known as the (*)) Orteig Prize was awarded for this feat, which relied on anengine known as the Wright Whirlwind. The man who accomplished this feat later became the spokesman for theisolationist America First Committee, and lost his baby a half-decade later to a kidnapper. For 10 points, name thisfeat which ended at Le Bourget field, a 1927 solo aeronautic feat done in The Spirit of St. Louis";    getanswers.onclick = () => {
        if(answer.value == "Charles Lindbergh's transatlantic flight"){
       document.querySelector("#question").innerHTML = "";
          document.querySelector("#end").innerHTML = "Correct";
        }else{
          document.querySelector("#question").innerHTML = "";
          answer.value = "";
          document.querySelector("#Study").style.display = "block";
        }
      
      document.querySelector("#Study").onclick = () => {
        document.querySelector("#topic").innerHTML = "Charles Lindbergh's transatlantic flight"
        document.querySelector("#short-summary").innerHTML = "Lindbergh took off in the Spirit from Roosevelt Airfield, Garden City, New York, and landed 33 hours, 30 minutes later at Aéroport Le Bourget in Paris, France, a distance of approximately 3,600 miles (5,800 km).";
        }
      }
    }
        if(question == "4"){
          document.querySelector("#end").innerHTML = "";
      document.querySelector("#topic").innerHTML = "";
      document.querySelector("#short-summary").innerHTML = "";
    document.getElementById("Study").style.display = "none";
      document.querySelector("#question").innerHTML = "";
      document.querySelector("#question").innerHTML = "A governor of this state who advocated a policy of “pay-as-you-go-liberalism” was the early head of an “Eastern Establishment” in the Republican Party. An influential faction of moderate Republicans was named after another governor of this state, who lost the 1964 Republican primary to (*) Barry Goldwater. The National Guard responded with excessive force to a 1971 prison riot at Attica in this state. Gerald Ford’s vice president was former governor of this state Nelson Rockefeller, who adopted this state’s “stop-and-frisk” policy. For 10 points, name this state which has recently been led by Mario and Andrew Cuomo.";    getanswers.onclick = () => {
        if(answer.value == "New York State"){
       document.querySelector("#question").innerHTML = "";
          document.querySelector("#end").innerHTML = "Correct";
         answer.value = "";
        }else{
          document.querySelector("#question").innerHTML = "";
          answer.value = "";
          document.querySelector("#Study").style.display = "block";
        }
      
      document.querySelector("#Study").onclick = () => {
        document.querySelector("#topic").innerHTML = "New York State"
        document.querySelector("#short-summary").innerHTML = "The history of New York begins around 10,000 B.C. when the first people arrived. By 1100 A.D. two main cultures had become dominant as the Iroquoian and Algonquian developed. European discovery of New York was led by the Italian Giovanni da Verrazzano in 1524 followed by the first land claim in 1609 by the Dutch. As part of New Netherland, the colony was important in the fur trade and eventually became an agricultural resource thanks to the patroon system. In 1626 the Dutch thought they had bought the island of Manhattan from Native Americans.[1] In 1664, England renamed the colony New York, after the Duke of York and Albany, brother of King Charles II. New York City gained prominence in the 18th century as a major trading port in the Thirteen Colonies.";
        }
      }
    }
  }
  }
 
const cd = document.querySelector('#false');
        cd.onclick = () => {
  getquestion.onclick = () => {
    const question =  Math.floor(Math.random() * 2)+1;
console.log(question)
    if(question == "1"){
      document.querySelector("#end").innerHTML = "";
      document.querySelector("#topic").innerHTML = "";
      document.querySelector("#short-summary").innerHTML = "";
    document.getElementById("Study").style.display = "none";
      document.querySelector("#question").innerHTML = "";
      document.querySelector("#question").innerHTML = "This poet described floating in the ocean, seeing a butterfly overhead, andreminiscing about his dead wife in the poem <b>Amphibian.</b> The narrator of anotherpoem by this man claims <b>man's reach should exceed his grasp, or what's a heavenfor?</b> That narrator dreams of working on one of the <b> four great walls in the NewJerusalem </b> alongside Rafael and Leonardo while painting his wife Lucrezia. Otherartworks in this man's poetry include a bronze statue of (*)) Neptune taming a seahorse cast by Claus of Innsbruck and placed near a painting of a woman who <b>liked whate'er she looked on.</b> The narrator of a dramatic monologue by this poet killed his wife because she had <b>a heart too soon made glad.</b> For 10 points, name this poet of <b>Andrea del Sarto</b> and <b>My Last Duchess.<b/>";    getanswers.onclick = () => {
        if(answer.value == "Robert Browning"){
       document.querySelector("#question").innerHTML = "";
          document.querySelector("#end").innerHTML = "Correct";
        }else{
          document.querySelector("#question").innerHTML = "";
          answer.value = "";
          document.querySelector("#Study").style.display = "block";
        }
      
      document.querySelector("#Study").onclick = () => {
        document.querySelector("#topic").innerHTML = "Robert Browning"
        document.querySelector("#short-summary").innerHTML = "Robert Browning was an English poet and playwright whose dramatic monologues put him high among the Victorian poets. He was noted for irony, characterization, dark humour, social commentary, historical settings and challenging vocabulary and syntax. His early long poems Pauline (1833) and Paracelsus (1835) were acclaimed – but his rating fell back for a time – his 1840 poem Sordello was seen as wilfully obscure – and took over a decade to recover, by which time he had moved from Shelleyan forms to a more personal style. In 1846 he married fellow poet Elizabeth Barrett and moved to Italy. By her death in 1861 he had published the collection Men and Women (1855). His Dramatis Personae (1864) and book-length epic poem The Ring and the Book (1868–1869) made him a leading poet. He remained prolific, but his acclaim today[vague] rests mainly on his middle period[citation needed]. By his death in 1889 he was seen as a sage and philosopher-poet who had fed into Victorian social and political discourse. Societies for studying his work survived in Britain and the US into the 20th century.";
        }
      }
    }
    if(question == "2"){
      document.querySelector("#end").innerHTML = "";
      document.querySelector("#topic").innerHTML = "";
      document.querySelector("#short-summary").innerHTML = "";
    document.getElementById("Study").style.display = "none";
      document.querySelector("#question").innerHTML = "";
      document.querySelector("#question").innerHTML = "A poem by this author calls a woman a <b>thin brown mouse... living all alone/In this cold house</b> and contrasts her with a woman who <b>stayed home and scraped life with a fine tooth comb.</b> This author of <b>Sadie and Maud</b> set a poem in a <b>rented back room</b> inhabited by two women <b>who have lived their day</b> and are <b>Mostly Good</b>, for whom <b>dinner is a casual affair</b>. In addition to <b>The (*)) Bean Eaters</b>, her works include a collection of poems about a girl growing up in Bronzeville called Annie Allen. Her most famous poem is about a group of pool players at </b>The Golden Shovel</b> who <b>lurk late,</b> <b>strike straight,</b> <b>jazz June,</b> and <b>die soon</b>. For 10 points, name this first African-American Pulitzer Prize winner, the poet of <b>We Real Cool.</b>";    getanswers.onclick = () => {
        if(answer.value == "Gwendolyn Brooks", "Gwendolyn Elizabeth Brooks"){
       document.querySelector("#question").innerHTML = "";
          document.querySelector("#end").innerHTML = "Correct";
        }else{
          document.querySelector("#question").innerHTML = "";
          answer.value = "";
          document.querySelector("#Study").style.display = "block";
        }
      
      document.querySelector("#Study").onclick = () => {
        document.querySelector("#topic").innerHTML = "Gwendolyn Brooks"
        document.querySelector("#short-summary").innerHTML = "Gwendolyn Brooks was an American poet, author, and teacher. Her work often dealt with the personal celebrations and struggles of ordinary people in her community. She won the Pulitzer Prize for Poetry on May 1, 1950, for Annie Allen,[1] making her the first African American to receive a Pulitzer Prize.[2][3]";
        }
      }
    }
  }
        }

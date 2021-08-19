//Arrays for the various things I want to pull from, taken from some mythic ruby file I found looking around online ¯\_(ツ)_/¯ Thanks to PatrickLerner
let npc_adjectives = ["superfluous","addicted","conformist","nefarious","sensible","untrained","romantic","unreasonable","skilled","neglectful","lively","forthright","idealistic","unsupportive","rational","coarse","foolish","cunning","delightful","miserly","inept","banal","logical","subtle","reputable","wicked","lazy","pessimistic","solemn","habitual","meek","helpful","unconcerned","generous","docile","cheery","pragmatic","serene","thoughtful","hopeless","pleasant","insensitive","titled","inexperienced","prying","oblivious","refined","indispensable","scholarly","conservative","uncouth","wilful","indifferent","fickle","elderly","sinful","naive","privileged","glum","likeable","lethargic","defiant","obnoxious","insightful","tactless","fanatic","plebeian","childish","pious","uneducated","inconsiderate","cultured","revolting","curious","touchy","needy","dignified","pushy","kind","corrupt","jovial","shrewd","liberal","compliant","destitute","conniving","careful","alluring","defective","optimistic","affluent","despondent","mindless","passionate","devoted","established","unseemly","dependable","righteous","confident"];
let npc_nouns = ["gypsy","witch","merchant","expert","commoner","judge","ranger","occultist","reverend","thug","drifter","journeyman","statesman","astrologer","duelist","jack_of_all_trades","aristocrat","preacher","artisan","rogue","missionary","outcast","mercenary","caretaker","hermit","orator","chieftain","pioneer","burglar","vicar","officer","explorer","warden","outlaw","adept","bum","sorcerer","labourer","master","ascendant","villager","magus","conscript","worker","actor","herald","highwayman","fortune-hunter","governor","scrapper","monk","homemaker","recluse","steward","polymath","magician","traveler","vagrant","apprentice","politician","mediator","crook","civilian","activist","hero","champion","cleric","slave","gunman","clairvoyant","patriarch","shopkeeper","crone","adventurer","soldier","entertainer","craftsman","scientist","ascetic","superior","performer","magister","serf","brute","inquisitor","lord","villain","professor","servant","charmer","globetrotter","sniper","courtier","priest","tradesman","hitman","wizard","beggar","tradesman","warrior"];
let npc_motivation_verbs = ["advise","obtain","attempt","spoil","oppress","interact","create","abduct","promote","conceive","blight","progress","distress","possess","record","embrace","contact","pursue","associate","prepare","shepherd","abuse","indulge","chronicle","fulfil","drive","review","aid","follow","advance","guard","conquer","hinder","plunder","letruct","encourage","agonise","comprehend","administer","relate","take","discover","deter","acquire","damage","publicise","burden","advocate","implement","understand","collaborate","strive","complete","compel","join","assist","defile","produce","institute","account","work","accompany","offend","guide","learn","persecute","communicate","process","report","develop","steal","suggest","weaken","achieve","secure","inform","patronise","depress","determine","seek","manage","suppress","proclaim","operate","access","refine","compose","undermine","explain","discourage","attend","detect","execute","maintain","realise","convey","rob","establish","overthrow","support"];
let npc_motivation_nouns = ["wealth","hardship","affluence","resources","prosperity","poverty","opulence","deprivation","success","distress","contraband","music","literature","technology","alcohol","medicines","beauty","strength","intelligence","force","the wealthy","the populous","enemies","the public","religion","the poor","family","the elite","academia","the forsaken","the law","the government","the downtrodden","friends","criminals","allies","secret societies","the world","military","the church","dreams","discretion","love","freedom","pain","faith","slavery","enlightenment","racism","sensuality","dissonance","peace","discrimination","disbelief","pleasure","hate","happiness","servitude","harmony","justice","gluttony","lust","envy","greed","laziness","wrath","pride","purity","moderation","vigilance","zeal","composure","charity","modesty","atrocities","cowardice","narcissism","compassion","valour","patience","advice","propaganda","science","knowledge","communications","lies","myths","riddles","stories","legends","industry","new religions","progress","animals","ghosts","magic","nature","old religions","expertise","spirits"];
let randomevent_meaning_action = ["Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate","Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonise","Move","Waste","Truce","Release","Befriend","Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal","Delay","Stop","Lie","Return","Imitate","Struggle","Inform","Bestow","Postpone","Expose","Haggle","Imprison","Release","Celebrate","Develop","Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse","Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide","Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust","Excitement","Activity","Assist","Care","Negligence","Passion","Work hard","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform","Overthrow","Oppress","Change"];
let randomevent_meaning_subject = ["Goals","Dreams","Environment","Outside","Inside","Reality","Allies","Enemies","Evil","Good","Emotions","Opposition","War","Peace","The innocent","Love","The spiritual","The intellectual","New ideas","Joy","Messages","Energy","Balance","Tension","Friendship","The physical","A project","Pleasures","Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal matters","Bureaucracy","Business","A path","News","Exterior factors","Advice","A plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel","Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness","Misfortune","Death","Disruption","Power","A burden","Intrigues","Fears","Ambush","Rumour","Wounds","Extravagance","A representative","Adversities","Opulence","Liberty","Military","The mundane","Trials","Masses","Vehicle","Art","Victory","Dispute","Riches","Status quo","Technology","Hope","Magic","Illusions","Portals","Danger","Weapons","Animals","Weather","Elements","Nature","The public","Leadership","Fame","Anger","Information"];
function roll(){//functions, get the ball rolling
  let r = new Roll('1d100');
  r.evaluate();
  return r.result;
}
function roll1d10(){
  let r = new Roll('1d10');
  r.evaluate();
  return r.result;
}
function play(){//sounds play even when the message is private
  AudioHelper.play({src: "sounds/coin_toss.mp3", volume: 0.8, autoplay: true, loop: false}, true);
}
function mythic(html,private){//the main function that drives the result
  let scene = '';
  let result = roll();
  let isEvent = false;
  let odds = document.getElementById("odds").value;
  if(!odds){odds = 0};
  let chaoslevel = document.getElementById("rank").value;
  if(!chaoslevel){chaoslevel = 5};
  if (result % 11 == 0) {
    if (result / 11 <= chaoslevel){
      isEvent = true;
    }
  }
  let answer = ask(html, result);
  let eventType = document.getElementById("event").value;
  if(isEvent){
    let focus = getRandomFocus(eventType);
    scene += `<h2>An Event Occurs</h2> Focus: ${focus} Meaning: ` + getRandomMeaning();
    if (focus === "Introduce a new NPC"){
      scene += "<br>NPC: " + npc_adjectives[roll()-1] + ', ' + npc_nouns[roll()-1] + ', ' + npc_motivation_verbs[roll()-1] + ', ' +  npc_motivation_nouns[roll()-1];
    }
  }
  let privacy = {flavor : `${answer} <br />r/o: ${chaoslevel}/${odds}`,
    whisper: game.users.entities.filter(u => u.isGM).map(u => u._id),
    speaker: {actor: "Qff8uFiRH77UZmZ0"},
    content: scene};
  let message = {flavor : `${answer} <br />r/o: ${chaoslevel}/${odds}`,
    speaker: {actor: "Qff8uFiRH77UZmZ0"},
    content: scene};
  if(private){//hacky solution to privatize message, could be better
    ChatMessage.create(privacy);
  }else{
    ChatMessage.create(message);
  }
}
function generateEvent(html, private){//this one can be run independently to just get an event
  let result = roll1d10();
  let eventType = document.getElementById("event").value;
  let odds = document.getElementById("odds").value;
  if(!odds){odds = 0};
  let chaoslevel = document.getElementById("rank").value;
  if(!chaoslevel){chaoslevel = 5}else if(chaoslevel>10){chaoslevel = 10};
  let alter = false;
  let parity;
  let alteration;
  if(!alteration){alteration = '';}
  let scene = '';
  if(chaoslevel >= result){
    alter = true;
    if(result % 2  == 0){
      alteration = '[Interrupt]';
    }else{
      alteration = '[Alteration]';
    }
  }
  let meaning = getRandomMeaning();
  let focus = getRandomFocus(eventType);
  if (focus === "Introduce a new NPC"){
    scene += "<br>NPC: " + npc_adjectives[roll()-1] + ', ' + npc_nouns[roll()-1] + ', ' + npc_motivation_verbs[roll()-1] + ', ' +  npc_motivation_nouns[roll()-1];
  }
  let content = `<h2>Scene Made</h2>${focus}<br>${meaning} ${alteration} ${scene}`;
  let privacy = {flavor : `[${result}] <br />r/o: ${chaoslevel}/${odds}`,
    whisper: game.users.entities.filter(u => u.isGM).map(u => u._id),
    speaker: {actor: "Qff8uFiRH77UZmZ0"},
    content: content};
  let message = {flavor : `[${result}] <br />r/o: ${chaoslevel}/${odds}`,
    speaker: {actor: "Qff8uFiRH77UZmZ0"},
    content: content};
  if(private){
    ChatMessage.create(privacy);
  }else{
    ChatMessage.create(message);
  }
}
function getRandomMeaning(){
  let meaning_roll_action = roll()-1;
  let meaning_roll_subject = roll()-1;
  let meaning_action = randomevent_meaning_action[meaning_roll_action];
  let meaning_subject = randomevent_meaning_subject[meaning_roll_subject];

  return "'" + meaning_action + "', '" + meaning_subject + "'";
}
function getRandomFocus(eventType){
  let result = roll();
  if(!eventType){eventType = 'Standard'};
  var randomevent_focus={Standard:{1:"Remote event",8:"NPC Action",29:"Introduce a new NPC",36:"Move toward a thread",46:"Move away from a thread",53:"Close a thread",56:"PC negative",68:"PC positive",76:"Ambiguous event",84:"NPC negative",93:"NPC positive"},Horror:{1:"Horror - PC",11:"Horror - NPC",24:"Remote event",31:"NPC Action",50:"Introduce a new NPC",53:"Move toward a thread",56:"Move away from a thread",63:"PC negative",73:"PC positive",76:"Ambiguous event",83:"NPC negative",98:"NPC positive"},Adventure:{1:"Action!",17:"Remote event",25:"NPC Action",45:"Introduce a new NPC",53:"Move toward a thread",57:"Move away from a thread",65:"PC negative",77:"PC positive",81:"Ambiguous event",85:"NPC negative",97:"NPC positive"},Mystery:{1:"Remote event",9:"NPC Action",21:"Introduce a new NPC",33:"Move toward a thread",53:"Move away from a thread",65:"PC negative",73:"PC positive",81:"Ambiguous event",89:"NPC negative",97:"NPC positive"},Social:{1:"Drop a bomb!",13:"Remote event",25:"NPC Action",37:"Introduce a new NPC",45:"Move toward a thread",57:"Move away from a thread",61:"Close a thread",65:"PC negative",73:"PC positive",81:"Ambiguous event",93:"NPC negative",97:"NPC positive"},Personal:{1:"Remote event",8:"NPC Action",25:"PC NPC acion",29:"Introduce a new NPC",36:"Move toward a thread",43:"Move toward a PC thread",46:"Move away from a thread",51:"Move away from a PC thread",53:"Close a thread",55:"Close a PC thread",56:"PC negative",68:"PC positive",76:"Ambiguous event",84:"NPC negative",91:"PC NPC negative",93:"NPC positive",100:"PC NPC positive"},Epic:{1:"Thread escalates",13:"Remote event",17:"NPC Action",31:"Introduce a new NPC",43:"Move toward a thread",47:"Move away from a thread",59:"PC negative",73:"PC positive",81:"Ambiguous event",85:"NPC negative",93:"NPC positive"}};
  let keys = Object.keys(randomevent_focus[eventType]);
  let focus = '';
  keys.forEach((key, index) => {{//clever way to determine the range of the dice roll by overwriting (hacky but I like it)
    if(key <= result){
      focus = randomevent_focus[eventType][key];
    }
  });
  return focus;
}
function getDiffValue(html){
  let rank = document.getElementById("rank").value;
  let odds = document.getElementById("odds").value;
  if(!rank){rank = 5};
  if(!odds){odds = 0};
  let diff = +rank + +odds;
  if (diff < 1) {
    diff = 1
  } else if (diff > 9) {
    diff = 9
  };
  return diff;
}
function ask(html, result) {//this is the meat of the macro
  let fatetable = [
    [[10,50,91],[15,75,96],[16,85,97],[18,90,99],[19,95,100],[19,95,100],[20,100,0],[21,105,0],[23,115,0],[25,125,0],[26,145,0]],
    [[5,25,86],[10,50,91],[13,65,94],[15,75,96],[16,85,97],[18,90,99],[19,95,100],[19,95,100],[20,100,0],[22,110,0],[26,130,0]],
    [[3,15,84],[7,35,88],[10,50,91],[11,55,92],[15,75,96],[16,85,97],[18,90,99],[19,95,100],[19,95,100],[19,95,100],[20,100,0]],
    [[2,10,83],[5,25,86],[9,45,90],[10,50,91],[13,65,94],[16,80,97],[16,85,97],[18,90,99],[19,95,100],[19,95,100],[20,100,0]],
    [[1,5,82],[3,15,84],[5,25,86],[7,35,88],[10,50,91],[13,65,94],[15,75,96],[16,85,97],[18,90,99],[18,90,99],[19,95,100]],
    [[1,5,82],[2,10,83],[3,15,84],[4,20,85],[7,35,88],[10,50,91],[11,55,92],[15,75,96],[16,80,97],[16,85,97],[19,95,100]],
    [[0,0,81],[1,5,82],[2,10,83],[3,15,84],[5,25,86],[9,45,90],[10,50,91],[13,65,94],[15,75,96],[16,80,97],[18,90,99]],
    [[0,0,81],[1,5,82],[1,5,82],[2,10,83],[3,15,84],[5,25,86],[7,35,88],[10,50,91],[11,55,92],[13,65,94],[16,85,97]],
    [[0,0,77],[0,0,81],[1,5,82],[1,5,82],[2,10,83],[4,20,85],[5,25,86],[9,45,90],[10,50,91],[11,55,92],[16,80,97]]];
  let diff = getDiffValue(html);
  let rank = document.getElementById("rank").value;
  if(rank > 10){rank = 10}else if(!rank){rank = 5};
  let t = fatetable[diff-1][rank-1];
  if (result <= t[0]) {
    return "Very Yes [" + result + "]";
  } else if (result <= t[1]) {
    return "Yes [" + result + "]";
  } else if (result < t[2]) {
    return "No [" + result + "]";
  } else {
    return "Very No [" + result + "]";
  };
}
let myContent = `<form>
                <script>
                  function addToEvent(txt){
                    document.getElementById("event").value = capitalize(txt);
                  }
                  function capitalize(txt) {
                    return txt[0].toUpperCase() + txt.slice(1).toLowerCase();
                  }
                  function addToRank(txt){
                    document.getElementById("rank").value = txt;
                  }
                  function addToOdds(txt){
                    document.getElementById("odds").value = txt;
                  }
                </script>
                <div class="form-group">
                <h2>Mythic Game Master</h2>
                </div>
                <div class="form-group">
                  <button type="button" onclick="addToEvent('standard')">Standard</button><button type="button" onclick="addToEvent('horror')">Horror</button><button type="button" onclick="addToEvent('adventure')">Adventure</button><button type="button" onclick="addToEvent('mystery')">Mystery</button><button type="button" onclick="addToEvent('social')">Social</button><button type="button" onclick="addToEvent('personal')">Personal</button><button type="button" onclick="addToEvent('epic')">Epic</button>
                </div>
                <div class="form-group">
                    <label>
                        Set an Event Type:
                    </label>
                </div>
                <div class="form-group">
                    <input id="event" type="text" value="" placeholder="Standard is default" readonly="readonly"/>
                </div>
                <div class="form-group">
                    <label>
                        Set Odds
                    </label>
                </div>
                <div class="form-group">
                  <button style="height:6em;" type="button" onclick="addToOdds('-4')">Impossible</button><button style="height:6em;" type="button" onclick="addToOdds('-3')">No Way</button><button style="height:6em;" type="button" onclick="addToOdds('-2')">Very Unlikely</button><button style="height:6em;" type="button" onclick="addToOdds('-1')">Unlikely</button><button style="height:6em;" type="button" onclick="addToOdds('0')">Even Odds</button>
                </div>
                <div class="form-group">
                  <button style="height:6em;" type="button" onclick="addToOdds('1')">Somewhat Likely</button><button style="height:6em;" type="button" onclick="addToOdds('2')">Likely</button><button style="height:6em;" type="button" onclick="addToOdds('3')">Very Likely</button><button style="height:6em;" type="button" onclick="addToOdds('4')">Nearly Certain</button><button style="height:6em;" type="button" onclick="addToOdds('5')">Sure Thing</button>
                </div>
                <div class="form-group">
                    <label>
                        Set Rank/Chaos
                    </label>
                </div>
                <div class="form-group">
                  <button style="height:6em;" type="button" onclick="addToRank('1')">Minuscule</button><button style="height:6em;" type="button" onclick="addToRank('2')">Weak</button><button style="height:6em;" type="button" onclick="addToRank('3')">Low</button><button style="height:6em;" type="button" onclick="addToRank('4')">Below Average</button><button style="height:6em;" type="button" onclick="addToRank('5')">Average</button><button style="height:6em;" type="button" onclick="addToRank('6')">Above Average</button><button style="height:6em;" type="button" onclick="addToRank('7')">High</button><button style="height:6em;" type="button" onclick="addToRank('8')">Exceptional</button><button style="height:6em;" type="button" onclick="addToRank('9')">Incredible</button><button style="height:6em;" type="button" onclick="addToRank('10')">Awesome</button><button style="height:6em;" type="button" onclick="addToRank('11')">Superhuman</button>
                </div>
                <div class="form-group">
                    <label>
                        Press Rank Button
                    </label>
                    <label>
                        Press Odds Button
                    </label>
                </div>
                <div class="form-group">
                    <input id="rank" type="text" value="" placeholder="Average is 5" readonly="readonly"/>
                    <input id="odds" type="text" value="" placeholder="Even Odds is 0" readonly="readonly"/>
                </div>
                <div class="form-group">
                  <hr>
                </div>
            </form>`;
new Dialog({//unnecessary? buttons for private and public
    title: "Mythic Game Master",
    content: myContent,
    buttons: {
        private: {
          label: "Private Answer",
          callback: (html) => {
            mythic(html,1)
          }
        },
        public: {
          label: "Public Answer",
          callback: (html) => {
            mythic(html,0)
          }
        },
        evalpriv:{
          label: "Private Scene",
          callback: (html) => {
            generateEvent(html,1)
          }
        },
        evalpub:{
          label: "Public Scene",
          callback: (html) => {
            generateEvent(html,0)
          }
        }
    },
    default: "private"
}).render(true);
//play();

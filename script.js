!function(){window.isDev=!1;var e=[{unlocked:!0,used:!0,cost:0},{unlocked:!1,used:!1,cost:50},{unlocked:!1,used:!1,cost:200},{unlocked:!1,used:!1,cost:1e3},{unlocked:!1,used:!1,cost:1e3},{unlocked:!1,used:!1,cost:2e3},{unlocked:!1,used:!1,cost:2e3},{unlocked:!1,used:!1,cost:3e3}],t="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",l=`
    <div style="font-size: 40px; width: 100%; text-align: center;">
    Game History
    </div>
    <hr>
    <div style="margin-left: 10px;">
    Beta V42 (Nov 18, 2023 - Nov 19, 2023):<br>
    - New Module: God Complex Equation<br>
    - Reworked Battle Display visuals<br>
    - Microchips: Undying Fighter (Tan Circle), Wonderworker (all shapes with abilities)<br>
    - You can only have one legendary chip per shape<br>
    - New Game Modes: "One vs. One" and "FFA"<br>
    - Bug Fixes<br><br>

    Beta V41 (Nov 16, 2023 - Nov 17, 2023):<br>
    - Code Improvements<br>
    - Bots have better hangers now<br><br>

    Beta V40 (Nov 13, 2023 - Nov 14, 2023):<br>
    - New Shapes: Cyan Circle and Ultimate Tan Pentagon<br>
    - New Weapons: Ultimate Punisher, Trickster, Tamer, Gangantua, and Pantagruel<br>
    - White Hexagon Max Health Increasement: 1 MILLION<br>
    - Increased Silver for Module Upgrades<br>
    - Bug Fixes<br><br>

    Beta V39 (Nov 9, 2023 - Nov 12, 2023):<br>
    - Decreased Tan Pentagon Ability Cooldown<br>
    - Nerfed Evora and Veyron (a little bit)<br>
    - Code Base Updated<br>
    - Bot IQ Improvement<br>
    - Logger Fixed<br>
    - White Hexagon Ability Damage Multiplier Buff<br>
    - Bug Fixes<br>
    - Reworked Visuals<br>
    - New Map: Carrier<br>
    - Mini Map<br><br>

    Beta V38 (Nov 6, 2023 - Nov 7, 2023):<br>
    - Special Editions!<br>
    - Continuous reloading weapons reload now display how long it takes to reload the weapon from 0 ammo<br> 
    - Visual Changes<br>
    - Health Bars replaces health text<br>
    - Incinerator Blast Accumulation Rate: 24 -> 12<br>
    - Dark Gray Circle:<br>
    ${t}Base Health (Lvl 1): 56.0K -> 77.0K<br>
    ${t}Base Defense Points: 25 -> 50<br>
    ${t}Damage Reflection: 150% -> 80%<br>
    - Pink Circle:<br>
    ${t}Base Health (Lvl 1): 118.0K -> 138.0K<br>
    ${t}Self Heal Cooldown: 18 -> 10 seconds<br>
    ${t}DOT Effect Duration: 10 -> 20 seconds<br>
    - Dragon Flight (Brown Circle):<br>
    ${t}Defense Points In Flight: 900 -> 9000<br>
    ${t}Cooldown Time: 26 -> 16 seconds<br>
    - New Weapon(s): Lance and Glaive<br>
    - New Module: Nuclear Amplifier<br>
    - Bug Fixes<br><br>

    Beta V37 (Nov 2, 2023):<br>
    - Code Optimizations<br>
    - New Shape: Cyan Pentagon!<br>
    - New Weapon(s): Bane and Toxin<br>
    - 2 More Microchips!<br>
    - Bug Fixes<br><br>

    Beta V36 (Oct 30, 2023):<br>
    - Microchips are back!<br>
    - New Weapons: Incinerator and Scald<br>
    - Removed grids<br>
    - Bots now cannot obtain level 14+ equipment<br>
    - Balance Changes<br>
    - Various Tweaks and Changes<br>
    - MK3 Weapon enhancement now increases by 20%.<br>
    - Bug Fixes<br><br>

    Beta V35 (Oct 29, 2023):<br>
    - New Shape: Blue Heptagon<br>
    - Balance Changes<br>
    - Bug Fixes<br><br>

    Beta V34 (Oct 28, 2023):<br>
    - Removed Microchips (compensation will be given soon)<br>
    - Reworked UI<br>
    - New Shape(s):<br>
    ${t}- White Hexagon: Perfect counter to tier 4 and 5 shapes<br>
    - New Weapon(s):<br>
    ${t}- Flux: Fast firing energy machine gun that's perfect to counter tier 4 and 5 shapes<br>
    - Balance Changes<br><br>

    Beta V33 (Oct 23, 2023):<br>
    - Devastator and Scatter:<br>
    ${t}Ammo: 16 -> 10<br>
    ${t}Reload: 1 -> .6 sec<br>
    - Evora and Veyron:<br>
    ${t}Damage: -23.5%<br>
    ${t}Ammo: 175 -> 150<br>
    ${t}Reload: 6 -> 7 sec<br>
    - Tan Pentagon Ability Cooldown: 18 -> 12 sec<br>
    - Minor Changes<br><br>

    Beta V32 (Oct 22, 2023):<br>
    - Visual/UI Changes<br>
    - Gold Circle Reflector: 40% -> 10%<br>
    - Updated Operation<br><br>

    Beta V31 (Oct 21, 2023):<br>
    - New Shape: Gold Circle<br>
    - Red Hexagon Ability Charges: 3 -> 4<br>
    - Tan Circle and Orange Circle Ability Cooldown: 12 -> 10 sec<br>
    - Fixed Bots being gods with Paladin ability<br>
    - Anti Control Effect Reduction (@max level): 50% -> 75%<br>
    - Phase Shift counters Paladin<br>
    - New Game Mode<br>
    - Progress reseting actually works now<br>
    - Cinder Dmg: -10%<br>
    - Evora and Veyron Dmg: -24%<br>
    - Evora and Veyron Ammo: 125 -> 175<br>
    - Fixed UI Displays<br>
    - Game play fixes<br>
    - On Extemination Game Mode, the game will only render 250 enemies.<br><br>

    Beta V30 (Oct 19, 2023 - Oct 20, 2023):<br>
    - New Module(s): Repair Amp and Anti Control<br>
    - Bug Fixes<br>
    - Visual Changes<br>
    - Orange Pentagon Bonus Dmg with Cinder: 100% -> 25%<br><br>

    Beta V29 (Oct 18, 2023):<br>
    - Fixed bullets not touching enemies and dealing damage<br>
    - Tan Circle DP Effect Bonus:<br>
    ${t}DP per stack: 1 -> 2<br>
    ${t}Max Effect Limit: 500 -> 250<br>
    ${t}<strong>Tan Circle remains mostly unchanged</strong><br>
    - Damage to DOT Effect Converters are now frame based<br>
    - Reworked Extermination<br><br>

    Beta V28 (Oct 17, 2023):<br>
    - Scroll Zoom<br>
    - New Weapons: Reaper!<br>
    - New Shape: Red Heptagon<br>
    - Bug Fixes<br>
    - Offers are now tasks<br>
    - Evora and Veyron Range: 1.8K -> 1.2K<br>
    - Evora and Veyron Reload: 8 -> 6 sec<br>
    - Orange Circle DOT Duration: 30 -> 15 sec<br>
    - Orange Circle Health: +10%<br><br>

    Beta V27 (Oct 15, 2023 - Oct 16, 2023):<br>
    - Orange Pentagon Ability Damage: +324%<br>
    - You get more league reward.<br>
    - New Shape: Black Pentagon<br>
    - New Weapons: Devastator, Scatter, Evora, and Veyron<br>
    - Microchip overhaul<br>
    - Black Pentagon Bug Fixes<br><br>

    Beta V26 (Oct 14, 2023):<br>
    - New Microchips<br>
    - Minor Performance Changes<br>
    - Weapons and Shapes can go to MK3<br>
    - Game Mechanic Changes<br>
    - Freeze Rockets: will not give enemies freezing effect when they are already FROZEN.<br>
    - Bug Fixes<br><br>

    Beta V25 (Oct 13, 2023):<br>
    - Orange Circle Health: +60%<br>
    - New Shape: Tan Circle!<br>
    - Bug Fixes<br><br>

    Beta V24 (Oct 11, 2023):<br>
    - Atomizer and Nucleon: -15% Damage<br>
    - Brown Circle: Ability Duration: 12 -> 8 sec<br>
    - Blaze:<br>
    ${t}Damage: -20%<br>
    ${t}Ammo: 150 -> 125<br>
    ${t}Reload Time: 2 -> 3 sec<br>
    - Ember:<br>
    ${t}Damage: -20%<br>
    ${t}Ammo: 300 -> 250<br>
    ${t}Reload Time: 2 -> 3 sec<br>
    - Blaze and Ember: Projectile moves faster<br>
    - Decreased Slumber and Delay's slowdown effect power (3% -> 2.5%)<br>
    - New Shape: Gray Hexagon!<br>
    - New Freezing Weapons!<br>
    - Orange Circle: DOT EFFECT DURATION DECREASE (1 min -> 30 sec)<br>
    - New Shape: Red Hexagon!<br><br>

    Beta V23 (Oct 8, 2023):<br>
    - New Shapes: Purple Hexagon and Yellow Hexagon<br>
    - White Pentagon Stealth Time: 6 -> 8 seconds<br>
    - New Weapons: Delay and Slumber!<br>
    - New Microchips<br>
    - Fixed Shape Changing UI<br><br>

    Beta V22 (Oct 7, 2023):<br>
    - Microchips are sorted by tier<br>
    - Orange Circle Reflector: 50% -> 20%<br>
    - White Circle Effect Duration: 6 -> 3 sec<br><br>

    Beta V21 (Oct 6, 2023):<br>
    - Added Microchips!<br>
    - Workshop production limit: Infinity -> 30<br><br>

    Beta V20 (Oct 1, 2023):<br>
    - New Shape: Tan Pentagon!<br>
    - New Weapons: Blaze and Ember<br>
    - 2 New Arena Bosses<br>
    - New Modules: Fortifier and Damage Controller<br>
    - Lootbox Changes<br><br>

    Beta V19 (Sep 30, 2023):<br>
    - New Weapon(s): Storm and Cinder!<br>
   ${t}Storm: Light Version of Thunder!<br>
   ${t}Cinder: Heat Waves!<br>
   - Balance Unit Description Fixed<br>
   - Teal Circle Tier: 4 -> 3<br>
   - MK2 for robots and weapons<br>
   - Dark Gray Circle Reflector: 250% -> 150%<br>
   - Orange Circle Reflector: 150% -> 50%<br>
   - Extermination Enemy Limit (for arena): Infinity -> 100<br>
   - ULTIMATE LOOTBOX!<br>
   - hold space to speed up the lootbox animation<br>
   - New Module: Last Stand!<br>
   - Bug Fixes<br><br>

    Beta V18 (Sep 29, 2023):<br>
    - New Shape: Orange Circle!<br>
    - New Lootbox: Diamond Lootbox!<br>
    - Damage Modules also increase ability damage!<br>
    - Reduced the cost of Armor Kit and Nuclear Reactor: 1.0M -> 500.0K Silver<br>
    - Red Circle Desc Fix<br>
    - New Module: Balance Unit<br>
    - New Weapon: Thunder<br><br>

    Beta V17 (Sep 26, 2023):<br>
    - New Shapes: Blue Pentagon and Brown Circle!<br>
    ${t}Blue Pentagon: heavy shielded shape.<br>
    ${t}Brown Circle: take over the skys!<br>
    - New Weapon: STING<br>
    ${t}Light version of viper!<br>
    - Pink Circle Damage Spread: 5 -> 10 sec<br>
    - More Ads!<br>
    - Lag Fixes<br>
    - Bug Fixes<br><br>

    Beta V16 (Sep 21, 2023 - Sep 24, 2023):<br>
    - Assist mode at 300 league for 5v5 match<br>
    - Viper Dmg Nerf: -32%<br>
    - Silver Rewards increased!<br>
    - League System!<br>
    - New Game Mode: 5v5 Match<br>
    - New Shape: Pink Circle!<br>
    ${t}Turns all damage into DOT, allowing it not to get instantly killed!<br>
    - Economy changes.<br>
    - Tiers will now affect the text color.<br>
    - Red Circle Built-In Arc Reactor: 35% -> 25%<br>
    - Import and Exporting! Back up your progress!<br>
    - Nucleon Damage: -20%<br>
    - Offers: Free rewards!<br>
    - New Settings Feature: import and exporting your progress, or restarting everything!<br>
    - 5v5 Match bots are now league based!<br><br>

    Beta V15 (Sep 20, 2023):<br>
    - decreased gold reward on arena gamemode!<br>
    - increases silver reward on arena!<br><br>

    Beta V14 (Sep 16, 2023):<br>
    - Major Update!<br>
    - 1v1 Match gamemode is currently not done, but its still playable, so try it out!<br><br>

    Beta V13 (Sep 15, 2023):<br>
    - More Bosses in Arena and some changes to level 3 boss!<br>
    - New Shape: Red Circle!<br><br>

    Beta V12 (Sep 14, 2023):<br>
    - Hawk and Eagle Buff:<br>
    ${t}Reload Time: 8 -> 5 seconds<br>
    ${t}Ammo Doubled<br>
    ${t}Eagle Damage Increase: 15%<br>
    - Dark Gray Circle Buff:<br>
    ${t}Reflector: 75% -> 250%<br>
    - Damage Counter Bug Fixes<br>
    - Silver Battle Rewards Increased<br>
    - Destroyer:<br>
    ${t}Damage Decreased by 15%<br>
    ${t}Damage Range: 1600 -> 1400<br>
    ${t}Damage Fire Rate: 30 -> 50<br>
    ${t}Reload Time: 5 -> 5.5 seconds<br>
    - Economy Changes<br>
    - New Boss in Arena!<br>
    - You can use gold for upgrading shapes and weapons if you do not have enough silver.<br><br>

    Beta V11 (Sep 13, 2023):<br>
    - New Game Mode: Arena!<br>
    - Eagle Tier: 3 -> 2<br>
    - New Weapons: Viper, Atomizer, and Nucleon<br>
    ${t}Viper: Emit DOT Damage (damage over time) to your enemies!<br>
    ${t}Atomizer and Nucleon: Unlimited ammo energy machine guns!<br><br>

    Beta V10 (Sep 12, 2023):<br>
    - Teal Circle: Ability Cooldown: 24 -> 18 seconds<br>
    - Eagle: Heavy Version of Hawk (Nerfed Version)!<br>
    - Hawk Nerf:<br>
    ${t}Reload Time: 7.5 -> 8 seconds<br>
    ${t}Ammo: 20 -> 15<br>
    ${t}Max Targets: 4 -> 3<br>
    - New Shapes: White Circle and Dark Gray Circle!<br>
    ${t}White Circle: Too much enemies? Need a break? Look no further! White Circle can easily give you a break when you need it most, with one press of its ability.<br>
    ${t}Dark Gray Circle: Damages enemies that damage the shape.<br>
    - You can now sell weapons for silver!<br>
    - All Operations without keys prizes will auto update. 10.0K OXP is given for compensation<br>
    - Operation Reward Tweaks and Changes<br>
    - Shocker Buff:<br>
    ${t}Shocker Reload: 8 seconds -> 5 seconds<br>
    - If an shape has more weapons than the max hardpoints. All weapons would clear from the shape.<br>
    - Bug Fixes<br><br>

    Beta V9 (Sep 11, 2023):<br>
    - New Shapes: Teal Circle and Blue Circle<br>
    ${t}Dive in to battle with Full Action ability!<br>
    - New Weapon: Hawk<br>
    ${t}Tired of swarms attacking you? Here's the solution!<br>
    - Copper Lootbox Reward Changes<br>
    - Bug Fixes<br><br>

    Beta V8 (Sep 10, 2023):<br>
    - Increased OXP Earnings by 4 times<br>
    - Changed Reward Amount for Gold and Silver (if you have an operation on going, you'll have to finish it to get the update.<br><br>

    Beta V7 (Sep 9, 2023):<br>
    - New Shape: Purple Circle<br>
    ${t}Built-in resistance allows it to withstand heavy enemy fire.<br>
    - New Extermination Enemy: Smasher Circles<br>
    - New Modules: Self Fix Unit, Thermonuclear Reactor, Nuclear Reactor, and Arc Reactor<br>
    ${t}Self Fix Unit: Repairs a part of the shape each second<br>
    ${t}Thermonuclear Reactor & Nuclear Reactor: Increases weapon damage output<br>
    ${t}Arc Reactor: Increases weapon damage with the cost of some health<br>
    - New Feature Operation!<br>
    ${t}Earn OXP to level up on operation!<br><br>

    Beta V6 (Sep 6, 2023):<br>
    - Visual Changes<br><br>
    Beta V5 (Aug 31, 2023):<br>
    - New Feature: Modules!<br>
    ${t}Customize your shapes even more with special modules that increase your shapes health, damage output and so much more!<br>
    ${t}Keep in mind that modules have to be bought separately.<br><br>

    Beta V4 (Aug 30, 2023):<br>
    - New Extermination Enemy: Sniper!<br>
    ${t}Sniper moves away from the player and shoots an long ranged projectile every 2 seconds.<br>
    - Shocker: Shoots until reload (3 -> 6)<br>
    - Destroyer: Range Increase (1200 -> 1600)<br>
    New Shape: Green Circle!<br>
    ${t}First shape with an ability!<br>
    - Gray Damage: Unhealable health. This damage is done by all weapons (40% of damage is gray damage).<br>
    - Press E to use shape ability.<br><br>

    Beta V3 (Aug 29, 2023):<br>
    - New Weapon: Landslide, Shocker, and Destroyer<br>
    ${t}Landslide: Rocket launcher that deals aoe damage. Great for enemies in groups.<br>
    ${t}Shocker: Far ranged sniper.<br>
    ${t}Destroyer: Multi Barreled machine gun that fires 2 projectiles per clip.<br>
    - Shapes will have their recommended weapons listed in their description.<br>
    - Loot box: get "free" rewards with your hard earned keys.<br>
    - New Shape: Yellow Circle.<br>
    ${t}Holding 3 heavy hardpoints, this shape is an beast for an enemy.<br><br>

    Beta V2 (Aug 28, 2032):<br>
    - New Shapes: Black Circle and Light Gray Circle<br>
    - Punisher: Damage Nerf (-15%)<br>
    - New Game Mode: Extermination!<br>
    ${t}Fight hordes of enemies. Longer you survive, more rewards you get!<br>
    - New Features: Quick Reload, Quick Select, and Quick Upgrade<br>
    ${t}Hold R to reload 2 times faster, but makes you move 2 times slower.<br>
    ${t}Press Enter to quick upgrade equipment like shapes and weapons without needing to press the upgrade button.<br>
    ${t}Press 1-9 keys to quick select an slot and esc to deselect.<br>
    - Bug Fixes<br><br>

    Beta V1 (Undated):<br>
    - Setting up the game<br>
    </div><br>
    `;function i(e){return localStorage.getItem(e)}function a(e,t){localStorage.setItem(e,t)}document.getElementById("sideDisplay").innerHTML="";var o=document.getElementById("gameCanvas"),n=o.getContext("2d"),s=document.getElementById("miniMap"),r=s.getContext("2d"),$=0,d=0,p={sliver:2e5,gold:250,keys:1e3,shapes:[],weapons:[],modules:[],gameMode:-1,ULIMATEXP:0,workshopPoints:0,league:0,tokens:{mk1:0,mk2:0,mk3:0}},g={x:1980,y:1080},h=[{shapes:[0,1e4,2e4,4e4,8e4,1e5,2e5,4e5,8e5,1e6,2e6,5e6],weapons:[0,7500,15e3,3e4,6e4,9e4,15e4,3e5,7e5,1e6,15e5,3e6],modules:[0,5e5,5e5,1e6,5e6,5e6]},{shapes:[0,2e4,4e4,8e4,2e5,4e5,8e5,1e6,2e6,4e6,5e6,8e6],weapons:[0,1e4,3e4,6e4,18e4,3e5,6e5,9e5,15e5,3e6,4e6,6e6],modules:[0,1e7,1e7,1e7,1e7,1e7]},{modules:[0,4e7,4e7,4e7,4e7,4e7],shapes:[0,12e4,24e4,48e4,1e6,15e5,3e6,5e6,1e7,2e7,4e7,8e7],weapons:[0,1e5,2e5,4e5,8e5,1e6,2e6,4e6,8e6,16e6,32e6,64e6]},{modules:[0,8e7,8e7,8e7,8e7,8e7],shapes:[0,6e5,1e6,2e6,5e6,9e6,14e6,16e6,25e6,5e7,9e7,12e7],weapons:[0,4e5,8e5,12e5,4e6,8e6,12e6,14e6,2e7,4e7,8e7,1e8]},{modules:[0,1e9,1e9,2e9,2e9,2e9],shapes:[0,5625e3,28125e3,5625e4,1125e5,225e6,45e7,675e6,675e6,84375e4,10125e5,140625e4],weapons:[0,3375e3,16875e3,3375e4,675e5,135e6,27e6,405e6,405e6,50625e4,6075e5,84375e4]}],c=0;class m{constructor(e,t,l){this.isItem=!0,this.x=0,this.y=0,this.velx=0,this.revive=e.revive,this.vely=0,this.baseDP=0,this.grayDamage=0,this.borderColor=e.borderColor,this.specialOf=e.specialOf,this.moduleHardpoints=e.moduleHardpoints,this.tier=e.tier,this.desc=e.desc,this.health=this.maxhealth=e.healthData?e.healthData.base:e.health,this.speed=e.speed,this.color=e.color,this.fieldOfViewMulti=e.fieldOfViewMulti,this.effects=[],this.name=e.name,this.slot=t,this.scale=e.scale,l||(this.sid=c),this.hardpoints=e.hardpoints,this.level=1,!l&&c++,this.sellPrice=0,this.reflector=e.reflector,e.builtInDefensePoints?(this.normalDefensePoints=e.builtInDefensePoints,this.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE=e.builtInDefensePoints):(this.normalDefensePoints=0,this.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE=0),this.healingMulti=e.healingMulti,this.builtInDefensePoints=e.builtInDefensePoints,this.baseDamageIncrease=e.baseDamageIncrease,this.baseShielding=null,this.turnDmgIntoDOT=e.turnDmgIntoDOT,this.enhanceCost=(this.tier+1)*2e3,(e.shieldData||e.baseShielding)&&(e.baseShielding&&(e.shieldData=e.baseShielding),this.baseShielding={health:e.shieldData.base||e.shieldData.health,type:e.shieldData.type,regen:e.shieldData.regen}),this.dotResistance=e.dotResistance,e.cost&&(this.sellPrice+=.75*e.cost.sliver,e.cost.gold&&e.cost.gold>0&&(this.sellPrice+=1250*e.cost.gold),e.cost.workshopPoints&&e.cost.workshopPoints>0&&(this.sellPrice+=1e4*e.cost.workshopPoints)),this.healingAura=e.healingAuraData?e.healingAuraData.base:e.healingAura,this.ability=null,e.ability&&(this.ability={name:e.ability.name,desc:e.ability.desc,reload:e.ability.reload,iconSource:e.ability.iconSource},"Reinforce Hull"==e.ability.name?(this.ability.showDuration=!0,e.ability.abilityHealthMultiData?this.ability.abilityHealthMulti=e.ability.abilityHealthMultiData.base:this.ability.abilityHealthMulti=e.ability.abilityHealthMulti,e.ability.lastingTimeData?this.ability.lastingTime=e.ability.lastingTimeData.base:this.ability.lastingTime=e.ability.lastingTime,e.ability.abilityDefensePointsData?this.ability.abilityDefensePoints=e.ability.abilityDefensePointsData.base:this.ability.abilityDefensePoints=e.ability.abilityDefensePoints):"Paladin"==e.ability.name||"Stealth Dash"==e.ability.name||"Phase Shift"==e.ability.name||"Dash"==e.ability.name||"Fortify"==e.ability.name?(this.ability.charges=e.ability.charges,this.ability.maxcharge=e.ability.charges,this.ability.lastingTime=e.ability.lastingTime,("Fortify"==e.ability.name||"Paladin"==e.ability.name)&&(this.ability.shieldHp=e.ability.shieldHpData?e.ability.shieldHpData.base:e.ability.shieldHp)):"Divine Judgement"==e.ability.name||"Grand Fortitude"==e.ability.name||"Overload"==e.ability.name||"Cold Pulse"==e.ability.name||"Dragon Flight"==e.ability.name||"Retribution"==e.ability.name||"Stampede"==e.ability.name?(this.ability.dmg=e.ability.damageData?e.ability.damageData.base:e.ability.dmg,("Divine Judgement"==e.ability.name||"Grand Fortitude"==e.ability.name||"Overload"==e.ability.name||"Stampede"==e.ability.name||"Dragon Flight"==e.ability.name||"Retribution"==e.ability.name)&&(this.ability.lastingTime=e.ability.lastingTime,("Grand Fortitude"==e.ability.name||"Dragon Flight"==e.ability.name)&&(this.ability.dotDamage=e.ability.dotData?e.ability.dotData.base:e.ability.dotDamage))):this.ability.lastingTime=e.ability.lastingTime)}}var f=[{tier:0,name:"Gray Circle",speed:.0018,speedLevel:[0,0,1e-4,1e-4,0,1e-4,1e-4,0,1e-4,2e-4,3e-4,4e-4],scale:55,fieldOfViewMulti:1.5,desc:`
        Training shape for mastering the basics of combat.<br><br>
        Recommended Equipment: x2 Punisher
        `,healthData:{base:38e3,level:[0,3900,4200,4400,4600,4800,5e3,5200,5600,6e3,8e3,8e3]},hardpoints:{light:2,heavy:0},color:"#808080",moduleHardpoints:1,cost:{sliver:75e3,gold:0}},{tier:0,name:"Black Circle",speed:.0012,speedLevel:[0,0,1e-4,1e-4,0,0,0,0,1e-4,1e-4,2e-4,2e-4],scale:75,fieldOfViewMulti:1.5,desc:`
        Boasting 4 light weapon slots, 
        this shape is extremely versatile - a universal soldier. 
        Fit for combat at any range.<br><br>
        Recommended Equipment: x4 Punisher
        `,healthData:{base:55e3,level:[0,6e3,6e3,6100,6100,7e3,7100,7500,8e3,8e3,9e3,1e4]},hardpoints:{light:4,heavy:0},color:"#000",moduleHardpoints:1,cost:{sliver:57e4,gold:0}},{tier:0,name:"Light Gray Circle",speed:.0028,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,4e-4],scale:45,fieldOfViewMulti:1.35,desc:`
        One of the fastest shapes. 
        Holding 3 light weapons this shape can claim victory against the toughest enemies.<br><br>
        Recommended Equipment: x3 Landslide
        `,healthData:{base:31e3,level:[0,2e3,2e3,2100,3100,3e3,4100,4500,4e3,5e3,6e3,7e3]},hardpoints:{light:3,heavy:0},color:"#bababa",moduleHardpoints:1,cost:{sliver:0,gold:250}},{tier:1,name:"Yellow Circle",speed:.0012,speedLevel:[0,0,0,1e-4,0,2e-4,0,1e-4,1e-4,0,1e-4,3e-4],scale:85,fieldOfViewMulti:2.3,desc:`
        Holding 3 heavy weapons, this shape has unparalleled fire power.
        No other shape of the same tier can survive an onslaught of this shape.<br><br>
        Recommended Equipment: x3 Destroyer
        `,healthData:{base:59e3,level:[0,5e3,5e3,5400,8e3,9e3,12e3,14e3,16e3,19e3,2e4,21e3]},hardpoints:{light:0,heavy:3},color:"#ffff00",moduleHardpoints:2,cost:{sliver:0,gold:1e3}},{tier:1,name:"Green Circle",speed:.0021,speedLevel:[0,1e-4,1e-4,0,1e-4,1e-4,0,1e-4,2e-4,2e-4,2e-4,2e-4],scale:55,fieldOfViewMulti:1.2,desc:`
        Moderately armored shape with the ability to heal itself when damaged.<br><br>
        Recommended Equipment: x1 Destroyer + x1 Punisher
        `,healthData:{base:38e3,level:[0,3700,4100,4500,5800,5900,6e3,6500,6600,8e3,8100,8500]},ability:{name:"Self Heal",desc:`
            <strong>Self Heal</strong> allows the robot to heal 25% of its health in 5 seconds. 
            After it heals 25%, it begins ability cooldown of 12 sec.
            `,iconSource:"./images/self_heal.png",lastingTime:5e3,reload:12e3},hardpoints:{light:1,heavy:1},color:"#00ff00",moduleHardpoints:2,cost:{sliver:0,gold:1500}},{tier:2,name:"Purple Circle",speed:.0014,speedLevel:[0,0,0,0,1e-4,1e-4,0,1e-4,0,1e-4,1e-4,2e-4],scale:55,fieldOfViewMulti:1.4,desc:`
        This shape has an built-in defense system that decreases all incoming damage.
        Perfect warrior of any kind.<br><br>
        Recommended Equipment: x1 Avalanche + x2 Landslide
        `,builtInDefensePoints:50,healthData:{base:96e3,level:[0,3e3,3e3,3400,4e3,4400,5e3,6e3,6400,6800,7e3,7e3]},hardpoints:{light:2,heavy:1},color:"#800080",moduleHardpoints:3,cost:{sliver:0,gold:3500}},{tier:1,name:"Blue Circle",speed:.0018,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4,2e-4,2e-4],scale:45,fieldOfViewMulti:1.25,desc:`
        Blue Circle has the ability to increase its defense.
        This ability allows it to go into short fights without taking a lot of dmg.<br><br>
        Recommended Equipment: x4 Hawk
        `,healthData:{base:33e3,level:[0,2550,2805,3060,3400,3655,3655,4250,4250,4675,4845,5100]},ability:{name:"Full Action",desc:`
            <strong>Full Action</strong> gains 60 DP (37.5% resistance) for 5 seconds, after that it cooldown for 18 seconds.
            `,iconSource:"./images/full_action.png",lastingTime:5e3,reload:18e3},hardpoints:{light:4,heavy:0},color:"#0000ff",moduleHardpoints:2,cost:{sliver:3e6,gold:0}},{tier:2,name:"Teal Circle",speed:.001,speedLevel:[0,1e-4,0,1e-4,0,1e-4,1e-4,0,1e-4,1e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.45,desc:`
        Improved version of blue circle.
        Teal Circle can do almost everything blue circle can do but better.<br><br>
        Recommended Equipment: x1 Punisher + x2 Destroyer
        `,healthData:{base:86e3,level:[0,9e3,9e3,9e3,1e4,13e3,16e3,18e3,19e3,2e4,22e3,25e3]},ability:{name:"Full Action",desc:`
            <strong>Full Action</strong> gains 200 DP (66.7% resistance) for 12 seconds, after that it cooldown for 18 seconds.
            `,iconSource:"./images/full_action.png",lastingTime:12e3,reload:18e3},hardpoints:{light:1,heavy:2},color:"#008080",moduleHardpoints:4,cost:{sliver:0,gold:7500}},{tier:2,name:"White Circle",speed:.0018,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4],scale:55,fieldOfViewMulti:1.25,desc:`
        White Circle has the ability to freeze enemies in place.<br><br>
        Recommended Equipment: x2 Eagle
        `,healthData:{base:55e3,level:[0,5e3,5e3,5e3,5e3,6e3,6e3,6e3,6e3,7e3,7e3,8500]},ability:{name:"Cold Pulse",desc:`
            <strong>Cold Pulse</strong> emits an pulse of cold energy, this pulse will freeze and damage any enemies in 1200 PX.
            When frozen enemies won't be able to move nor shoot.
            Effect lasts for 6 seconds.
            For every enemy you freeze, heals 5.0K HP per enemy.<br><br>
            Ability Cooldown Time: 16 seconds
            `,damageData:{base:500,level:[0,25,25,25,25,25,50,50,50,50,75,75]},iconSource:"./images/cold_pulse.png",reload:16e3},hardpoints:{light:0,heavy:2},color:"#fff",moduleHardpoints:3,cost:{sliver:1e6,gold:3750}},{tier:3,name:"Dark Gray Circle",speed:.0016,speedLevel:[0,0,0,0,1e-4,1e-4,0,1e-4,0,2e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.3,desc:`
        This shape has an built-in defense system with an twist.
        80% of damage taken will be redirected to the attacker.<br><br>
        Recommended Equipment: x3 Hawk
        `,reflector:.8,builtInDefensePoints:50,healthData:{base:77e3,level:[0,5e3,5e3,7e3,7e3,7e3,8e3,8e3,8e3,1e4,1e4,15e3]},hardpoints:{light:3,heavy:0},color:"#4e4e4e",moduleHardpoints:4,cost:{sliver:0,gold:7500}},{tier:3,name:"Red Circle",speed:.0014,speedLevel:[0,0,0,0,0,0,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4],scale:75,fieldOfViewMulti:2,desc:`
        Holding 4 heavy weapons-unparalleled fire power.
        Shape comes with built-in arc reactor, increasing its damage by 25%.<br><br>
        Recommended Equipment: x4 Viper
        `,baseDamageIncrease:.25,healthData:{base:78e3,level:[0,9e3,9e3,9e3,9e3,1e4,1e4,1e4,1e4,11e3,11e3,15e3]},hardpoints:{light:0,heavy:4},color:"#f00",moduleHardpoints:4,cost:{sliver:0,gold:7500}},{tier:1,name:"Red Pentagon",speed:.0014,speedLevel:[0,0,0,0,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4],scale:55,fieldOfViewMulti:1.3,desc:`
        First shape with an energy shield.
        Energy shields protects the shape from non energy based projectiles, "direct" hits like the AOE effect from extermination enemies don't count and will be ignored.
        Energy Shield regens 5%, every 5 seconds.<br><br>
        Recommended Equipment: x1 Punisher + x1 Destroyer
        `,shieldData:{type:"energy",base:1e4,level:[0,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3],regen:.05},healthData:{base:55e3,level:[0,3e3,3e3,3e3,4e3,4e3,5e3,5e3,5e3,5e3,6e3,6e3]},hardpoints:{light:1,heavy:1},color:"#f00",moduleHardpoints:2,cost:{sliver:0,gold:1500}},{tier:3,name:"Pink Circle",speed:.0021,speedLevel:[0,1e-4,1e-4,0,1e-4,1e-4,0,1e-4,2e-4,2e-4,2e-4,3e-4],scale:65,fieldOfViewMulti:1.6,desc:`
        Heavyly armored shape that can turn all damage into DOT damage.
        Alllowing the robot not to take a lot of damage instantly.<br><br>
        Recommended Equipment: x4 Atomizer
        `,turnDmgIntoDOT:!0,healthData:{base:138e3,level:[0,9e3,9e3,9e3,11e3,11e3,11e3,14e3,14e3,14e3,16e3,18e3]},ability:{name:"Self Heal",desc:`
            <strong>Self Heal</strong> allows the robot to heal itself for 12 sec. 
            After it heals, it begins ability cooldown of 10 sec.
            `,iconSource:"./images/self_heal.png",lastingTime:12e3,reload:1e4},hardpoints:{light:4,heavy:0},color:"#ffc0cb",moduleHardpoints:4,cost:{sliver:5e6,gold:7500}},{tier:2,name:"Blue Pentagon",speed:.0016,speedLevel:[0,0,0,0,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.3,desc:`
        Blue Pentagon is a shield dependent shape.
        Low base health but really high shield hp.
        Moves decently fast.<br><br>
        Recommended Equipment: x2 Viper
        `,shieldData:{type:"energy",base:7e4,level:[0,6e3,6e3,8e3,8e3,1e4,12e3,15e3,17e3,22e3,44e3,44e3],regen:.1},healthData:{base:16e3,level:[0,3e3,3e3,3e3,4e3,4e3,4e3,4e3,5e3,5e3,5e3,5500]},ability:{name:"Shield Regeneration",desc:`
            <strong>Shield Regeneration</strong> allows the shape to regen its shields 10 times quicker for 6 seconds. 
            After 6 seconds, it begins ability cooldown of 20 sec.
            `,iconSource:"./images/shield_regen.png",lastingTime:6e3,reload:2e4},hardpoints:{light:0,heavy:2},color:"#00f",moduleHardpoints:3,cost:{sliver:5e5,gold:5e3}},{tier:3,name:"Brown Circle",speed:.0016,speedLevel:[0,0,0,0,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.45,desc:`
        Brown Circle is equipped with flight tech.<br><br>
        Recommended Equipment: x2 Viper + x2 Sting
        `,healthData:{base:74e3,level:[0,2e3,2e3,4e3,5e3,5e3,5e3,7e3,7e3,9e3,9e3,12e3]},ability:{name:"Dragon Flight",desc:`
            <strong>Dragon Flight</strong> the shape flies up.
            When it reaches max height, the shape can shoot and move through walls, also an built-in weapon is actived that deals damage.
            While flying the robot gets an defense system.
            After 12 seconds, the ability cools down for 16 seconds.
            `,damageData:{base:460,level:[0,45,55,65,75,75,85,90,95,100,105,110]},dotData:{base:20,level:[0,5,5,5,5,5,5,10,10,10,10,20]},lastingTime:8e3,iconSource:"./images/dragon_flight.png",reload:16e3},hardpoints:{light:2,heavy:2},color:"#964b00",moduleHardpoints:4,cost:{sliver:1e7,gold:7500}},{tier:4,name:"Orange Circle",speed:.0012,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4],scale:75,fieldOfViewMulti:1.6,desc:`
        Orange Circle has an built-in defense system, with an reflector built-in it.
        The shape also has an ability to heal itself and to turn all damage into DOT.
        Shape also takes less GRAY DAMAGE.
        <br><br>
        Recommended Equipment: x1 Storm + x2 Thunder
        `,healthData:{base:306240,level:[0,38720,38720,38720,42240,42240,42240,45760,45760,45760,49280,52800]},hardpoints:{light:1,heavy:2},ability:{name:"Ultimate Defense",desc:`
            <strong>Ultimate Defense</strong> turns all damage into DOT for 12 seconds.
            While ability is active, the robot heals.
            After 12 seconds, it begins ability cooldown of 12 sec.
            `,iconSource:"./images/shield_regen.png",lastingTime:12e3,reload:1e4},reflector:.2,builtInDefensePoints:150,color:"#ffa500",moduleHardpoints:4,cost:{sliver:9e8,gold:1e5,workshopPoints:2e3}},{tier:3,name:"White Pentagon",speed:.0014,speedLevel:[0,0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.25,desc:`
        White Pentagon is a legendary brawler.
        With the ability to remove itself from enemy radars, it can deliver damage without getting targeted.<br><br>
        Recommended Equipment: x2 Storm + x1 Thunder
        `,shieldData:{type:"yellow",base:37e3,level:[0,2e3,2e3,2e3,3e3,3e3,4e3,4e3,4e3,5e3,5e3,6e3],regen:.05},healthData:{base:76e3,level:[0,4e3,4e3,4e3,6e3,6e3,6e3,8e3,8e3,1e4,12e3,15e3]},ability:{name:"Stealth",desc:`
            <strong>Stealth</strong> removes the robot from all enemy radars.
            While ability is active, moves 2 times faster.
            After 8 seconds of stealth, cools down for 16 seconds.
            `,iconSource:"./images/stealth.png",lastingTime:8e3,reload:16e3},hardpoints:{light:2,heavy:1},color:"#fff",moduleHardpoints:4,cost:{sliver:2e6,gold:7500}},{tier:3,name:"Tan Pentagon",shapeType:"pentagon",speed:.0024,speedLevel:[0,0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.35,desc:`
        Tan Pentagon is a dangerous shape that can turn enemies fire power aganist them.
        <br><br>
        Recommended Equipment: x4 Atomizer
        `,healthData:{base:68e3,level:[0,2e3,2e3,3e3,3e3,4e3,4e3,4e3,5e3,5e3,6e3,8e3]},ability:{name:"Retribution",desc:`
            <strong>Retribution</strong> deploys a resilient purple shield
            that can tirelessly absorb an unlimited amount of damage,
            turning the aggression of foes into an opportunity for counterattack.
            As enemies assail the shield, it progressively amplifies the power of
            the shape's built-in weapons,
            reaching a staggering maximum increase of 2000%.<br><br>
            This formidable ability remains in effect for 12 seconds,
            after which it goes into an 12-second cooldown phase.
            `,iconSource:"./images/retribution.png",damageData:{base:467,level:[0,67,67,77,77,77,99,99,133,133,133,167]},lastingTime:12e3,reload:1e4},hardpoints:{light:4,heavy:0},color:"#d2b48c",moduleHardpoints:4,cost:{sliver:2e6,gold:7500}},{tier:3,name:"Purple Hexagon",speed:.0018,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4],scale:65,fieldOfViewMulti:1.35,desc:`
        Purple Hexagon is a stealthy fighter.
        <br><br>
        Recommended Equipment: x2 Storm + x1 Thunder
        `,healthData:{base:85e3,level:[0,5e3,5e3,6e3,6e3,6e3,7e3,8e3,9e3,1e4,12e3,15e3]},ability:{name:"Stealth Dash",desc:`
            <strong>Stealth Dash</strong> leaps the shape into a fixed direction.
            While leaping the shape gets, stealth. The Stealth ends 2 seconds after the dash.
            4 Ability Charges, 5 second charge cooldown, .75 second usage interval.
            `,iconSource:"./images/stealth_dash.png",charges:4,lastingTime:750,reload:5e3},hardpoints:{light:2,heavy:1},color:"#800080",moduleHardpoints:4,cost:{sliver:1e6,gold:5e3,workshopPoints:2e3}},{tier:3,name:"Yellow Hexagon",speed:.0012,speedLevel:[0,0,1e-4,0,1e-4,1e-4,0,1e-4,0,0,1e-4,2e-4],scale:75,fieldOfViewMulti:1.35,desc:`
        Yellow Hexagon is a super fighter, with the ability to not take any damage.
        <br><br>
        Recommended Equipment: x4 Storm
        `,healthData:{base:96e3,level:[0,1e4,1e4,1e4,1e4,12e3,14e3,14e3,16e3,16e3,18e3,25e3]},ability:{name:"Phase Shift",desc:`
            <strong>Phase Shift</strong> empowers the shape with a two-second shield of invulnerability,
            rendering it impervious to all forms of damage.
            Additionally, while this ability is active,
            any negative effects currently affecting the shape
            will be instantly nullified.<br><br>
            Remarkably, <strong>Phase Shift</strong> is the sole ability available for use during the
            chilling grip of a cold pulse freeze,
            making it a critical tool for survival.<br><br>
            The shape possesses three Ability Charges,
            with an eight-second cooldown for each charge.
            `,iconSource:"./images/phase_shift.png",charges:3,lastingTime:2e3,reload:8e3},hardpoints:{light:4,heavy:0},color:"#ffff00",moduleHardpoints:4,cost:{sliver:5e6,gold:7500,workshopPoints:500}},{tier:2,name:"Gray Hexagon",speed:.0018,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4,2e-4,4e-4],scale:55,fieldOfViewMulti:1.1,desc:`
        Gray Hexagon is a fast moving attacker.
        <br><br>
        Recommended Equipment: x2 Delay
        `,healthData:{base:66e3,level:[0,3e3,3e3,3e3,3e3,3600,4200,4200,4800,4800,5400,7500]},ability:{name:"Dash",desc:`
            <strong>Dash</strong> leaps the shape into a fixed direction.<br>
            5 Ability Charges, 2 second charge cooldown
            `,iconSource:"./images/dash.png",charges:5,lastingTime:300,reload:2e3},hardpoints:{light:0,heavy:2},color:"#808080",moduleHardpoints:3,cost:{sliver:5e5,gold:5e3}},{tier:3,name:"Red Hexagon",speed:.0016,speedLevel:[0,0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4],scale:60,fieldOfViewMulti:1.3,desc:`
        Red Hexagon is a shield stacker.
        <br><br>
        Recommended Equipment: x2 Rime + x1 Glacier
        `,healthData:{base:44e3,level:[0,3e3,3e3,3e3,3e3,4e3,4e3,4e3,5e3,5e3,6e3,8e3]},ability:{name:"Fortify",desc:`
            <strong>Fortify</strong> for each ability, activates a energy shield.
            Energy shields obtained cannot regenerate health, so once destroyed it bye-bye.
            When the shape reaches MK2+, the blue shield becomes yellow.
            ABILITY IS ALSO AFFECTED BY THE FORIFIER MODULE.
            3 charges, 3 second interval, 12 second charge cooldown
            `,iconSource:"./images/modules/fortifier.png",shieldHpData:{base:3e4,level:[0,4e3,4e3,1e4,12e3,12e3,12e3,12e3,14e3,18e3,2e4,24e3]},charges:4,lastingTime:2500,reload:12e3},hardpoints:{light:2,heavy:1},color:"#f00",moduleHardpoints:4,cost:{sliver:0,gold:7500,workshopPoints:1e3}},{tier:4,name:"Tan Circle",speed:.0012,speedLevel:[0,0,0,1e-4,1e-4,1e-4,1e-4,0,1e-4,1e-4,2e-4,2e-4],scale:70,fieldOfViewMulti:1.4,desc:`
        A great shape to bully your enemies.
        Tan Circle rams into enemies, converts damage into DOT.
        Tan Circle also has resistance aganist DOT damage.
        <br><br>
        Recommended Equipment: x3 Storm + x1 Thunder
        `,healthData:{base:16e4,level:[0,12e3,12e3,13e3,15e3,16e3,18e3,2e4,22e3,25e3,25e3,5e4]},dotResistance:.25,ability:{name:"Stampede",desc:`
            <strong>Stampede</strong> unleashes the shape's turbocharged capabilities,
            transforming incoming damage into debilitating damage-over-time effects (DoT).
            However, controlling the shape becomes more challenging
            during the activation of this ability.<br><br>
            As <strong>Stampede</strong> accumulates DoT stacks,
            the robot temporarily fortifies its structural integrity,
            granting increased resistance for 20 seconds with each stack.
            You can amass a maximum of 250 Resistance Stacks.
            `,iconSource:"./images/stampede.png",damageData:{base:440,level:[0,270,300,330,360,390,420,450,480,510,540,570]},lastingTime:16e3,reload:6e3},hardpoints:{light:3,heavy:1},color:"#d2b48c",moduleHardpoints:4,cost:{sliver:1e9,gold:1e5,workshopPoints:1e4}},{tier:3,name:"Orange Pentagon",speed:.0014,speedLevel:[0,0,0,1e-4,1e-4,0,1e-4,0,1e-4,0,1e-4,1e-4],scale:55,fieldOfViewMulti:1.35,desc:`
        Orange Pentagon has a strong yellow energy shield that doesn't repair itself.
        Great for attacking grouped up enemies.
        Orange Pentagon has a special system that makes [CINDER] deal increased damage (+25%).
        <br><br>
        Recommended Equipment: x3 Cinder
        `,buyDesc:`
        <br><br>
        Cost: 10.0M Silver + 7.5K Gold + 2.0K Workshop Points
        `,healthData:{base:116e3,level:[0,6e3,6e3,6e3,1e4,1e4,1e4,12e3,12e3,12e3,12e3,15e3]},shieldData:{type:"yellow",base:72e4,level:[0,48e3,64e3,8e4,8e4,96e3,96e3,112e3,112e3,112e3,112e3,112e3],regen:0},ability:{name:"Overload",desc:`
            <strong>Overload</strong>, speeds the shape up and starts a 2 second countdown.
            After the countdown reaches 0, the robot goes boom boom and deals aoe damage, pushing back all enemies away from it.
            Cools down for 5 seconds.
            `,iconSource:"./images/weapons/cinder.png",damageData:{base:12960,level:[0,1296,1296,1944,1944,2592,2592,3240,3240,6480,6480,16200]},lastingTime:2e3,reload:5e3},hardpoints:{light:0,heavy:3},color:"#ffa500",moduleHardpoints:4,cost:{sliver:1e7,gold:7500,workshopPoints:2e3}},{tier:3,name:"Black Pentagon",speed:.0012,speedLevel:[0,0,1e-4,1e-4,0,0,1e-4,5e-5,0,1e-4,2e-4,2e-4],scale:60,fieldOfViewMulti:1.4,desc:`
        Black Pentagon has the ability to decide if you need more health or to incapacitate enemies!
        <br><br>
        Recommended Equipment: x3 Devastator
        `,buyDesc:`
        <br><br>
        Cost: 5.0M Silver + 7.5K Gold + 1.0K Workshop Points
        `,healthData:{base:64e3,level:[0,3e3,3e3,3e3,3e3,5e3,5e3,5e3,5e3,5e3,8e3,12e3]},ability:{name:"Paladin",desc:`
            <strong>Paladin</strong> gives the shape a shield for 10 seconds.
            If the shield is destroyed, it EMP's all enemies around it.
            If the shield isn't destroyed in 10 seconds:
            the shield gets removed, restored health, and extended max durability.
            Ability cools down for 12 seconds.
            `,iconSource:"./images/modules/fortifier.png",shieldHpData:{base:45e4,level:[0,12e3,14e3,15e3,16e3,16e3,16e3,16e3,17e3,19e3,2e4,22e3]},lastingTime:1e4,reload:8e3},hardpoints:{light:0,heavy:3},color:"#000",moduleHardpoints:4,cost:{sliver:5e6,gold:7500,workshopPoints:1e3}},{tier:4,name:"Red Heptagon",speed:8e-4,speedLevel:[0,0,1e-4,1e-4,0,0,1e-4,5e-5,0,1e-4,1e-4,1e-4],scale:120,fieldOfViewMulti:3.5,desc:`
        The first shape able to fire 8 heavy weapons simultaneously.
        It's the true embodiment of unparalleled firepower.
        <br><br>
        Recommended Equipment: x8 Reaper / x8 Veyron
        `,buyDesc:`
        <br><br>
        Cost: 75.0M Silver + 25.0K Gold + 50.0K Workshop Points
        `,healthData:{base:134e3,level:[0,8e3,8e3,12e3,12e3,24e3,24e3,24e3,1e4,12e3,15e3,2e4]},hardpoints:{light:0,heavy:8},ability:{name:"Self Heal",desc:`
            <strong>Self Heal</strong> allows the robot to heal 25% of its health in 5 seconds. 
            After it heals 25%, it begins ability cooldown of 12 sec.
            `,iconSource:"./images/self_heal.png",lastingTime:5e3,reload:6e3},color:"#f00",moduleHardpoints:4,cost:{sliver:75e6,gold:25e3,workshopPoints:5e4}},{tier:4,name:"Gold Circle",speed:.001,speedLevel:[0,1e-4,1e-4,0,0,0,1e-4,1e-4,1e-4,0,1e-4,1e-4],scale:85,fieldOfViewMulti:1.65,desc:`
        First Shape to hold more than 4 module slots.
        Gold Circle is a super tank worthy of your possession.
        The shape has the passive ability to self revive after its destruction, and
        healing is 100% more effective.
        The shape also takes next to no gray damage.
        <br><br>
        Recommended Equipment: x2 Evora + x2 Veyron
        `,buyDesc:`
        <br><br>
        Cost: 10.0B Silver + 250.0K Gold + 150.0K Workshop Points (WKP)
        `,healthData:{base:234e3,level:[0,9600,12800,12800,12800,12800,16e3,16e3,19200,19200,20800,24e3]},hardpoints:{light:2,heavy:2},ability:{name:"Grand Fortitude",desc:`
            <strong>Grand Fortitude</strong>, the shape leaps forward ignoring all buildings.
            Once it "stops leaping", the robot emits a wave that deals damage and emits DOT DAMAGE.
            The shape also gets extra defense points and gains a reflector during and after the ability (temp effect).
            `,iconSource:"./images/grand_fortitude.png",damageData:{base:23e3,level:[0,1e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3,2e3]},dotData:{base:1e3,level:[0,500,500,500,500,500,500,1e3,1e3,1e3,1e3,1e3]},lastingTime:0,reload:6e3},dotResistance:.75,healingMulti:2,revive:.5,color:"#ffd700",moduleHardpoints:6,builtInDefensePoints:200,cost:{sliver:1e10,gold:25e4,workshopPoints:15e4}},{tier:0,name:"Black Hexagon",speed:.0012,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,4e-4],scale:45,fieldOfViewMulti:1.15,desc:`
        Black Hexagon is a fast moving attacker.
        <br><br>
        Recommended Equipment: x3 Punisher
        `,buyDesc:`
        <br><br>
        Cost: 500 Gold
        `,healthData:{base:32e3,level:[0,1e3,1e3,2e3,2e3,2e3,2e3,3e3,3e3,3e3,4e3,5e3]},ability:{name:"Dash",desc:`
            <strong>Dash</strong> leaps the shape into a fixed direction.<br>
            2 Ability Charges, 5 second charge cooldown
            `,iconSource:"./images/dash.png",charges:2,lastingTime:500,reload:5e3},hardpoints:{light:3,heavy:0},color:"#000",moduleHardpoints:1,cost:{sliver:0,gold:500}},{tier:2,dontSell:!0,name:"White Hexagon",speed:.0012,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4],scale:65,fieldOfViewMulti:1.4,desc:`
        White Hexagon is a tier 3 shape with the ability to take down tier 4 and tier 5 shapes!<br><br>
        Recommended Equipment: x2 Flux
        `,healthData:{base:67e3,level:[0,4e3,4e3,4e3,5e3,6e3,6e3,6e3,6e3,7e3,7e3,8500]},ability:{name:"Divine Judgement",desc:`
            <strong>Divine Judgement</strong>: When activated,
            the shape moves at a reduced speed and initiates fire from its built-in weapon.
            This weapon's damage output is dynamically enhanced by the target's tier
            and maximum health. Notably, the projectiles launched by this built-in
            weapon possess the remarkable ability to bypass all types of
            shields and defense systems, excluding reflectors.
            While this ability is active,
            the shape is fortified with additional defense points,
            increasing its resilience. Furthermore,
            each successful hit with the projectiles contributes
            to the shape's maximum health and actively heals it.
            The ability has a cooldown time of 10 seconds.
            `,damageData:{base:360,level:[0,12,12,15,12,12,12,24,24,24,24,48]},lastingTime:6e3,iconSource:"./images/weapons/flux.png",reload:1e4},hardpoints:{light:0,heavy:2},color:"#fff",moduleHardpoints:3,cost:{sliver:2e6,gold:5e3,workshopPoints:5e3}},{dontSell:!0,tier:3,name:"Blue Heptagon",speed:.0014,speedLevel:[0,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,1e-4,2e-4,2e-4],scale:75,fieldOfViewMulti:1.55,desc:`
        This shape possesses the <strong>Infinite Void</strong> ability,
        allowing it to immobilize enemies for 12 seconds
        while making them more susceptible to damage.
        <br><br>
        Recommended Equipment: x2 Veyron + 1 Evora
        `,healthData:{base:93e3,level:[0,4e3,4e3,4e3,4e3,5e3,6e3,7e3,9e3,9e3,1e4,15e3]},ability:{name:"Domain Expansion: Infinite Void",desc:`
            <strong>Domain Expansion: Infinite Void</strong>:<br><br>
            <strong>Domain Expansion</strong> represents an advanced shield technology that harnesses
            the intrinsic essence of shapes,
            encapsulating them within protective barriers.
            Regardless of whether an entity is friend or foe,
            once they step into a domain aligned with their own shape,
            they gain augmented defense and swiftness,
            thanks to this synergy.<br><br>
            <strong>Infinite Void</strong> is a formidable ability that leaves all foes trapped within its dominion entirely
            immobilized, rendering them incapable of counterattacks or utilizing their unique abilities,
            including any projectiles they may possess.
            Furthermore, while ensnared within this void,
            they become more susceptible to damage,
            increasing their vulnerability.<br><br>
            The domain's effect persists for a duration of 6 seconds,
            providing its protective influence and advantages.
            Ability cools down for 16 seconds.
            `,lastingTime:6e3,iconSource:"./images/infinite_void.png",reload:16e3},hardpoints:{light:1,heavy:2},color:"#00f",moduleHardpoints:4,cost:{sliver:15e6,gold:7500,workshopPoints:1e4}},{dontSell:!0,tier:4,name:"Cyan Pentagon",speed:.0026,speedLevel:[0,1e-4,1e-4,1e-4,2e-4,2e-4,2e-4,2e-4,2e-4,4e-4,4e-4,6e-4],scale:65,fieldOfViewMulti:1.3,desc:`
        Cyan Pentagon is a fast shield fighter.
        Holding 6 light weapons, this shape can enter and win fights without taking any damage to its hull.<br><br>
        Recommended Equipment: x6 Lance
        `,shieldData:{type:"yellow",base:69e3,level:[0,12e3,12e3,15e3,15e3,18e3,18e3,2e4,2e4,22e3,8e4,8e4],regen:.25},builtInDefensePoints:100,revive:.5,healthData:{base:76e3,level:[0,4e3,4e3,4e3,5e3,5e3,5e3,5e3,6e3,6e3,8e3,8e3]},ability:{name:"Shield Regeneration",desc:`
            <strong>Shield Regeneration</strong> The shape's movement speed and Aegis shield regeneration rate are significantly increased.
            `,iconSource:"./images/shield_regen.png",lastingTime:12e3,reload:4e3},hardpoints:{light:6,heavy:0},color:"#00ffff",moduleHardpoints:4,cost:{sliver:15e9,gold:15e4,workshopPoints:5e4}},{dontSell:!0,tier:3,name:"Cyan Circle",speed:.0012,speedLevel:[0,0,0,1e-4,1e-4,1e-4,1e-4,0,2e-4,2e-4,2e-4,2e-4],scale:75,fieldOfViewMulti:1.45,desc:`
        The Cyan Circle can temporarily increase its hull's
        durability and gain extra resistance,
        allowing it to engage in fights without
        sustaining any serious long-term damage.
        <br><br>
        Recommended Equipment: x3 Gangantua + x1 Pantagruel
        `,healthData:{base:116e3,level:[0,8e3,8e3,1e4,1e4,15e3,15e3,15e3,15e3,15e3,2e4,2e4]},builtInDefensePoints:50,ability:{name:"Reinforce Hull",desc:`
            <strong>Reinforce Hull</strong> temporarily boosts the shape's
            health and resistance, providing increased durability.
            When the ability expires, the accumulated gray damage
            is divided by 4.<br>
            Cooldown time: 8 seconds.
            `,abilityHealthMultiData:{base:2,level:[0,.5,.5,.5,.5,.5,.5,2,2,2,4,5]},abilityDefensePointsData:{base:100,level:[0,25,25,25,25,25,25,25,25,25,25,150]},lastingTimeData:{base:6e3,level:[0,200,200,400,400,600,600,800,800,1e3,1e3,3e3]},iconSource:"./images/modules/heavy_armor_plating.png",reload:8e3},hardpoints:{light:1,heavy:3},color:"#00ffff",moduleHardpoints:4,cost:{sliver:5e6,gold:7500,workshopPoints:1e4}}];function u(e){return 100/(100+e)}class b{constructor(e,t=null,l=null){this.tier=e.tier,this.owner=t,this.name=e.name,this.desc=e.desc,this.projType=e.projType,this.dmg=e.damageData?e.damageData.base:e.dmg,this.fireRate=e.fireRate,this.slot=l,this.ammo=this.maxammo=e.ammo,this.type=e.type,this.range=e.range,this.reload=e.reload,this.imageSource=e.imageSource,this.level=1,this.continuousReload=e.continuousReload,this.ammoEachReloadTick=e.ammoEachReloadTick,this.aoeRange=e.aoeRange,this.dotDamage=e.dotData?e.dotData.base:e.dotDamage,this.fireRateDecrease=e.fireRateDecreaseData?e.fireRateDecreaseData.base:e.fireRateDecrease,this.defenseBypass=e.defenseBypassData?e.defenseBypassData.base:e.defenseBypass,this.healBackOnDamage=e.healBackOnDamageData?e.healBackOnDamageData.base:e.healBackOnDamage,e.fireRateDecrease&&(this.reload-=e.fireRateDecrease),(e.shieldData||e.baseShielding)&&(e.baseShielding&&(e.shieldData=e.baseShielding),this.baseShielding={health:e.shieldData.base||e.shieldData.health,type:e.shieldData.type,regen:e.shieldData.regen}),this.effectIncrease=e.effectIncreaseData?e.effectIncreaseData.base:e.effectIncrease,this.effectIncreaseName=e.effectIncreaseData?e.effectIncreaseData.effect:e.effectIncreaseName,this.sellPrice=0,this.enhanceCost=(this.tier+1)*1500,e.cost&&(this.sellPrice+=.75*e.cost.sliver,e.cost.gold&&e.cost.gold>0&&(this.sellPrice+=1250*e.cost.gold))}}var _=[{tier:0,name:"Punisher",type:"Light",projType:"normal",desc:`
        Multi-barreled machine gun with a high rate of fire. Great at close range.
        `,damageData:{base:128,level:[0,25,25,32,39,40,44,45,55,57,59,65]},imageSource:"./images/weapons/punisher.png",fireRate:62.5,ammo:220,reload:5e3,range:1200,cost:{sliver:3e4,gold:0}},{tier:1,name:"Landslide",type:"Light",projType:"rocket",desc:`
        Close range rocket launcher with high rate of fire. 
        Rockets deal aoe damage and are effective againist groups of enemies. 
        Improved reloading mechanics makes this weapon reload while firing.
        `,damageData:{base:560,level:[0,80,83,86,90,102,113,132,132,139,149,150]},ammoEachReloadTick:1,continuousReload:!0,imageSource:"./images/weapons/landslide.png",aoeRange:60,fireRate:50,ammo:40,reload:300,range:600,cost:{sliver:23e4,gold:0}},{tier:0,name:"Shocker",type:"Heavy",projType:"normal",desc:`
        Far ranged weapon used to target enemies at far distances.
        `,damageData:{base:900,level:[0,210,220,240,260,260,268,280,300,310,322,330]},imageSource:"./images/weapons/shocker.png",fireRate:334,ammo:6,reload:5e3,range:3200,cost:{sliver:19e4,gold:0}},{tier:1,name:"Destroyer",type:"Heavy",projType:"normal",desc:`
        Large heavy multi-barreled machine gun. 
        Great at close range since bullets disperse due to high fire rate. 
        Each round shoots 2 projectiles.
        `,buyDesc:`
        <br><br>
        Cost: 500 Gold
        `,damageData:{base:77,level:[0,34,38,38,41,41,59,59,66,75,85,95]},imageSource:"./images/weapons/destroyer.png",fireRate:50,ammo:300,reload:5500,range:1400,cost:{sliver:0,gold:500}},{tier:1,name:"Avalanche",type:"Heavy",projType:"rocket",desc:`
        Fast firing heavy rocket launcher. AOE Damage makes it a great weapon aganist grouped enemies.
        Improved reloading mechanics makes this weapon reload while firing.
        `,buyDesc:`
        <br><br>
        Cost: 750 Gold
        `,damageData:{base:1e3,level:[0,100,140,177,190,211,222,234,255,266,288,300]},ammoEachReloadTick:4,continuousReload:!0,imageSource:"./images/weapons/avalanche.png",aoeRange:40,fireRate:75,ammo:20,reload:600,range:800,cost:{sliver:0,gold:750}},{tier:2,name:"Hawk",type:"Light",desc:`
        Light laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        Weapon ignores walls and all shields.
        `,damageData:{base:260,level:[0,30,33,33,39,39,49,59,66,77,88,100]},imageSource:"./images/weapons/hawk.png",fireRate:200,ammo:30,reload:5e3,range:1e3,cost:{sliver:0,gold:2e3}},{tier:2,name:"Eagle",type:"Heavy",desc:`
        Heavy laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        Weapon ignores walls and all shields.
        `,buyDesc:`
        <br><br>
        Cost: 2.0K Gold
        `,damageData:{base:218,level:[0,46,51,51,55,55,79,79,89,101,114,127]},imageSource:"./images/weapons/eagle.png",fireRate:100,ammo:60,reload:5e3,range:1e3,cost:{sliver:0,gold:2e3}},{tier:2,name:"Viper",type:"Heavy",projType:"normal",desc:`
        Large heavy multi-barreled machine gun.
        Projectiles are coated with a small layer of enzymes that corrode metal.
        Each hit emits DOT effect damage that bypasses defense systems of enemies.
        `,damageData:{base:264,level:[0,34,34,38,48,48,54,54,62,68,102,102]},dotData:{base:30,level:[0,10,10,20,20,20,20,30,30,30,40,40]},imageSource:"./images/weapons/viper.png",fireRate:40,ammo:100,reload:5e3,range:1400,cost:{sliver:0,gold:3e3}},{tier:3,name:"Atomizer",type:"Light",projType:"energy",desc:`
        Light energy machine gun.
        Unlimited ammo.
        Longer it fires, the slower and less accurate it becomes.
        `,buyDesc:`
        <br><br>
        Cost: 5.0K Gold
        `,damageData:{base:536,level:[0,51,56,60,65,75,76,85,94,104,113,130]},imageSource:"./images/weapons/atomizer.png",fireRate:50,ammo:1e300,reload:0,range:1200,cost:{sliver:0,gold:5e3}},{tier:3,name:"Nucleon",type:"Heavy",projType:"energy",desc:`
        Heavy energy machine gun.
        Unlimited ammo.
        Longer it fires, the slower and less accurate it becomes.
        `,buyDesc:`
        <br><br>
        Cost: 5.0K Gold
        `,damageData:{base:632,level:[0,82,88,102,113,121,144,157,171,184,184,185]},imageSource:"./images/weapons/nucleon.png",fireRate:75,ammo:1e300,reload:0,range:1200,cost:{sliver:0,gold:5e3}},{tier:2,name:"Sting",type:"Light",projType:"normal",desc:`
        Large light multi-barreled machine gun.
        Projectiles are coated with a small layer of enzymes that corrode metal.
        Each hit emits DOT effect damage that bypasses defense systems of enemies.
        `,buyDesc:`
        <br><br>
        Cost: 3.0K Gold
        `,damageData:{base:158,level:[0,10,10,12,14,14,16,16,18,20,30,30]},dotData:{base:18,level:[0,4,4,8,8,8,8,12,12,12,16,16]},imageSource:"./images/weapons/sting.png",fireRate:40,ammo:100,reload:5e3,range:1400,cost:{sliver:0,gold:3e3}},{tier:3,name:"Thunder",projType:"normal",type:"Heavy",desc:`
        Heavy shotgun.
        Shoots 25 projectiles per burst.
        Improved reloading mechanic makes this weapon reload while firing.
        `,buyDesc:`
        <br><br>
        Cost: 5.0K Gold
        `,damageData:{base:244,level:[0,33,33,33,44,44,44,55,55,66,66,77]},imageSource:"./images/weapons/thunder.png",ammoEachReloadTick:1,continuousReload:!0,fireRate:250,ammo:10,reload:625,range:800,cost:{sliver:0,gold:5e3}},{tier:3,name:"Storm",projType:"normal",type:"Light",desc:`
        Light shotgun.
        Shoots 12 projectiles per burst.
        Improved reloading mechanic makes this weapon reload while firing.
        `,damageData:{base:171,level:[0,23,23,23,31,31,31,39,39,46,46,54]},imageSource:"./images/weapons/storm.png",ammoEachReloadTick:1,continuousReload:!0,fireRate:125,ammo:20,reload:312.5,range:800,cost:{sliver:0,gold:5e3}},{tier:2,name:"Cinder",projType:"normal",type:"Heavy",desc:`
        Heavy AOE damage weapon.
        This weapon fires pulses of high temperature heat waves to damage enemies.
        Although the heat waves are high in temperature it isn't high enough to cause any DOT damage.
        Due to the speciality of this weapon, it can reload while firing.
        `,damageData:{base:1080,level:[0,90,135,180,180,180,225,225,225,270,270,270]},imageSource:"./images/weapons/cinder.png",ammoEachReloadTick:1,continuousReload:!0,fireRate:100,ammo:20,reload:300,range:500,cost:{sliver:0,gold:3e3}},{tier:3,name:"Blaze",type:"Light",projType:"energy",desc:`
        Light compact flamethower that's good at close range.
        Ignores blue energy shields.
        Flames also deal small DOT Damage.
        `,damageData:{base:190,level:[0,40,40,40,40,80,80,80,120,120,160,160]},dotData:{base:9,level:[0,2,2,4,4,4,4,6,6,6,8,8]},imageSource:"./images/weapons/blaze.png",fireRate:50,ammo:125,reload:3e3,range:600,cost:{sliver:0,gold:3e3}},{tier:3,name:"Ember",type:"Heavy",projType:"energy",desc:`
        Heavy compact flamethower that's good at close range.
        Ignores blue energy shields.
        Flames also deal small DOT Damage.
        `,buyDesc:`
        <br><br>
        Cost: 5.0K Gold
        `,damageData:{base:474,level:[0,100,100,100,100,200,200,200,300,300,400,400]},dotData:{base:18,level:[0,4,4,8,8,8,8,12,12,16,16,16]},imageSource:"./images/weapons/ember.png",fireRate:25,ammo:250,reload:3e3,range:600,cost:{sliver:0,gold:3e3}},{tier:3,name:"Slumber",type:"Light",projType:"normal",desc:`
        A light fast firing machine gun. Bullets gives effects that slow down enemies.
        `,damageData:{base:315,level:[0,52,52,79,79,105,105,131,131,158,210,236]},imageSource:"./images/weapons/slumber.png",fireRate:25,ammo:45,reload:5e3,range:1200,cost:{sliver:0,gold:5e3}},{tier:3,name:"Delay",type:"Heavy",projType:"normal",desc:`
        A heavy fast firing machine gun. Bullets gives effects that slow down enemies.
        `,damageData:{base:900,level:[0,150,150,225,225,300,300,375,375,450,600,675]},imageSource:"./images/weapons/delay.png",fireRate:25,ammo:45,reload:5e3,range:1200,cost:{sliver:0,gold:5e3}},{tier:3,name:"Rime",type:"Light",projType:"rocket",desc:`
        Light freezing rockets that deal damage.
        Each rocket deals freezing damage and gives the enemy freezing effect.
        Once the effect reaches X stacks, the enemy will be frozen for 1 second.
        `,damageData:{base:208,level:[0,32,33,34,36,41,45,53,53,56,60,60]},ammoEachReloadTick:4,continuousReload:!0,imageSource:"./images/weapons/rime.png",aoeRange:50,fireRate:25,ammo:80,reload:300,range:800,cost:{sliver:1e6,gold:5e3}},{tier:3,name:"Glacier",type:"Heavy",projType:"rocket",desc:`
        Heavy freezing rockets that deal damage.
        Each rocket deals freezing damage and gives the enemy freezing effect.
        Once the effect reaches X stacks, the enemy will be frozen for 1 second.
        `,buyDesc:`
        <br><br>
        Cost: 1.0M Sliver + 5.0K Gold
        `,damageData:{base:362,level:[0,48,50,51,54,62,68,80,80,84,90,90]},ammoEachReloadTick:4,continuousReload:!0,imageSource:"./images/weapons/glacier.png",aoeRange:50,fireRate:25,ammo:80,reload:300,range:800,cost:{sliver:1e6,gold:5e3}},{tier:3,name:"Devastator",projType:"normal",type:"Heavy",desc:`
        Heavy sonic shotgun that fires 7 projectiles per burst.
        Each impact of the sonic blasts would knockback enemies.
        Due to how sonic blast waves work, the knockback is high but the range is small.
        `,damageData:{base:2067,level:[0,119,119,119,119,119,119,119,119,119,119,119]},imageSource:"./images/weapons/devastator.png",ammoEachReloadTick:1,continuousReload:!0,fireRate:400,ammo:5,reload:900,range:500,cost:{sliver:5e6,gold:5e3}},{tier:3,name:"Scatter",projType:"normal",type:"Light",desc:`
        Light sonic shotgun that fires 7 projectiles per burst.
        Each impact of the sonic blasts would knockback enemies.
        Due to how sonic blast waves work, the knockback is high but the range is small.
        `,damageData:{base:992,level:[0,58,58,58,58,58,58,58,58,58,58,58]},imageSource:"./images/weapons/scatter.png",continuousReload:!0,ammoEachReloadTick:1,fireRate:400,ammo:5,reload:900,range:500,cost:{sliver:5e6,gold:5e3}},{tier:4,name:"Evora",projType:"normal",type:"Light",desc:`
        Light sonic machine gun that fires 2 projectiles per burst.
        After 2 seconds of continuous fire, the weapon goes into increased firing state, and fires x1.5 faster.
        The sonic blasts that are shot only deal [GRAY DAMAGE].
        `,damageData:{base:390,level:[0,65,65,65,65,65,78,78,78,78,78,78]},imageSource:"./images/weapons/evora.png",fireRate:40,ammo:125,reload:6e3,range:1200,cost:{sliver:5e6,gold:2e4,workshopPoints:7500}},{tier:4,name:"Veyron",projType:"normal",type:"Heavy",desc:`
        Heavy sonic machine gun that fires 2 projectiles per burst.
        After 2 seconds of continuous fire, the weapon goes into increased firing state, and fires x1.5 faster.
        The sonic blasts that are shot only deal [GRAY DAMAGE].
        `,damageData:{base:680,level:[0,130,130,130,130,130,156,156,156,156,156,156]},imageSource:"./images/weapons/veyron.png",fireRate:40,ammo:125,reload:6e3,range:1200,cost:{sliver:5e7,gold:2e4,workshopPoints:7500}},{tier:3,name:"Reaper",type:"Heavy",projType:"normal",desc:`
        Far ranged weapon used to target enemies at far distances.
        Bullets are coated with high layers of special material,
        that makes it bypass [REFLECTOR] and 50% of all [DEFENSE POINTS].
        `,damageData:{base:1500,level:[0,125,125,150,150,150,150,175,175,200,200,200]},imageSource:"./images/weapons/reaper.png",fireRate:100,ammo:20,reload:2500,range:3800,cost:{sliver:2e7,gold:5e3,workshopPoints:5e3}},{tier:3,dontSell:!0,name:"Flux",type:"Heavy",projType:"energy",desc:`
        The Flux is a formidable multi-barreled machine gun with an astonishingly high rate of fire.
        What sets this weapon apart is its unique damage amplification,
        which is intricately tied to the maximum health and tier of the targets it strikes.
        `,damageData:{base:88,level:[0,12,12,18,18,18,18,24,24,24,36,48]},imageSource:"./images/weapons/flux.png",fireRate:50,ammo:200,reload:5e3,range:1200,cost:{sliver:5e6,gold:5e3,workshopPoints:5e3}},{dontSell:!0,tier:3,name:"Incinerator",type:"Heavy",projType:"rocket",desc:`
        A long-range incendiary heavy rocket launcher,
        each direct hit from its rockets accumulates a
        potent "blast effect." When the target's blast
        threshold is reached, it detonates,
        causing area-of-effect damage not only to itself but also to
        nearby allies of the target.
        `,damageData:{base:800,level:[0,80,83,86,90,102,113,132,132,139,149,150]},effectIncreaseData:{base:1,effect:"blast",level:[0,1,1,1,1,1,1,1,1,1,1,1]},ammoEachReloadTick:1,continuousReload:!0,imageSource:"./images/weapons/incinerator.png",aoeRange:80,fireRate:100,ammo:16,reload:400,range:1200,cost:{sliver:5e6,gold:5e3,workshopPoints:2e3}},{dontSell:!0,tier:3,name:"Scald",type:"Light",projType:"rocket",desc:`
        A long-range incendiary light rocket launcher,
        each direct hit from its rockets accumulates a
        potent "blast effect." When the target's blast
        threshold is reached, it detonates,
        causing area-of-effect damage not only to itself but also to
        nearby allies of the target.
        `,damageData:{base:300,level:[0,30,33,36,40,52,73,92,92,99,109,120]},effectIncreaseData:{base:1,effect:"blast",level:[0,1,1,1,1,1,1,1,1,1,1,1]},ammoEachReloadTick:1,continuousReload:!0,imageSource:"./images/weapons/scald.png",aoeRange:60,fireRate:100,ammo:8,reload:400,range:1200,cost:{sliver:5e6,gold:5e3,workshopPoints:2e3}},{dontSell:!0,tier:3,name:"Toxin",type:"Light",projType:"energy",desc:`
        This potent light weapon deals damage over time (DoT).
        When a DoT is applied,
        it can reset the cooldowns of other active DoT effects,
        ensuring they stay active.
        This is a valuable advantage,
        reinvigorating expiring DoT effects
        to keep harming your foes.
        `,damageData:{base:20,level:[0,5,5,5,5,5,5,5,5,5,10,15]},dotData:{base:50,level:[0,10,10,10,15,15,15,20,25,30,35,40]},imageSource:"./images/weapons/toxin.png",fireRate:75,ammo:30,reload:1e3,range:600,cost:{sliver:0,gold:5e3}},{dontSell:!0,tier:3,name:"Bane",type:"Heavy",projType:"energy",desc:`
        This potent heavy weapon deals damage over time (DoT).
        When a DoT is applied,
        it can reset the cooldowns of other active DoT effects,
        ensuring they stay active.
        This is a valuable advantage,
        reinvigorating expiring DoT effects
        to keep harming your foes.
        `,damageData:{base:50,level:[0,5,5,5,5,5,5,5,5,5,10,15]},dotData:{base:125,level:[0,15,15,15,20,20,20,20,25,30,35,40]},imageSource:"./images/weapons/bane.png",fireRate:75,ammo:30,reload:1e3,range:600,cost:{sliver:0,gold:5e3}},{dontSell:!0,tier:3,name:"Lance",type:"Light",projType:"energy",desc:`
        This is a lightweight plasma weapon that shoots energy bursts.
        It can fire continuously without needing to "reload".
        With each shot,
        it gets hotter,
        dealing more damage: 150% on the second shot,
        250% on the third,
        and a massive 350% on the fourth.
        For safety, it cools down after every fourth shot and then starts over.
        `,damageData:{base:300,level:[0,300,320,350,390,430,450,440,550,500,555,555]},fireRateDecreaseData:{base:0,level:[0,45,45,45,45,45,45,45,45,45,45,50]},imageSource:"./images/weapons/lance.png",fireRate:0,ammo:1,reload:1e3,range:2e3,cost:{sliver:1e6,gold:5e3,workshopPoints:5e3}},{dontSell:!0,tier:3,name:"Glaive",type:"Heavy",projType:"energy",desc:`
        This is a lightweight plasma weapon that shoots energy bursts.
        It can fire continuously without needing to "reload".
        With each shot,
        it gets hotter,
        dealing more damage: 150% on the second shot,
        250% on the third,
        and a massive 350% on the fourth.
        For safety, it cools down after every fourth shot and then starts over.
        `,damageData:{base:600,level:[0,500,520,550,590,630,650,640,600,600,655,655]},fireRateDecreaseData:{base:0,level:[0,45,45,45,45,45,45,45,45,45,45,50]},imageSource:"./images/weapons/glaive.png",fireRate:0,ammo:1,reload:1e3,range:2e3,cost:{sliver:1e6,gold:5e3,workshopPoints:5e3}},{tier:1,name:"Ancile",type:"Heavy",projType:"none",desc:`
        Weapon that provides a powerful blue energy shield.
        `,shieldData:{type:"energy",base:47e3,level:[0,5e3,5e3,6e3,6e3,7e3,7e3,8e3,8e3,9e3,9e3,1e4],regen:.05},imageSource:"./images/modules/fortifier.png",cost:{sliver:0,gold:500}},{dontSell:!0,tier:4,name:"Tamer",type:"Light",projType:"energy",desc:`
        Fast firing rust light energy machine gun that
        applies rust effect on to enemies.
        Rust reduces the healing power of enemies (MAX 100% REDUCTION).
        `,damageData:{base:720,level:[0,80.4,80.4,80.4,80.4,80.4,80.4,80.4,80.4,180,360,600]},imageSource:"./images/rust.png",fireRate:24,ammo:60,reload:1500,range:1400,cost:{sliver:15e6,gold:15e3,workshopPoints:1e4}},{dontSell:!0,tier:4,name:"Trickster",type:"Heavy",projType:"energy",desc:`
        Fast firing rust heavy energy machine gun that
        applies rust effect on to enemies.
        Rust reduces the healing power of enemies (MAX 100% REDUCTION).
        `,damageData:{base:1440,level:[0,160.8,160.8,160.8,160.8,160.8,160.8,160.8,160.8,360,720,1200]},imageSource:"./images/weapons/trickster.png",fireRate:24,ammo:60,reload:1500,range:1400,cost:{sliver:45e6,gold:15e3,workshopPoints:1e4}},{dontSell:!0,tier:3,name:"Pantagruel",type:"Light",desc:`
        This weapon uses magnetic fields to create a sweeping arc of damage.
        What makes it stand out is that, as it deals damage,
        a portion of that damage is converted into healing.
        `,damageData:{base:360,level:[0,36,72,72,108,108,126,126,162,162,216,216]},defenseBypassData:{base:.1,level:[0,.03,.03,.06,.07,.07,.07,.07,.07,.07,.07,.09]},healBackOnDamageData:{base:.1,level:[0,.05,.05,.05,.05,.05,.05,.05,.05,.05,.1,.15]},imageSource:"./images/modules/self_fix_unit.png",continuousReload:!0,fireRate:100,ammo:60,ammoEachReloadTick:20,reload:3e3,range:1e3,cost:{sliver:0,gold:2e3}},{dontSell:!0,tier:3,name:"Gangantua",type:"Heavy",desc:`
        This weapon uses magnetic fields to create a sweeping arc of damage.
        What makes it stand out is that, as it deals damage,
        a portion of that damage is converted into healing.
        `,damageData:{base:576,level:[0,57,115,115,172,172,201,201,259,259,345,345]},defenseBypassData:{base:.1,level:[0,.03,.03,.06,.07,.07,.07,.07,.07,.07,.07,.09]},healBackOnDamageData:{base:.1,level:[0,.05,.05,.05,.05,.05,.05,.05,.05,.05,.1,.15]},imageSource:"./images/weapons/gangantua.png",continuousReload:!0,fireRate:100,ammo:60,ammoEachReloadTick:20,reload:3e3,range:1e3,cost:{sliver:0,gold:2e3}}];class v{constructor(e,t=null,l=null){this.name=e.name,this.owner=t,this.slot=l,this.desc=e.desc,this.tier=e.tier,this.imageSource=e.imageSource,this.level=1,this.healthIncrease=e.healthIncrease,e.healthIncreaseData&&(this.healthIncrease=e.healthIncreaseData.base),this.selfFixRepair=e.selfFixRepair,e.selfFixRepairData&&(this.selfFixRepair=e.selfFixRepairData.base),this.dmgIncrease=e.dmgIncrease,e.dmgIncreaseData&&(this.dmgIncrease=e.dmgIncreaseData.base),this.immunePercent=e.immunePercent,e.immunePercentData&&(this.immunePercent=e.immunePercentData.base),this.lastingTime=e.lastingTime,e.lastingTimeData&&(this.lastingTime=e.lastingTimeData.base),this.shieldRegen=e.shieldRegen,e.shieldRegenData&&(this.shieldRegen=e.shieldRegenData.base),this.baseDefensePoints=e.baseDefensePoints,e.baseDefensePointsData&&(this.baseDefensePoints=e.baseDefensePointsData.base),this.durabilityLostAmp=e.durabilityLostAmp,e.durabilityLostAmpData&&(this.durabilityLostAmp=e.durabilityLostAmpData.base),this.increasedDefensePoints=e.increasedDefensePoints,e.increasedDefensePointsData&&(this.increasedDefensePoints=e.increasedDefensePointsData.base),this.shieldHealth=e.shieldHealth,e.shieldHealthData&&(this.shieldHealth=e.shieldHealthData.base),this.grayDamageDecrease=e.grayDamageDecrease,e.grayDamageDecreaseData&&(this.grayDamageDecrease=e.grayDamageDecreaseData.base),this.antiControl=e.antiControl,e.antiControlData&&(this.antiControl=e.antiControlData.base),this.nuclearAmp=e.nuclearAmp,e.nuclearAmpData&&(this.nuclearAmp=e.nuclearAmpData.base)}}var w=[{tier:0,name:"Armor Plating",desc:`
        Increases shape's durability.
        `,buyDesc:`
        <br><br>
        Cost: 500.0K Sliver
        `,healthIncreaseData:{base:.02,level:[0,.01,.01,.01,.01,.01]},imageSource:"./images/modules/armor_plating.png",cost:{sliver:5e5,gold:0}},{tier:1,name:"Heavy Armor Plating",desc:`
        Heavy armor kit, allows for even more protection to your shapes.
        `,buyDesc:`
        <br><br>
        Cost: 1.0K Gold
        `,healthIncreaseData:{base:.07,level:[0,.01,.01,.01,.01,.01]},imageSource:"./images/modules/heavy_armor_plating.png",cost:{sliver:0,gold:1e3}},{tier:2,name:"Self Fix Unit",desc:`
        Repairs a portion of a shape's maximum durability each second.
        `,buyDesc:`
        <br><br>
        Cost: 2K Gold
        `,selfFixRepairData:{base:360,level:[0,180,180,180,520,560]},imageSource:"./images/modules/self_fix_unit.png",cost:{sliver:0,gold:2e3}},{tier:0,name:"Nuclear Reactor",desc:`
        Increases shape's weapon damage output.
        `,buyDesc:`
        <br><br>
        Cost: 500.0K Sliver
        `,dmgIncreaseData:{base:.02,level:[0,.01,.01,.01,.01,.01]},imageSource:"./images/modules/nuclear_reactor.png",cost:{sliver:5e5,gold:0}},{tier:1,name:"Thermonuclear Reactor",desc:`
        Thermonuclear Reactor, increases weapon damage output even more.
        `,buyDesc:`
        <br><br>
        Cost: 1.0K Gold
        `,dmgIncreaseData:{base:.05,level:[0,.02,.02,.02,.02,.02]},imageSource:"./images/modules/thermonuclear_reactor.png",cost:{sliver:0,gold:1e3}},{tier:3,name:"Arc Reactor",desc:`
        Arc Reactor, provies huge bounce to damage but decreases health.
        `,buyDesc:`
        <br><br>
        Cost: 3.0K Gold
        `,dmgIncreaseData:{base:.1,level:[0,.1,.1,.1,.1,.1]},healthIncreaseData:{base:-.1,level:[0,-.02,-.02,-.02,-.02,-.02]},imageSource:"./images/modules/arc_reactor.png",cost:{sliver:0,gold:3e3}},{tier:3,name:"Balance Unit",desc:`
        Increases shape's durability and weapon damage output.
        `,buyDesc:`
        <br><br>
        Cost: 5.0K Gold
        `,healthIncreaseData:{base:.05,level:[0,.02,.02,.02,.02,.02]},dmgIncreaseData:{base:.04,level:[0,.01,.01,.02,.02,.02]},imageSource:"./images/modules/balance_unit.png",cost:{sliver:0,gold:5e3}},{tier:3,name:"Last Stand",desc:`
        Once the shape enters low durability, it stops the shape from taking damage for X seconds.
        Only can be used once.
        More modules you put, the quicker you would get the immunity.
        `,buyDesc:`
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold
        `,immunePercentData:{base:.05,level:[0,.05,.05,.05,.05,.05]},lastingTimeData:{base:2e3,level:[0,500,500,500,500,500]},imageSource:"./images/modules/last_stand.png",cost:{sliver:25e6,gold:5e3}},{tier:2,name:"Fortifier",desc:`
        Increases the regen speed and durability of shields.
        `,buyDesc:`
        <br><br>
        Cost: 500.0K Silver + 2.0K Gold
        `,shieldHealthData:{base:.1,level:[0,.05,.05,.05,.05,.05]},shieldRegenData:{base:.1,level:[0,.02,.02,.02,.02,.02]},imageSource:"./images/modules/fortifier.png",cost:{sliver:5e5,gold:2e3}},{tier:3,name:"Damage Controller",desc:`
        Increases shape health and decreases gray damage taken.
        `,buyDesc:`
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold
        `,healthIncreaseData:{base:.03,level:[0,.01,.01,.01,.01,.01]},grayDamageDecreaseData:{base:.05,level:[0,.02,.02,.02,.02,.02]},imageSource:"./images/modules/damage_controller.png",cost:{sliver:25e6,gold:5e3}},{tier:3,name:"Repair Amplifier",desc:`
        When receiving damage, your shape gains a 0.05% bonus to regeneration for the entire battle.
        When the maximum bonuses are reached, the robot gains increased defense points and restores a percentage of gray damage.
        When installing several such modules, the speed of receiving bonuses increases, but not their maximum value.<br><br>
        MAX STACKS: 60
        `,buyDesc:`
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold + 10.0K Workshop Points
        `,baseDefensePointsData:{base:5,level:[0,4,4,4,4,4]},durabilityLostAmpData:{base:.08,level:[0,-.01,-.01,-.01,-.01,-.01]},increasedDefensePointsData:{base:5,level:[0,8,8,8,8,8]},imageSource:"./images/modules/repair_amplifier.png",cost:{sliver:25e6,gold:5e3,workshopPoints:1e4}},{tier:3,name:"Anti Control",desc:`
        Reduces the duration of negative effects.
        When installing several such modules, the bonus won't stack.
        `,buyDesc:`
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold + 10.0K Workshop Points
        `,antiControlData:{base:.25,level:[0,.1,.1,.1,.1,.1]},imageSource:"./images/modules/anticontrol.png",cost:{sliver:25e6,gold:5e3,workshopPoints:1e4}},{dontSell:!0,tier:3,name:"Nuclear Amplifier",desc:`
        For every 40,000 damage inflicted on the enemy,
        your shape receives a small damage boost for the entire battle.
        Upon reaching the maximum possible bonuses,
        the robot recovers part of its durability (one second duration).
        Several modules increase how fast a robot gets bonuses,
        but not their maximum limit.
        `,nuclearAmpData:{base:.002,level:[0,.001,.001,.001,.001,.001]},selfFixRepairData:{base:2e4,level:[0,1e4,1e4,1e4,1e4,1e4]},imageSource:"./images/modules/nuclear_amplifier.png",cost:{sliver:25e6,gold:5e3,workshopPoints:1e4}},{dontSell:!0,tier:4,name:"God Complex Equation",desc:`
        The brilliant minds at the Module Development Research Center
        (MDRC) have successfully deciphered the intricate code
        necessary for achieving the ideal structural configuration.
        This groundbreaking module empowers any form to attain the
        esteemed TIER 5 classification, enhancing its overall attributes,
        including heightened health, increased damage output, enhanced
        resistance, and a remarkable reduction in gray damage incurred.<br><br>
        Using 3 of the same module will make you immune to these effect(s):
        cold pulse<br><br>
        Max Gray Damage Reduction: 95%
        `,imageSource:"./images/modules/god_complex_equation.png",healthIncreaseData:{base:.05,level:[0,.05,.05,.05,.05,.05]},grayDamageDecreaseData:{base:.012,level:[0,.012,.025,.025,.05,.05]},dmgIncreaseData:{base:.02,level:[0,.02,.02,.02,.02,.02]},baseDefensePointsData:{base:12.5,level:[0,12.5,25,25,50,50]},cost:{sliver:1e10,gold:3e5,workshopPoints:1e5}}];function k(e,{health:t,builtInDefensePoints:l,topDesc:i,newDesc:a,hardpoints:o,borderColor:n,tier:s,reflector:r,moduleSlots:$,ability:d,revive:p,healingAuraData:g,fieldOfViewMulti:h},c,m,u){if("shape"==c){let b=JSON.parse(JSON.stringify(f.find(t=>t.name==e)));b.name=`${m} ${e}`,b.specialOf=u,b.desc=b.desc.replace(e,`${m} ${e}`),b.desc=`
            ${i||"Limited Edition Shape with increased stat bonuses."}
            <br><br>
            `+(a||b.desc),s&&(b.tier=s),b.healthData.base*=t,b.dontSell=!0,b.dontShow=!0,h&&(b.fieldOfViewMulti=h),g&&(b.healingAuraData=g),p&&(b.revive=p),d&&(b.ability=d),l&&(b.builtInDefensePoints=l),o&&(b.hardpoints=o),n&&(b.borderColor=n),$&&(b.moduleHardpoints=$),b.reflector&&r&&(b.reflector=r);for(let _=0;_<b.healthData.level.length;_++)b.healthData.level[_]*=t;f.push(b)}}function E(e){return e>=1e12?(e/1e12).toFixed(1)+"T":e>=1e9?(e/1e9).toFixed(1)+"B":e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":e}function I(e,t){e&&e.includes("token")?"token 1"==e?p.tokens.mk1+=t:"token 2"==e?p.tokens.mk2+=t:p.tokens.mk3+=t:null!=p[e]&&(p[e]+=t),document.getElementById("moneyDisplay").innerHTML=`
        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${ez}');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.sliver)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-200}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${eN}');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
        ${E(p.gold)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2+75}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.workshopPoints)}
        </div>
        </div>
        `,document.getElementById("money2Display").innerHTML=`
        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2+10}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/tokens/mk2_token.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.tokens.mk2)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-135}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/tokens/mk1_token.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.tokens.mk1)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-280}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${ti}');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.keys)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2+155}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/tokens/mk3_token.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.tokens.mk3)}
        </div>
        </div>
        `,document.getElementById("money3Display").innerHTML=`
        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px;">
        <span class="material-symbols-outlined" style="font-size: 35px; color: #ffff00;">
        rewarded_ads
        </span>
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${E(p.league)}
        </div>
        </div>
        `,e&&to()}k("Orange Circle",{health:2,reflector:.4,moduleSlots:5},"shape","Pumpkin","./images/special_addtiction/pumpkin_orange_circle.png"),k("Green Circle",{health:2.5,topDesc:`
        ULTIMATE SHAPE VERSION<br>
        The rarest modification of the Green Circle.
        Surpassing the original in all aspects,
        it is a desirable shape for any player.
        `,newDesc:`
        Armored shape with the ability to heal itself when damaged.
        <br><br>
        Recommended Equipment: x3 Veyron 
        `,revive:.75,builtInDefensePoints:100,hardpoints:{light:0,heavy:3},ability:{name:"Ultimate Mending",desc:`
            <strong>Ultimate Mending</strong> speeds up the shape.
            Heals 50% of health each second.
            While healing, it also repairs gray damage.
            During the ability, it improves the healing aura's healing power and allows it to heal gray damage.
            `,iconSource:"./images/self_heal.png",lastingTime:12e3,reload:6e3},healingAuraData:{base:5e3,level:[0,500,500,550,600,650,650,700,700,700,800,800]},moduleSlots:4,tier:4,borderColor:"#ffff00"},"shape","Ultimate"),k("Tan Pentagon",{health:3,tier:4,builtInDefensePoints:150,hardpoints:{light:6,heavy:0},topDesc:`
        ULTIMATE SHAPE VERSION<br>
        The rarest modification of the Tan Pentagon.
        Surpassing the original in all aspects,
        it is a desirable shape for any player.
        `,newDesc:`
        Tan Pentagon is a dangerous shape that can
        turn enemies fire power aganist them.
        <br><br>
        Recommended Equipment: x6 Ultimate Punisher
        `,ability:{name:"Retribution",desc:`
            <strong>Retribution</strong> deploys a resilient purple shield
            that can tirelessly absorb an unlimited amount of damage,
            turning the aggression of foes into an opportunity for counterattack.
            As enemies assail the shield, it progressively amplifies the power of
            the shape's built-in weapons, reaching a staggering maximum increase of 2000%.<br><br>
            This formidable ability remains in effect for 12 seconds,
            after which it goes into an 4-second cooldown phase.
            `,iconSource:"./images/retribution.png",damageData:{base:667,level:[0,167,167,177,177,177,199,199,233,233,233,267]},lastingTime:12e3,reload:4e3},borderColor:"#ffff00"},"shape","Ultimate"),window.isDev&&(f.forEach(e=>{e.dontSell&&!e.dontShow&&(e.dontSell=!1)}),_.forEach(e=>{e.dontSell&&(e.dontSell=!1)}),w.forEach(e=>{e.dontSell&&(e.dontSell=!1)}));let D={freeze:75,blast:125};function B(){p.gameMode>=0?er():I(),p.shapes.length&&te(),o.width=window.innerWidth,o.height=window.innerHeight;let e=1*Math.max(window.innerWidth/g.x,window.innerHeight/g.y);o.width=1*window.innerWidth,o.height=1*window.innerHeight,o.style.width=window.innerWidth+"px",o.style.height=window.innerHeight+"px",n.setTransform(e,0,0,e,(1*window.innerWidth-g.x*e)/2,(1*window.innerHeight-g.y*e)/2)}function T(e,t,l,i){let a=Math.PI/2*3,o,n,s=Math.PI/t;e.beginPath(),e.moveTo(0,-l);for(var r=0;r<t;r++)o=Math.cos(a)*l,n=Math.sin(a)*l,e.lineTo(o,n),a+=s,o=Math.cos(a)*i,n=Math.sin(a)*i,e.lineTo(o,n),a+=s;e.lineTo(0,-l),e.closePath()}function S(e,t,l,i,a,o,s,r,$){(i=i||n).lineWidth=$||5.5,i.strokeStyle=r||"#000",i.fillStyle=s,i.beginPath(),i.arc(e,t,l,0,2*Math.PI),o||i.fill(),a||i.stroke()}I(),window.addEventListener("resize",B),B(),window.addEventListener("mousemove",e=>{$=e.clientX,d=e.clientY}),0==p.shapes.length&&(p.shapes.push(new m(f[0],0)),p.weapons.push(new b(_[0],0,0)),p.weapons.push(new b(_[0],0,1)));var A={},M="./images/arrows/arrow_1_left.png",P="./images/arrows/arrow_1_right.png";window.exportProgress=function t(){let l={};l.shapeSids=c,l.shapes=[];for(let i=0;i<p.shapes.length;i++){let a=p.shapes[i];l.shapes.push({name:a.name,sid:a.sid,level:a.level,slot:a.slot})}l.weapons=[];for(let o=0;o<p.weapons.length;o++){let n=p.weapons[o];l.weapons.push({name:n.name,owner:n.owner,slot:n.slot,level:n.level})}l.modules=[];for(let s=0;s<p.modules.length;s++){let r=p.modules[s];l.modules.push({name:r.name,owner:r.owner,slot:r.slot,level:r.level})}l.chips=[];for(let $=0;$<eL.length;$++){let d=eL[$];l.chips.push({name:d.name,owner:d.owner,slot:d.slot,level:d.level,NEW:2})}l.tokens=JSON.stringify(p.tokens),l.ULIMATEXP=p.ULIMATEXP,l.slotData=JSON.stringify(e),l.league=p.league,l.keys=p.keys,l.sliver=p.sliver,l.gold=p.gold,l.workshopPoints=p.workshopPoints,l.workshopQueue=JSON.stringify(z),l.operationData=JSON.stringify(tt),l.tasks=JSON.stringify(H),l=JSON.stringify(l);let g=new Blob([l],{type:"text/plain"}),h=window.URL.createObjectURL(g),m=document.createElement("a");m.href=h,m.download="PROGRESS.txt",m.click(),window.URL.revokeObjectURL(h)};var L=!0;document.getElementById("settingsToggle").onclick=function(){document.getElementById("sideDisplay").innerHTML=`
        <div style="width: 100%; text-align: center; font-size: 40px;">
        Settings
        </div>
        <hr>
        <div style="margin-left: 10px;">
        <button onclick="exportProgress()">Export</button><br>
        <input id="importFile" type="file" style="width: 180px;" accept=".txt"> <button id="import">Import</button><br><br>
        <button id="resetProgress">Reset Progress</button> <input type="checkbox" id="confirmasd2asd"> <input type="checkbox" id="confirma123sdasd"> <input type="checkbox" id="confirmasdasd"><br>
        ^^^THE CHECKBOXES NEXT TO THIS BUTTON ARE CONFIRMATION CHECKBOXES.<br>
        IF THEY'RE ALL CHECKED AND YOU CLICK THE BUTTON, YOUR PROGRESS IS INSTANTLY RESET.<br>
        NO 2ND CONFIRMATION WHEN YOU CLICK ON THE BUTTON!<br><br>
        <h2>Controls</h2>
        - WASD to move<br>
        - R to quick reload, but you move 2 times slower<br>
        - E to use shape's special ability<br>
        - SPACE to shoot weapons<br>
        - On hanger, 1-8 quick select slot<br>
        - Enter to quick upgrade<br>
        - arrows interact with shop<br>
        - SPACE while in lootbox animation, would speed it up<br><br>
        <h2>Visual Settings</h2>
        Damage/Healing Text: <input type="checkbox" id="dmghealtext" checked>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `,document.getElementById("hangerUI").style.display="none",document.getElementById("backButton").onclick=function(){document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block"},document.getElementById("dmghealtext").checked=L,document.getElementById("dmghealtext").onclick=function(){L=!L},document.getElementById("resetProgress").onclick=function(){document.getElementById("confirma123sdasd").checked&&document.getElementById("confirmasd2asd").checked&&document.getElementById("confirmasdasd").checked&&(tt={xp:0,currentIndex:0,data:[]},z=[],H=[],eL=[],c=0,e=[{unlocked:!0,used:!0,cost:0},{unlocked:!1,used:!1,cost:50},{unlocked:!1,used:!1,cost:200},{unlocked:!1,used:!1,cost:1e3},{unlocked:!1,used:!1,cost:1e3},{unlocked:!1,used:!1,cost:2e3},{unlocked:!1,used:!1,cost:2e3},{unlocked:!1,used:!1,cost:3e3}],0==(p={sliver:2e5,gold:250,keys:1e3,shapes:[],weapons:[],modules:[],gameMode:-1,ULIMATEXP:0,workshopPoints:0,league:0,tokens:{mk1:0,mk2:0,mk3:0}}).shapes.length&&(p.shapes.push(new m(f[0],0)),p.weapons.push(new b(_[0],0,0)),p.weapons.push(new b(_[0],0,1))),te(),I(),to(),setTimeout(()=>{location.reload()},250))},document.getElementById("import").onclick=function(){let t=document.getElementById("importFile");if(t.files.length>0){let l=t.files[0];if(l.name.endsWith(".txt")){let i=new FileReader;i.onload=function(t){let l=t.target.result;!function t(l){p.shapes=[],p.weapons=[],p.modules=[],eL=[];for(let i=0;i<l.shapes.length;i++){let a=l.shapes[i];if(a)try{let o=c,n=f.find(e=>a.name==e.name),s=new m(n,a.slot);s.slot=a.slot,a.slot&&(e[a.slot].unlocked=!0,e[a.slot].used=!0),s.sid=a.sid,(void 0==s.sid||null==s.sid)&&(s.sid=o);for(let r=0;r<a.level-1;r++)e4(s,!0);p.shapes.push(s)}catch($){}}for(let d=0;d<l.weapons.length;d++){let g=l.weapons[d];if(g){let h=_.find(e=>g.name==e.name),u=new b(h,g.owner,g.slot);p.shapes.find(e=>e.sid==g.owner)||(u.owner=null,u.slot=null);for(let k=0;k<g.level-1;k++)J(u,null,null,!0);p.weapons.push(u)}}for(let E=0;E<l.modules.length;E++){let D=l.modules[E];if(D){let B=w.find(e=>D.name==e.name),T=new v(B,D.owner,D.slot);p.shapes.find(e=>e.sid==D.owner)||(T.owner=null,T.slot=null);for(let S=0;S<D.level-1;S++)ea(T,null,null,!0);p.modules.push(T)}}for(let A=0;A<l.chips.length;A++){let M=l.chips[A];if(M&&M.NEW&&2==M.NEW)try{let P=eP.find(e=>M.name==e.name),L=new eM(P,M.owner,M.slot);p.shapes.find(e=>e.sid==M.owner)||(L.owner=null,L.slot=null);for(let R=0;R<M.level;R++)eH(L);L.slot>=8||eL.push(L)}catch(C){eL=[]}}null!=l.workshopPoints&&(p.workshopPoints=l.workshopPoints),l.tokens&&(p.tokens=JSON.parse(l.tokens)),l.workshopQueue&&(z=JSON.parse(l.workshopQueue)),l.slotData&&(l.slotData=JSON.parse(l.slotData),e=[...l.slotData]),l.league?p.league=l.league:p.league=0,l.tasks&&(H=JSON.parse(l.tasks)),l.operationData&&((tt=JSON.parse(l.operationData)).data.find(e=>"token 1"==e.type)||(ta(),tl(1e4))),l.ULIMATEXP||null==l.ULIMATEXP||isNaN(l.ULIMATEXP)||(p.ULIMATEXP=l.ULIMATEXP),p.keys=l.keys,p.sliver=l.sliver,p.gold=l.gold,I(),l.shapeSids&&"NaN"!=l.shapeSids&&(c=l.shapeSids),te(),to()}(l=JSON.parse(l=l.toString()))},i.readAsText(l)}}else alert("No file selected.")}};var H=[],R=[{type:"gold",howGain:"dmg",XPNEEDED:1e6,reward:60,description:"Deal 1.0M Damage"},{type:"gold",howGain:"kills",XPNEEDED:50,reward:30,description:"Get 50 Kills"},{type:"gold",howGain:"dmg",XPNEEDED:1e7,reward:300,description:"Deal 10.0M Damage"},{type:"gold",howGain:"kills",XPNEEDED:5e3,reward:1e4,description:"Get 5.0K Kills"},{type:"gold",howGain:"dmg",XPNEEDED:5e8,reward:1e4,description:"Deal 500.0M Damage"},{type:"gold",howGain:"beacon",XPNEEDED:5,reward:15,description:"Capture 5 Beacons"},{type:"gold",howGain:"beacon",XPNEEDED:100,reward:5e3,description:"Capture 100 Beacons"},{type:"workshopPoints",howGain:"8 boss",XPNEEDED:100,reward:15e3,description:"Kill Level 8 Boss 100 Times"},{type:"workshopPoints",howGain:"8 boss",XPNEEDED:10,reward:250,description:"Kill Level 8 Boss 10 Times"},{type:"gold",howGain:"beacon",XPNEEDED:10,reward:250,description:"Capture 10 Beacons"}];class C{constructor(e){this.type=e.type,this.howGain=e.howGain,this.xp=0,this.maxxp=e.XPNEEDED,this.desc=e.description;let t=Math.max(1,1+.5*(p.league/500));this.reward=Math.round(e.reward*t)}}function O(e,t){for(let l=0;l<H.length;l++){let i=H[l];i.howGain==e&&(i.xp+=t)}}function N(){if(!(H.length>=10))for(let e=0;e<2&&!(H.length>=10);e++){let t=R[Math.floor(R.length*Math.random())];H.push(new C(t))}}document.getElementById("offersToggles").onclick=function(){if(H.length){document.getElementById("sideDisplay").innerHTML=`
            <div style="width: 100%; font-size: 40px; text-align: center;">
            Tasks
            </div>
            <hr>
            `;for(let e=0;e<H.length;e++){let t=H[e],l="gold"==t.type?eN:"./images/icons/workshop.png",i=window.innerWidth-80;document.getElementById("sideDisplay").innerHTML+=`
                <div style="position: absolute; width: ${i}px; height: 100px; top: ${80+140*e}px; left: 40px; border-radius: 4px; background-color: rgb(0, 0, 0, .2);">
                <div style="position: absolute; width: 100px; height: 100px; left: 0px; top: 0px; background-size: 100px 100px; background-image: url('${l}')">
                </div>
                <div style="position: absolute; font-size: 24px; left: 5px; bottom: 0px;">
                <strong>${E(t.reward)}</strong>
                </div>
                <div style="position: absolute; height: 11px; width: ${i-305}px; font-size: 16px; left: 105px; top: 39px; background-color: #808080;">
                <div style="position: absolute; height: 100%; width: ${100*Math.min(1,t.xp/t.maxxp)}%; font-size: 16px; left: 0px; top: 0px; background-color: #0f0;">
                </div>
                <div style="position: absolute; color: #fff; top: -4px; left: 0px; width: 100%; text-align: center; margin: 0px; padding: 0; font-size: 14px;">
                ${E(t.xp)}/${E(t.maxxp)}
                </div>
                </div>
                <div style="position: absolute; font-size: 16px; left: 105px; top: 61px;">
                ${t.desc}
                </div>
                <div id="collectTask${e}" style="position: absolute; font-size: 35px; text-align: center; cursor: pointer; top: 25px; right: 10px; width: 180px; border-radius: 4px; height: 50px; background-color: #0f0;">
                Collect
                </div>
                </div>
                `}document.getElementById("sideDisplay").innerHTML+=`
            <div style="position: absolute; top: ${100+140*H.length}px; opacity: 0; pointer-events: none;">
            s
            </div>
            <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 40px; top: ${50+140*H.length}px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
            BACK
            </div>
            `,document.getElementById("hangerUI").style.display="none",document.getElementById("backButton").onclick=function(){document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block"};for(let a=0;a<H.length;a++){let o=H[a];o.xp<o.maxxp?(document.getElementById(`collectTask${a}`).style.cursor=null,document.getElementById(`collectTask${a}`).style.backgroundColor="#808080"):document.getElementById(`collectTask${a}`).onclick=function(){I(o.type,o.reward),H.splice(a,1),document.getElementById("offersToggles").click()}}}else N(),document.getElementById("offersToggles").click()};var z=[];function F(){for(let e=0;e<z.length;e++)z[e].duration=Math.max(z[e].duration-500,0);if(document.getElementById("productiondisplay")){document.getElementById("productiondisplay").innerHTML="";for(let t=0;t<z.length;t++){let l="";if(z[t].duration<=6e4)l=`0:${z[t].duration<=1e4?"0":""}${ee(z[t].duration/1e3)}`;else{let i=z[t].duration/1e3/60,a=(i=i.toString().split("."))[0],o=60*parseFloat("0."+i[1]);l=`${a}:${o<=10?"0":""}${ee(o)}`}document.getElementById("productiondisplay").innerHTML+=`
                <div id="collect${t}" style="position: relative; ${z[t].duration<=0?"cursor: pointer;":""} width: 100%; height: 150px; background-color: ${z[t].duration<=0?t%2==0?"rgb(0, 255, 0, 0.4)":"rgb(0, 255, 0, 0.6)":t%2==0?"rgb(255, 255, 255, .5)":"rgb(0, 0, 0, 0.2)"}">
                <div style="width: 150px; height: 150px; background-size: 150px 150px; background-image: url('./images/icons/workshop.png')">
                </div>
                <div style="position: absolute; top: 20px; left: 150px; font-size: 25px;">
                Workshop Points (${z[t].amount})
                </div>
                <div style="position: absolute; top: 90px; left: 150px;">
                ${z[t].duration<=0?"Collect":`Time: ${l}`}
                </div>
                </div>
                `}for(let n=0;n<z.length;n++)z[n].duration<=0?document.getElementById(`collect${n}`).onclick=function(){I("workshopPoints",z[n].amount),z.splice(n,1),F()}:document.getElementById(`collect${n}`).onclick=null}to()}document.getElementById("workshopToggle").onclick=function(){document.getElementById("sideDisplay").innerHTML=`
        <div style="width: 100%; font-size: 40px; text-align: center;">
        Workshop
        </div>
        <hr>
        <div id="productiondisplay" style="position: absolute; top: ${window.innerHeight/2-300}px; left: ${window.innerWidth/2-395}; border-radius: 6px; width: 375px; height: 600px; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.2);">
        </div>
        <div id="produceWP" style="position: absolute; cursor: pointer; top: 116.5px; left: ${window.innerWidth/2+20}; border-radius: 6px; width: 325px; height: 150px; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.2);">
        <div style="width: 150px; height: 150px; background-size: 150px 150px; background-image: url('./images/icons/workshop.png')">
        </div>
        <div style="position: absolute; top: 20px; left: 150px; font-size: 25px;">
        Workshop Points (120)
        </div>
        <div style="position: absolute; top: 90px; left: 150px;">
        Production Cost: 350.0K Silver
        </div>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `,document.getElementById("hangerUI").style.display="none",document.getElementById("backButton").onclick=function(){document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block"},F(),document.getElementById("produceWP").onclick=function(){p.sliver-35e4>=0&&z.length<30&&(I("sliver",-35e4),z.push({amount:120,duration:window.isDev?500:6e5*Math.max(1,Math.floor(z.length/10)+1)}),F())}},document.getElementById("historyToggle").onclick=function(){document.getElementById("hangerUI").style.display="none",document.getElementById("sideDisplay").innerHTML=l,document.getElementById("sideDisplay").innerHTML+=`
        <div id="backButton" style="position: fixed; cursor: pointer; text-align: center; font-size: 40px; color: #fff; right: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `,document.getElementById("backButton").onclick=function(){document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML=""}};var W={};function U(e){let t=W[e.specialOf];return t||((t=new Image).src=e.specialOf,t.onload=function(){t.isLoaded=!0},W[e.specialOf]=t),t}function G(e,t){let l=A[e.name];if(!l){let i=document.createElement("canvas");i.width=i.height=e.scale*(t?3:1.2),i.style.width=i.style.height=e.scale*(t?3:1.2)+"px";let a=i.getContext("2d");a.globalAlpha=1,a.translate(i.width/2,i.height/2),e.name.includes("Circle")?S(0,0,e.scale,a,!1,!1,e.color,e.borderColor||"#000"):e.name.includes("Pentagon")?(a.rotate(Math.PI/2),a.strokeStyle=e.borderColor||"#000",a.lineWidth=12,a.fillStyle=e.color,T(a,2.5,e.scale,e.scale),a.stroke(),a.fill()):e.name.includes("Hexagon")?(a.rotate(Math.PI/2),a.strokeStyle="#000",a.lineWidth=12,a.fillStyle=e.color,T(a,3,e.scale,e.scale),a.stroke(),a.fill()):e.name.includes("Heptagon")&&(a.rotate(Math.PI/2),a.strokeStyle="#000",a.lineWidth=12,a.fillStyle=e.color,T(a,3.5,e.scale,e.scale),a.stroke(),a.fill()),t||(A[e.name]=i),l=i}return l}var V={};function K(e,t){let l=V[e.name];return l||((l=new Image).src=e.imageSource,l.onload=function(){l.isLoaded=!0},t||(V[e.name]=l)),l}var Y={};function X(e,t){let l=Y[e.name];return l||((l=new Image).src=e.imageSource,l.onload=function(){l.isLoaded=!0},t||(Y[e.name]=l)),l}let j=b;function q(e,t,l,i,a,o){let n=e[t];if(!n)return;let s=_.find(e=>n.name==e.name),r=new j(s);for(let $=0;$<n.level-1;$++)J(r,null,null,!0);let d=t;document.getElementById("WEAPONdisplay").innerHTML=`
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${eQ(r)});">
        </div>
        <div id="weaponImage" style="position: absolute; top: ${window.innerHeight/2-187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        </div>
        <div style="display: ${"main"==n.amount?"none":"block"};position: absolute; text-align: center; top: ${window.innerHeight/2+187.5}px; left: ${window.innerWidth/2-187.5}px; height: 100px; width: 375px;">
        In Stock: ${o?n.amount:p.weapons.filter(e=>e.name==n.name).length}
        </div>
        <div style="position: absolute; top: ${window.innerHeight/2-250}px; left: ${window.innerWidth/2-522.5}px; width: 325px; height: 500px; background-color: rgb(0, 0, 0, .2); border: solid; border-color: #fff; border-radius: 6px;">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${eQ(r)};">
        ${r.level>=13?1:r.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${r.name}
        ${r.level>=13?`<span style="color: #${tF(r.level)};">${t7(r.level)}</span>`:""}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${r.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${r.dmg?`Damage: ${E(r.dmg)}<br>`:""}
        ${r.range?`Range: ${r.range} PX<br>`:""}
        ${r.reload>0?`Reload: ${r.reload*(r.continuousReload?r.ammo/r.ammoEachReloadTick:1)/1e3} sec<br>`:""}
        ${r.aoeRange?"AOE Range: "+r.aoeRange+" PX<br>":""}
        ${r.dotDamage?`DOT Damage: ${E(r.dotDamage)}<br>`:""}
        ${r.effectIncrease?`Effect Accumulation: ${r.effectIncrease} (${ee(r.effectIncrease/D[r.effectIncreaseName]*r.ammo*100)}% Max Acc.)<br>`:""}
        ${r.fireRateDecrease+1>=0?`Fire Rate Decrease: ${r.fireRateDecrease} ms<br>`:""}
        ${r.baseShielding?`Shield Durability: ${E(r.baseShielding.health)}<br>`:""}
        ${r.defenseBypass?`Defense Mitigation: ${100*r.defenseBypass}%<br>`:""}
        ${r.healBackOnDamage?`On Damage Heal Back: ${100*r.healBackOnDamage}%<br>`:""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="Unequip" style="display: ${"main"==n.amount?"block":"none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #f00;">
        UNEQUIP
        </div>
        <div id="Equip" style="display: ${"main"==n.amount?"none":o?"block":"none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        EQUIP
        </div>
        <div id="Upgrade" style="position: absolute; display: ${o?"block":"none"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        UPGRADE
        </div>
        <div id="buyWeapon" style="position: absolute; display: ${o?"none":"block"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        BUY
        </div>
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div style="position: absolute; bottom: 100px; left: 12.5%; width: 75%; height: 6px; background-color: #fff; border-radius: 4px; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: ${1/e.length*100*d}%; width: ${1/e.length*100}%; height: 100%; background-color: #00dbcd;">
        </div>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        <div id="buyMenu" style="position: absolute; display: none; color: #fff; top: ${window.innerHeight/2-112.5}px; left: ${window.innerWidth/2-212.5}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        `;let g=K(r,!0);g.style="width: 100%; height: 100%;",document.getElementById("weaponImage").appendChild(g),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),e[t].dontSell&&(document.getElementById("buyWeapon").style.display="none"),document.getElementById("Unequip").onclick=function(){let e=p.weapons.find(e=>i.sid==e.owner&&e.slot==a);e.slot=null,e.owner=null,i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("Equip").onclick=function(){let e=p.weapons.find(e=>e.name==n.name&&null==e.owner&&e.level==n.level),t=p.weapons.find(e=>i.sid==e.owner&&e.slot==a);t&&(t.owner=null,t.slot=null),e.owner=i.sid,e.slot=a,i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("Upgrade").onclick=function(){document.body.appendChild(document.getElementById("moneyDisplay"));let t=p.weapons.find(e=>e.name==n.name&&("main"!=n.amount||i.sid==e.owner&&e.slot==a)&&e.level==n.level),l=.75*window.innerWidth;document.getElementById("upgradeMenu").style.display="block",document.getElementById("upgradeMenu").innerHTML=`
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14,13].includes(t.level)?`${t.name} <span style="color: ${13==t.level?"#0f0":"#ffff00"};">${13==t.level?"MK2":"MK3"}</span>`:`Lvl ${t.level} ${t.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${Z("damage",t)}
            ${Z("dot damage",t)}
            ${Z("effect increase",t)}
            ${Z("fireRateDecreaseData",t)}
            ${Z("shield hp",t)}
            ${Z("defenseBypass",t)}
            ${Z("ondamageheal",t)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${l/2-100}px; bottom: 10px; background-color: ${h[t.tier].weapons[t.level]?"#00ff00":[12,13].includes(t.level)?"#ffff00":"#808080"};">
            <div style="color: ${[12,13].includes(t.level)?"f00":"#fff"}; width: 100%; text-align: center; font-size: ${h[t.tier].weapons[t.level]?"24":[12,13].includes(t.level)?"24":"40"}px; margin-top: ${h[t.tier].weapons[t.level]?"5":[12,13].includes(t.level)?"5":"10"}px;">${h[t.tier].weapons[t.level]?"UPGRADE":[12,13].includes(t.level)?"ENHANCE":"MAXED"}</div>
            <div style="color: ${[12,13].includes(t.level)?"f00":"#fff"}; display: ${h[t.tier].weapons[t.level]?"block":[12,13].includes(t.level)?"block":"none"}; width: 100%; text-align: center; font-size: 12px;">${[12,13].includes(t.level)?`${E(t.enhanceCost*(13==t.level?48:1))} Gold`:`${E(h[t.tier].weapons[t.level])} Sliver`}</div>
            </div>
            `;let s=K(t,!0);s.style="width: 280px; height: 280px;",document.getElementById("upgradeMenu").appendChild(s),document.getElementById("leaveUpgrade").onclick=function(){document.getElementById("upgradeMenu").style.display="none",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))},document.getElementById("UPGRADE").onclick=function(){if(h[t.tier].weapons[t.level]||12==t.level||13==t.level){if(t.level>=12)p.gold-t.enhanceCost*(13==t.level?48:1)>=0&&(I("gold",-(t.enhanceCost*(13==t.level?48:1))),J(t,d,e,!1,!1,i,a,o));else if(p.sliver-h[t.tier].weapons[t.level]>=0)I("sliver",-h[t.tier].weapons[t.level]),J(t,d,e,!1,!1,i,a,o);else if(p.gold>0){let l=h[t.tier].weapons[t.level]-p.sliver,n=Math.round(l/1250);if(p.gold-n>=0){let s=prompt(`Not Enough Silver!
You Need ${E(l)} Silver!
Use ${E(n)} Gold to make up for the amount of silver missing!
Type "y" or "yes" to confirm.`);s&&("yes"==(s=s.toLocaleLowerCase())||"y"==s)&&(I("sliver",-p.sliver),I("gold",-n),J(t,d,e,!1,!1,i,a,o))}}}}},document.getElementById("backButton").onclick=function(){i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("buyWeapon").onclick=function(){document.body.appendChild(document.getElementById("moneyDisplay")),document.getElementById("buyMenu").style.display="block",document.getElementById("storeButton").style.display="none",document.getElementById("inventoryButton").style.display="none";let t=e[d];document.getElementById("buyMenu").innerHTML=`
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Purchase
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: 60px; left: 150px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${ez}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(t.cost.sliver)}
            </div>
            </div>
    
            <div style="position: absolute; top: 60px; left: 12.5px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${eN}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
            ${E(t.cost.gold)}
            </div>
            </div>
    
            <div style="position: absolute; top: 60px; left: 287.5px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(t.cost.workshopPoints||0)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: 137.5px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `,document.getElementById("confirm").onclick=function(){let t=e[d];if(p.sliver-t.cost.sliver>=0&&p.gold-t.cost.gold>=0&&(!t.cost.workshopPoints||p.workshopPoints-t.cost.workshopPoints>=0)){I("sliver",-t.cost.sliver),I("gold",-t.cost.gold),I("workshopPoints",-(t.cost.workshopPoints||0));let l=p.weapons.find(e=>e.owner==i.sid&&e.slot==a);l&&(l.slot=null,l.owner=null),p.weapons.push(new j(t,i.sid,a)),i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))}},document.getElementById("lo____l").onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),document.getElementById("buyMenu").style.display="none",document.getElementById("storeButton").style.display="block",document.getElementById("inventoryButton").style.display="block"}},l&&document.getElementById("Upgrade").click()}function Z(e,t){let l="",i=_.find(e=>e.name==t.name),a=window.innerWidth>=1442?500:window.innerWidth>=1374?450:window.innerWidth>=1311?400:window.innerWidth>=1245?350:window.innerWidth>=1182?300:250;if(a+=281.25,"damage"==e&&i.damageData){let o=i.damageData.base;for(let n=0;n<i.damageData.level.length;n++)o+=i.damageData.level[n];let s=o,r=o*=1.2;o*=1.2;let $;l=`
            <div style="position: relative; width: ${a}px;">
            Damage: ${E(t.dmg)}
            <div style="display: ${i.damageData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(o-r):12==t.level?E(r-s):E(i.damageData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.dmg+(13==t.level?o-r:12==t.level?r-s:i.damageData.level[t.level]))/o*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.dmg/o*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("dot damage"==e&&i.dotData){let d=i.dotData.base;for(let p=0;p<i.dotData.level.length;p++)d+=i.dotData.level[p];let g=d,h=d*=1.2;d*=1.2;let c;l=`
            <div style="position: relative; width: ${a}px;">
            DOT Damage: ${E(t.dotDamage)}
            <div style="display: ${i.dotData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(d-h):12==t.level?E(h-g):E(i.dotData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.dotDamage+(13==t.level?d-h:12==t.level?h-g:i.dotData.level[t.level]))/d*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.dotDamage/d*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("effect increase"==e&&i.effectIncreaseData){let m=i.effectIncreaseData.base;for(let f=0;f<i.effectIncreaseData.level.length;f++)m+=i.effectIncreaseData.level[f];let u=t.effectIncrease/m*a/a,b=(t.effectIncrease+i.effectIncreaseData.level[t.level])/m*a/a,v;l=`
            <div style="position: relative; width: ${a}px;">
            Effect Accumulation: ${E(t.effectIncrease)} (${ee(t.effectIncrease/D[t.effectIncreaseName]*t.ammo*100)}% Max Accumulation)
            <div style="display: ${i.effectIncreaseData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${E(i.effectIncreaseData.level[t.level])} (${ee((i.effectIncreaseData.level[t.level]||0)/D[t.effectIncreaseName]*t.ammo*100)}% Max Accumulation)
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*b}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*u}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("fireRateDecreaseData"==e&&i.fireRateDecreaseData){let w=i.fireRateDecreaseData.base;for(let k=0;k<i.fireRateDecreaseData.level.length;k++)w+=i.fireRateDecreaseData.level[k];let I;l=`
            <div style="position: relative; width: ${a}px;">
            Fire Rate Decrease: ${E(t.fireRateDecrease)} ms
            <div style="display: ${i.fireRateDecreaseData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${E(i.fireRateDecreaseData.level[t.level])} ms
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.fireRateDecrease+i.fireRateDecreaseData.level[t.level])/w*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.fireRateDecrease/w*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("shield hp"==e&&t.baseShielding){let B=i.shieldData.base;for(let T=0;T<i.shieldData.level.length;T++)B+=i.shieldData.level[T];let S=B,A=B*=1.2;B*=1.5;let M;l=`
            <div style="position: relative; width: ${a}px;">
            Shield Durability: ${E(t.baseShielding.health)}
            <div style="display: ${i.shieldData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(B-A):12==t.level?E(A-S):E(i.shieldData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.baseShielding.health+(13==t.level?B-A:12==t.level?A-S:i.shieldData.level[t.level]))/B*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.baseShielding.health/B*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("defenseBypass"==e&&i.defenseBypassData){let P=i.defenseBypassData.base;for(let L=0;L<i.defenseBypassData.level.length;L++)P+=i.defenseBypassData.level[L];let H;l=`
            <div style="position: relative; width: ${a}px;">
            Defense Mitigation: ${100*t.defenseBypass}%
            <div style="display: ${i.defenseBypassData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.defenseBypassData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.defenseBypass+i.defenseBypassData.level[t.level])/P*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.defenseBypass/P*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("ondamageheal"==e&&i.healBackOnDamageData){let R=i.healBackOnDamageData.base;for(let C=0;C<i.healBackOnDamageData.level.length;C++)R+=i.healBackOnDamageData.level[C];let O;l=`
            <div style="position: relative; width: ${a}px;">
            On Damage: Heal Back: ${100*t.healBackOnDamage}%
            <div style="display: ${i.healBackOnDamageData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.healBackOnDamageData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.healBackOnDamage+i.healBackOnDamageData.level[t.level])/R*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.healBackOnDamage/R*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}return l}function J(e,t,l,i,a,o,n,s){let r=_.find(t=>t.name==e.name);if(r.damageData){if(e.level<12){e.sellPrice+=.75*h[e.tier].weapons[e.level];let $=r.damageData.level[e.level];e.dmg+=$}else e.dmg*=1.2,e.dmg=Math.round(e.dmg)}if(r.dotData){if(e.level<12){let d=r.dotData.level[e.level];e.dotDamage+=d}else e.dotDamage*=1.2,e.dotDamage=Math.round(e.dotDamage)}if(e.baseShielding){if(e.level<12){let p=r.shieldData.level[e.level];e.baseShielding.health+=p}else e.baseShielding.health*=13==e.level?1.5:1.2}if(r.fireRateDecreaseData&&e.level<12){let g=r.fireRateDecreaseData.level[e.level];e.fireRateDecrease+=g}if(r.healBackOnDamageData&&e.level<12){let c=r.healBackOnDamageData.level[e.level];e.healBackOnDamage+=c,e.healBackOnDamage*=100,e.healBackOnDamage=Math.round(e.healBackOnDamage),e.healBackOnDamage/=100}if(r.defenseBypassData&&e.level<12){let m=r.defenseBypassData.level[e.level];e.defenseBypass+=m,e.defenseBypass*=100,e.defenseBypass=Math.round(e.defenseBypass),e.defenseBypass/=100}if(r.effectIncreaseData&&e.level<12){let f=r.effectIncreaseData.level[e.level];e.effectIncrease+=f}e.level++,i||(l[t].level++,q(l,t,!0,o,n,s)),i||te(),i||to()}function Q(e,t,l){{let i=[];if("Light"==e||"Heavy"==e){let a=p.weapons.filter(t=>null==t.owner&&t.type==e).sort((e,t)=>t.level-e.level).sort((e,t)=>t.tier-e.tier);for(let o=0;o<a.length;o++){let n=a[o];if(i.find(e=>e.name==n.name&&e.level==n.level)){let s=i.findIndex(e=>e.name==n.name&&e.level==n.level);i[s].amount++}else i.push({name:n.name,level:n.level,amount:1})}}else{let r=p.weapons.filter(t=>null==t.owner&&t.type==e.type).sort((e,t)=>t.level-e.level).sort((e,t)=>t.tier-e.tier);for(let $=0;$<r.length;$++){let d=r[$];if(i.find(e=>e.name==d.name&&e.level==d.level)){let g=i.findIndex(e=>e.name==d.name&&e.level==d.level);i[g].amount++}else i.push({name:d.name,level:d.level,amount:1})}}e&&"Light"!=e&&"Heavy"!=e&&i.unshift({name:e.name,level:e.level,amount:"main"});let h=0;document.getElementById("sideDisplay").innerHTML=`
            <div id="WEAPONdisplay" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">
            </div>
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${M}');">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${P}');">
            </div>
            <div id="inventoryButton" style="position: absolute; text-align: center; font-size: 25px; color: #000; left: ${window.innerWidth/2-165}px; top: 30px; border-radius: 6px; height: 42.5px; padding-top: 7.5px; width: 150px; background-color: rgb(255, 255, 255, .6);">
            INVENTORY
            </div>
            <div id="storeButton" style="position: absolute; text-align: center; font-size: 35px; cursor: pointer; color: #fff; left: ${window.innerWidth/2+20}px; top: 30px; border-radius: 6px; height: 50px; width: 150px; background-color: rgb(0, 0, 0, .4);">
            STORE
            </div>
            `;let c=!0,m=_.filter(t=>"string"==typeof e?t.type==e:t.type==e.type),f=!1;document.getElementById("inventoryButton").onclick=function(){f||(this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .6)",document.getElementById("goToPre").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("storeButton").style.cursor="pointer",document.getElementById("storeButton").style.color="#fff",document.getElementById("storeButton").style.backgroundColor="rgb(0, 0, 0, .4)",q((c=!0,i),h=0,!1,t,l,c))},document.getElementById("storeButton").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .6)",document.getElementById("goToPre").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("inventoryButton").style.cursor="pointer",document.getElementById("inventoryButton").style.color="#fff",document.getElementById("inventoryButton").style.backgroundColor="rgb(0, 0, 0, .4)",h=0,q((c=!1,m.sort((e,t)=>e.tier-t.tier)),h,!1,t,l,c)},0==i.length&&(document.getElementById("storeButton").click(),document.getElementById("inventoryButton").style.cursor=null,f=!0),q(i,0,!1,t,l,c),(c?i[h-1]:m[h-1])||(document.getElementById("goToPre").style.display="none"),document.getElementById("goToPre").onclick=function(){h--,q(c?i:m.sort((e,t)=>e.tier-t.tier),h,!1,t,l,c),(c?i[h-1]:m[h-1])?document.getElementById("goToPre").style.display="block":document.getElementById("goToPre").style.display="none",(c?i[h+1]:m[h+1])?document.getElementById("goToNext").style.display="block":document.getElementById("goToNext").style.display="none"},(c?i[h+1]:m[h+1])||(document.getElementById("goToNext").style.display="none"),document.getElementById("goToNext").onclick=function(){h++,q(c?i:m.sort((e,t)=>e.tier-t.tier),h,!1,t,l,c),(c?i[h+1]:m[h+1])?document.getElementById("goToNext").style.display="block":document.getElementById("goToNext").style.display="none",(c?i[h-1]:m[h-1])?document.getElementById("goToPre").style.display="block":document.getElementById("goToPre").style.display="none"}}}function ee(e){let t=e.toString();return t.includes(".")?t.split(".")[0]:t}function et(e,t){let l="",i=w.find(e=>e.name==t.name),a=window.innerWidth>=1442?500:window.innerWidth>=1374?450:window.innerWidth>=1311?400:window.innerWidth>=1245?350:window.innerWidth>=1182?300:250;if(a+=281.25,"healthIncrease"==e&&i.healthIncreaseData){let o=Math.abs(i.healthIncreaseData.base);for(let n=0;n<i.healthIncreaseData.level.length;n++)o+=Math.abs(i.healthIncreaseData.level[n]);let s;l=`
            <div style="position: relative; width: ${a}px;">
            Health Increase: ${ee(100*t.healthIncrease)}%
            <div style="display: ${Math.abs(i.healthIncreaseData.level[t.level])?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            ${i.healthIncreaseData.level[t.level]>=0?"+":""}${ee(100*i.healthIncreaseData.level[t.level])}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((Math.abs(t.healthIncrease)+Math.abs(i.healthIncreaseData.level[t.level]))/o*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(Math.abs(t.healthIncrease)/o*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("selfFixRepair"==e&&i.selfFixRepairData){let r=i.selfFixRepairData.base;for(let $=0;$<i.selfFixRepairData.level.length;$++)r+=i.selfFixRepairData.level[$];let d;l=`
            <div style="position: relative; width: ${a}px;">
            Repair Power: ${E(t.selfFixRepair)}/SEC
            <div style="display: ${i.selfFixRepairData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${E(i.selfFixRepairData.level[t.level])}/SEC
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.selfFixRepair+i.selfFixRepairData.level[t.level])/r*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.selfFixRepair/r*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("dmgIncrease"==e&&i.dmgIncreaseData){let p=i.dmgIncreaseData.base;for(let g=0;g<i.dmgIncreaseData.level.length;g++)p+=i.dmgIncreaseData.level[g];let h;l=`
            <div style="position: relative; width: ${a}px;">
            Damage Increase: ${ee(100*t.dmgIncrease)}%
            <div style="display: ${i.dmgIncreaseData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${ee(100*i.dmgIncreaseData.level[t.level])}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.dmgIncrease+i.dmgIncreaseData.level[t.level])/p*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.dmgIncrease/p*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("immunity"==e&&i.immunePercentData){let c=i.immunePercentData.base;for(let m=0;m<i.immunePercentData.level.length;m++)c+=i.immunePercentData.level[m];let f;l=`
            <div style="position: relative; width: ${a}px;">
            Immunity Threshold: ${ee(100*t.immunePercent)}%
            <div style="display: ${i.immunePercentData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${ee(100*i.immunePercentData.level[t.level])}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.immunePercent+i.immunePercentData.level[t.level])/c*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.immunePercent/c*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("lastingTime"==e&&i.immunePercentData){let u=i.lastingTimeData.base;for(let b=0;b<i.lastingTimeData.level.length;b++)u+=i.lastingTimeData.level[b];let _;l=`
            <div style="position: relative; width: ${a}px;">
            Effect Duration: ${t.lastingTime/1e3} sec
            <div style="display: ${i.lastingTimeData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${i.lastingTimeData.level[t.level]/1e3} sec
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.lastingTime+i.lastingTimeData.level[t.level])/u*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.lastingTime/u*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("shieldHealth"==e&&i.shieldHealthData){let v=i.shieldHealthData.base;for(let k=0;k<i.shieldHealthData.level.length;k++)v+=i.shieldHealthData.level[k];let I;l=`
            <div style="position: relative; width: ${a}px;">
            Shield Durability Increase: ${100*t.shieldHealth}%
            <div style="display: ${i.shieldHealthData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.shieldHealthData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.shieldHealth+i.shieldHealthData.level[t.level])/v*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.shieldHealth/v*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("shieldRegen"==e&&i.shieldRegenData){let D=i.shieldRegenData.base;for(let B=0;B<i.shieldRegenData.level.length;B++)D+=i.shieldRegenData.level[B];let T;l=`
            <div style="position: relative; width: ${a}px;">
            Shield Regen Increase: ${100*t.shieldRegen}%
            <div style="display: ${i.shieldRegenData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.shieldRegenData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.shieldRegen+i.shieldRegenData.level[t.level])/D*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.shieldRegen/D*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("grayDamageDecrease"==e&&i.grayDamageDecreaseData){let S=i.grayDamageDecreaseData.base;for(let A=0;A<i.grayDamageDecreaseData.level.length;A++)S+=i.grayDamageDecreaseData.level[A];let M;l=`
            <div style="position: relative; width: ${a}px;">
            Gray Damage Decrease: ${100*t.grayDamageDecrease}%
            <div style="display: ${i.grayDamageDecreaseData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.grayDamageDecreaseData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.grayDamageDecrease+i.grayDamageDecreaseData.level[t.level])/S*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.grayDamageDecrease/S*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("baseDefensePoints"==e&&i.baseDefensePointsData){let P=i.baseDefensePointsData.base;for(let L=0;L<i.baseDefensePointsData.level.length;L++)P+=i.baseDefensePointsData.level[L];let H;l=`
            <div style="position: relative; width: ${a}px;">
            Base Defense Points: ${t.baseDefensePoints}
            <div style="display: ${i.baseDefensePointsData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${i.baseDefensePointsData.level[t.level]}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.baseDefensePoints+i.baseDefensePointsData.level[t.level])/P*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.baseDefensePoints/P*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("durabilityLostAmp"==e&&i.durabilityLostAmpData){let R=i.durabilityLostAmpData.base;for(let C=0;C<i.durabilityLostAmpData.level.length;C++)R+=i.durabilityLostAmpData.level[C];let O;l=`
            <div style="position: relative; width: ${a}px;">
            Durability Requirement: ${100*t.durabilityLostAmp}%
            <div style="display: ${Math.abs(i.durabilityLostAmpData.level[t.level])?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            ${i.durabilityLostAmpData.level[t.level]>=0?"+":"-"}${100*Math.abs(i.durabilityLostAmpData.level[t.level])}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(R/(t.durabilityLostAmp+i.durabilityLostAmpData.level[t.level])*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(R/t.durabilityLostAmp*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("increasedDefensePoints"==e&&i.increasedDefensePointsData){let N=i.increasedDefensePointsData.base;for(let z=0;z<i.increasedDefensePointsData.level.length;z++)N+=i.increasedDefensePointsData.level[z];let F;l=`
            <div style="position: relative; width: ${a}px;">
            Base Defense Points: ${t.increasedDefensePoints}
            <div style="display: ${i.increasedDefensePointsData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${i.increasedDefensePointsData.level[t.level]}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.increasedDefensePoints+i.increasedDefensePointsData.level[t.level])/N*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.increasedDefensePoints/N*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("anticontrol"==e&&i.antiControlData){let W=i.antiControlData.base;for(let U=0;U<i.antiControlData.level.length;U++)W+=i.antiControlData.level[U];let G;l=`
            <div style="position: relative; width: ${a}px;">
            Effect Duration Reduction: ${ee(100*t.antiControl)}%
            <div style="display: ${i.antiControlData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${ee(100*i.antiControlData.level[t.level])}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.antiControl+i.antiControlData.level[t.level])/W*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.antiControl/W*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("nuclearAmpData"==e&&i.nuclearAmpData){let V=i.nuclearAmpData.base;for(let K=0;K<i.nuclearAmpData.level.length;K++)V+=i.nuclearAmpData.level[K];let Y;l=`
            <div style="position: relative; width: ${a}px;">
            Damage Increase: ${100*t.nuclearAmp}%
            <div style="display: ${i.nuclearAmpData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.nuclearAmpData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.nuclearAmp+i.nuclearAmpData.level[t.level])/V*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.nuclearAmp/V*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}return l}let el=v;function ei(e,t,l,i,a,o){let n=e[t];if(!n)return;let s=w.find(e=>n.name==e.name),r=new el(s);for(let $=0;$<n.level-1;$++)ea(r,null,null,!0);let d=t;document.getElementById("WEAPONdisplay").innerHTML=`
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${eQ(r)});">
        </div>
        <div id="weaponImage" style="position: absolute; top: ${window.innerHeight/2-187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        </div>
        <div style="display: ${"main"==n.amount?"none":"block"};position: absolute; text-align: center; top: ${window.innerHeight/2+187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        In Stock: ${o?n.amount:p.modules.filter(e=>e.name==n.name).length}
        </div>
        <div style="position: absolute; top: ${window.innerHeight/2-250}px; left: ${window.innerWidth/2-522.5}px; width: 325px; height: 500px; background-color: rgb(0, 0, 0, .2); border: solid; border-color: #fff; border-radius: 6px; overflow-y: scroll;">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${eQ(r)};">
        ${r.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${r.name}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${r.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${r.dmgIncrease?"Damage Increase: "+ee(100*r.dmgIncrease)+"%<br>":""}
        ${r.healthIncrease?"Durability Increase: "+ee(100*r.healthIncrease)+"%<br>":""}
        ${r.selfFixRepair?"Repair Power: "+E(r.selfFixRepair)+"/SEC<br>":""}
        ${r.immunePercent?"Immunity Threshold: "+100*r.immunePercent+"%<br>":""}
        ${r.lastingTime?"Effect Duration: "+r.lastingTime/1e3+" sec<br>":""}
        ${r.shieldHealth?"Shield Durability Increase: "+ee(100*r.shieldHealth)+"%<br>":""}
        ${r.shieldRegen?"Shield Regen Decrease: "+ee(100*r.shieldRegen)+"%<br>":""}
        ${r.grayDamageDecrease?"Gray Damage Decrease: "+ee(100*r.grayDamageDecrease)+"%<br>":""}
        ${r.durabilityLostAmp?"Durability Requirement: "+100*r.durabilityLostAmp+"%<br>":""}
        ${r.baseDefensePoints?"Base Defense Points Increase: "+r.baseDefensePoints+"<br>":""}
        ${r.increasedDefensePoints?"Defense Points (@max stacks): "+r.increasedDefensePoints+"<br>":""}
        ${r.antiControl?`Effect Duration Reduction: ${100*r.antiControl}%<br>`:""}
        ${r.nuclearAmp?`Damage Bonus: ${100*r.nuclearAmp}%<br>`:""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="Unequip" style="display: ${"main"==n.amount?"block":"none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #f00;">
        UNEQUIP
        </div>
        <div id="Equip" style="display: ${"main"==n.amount?"none":o?"block":"none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        EQUIP
        </div>
        <div id="Upgrade" style="position: absolute; display: ${o?"block":"none"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        UPGRADE
        </div>
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div style="position: absolute; bottom: 100px; left: 12.5%; width: 75%; height: 6px; background-color: #fff; border-radius: 4px; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: ${1/e.length*100*d}%; width: ${1/e.length*100}%; height: 100%; background-color: #00dbcd;">
        </div>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        <div id="buyModule" style="position: absolute; display: ${o?"none":"block"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        BUY
        </div>
        <div id="buyMenu" style="position: absolute; display: none; color: #fff; top: ${window.innerHeight/2-112.5}px; left: ${window.innerWidth/2-212.5}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        `;let g=X(r,!0);g.style="width: 100%; height: 100%;",document.getElementById("weaponImage").appendChild(g),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),e[t].dontSell&&(document.getElementById("buyModule").style.display="none"),document.getElementById("Unequip").onclick=function(){let e=p.modules.find(e=>i.sid==e.owner&&e.slot==a);e.slot=null,e.owner=null,i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("switchModule").click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("Equip").onclick=function(){let e=p.modules.find(e=>e.name==n.name&&null==e.owner&&e.level==n.level),t=p.modules.find(e=>i.sid==e.owner&&e.slot==a);t&&(t.owner=null,t.slot=null),e.owner=i.sid,e.slot=a,i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("switchModule").click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("Upgrade").onclick=function(){document.body.appendChild(document.getElementById("moneyDisplay"));let t=p.modules.find(e=>e.name==n.name&&("main"!=n.amount||i.sid==e.owner&&e.slot==a)&&e.level==n.level),l=.75*window.innerWidth;document.getElementById("upgradeMenu").style.display="block",document.getElementById("upgradeMenu").innerHTML=`
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            Lvl ${t.level} ${t.name}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${et("healthIncrease",t)}
            ${et("selfFixRepair",t)}
            ${et("dmgIncrease",t)}
            ${et("immunity",t)}
            ${et("lastingTime",t)}
            ${et("shieldHealth",t)}
            ${et("shieldRegen",t)}
            ${et("grayDamageDecrease",t)}
            ${et("baseDefensePoints",t)}
            ${et("durabilityLostAmp",t)}
            ${et("increasedDefensePoints",t)}
            ${et("anticontrol",t)}
            ${et("nuclearAmpData",t)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${l/2-100}px; bottom: 10px; background-color: ${h[t.tier].modules[t.level]?"#00ff00":"#808080"};">
            <div style="width: 100%; text-align: center; font-size: ${h[t.tier].modules[t.level]?"24":"40"}px; margin-top: ${h[t.tier].modules[t.level]?"5":"10"}px;">${h[t.tier].modules[t.level]?"UPGRADE":"MAXED"}</div>
            <div style="display: ${h[t.tier].modules[t.level]?"block":"none"}; width: 100%; text-align: center; font-size: 12px;">${E(h[t.tier].modules[t.level])} Sliver</div>
            </div>
            `;let s=X(t,!0);s.style="width: 280px; height: 280px;",document.getElementById("upgradeMenu").appendChild(s),document.getElementById("leaveUpgrade").onclick=function(){document.getElementById("upgradeMenu").style.display="none",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))},document.getElementById("UPGRADE").onclick=function(){h[t.tier].modules[t.level]&&p.sliver-h[t.tier].modules[t.level]>=0&&(I("sliver",-h[t.tier].modules[t.level]),ea(t,d,e,!1,!1,i,a,o))}},document.getElementById("backButton").onclick=function(){i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("switchModule").click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("buyModule").onclick=function(){document.body.appendChild(document.getElementById("moneyDisplay")),document.getElementById("buyMenu").style.display="block",document.getElementById("storeButton").style.display="none",document.getElementById("inventoryButton").style.display="none";let t=e[d];document.getElementById("buyMenu").innerHTML=`
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Purchase
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: 60px; left: 150px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${ez}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(t.cost.sliver)}
            </div>
            </div>
    
            <div style="position: absolute; top: 60px; left: 12.5px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${eN}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
            ${E(t.cost.gold)}
            </div>
            </div>
    
            <div style="position: absolute; top: 60px; left: 287.5px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(t.cost.workshopPoints||0)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: 137.5px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `,document.getElementById("confirm").onclick=function(){let t=e[d];if(p.sliver-t.cost.sliver>=0&&p.gold-t.cost.gold>=0&&(!t.cost.workshopPoints||p.workshopPoints-t.cost.workshopPoints>=0)){I("sliver",-t.cost.sliver),I("gold",-t.cost.gold),I("workshopPoints",-(t.cost.workshopPoints||0));let l=p.modules.find(e=>e.owner==i.sid&&e.slot==a);l&&(l.slot=null,l.owner=null),p.modules.push(new el(t,i.sid,a)),i.slot>=0&&null!==i.slot&&void 0!==i.slot?(document.getElementById("slot"+i.slot).click(),document.getElementById("switchModule").click(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))):(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))}},document.getElementById("lo____l").onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),document.getElementById("buyMenu").style.display="none",document.getElementById("storeButton").style.display="block",document.getElementById("inventoryButton").style.display="block"}},l&&document.getElementById("Upgrade").click()}function ea(e,t,l,i,a,o,n,s){let r=w.find(t=>t.name==e.name);if(r.healthIncreaseData){let $=r.healthIncreaseData.level[e.level];e.healthIncrease+=$,e.healthIncrease*=100,e.healthIncrease=Math.round(e.healthIncrease),e.healthIncrease/=100}if(r.selfFixRepairData){let d=r.selfFixRepairData.level[e.level];e.selfFixRepair+=d}if(r.nuclearAmpData){let p=r.nuclearAmpData.level[e.level];e.nuclearAmp+=p,e.nuclearAmp*=1e3,e.nuclearAmp=Math.round(e.nuclearAmp),e.nuclearAmp/=1e3}if(r.dmgIncreaseData){let g=r.dmgIncreaseData.level[e.level];e.dmgIncrease+=g,e.dmgIncrease*=100,e.dmgIncrease=Math.round(e.dmgIncrease),e.dmgIncrease/=100}if(r.immunePercentData){let h=r.immunePercentData.level[e.level];e.immunePercent+=h}if(r.lastingTimeData){let c=r.lastingTimeData.level[e.level];e.lastingTime+=c}if(r.shieldHealthData){let m=r.shieldHealthData.level[e.level];e.shieldHealth+=m}if(r.shieldRegenData){let f=r.shieldRegenData.level[e.level];e.shieldRegen+=f}if(r.grayDamageDecreaseData){let u=r.grayDamageDecreaseData.level[e.level];e.grayDamageDecrease+=u}if(r.baseDefensePointsData){let b=r.baseDefensePointsData.level[e.level];e.baseDefensePoints+=b}if(r.durabilityLostAmpData){let _=r.durabilityLostAmpData.level[e.level];e.durabilityLostAmp+=_}if(r.increasedDefensePointsData){let v=r.increasedDefensePointsData.level[e.level];e.increasedDefensePoints+=v}if(r.antiControlData){let k=r.antiControlData.level[e.level];e.antiControl+=k,e.antiControl*=100,e.antiControl=Math.round(e.antiControl),e.antiControl/=100}e.level++,i||(l[t].level++,ei(l,t,!0,o,n,s)),i||te(),i||to()}function eo(e,t,l){{let i=[],a=p.modules.filter(e=>null==e.owner).sort((e,t)=>t.level-e.level).sort((e,t)=>t.tier-e.tier);for(let o=0;o<a.length;o++){let n=a[o];if(i.find(e=>e.name==n.name&&e.level==n.level)){let s=i.findIndex(e=>e.name==n.name&&e.level==n.level);i[s].amount++}else i.push({name:n.name,level:n.level,amount:1})}e&&i.unshift({name:e.name,level:e.level,amount:"main"});let r=0;document.getElementById("sideDisplay").innerHTML=`
            <div id="WEAPONdisplay" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">
            </div>
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${M}');">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${P}');">
            </div>
            <div id="inventoryButton" style="position: absolute; text-align: center; font-size: 25px; color: #000; left: ${window.innerWidth/2-165}px; top: 30px; border-radius: 6px; height: 42.5px; padding-top: 7.5px; width: 150px; background-color: rgb(255, 255, 255, .6);">
            INVENTORY
            </div>
            <div id="storeButton" style="position: absolute; text-align: center; font-size: 35px; cursor: pointer; color: #fff; left: ${window.innerWidth/2+20}px; top: 30px; border-radius: 6px; height: 50px; width: 150px; background-color: rgb(0, 0, 0, .4);">
            STORE
            </div>
            `;let $=!0,d=!1;document.getElementById("inventoryButton").onclick=function(){d||(this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .6)",document.getElementById("goToPre").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("storeButton").style.cursor="pointer",document.getElementById("storeButton").style.color="#fff",document.getElementById("storeButton").style.backgroundColor="rgb(0, 0, 0, .4)",ei(($=!0,i),r=0,!1,t,l,$))},document.getElementById("storeButton").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .6)",document.getElementById("goToPre").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("inventoryButton").style.cursor="pointer",document.getElementById("inventoryButton").style.color="#fff",document.getElementById("inventoryButton").style.backgroundColor="rgb(0, 0, 0, .4)",r=0,ei(($=!1,w.sort((e,t)=>e.tier-t.tier)),r,!1,t,l,$)},0==i.length&&(document.getElementById("storeButton").click(),document.getElementById("inventoryButton").style.cursor=null,d=!0),ei(i,0,!1,t,l,$),($?i[r-1]:w[r-1])||(document.getElementById("goToPre").style.display="none"),document.getElementById("goToPre").onclick=function(){r--,ei($?i:w.sort((e,t)=>e.tier-t.tier),r,!1,t,l,$),($?i[r-1]:w[r-1])?document.getElementById("goToPre").style.display="block":document.getElementById("goToPre").style.display="none",($?i[r+1]:w[r+1])?document.getElementById("goToNext").style.display="block":document.getElementById("goToNext").style.display="none"},($?i[r+1]:w[r+1])||(document.getElementById("goToNext").style.display="none"),document.getElementById("goToNext").onclick=function(){r++,ei($?i:w.sort((e,t)=>e.tier-t.tier),r,!1,t,l,$),($?i[r+1]:w[r+1])?document.getElementById("goToNext").style.display="block":document.getElementById("goToNext").style.display="none",($?i[r-1]:w[r-1])?document.getElementById("goToPre").style.display="block":document.getElementById("goToPre").style.display="none"}}}document.getElementById("goToBattle").onclick=function(){to(),document.getElementById("money3Display").style.display="block",document.body.append(document.getElementById("money3Display")),document.getElementById("hangerUI").style.display="none",document.getElementById("sideDisplay").style.display="none",document.getElementById("goBackToHanger").style.display="block",document.getElementById("gameModesDisplay").style.display="block",this.style.display="none"};var en=[],es={x:0,y:0};function er(){let e=en.find(e=>"player"==e.name);if(!e)return;document.getElementById("chooseSlot").style.width=window.innerWidth/8+"px",document.getElementById("chooseSlot").innerHTML="";let t=window.innerWidth/8;for(let l=0;l<8;l++){let i=e.robots[l];i?document.getElementById("chooseSlot").innerHTML+=`
                <div id="useSlot${l}" style="${i.USED?"":"cursor: pointer;"} position: absolute; left: ${t*l}px; bottom: 0px; width: ${t}px; height: ${t}px; background-color: ${l%2?"rgb(0, 0, 0, 0.2)":"rgb(255, 255, 255, 0.2)"};">
                <div style="width: 100%; text-align: center; color: ${13==i.level?"#00f":"#000"}">
                ${i.name}
                </div>
                </div>
                `:document.getElementById("chooseSlot").innerHTML+=`
                <div style="position: absolute; left: ${t*l}px; bottom: 0px; width: ${t}px; height: ${t}px; background-color: ${l%2?"rgb(0, 0, 0, 0.2)":"rgb(255, 255, 255, 0.2)"};">
                </div>
                `}for(let a=0;a<8;a++){let o=e.robots[a];if(o){if(o.USED&&(document.getElementById(`useSlot${a}`).innerHTML+=`
                    <div style="z-index: 2; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-size: 100% 100%; background-image: url('./images/icons/cant_use_shape.png');">
                    </div>
                    `),document.getElementById(`useSlot${a}`).onclick=function(){o.USED||(g={x:1980*o.fieldOfViewMulti,y:1080*o.fieldOfViewMulti},en[0].oldIndex=a,en[0].robotIndex=a,o.USED=!0,document.getElementById("mapName").style.display="none",document.getElementById("chooseSlot").style.bottom=`${-t}px`,B())},!o.USED)for(let n=0;n<o.weapons.length;n++){let s=K(o.weapons[n],!0);s.style=`pointer-events: none; z-index: 44; position: absolute; bottom: ${n>=4?45:0}px; left: ${45*(n>=4?n-4:n)}px; width: ${t/4}px; height: ${t/4}px;`,document.getElementById(`useSlot${a}`).appendChild(s)}if(o.specialOf)document.getElementById(`useSlot${a}`).style.backgroundSize=`${t}px ${t}px`,document.getElementById(`useSlot${a}`).style.backgroundImage=`url('${o.specialOf}')`;else{let r=G(o,!0);r.style="pointer-events: none; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;",document.getElementById(`useSlot${a}`).appendChild(r)}}}}var e$=Array(100).fill(0),ed=[];document.addEventListener("keydown",e=>{if(e$[e.keyCode]=1,27!=e.keyCode||p.gameMode>=0||(document.getElementById("money3Display").style.display="none",document.getElementById("hangerUI").append(document.getElementById("money3Display")),document.getElementById("rewardAnimation").style.overflow="hidden",document.getElementById("rewardAnimation").style.pointerEvents="none",document.getElementById("rewardAnimation").style.display="none",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").style.display="block",document.getElementById("money2Display").style.display="none",document.getElementById("goBackToHanger").click()),"K"==e.key&&p.gameMode>=0&&("0px"==document.getElementById("chooseSlot").style.bottom?document.getElementById("chooseSlot").style.bottom="-200px":document.getElementById("chooseSlot").style.bottom="0px",er()),8>=parseInt(e.key)&&parseInt(e.key)>=1&&(window.isDev&&(p.league=17e3,tl(1e5),I("sliver",1e12),I("gold",1e7),I("keys",1e5),I("workshopPoints",5e4),I("token 1",5e4),I("token 2",5e4),I("token 3",5e4)),document.getElementById("slot"+(parseInt(e.key)-1))&&document.getElementById("slot"+(parseInt(e.key)-1)).click()),"ArrowLeft"==e.key&&document.getElementById("goToPre")&&(!document.getElementById("goToPre").style.display||"block"==document.getElementById("goToPre").style.display)&&document.getElementById("goToPre").click(),"ArrowRight"==e.key&&document.getElementById("goToNext")&&(!document.getElementById("goToNext").style.display||"block"==document.getElementById("goToNext").style.display)&&document.getElementById("goToNext").click(),13==e.keyCode){if(en[0]){let t=en[0].robots[en[0].robotIndex];t&&ed.push({x:t.x,y:t.y})}document.getElementById("upgradeShape")&&(document.getElementById("upgradeShape").click(),document.getElementById("UPGRADE").click()),document.getElementById("Upgrade")&&(document.getElementById("Upgrade").click(),document.getElementById("UPGRADE").click())}"/"==e.key&&p.gameMode>=0&&("none"==s.style.display?s.style.display="block":s.style.display="none")}),document.addEventListener("keyup",e=>{e$[e.keyCode]=0});var ep=[{name:"Gold Circle",weapons:{heavy:"Trickster",light:"Tamer"},modules:["God Complex Equation","God Complex Equation","God Complex Equation","God Complex Equation","Repair Amplifier","Repair Amplifier"],microchips:["Wonderworker","Tough Guy","Armor Expert","Road Hog","Cautious Pilot","Mechanic","Gunsmith","Stubborn Warrior"]},{name:"Tan Circle",weapons:{heavy:"Veyron",light:"Evora"},modules:["God Complex Equation","Repair Amplifier","Repair Amplifier","Nuclear Amplifier"],microchips:["Gunsmith","Undying Fighter","Cautious Pilot","Tough Guy","Road Hog","Armor Expert","Mechanic","Wonderworker"]},{name:"Ultimate Green Circle",weapons:{heavy:"Veyron",light:"null"},modules:["Last Stand","Repair Amplifier","Repair Amplifier","Nuclear Amplifier"],microchips:["Tough Guy","Armor Expert","Road Hog","Stubborn Warrior","Mechanic","Wonderworker","Gunsmith","Cautious Pilot"]},{name:"Ultimate Green Circle",weapons:{heavy:"Trickster",light:"null"},modules:["Last Stand","God Complex Equation","Repair Amplifier","Nuclear Amplifier"],microchips:["Tough Guy","Armor Expert","Road Hog","Stubborn Warrior","Mechanic","Wonderworker","Gunsmith","Cautious Pilot"]},{name:"Pumpkin Orange Circle",weapons:{heavy:"Veyron",light:"Evora"},modules:["God Complex Equation","God Complex Equation","God Complex Equation","Nuclear Amplifier","Repair Amplifier"],microchips:["Traditionalist","Armor Expert","Tough Guy","Cautious Pilot","Mechanic","Ghost","Grand Champion of Tanks","Road Hog"]},{name:"Cyan Pentagon",weapons:{heavy:"null",light:"Tamer"},modules:["Last Stand","Fortifier","Fortifier","Nuclear Amplifier"],microchips:["Armor Expert","Road Hog","Shield Expert","Gunsmith","Tough Guy","Cautious Pilot","Mechanic","Wonderworker"]},{name:"Gold Circle",weapons:{heavy:"Veyron",light:"Evora"},modules:["God Complex Equation","God Complex Equation","God Complex Equation","God Complex Equation","Nuclear Amplifier","Repair Amplifier"],microchips:["Mechanic","Gunsmith","Road Hog","Armor Expert","Tough Guy","Cautious Pilot","Wonderworker","Stubborn Warrior"]},{name:"White Pentagon",weapons:{heavy:"Gangantua",light:"Pantagruel"},modules:["God Complex Equation","God Complex Equation","God Complex Equation","Last Stand"],microchips:["Wonderworker","Mechanic","Road Hog","Armor Expert","Tough Guy","Cautious Pilot","Shield Expert","Stubborn Warrior"]}],eg=[{name:"Orange Pentagon",weapons:{heavy:"Cinder",light:"Punisher"},modules:["Last Stand","Repair Amplifier","Repair Amplifier","Balance Unit"]},{name:"Pink Circle",weapons:{heavy:"Shocker",light:"Pantagruel"},modules:["Last Stand","Anti Control","Repair Amplifier","Repair Amplifier"]},{name:"Pink Circle",weapons:{heavy:"Shocker",light:"Slumber"},modules:["Last Stand","Balance Unit","Repair Amplifier","Repair Amplifier"]},{name:"White Hexagon",weapons:{heavy:"Flux"},modules:["Last Stand","Arc Reactor","Balance Unit"]},{name:"Yellow Hexagon",weapons:{heavy:"Shocker",light:"Scatter"},modules:["Last Stand","Repair Amplifier","Repair Amplifier","Anti Control"]},{name:"Yellow Hexagon",weapons:{heavy:"Shocker",light:"Slumber"},modules:["Last Stand","Repair Amplifier","Repair Amplifier","Anti Control"]},{name:"Black Pentagon",weapons:{heavy:"Devastator",light:"Scatter"},modules:["Last Stand","Fortifier","Fortifier","Anti Control"]},{name:"Blue Heptagon",weapons:{heavy:"Delay",light:"Slumber"},modules:["Last Stand","Nuclear Amplifier","Nuclear Amplifier","Balance Unit"]},{name:"Cyan Circle",weapons:{heavy:"Gangantua",light:"Pantagruel"},modules:["Last Stand","Anti Control","Repair Amplifier","Repair Amplifier"]}];function eh(){let e=0;return p.league>=7e3?e=.9>Math.random()?4:3:p.league>=6e3?e=.5>Math.random()?4:3:p.league>=5e3?e=3:p.league>=4e3?e=.5>Math.random()?3:2:p.league>=3e3?e=2:p.league>=2e3?e=.5>Math.random()?2:1:p.league>=1e3?e=.25>Math.random()?2:1:p.league<1e3&&(e=1),e=Math.max(e-1,0)}function ec(){if(p.league>=7e3)return Math.randInt(12,14);if(p.league>=6e3)return Math.randInt(11,13);if(p.league>=5e3)return Math.randInt(9,11);if(p.league>=4e3)return Math.randInt(6,9);if(p.league>=3e3)return 6;else if(p.league>=2e3)return Math.randInt(3,6);else if(p.league<1e3)return Math.randInt(1,2)}function em(){let e=["SolarSculptor","QuantumQuasar","EternalVagabond","VividVortex","NovaNomad","MysticMarauder","GalacticGlider","CrimsonComet","SilverShadow","AstralPioneer","TechTrekker","CelestialScribe","PixelPilgrim","NeonNebula","StarlightSorcerer","SereneStardust","SonicSpecter","CipherSeeker","NebulaNinja","EpicExplorer","RogueRadiance","QuantumQuester","DreamDynamo","CeruleanCraze","AstroAdventurer","SynthwaveSculptor","LunarLuminary","BlazeBlitzer","EclipseEnigma","WhisperingWarp","DigitalDrifter","PulsarPioneer","VortexVagabond","InfiniteInsider","CelestialCipher","StellarStrategist","PhantomPioneer","VividVoyager","CosmicChampion","NebulaNavigator"],t=Math.min(p.league/7e3,1),l=!1;return Math.random()<(3==p.gameMode?.25:.5)*t&&(l=!0),e.forEach(e=>{e=e.slice(0,14)}),e[Math.floor(Math.random()*e.length)]+(l?"_p2w":"")}var ey=[];function ef(e,t,l){ey.push({attacker:e,weapon:t,victim:l}),ey.length>7&&ey.shift()}var eu=-1;function eb(e){e.inGameSid=eu,eu++}function ex(e,t,l,i){if(3==l||4==l)e.x=Math.random()*es.x,1==p.mapID?e.y=Math.randInt(2500+2*e.scale,es.y-(2500+2*e.scale)):e.y=Math.random()*es.y;else if(e.isMe)0==l||1==l?(e.x=es.x/2,e.y=es.y/2):(e.x=i[0][i[1]].x,e.y=i[0][i[1]].y);else if(t)e.x=i[0][i[1]].x,e.y=i[0][i[1]].y;else{let a=i[1]?0:1;e.x=i[0][a].x,e.y=i[0][a].y}}function e_(e,t){e.weapons=[];for(let l=0;l<t.length;l++){let i=new b(t[l]);i.level=t[l].level,i.slot=void 0!=t[l].slot?t[l].slot:l,"Cinder"==i.name&&"Orange Pentagon"==e.name&&(i.dmg*=1.25),i.baseShielding||e.weapons.push(i)}}function ev(e,t){e.modules=[];for(let l=0;l<t.length;l++){let i=new v(t[l]);i.level=t[l].level,e.baseDP+=i.baseDefensePoints,e.modules.push(i)}let a=e.modules.filter(e=>"Repair Amplifier"==e.name);if(a.length){e.repairAmp={require:1e300,requirePercent:1,defensePoints:0,amount:0};for(let o=0;o<a.length;o++)e.repairAmp.requirePercent>=a[o].durabilityLostAmp&&(e.repairAmp.requirePercent=a[o].durabilityLostAmp,e.repairAmp.require=e.maxhealth*a[o].durabilityLostAmp),e.repairAmp.defensePoints+=a[o].increasedDefensePoints,e.repairAmp.amount++}let n=e.modules.filter(e=>"Anti Control"==e.name).sort((e,t)=>t.antiControl-e.antiControl)[0];n&&(e.negEffectReduction=1-n.antiControl)}function e0(e){e.shields=[];let t={};for(let l=0;l<e.weapons.length;l++){let i=e.weapons[l];i.baseShielding&&(null==t[i.baseShielding.health]?t[i.baseShielding.health]=1:t[i.baseShielding.health]++)}let a=1;e.fixedExtraShieldHealthL1+1>=1&&(a+=e.fixedExtraShieldHealthL1);for(let o in e.modules.filter(e=>e.shieldHealth).forEach(e=>{a+=e.shieldHealth}),t)e.shields.push({maxhealth:parseInt(o)*t[o]*a,health:parseInt(o)*t[o]*a,baseShield:!0,type:"energy",regen:.05});e.baseShielding&&e.shields.push({maxhealth:e.baseShielding.health*a,health:e.baseShielding.health*a,baseShield:!0,type:e.baseShielding.type,regen:e.baseShielding.regen})}function e3(e,t,l){l.forEach(l=>{l.dmgIncrease&&(e.dmg+=l.dmgIncrease),l.healthIncrease&&(e.health+=l.healthIncrease),l.extraShieldHealth&&(null==t.fixedExtraShieldHealthL1&&(t.fixedExtraShieldHealthL1=0),t.fixedExtraShieldHealthL1+=l.extraShieldHealth),l.speedIncrease&&(e.speed+=l.speedIncrease),l.mechanicHeal&&(t.mechanicHeal=l.mechanicHeal),l.onKillDefense&&(t.onKillDefense=l.onKillDefense),l.onAbilityUseFix&&(t.onAbilityUseFix=l.onAbilityUseFix),l.onAbilityEndFix&&(t.onAbilityEndFix=l.onAbilityEndFix),l.onKillSpeed&&(t.onKillSpeed=l.onKillSpeed),l.onLowDefense&&(t.onLowDefense=l.onLowDefense),l.onLowSpeed&&(t.onLowSpeed=l.onLowSpeed),l.cantUseAbility&&(t.ability=null)});for(let i=0;i<t.modules.length;i++){let a=t.modules[i];a.healthIncrease&&(e.health+=a.healthIncrease),a.dmgIncrease&&(e.dmg+=a.dmgIncrease)}for(let o in t.isMe&&p.league<=300&&(3==p.gameMode||2==p.gameMode)&&(e.dmg+=10,e.health+=5,e.speed*=3),e)e[o]=Math.max(e[o],.01)}function e1(e,t){let{health:l,speed:i,dmg:a}=t;e.health=e.maxhealth=parseInt(ee(e.maxhealth*l)),e.speed*=i,e.ability&&e.ability.dmg&&(e.ability.dmg*=a);for(let o=0;o<e.weapons.length;o++){let n=e.weapons[o];n.dmg*=a}}function ew(e,t,l,i,a,o,n){let s=new m(e,null,!0);s.effects=[],s.level=e.level,s.USED=!1,eb(s),ex(s,a,o,n),e_(s,t),ev(s,l);let r={dmg:1,speed:1,health:1};return e3(r,s,i),e0(s),e1(s,r),s}var ek=[],eE={ally:0,enemy:0},eI=[3,4],es=[{id:0,name:"Training Grounds",x:1e4,y:7e3},{id:1,name:"Carrier",x:2e4,y:12e3}];function eD(e){en=[],ts=[],p.gameMode=e;let t;if(1==e)eB.bossIndex=0,es.x=es.y=3e3,ts.push(new tw(eB.bosses[0],!0));else if(3==e||2==e||4==e||5==e){var l;document.getElementById("mapName").style.display="block",s.style.display="block";let i,a,o;t=(i=es[Math.floor(Math.random()*es.length)],a=Math.randInt(0,1),document.getElementById("mapName").innerHTML=`Map: ${i.name}${3==p.gameMode?"":` (ID: ${a})`}`,o=[],es.x=i.x,es.y=i.y,l=i.id,p.mapID=l,0==l?(eI.includes(p.gameMode)||(ek.push({name:"beacon",x:1200,y:1200}),ek.push({name:"beacon",x:1200,y:es.y-1200}),ek.push({name:"beacon",x:es.x/2,y:es.y/2}),ek.push({name:"beacon",x:es.x-1200,y:es.y-1200}),ek.push({name:"beacon",x:es.x-1200,y:1200})),ek.push({name:"wall rect",x:600,y:2e3,width:1800,height:200}),ek.push({name:"wall rect",x:2200,y:300,width:200,height:1400}),ek.push({name:"wall rect",x:0,y:es.y-2200,width:2e3,height:200}),ek.push({name:"wall rect",x:2400,y:es.y-2200,width:200,height:1800}),ek.push({name:"wall rect",x:2150,y:es.y/2-900,width:250,height:1800}),ek.push({name:"wall rect",x:3200,y:es.y/2-950,width:200,height:1900}),ek.push({name:"wall rect",x:3800,y:es.y/2-400,width:200,height:800}),ek.push({name:"wall rect",x:es.x-2150,y:es.y/2-900,width:250,height:1800}),ek.push({name:"wall rect",x:es.x-3200,y:es.y/2-950,width:200,height:1900}),ek.push({name:"wall rect",x:es.x-3800,y:es.y/2-400,width:200,height:800}),ek.push({name:"wall rect",x:es.x-2200,y:es.y-2e3,width:1800,height:200}),ek.push({name:"wall rect",x:es.x-2200,y:es.y-1400,width:200,height:1400}),ek.push({name:"wall rect",x:es.x-2200,y:2e3,width:1800,height:200}),ek.push({name:"wall rect",x:es.x-2200,y:300,width:200,height:1400})):1==l&&(eI.includes(p.gameMode)||(ek.push({name:"beacon",x:3e3,y:3750}),ek.push({name:"beacon",x:es.x/2-4e3,y:es.y-3750}),ek.push({name:"beacon",x:es.x/2,y:es.y/2}),ek.push({name:"beacon",x:es.x/2+4e3,y:3750}),ek.push({name:"beacon",x:es.x-3e3,y:es.y-3750})),ek.push({name:"water",x:0,y:0,height:2500,width:es.x}),ek.push({name:"water",x:0,y:es.y-2500,height:2500,width:es.x}),ek.push({name:"wall rect",x:es.x/2+1800,y:3500,height:5e3,width:200}),ek.push({name:"wall rect",x:es.x/2-2e3,y:3500,height:5e3,width:200}),ek.push({name:"wall rect",x:es.x/2-2e3,y:2500,height:200,width:4e3}),ek.push({name:"wall rect",x:es.x/2-2e3,y:es.y-2700,height:200,width:4e3}),ek.push({name:"wall rect",x:es.y+1e3,y:es.y/2-100,height:200,width:3e3}),ek.push({name:"wall rect",x:4e3,y:es.y/2-100,height:200,width:3e3}),ek.push({name:"wall rect",x:14800,y:es.y/2+500,height:3e3,width:200}),ek.push({name:"wall rect",x:5200,y:2500,height:3e3,width:200})),function e(){for(let t=0;t<ek.length;t++){let l=ek[t];if("wall rect"==l.name){let i=l.width,a=l.height,o=l.x+l.width/2,n=l.y+l.height/2,s=l.y+a>=es.y-50?-(Math.PI/2):l.y<=50?Math.PI/2:null,r=l.x+i>=es.x-50?Math.PI:l.x<=50?0:null;l.x-100>0&&ek.push({name:"coll rect",x:l.x-100,y:l.y-50,onlyDir:s,middleY:n,height:a+100,width:100}),l.x+i+100<es.x&&ek.push({name:"coll rect",x:l.x+i,y:l.y-50,middleY:n,onlyDir:s,height:a+100,width:100}),l.y-100>0&&ek.push({name:"coll rect",x:l.x,y:l.y-100,middleX:o,onlyDir:r,height:100,width:i}),l.y+a+100<es.y&&ek.push({name:"coll rect",x:l.x,y:l.y+a,middleX:o,onlyDir:r,height:100,width:i})}}}(),(0==i.id||1==i.id)&&(o=[{x:500,y:es.y/2},{x:es.x-500,y:es.y/2}]),[o,a]),eE={ally:0,enemy:0}}else es.x=es.y=4e3,tT.waveIndex=-1;s.width=`${es.x/50}`,s.height=`${es.y/50}`,s.style.width=`${es.x/50}px`,s.style.height=`${es.y/50}px`,function e(t,l){eu=-1,document.getElementById("money3Display").style.display="none",document.getElementById("hangerUI").append(document.getElementById("money3Display"));let i=p.shapes.filter(e=>null!=e.slot);en[0]={name:"player",isAlly:!0,robotIndex:-1,robots:[]};for(let a=0;a<8;a++){let o=i.find(e=>e.slot==a);if(o){let n=new m(o,null,!0);n.effects=[],n.level=o.level,n.isMe=!0,n.USED=!1,eb(n),ex(n,!0,t,l);e_(n,p.weapons.filter(e=>e.owner==o.sid));ev(n,p.modules.filter(e=>e.owner==o.sid));let s={dmg:1,speed:1,health:1};e3(s,n,eL.filter(e=>e.owner==o.sid)),e0(n),e1(n,s),en[0].robots.push(n)}else en[0].robots.push(null)}if(tf()){let r=Math.round(p.league/7e3*100),$=5==t?1:3==t?10:4==t?19:11;for(let d=0;d<$;d++){let g=5!=t&&3!=t&&d<5,h=em();en[1+d]={name:5==t?"Bluebell":h,isAlly:4==t?h:g,robotIndex:0,robots:[]}}for(let c=0;c<$;c++){let u=5!=t&&4!=t&&3!=t&&c<5,k=en[0].robots.length*(3==t?.75:1);for(let E=0;E<k;E++)if("Bluebell"==en[c+1].name){let I=ep[E],D=f.find(e=>e.name==I.name),B=new m(D,null,!0);for(let T=0;T<13;T++)e4(B,!0);let S=[];if(B.hardpoints.heavy){let A=_.find(e=>e.name==I.weapons.heavy),M=new b(A);for(let P=0;P<13;P++)J(M,null,null,!0);M.fireRateDecrease=0;for(let L=0;L<B.hardpoints.heavy;L++){let H=new b(M);H.level=M.level,H.fireRateDecrease=0,H.reload*=.5,S.push(H)}}if(B.hardpoints.light){let R=_.find(e=>e.name==I.weapons.light),C=new b(R);for(let O=0;O<13;O++)J(C,null,null,!0);for(let N=0;N<B.hardpoints.light;N++){let z=new b(C);z.level=C.level,z.fireRateDecrease=0,z.reload*=.5,S.push(z)}}let F=[],W=B.moduleHardpoints;for(let U=0;U<W;U++){let G=new v(w.find(e=>e.name==(I.modules[U]||"Balance Unit")),null,null);for(let V=0;V<5;V++)ea(G,null,null,!0);F.push(G)}let K=[];for(let Y=0;Y<8;Y++)if(I.microchips[Y]){let X=new eM(eP.find(e=>e.name==I.microchips[Y]),null,null);for(let j=0;j<3;j++)eH(X,!0);K.push(X)}en[1+c].robots.push(ew(B,S,F,K,u,t,l))}else if(en[c+1].name.includes("p2w")){let q=eg[Math.floor(Math.random()*eg.length)],Z=f.find(e=>e.name==q.name),Q=new m(Z,null,!0);for(let ee=0;ee<13;ee++)e4(Q,!0);let et=[];if(Q.hardpoints.heavy){let el=_.find(e=>e.name==q.weapons.heavy),ei=new b(el);for(let eo=0;eo<13;eo++)J(ei,null,null,!0);ei.fireRateDecrease=0;for(let es=0;es<Q.hardpoints.heavy;es++){let e$=new b(ei);e$.level=ei.level,e$.fireRateDecrease=0,et.push(e$)}}if(Q.hardpoints.light){let ed=_.find(e=>e.name==q.weapons.light),ey=new b(ed);for(let ef=0;ef<13;ef++)J(ey,null,null,!0);for(let ek=0;ek<Q.hardpoints.light;ek++){let eE=new b(ey);eE.level=ey.level,eE.fireRateDecrease=0,et.push(eE)}}let eI=[],eD=Q.moduleHardpoints;for(let eB=0;eB<eD;eB++){let e9=new v(w.find(e=>e.name==(q.modules[eB]||"Balance Unit")),null,null);for(let eT=0;eT<5;eT++)ea(e9,null,null,!0);eI.push(e9)}en[1+c].robots.push(ew(Q,et,eI,[],u,t,l))}else{let eS=eh(),e2=ec()-1,eA=f.filter(e=>e.tier==eS);eA=eA[Math.floor(eA.length*Math.random())];let eR=new m(eA,null,!0);for(let e6=0;e6<e2;e6++)e4(eR,!0);let eC=[],eO=_.filter(e=>e.tier==eS),e5=eO.filter(e=>"Heavy"==e.type),eN=eO.filter(e=>"Light"==e.type);if(eR.hardpoints.heavy){let ez=e5[Math.floor(Math.random()*e5.length)],eF=new b(ez);for(let e7=0;e7<e2;e7++)J(eF,null,null,!0);for(let eW=0;eW<eR.hardpoints.heavy;eW++){let eU=new b(eF);eU.level=eF.level,eU.fireRateDecrease=0,eC.push(eU)}}if(eR.hardpoints.light){let eG=eN[Math.floor(Math.random()*eN.length)],e8=new b(eG);for(let eV=0;eV<e2;eV++)J(e8,null,null,!0);for(let eK=0;eK<eR.hardpoints.light;eK++){let eY=new b(e8);eY.level=e8.level,eY.fireRateDecrease=0,eC.push(eY)}}let eX=[],ej=eR.moduleHardpoints;if(r>=75){r>=100&&ej--;for(let eq=0;eq<ej;eq++){let eZ=new v(w.find(e=>"Balance Unit"==e.name),null,null);for(let eJ=0;eJ<5;eJ++)ea(eZ,null,null,!0);eX.push(eZ)}if(r>=100){let eQ=new v(w.find(e=>"Last Stand"==e.name),null,null);for(let te=0;te<5;te++)ea(eQ,null,null,!0);eX.push(eQ)}}else if(r>=50)for(let tt=0;tt<ej;tt++){let tl=new v(w.find(e=>"Balance Unit"==e.name),null,null);for(let ti=0;ti<2;ti++)ea(tl,null,null,!0);eX.push(tl)}else if(r>=25)for(let ta=0;ta<ej;ta++){let to=new v(w.find(e=>"Heavy Armor Plating"==e.name),null,null);for(let tn=0;tn<5;tn++)ea(to,null,null,!0);eX.push(to)}else if(r>=13)for(let ts=0;ts<ej;ts++){let tr=new v(w.find(e=>"Armor Plating"==e.name),null,null);for(let t$=0;t$<5;t$++)ea(tr,null,null,!0);eX.push(tr)}en[1+c].robots.push(ew(eR,eC,eX,[],u,t,l))}}}er()}(e,t),B()}var eB={bossIndex:0,bosses:[{name:"Level 1 Boss",displayName:"Pulverizer",health:25e4,speed:.0028,scale:210,AOEArea:{range:800,dmg:500,fireRate:250},BLASTWAVE:{range:400,dmg:15e3,knockback:3},onKill:{silver:75e3,gold:10,keys:25,OXP:50}},{name:"Level 2 Boss",displayName:"Pulverizer MK2",health:5e5,speed:.0048,scale:155,AOEArea:{range:800,dmg:500,fireRate:100},BLASTWAVE:{range:190,dmg:15e3,knockback:15},onKill:{silver:225e3,gold:35,keys:50,OXP:75}},{name:"Level 3 Boss",displayName:"Barragebot",health:9e5,speed:.0018,scale:295,AOEArea:{range:600,dmg:1750,fireRate:100},onKill:{silver:85e4,gold:150,keys:75,OXP:200}},{name:"Level 4 Boss",displayName:"Wanderer",health:12e5,speed:.0018,scale:155,AOEArea:{range:1800,dmg:2e3,fireRate:150},onKill:{silver:8e6,gold:200,keys:200,OXP:500}},{name:"Level 5 Boss",displayName:"Summoner",health:2e6,speed:.0018,scale:155,onKill:{silver:15e6,gold:300,keys:500,OXP:750}},{name:"Level 6 Boss",displayName:"Summoner MK2",health:25e5,speed:.004,scale:155,onKill:{silver:3e7,gold:600,keys:700,OXP:1250}},{name:"Level 7 Boss",displayName:"Zero",health:55e5,speed:.0014,scale:155,onKill:{silver:4e7,gold:900,keys:700,OXP:1550}},{name:"Level 8 Boss",displayName:"Zero MK2",health:7e6,speed:.0014,scale:155,onKill:{silver:3e7,gold:400,keys:300,OXP:750,WSP:200}},{name:"Level 9 Boss",displayName:"Trickister",health:5e7,speed:.002,scale:105,onKill:{silver:1e8,gold:500,keys:400,OXP:750,WSP:600}},{name:"Level 10 Boss",displayName:"Bastion",health:3e8,speed:.002,scale:405,onKill:{silver:5e9,gold:5e3,keys:2e4,OXP:2e3,WSP:25e3}}]},e9=[{name:"Quick Match",desc:`
        You will be randomly matched in one of the following modes:<br>
        Classic<br>
        One vs. All<br>
        FFA
        `,backgroundImage:"",ids:[2,3,4]},{name:"Classic",id:2,backgroundImage:"",desc:`
        Beacon Capture. Each captured beacon gives points to your team.
        The team that fills their half of the bar wins. The destruction of all enemy
        shapes will also count as a win.
        `},{name:"One vs. All",id:3,backgroundImage:"",desc:`
        No beacons. You are put into a arena with 10 other enemy shapes.
        Fight the other 10 enemies while they team up aganist you.
        Let the champion rise to the top!
        `},{name:"One vs. One",id:5,backgroundImage:"",desc:`
        Engage in a relentless one-on-one duel against an bot
        enemy armed to the teeth with the best
        equipment the game has to offer.
        Are you ready to prove your mettle and rise to the challenge?
        `},{name:"FFA",id:4,backgroundImage:"",desc:`
        In FFA mode, 20 players, including you,
        fight in an arena. The goal is to be the
        last one standing by defeating everyone else!
        `},{name:"Extermination",id:0,backgroundImage:"",desc:`
        Fight endless hordes of unregistered shapes.
        The longer to survive, the more rewards you receive!
        `},{name:"Arena",id:1,backgroundImage:"",desc:`
        While numerous shapes originate from a single company (ILM),
        several other competitors have emerged. These rivals have
        joined forces to construct 10 mega shapes, expressing
        confidence in their superiority over ILM's designs.
        ILM challenges you to prove them wrong!
        `}];function eT(e,t){let l="",i=f.find(e=>e.name==t.name),a=window.innerWidth>=1442?500:window.innerWidth>=1374?450:window.innerWidth>=1311?400:window.innerWidth>=1245?350:window.innerWidth>=1182?300:250;if(a+=281.25,"health"==e){let o=i.healthData.base;for(let n=0;n<i.healthData.level.length;n++)o+=i.healthData.level[n];let s=o,r=o*=1.2;o*=1.5;let $;l=`
            <div style="position: relative; width: ${a}px;">
            Health: ${E(t.health)}
            <div style="display: ${i.healthData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(o-r):12==t.level?E(r-s):E(i.healthData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.health+(13==t.level?o-r:12==t.level?r-s:i.healthData.level[t.level]))/o*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.health/o*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("speed"==e){let d=i.speed;for(let p=0;p<i.speedLevel.length;p++)d+=i.speedLevel[p];let g=d;d*=1.2,d*=1e4,d=Math.round(d);let h=d/=1e4;d*=1.1,d*=1e4,d=Math.round(d),d/=1e4;let c;l=`
            <div style="position: relative; width: ${a}px;">
            Speed: ${1e3*t.speed}
            <div style="display: ${i.speedLevel[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?(d-h)*1e3:12==t.level?(h-g)*1e3:1e3*i.speedLevel[t.level]}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.speed+(13==t.level?d-h:12==t.level?h-g:i.speedLevel[t.level]))/d*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.speed/d*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("ability damage"==e&&t.ability&&t.ability.dmg){let m=i.ability.damageData.base;for(let u=0;u<i.ability.damageData.level.length;u++)m+=i.ability.damageData.level[u];let b=m,_=m*=1.2;m*=1.5;let v;l=`
            <div style="position: relative; width: ${a}px;">
            Ability Damage: ${E(t.ability.dmg)}
            <div style="display: ${i.ability.damageData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(m-_):12==t.level?E(_-b):E(i.ability.damageData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.ability.dmg+(13==t.level?m-_:12==t.level?_-b:i.ability.damageData.level[t.level]))/m*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.ability.dmg/m*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("shield hp"==e&&t.baseShielding){let w=i.shieldData.base;for(let k=0;k<i.shieldData.level.length;k++)w+=i.shieldData.level[k];let I=w,D=w*=1.2;w*=1.5;let B;l=`
            <div style="position: relative; width: ${a}px;">
            Shield Durability: ${E(t.baseShielding.health)}
            <div style="display: ${i.shieldData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(w-D):12==t.level?E(D-I):E(i.shieldData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.baseShielding.health+(13==t.level?w-D:12==t.level?D-I:i.shieldData.level[t.level]))/w*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.baseShielding.health/w*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("ability dot damage"==e&&t.ability&&t.ability.dotDamage){let T=i.ability.dotData.base;for(let S=0;S<i.ability.dotData.level.length;S++)T+=i.ability.dotData.level[S];let A=T,M=T*=1.2;T*=1.5;let P;l=`
            <div style="position: relative; width: ${a}px;">
            Ability DOT Damage: ${E(t.ability.dotDamage)}
            <div style="display: ${i.ability.dotData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(T-M):12==t.level?E(M-A):E(i.ability.dotData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.ability.dotDamage+(13==t.level?T-M:12==t.level?M-A:i.ability.dotData.level[t.level]))/T*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.ability.dotDamage/T*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("ashield hp"==e&&t.ability&&t.ability.shieldHp){let L=i.ability.shieldHpData.base;for(let H=0;H<i.ability.shieldHpData.level.length;H++)L+=i.ability.shieldHpData.level[H];let R=L,C=L*=1.2;L*=1.5;let O;l=`
            <div style="position: relative; width: ${a}px;">
            Shield Durability: ${E(t.ability.shieldHp)}
            <div style="display: ${i.ability.shieldHpData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(L-C):12==t.level?E(C-R):E(i.ability.shieldHpData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.ability.shieldHp+(13==t.level?L-C:12==t.level?C-R:i.ability.shieldHpData.level[t.level]))/L*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.ability.shieldHp/L*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("healing aura"==e&&i.healingAuraData){let N=i.healingAuraData.base;for(let z=0;z<i.healingAuraData.level.length;z++)N+=i.healingAuraData.level[z];let F=N,W=N*=1.2;N*=1.5;let U;l=`
            <div style="position: relative; width: ${a}px;">
            Healing Aura Power: ${E(t.healingAura)}
            <div style="display: ${i.healingAuraData.level[t.level]?"block":13==t.level?"block":12==t.level?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${13==t.level?E(N-W):12==t.level?E(W-F):E(i.healingAuraData.level[t.level])}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.healingAura+(13==t.level?N-W:12==t.level?W-F:i.healingAuraData.level[t.level]))/N*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.healingAura/N*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("lasting time"==e&&i.ability&&i.ability.lastingTimeData){let G=i.ability.lastingTimeData.base;for(let V=0;V<i.ability.lastingTimeData.level.length;V++)G+=i.ability.lastingTimeData.level[V];let K;l=`
            <div style="position: relative; width: ${a}px;">
            Ability Duration: ${t.ability.lastingTime/1e3} sec
            <div style="display: ${i.ability.lastingTimeData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${i.ability.lastingTimeData.level[t.level]/1e3} sec
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.ability.lastingTime+i.ability.lastingTimeData.level[t.level])/G*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.ability.lastingTime/G*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("defense points ability"==e&&i.ability&&i.ability.abilityDefensePointsData){let Y=i.ability.abilityDefensePointsData.base;for(let X=0;X<i.ability.abilityDefensePointsData.level.length;X++)Y+=i.ability.abilityDefensePointsData.level[X];let j;l=`
            <div style="position: relative; width: ${a}px;">
            Ability Defense Points: ${t.ability.abilityDefensePoints}
            <div style="display: ${i.ability.abilityDefensePointsData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${i.ability.abilityDefensePointsData.level[t.level]}
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.ability.abilityDefensePoints+i.ability.abilityDefensePointsData.level[t.level])/Y*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.ability.abilityDefensePoints/Y*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}else if("abilityHealthMulti"==e&&i.ability&&i.ability.abilityHealthMultiData){let q=i.ability.abilityHealthMultiData.base;for(let Z=0;Z<i.ability.abilityHealthMultiData.level.length;Z++)q+=i.ability.abilityHealthMultiData.level[Z];let J;l=`
            <div style="position: relative; width: ${a}px;">
            Ability Health Multiplier: ${100*t.ability.abilityHealthMulti}%
            <div style="display: ${i.ability.abilityHealthMultiData.level[t.level]?"block":"none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${100*i.ability.abilityHealthMultiData.level[t.level]}%
            </div>
            </div>
            <div style="position: relative; width: ${a}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*((t.ability.abilityHealthMulti+i.ability.abilityHealthMultiData.level[t.level])/q*a/a)}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${100*(t.ability.abilityHealthMulti/q*a/a)}%; background-color: #00fcec;">
            </div>
            </div>
            `}return l}!function e(){document.getElementById("gameModesDisplay").innerHTML=`
        <div id="mainsDisplay" style="position: absolute; left: 0px; top: ${window.innerHeight/2-175}px; width: 100%; height: 350px; background-color: rgb(0, 0, 0, 0.15); overflow-x: scroll; box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);">
        </div>
        `;for(let t=0;t<e9.length;t++){let l=e9[t];document.getElementById("mainsDisplay").innerHTML+=`
            <div style="position: absolute; height: 100%; width: 250px; top: 0px; left: ${270*t}px; background-color: ${t%2==1?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)"};">
            <div style="font-size: 24px; margin-left: 10px; margin-top: 5px;">${l.name}</div>
            <hr>
            <div style="margin-left: 10px; font-size: 12px;">
            ${l.desc}
            </div>
            <div id="goFightId${l.id}" style="position: absolute; color: #fff; bottom: 10px; cursor: pointer; left: 10px; font-size: 24px; text-align: center; width: 230px; height: 30px; background-color: #fc9003; border-radius: 4px;">
            FIGHT
            </div>
            </div>
            `}for(let i=0;i<e9.length;i++){let a=e9[i];if(a.id+1>=1&&document.getElementById(`goFightId${a.id}`))document.getElementById(`goFightId${a.id}`).onclick=function(){document.getElementById("chooseSlot").style.bottom="0px",document.getElementById("goBackToHanger").style.display="none",document.getElementById("gameModesDisplay").style.display="none",eD(a.id),B()};else if(a.ids){let o=a.ids[Math.floor(Math.random()*a.ids.length)];document.getElementById(`goFightId${a.id}`).onclick=function(){document.getElementById("chooseSlot").style.bottom="0px",document.getElementById("goBackToHanger").style.display="none",document.getElementById("gameModesDisplay").style.display="none",eD(o),B()}}}}(),document.getElementById("goBackToHanger").onclick=function(){document.getElementById("money3Display").style.display="none",document.getElementById("hangerUI").append(document.getElementById("money3Display")),document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").style.display="block",document.getElementById("goToBattle").style.display="block",document.getElementById("gameModesDisplay").style.display="none",document.getElementById("sideDisplay").innerHTML="",this.style.display="none"};var eS=[],e2=0;function eA(e,t,l,i,a){L&&(l=Math.abs(l),eS.push({x:e,y:t,value:l,dir:[-.78,-2.34,-.39,-1.17,-1.95][e2%5],life:i,color:a}),e2++)}function e4(e,t){let l=f.find(t=>t.name==e.name),i=l.healthData.level[e.level];if(e.level<12){e.sellPrice+=.75*h[e.tier].shapes[e.level],e.health+=i,e.maxhealth+=i;let a=l.speedLevel[e.level];e.speed+=a,e.speed=(1e3*e.speed).toFixed(1)/1e3}else e.health*=13==e.level?1.5:1.2,e.maxhealth*=13==e.level?1.5:1.2,e.speed*=13==e.level?1.1:1.2,e.speed*=1e4,e.speed=Math.round(e.speed),e.speed/=1e4;if(e.ability){if(e.ability.shieldHp){let o=l.ability.shieldHpData.level[e.level];e.level<12?e.ability.shieldHp+=o:e.ability.shieldHp*=13==e.level?1.5:1.2}if(l.ability.abilityHealthMultiData&&e.level<12){let n=l.ability.abilityHealthMultiData.level[e.level];e.ability.abilityHealthMulti+=n}if(l.ability.lastingTimeData&&e.level<12){let s=l.ability.lastingTimeData.level[e.level];e.ability.lastingTime+=s}if(l.ability.abilityDefensePointsData&&e.level<12){let r=l.ability.abilityDefensePointsData.level[e.level];e.ability.abilityDefensePoints+=r}if(e.ability.dmg){let $=l.ability.damageData.level[e.level];e.level<12?e.ability.dmg+=$:e.ability.dmg*=13==e.level?1.5:1.2}if(e.ability.dotDamage){let d=l.ability.dotData.level[e.level];e.level<12?e.ability.dotDamage+=d:e.ability.dotDamage*=13==e.level?1.5:1.2}}if(l.healingAuraData){if(e.level<12){let p=l.healingAuraData.level[e.level];e.healingAura+=p}else e.healingAura*=13==e.level?1.5:1.2}if(e.baseShielding){if(e.level<12){let g=l.shieldData.level[e.level];e.baseShielding.health+=g}else e.baseShielding.health*=13==e.level?1.5:1.2}e.level++,null==e.slot||t||(document.getElementById("slot"+e.slot).click(),document.getElementById("upgradeShape").click()),t||te(),t||to()}class eM{constructor(e,t,l){this.owner=t,this.slot=l,this.name=e.name,this.desc=e.desc,this.main=e.main,this.fontSize=e.fontSize,this.imageSource=e.imageSource,this.cantUseAbility=e.cantUseAbility,this.healthIncrease=e.healthIncreaseData?e.healthIncreaseData[0]:e.healthIncrease,this.dmgIncrease=e.dmgIncreaseData?e.dmgIncreaseData[0]:e.dmgIncrease,this.speedIncrease=e.speedIncreaseData?e.speedIncreaseData[0]:e.speedIncrease,this.mechanicHeal=e.mechanicHealData?e.mechanicHealData[0]:e.mechanicHeal,this.onKillDefense=e.onKillDefenseData?e.onKillDefenseData[0]:e.onKillDefense,this.onKillSpeed=e.onKillSpeedData?e.onKillSpeedData[0]:e.onKillSpeed,this.onLowDefense=e.onLowDefenseData?e.onLowDefenseData[0]:e.onLowDefense,this.onLowSpeed=e.onLowSpeedData?e.onLowSpeedData[0]:e.onLowSpeed,this.onAbilityEndFix=e.onAbilityEndFixData?e.onAbilityEndFixData[0]:e.onAbilityEndFix,this.extraShieldHealth=e.extraShieldHealthData?e.extraShieldHealthData[0]:e.extraShieldHealth,this.onAbilityUseFix=e.onAbilityUseFixData?e.onAbilityUseFixData[0]:e.onAbilityUseFix,this.legendChip=e.legendChip,this.needShield=e.needShield,this.needAbility=e.needAbility,this.level=0}}var eP=[{name:"Armor Expert",desc:"The shape has increased durability.",main:"health increase",imageSource:"./images/modules/armor_plating.png",healthIncreaseData:[.06,.09,.12,.15]},{name:"Tough Guy",fontSize:12,desc:"The robot has increased durability, but its weapon damage is lowered by ",main:"health increase",imageSource:"./images/modules/armor_plating.png",healthIncreaseData:[.075,.1125,.15,.1875],dmgIncreaseData:[-.0125,-.018,-.022,-.025]},{name:"Gunsmith",desc:"The weapon deals increased damage.",main:"dmg increase",imageSource:"./images/modules/nuclear_reactor.png",dmgIncreaseData:[.0125,.019,.025,.032]},{name:"Thrill Seeker",fontSize:12,desc:"The shape deals increased weapon damage, but its durability is lowered by ",main:"dmg increase",imageSource:"./images/modules/nuclear_reactor.png",dmgIncreaseData:[.025,.0375,.05,.085],healthIncreaseData:[-.025,-.019,-.05,-.0625]},{name:"Road Hog",desc:"The shape has increased speed.",main:"speed increase",imageSource:["speed"],speedIncreaseData:[.06,.09,.12,.15]},{name:"Cautious Pilot",fontSize:12,desc:"The shape has increased durability, but its speed is lowered by ",main:"health increase",imageSource:"./images/modules/armor_plating.png",healthIncreaseData:[.075,.1125,.15,.1875],speedIncreaseData:[-.0375,-.056,-.075,-.093]},{name:"Mechanic",fontSize:12,desc:"The robot repairs a portion of its maximum durability each second.",main:"mechanic",imageSource:"./images/self_heal.png",mechanicHealData:[.0025,.004,.005,.007]},{name:"Survivor",fontSize:12,desc:"The shape deals increased weapon damage, but its speed is lowered by ",main:"dmg increase",imageSource:"./images/modules/nuclear_reactor.png",dmgIncreaseData:[.025,.0375,.05,.085],speedIncreaseData:[-.0375,-.056,-.075,-.093]},{name:"Wise Opportunist",fontSize:12,desc:"Destroying an enemy shape increases your Defence Point for 5 seconds.",main:"on kill defense",imageSource:"./images/modules/armor_plating.png",onKillDefenseData:[10,15,20,30]},{name:"Cunning Opportunist",fontSize:12,desc:"Destroying an enemy shape increases your Movement Speed for 5 seconds.",main:"on kill speed",imageSource:["speed"],onKillSpeedData:[.06,.09,.12,.15]},{name:"Stubborn Warrior",fontSize:12,desc:"As long as the shape has low Durability (30% or below), it gains additional Defence Point.",main:"on low defense",imageSource:"./images/modules/armor_plating.png",onLowDefenseData:[12.5,18.75,25,40]},{name:"Spy",fontSize:12,desc:"The shape has increased speed, but its weapon damage is lowered by ",main:"speed increase",imageSource:["speed"],speedIncreaseData:[.0375,.056,.075,.094],dmgIncreaseData:[-.0125,-.018,-.022,-.025]},{name:"Stubborn Speedster",fontSize:12,desc:"As long as the shape has low Durability (30% or below), it gains additional movement speed.",main:"on low speed",imageSource:"./images/modules/armor_plating.png",onLowSpeedData:[.06,.09,.12,.15]},{name:"Traditionalist",fontSize:12,onlyFor:["Pumpkin Orange Circle","Orange Circle","Dark Gray Circle"],desc:"The shape's durability increases but its active ability becomes unavailable.",main:"health increase",imageSource:"./images/modules/armor_plating.png",cantUseAbility:!0,healthIncreaseData:[.25,.375,.5,.625]},{name:"Ghost",onlyFor:["Pumpkin Orange Circle","Orange Circle","Red Heptagon"],desc:"The shape's speed increases but its active ability becomes unavailable.",main:"speed increase",cantUseAbility:!0,imageSource:["speed"],speedIncreaseData:[.275,.4125,.55,.6875]},{name:"Grand Champion of Tanks",fontSize:12,onlyFor:["Pumpkin Orange Circle","Orange Circle"],desc:"The shape's durability increases but decreased speed by 50%.",main:"health increase",legendChip:!0,imageSource:"./images/modules/armor_plating.png",healthIncreaseData:[.5,.625,.8,1],speedIncreaseData:[].fill(-.5)},{name:"Undying Fighter",onlyFor:["Tan Circle"],legendChip:!0,desc:"When the ability ends, repairs X% of all lost durability.",main:"on ability end fix",imageSource:"./images/modules/self_fix_unit.png",onAbilityEndFixData:[.15,.3,.45,.6]},{name:"Shield Expert",needShield:!0,desc:"Increases shield durability by X%.",imageSource:"./images/modules/fortifier.png",main:"extra shield health",extraShieldHealthData:[.05,.1,.15,.2]},{name:"Wonderworker",needAbility:!0,fontSize:14,desc:"When using the shape's ability, repairs a part of the shape's max health.",imageSource:"./images/modules/self_fix_unit.png",main:"on ability fix",onAbilityUseFixData:[.07,.1,.15,.2]}],eL=[];function eH(e,t){let l=eP.find(t=>t.name==e.name);e.level++,l.onAbilityUseFixData&&(e.onAbilityUseFix=l.onAbilityUseFixData[e.level]),l.onAbilityEndFixData&&(e.onAbilityEndFix=l.onAbilityEndFixData[e.level]),l.extraShieldHealthData&&(e.extraShieldHealth=l.extraShieldHealthData[e.level]),l.healthIncreaseData&&(e.healthIncrease=l.healthIncreaseData[e.level],e.healthIncrease*=1e3,e.healthIncrease=Math.round(e.healthIncrease),e.healthIncrease/=1e3),l.dmgIncreaseData&&(e.dmgIncrease=l.dmgIncreaseData[e.level],e.dmgIncrease*=1e3,e.dmgIncrease=Math.round(e.dmgIncrease),e.dmgIncrease/=1e3),l.speedIncreaseData&&(e.speedIncrease=l.speedIncreaseData[e.level],e.speedIncrease*=1e3,e.speedIncrease=Math.round(e.speedIncrease),e.speedIncrease/=1e3),l.mechanicHealData&&(e.mechanicHeal=l.mechanicHealData[e.level],e.mechanicHeal*=1e3,e.mechanicHeal=Math.round(e.mechanicHeal),e.mechanicHeal/=1e3),l.onKillDefenseData&&(e.onKillDefense=l.onKillDefenseData[e.level]),l.onKillSpeedData&&(e.onKillSpeed=l.onKillSpeedData[e.level],e.onKillSpeed*=1e3,e.onKillSpeed=Math.round(e.onKillSpeed),e.onKillSpeed/=1e3),l.onLowDefenseData&&(e.onLowDefense=l.onLowDefenseData[e.level]),l.onLowSpeedData&&(e.onLowSpeed=l.onLowSpeedData[e.level],e.onLowSpeed*=1e3,e.onLowSpeed=Math.round(e.onLowSpeed),e.onLowSpeed/=1e3),t||to()}function eR(e,t){return(!eL.filter(e=>e.owner==t.sid).find(e=>!0==e.legendChip)||!0!=e.legendChip)&&(!e.needAbility||null!=t.ability)&&(!e.needShield||null!=t.baseShielding)&&(!e.onlyFor||!!e.onlyFor.includes(t.name))}function e6(e){if("on ability fix"===e.main)return`${100*e.onAbilityUseFix}%`;if("extra shield health"===e.main)return`${100*e.extraShieldHealth}%`;if("on ability end fix"===e.main)return`${100*e.onAbilityEndFix}%`;if("on low speed"===e.main)return`${100*e.onLowSpeed}%`;if("on low defense"===e.main)return e.onLowDefense;else if("on kill speed"===e.main)return`${100*e.onKillSpeed}%`;else if("on kill defense"===e.main)return e.onKillDefense;else if("mechanic"===e.main)return`${100*e.mechanicHeal}%`;else if("health increase"===e.main)return`${100*e.healthIncrease}%`;else if("speed increase"===e.main)return`${100*e.speedIncrease}%`;else return`${100*e.dmgIncrease}%`}function eC(t){let l=t;if(document.getElementById("hangerUI").style.display="none",document.getElementById("sideDisplay").innerHTML=`
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${eQ(t)});">
        </div>
        <div id="otherSlots" style="position: absolute; left: ${window.innerWidth/2-200}px; top: 20px; width: 400px; height: 50px; background-color: rgb(0, 0, 0, 0.3); border-radius: 6px; overflow: hidden;">
        </div>
        <div style="position: absolute; overflow-y: scroll; left: 20px; top: ${window.innerHeight/2-250}px; width: 325px; height: 500px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${eQ(t)};">
        ${t.level>=13?1:t.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${t.name}
        ${t.level>=13?`<span style="color: #${tF(t.level)};">${t7(t.level)}</span>`:""}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${t.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${t.ability?t.ability.desc+"<br>":""}
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        Health: ${E(t.health)}<br>
        ${t.builtInDefensePoints?`Defense Points: ${t.builtInDefensePoints} (${((1-u(t.builtInDefensePoints))*100).toFixed(1)}% Resistance)<br>`:""}
        Speed: ${1e3*t.speed} PX/SEC<br>
        ${t.baseShielding?`Energy Shield Health: ${E(t.baseShielding.health)}<br>`:""}
        ${t.baseDamageIncrease?`Base Dmg Increase: ${100*t.baseDamageIncrease}%<br>`:""}
        ${t.reflector?`Damage Reflection: ${100*t.reflector}%<br>`:""}
        ${t.ability&&t.ability.dmg?`Ability Dmg: ${E(t.ability.dmg)}<br>`:""}
        ${t.ability&&t.ability.dotDamage?`Ability DOT Dmg: ${E(t.ability.dotDamage)}<br>`:""}
        ${t.ability&&t.ability.shieldHp?`Ability Shield HP: ${E(t.ability.shieldHp)}<br>`:""}
        ${t.dotResistance?`DOT Resistance: ${ee((1-t.dotResistance)*100)}%<br>`:""}
        ${t.healingMulti?`Healing Effectiveness: ${ee(100*t.healingMulti)}%<br>`:""}
        ${t.revive?`Revival Amount: ${ee(100*t.revive)}%<br>`:""}
        ${t.healingAura?`Healing Aura Power: ${E(t.healingAura)}<br>`:""}
        ${t.ability&&t.ability.showDuration?`Ability Duration: ${t.ability.lastingTime/1e3} sec<br>`:""}
        ${t.ability&&t.ability.abilityDefensePoints?`Ability Defense Points: ${t.ability.abilityDefensePoints}<br>`:""}
        ${t.ability&&t.ability.abilityHealthMulti?`Ability Health Multiplier: ${100*t.ability.abilityHealthMulti}%<br>`:""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="shapeImage" style="position: absolute; left: ${window.innerWidth/2-187.5}px; top: ${window.innerHeight/2-187.5}px; width: 375px; height: 375px;">
        </div>
        <div style="position: absolute; overflow-y: scroll; right: 20px; top: ${window.innerHeight/2-267.5}px; width: 325px; height: 535px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; width: 100%; height: 35px;">
        <div id="switchWeapon" style="position: absolute; font-size: 24px; text-align: center; left: 0px; width: 50%; height: 100%; background-color: rgb(255, 255, 255, .8);">
        WEAPONS
        </div>
        <div id="switchModule" style="position: absolute; cursor: pointer; color: #fff; text-align: center; font-size: 25px; left: 50%; width: 50%; height: 100%; background-color: rgb(0, 0, 0, .3);">
        MODULES
        </div>
        </div>
        <div id="weaponDisplay" style="position: absolute; left: 0px; top: 35px; height: 500px; width: 100%; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.1);">
        </div>
        </div>
        <div id="upgradeShape" style="position: absolute; cursor: pointer; text-align: center; font-size: 35px; color: #fff; left: ${window.innerWidth/2+10}px; bottom: 20px; width: 175px; height: 60px; background-color: rgb(0, 255, 0); border-radius: 6px;">
        UPGRADE
        </div>
        <div id="changeShape" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: ${window.innerWidth/2-185}px; bottom: 20px; width: 175px; height: 60px; background-color: rgb(125, 125, 125); border-radius: 6px;">
        CHANGE
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        <div id="microchipList" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 355px; top: ${window.innerHeight/2+200}px; width: 50px; height: 50px; background-color: rgb(0, 0, 0, .4); border-radius: 4px;">
        <span class="material-symbols-outlined" style="font-size: 50px; color: #fff;">
        dns
        </span>
        </div>
        <div id="microchipDisplay" style="display: none; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; border-radius: 6px; background-color: rgb(0, 0, 0, 0.3);">
        </div>
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        `,document.getElementById("microchipList").onclick=function(){this.style.display="none",document.getElementById("microchipDisplay").style.display="block",function e(t,l,i){let a=.75*window.innerWidth,o=.75*window.innerHeight;if(t.innerHTML=`
        <div id="close" style="position: absolute; cursor: pointer; color: #fff; top: 5px; right: 10px;">
        x
        </div>
        <div style="position: absolute; left: 10px; top: 10px;">

        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${eQ(i)};">
        ${i.level>=13?1:i.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${i.name}
        ${i.level>=13?`<span style="color: #${tF(i.level)};">${t7(i.level)}</span>`:""}
        </strong>
        </div>
        </div>

        </div>
        <div id="shapeImage2" style="position: absolute; left: 10px; top: 50px; width: 300px; height: 300px;">
        </div>

        <div id="microPage1">
        <div style="position: absolute; color: #fff; left: 320px; top: 10px; width: ${a-350}px; height: 50px; border-radius: 4px; background-color: rgb(0, 0, 0, .4);">
        <div style="margin-left: 10px; margin-top: 2px;">
        Microchips for <span style="color: ${eQ(i)}">${i.name}</span><br>
        Microchip slots: ${Math.min(8,i.level)}/8
        </div>

        <div id="change" style="position: absolute; cursor: pointer; padding-top: 5px;padding-left: 2px;padding-right: 2px; border-radius: 4px; padding-bottom: 5px; top: 10px; right: 5px; background-color: #808080;">
        Change Microchip
        </div>
        </div>

        <div id="micoDis" style="position: absolute; color: #fff; left: 320px; top: 70px; width: ${a-350}px; height: ${o-90}px; border-radius: 4px; overflow-y: scroll;">
        </div>


        <div id="buyMenu22" style="position: absolute; display: none; color: #fff; top: ${o/2-112.5}px; left: ${a/2-212.5}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        </div>

        <div id="microPage2" style="display: none;">
        <div style="position: absolute; color: #fff; left: 320px; top: 10px; width: ${a-350}px; height: 50px; border-radius: 4px; background-color: rgb(0, 0, 0, .4);">
        <div style="margin-left: 10px; margin-top: 2px;">
        Microchips for <span style="color: ${eQ(i)}">${i.name}</span><br>
        <div id="slotNumDis">
        Slot to change: 
        </div>
        </div>

        <div id="back" style="position: absolute; cursor: pointer; padding-top: 5px;padding-left: 2px;padding-right: 2px; border-radius: 4px; padding-bottom: 5px; top: 10px; right: 5px; background-color: #808080;">
        Go Back
        </div>
        </div>

        <div id="micoDis2" style="position: absolute; color: #fff; left: 320px; top: 70px; width: ${a-350}px; height: ${o-90}px; border-radius: 4px; overflow-y: scroll;">
        </div>


        <div id="buyMenu222222" style="position: absolute; display: none; color: #fff; top: ${o/2-112.5}px; left: ${a/2-212.5}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        </div>
        `,i.specialOf)document.getElementById("shapeImage2").style.backgroundSize="300px 300px",document.getElementById("shapeImage2").style.backgroundImage=`url('${i.specialOf}')`;else{let n=G(i,!0);n.style="width: 100%; height: 100%;",document.getElementById("shapeImage2").appendChild(n)}document.getElementById("close").onclick=function(){t.style.display="none",l.style.display="block"},document.getElementById("change").onclick=function(){document.getElementById("microPage1").style.display="none",document.getElementById("microPage2").style.display="block",document.getElementById("buyMenu22").style.display="none",r()},document.getElementById("back").onclick=function(){document.getElementById("buyMenu222222").style.display="none",document.getElementById("microPage1").style.display="block",document.getElementById("microPage2").style.display="none",s()};let s=()=>{let e=eL.filter(e=>e.owner==i.sid);document.getElementById("micoDis").innerHTML="";let t=Math.min(i.level,8)-1;for(let l=0;l<8;l++){let o=e.find(e=>e.slot==l);o?document.getElementById("micoDis").innerHTML+=`
                    <div style="position: absolute; left: 0px; top: ${70*l}px; width: 100%; height: 60px; background-color: rgb(0, 0, 0, 0.4); border-radius: 4px;">
                    <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(to right, rgb(0, 0, 0, 0), ${eQ({tier:o.level})});">
                    </div>
                    <div style="position: absolute; top: 0px; left: 0px; width: 60px; height: 60px; background-size: 60px 60px; background-image: url('${o.imageSource}');">
                    ${"object"==typeof o.imageSource?`
                    <span class="material-symbols-outlined" style="font-size: 60px; color: #cfe2f3;">
                    ${o.imageSource[0]}
                    </span>
                    `:""}
                    </div>
                    <div style="position: absolute; top: 5px; left: 65px;">
                    ${o.legendChip?"(Legendary Chip) ":""}${o.name}
                    <hr style="position: absolute; left: 0px; width: ${a-350-225}px; margin-block-start: .2em; margin-block-end: .2em;">
                    <div style="margin-top: 8px; ${o.fontSize?`font-size: ${o.fontSize}px;`:""}">
                    ${o.desc}${"Tough Guy"==o.name?`${Math.abs(100*o.dmgIncrease)}%.`:"Thrill Seeker"==o.name?`${Math.abs(100*o.healthIncrease)}%.`:"Cautious Pilot"==o.name||"Survivor"==o.name||"Spy"==o.name?`${Math.abs(100*o.speedIncrease)}%.`:""}
                    </div>
                    </div>
                    <div style="position: absolute; top: 5px; right: 160px;">
                    ${e6(o)}
                    </div>
                    <div ${3==o.level?"":`id="upgradeMicro${l}"`} style="${3==o.level?"font-size: 16px;":""} position: absolute; cursor: ${3==o.level?"":"pointer"}; text-align: center; top: 7px; width: 120px; height: 45px; right: 10px; background-color: ${3==o.level?"#808080":"#0f0"}; border-radius: 6px;">
                    ${3==o.level?"MAXED<br>LEVEL":"UPGRADE MICROCHIP"}
                    </div>
                    </div>
                    `:l>t||(document.getElementById("micoDis").innerHTML+=`
                    <div id="addMicro${l}" style="position: absolute; cursor: pointer; left: 0px; top: ${70*l}px; width: 100%; height: 60px; background-color: rgb(0, 0, 0, 0.4); border-radius: 4px;">
                    <span class="material-symbols-outlined" style="margin-left: 5px; font-size: 60px; color: #0f0;">
                        add_box
                    </span>
                    <div style="position: absolute; top: 2px; left: 70px; font-size: 40px;">
                    Add Microchip
                    </div>
                    </div>
                    `)}for(let n=0;n<8;n++)document.getElementById(`addMicro${n}`)&&(document.getElementById(`addMicro${n}`).onclick=function(){let t=eP.filter(t=>eR(t,i)&&!e.find(e=>t.name==e.name));if(t.length){let l=t[Math.floor(Math.random()*t.length)];eL.push(new eM(l,i.sid,n)),s()}}),document.getElementById(`upgradeMicro${n}`)&&(document.getElementById(`upgradeMicro${n}`).onclick=function(){let t=e.find(e=>e.slot==n),l=t.level,i=2==l?5e3:1==l?2500:1e3;i*=t.legendChip?2:1,document.getElementById("buyMenu22").style.display="block",document.getElementById("buyMenu22").innerHTML=`
                        <div style="width: 100%; text-align: center; font-size: 30px;">
                        Confirm Upgrade
                        </div>
                        <hr>

                        <div style="position: absolute; top: 60px; left: 150px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
                        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
                        </div>
                        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
                        ${E(i)}
                        </div>
                        </div>

                        <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: 137.5px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
                        Confirm
                        </div>
                        `,document.getElementById("confirm").onclick=function(){p.workshopPoints-i>=0&&(I("workshopPoints",-i),eH(t),document.getElementById("buyMenu22").style.display="none",s())}})},r=()=>{let e,t=eL.filter(e=>e.owner==i.sid),l=eP.filter(e=>eR(e,i)&&!t.find(t=>e.name==t.name));document.getElementById("slotNumDis").innerHTML="Slot to change: ",document.getElementById("micoDis2").innerHTML="";for(let o=0;o<Math.min(8,i.level);o++)t.find(e=>e.slot==o)&&(document.getElementById("slotNumDis").innerHTML+=`
                    <button id="changeSlotsss${o}" style="cursor: pointer;">
                    ${o+1}
                    </button>
                    `);for(let n=0;n<Math.min(8,i.level);n++)document.getElementById(`changeSlotsss${n}`)&&(document.getElementById(`changeSlotsss${n}`).onclick=function(){for(let t=0;t<Math.min(12,i.level);t++)document.getElementById(`changeSlotsss${t}`)&&(document.getElementById(`changeSlotsss${t}`).style.color=null,document.getElementById(`changeSlotsss${t}`).style.backgroundColor=null);e=n,document.getElementById(`changeSlotsss${n}`).style.color="#fff",document.getElementById(`changeSlotsss${n}`).style.backgroundColor="#000"});for(let $=0;$<l.length;$++){let d=new eM(l[$]);document.getElementById("micoDis2").innerHTML+=`
                <div style="position: absolute; left: 0px; top: ${70*$}px; width: 100%; height: 60px; background-color: rgb(0, 0, 0, 0.4); border-radius: 4px;">
                <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(to right, rgb(0, 0, 0, 0), ${eQ({tier:d.level})});">
                </div>
                <div style="position: absolute; top: 0px; left: 0px; width: 60px; height: 60px; background-size: 60px 60px; background-image: url('${d.imageSource}');">
                ${"object"==typeof d.imageSource?`
                <span class="material-symbols-outlined" style="font-size: 60px; color: #cfe2f3;">
                ${d.imageSource[0]}
                </span>
                `:""}
                </div>
                <div style="position: absolute; top: 5px; left: 65px;">
                ${d.legendChip?"(Legendary Chip) ":""}${d.name}
                <hr style="position: absolute; left: 0px; width: ${a-350-225}px; margin-block-start: .2em; margin-block-end: .2em;">
                <div style="margin-top: 8px; ${d.fontSize?`font-size: ${d.fontSize}px;`:""}">
                ${d.desc}${"Tough Guy"==d.name?`${Math.abs(100*d.dmgIncrease)}%.`:"Thrill Seeker"==d.name?`${Math.abs(100*d.healthIncrease)}%.`:"Cautious Pilot"==d.name||"Survivor"==d.name||"Spy"==d.name?`${Math.abs(100*d.speedIncrease)}%.`:""}
                </div>
                </div>
                <div style="position: absolute; top: 5px; right: 160px;">
                ${e6(d)}
                </div>
                <div id="addddddMicro${$}" style="position: absolute; font-size: 35px; cursor: pointer; text-align: center; top: 7px; width: 120px; height: 45px; right: 10px; background-color: #0f0; border-radius: 6px;">
                BUY
                </div>
                </div>
                `}for(let g=0;g<l.length;g++)document.getElementById(`addddddMicro${g}`).onclick=function(){document.getElementById("buyMenu222222").style.display="block";let t=250*Math.min(12,i.level)*(l[g].legendChip?5:1);document.getElementById("buyMenu222222").innerHTML=`
                    <div style="width: 100%; text-align: center; font-size: 30px;">
                    Confirm Purchase
                    </div>
                    <hr>

                    <div style="position: absolute; top: 60px; left: 150px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
                    <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
                    </div>
                    <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
                    ${t}
                    </div>
                    </div>

                    <div id="LAMLASMDIOASJDOIASJDIASODJOASDISDJAOJAISDJAISD" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: 137.5px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
                    Confirm
                    </div>
                    `,document.getElementById("LAMLASMDIOASJDOIASJDIASODJOASDISDJAOJAISDJAISD").onclick=function(){if(e>=0&&null!=e&&void 0!=e&&p.workshopPoints-t>=0){I("workshopPoints",-t),document.getElementById("back").click(),document.getElementById("buyMenu222222").style.display="none";let a=eL.findIndex(t=>t.owner==i.sid&&t.slot==e);eL.splice(a,1),eL.push(new eM(l[g],i.sid,e)),s(),r(),to()}}}};s()}(document.getElementById("microchipDisplay"),this,t)},document.getElementById("backButton").onclick=function(){document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",te(),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))},t.specialOf)document.getElementById("shapeImage").style.backgroundSize="375px 375px",document.getElementById("shapeImage").style.backgroundImage=`url('${t.specialOf}')`;else{let i=G(t,!0);i.style="width: 100%; height: 100%;",document.getElementById("shapeImage").appendChild(i)}let a=p.shapes.filter(e=>null!=e.slot&&e.slot>=0).sort((e,t)=>e.slot-t.slot),o=document.getElementById("otherSlots");for(let n=0;n<8;n++)o.innerHTML+=`
            <div id="slotElement${n}" style="position: absolute; top: 0px; left: ${50*n}px; width: 50px; height: 50px; background-color: ${n%2==0?"rgb(0, 0, 0, 0.2)":"rgb(0, 0, 0, 0.4)"};">
            </div>
            `;for(let s=0;s<8;s++){let r=a[s];if(r){if(r.specialOf)document.getElementById(`slotElement${s}`).style.backgroundSize="50px 50px",document.getElementById(`slotElement${s}`).style.backgroundImage=`url('${r.specialOf}')`;else{let $=G(r,!0);$.style="width: 100%; height: 100%;",document.getElementById("slotElement"+s).appendChild($)}r==l?document.getElementById(`slotElement${s}`).style.backgroundColor="rgb(0, 255, 0)":(document.getElementById(`slotElement${s}`).style.cursor="pointer",document.getElementById(`slotElement${s}`).onclick=function(){eC(r)})}else e[s].unlocked||(document.getElementById(`slotElement${s}`).style.backgroundColor="rgb(0, 0, 0, 0.4)",document.getElementById(`slotElement${s}`).innerHTML=`
                <span class="material-symbols-outlined" style="font-size: 50px; color: #fff;">
                lock
                </span>
                `)}let d=t.hardpoints.light+t.hardpoints.heavy,g=p.weapons.filter(e=>e.owner==t.sid),c=[],m=()=>{c=[];for(let e=0;e<d;e++){let l="";e<t.hardpoints.light&&t.hardpoints.light>0?(c.push("LIGHT slot"+e),l="LIGHT"):(c.push("HEAVY slot"+e),l="HEAVY"),document.getElementById("weaponDisplay").innerHTML+=`
                <div id="${l} slot${e}" style="position: relative; cursor: pointer; height: 125px; width: 100%; background-color: ${e%2?"rgb(0, 0, 0, 0.2);":"rgb(255, 255, 255, 0.1);"}}">
                </div>
                `}for(let i=0;i<c.length;i++){let a=c[i],o=g.find(e=>e.slot==parseInt(a[a.length-1]));if(o){let n=K(o,!0);n.style="width: 125px; height: 125px;",document.getElementById(a).appendChild(n),document.getElementById(a).innerHTML+=`
                    <div style="position: absolute; color: ${eQ(o)}; top: 5px; left: 135px; font-size: 24px;">
                    ${o.level>=13?`${o.name} <span style="color: ${13==o.level?"#0f0":"#ffff00"};">${13==o.level?"MK2":"MK3"}</span>`:`Lvl ${o.level} ${o.name}`}
                    <div style="color: #fff; font-size: 14px; margin-top: -5px;">${a.includes("LIGHT")?"Light":"Heavy"}</div>
                    </div>
                    `,document.getElementById(a).onclick=function(){Q(o,t,parseInt(a[a.length-1]))}}else document.getElementById(a).innerHTML=`
                    <span style="position: absolute; top: 35.5px; left: 27.5px; font-size: 40px;">Equip Weapon</span>
                    `,document.getElementById(a).onclick=function(){Q(a.includes("LIGHT")?"Light":"Heavy",t,parseInt(a[a.length-1]))}}};document.getElementById("switchWeapon").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .8)",document.getElementById("switchModule").style.color="#fff",document.getElementById("switchModule").style.cursor="pointer",document.getElementById("switchModule").style.backgroundColor="rgb(0, 0, 0, .3)",document.getElementById("weaponDisplay").innerHTML="",m()};let f=p.modules.filter(e=>e.owner==t.sid),b=t.moduleHardpoints||0;document.getElementById("switchModule").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .8)",document.getElementById("switchWeapon").style.color="#fff",document.getElementById("switchWeapon").style.cursor="pointer",document.getElementById("switchWeapon").style.backgroundColor="rgb(0, 0, 0, .3)",document.getElementById("weaponDisplay").innerHTML="";let e=[];for(let l=0;l<b;l++)document.getElementById("weaponDisplay").innerHTML+=`
                <div id="moduleSlot${l}" style="position: relative; cursor: pointer; height: 125px; width: 100%; background-color: ${l%2?"rgb(0, 0, 0, 0.2);":"rgb(255, 255, 255, 0.1);"}}">
                </div>
                `,e.push(`moduleSlot${l}`);for(let i=0;i<e.length;i++){let a=e[i],o=f.find(e=>e.slot==parseInt(a[a.length-1]));if(o){let n=K(o,!0);n.style="width: 125px; height: 125px;",document.getElementById(a).appendChild(n),document.getElementById(a).innerHTML+=`
                    <div style="position: absolute; top: 5px; color: ${eQ(o)}; left: 135px; font-size: 24px;">
                    Lvl ${o.level} ${o.name}
                    </div>
                    `}else document.getElementById(a).innerHTML=`
                    <span style="position: absolute; top: 35.5px; left: 35.25px; font-size: 40px;">
                    Equip Module
                    </span>
                    `;document.getElementById(a).onclick=function(){eo(o,t,parseInt(a[a.length-1]))}}},m(),document.getElementById("upgradeShape").onclick=function(){o.style.display="none",document.getElementById("microchipDisplay").style.display="none",document.getElementById("microchipList").style.display="block",document.body.appendChild(document.getElementById("moneyDisplay"));let e=.75*window.innerWidth;if(document.getElementById("upgradeMenu").style.display="block",document.getElementById("upgradeMenu").innerHTML=`
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14,13].includes(t.level)?`${t.name} <span style="color: ${13==t.level?"#0f0":"#ffff00"};">${13==t.level?"MK2":"MK3"}</span>`:`Lvl ${t.level} ${t.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${eT("health",t)}
            ${eT("speed",t)}
            ${eT("ability damage",t)}
            ${eT("ability dot damage",t)}
            ${eT("shield hp",t)}
            ${eT("ashield hp",t)}
            ${eT("healing aura",t)}
            ${eT("lasting time",t)}
            ${eT("defense points ability",t)}
            ${eT("abilityHealthMulti",t)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${e/2-100}px; bottom: 10px; background-color: ${h[t.tier].shapes[t.level]?"#00ff00":[12,13].includes(t.level)?"#ffff00":"#808080"};">
            <div style="width: 100%; text-align: center; color: ${[12,13].includes(t.level)?"#f00":"#fff"}; font-size: ${h[t.tier].shapes[t.level]?"24":[12,13].includes(t.level)?"24":"40"}px; margin-top: ${h[t.tier].shapes[t.level]?"5":12==t.level?"5":"10"}px;">${h[t.tier].shapes[t.level]?"UPGRADE":[12,13].includes(t.level)?"ENHANCE":"MAXED"}</div>
            <div style="color: ${[12,13].includes(t.level)?"#f00":"#fff"}; display: ${h[t.tier].shapes[t.level]?"block":[12,13].includes(t.level)?"block":"none"}; width: 100%; text-align: center; font-size: 12px;">${[12,13].includes(t.level)?`${E(t.enhanceCost*(13==t.level?48:1))} Gold`:`${E(h[t.tier].shapes[t.level])} Sliver`}</div>
            </div>
            `,t.specialOf)document.getElementById("upgradeMenu").style.backgroundPosition="0px 80px",document.getElementById("upgradeMenu").style.backgroundRepeat="no-repeat",document.getElementById("upgradeMenu").style.backgroundSize="280px 280px",document.getElementById("upgradeMenu").style.backgroundImage=`url('${t.specialOf}')`;else{let l=G(t,!0);l.style="width: 280px; height: 280px;",document.getElementById("upgradeMenu").appendChild(l)}document.getElementById("leaveUpgrade").onclick=function(){document.getElementById("upgradeMenu").style.display="none",o.style.display="block",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))},document.getElementById("UPGRADE").onclick=function(){if(h[t.tier].shapes[t.level]||12==t.level||13==t.level){if(t.level>=12)p.gold-t.enhanceCost*(13==t.level?48:1)>=0&&(I("gold",-(t.enhanceCost*(13==t.level?48:1))),e4(t),document.getElementById("slot"+t.slot).click(),document.getElementById("upgradeShape").click());else if(p.sliver-h[t.tier].shapes[t.level]>=0)I("sliver",-h[t.tier].shapes[t.level]),e4(t),document.getElementById("slot"+t.slot).click(),document.getElementById("upgradeShape").click();else if(p.gold>0){let e=h[t.tier].shapes[t.level]-p.sliver,l=Math.round(e/1250);if(p.gold-l>=0){let i=prompt(`Not Enough Silver!
You Need ${E(e)} Silver!
Use ${E(l)} Gold to make up for the amount of silver missing!
Type "y" or "yes" to confirm.`);i&&("yes"==(i=i.toLocaleLowerCase())||"y"==i)&&(I("sliver",-p.sliver),I("gold",-l),e4(t),document.getElementById("slot"+t.slot).click(),document.getElementById("upgradeShape").click())}}}}},document.getElementById("changeShape").onclick=function(){eJ(t.slot),to()}}let eO=m;function e5(t,l,i,a,o,n){let s=t[l];if(s.isItem||(s=new eO(s,null,!0)),document.getElementById("WEAPONdisplay").innerHTML=`
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${eQ(s)});">
        </div>
        <div style="position: absolute; overflow-y: scroll; left: 80px; top: ${window.innerHeight/2-250}px; width: 325px; height: 500px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${eQ(s)};">
        ${s.level>=13?1:s.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${s.name}
        ${s.level>=13?`<span style="color: #${tF(s.level)};">${t7(s.level)}</span>`:""}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${s.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${s.ability?s.ability.desc+"<br>":""}
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        Health: ${E(s.health)}<br>
        ${s.builtInDefensePoints?`Defense Points: ${s.builtInDefensePoints} (${((1-u(s.builtInDefensePoints))*100).toFixed(1)}% Resistance)<br>`:""}
        Speed: ${1e3*s.speed} PX/SEC<br>
        ${s.baseShielding?`Energy Shield Health: ${E(s.baseShielding.health)}<br>`:""}
        ${s.baseDamageIncrease?`Base Dmg Increase: ${100*s.baseDamageIncrease}%<br>`:""}
        ${s.reflector?`Damage Reflection: ${100*s.reflector}%<br>`:""}
        ${s.ability&&s.ability.dmg?`Ability Dmg: ${E(s.ability.dmg)}<br>`:""}
        ${s.ability&&s.ability.dotDamage?`Ability DOT Dmg: ${E(s.ability.dotDamage)}<br>`:""}
        ${s.ability&&s.ability.shieldHp?`Ability Shield HP: ${E(s.ability.shieldHp)}<br>`:""}
        ${s.dotResistance?`DOT Resistance: ${ee((1-s.dotResistance)*100)}%<br>`:""}
        ${s.healingMulti?`Healing Effectiveness: ${ee(100*s.healingMulti)}%<br>`:""}
        ${s.revive?`Revival Amount: ${ee(100*s.revive)}%<br>`:""}
        ${s.ability&&s.ability.showDuration?`Ability Duration: ${s.ability.lastingTime/1e3} sec<br>`:""}
        ${s.ability&&s.ability.abilityDefensePoints?`Ability Defense Points: ${s.ability.abilityDefensePoints}<br>`:""}
        ${s.ability&&s.ability.abilityHealthMulti?`Ability Health Multiplier: ${100*s.ability.abilityHealthMulti}%<br>`:""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="shapeImage" style="position: absolute; left: ${window.innerWidth/2-187.5}px; top: ${window.innerHeight/2-187.5}px; width: 375px; height: 375px;">
        </div>
        <div style="position: absolute; overflow-y: scroll; right: 80px; top: ${window.innerHeight/2-267.5}px; width: 325px; height: 535px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; width: 100%; height: 35px;">
        <div id="switchWeapon" style="position: absolute; font-size: 24px; text-align: center; left: 0px; width: 50%; height: 100%; background-color: rgb(255, 255, 255, .8);">
        WEAPONS
        </div>
        <div id="switchModule" style="position: absolute; cursor: pointer; color: #fff; text-align: center; font-size: 25px; left: 50%; width: 50%; height: 100%; background-color: rgb(0, 0, 0, .3);">
        MODULES
        </div>
        </div>
        <div id="weaponDisplay" style="position: absolute; left: 0px; top: 35px; height: 500px; width: 100%; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.1);">
        </div>
        </div>
        <div id="upgradeMenu" style="position: absolute; z-index: 10000; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div id="upgradeShape" style="position: absolute; cursor: pointer; text-align: center; font-size: 35px; color: #fff; left: ${window.innerWidth/2+10}px; bottom: 20px; width: 175px; height: 60px; background-color: rgb(0, 255, 0); border-radius: 6px;">
        UPGRADE
        </div>
        <div id="equipShape" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: ${window.innerWidth/2-185}px; bottom: 20px; width: 175px; height: 60px; background-color: rgb(0, 255, 0); border-radius: 6px;">
        EQUIP
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        <div style="position: absolute; bottom: 100px; left: 12.5%; width: 75%; height: 6px; background-color: #fff; border-radius: 4px; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: ${1/t.length*100*l}%; width: ${1/t.length*100}%; height: 100%; background-color: #03fcec;">
        </div>
        </div>
        <div id="buyShape" style="position: absolute; display: none; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: ${window.innerWidth/2-87.5}px; bottom: 20px; width: 175px; height: 60px; background-color: rgb(0, 255, 0); border-radius: 6px;">
        BUY
        </div>
        <div id="buyMenu" style="position: absolute; display: none; color: #fff; top: ${window.innerHeight/2-112.5}px; left: ${window.innerWidth/2-212.5}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div id="sellItem" style="position: absolute; display: ${t[l].isItem?s==i?"none":"block":"none"}; cursor: pointer; top: ${window.innerHeight/2+217.5}px; right: 415px; width: 50px; height: 50px; background-color: rgb(0, 0, 0, .4);">
        <span class="material-symbols-outlined" style="font-size: 50px; color: #fff;">
        delete
        </span>
        </div>
        `,document.getElementById("sellItem").onclick=function(){document.getElementById("buyMenu").style.display="block",document.getElementById("buyMenu").innerHTML=`
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Sale
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: 60px; left: 150px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${ez}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(s.sellPrice)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 26px; text-align: center; bottom: 10px; left: 137.5px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `,document.getElementById("confirm").onclick=function(){let t=p.shapes.findIndex(e=>s==e);I("sliver",s.sellPrice),p.weapons.filter(e=>s.sid==e.owner).forEach(e=>{e.owner=null,e.slot=null}),p.modules.filter(e=>s.sid==e.owner).forEach(e=>{e.owner=null,e.slot=null}),e[s.slot]&&(e[s.slot].used=!1),p.shapes.splice(t,1),document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block"},document.getElementById("lo____l").onclick=function(){document.getElementById("buyMenu").style.display="none",document.getElementById("buyMenu").innerHTML=""}},s.specialOf)document.getElementById("shapeImage").style.backgroundSize="375px 375px",document.getElementById("shapeImage").style.backgroundImage=`url('${s.specialOf}')`;else{let r=G(s,!0);r.style="width: 100%; height: 100%;",document.getElementById("shapeImage").appendChild(r)}document.getElementById("storeButton").style.display="block",document.getElementById("inventoryButton").style.display="block",0==l&&i&&t[l].isItem?(document.getElementById("equipShape").style.display="none",document.getElementById("upgradeShape").style.left=`${window.innerWidth/2-87.5}px`):t[l].isItem||(document.getElementById("equipShape").style.display="none",document.getElementById("upgradeShape").style.display="none",t[l].dontSell||(document.getElementById("buyShape").style.display="block")),document.getElementById("buyShape").onclick=function(){document.body.appendChild(document.getElementById("moneyDisplay")),document.getElementById("buyMenu").style.display="block",document.getElementById("storeButton").style.display="none",document.getElementById("inventoryButton").style.display="none";let o=t[l];document.getElementById("buyMenu").innerHTML=`
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Purchase
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: 60px; left: 150px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${ez}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(o.cost.sliver)}
            </div>
            </div>
    
            <div style="position: absolute; top: 60px; left: 12.5px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${eN}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
            ${E(o.cost.gold)}
            </div>
            </div>
    
            <div style="position: absolute; top: 60px; left: 287.5px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${E(o.cost.workshopPoints||0)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: 137.5px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `,document.getElementById("confirm").onclick=function(){let o=t[l];if(p.sliver-o.cost.sliver>=0&&p.gold-o.cost.gold>=0&&(!o.cost.workshopPoints||p.workshopPoints-o.cost.workshopPoints>=0)){I("sliver",-o.cost.sliver),I("gold",-o.cost.gold),I("workshopPoints",-(o.cost.workshopPoints||0)),i&&(i.slot=null),e[a].used=!0;let n=c;p.shapes.push(new eO(o,a));let s=o.hardpoints.light+o.hardpoints.heavy;for(let r=0;r<s;r++)r<o.hardpoints.light&&o.hardpoints.light>0?p.weapons.push(new b(_[0],n,r)):p.weapons.push(new b(_[2],n,r));document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),document.getElementById("hangerUI").style.display="block",te(),to()}},document.getElementById("lo____l").onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),document.getElementById("buyMenu").style.display="none",document.getElementById("storeButton").style.display="block",document.getElementById("inventoryButton").style.display="block"}};let $=s.hardpoints.light+s.hardpoints.heavy,d=n?p.weapons.filter(e=>e.owner==s.sid):[];if(!n)for(let g=0;g<$;g++)g<s.hardpoints.light&&s.hardpoints.light>0?d.push(new b(_[0],null,g)):d.push(new b(_[2],null,g));let m=[],f=()=>{m=[];for(let e=0;e<$;e++){let t="";e<s.hardpoints.light&&s.hardpoints.light>0?(m.push("LIGHT slot"+e),t="LIGHT"):(m.push("HEAVY slot"+e),t="HEAVY"),document.getElementById("weaponDisplay").innerHTML+=`
                <div id="${t} slot${e}" style="position: relative; ${n?"cursor: pointer;":""} height: 125px; width: 100%; background-color: ${e%2?"rgb(0, 0, 0, 0.2);":"rgb(255, 255, 255, 0.1);"}}">
                </div>
                `}for(let l=0;l<m.length;l++){let i=m[l],a=d.find(e=>e.slot==parseInt(i[i.length-1]));if(a){let o=K(a,!0);o.style="width: 125px; height: 125px;",document.getElementById(i).appendChild(o),document.getElementById(i).innerHTML+=`
                    <div style="position: absolute; color: ${eQ(a)}; top: 5px; left: 135px; font-size: 24px;">
                    ${a.level>=13?`${a.name} <span style="color: ${13==a.level?"#0f0":"#ffff00"};">${13==a.level?"MK2":"MK3"}</span>`:`Lvl ${a.level} ${a.name}`}
                    <div style="color: #fff; font-size: 14px; margin-top: -5px;">${i.includes("LIGHT")?"Light":"Heavy"}</div>
                    </div>
                    `,n&&(document.getElementById(i).onclick=function(){Q(a,s,parseInt(i[i.length-1]))})}else document.getElementById(i).innerHTML=`
                    <span style="position: absolute; top: 35.5px; left: 27.5px; font-size: 40px;">Equip Weapon</span>
                    `,document.getElementById(i).onclick=function(){Q(i.includes("LIGHT")?"Light":"Heavy",s,parseInt(i[i.length-1]))}}};document.getElementById("switchWeapon").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .8)",document.getElementById("switchModule").style.color="#fff",document.getElementById("switchModule").style.cursor="pointer",document.getElementById("switchModule").style.backgroundColor="rgb(0, 0, 0, .3)",document.getElementById("weaponDisplay").innerHTML="",f()};let v=n?p.modules.filter(e=>e.owner==s.sid):[],w=s.moduleHardpoints||0;document.getElementById("switchModule").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .8)",document.getElementById("switchWeapon").style.color="#fff",document.getElementById("switchWeapon").style.cursor="pointer",document.getElementById("switchWeapon").style.backgroundColor="rgb(0, 0, 0, .3)",document.getElementById("weaponDisplay").innerHTML="";let e=[];for(let t=0;t<w;t++)document.getElementById("weaponDisplay").innerHTML+=`
                <div id="moduleSlot${t}" style="position: relative; ${n?"cursor: pointer;":""} height: 125px; width: 100%; background-color: ${t%2?"rgb(0, 0, 0, 0.2);":"rgb(255, 255, 255, 0.1);"}}">
                </div>
                `,e.push(`moduleSlot${t}`);for(let l=0;l<e.length;l++){let i=e[l],a=v.find(e=>e.slot==parseInt(i[i.length-1]));if(a){let o=K(a,!0);o.style="width: 125px; height: 125px;",document.getElementById(i).appendChild(o),document.getElementById(i).innerHTML+=`
                    <div style="position: absolute; top: 5px; color: ${eQ(a)}; left: 135px; font-size: 24px;">
                    Lvl ${a.level} ${a.name}
                    </div>
                    `}else document.getElementById(i).innerHTML=`
                    <span style="position: absolute; top: 35.5px; left: 35.25px; font-size: 40px;">
                    Equip Module
                    </span>
                    `;n&&(document.getElementById(i).onclick=function(){p.modules.filter(e=>null==e.owner).length||a?eo(a,s,parseInt(i[i.length-1])):alert("You have no modules in inventory.")})}},f(),document.getElementById("backButton").onclick=function(){i?document.getElementById("slot"+i.slot).click():(document.getElementById("hangerUI").style.display="block",document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")))},document.getElementById("upgradeShape").onclick=function(){document.body.appendChild(document.getElementById("moneyDisplay"));let e=.75*window.innerWidth;if(document.getElementById("upgradeMenu").style.display="block",document.getElementById("upgradeMenu").innerHTML=`
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14,13].includes(s.level)?`${s.name} <span style="color: ${13==s.level?"#0f0":"#ffff00"};">${13==s.level?"MK2":"MK3"}</span>`:`Lvl ${s.level} ${s.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${eT("health",s)}
            ${eT("speed",s)}
            ${eT("ability damage",s)}
            ${eT("ability dot damage",s)}
            ${eT("shield hp",s)}
            ${eT("ashield hp",s)}
            ${eT("healing aura",s)}
            ${eT("lasting time",s)}
            ${eT("defense points ability",s)}
            ${eT("abilityHealthMulti",s)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${e/2-100}px; bottom: 10px; background-color: ${h[s.tier].shapes[s.level]?"#00ff00":[12,13].includes(s.level)?"#ffff00":"#808080"};">
            <div style="width: 100%; text-align: center; color: ${[12,13].includes(s.level)?"#f00":"#fff"}; font-size: ${h[s.tier].shapes[s.level]?"24":[12,13].includes(s.level)?"24":"40"}px; margin-top: ${h[s.tier].shapes[s.level]?"5":12==s.level?"5":"10"}px;">${h[s.tier].shapes[s.level]?"UPGRADE":[12,13].includes(s.level)?"ENHANCE":"MAXED"}</div>
            <div style="color: ${[12,13].includes(s.level)?"#f00":"#fff"}; display: ${h[s.tier].shapes[s.level]?"block":[12,13].includes(s.level)?"block":"none"}; width: 100%; text-align: center; font-size: 12px;">${[12,13].includes(s.level)?`${E(s.enhanceCost*(13==s.level?48:1))} Gold`:`${E(h[s.tier].shapes[s.level])} Sliver`}</div>
            </div>
            `,s.specialOf)document.getElementById("upgradeMenu").style.backgroundPosition="0px 80px",document.getElementById("upgradeMenu").style.backgroundRepeat="no-repeat",document.getElementById("upgradeMenu").style.backgroundSize="280px 280px",document.getElementById("upgradeMenu").style.backgroundImage=`url('${s.specialOf}')`;else{let o=G(s,!0);o.style="width: 280px; height: 280px;",document.getElementById("upgradeMenu").appendChild(o)}document.getElementById("leaveUpgrade").onclick=function(){document.getElementById("upgradeMenu").style.display="none",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"))},document.getElementById("UPGRADE").onclick=function(){if(h[s.tier].shapes[s.level]||12==s.level||13==s.level){if(s.level>=12)p.gold-s.enhanceCost*(13==s.level?48:1)>=0&&(I("gold",-(s.enhanceCost*(13==s.level?48:1))),e4(s),e5(t,l,i,a,!0));else if(p.sliver-h[s.tier].shapes[s.level]>=0)I("sliver",-h[s.tier].shapes[s.level]),e4(s),e5(t,l,i,a,!0);else if(p.gold>0){let e=h[s.tier].shapes[s.level]-p.sliver,o=Math.round(e/1250);if(p.gold-o>=0){let n=prompt(`Not Enough Silver!
You Need ${E(e)} Silver!
Use ${E(o)} Gold to make up for the amount of silver missing!
Type "y" or "yes" to confirm.`);n&&("yes"==(n=n.toLocaleLowerCase())||"y"==n)&&(I("sliver",-p.sliver),I("gold",-o),e4(s),e5(t,l,i,a,!0))}}}}},document.getElementById("equipShape").onclick=function(){t[l].slot=a,e[a].used=!0,i&&(i.slot=null),document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),te(),document.getElementById("slot"+a).click(),to()},o&&document.getElementById("upgradeShape").click()}var eN="./images/icons/au_icon.png",ez="./images/icons/ag_icon.png",eF=[{source:"./images/lootbox/basic_lootbox.png",rewards:[{type:"shape",index:0},{type:"weapon",index:0},{type:"money",au:!0,amount:2},{type:"money",ag:!0,amount:1e4},{type:"money",ag:!0,amount:5e3},{type:"money",ag:!0,amount:2e3},{type:"money",ag:!0,amount:2e4},{type:"money",ag:!0,amount:15e3},{type:"money",au:!0,amount:5},{type:"shape",id:"12",rare:2,index:1},{type:"money",au:!0,id:"13",rare:2,amount:100},{type:"money",ag:!0,id:"16",rare:2,amount:1e6}],cost:10},{source:"./images/lootbox/copper_lootbox.png",rewards:[{index:1,type:"weapon"},{index:5,type:"shape",id:"LOL",rare:10},{type:"shape",index:6,id:"12",rare:3},{type:"weapon",index:5,id:"13",rare:3},{type:"money",au:!0,amount:100},{type:"money",au:!0,amount:200},{type:"money",au:!0,amount:250},{type:"money",au:!0,amount:1e3,id:"124",rare:3},{type:"shape",index:3,id:"1212",rare:1},{type:"shape",index:4,id:"12222231",rare:1},{type:"money",ag:!0,amount:1e5},{type:"money",ag:!0,amount:2e5},{type:"money",ag:!0,amount:1e6},{type:"weapon",index:3,id:"12123",rare:1}],cost:100},{source:"./images/lootbox/gold_lootbox.png",rewards:[{type:"weapon",index:6},{type:"weapon",index:7},{type:"weapon",index:10},{type:"weapon",index:13},{type:"shape",index:13},{type:"weapon",index:5},{type:"money",ag:!0,amount:2e6},{type:"money",ag:!0,amount:1e6},{type:"money",ag:!0,amount:4e6},{type:"money",ag:!0,amount:8e6},{type:"money",ag:!0,amount:1e7},{type:"money",au:!0,amount:2500},{type:"money",au:!0,amount:1e3},{type:"money",au:!0,amount:2e3},{type:"shape",index:5},{type:"shape",index:8},{type:"shape",index:9},{type:"shape",index:10},{type:"money",keys:!0,amount:5e3,rare:1}],cost:1e3},{source:"./images/lootbox/diamond_lootbox.png",rewards:[{amount:2,type:"money",token:"token 2"},{type:"weapon",index:8},{type:"shape",index:21},{type:"shape",id:"1231232",rare:1,index:18},{type:"shape",id:"1231s232",rare:1,index:19},{type:"weapon",index:9},{type:"weapon",index:11},{type:"weapon",index:12},{type:"weapon",index:14},{type:"weapon",index:15},{type:"shape",id:"1231213123232",rare:1,index:19},{type:"money",ag:!0,amount:5e7},{type:"money",ag:!0,amount:1e8},{type:"money",ag:!0,amount:15e7},{type:"money",ag:!0,amount:2e8},{type:"shape",index:14},{type:"shape",index:12},{type:"shape",id:"LSMDLAMSDLSAD",rare:4,index:15},{type:"money",au:!0,amount:5e3},{type:"money",au:!0,amount:1e4},{type:"money",au:!0,amount:15e3},{type:"money",au:!0,amount:2e4}],cost:1e4}];function e7(e){if("shape"==e.type){let t=c;p.shapes.push(new m(f[e.index]));let l=f[e.index].hardpoints.light+f[e.index].hardpoints.heavy;for(let i=0;i<l;i++)i<f[e.index].hardpoints.light&&f[e.index].hardpoints.light>0?p.weapons.push(new b(_[0],t,i)):p.weapons.push(new b(_[2],t,i))}else"weapon"==e.type?p.weapons.push(new b(_[e.index],null,null)):"module"==e.type?p.modules.push(new v(w[e.index],null,null)):I(e.token?e.token:e.au?"gold":e.keys?"keys":"sliver",e.amount)}var eW={};function eU(e,{style:t,content:l,append:i}){let a=eW[e];return a||((a=document.createElement("div")).id=e,a.style=t,a.innerHTML=l,i&&(i.size?(a.style.backgroundSize=`${i.size}px ${i.size}px`,a.style.backgroundImage=`url('${i.image}')`):a.appendChild(i)),eW[e]=a),a}function eG(e){if("weapon"==e.type){let t=K(_[e.index],!0);return t.style="width: 100%; height: 100%;",t}if("shape"==e.type){let l=f[e.index];if(l.specialOf)return{size:200,image:l.specialOf};{let i=G(l,!0).toDataURL(),a=new Image;return a.src=i,a.style="width: 100%; height: 100%;",a}}if("module"==e.type){let o=X(w[e.index],!0);return o.style="width: 100%; height: 100%;",o}}function e8(e,t,l){if("block"==document.getElementById("rewardAnimation").style.display)return;document.getElementById("rewardAnimation").innerHTML="",document.getElementById("rewardAnimation").style.display="block",document.getElementById("rewardAnimation").style.top=window.innerHeight/2-100+"px";let i={"token 1":"./images/tokens/mk1_token.png","token 2":"./images/tokens/mk2_token.png","token 3":"./images/tokens/mk3_token.png"},a=0,o=0,n=200*e.length,s=window.innerWidth/n;for(let r=0;r<s;r++)for(let $=0;$<e.length;$++){let d=eU(`${l}_${JSON.stringify(e[$])}_${a}`,{style:`position: absolute; width: 200px; height: 200px; top: 0px; left: ${200*a}px; background-color: ${a%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${e[$].ag||e[$].au||e[$].keys?"background-image: url('"+(e[$].ag?ez:e[$].keys?ti:eN)+"')":i[e[$].token]?`background-image: url('${i[e[$].token]}')`:""}`,content:`
                    <div style="color: ${a%2?"#fff":"#000"}; font-size: 20px; display: ${i[e[$].token]?"block":e[$].ag?"block":e[$].au?"block":e[$].keys?"block":"none"}; position: absolute; bottom: 5px; right: 5px;">
                    ${E(e[$].amount)}
                    </div>
                    `,append:"money"!=e[$].type&&eG(e[$])});document.getElementById("rewardAnimation").appendChild(d),a++}for(let p=0;p<e.length;p++){let g=eU(`${l}_${JSON.stringify(e[p])}_${a}_${e[p]==t?"true":"false"}`,{style:`position: absolute; width: 200px; height: 200px; top: 0px; left: ${200*a}px; background-color: ${e[p]==t?"rgb(255, 215, 0, 0.8)":a%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${e[p].ag||e[p].au||e[p].keys?"background-image: url('"+(e[p].ag?ez:e[p].keys?ti:eN)+"')":i[e[p].token]?`background-image: url('${i[e[p].token]}')`:""}`,content:`
                <div style="color: ${a%2?"#fff":"#000"}; font-size: 20px; display: ${i[e[p].token]?"block":e[p].ag?"block":e[p].au?"block":e[p].keys?"block":"none"}; position: absolute; bottom: 5px; right: 5px;">
                ${E(e[p].amount)}
                </div>
                `,append:"money"!=e[p].type&&eG(e[p])});document.getElementById("rewardAnimation").appendChild(g),t==e[p]&&(o=a),a++}for(let h=0;h<s;h++)for(let c=0;c<e.length;c++){let m=eU(`${l}_${JSON.stringify(e[c])}_${a}`,{style:`position: absolute; width: 200px; height: 200px; top: 0px; left: ${200*a}px; background-color: ${a%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${e[c].ag||e[c].au||e[c].keys?"background-image: url('"+(e[c].ag?ez:e[c].keys?ti:eN)+"')":i[e[c].token]?`background-image: url('${i[e[c].token]}')`:""}`,content:`
                    <div style="color: ${a%2?"#fff":"#000"}; font-size: 20px; display: ${i[e[c].token]?"block":e[c].ag?"block":e[c].au?"block":e[c].keys?"block":"none"}; position: absolute; bottom: 5px; right: 5px;">
                    ${E(e[c].amount)}
                    </div>
                    `,append:"money"!=e[c].type&&eG(e[c])});document.getElementById("rewardAnimation").appendChild(m),a++}let f=200*o-window.innerWidth/2+100;document.getElementById("rewardAnimation").scrollLeft=0;let u=0,b=Date.now();function _(){let e=Date.now()-b;b=Date.now();let t=u/f*100;u+=(10-t/10%10)*e*(e$[32]?8:1),t>99.99&&t<100&&(u=f,setTimeout(()=>{document.getElementById("rewardAnimation").style.display="none",document.getElementById("rewardAnimation").innerHTML=""},1e3*(e$[32]?.25:1))),u=Math.min(u,f),document.getElementById("rewardAnimation").scrollLeft=u,""!==document.getElementById("rewardAnimation").innerHTML&&u<=f&&window.requestAnimationFrame(_)}window.requestAnimationFrame(_)}function eV(e){p.ULIMATEXP=Math.min(p.ULIMATEXP+e,1e5),1e5==p.ULIMATEXP&&(document.getElementById("GETULMIBOX").style.cursor="pointer"),document.getElementById("LOL").style.width=p.ULIMATEXP/1e5*100+"%",to()}var eK=[{amount:3,type:"money",token:"token 3"},{type:"money",au:!0,amount:1e5},{type:"money",au:!0,amount:5e5},{type:"shape",index:18},{type:"shape",index:22},{type:"shape",index:19},{type:"money",ag:!0,amount:1e9},{type:"money",ag:!0,amount:5e9},{type:"money",ag:!0,amount:1e10},{type:"shape",index:18},{type:"shape",index:15},{type:"money",au:!0,rare:3,id:"123",amount:1e6},{type:"shape",index:19}];function eY(e){document.getElementById("rewardAnimation").innerHTML="",document.getElementById("rewardAnimation").style.overflow="scroll",document.getElementById("rewardAnimation").style.pointerEvents="auto",document.getElementById("rewardAnimation").style.display="block",document.getElementById("rewardAnimation").style.top=window.innerHeight/2-100+"px";let t={"token 1":"./images/tokens/mk1_token.png","token 2":"./images/tokens/mk2_token.png","token 3":"./images/tokens/mk3_token.png"};for(let l=0;l<e.length;l++)document.getElementById("rewardAnimation").innerHTML+=`
            <div id="rerewards${l}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${200*l}px; background-color: ${l%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${e[l].ag||e[l].au||e[l].keys?"background-image: url('"+(e[l].ag?ez:e[l].keys?ti:eN)+"')":t[e[l].token]?`background-image: url('${t[e[l].token]}')`:""}">
            <div style="color: ${l%2?"#fff":"#000"}; font-size: 20px; display: ${t[e[l].token]?"block":e[l].ag?"block":e[l].au?"block":e[l].keys?"block":"none"}; position: absolute; bottom: 5px; right: 5px;">
            ${E(e[l].amount)}
            </div>
            </div>
            `;for(let i=0;i<e.length;i++)if("shape"==e[i].type||"weapon"==e[i].type||"module"==e[i].type){let a=document.getElementById(`rerewards${i}`);if("weapon"==e[i].type){let o=K(_[e[i].index],!0);o.style="width: 100%; height: 100%;",a.append(o)}else if("module"==e[i].type){let n=X(w[e[i].index],!0);n.style="width: 100%; height: 100%;",a.append(n)}else{let s=f[e[i].index];if(s.specialOf)a.style.backgroundSize="200px 200px",a.style.backgroundImage=`url('${s.specialOf}')`;else{let r=G(s,!0);r.style="width: 100%; height: 100%;",a.append(r)}}}}var eX=[{type:"money",token:"token 2",amount:3},{type:"money",au:!0,amount:1e5},{type:"money",ag:!0,amount:2e8},{type:"money",au:!0,amount:75e3},{type:"money",ag:!0,amount:15e7},{type:"money",token:"token 2",amount:3}],ej=[{type:"money",token:"token 3",amount:3},{type:"money",au:!0,amount:5e5},{type:"money",ag:!0,amount:1e9},{type:"money",au:!0,amount:4e5},{type:"money",ag:!0,amount:75e7}],eq=[{type:"money",au:!0,amount:2e6},{type:"money",ag:!0,amount:1e10},{type:"money",au:!0,amount:15e5},{type:"money",ag:!0,amount:75e8}];function eZ(e){let t="mk1"==e?2:"mk2"==e?3:4,l="mk1"==e?eX:"mk2"==e?ej:eq;for(let i=0;i<w.length;i++)if(w[i].dontSell&&w[i].tier==t)for(let a=0;a<5-t;a++)l.push({type:"module",index:i});for(let o=0;o<_.length;o++)if(_[o].dontSell&&_[o].tier==t)for(let n=0;n<5-t;n++)l.push({type:"weapon",index:o});for(let s=0;s<f.length;s++)if(f[s].dontSell&&f[s].tier==t)for(let r=0;r<5-t;r++)l.push({type:"shape",index:s})}function eJ(e){let t=p.shapes.filter(e=>null==e.slot||void 0==e.slot);document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="none";let l=p.shapes.find(t=>t.slot==e);!function e(t,l,i){let a=[];for(let o=0;o<i.length;o++)a.push(i[o]);a=a.sort((e,t)=>t.level-e.level).sort((e,t)=>t.tier-e.tier),l&&a.unshift(l);let n=0;document.getElementById("sideDisplay").innerHTML=`
        <div id="WEAPONdisplay" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;">
        </div>
        <div id="goToPre" style="display: none; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${M}');">
        </div>
        <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${P}');">
        </div>
        <div id="inventoryButton" style="position: absolute; text-align: center; font-size: 25px; color: #000; left: ${window.innerWidth/2-165}px; top: 30px; border-radius: 6px; height: 42.5px; padding-top: 7.5px; width: 150px; background-color: rgb(255, 255, 255, .6);">
        INVENTORY
        </div>
        <div id="storeButton" style="position: absolute; text-align: center; font-size: 35px; cursor: pointer; color: #fff; left: ${window.innerWidth/2+20}px; top: 30px; border-radius: 6px; height: 50px; width: 150px; background-color: rgb(0, 0, 0, .4);">
        STORE
        </div>
        `;let s=!0,r=!1;document.getElementById("inventoryButton").onclick=function(){r||(this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .6)",document.getElementById("goToPre").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("storeButton").style.cursor="pointer",document.getElementById("storeButton").style.color="#fff",document.getElementById("storeButton").style.backgroundColor="rgb(0, 0, 0, .4)",e5((s=!0,a),n=0,l,t,null,s))},document.getElementById("storeButton").onclick=function(){this.style.cursor=null,this.style.color="#000",this.style.backgroundColor="rgb(255, 255, 255, .6)",document.getElementById("goToPre").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("inventoryButton").style.cursor="pointer",document.getElementById("inventoryButton").style.color="#fff",document.getElementById("inventoryButton").style.backgroundColor="rgb(0, 0, 0, .4)",n=0,e5((s=!1,f.filter(e=>!e.dontShow).sort((e,t)=>e.tier-t.tier)),n,l,t,s)},0==a.length&&(document.getElementById("storeButton").click(),document.getElementById("inventoryButton").style.cursor=null,r=!0),e5(s?a:f.filter(e=>!e.dontShow),n,l,t,null,s),(s?a[n+1]:f.filter(e=>!e.dontShow)[n+1])||(document.getElementById("goToNext").style.display="none"),document.getElementById("goToNext").onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),(s?a[n+1]:f.filter(e=>!e.dontShow)[n+1])&&(n++,e5(s?a:f.filter(e=>!e.dontShow).sort((e,t)=>e.tier-t.tier),n,l,t,null,s),(s?a[n+1]:f.filter(e=>!e.dontShow)[n+1])?this.style.display="block":this.style.display="none",(s?a[n-1]:f.filter(e=>!e.dontShow)[n-1])?document.getElementById("goToPre").style.display="block":document.getElementById("goToPre").style.display="none")},document.getElementById("goToPre").onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),(s?a[n-1]:f[n-1])&&(n--,e5(s?a:f.sort((e,t)=>e.tier-t.tier),n,l,t,null,s),(s?a[n-1]:f[n-1])?this.style.display="block":this.style.display="none",(s?a[n+1]:f[n+1])?document.getElementById("goToNext").style.display="block":document.getElementById("goToNext").style.display="none")},to()}(e,l,t)}function eQ(e){return 4==e.tier?"#fa0032":3==e.tier?"#fcdf00":2==e.tier?"#7702bf":1==e.tier?"#38b0f5":"#d3d3d3"}function te(){document.getElementById("shapesDisplay").innerHTML="";let t=window.innerWidth-200,l=t/4*2;document.getElementById("shapesDisplay").style=`
        position: absolute;
        top: ${window.innerHeight/2-l/2}px;
        left: 100px;
        width: ${t}px;
        border-radius: 12px;
        overflow: hidden;
        height: ${l}px;
        background-color: rgb(135, 135, 135, 0.5);
        `;let i=e.findIndex(e=>!e.unlocked);for(let a=0;a<8;a++){let o=e[a],n=a<4?a%2==0?"rgb(0, 0, 0, 0.2);":"rgb(0, 0, 0, 0);":a%2==0?"rgb(0, 0, 0, 0);":"rgb(0, 0, 0, 0.2);";o.unlocked?o.used?document.getElementById("shapesDisplay").innerHTML+=`
                    <div id="slot${a}" style="position: absolute; text-align: right; transition: .5s; top: ${a<4?0:l/2}px; left: ${t/4*(a<4?a:a-4)}px; cursor: pointer; width: ${t/4}px; height: ${t/4}px; background-color: ${n}">
                    </div>
                    `:document.getElementById("shapesDisplay").innerHTML+=`
                    <div id="slot${a}" style="position: absolute; top: ${a<4?0:l/2}px; left: ${t/4*(a<4?a:a-4)}px; cursor: pointer; width: ${t/4}px; height: ${t/4}px; background-color: ${n}">
                    <div style="position: absolute; top: ${t/4/2-19}px; left: ${t/4/2-79.5}px; font-size: 28px;">
                    Equip Robot
                    <div>
                    </div>
                    `:a>i?document.getElementById("shapesDisplay").innerHTML+=`
                    <div id="slot${a}" style="position: absolute; top: ${a<4?0:l/2}px; left: ${t/4*(a<4?a:a-4)}px; pointer-events: auto; width: ${t/4}px; height: ${t/4}px; background-color: ${n}">
                    <div style="position: absolute; top: ${t/4/2-32.5}px; left: ${t/4/2-91.5}px; font-size: 48px;">
                    LOCKED
                    </div>
                    </div>
                    `:document.getElementById("shapesDisplay").innerHTML+=`
                    <div id="slot${a}" style="position: absolute; top: ${a<4?0:l/2}px; left: ${t/4*(a<4?a:a-4)}px; cursor: pointer; width: ${t/4}px; height: ${t/4}px; background-color: ${n}">
                    <div style="position: absolute; top: 87.5px; left: 57.5px; font-size: 28px; width: 200px; height: 200px;">
                    Unlock: ${E(o.cost)} Gold
                    </div>
                    </div>
                    `}for(let s=0;s<8;s++){let r=e[s],$=s<4?s%2==0?"rgb(0, 0, 0, 0.2)":"rgb(0, 0, 0, 0)":s%2==0?"rgb(0, 0, 0, 0)":"rgb(0, 0, 0, 0.2)";if(r.unlocked){if(r.used){let d=p.shapes.find(e=>e.slot==s);if(d){let g=G(d,!0);g.style=`position: absolute; top: 0px; left: 0px; width: ${t/4}px; height: ${t/4}px;`,document.getElementById("slot"+s).innerHTML=`
                        <div style="color: ${eQ(d)}; z-index: 10; position: absolute; bottom: 5px; right: 5px; font-size: 30px;">
                        <strong>${[14,13].includes(d.level)?`${d.name} <span style="color: ${13==d.level?"#0f0":"#ffff00"};">${13==d.level?"MK2":"MK3"}</span>`:`Lvl ${d.level} ${d.name}`}</strong>
                        </div>
                        `,d.specialOf?(document.getElementById(`slot${s}`).style.backgroundSize=`${t/4}px ${t/4}px`,document.getElementById(`slot${s}`).style.backgroundImage=`url('${d.specialOf}')`):document.getElementById("slot"+s).appendChild(g);let h=p.weapons.filter(e=>e.owner==d.sid),c=h.filter(e=>"Heavy"==e.type).length,m=h.filter(e=>"Light"==e.type).length;(c>d.hardpoints.heavy||m>d.hardpoints.light)&&(h.forEach(e=>{e.slot=null,e.owner=null}),h=[]),d.hardpoints.light&&h.find(e=>e.owner==d.sid&&0==e.slot&&"Heavy"==e.type)&&(h.forEach(e=>{e.slot=null,e.owner=null}),h=[]);for(let f=0;f<Math.min(h.length,8);f++){let u=K(h[f],!0);u.style=`position: absolute; bottom: ${40+60*(f>=4?f-4:f)}px; right: ${f>=4?55:5}px; width: 50px; height: 50px;`,document.getElementById("slot"+s).appendChild(u)}document.getElementById("slot"+s).onmouseover=function(){this.style.filter="brightness(150%)",this.style.backgroundColor="rgb(255, 255, 255, 0.6)"},document.getElementById("slot"+s).onmouseout=function(){this.style.filter="brightness(100%)",this.style.backgroundColor=$},document.getElementById("slot"+s).onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),eC(d),to()}}else{r.used=!1,te();break}}else document.getElementById("slot"+s).onclick=function(){document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),eJ(s),to()}}else s<=i&&(document.getElementById("slot"+s).onclick=function(){p.gold-r.cost>=0&&(document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay")),I("gold",-r.cost),r.unlocked=!0,te(),to())})}}eZ("mk1"),eZ("mk2"),eZ("mk3"),document.getElementById("rewardAnimation").onclick=function(){this.style.display="none"},document.getElementById("lootBoxToggle").onclick=function(){document.getElementById("rewardAnimation").style.overflow="hidden",document.getElementById("rewardAnimation").style.pointerEvents="none",document.getElementById("rewardAnimation").style.display="none",document.getElementById("sideDisplay").innerHTML=`
        <div id="main">

        <div id="GETULMIBOX" style="${1e5==p.ULIMATEXP?"cursor: pointer;":""}position: absolute; left: ${window.innerWidth/2-50}px; width: 100px; height: 100px; background-image: url('images/lootbox/ulimate_lootbox.png'); background-size: 100px 100px;">
        </div>
        <div style="position: absolute; top: 90px; left: 0px; width: 100%; height: 20px; background-color: #808080;">
        <div id="LOL" style="height: 100%; transition: 2s; width: ${p.ULIMATEXP/1e5*100}%; background-color: #ffff00;">
        </div>
        </div>

        <div style="position: absolute; top: 120px; left: ${window.innerWidth/2-320}px; width: 300px; height: 300px; background-image: url('${eF[0].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Basic Box
        </div>
        <div id="basicBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getBasicBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${E(eF[0].cost)} Keys)
        </div>
        </div>

        <div style="position: absolute; top: 120px; left: ${window.innerWidth/2+20}px; width: 300px; height: 300px; background-image: url('${eF[1].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Copper Box
        </div>
        <div id="copperBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getCopperBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${E(eF[1].cost)} Keys)
        </div>
        </div>

        <div style="position: absolute; top: 440px; left: ${window.innerWidth/2-320}px; width: 300px; height: 300px; background-image: url('${eF[2].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Gold Box
        </div>
        <div id="goldBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getGoldBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${E(eF[2].cost)} Keys)
        </div>
        </div>

        <div style="position: absolute; top: 440px; left: ${window.innerWidth/2+20}px; width: 300px; height: 300px; background-image: url('${eF[3].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Diamond Box
        </div>
        <div id="diamondBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getDiamondBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${E(eF[3].cost)} Keys)
        </div>
        </div>

        </div>

        <div id="noMain" style="display: none;">

        <div style="position: absolute; top: ${window.innerHeight/2-150}px; left: ${window.innerWidth/2-460}px; width: 300px; height: 300px; background-image: url('./images/tokens/token_chests/mk1_chest.png');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        MK1 Chest
        </div>
        <div id="mk1Info" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getMk1" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        <div style="position: absolute; top: 2px; width: 100%; text-align: center; font-size: 12px;"><strong>OPEN</strong></div>
        <div style="position: absolute; left: 110; top: 17px; font-size: 12px;">
        <div style="width: 25px; height: 25px; background-size: 25px 25px; background-image: url('./images/tokens/mk1_token.png');">
        <div style="margin-left: 25px; font-size: 18px;">1</div>
        </div>
        </div>
        </div>
        </div>

        <div style="position: absolute; top: ${window.innerHeight/2-150}px; left: ${window.innerWidth/2-150}px; width: 300px; height: 300px; background-image: url('./images/tokens/token_chests/mk2_chest.png');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        MK2 Chest
        </div>
        <div id="mk2Info" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getMk2" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        <div style="position: absolute; top: 2px; width: 100%; text-align: center; font-size: 12px;"><strong>OPEN</strong></div>
        <div style="position: absolute; left: 110; top: 17px; font-size: 12px;">
        <div style="width: 25px; height: 25px; background-size: 25px 25px; background-image: url('./images/tokens/mk2_token.png');">
        <div style="margin-left: 25px; font-size: 18px;">1</div>
        </div>
        </div>
        </div>
        </div>

        <div style="position: absolute; top: ${window.innerHeight/2-150}px; left: ${window.innerWidth/2+160}px; width: 300px; height: 300px; background-image: url('./images/tokens/token_chests/mk3_chest.png');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        MK3 Chest
        </div>
        <div id="mk3Info" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getMk3" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        <div style="position: absolute; top: 2px; width: 100%; text-align: center; font-size: 12px;"><strong>OPEN</strong></div>
        <div style="position: absolute; left: 110; top: 17px; font-size: 12px;">
        <div style="width: 25px; height: 25px; background-size: 25px 25px; background-image: url('./images/tokens/mk3_token.png');">
        <div style="margin-left: 25px; font-size: 18px;">1</div>
        </div>
        </div>
        </div>
        </div>

        </div>

        <div id="goToPre" style="display: none; z-index: 1000; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${M}');">
        </div>
        <div id="goToNext" style="position: absolute; z-index: 1000; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight/2-30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${P}');">
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `,document.getElementById("goToNext").onclick=function(){this.style.display="none",document.getElementById("rewardAnimation").style.display="none",document.getElementById("goToPre").style.display="block",document.getElementById("main").style.display="none",document.getElementById("noMain").style.display="block"},document.getElementById("goToPre").onclick=function(){this.style.display="none",document.getElementById("rewardAnimation").style.display="none",document.getElementById("goToNext").style.display="block",document.getElementById("main").style.display="block",document.getElementById("noMain").style.display="none"},document.getElementById("hangerUI").style.display="none",document.getElementById("money2Display").style.display="block",document.body.appendChild(document.getElementById("money2Display")),document.getElementById("backButton").onclick=function(){document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block",document.getElementById("money2Display").style.display="none",document.getElementById("hangerUI").appendChild(document.getElementById("money2Display")),document.getElementById("rewardAnimation").style.display="none"},document.getElementById("mk3Info").onclick=function(){eY(eq)},document.getElementById("getMk3").onclick=function(){if(p.tokens.mk3-1>=0){I("token 3",-1);let e=eq[Math.floor(eq.length*Math.random())];e7(e),e8(eq,e,"mk3")}to()},document.getElementById("mk2Info").onclick=function(){eY(ej)},document.getElementById("getMk2").onclick=function(){if(p.tokens.mk2-1>=0){I("token 2",-1);let e=ej[Math.floor(ej.length*Math.random())];e7(e),e8(ej,e,"mk2")}to()},document.getElementById("mk1Info").onclick=function(){eY(eX)},document.getElementById("getMk1").onclick=function(){if(p.tokens.mk1-1>=0){I("token 1",-1);let e=eX[Math.floor(eX.length*Math.random())];e7(e),e8(eX,e,"mk1")}to()},document.getElementById("basicBoxInfo").onclick=function(){eY(eF[0].rewards)},document.getElementById("copperBoxInfo").onclick=function(){eY(eF[1].rewards)},document.getElementById("goldBoxInfo").onclick=function(){eY(eF[2].rewards)},document.getElementById("diamondBoxInfo").onclick=function(){eY(eF[3].rewards)},document.getElementById("getBasicBox").onclick=function(){if(p.keys-eF[0].cost>=0){I("keys",-eF[0].cost),eV(eF[0].cost);let e=eF[0].rewards[Math.floor(eF[0].rewards.length*Math.random())];if(e.rare){let t=e.id;for(let l=0;l<e.rare&&t==(e=eF[0].rewards[Math.floor(eF[0].rewards.length*Math.random())]).id&&null!=e.id;l++);}e7(e),e8(eF[0].rewards,e,"box1")}to()},document.getElementById("getCopperBox").onclick=function(){if(p.keys-eF[1].cost>=0){I("keys",-eF[1].cost),eV(eF[1].cost);let e=eF[1].rewards[Math.floor(eF[1].rewards.length*Math.random())];if(e.rare){let t=e.id;for(let l=0;l<e.rare&&t==(e=eF[1].rewards[Math.floor(eF[1].rewards.length*Math.random())]).id&&null!=e.id;l++);}e7(e),e8(eF[1].rewards,e,"box2")}to()},document.getElementById("getGoldBox").onclick=function(){if(p.keys-eF[2].cost>=0){I("keys",-eF[2].cost),eV(eF[2].cost);let e=eF[2].rewards[Math.floor(eF[2].rewards.length*Math.random())];if(e.rare){let t=e.id;for(let l=0;l<e.rare&&t==(e=eF[2].rewards[Math.floor(eF[2].rewards.length*Math.random())]).id&&null!=e.id;l++);}e7(e),e8(eF[2].rewards,e,"box3")}to()},document.getElementById("getDiamondBox").onclick=function(){if(p.keys-eF[3].cost>=0){I("keys",-eF[3].cost),eV(eF[3].cost);let e=eF[3].rewards[Math.floor(eF[3].rewards.length*Math.random())];if(e.rare){let t=e.id;for(let l=0;l<e.rare&&t==(e=eF[3].rewards[Math.floor(eF[3].rewards.length*Math.random())]).id&&null!=e.id;l++);}e7(e),e8(eF[3].rewards,e,"box4")}to()},document.getElementById("GETULMIBOX").onclick=function(){if(p.ULIMATEXP>=1e5){p.ULIMATEXP=0,eV(0);let e=eK[Math.floor(eK.length*Math.random())];if(e.rare){let t=e.id;for(let l=0;l<e.rare&&t==(e=eK[Math.floor(eK.length*Math.random())]).id&&null!=e.id;l++);}e7(e),e8(eK,e,"boxU")}}};var tt={xp:0,currentIndex:0,data:[]};function tl(e){if(tt.data.length&&tt.data.some(e=>null==e.collected)||ta(),tt.xp+e>=tt.data[tt.currentIndex].maxxp)for(e-=tt.data[tt.currentIndex].maxxp-tt.xp,tt.data[tt.currentIndex].done=!0,tt.xp=0,e<=0&&(tt.currentIndex++,tt.data[tt.currentIndex]||(tt.currentIndex=tt.data.length-1));e>0;)tt.currentIndex++,tt.data[tt.currentIndex]?e>=tt.data[tt.currentIndex].maxxp?(e-=tt.data[tt.currentIndex].maxxp,tt.data[tt.currentIndex].done=!0):(tt.xp+=e,e=0):(tt.currentIndex=tt.data.length-1,e=0);else tt.xp+=e}var ti="./images/icons/keys_icon.png";function ta(){tt.xp=0,tt.currentIndex=0,tt.data=[];for(let e=0;e<120;e++){let t=1,l="silver";e>=69&&(e+1)%10==0?l=e>=69&&e<=89?"token 1":e>=99&&e<=109?"token 2":"token 3":.5>Math.random()?(l="silver",t=e>=90?1e6*e:e>=80?15e4*e:e>=40?8e4*e:e>=5?5e4*e:Math.max(25e3*e,2e4)):.3334>Math.random()?(l="keys",t=e>=90?100*e:e>=80?50*e:e>=40?20*e:e>=5?10*e:Math.max(5*e,2)):(l="gold",t=e>=90?240*e:e>=80?120*e:e>=40?80*e:e>=5?40*e:Math.max(20*e,10)),tt.data.push({maxxp:100+50*e,done:!1,type:l,amount:t})}}function to(){a("hasSaved",1),a("shapeSids",c);let t=[];for(let l=0;l<p.shapes.length;l++){let i=p.shapes[l];t.push({name:i.name,sid:i.sid,level:i.level,slot:i.slot})}let o=[];for(let n=0;n<p.weapons.length;n++){let s=p.weapons[n];o.push({name:s.name,owner:s.owner,slot:s.slot,level:s.level})}let r=[];for(let $=0;$<p.modules.length;$++){let d=p.modules[$];r.push({name:d.name,owner:d.owner,slot:d.slot,level:d.level})}let g=[];for(let h=0;h<eL.length;h++){let m=eL[h];g.push({name:m.name,owner:m.owner,slot:m.slot,level:m.level,NEW:2})}a("chips",JSON.stringify(g)),a("tokens",JSON.stringify(p.tokens)),a("slotData",JSON.stringify(e)),a("shapes",JSON.stringify(t)),a("weapons",JSON.stringify(o)),a("modules",JSON.stringify(r)),a("ULIMATEXP",p.ULIMATEXP),a("league",p.league),a("keys",p.keys),a("sliver",p.sliver),a("gold",p.gold),a("tasks",JSON.stringify(H)),a("workshopPoints",p.workshopPoints),a("operationData",JSON.stringify(tt)),a("workshopQueue",JSON.stringify(z))}document.getElementById("operationToggle").onclick=function(){tt.data.length&&tt.data.some(e=>null==e.collected)||ta(),function e(t){document.getElementById("sideDisplay").innerHTML=`
        <div style="width: 100%; text-align: center; font-size: 40px;">
        Operation
        </div>
        <hr>
        <div style="position: absolute; left: ${window.innerWidth/2-25}px; top: ${window.innerHeight/2-170}px;">
        Lvl ${tt.currentIndex+1}
        </div>
        <div style="position: absolute; left: ${window.innerWidth/2-300}px; top: ${window.innerHeight/2-140}px; height: 20px; border-radius: 12px;  overflow: hidden; width: 600px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 0px; left: 0px; height: 100%; width: ${tt.data[tt.data.length-1].done?100:tt.xp/tt.data[tt.currentIndex].maxxp*100}%; background-color: #07faf2;">
        </div>
        <span style="position: absolute; top: 0px; left: 0px; margin-left: 5px; color: #fff;">${tt.data[tt.data.length-1].done?`${tt.data[tt.data.length-1].maxxp}/${tt.data[tt.data.length-1].maxxp}`:`${tt.xp}/${tt.data[tt.currentIndex].maxxp}`}</span>
        </div>
        <div id="rewards" style="position: absolute; top: ${window.innerHeight/2-100}px; overflow-x: scroll; height: 220px; width: 100%; background-color: rgb(0, 0, 0, .3);">
        </div>
        <div id="10threwardXD" style="position: absolute; box-shadow: -20px 0 20px rgba(0, 0, 0, 0.7); right: 0px; top: ${window.innerHeight/2-100}px; overflow-x: scroll; height: 220px; width: 200px; background-color: rgb(0, 0, 0, .8);">
        </div>
        <div id="collectAll" style="color: #fff; border-radius: 12px; font-size: 35px; width: 200px; text-align: center; height: 50px; background-color: rgb(0, 0, 0, 0.4); position: absolute; left: ${window.innerWidth/2-100}px; top: ${window.innerHeight/2+140}px;">
        Collect All
        </div>
        <div id="youEarned" style="${t?"cursor: pointer; ":""};display: ${t?"block":"none"}; position: absolute; top: 25%; left: 25%; width: 50%; height: 50%; background-color: rgb(0, 0, 0, 0.4);">
        ${t}
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `,document.getElementById("hangerUI").style.display="none",document.getElementById("backButton").onclick=function(){document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block"},document.getElementById("youEarned").onclick=function(){this.style.display="none"};let l=tt.data.filter(e=>e.done&&!e.collected);if(l.length>1){document.getElementById("collectAll").style.cursor="pointer",document.getElementById("collectAll").style.backgroundColor="rgb(0, 255, 0, 0.8)";let i={};document.getElementById("collectAll").onclick=function(){for(let t=0;t<l.length;t++){let a=l[t];i[a.type]?i[a.type]+=a.amount:i[a.type]=a.amount,"silver"==a.type?(a.collected=!0,I("sliver",a.amount)):"gold"==a.type?(a.collected=!0,I("gold",a.amount)):a.type.includes("token")?(a.collected=!0,I(a.type,1)):(a.collected=!0,I("keys",a.amount))}let o=`
                <div style="color: #fff; text-align: center; width: 100%; font-size: 40px;">You Got!</div>
                <hr>
                `,n=0;for(let s in i){let r="token 3"==s?"./images/tokens/mk3_token.png":"token 2"==s?"./images/tokens/mk2_token.png":"token 1"==s?"./images/tokens/mk1_token.png":"silver"==s?ez:"gold"==s?eN:ti;o+=`
                    <div style="position: relative; border-radius: 12px; ${0==n?"margin-left: 5px; ":""}width: 100px; height: 100px; display: inline-block; background-color: rgb(255, 255, 255, .8); background-size: 100px 100px; background-image: url('${r}')">
                    <div style="position: absolute; font-size: 24px; bottom: 5px; right: 5px; color: #000;">
                    ${E(i[s])}
                    </div>
                    </div>
                    `,n++}e(o)}}let a=[];for(let o=0;o<tt.data.length;o++)(o+1)%10==0&&a.push(200*o);let n=window.innerWidth-375;document.getElementById("rewards").onscroll=function(){let t=document.getElementById("rewards").scrollLeft;t+=n;let l=a.filter(e=>e+300>=t).sort((e,l)=>Math.abs(e-t)-Math.abs(l-t))[0],i=document.getElementById(`OPREWARD${l/200}`);document.getElementById("10threwardXD").style.display=l/200==tt.data.length-1&&l<=t?"none":"block";let o=i.cloneNode(!0);o.id="THENTHTNETh",o.style.left="0px",o.style.bottom="0px",document.getElementById("10threwardXD").innerHTML="",document.getElementById("10threwardXD").innerHTML+=`
            <div style="position: absolute; color: #fff; background-color: rgb(0, 0, 0, 0.6); text-align: center; top: 0px; left: 0px; height: 20px; width: 200px;">
            ${l/200+1}
            </div>
            `,document.getElementById("10threwardXD").appendChild(o);let s=l/200;if(tt.data[s]&&tt.data[s].done&&!tt.data[s].collected){let r=tt.data[s];document.getElementById("THENTHTNETh").style.cursor="pointer",document.getElementById("THENTHTNETh").style.backgroundColor="rgb(0, 255, 0, .4)",document.getElementById("THENTHTNETh").onclick=function(){"silver"==r.type?(r.collected=!0,I("sliver",r.amount)):"gold"==r.type?(r.collected=!0,I("gold",r.amount)):r.type.includes("token")?(r.collected=!0,I(r.type,1)):(r.collected=!0,I("keys",r.amount)),e()},document.getElementById("THENTHTNETh").onmouseover=function(){document.getElementById("THENTHTNETh").style.filter="brightness(125%)"},document.getElementById("THENTHTNETh").onmouseout=function(){document.getElementById("THENTHTNETh").style.filter="brightness(100%)"}}else tt.data[s]&&!tt.data[s].done&&(document.getElementById("THENTHTNETh").onmouseover=function(){document.getElementById("THENTHTNETh").style.filter="brightness(125%)"},document.getElementById("THENTHTNETh").onmouseout=function(){document.getElementById("THENTHTNETh").style.filter="brightness(100%)"})};for(let s=0;s<tt.data.length;s++){let r=tt.data[s];if(r){let $="token 3"==r.type?"./images/tokens/mk3_token.png":"token 2"==r.type?"./images/tokens/mk2_token.png":"token 1"==r.type?"./images/tokens/mk1_token.png":"silver"==r.type?ez:"gold"==r.type?eN:ti;document.getElementById("rewards").innerHTML+=`
                <div style="position: absolute; color: #fff; background-color: rgb(0, 0, 0, 0.6); text-align: center; top: 0px; left: ${200*s}px; height: 20px; width: 200px;">
                ${s+1}
                </div>
                <div id="OPREWARD${s}" style="position: absolute; transition: .5s; bottom: 0px; left: ${200*s}px; height: 200px; width: 200px; background-color: ${s%2==0?"rgb(0, 0, 0, 0.4)":"rgb(255, 255, 255, 0.6)"}; background-size: 200px 200px; background-image: url('${$}')">
                <div style="position: absolute; font-size: 24px; bottom: 5px; right: 5px; color: ${s%2==0?"#fff":"#000"}">
                ${E(r.amount)}
                </div>
                </div>
                `}}for(let d=0;d<tt.data.length;d++){let p=tt.data[d];p&&p.done?p.collected?document.getElementById(`OPREWARD${d}`).innerHTML+=`
                    <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-size: 100% 100%; background-image: url('./images/operation_collected.png');">
                    </div>
                    `:(document.getElementById(`OPREWARD${d}`).style.cursor="pointer",document.getElementById(`OPREWARD${d}`).style.backgroundColor="rgb(0, 255, 0, .4)",document.getElementById(`OPREWARD${d}`).onclick=function(){"silver"==p.type?(p.collected=!0,I("sliver",p.amount)):"gold"==p.type?(p.collected=!0,I("gold",p.amount)):p.type.includes("token")?(p.collected=!0,I(p.type,1)):(p.collected=!0,I("keys",p.amount)),e()},document.getElementById(`OPREWARD${d}`).onmouseover=function(){document.getElementById(`OPREWARD${d}`).style.filter="brightness(125%)"},document.getElementById(`OPREWARD${d}`).onmouseout=function(){document.getElementById(`OPREWARD${d}`).style.filter="brightness(100%)"}):p&&!p.done&&(document.getElementById(`OPREWARD${d}`).onmouseover=function(){document.getElementById(`OPREWARD${d}`).style.filter="brightness(125%)"},document.getElementById(`OPREWARD${d}`).onmouseout=function(){document.getElementById(`OPREWARD${d}`).style.filter="brightness(100%)"})}document.getElementById("rewards").onscroll()}(),to()},document.addEventListener("click",()=>{to()}),setTimeout(()=>{if(i("hasSaved")){p.shapes=[],p.weapons=[],p.modules=[];let t=JSON.parse(i("shapes")),l=JSON.parse(i("weapons")),a=JSON.parse(i("modules")),o=JSON.parse(i("chips"));for(let n=0;n<t.length;n++){let s=t[n];if(s)try{let r=c,$=f.find(e=>s.name==e.name),d=new m($,s.slot);d.slot=s.slot,s.slot&&(e[s.slot].unlocked=!0,e[s.slot].used=!0),d.sid=s.sid,(void 0==d.sid||null==d.sid)&&(d.sid=r);for(let g=0;g<s.level-1;g++)e4(d,!0);p.shapes.push(d)}catch(h){}}for(let u=0;u<l.length;u++){let k=l[u];if(k){let E=_.find(e=>k.name==e.name),D=new b(E,k.owner,k.slot);p.shapes.find(e=>e.sid==k.owner)||(D.owner=null,D.slot=null);for(let T=0;T<k.level-1;T++)J(D,null,null,!0);p.weapons.push(D)}}for(let S=0;S<a.length;S++){let A=a[S];if(A){let M=w.find(e=>A.name==e.name),P=new v(M,A.owner,A.slot);p.shapes.find(e=>e.sid==A.owner)||(P.owner=null,P.slot=null);for(let L=0;L<A.level-1;L++)ea(P,null,null,!0);p.modules.push(P)}}for(let R=0;R<o.length;R++){let C=o[R];if(C&&C.NEW&&2==C.NEW)try{let O=eP.find(e=>C.name==e.name),W=new eM(O,C.owner,C.slot);p.shapes.find(e=>e.sid==C.owner)||(W.owner=null,W.slot=null);for(let U=0;U<C.level;U++)eH(W,!0);W.slot>=8||eL.push(W)}catch(G){eL=[]}}i("workshopPoints")?p.workshopPoints=parseInt(i("workshopPoints")):p.workshopPoints=0;let V=JSON.parse(i("slotData"));V&&(e=[...V]),i("ULIMATEXP")?p.ULIMATEXP=parseInt(i("ULIMATEXP")):p.ULIMATEXP=0,i("league")?p.league=parseInt(i("league")):p.league=0,i("workshopQueue")&&(z=JSON.parse(i("workshopQueue"))),i("tasks")&&(H=JSON.parse(i("tasks"))),i("tokens")&&(p.tokens=JSON.parse(i("tokens"))),N(),i("operationData")&&((tt=JSON.parse(i("operationData"))).data.find(e=>"token 1"==e.type)||(ta(),tl(1e4))),p.keys=parseInt(i("keys")),p.sliver=parseInt(i("sliver")),p.gold=parseInt(i("gold")),I(),i("shapeSids")&&"NaN"!=i("shapeSids")?c=parseInt(i("shapeSids")):to(),setTimeout(()=>{te(),document.getElementById("LOADING SCREEN XD").style.display="none",setInterval(()=>{F()},500)},100)}else document.getElementById("LOADING SCREEN XD").style.display="none",te();B()},250);var tn={x:0,y:0},$=0,d=0;o.addEventListener("mousemove",function e(t){t.preventDefault(),t.stopPropagation(),$=t.clientX,d=t.clientY},!1);var ts=[],tr=[];function t$(e){return Math.randInt(-e,e)/180*Math.PI}function td(e,t,l){if(t.isMe||t.target){let i=t.hardpoints.light+t.hardpoints.heavy,a=0,o=0,n=0,s=0;s=15,"Blaze"==e.name||"Ember"==e.name||"Toxin"==e.name||"Bane"==e.name?s=30:("Devastator"==e.name||"Scatter"==e.name||"Evora"==e.name||"Veyron"==e.name)&&(s=25);let r=s/2;if(t.target&&!t.isMe&&(t.dir=Math.atan2(t.target.y-t.y,t.target.x-t.x)),1==i?(o=t.x+Math.cos(t.dir)*(t.scale-r),n=t.y+Math.sin(t.dir)*(t.scale-r)):2==i?0==e.slot?(o=t.x+Math.cos(t.dir+1.57)*(t.scale-r),n=t.y+Math.sin(t.dir+1.57)*(t.scale-r)):(o=t.x+Math.cos(t.dir-1.57)*(t.scale-r),n=t.y+Math.sin(t.dir-1.57)*(t.scale-r)):3==i?0==e.slot?(o=t.x+Math.cos(t.dir+1.57)*(t.scale-r),n=t.y+Math.sin(t.dir+1.57)*(t.scale-r)):1==e.slot?(o=t.x+Math.cos(t.dir)*(t.scale-r),n=t.y+Math.sin(t.dir)*(t.scale-r)):(o=t.x+Math.cos(t.dir-1.57)*(t.scale-r),n=t.y+Math.sin(t.dir-1.57)*(t.scale-r)):0==e.slot||4==e.slot?(o=t.x+Math.cos(t.dir+1.57)*(t.scale-7.5),n=t.y+Math.sin(t.dir+1.57)*(t.scale-7.5)):1==e.slot||5==e.slot?(o=t.x+Math.cos(t.dir+.39)*(t.scale-7.5),n=t.y+Math.sin(t.dir+.39)*(t.scale-7.5)):2==e.slot||6==e.slot?(o=t.x+Math.cos(t.dir-.39)*(t.scale-7.5),n=t.y+Math.sin(t.dir-.39)*(t.scale-7.5)):(o=t.x+Math.cos(t.dir-1.57)*(t.scale-7.5),n=t.y+Math.sin(t.dir-1.57)*(t.scale-7.5)),t.isMe){let p=o-tn.x,h=n-tn.y,c=$/window.innerWidth*g.x;a=Math.atan2(d/window.innerHeight*g.y-h,c-p)}else t.target&&(a=Math.atan2(t.target.y-n,t.target.x-o));if("Punisher"==e.name)tr.push({x:o,y:n,oldX:o,oldY:n,projType:e.projType,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,dir:a,isAlly:l,color:"./images/bullets/bullet.png",avoidBuildings:3==t.abilitySpeedMulti,owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Trickster"==e.name||"Tamer"==e.name)tr.push({x:o,y:n,oldX:o,oldY:n,projType:e.projType,velx:0,vely:0,scale:s,speed:.3,dmg:e.dmg,range:e.range,dir:a+t$(5*(.5>Math.random()?-1:1)),isAlly:l,rustEffect:{effectID:"tamer",name:"rust",power:.0333,last:15e3},color:"./images/bullets/orange_bullet.png",avoidBuildings:3==t.abilitySpeedMulti,owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Rime"==e.name||"Glacier"==e.name)tr.push({x:o,y:n,oldX:o,oldY:n,velx:0,projType:e.projType,vely:0,scale:s,speed:.12,dmg:e.dmg,range:e.range,dir:a,isAlly:l,color:"./images/bullets/white_bullet.png",avoidBuildings:3==t.abilitySpeedMulti,aoeRange:e.aoeRange,owner:t,freezeEffect:{name:"freezing",last:"Glacier"==e.name?7500:5e3,power:"Glacier"==e.name?3:1},weaponOwner:{name:e.name,level:e.level,cold:!0}});else if("Landslide"==e.name||"Avalanche"==e.name)tr.push({x:o,y:n,oldX:o,oldY:n,velx:0,projType:e.projType,vely:0,scale:s,speed:.15,dmg:e.dmg,range:e.range,dir:a,isAlly:l,color:"./images/bullets/rocket.png",avoidBuildings:3==t.abilitySpeedMulti,aoeRange:e.aoeRange,owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Scald"==e.name||"Incinerator"==e.name)tr.push({x:o,y:n,oldX:o,oldY:n,velx:0,projType:e.projType,vely:0,scale:s,speed:.15,dmg:e.dmg,range:e.range,dir:a,isAlly:l,color:"./images/bullets/red_bullet.png",avoidBuildings:3==t.abilitySpeedMulti,blastEffect:{name:"blast",last:5e3,power:e.effectIncrease},aoeRange:e.aoeRange,owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Slumber"==e.name||"Delay"==e.name)tr.push({projType:e.projType,x:o,y:n,oldX:o,avoidBuildings:3==t.abilitySpeedMulti,oldY:n,velx:0,vely:0,scale:s,speed:.4,dmg:e.dmg,range:e.range,dir:a,isAlly:l,slowEffect:{name:"slowdown",last:2e3,power:.02},color:"./images/bullets/purple_bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Lance"==e.name||"Glaive"==e.name){let m=1;if("Lance"==e.name||"Glaive"==e.name){null==e.ammoFired&&(e.ammoFired=0);let f=e.ammoFired%4;m=0==f?1:1==f?1.5:2==f?2.5:3.5,e.ammoFired++}tr.push({projType:e.projType,x:o,y:n,oldX:o,avoidBuildings:3==t.abilitySpeedMulti,oldY:n,velx:0,vely:0,scale:s,speed:.2,dmg:e.dmg*m,range:e.range,dir:a,isAlly:l,color:"./images/bullets/energy_bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}})}else if("Shocker"==e.name||"Reaper"==e.name)tr.push({projType:e.projType,x:o,y:n,oldX:o,avoidBuildings:3==t.abilitySpeedMulti,oldY:n,velx:0,vely:0,scale:s,speed:.4,dmg:e.dmg,range:e.range,dir:a,isAlly:l,color:"./images/bullets/bullet.png",owner:t,bypassReflector:"Reaper"==e.name,defensePointsBypass:"Reaper"==e.name?.5:0,weaponOwner:{name:e.name,level:e.level}});else if("Bane"==e.name||"Toxin"==e.name)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,avoidBuildings:3==t.abilitySpeedMulti,speed:.2,dmg:e.dmg,range:e.range,dir:a,isAlly:l,dotEffect:{name:"dot",last:5e3,dmg:e.dotDamage,resetDOT:!0,owner:t},color:"./images/bullets/dot_bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Blaze"==e.name||"Ember"==e.name)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,avoidBuildings:3==t.abilitySpeedMulti,speed:.1,dmg:e.dmg,range:e.range,dir:a+t$(10*(.5>Math.random()?-1:1)),isAlly:l,dotEffect:{name:"dot",last:15e3,dmg:e.dotDamage,owner:t},color:`rgb(255, ${.5>Math.random()?255:0}, 0, ${Math.randInt(6,10)/10})`,owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Destroyer"==e.name)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,avoidBuildings:3==t.abilitySpeedMulti,speed:.25,dmg:e.dmg,range:e.range,dir:a+t$(5),isAlly:l,color:"./images/bullets/bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}}),tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,avoidBuildings:3==t.abilitySpeedMulti,range:e.range,dir:a-t$(5),isAlly:l,color:"./images/bullets/bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Evora"==e.name||"Veyron"==e.name){for(let u=0;u<2;u++)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,dir:a+t$(4),isAlly:l,avoidBuildings:3==t.abilitySpeedMulti,color:"./images/bullets/sonic_blast.png",owner:t,grayDamageAmount:1,weaponOwner:{name:e.name,level:e.level}});for(let b=0;b<2;b++)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,dir:a+-1*t$(4),isAlly:l,avoidBuildings:3==t.abilitySpeedMulti,color:"./images/bullets/sonic_blast.png",owner:t,grayDamageAmount:1,weaponOwner:{name:e.name,level:e.level}})}else if("Devastator"==e.name||"Scatter"==e.name)for(let _=0;_<7;_++)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,dir:a+(.5>Math.random()?1:-1)*t$(8),isAlly:l,avoidBuildings:3==t.abilitySpeedMulti,color:"./images/bullets/sonic_blast.png",owner:t,knockback:.15,weaponOwner:{name:e.name,level:e.level}});else if("Thunder"==e.name||"Storm"==e.name)for(let v=0;v<("Storm"==e.name?12:25);v++)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,dir:a+(.5>Math.random()?1:-1)*t$(7),isAlly:l,avoidBuildings:3==t.abilitySpeedMulti,color:"./images/bullets/bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Viper"==e.name||"Sting"==e.name)tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,dir:a+(.5>Math.random()?1:-1)*t$(2),isAlly:l,avoidBuildings:3==t.abilitySpeedMulti,dotEffect:{name:"dot",last:4e3,dmg:e.dotDamage,owner:t},color:"./images/bullets/dot_bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}});else if("Atomizer"==e.name||"Nucleon"==e.name){let w=e.firedTime/16e3*12;tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,avoidBuildings:3==t.abilitySpeedMulti,dir:a+(.5>Math.random()?1:-1)*t$(w),isAlly:l,color:"./images/bullets/energy_bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}})}else"Flux"==e.name&&tr.push({projType:e.projType,x:o,y:n,oldX:o,oldY:n,velx:0,vely:0,scale:s,speed:.25,dmg:e.dmg,range:e.range,antiTier4_5:!0,avoidBuildings:3==t.abilitySpeedMulti,dir:a+(.5>Math.random()?1:-1)*t$(3),isAlly:l,color:"./images/bullets/energy_bullet.png",owner:t,weaponOwner:{name:e.name,level:e.level}})}}function tp(e,t){let l=p.gameMode;document.getElementById("hangerUI").style.display="none",document.getElementById("sideDisplay").style.display="block",document.getElementById("goToBattle").style.display="block",document.getElementById("gameModesDisplay").style.display="none",function e(){p.gameMode=-1,p.mapID=-1,s.style.display="none",document.getElementById("mapName").style.display="none",ts=[],tr=[],en=[],ek=[],th=[],ey=[],eE.enemy=0,eE.ally=0,eS=[],tM=[],tP=0;let t=document.getElementsByTagName("*"),l=[];for(let i=0;i<t.length;i++){let a=t[i];a.id&&-1!==a.id.indexOf("radar")&&l.push(a)}l.forEach(e=>{e.remove()})}();let i=0,a=t;if("YAY WIN"==t&&(t=3),3==l||2==l||"YAY WIN"==a){var o;let n=p.league,r,$,d;o=t,r=p.league,$=0,d=!(o>=3),r>=7e3?$=d?-100:15:r>=6e3?$=d?-75:45:r>=5e3?$=d?-50:75:r>=4e3?$=d?-35:105:r>=3e3?$=d?-25:150:r>=2e3?$=d?-15:225:r>=1e3?$=d?-10:255:r<1e3&&($=d?-5:300),p.league+=$,p.league<0&&(p.league=0),i=p.league-n}let g=Array(e.length);for(let h=0;h<g.length;h++)g[h]={id:h,isAlly:e[h].isAlly,dmg:0,kills:0,beacons:0,honor:0,name:e[h].name};for(let c=0;c<e.length;c++){for(let m=0;m<e[c].robots.length;m++){let f=e[c].robots[m];f&&f.battleStats&&(f.battleStats.dmg&&(g[c].dmg+=Math.round(f.battleStats.dmg),0==c&&O("dmg",Math.abs(f.battleStats.dmg))),f.battleStats.kills&&(g[c].kills+=f.battleStats.kills,0==c&&O("kills",f.battleStats.kills)),f.battleStats.beacons&&(g[c].beacons+=f.battleStats.beacons))}g[c].rewardBonus=e[c].rewardBonus}for(let u=0;u<g.length;u++){let b=g[u];b&&(b.honor+=Math.round(Math.min(1e9,b.dmg)/5e4),b.honor+=100*b.kills,b.honor+=75*b.beacons)}let _=[],v=[],w=function e(t,l,i){let a={sliver:0,gold:0,oxp:0,keys:0,workshopPoints:0};a.sliver+=1e4*t.kills,a.sliver+=100*(Math.abs(t.dmg)/750),a.sliver+=15e4*Math.max(Math.round(t.dmg/5e5),0),a.sliver+=5e5*Math.max(Math.round(t.dmg/1e6),0),a.sliver=parseInt(ee(a.sliver));for(let o=0;o<t.kills;o++)a.gold+=a.gold<25?2==i||.5==i?1.25:.75:2==i||.5==i?1.75:.25;a.gold=Math.floor(a.gold),a.gold+=Math.floor(Math.abs(t.dmg)/(2==i||.5==i?75e3:1e5));for(let n=0;n<t.kills;n++)a.keys>=50?a.keys+=2==i||.5==i?.1:.075:a.keys>=25?a.keys+=2==i||.5==i?.25:.1:a.keys+=2==i||.5==i?.5:.25;return a.keys=Math.min(Math.floor(a.keys),1e3),a.oxp=t.kills*(2==i||.5==i?4:2),a.oxp+=15*Math.max(Math.round(t.dmg/1e6),0),a.oxp=Math.floor(a.oxp),t.rewardBonus&&(a.sliver+=t.rewardBonus.silver,a.gold+=t.rewardBonus.gold,a.keys+=t.rewardBonus.keys,a.oxp+=t.rewardBonus.OXP),t.beacons&&(a.sliver+=2500*t.beacons,a.gold+=t.beacons,a.keys+=2*t.beacons,a.oxp+=4*t.beacons),a.sliver*=i||1,a.gold*=i||1,a.keys*=i||1,a.oxp*=i||1,"YAY WIN"!==l&&2===i&&(a.sliver+=15e3,a.gold+=20,a.keys+=10,a.oxp+=20),a.sliver=Math.floor(a.sliver),a.gold=Math.floor(a.gold),a.keys=Math.floor(a.keys),a.oxp=Math.floor(a.oxp),a.workshopPoints=t.rewardBonus&&t.rewardBonus.WSP||0,a}(g[0],a,t);for(let k=0;k<g.length;k++){let D=g[k];D.isAlly?_.push({...D}):v.push({...D})}_=_.sort((e,t)=>t.honor-e.honor),v=v.sort((e,t)=>t.honor-e.honor);let B=e[0];if(4==l){document.getElementById("sideDisplay").innerHTML=`
            <div style="font-size: 40px; width: 100%; text-align: center;">
            ${t>=3?"Victory":"Defeat"}
            </div>
            <div style="position: absolute; right: 5px; bottom: 10px; font-size: 12px;">
            Read the scores from: up -> down and left -> right<br>
            For example: 6th place is at the left box, 6 down from the top.<br>
            Another example: 12th place is right box, 2 down.
            </div>
            `,g=g.sort((e,t)=>t.honor-e.honor);for(let T=0;T<10;T++){let S=g[T];if(S){let A=T%2==0?"#000":"#fff",M=T%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)";document.getElementById("sideDisplay").innerHTML+=`
                    <div style="position: absolute; left: 60px; top: ${window.innerHeight/2-180+40*T}px; background-color: ${M}; width: ${window.innerWidth/2-120}px; height: 40px;">
                    <div id="showRobots${T}" style="cursor: pointer; position: absolute; top: 9.25px; left: 10px; height: 21.5px; width: 215px; color: ${A}; font-size: 16px; overflow: scroll;">
                    ${S.name.length>14?S.name.slice(0,10)+"...":S.name}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 145px; color: ${A}; font-size: 16px;">
                    ${E(S.kills)}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 245px; color: ${A}; font-size: 16px;">
                    ${S.dmg>=999999?E(S.dmg):S.dmg}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 345px; color: ${A}; font-size: 16px;">
                    ${S.honor}
                    </div>
                    </div>
                    `}}for(let P=0;P<10;P++){let L=g[P+10];if(L){let H=P%2==0?"#000":"#fff",R=P%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)";document.getElementById("sideDisplay").innerHTML+=`
                    <div style="position: absolute; right: 60px; top: ${window.innerHeight/2-180+40*P}px; background-color: ${R}; width: ${window.innerWidth/2-120}px; height: 40px;">
                    <div id="showRobots${P+10}" style="cursor: pointer; position: absolute; top: 9.25px; left: 10px; height: 21.5px; width: 215px; color: ${H}; font-size: 16px; overflow: scroll;">
                    ${L.name.length>14?L.name.slice(0,10)+"...":L.name}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 165px; color: ${H}; font-size: 16px;">
                    ${E(L.kills)}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 265px; color: ${H}; font-size: 16px;">
                    ${L.dmg>=999999?E(L.dmg):L.dmg}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 365px; color: ${H}; font-size: 16px;">
                    ${L.honor}
                    </div>
                    </div>
                    `}}let C=0,N=0;for(let z in w)N++;for(let F in w){let W="sliver"==F?ez:"";"gold"==F?W=eN:"keys"==F?W=ti:"workshopPoints"==F&&(W="./images/icons/workshop.png"),document.getElementById("sideDisplay").innerHTML+=`
                <div style="position: absolute; width: 150px; height: 40px; top: 95px; left: ${180*C+(window.innerWidth/2-180*N/2)}px; border-radius: 4px; background-color: rgb(0, 0, 0, 0.4);">
                <div style="position: absolute; width: 40px; height: 40px; background-size: 40px 40px; background-image: url('${W}');">
                ${W?"":`
                <span class="material-symbols-outlined" style="font-size: 40px; color: #ffff00;">
                star
                </span>
                `}
                </div>
                <div style="position: absolute; color: #fff; top: 9.25px; font-size: 16px; right: 5px;">
                ${w[F]>=1e9?E(w[F]):w[F]}
                </div>
                </div>
                </div>
                `,C++}}else if(2==l||3==l){document.getElementById("sideDisplay").innerHTML=`
            <div style="font-size: 40px; width: 100%; text-align: center;">
            ${t>=3?"Victory":"Defeat"}
            </div>
            `;for(let U=0;U<_.length;U++){let G=_[U];if(G){let V=U%2==0?"#000":"#fff",K=U%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)";document.getElementById("sideDisplay").innerHTML+=`
                    <div style="position: absolute; left: 60px; top: ${window.innerHeight/2-40*(_.length-1)/2+40*U}px; background-color: ${K}; width: ${window.innerWidth/2-120}px; height: 40px;">
                    <div id="showAllyRobots${U}" style="cursor: pointer; position: absolute; top: 9.25px; left: 10px; height: 21.5px; width: 215px; color: ${V}; font-size: 16px; overflow: scroll;">
                    ${G.name.length>14?G.name.slice(0,10)+"...":G.name}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 145px; color: ${V}; font-size: 16px;">
                    ${E(G.kills)}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 245px; color: ${V}; font-size: 16px;">
                    ${G.dmg>=999999?E(G.dmg):G.dmg}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 345px; color: ${V}; font-size: 16px;">
                    ${G.honor}
                    </div>
                    </div>
                    `}}for(let Y=0;Y<v.length;Y++){let X=v[Y];if(X){let j=Y%2==0?"#000":"#fff",q=Y%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)";document.getElementById("sideDisplay").innerHTML+=`
                    <div style="position: absolute; right: 60px; top: ${window.innerHeight/2-40*(v.length-1)/2+40*Y}px; background-color: ${q}; width: ${window.innerWidth/2-120}px; height: 40px;">
                    <div id="showEnemyRobots${Y}" style="cursor: pointer; position: absolute; top: 9.25px; left: 10px; height: 21.5px; width: 215px; color: ${j}; font-size: 16px; overflow: scroll;">
                    ${X.name.length>14?X.name.slice(0,10)+"...":X.name}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 165px; color: ${j}; font-size: 16px;">
                    ${E(X.kills)}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 265px; color: ${j}; font-size: 16px;">
                    ${X.dmg>=999999?E(X.dmg):X.dmg}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 365px; color: ${j}; font-size: 16px;">
                    ${X.honor}
                    </div>
                    </div>
                    `}}let Z=0,J=0;for(let Q in w)J++;for(let et in w){let el="sliver"==et?ez:"";"gold"==et?el=eN:"keys"==et?el=ti:"workshopPoints"==et&&(el="./images/icons/workshop.png"),document.getElementById("sideDisplay").innerHTML+=`
                <div style="position: absolute; width: 150px; height: 40px; top: 95px; left: ${180*Z+(window.innerWidth/2-180*J/2)}px; border-radius: 4px; background-color: rgb(0, 0, 0, 0.4);">
                <div style="position: absolute; width: 40px; height: 40px; background-size: 40px 40px; background-image: url('${el}');">
                ${el?"":`
                <span class="material-symbols-outlined" style="font-size: 40px; color: #ffff00;">
                star
                </span>
                `}
                </div>
                <div style="position: absolute; color: #fff; top: 9.25px; font-size: 16px; right: 5px;">
                ${w[et]>=1e9?E(w[et]):w[et]}
                </div>
                </div>
                </div>
                `,Z++}}else if(1==l||0==l){document.getElementById("sideDisplay").innerHTML=`
            <div style="width: 100%; font-size: 36px; text-align: center;">
            Battle Overview
            </div>
            `;for(let ei=0;ei<B.robots.length;ei++){let ea=B.robots[ei];if(ea){let eo=ei%2==0?"#000":"#fff",es=ei%2==0?"rgb(255, 255, 255, 0.4)":"rgb(0, 0, 0, 0.2)";document.getElementById("sideDisplay").innerHTML+=`
                    <div style="position: absolute; left: 60px; top: ${window.innerHeight/2-40*(B.robots.length-1)/2+40*ei}px; background-color: ${es}; width: ${window.innerWidth/2-120}px; height: 40px;">
                    <div style="position: absolute; top: 9.25px; left: 10px; height: 21.5px; width: 215px; color: ${eo}; font-size: 16px; overflow: scroll;">
                    ${ea.level>=13?`${ea.name} <span style="color: ${tF(ea.level)}">${t7(ea.level)}</span>`:`Lvl ${ea.level} ${ea.name}`}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 245px; color: ${eo}; font-size: 16px;">
                    ${ea.battleStats&&E(ea.battleStats.kills)||0}
                    </div>
                    <div style="position: absolute; top: 9.25px; left: 345px; color: ${eo}; font-size: 16px;">
                    ${ea.battleStats&&ea.battleStats.dmg?ea.battleStats.dmg>=999999?E(ea.battleStats.dmg):ea.battleStats.dmg:0}
                    </div>
                    </div>
                    `}}document.getElementById("sideDisplay").innerHTML+=`
            <div style="position: absolute; left: 60px; width: ${window.innerWidth/2-120}px; height: 40px; background-color: rgb(0, 0, 0, 0.6); top: ${window.innerHeight/2-40*B.robots.length/2-20}">
            <div style="position: absolute; width: 40px; height: 40px; left: 245px; background-size: 40px 40px; background-image: url('./images/icons/cant_use_shape.png');">
            </div>
            <div style="position: absolute; width: 40px; height: 40px; left: 345px;">
            <span class="material-symbols-outlined" style="font-size: 40px; color: #fff;">
            explosion
            </span>
            </div>
            </div>
            `;let er=0;for(let e$ in w){let ed="sliver"==e$?ez:"";"gold"==e$?ed=eN:"keys"==e$?ed=ti:"workshopPoints"==e$&&(ed="./images/icons/workshop.png"),document.getElementById("sideDisplay").innerHTML+=`
                <div style="position: absolute; right: ${window.innerWidth/4/2+60}px; top: ${160+60*er}px; background-color: rgb(0, 0, 0, 0.2); width: ${window.innerWidth/4-120}px; height: 40px; overflow: hidden; border-radius: 6px;">
                <div style="position: absolute; width: 40px; height: 40px; background-size: 40px 40px; background-image: url('${ed}');">
                ${ed?"":`
                <span class="material-symbols-outlined" style="font-size: 40px; color: #ffff00;">
                star
                </span>
                `}
                </div>
                <div style="position: absolute; color: #fff; top: 9.25px; font-size: 16px; right: 5px;">
                ${w[e$]>=1e9?E(w[e$]):w[e$]}
                </div>
                </div>
                `,er++}document.getElementById("sideDisplay").innerHTML+=`
            <div style="position: absolute; right: ${window.innerWidth/4/2+60}px; top: ${160+60*er}px; background-color: rgb(0, 0, 0, 0.2); width: ${window.innerWidth/4-120}px; height: 40px; overflow: hidden; border-radius: 6px;">
            <div style="position: absolute; width: 40px; height: 40px;">
            <span class="material-symbols-outlined" style="font-size: 40px; color: #ffff00;">
            rewarded_ads
            </span>
            </div>
            <div style="position: absolute; color: #fff; top: 9.25px; font-size: 16px; right: 5px;">
            ${i}
            </div>
            </div>
            `}document.getElementById("sideDisplay").innerHTML+=`
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `,isNaN(w.workshopPoints)||I("workshopPoints",w.workshopPoints),isNaN(w.sliver)||I("sliver",w.sliver),isNaN(w.gold)||I("gold",w.gold),isNaN(w.keys)||I("keys",w.keys),isNaN(w.oxp)||tl(w.oxp),document.getElementById("backButton").onclick=function(){document.getElementById("sideDisplay").innerHTML="",document.getElementById("hangerUI").style.display="block"}}Math.randInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var tg=0,th=[];o.addEventListener("wheel",function(e){let t=en[0];if(t&&t.robotIndex>=0){let l=t.robots[t.robotIndex];e.deltaY>0?(g.x*=.95,g.y*=.95):(g.x/=.95,g.y/=.95),g={x:Math.min(Math.max(g.x,1980),1980*l.fieldOfViewMulti*(3==l.abilitySpeedMulti?1.4:1)),y:Math.min(Math.max(g.y,1080),1080*l.fieldOfViewMulti*(3==l.abilitySpeedMulti?1.4:1))},B()}});var tc=[];function tm(e,t){tM.push({location:e,scale:0,maxScale:1200,color:"blue"});for(let l=0;l<en.length;l++){let i=en[l].robots[en[l].robotIndex];i&&en[l].isAlly!=t&&!i.effects.find(e=>"phase shift"==e.name)&&Math.hypot(i.y-e.y,i.x-e.x)<=1200+i.scale&&(i.weapons.forEach(e=>{"Atomizer"!=e.name&&"Nucleon"!=e.name&&(e.ammo=0)}),i.ability&&(i.abilityLast>0&&tv(i),i.abilityLast=0,i.abilityReload=i.ability.reload,i.ability.charges&&(i.ability.charges=0)),i.effects.forEach(e=>{"Ultimate Mending"==e.name||"stampede"==e.name||"overload"==e.name?e.lastTime=0:"slowdown"==e.name&&.8==e.power?e.lastTime=0:"defense points"==e.name&&9e3==e.amount?e.lastTime=0:(e.abilityEffect||e.isAbility)&&(e.lastTime=0)}),i.shields.forEach(e=>{(e.regen||"purple"==e.type)&&("purple"==e.type?e.kill=!0:e.health=0)}))}}function ty(e){for(let t=0;t<en.length;t++)for(let l=0;l<en[t].robots.length;l++){let i=en[t].robots[l];if(i&&i.inGameSid==e)return i}}function tf(){return 2==p.gameMode||3==p.gameMode||4==p.gameMode||5==p.gameMode}function tu(e){if("blast"===e)return"./images/weapons/incinerator.png";if("repair amp"===e)return"./images/modules/repair_amplifier.png";if("overload"===e)return"./images/weapons/cinder.png";if("defense points"===e)return"./images/full_action.png";if("stampede"===e)return"./images/stampede.png";else if("freezing"===e)return"./images/weapons/rime.png";else if("dot"===e)return"./images/weapons/viper.png";else if("last stand"===e)return"./images/modules/last_stand.png";else if("phase shift"===e)return"./images/phase_shift.png";else if("dash"===e)return"./images/dash.png";else if("stealth dash"===e)return"./images/stealth.png";else if("slowdown"===e)return"./images/slowdown_effect.png";else if("rust"==e)return"./images/rust.png";else if("Ultimate Mending"==e)return"./images/self_heal.png";else if("nuclear amps"==e)return{name:"destruction"};else if(e.includes("cooldown timer"))return{name:"timer"};else return"./images/cold_pulse.png"}function tb(e,t,l){if(l.shields)for(let i=0;i<l.shields.length;i++){let a=l.shields[i];if(a&&(a.health>0||"purple"==a.type)){th.push({location:l,scale:l.scale+20,dir:Math.atan2(e.y-l.y,e.x-l.x),type:a.type}),tI(a,{amount:t.dmg*("purple"==a.type?1:-1)},!1,e);return}}let o=l.health>0;if(tI(l,{amount:-t.dmg,defensePointsBypass:1-t.defenseBypass,onDamageHealBack:t.healBackOnDamage},!1,e),l.health<=0&&o){let n=tk(e.inGameSid),s=tk(l.inGameSid);n&&s&&ef(n,{name:t.name,level:t.level},s)}}function tx(e,t,l){let i=e.dir;if(tf())for(let a=0;a<en.length;a++){let o=en[a].robots[en[a].robotIndex];o&&en[a].isAlly!=l&&.72>=Math.getAngleDist(i,Math.atan2(o.y-e.y,o.x-e.x))&&t0(o,e)<=t.range+o.scale&&tb(e,t,o)}else for(let n=0;n<ts.length;n++){let s=ts[n];s&&.72>=Math.getAngleDist(i,Math.atan2(s.y-e.y,s.x-e.x))&&t0(s,e)<=t.range+s.scale&&tb(e,t,s)}}function t_(e){e.onAbilityUseFix&&tI(e,{amount:e.maxhealth*e.onAbilityUseFix},!1,e)}function tv(e,t){if(e.ability.maxcharge||(e.abilityReload=e.ability.reload),"Retribution"==e.ability.name||"Paladin"==e.ability.name){if("Paladin"==e.ability.name&&e.shields[0]&&e.shields[0].health>0){let l=Math.min(e.shields[0].health/25,1e5);e.maxhealth+=l,tI(e,{amount:5*l},!!e.isMe,e)}e.shields.forEach(e=>{e.baseShield||(e.kill=!0)})}if("Dragon Flight"==e.ability.name&&e.isMe&&(g={x:1980*e.fieldOfViewMulti,y:1080*e.fieldOfViewMulti},B()),"Reinforce Hull"==e.ability.name&&(e.grayDamage/=e.ability.abilityHealthMulti,e.grayDamage/=4,e.maxhealth/=e.ability.abilityHealthMulti,e.health/=e.ability.abilityHealthMulti),e.onAbilityEndFix){let i=e.maxhealth-e.health-e.grayDamage;tI(e,{amount:i*e.onAbilityEndFix},!1,e)}}function t0(e,t){return Math.hypot(t.y-e.y,t.x-e.x)}function t3(e,t,l,i){var a,o,n,s;null==e.deltaTimer&&(e.deltaTimer=0),e.shieldRegen=1,e.reloadMoveMulti=1,e.abilitySpeedMulti=1,null==e.oldScale&&(e.oldScale=e.scale),null==e.oldFOV&&(e.oldFOV=e.fieldOfViewMulti),e.invis=!1,e.isFREEZE=!!e.freeze,e.freeze=!1,e.lastX=e.x,e.lastY=e.y,e.builtInDefensePoints=e.normalDefensePoints,e.isMe&&(document.getElementById("weaponThing").style.display="block",document.getElementById("healthBar").style.display="block",document.getElementById("weaponThing").innerHTML="");let r=320*(Math.min(4,e.weapons.length)/4);e.ability&&e.isMe&&(document.getElementById("useAbility").style.left=e.weapons.length>4?e.effects.length?"165px":"20px":"350px",document.getElementById("useAbility").style.bottom=e.weapons.length>4?`${r+20}px`:"40px",document.getElementById("abilityCharges").style.left=e.weapons.length>4?e.effects.length?"165px":"20px":"480px",document.getElementById("abilityCharges").style.bottom=e.weapons.length>4?`${r+150}px`:"40px"),function e(t){if(t.dotConverter&&t.dotConverter.length){let l=0,i=[],a=t.dotConverter[0].duration;for(let o=0;o<t.dotConverter.length;o++){let n=t.dotConverter[o];if(i.find(e=>e.owner==n.doer)){let s=i.findIndex(e=>e.owner==n.doer);i[s].dmg+=n.amount/a}else i.push({owner:n.doer,dmg:n.amount/a});l+=n.amount}t.effects.find(e=>"stampede"==e.name)&&t.effects.push({name:"defense points",amount:t.dotConverter.length,lastTime:14e3}),t.effects.push({name:"dot",dmg:Math.abs(l)/a,owners:i,turned:!0,lastTime:1e3*a})}t.dotConverter=[]}(e),"Pink Circle"!=e.name&&(e.turnDmgIntoDOT=!1);let{effectNames:h,lastStand:c,slowdownMulti:m}=function e(t,l,i){t.dotDamage=0;let a={},o,n=1,s=0,r=0,$=t.effects.find(e=>"phase shift"==e.name),d=!1,p,g;t.health<=.3*t.maxhealth&&(t.onLowDefense&&t.effects.push({name:"defense points",amount:t.onLowDefense,lastTime:l+1}),t.onLowSpeed&&t.effects.unshift({name:"slowdown",power:-t.onLowSpeed,lastTime:l+1}));for(let h=0;h<t.effects.length;h++){let c=t.effects[h];if(c){if(!c.turned&&c.neg&&null==c.LMAOOOOOKAOSDKASOIDKASDIOAS&&t.negEffectReduction&&(c.LMAOOOOOKAOSDKASOIDKASDIOAS=!0,c.lastTime*=t.negEffectReduction),null==c.oldLastTime&&(c.oldLastTime=c.lastTime),c.lastTime>0){if(c.lastTime-=l,$&&c.neg&&"cooldown timer"!=c.name){c.lastTime=0;continue}if("cold pulse"==c.name&&t.modules.filter(e=>"God Complex Equation"==e.name).length>=3){c.lastTime=0;continue}"cooldown timer"==c.name?a[c.name+" "+h]={amount:1,duration:c.lastTime,orginal:c.oldLastTime}:(null==a[c.name]?a[c.name]={amount:1,duration:c.lastTime,orginal:c.oldLastTime}:(a[c.name].amount++,a[c.name].duration=c.lastTime),a[c.name].orginal<c.lastTime&&(a[c.name].orginal=c.lastTime));if("cold pulse"==c.name)null==c.dmgOverTime&&(c.dmgOverTime=0),t.isFREEZE=!0,c.dmgOverTime-=l,t.effects.find(e=>"phase shift"==e.name)&&(c.lastTime=0),c.dmgOverTime<=0&&(tI(t,{amount:-50,damageTypeName:"FREEZE EFFECT"},t.isMe,c.owner),c.dmgOverTime=500);else if("dot"==c.name)null==c.dmgOverTime&&(c.dmgOverTime=0),c.dmgOverTime-=l,t.dotDamage+=Math.floor(c.lastTime/1e3)*c.dmg*(t.dotResistance?t.dotResistance:1),c.dmgOverTime<=0&&(c.owner?tI(t,{amount:-c.dmg,isDotDamage:!0},c.owner.isMe,c.owner,!0):c.owners.forEach(e=>{let l=ty(e.owner);l||(l=tE(e.owner)),l&&tI(t,{amount:e.dmg,isDotDamage:!0},l.isMe,l,!0)}),c.dmgOverTime=1e3),t.effects.find(e=>"phase shift"==e.name)&&(c.lastTime=0);else if("last stand"==c.name)null==c.LOLOL&&(c.LOLOL=0),c.LOLOL+=l,c.LOLOL>=100&&(c.LOLOL=0,t.isMe&&(o="none"==document.getElementById("lastStand").style.display?"block":"none")),d=!0,t.LASTSTANDISON=!0;else if("stealth dash"==c.name){if(c.lastTime>=c.oldLastTime-350){let m=.02*t.reloadMoveMulti*n;t.velx+=Math.cos(c.dir)*(m*l),t.vely+=Math.sin(c.dir)*(m*l)}t.invis=!0}else if("slowdown"==c.name)n-=c.power;else if("phase shift"==c.name)n+=1.5;else if("dash"==c.name){let f=.015*(c.POWER?c.POWER:1)*t.reloadMoveMulti*n;t.velx+=Math.cos(c.dir)*(f*l),t.vely+=Math.sin(c.dir)*(f*l)}else if("freezing"==c.name)s+1==D.freeze&&(g=c.owner),s++;else if("stampede"==c.name){if(c.lastTime>4e3&&(n+=1.5),t.turnDmgIntoDOT=!0,null==c.dmgOverTime&&(c.dmgOverTime=0),c.dmgOverTime-=l,c.dmgOverTime<=0){c.dmgOverTime=150,tM.push({location:t,scale:0,maxScale:400,color:"stamp"});let u=[];if(tf())for(let b=0;b<en.length;b++){let _=en[b].robots[en[b].robotIndex];_&&en[b].isAlly!=i&&Math.hypot(_.y-t.y,_.x-t.x)<=400+_.scale&&u.push(_)}else u=ts.filter(e=>Math.hypot(e.y-t.y,e.x-t.x)<=400+e.scale);for(let v=0;v<u.length;v++){let w=u[v];if(w){let k=Math.atan2(w.y-t.y,w.x-t.x);w.velx+=Math.cos(k),w.vely+=Math.sin(k),tI(w,{amount:-t.ability.dmg},w.isMe,t)}}}}else"defense points"==c.name?(t.builtInDefensePoints+=c.amount,c.reflector&&(t.reflector=c.reflector)):"overload"==c.name?n+=1:"blast"==c.name?(r+1==D.blast&&(p=c.owner),r++):"Ultimate Mending"==c.name&&(t.builtInDefensePoints+=200,n+=1.5,null==c.healOverTime&&(c.healOverTime=0),c.healOverTime-=l,c.healOverTime<=0&&(c.healOverTime=500,t.grayDamage=Math.max(t.grayDamage-.15*t.grayDamage,0),tI(t,{amount:.25*t.maxhealth},t.isMe,t)))}if(c.lastTime<=0&&(c.reflector&&(t.reflector=0),"overload"==c.name||c.dmg&&"dash"==c.name)){let E=[],I="overload"==c.name?500:900;if(tM.push({location:t,doFaster:!0,blastttt:"overload"!=c.name,scale:0,maxScale:I}),tf())for(let B=0;B<en.length;B++){let T=en[B].robots[en[B].robotIndex];T&&en[B].isAlly!=i&&Math.hypot(T.y-t.y,T.x-t.x)<=I+T.scale&&E.push(T)}else E=ts.filter(e=>Math.hypot(e.y-t.y,e.x-t.x)<=I+e.scale);for(let S=0;S<E.length;S++){let A=E[S];if(A){let M=Math.atan2(A.y-t.y,A.x-t.x);A.velx+=Math.cos(M)*("overload"==c.name?1.5:5),A.vely+=Math.sin(M)*("overload"==c.name?1.5:5),tI(A,{amount:-t.ability.dmg},A.isMe,t),c.dotDamage&&A.effects.push({neg:!0,name:"dot",dmg:c.dotDamage,lastTime:1e4,owner:t})}}}}}if(r>=D.blast){let P=0;for(let L=0;L<t.effects.length;L++){let H=t.effects[L];if(H&&"blast"==H.name&&(H.lastTime=0,++P>=D.blast))break}for(let R=0;R<en.length;R++){let C=en[R].robots[en[R].robotIndex];C&&en[R].isAlly==i&&Math.hypot(t.y-C.y,t.x-C.x)<=300+C.scale&&tI(C,{amount:-25e3,graydmg:0,damageTypeName:"BLAST EFFECT"},p.isMe,p)}tM.push({location:t,doFaster:!0,scale:0,maxScale:300})}if(s>=D.freeze){let O=0;t.effects.push({name:"cold pulse",neg:!0,owner:g,lastTime:1e3});for(let N=0;N<t.effects.length;N++){let z=t.effects[N];if(z&&"freezing"==z.name&&(z.lastTime=0,++O>=D.freeze))break}}n=Math.max(n,.01),d||(t.LASTSTANDISON=!1);for(let F=0;F<t.effects.length;F++){let W=t.effects[F];W&&W.lastTime<=0&&t.effects.splice(F,1)}let U=t.effects.filter(e=>"repair amp"==e.name).length;U>0&&(null==t.LASTREPAIRAMPHEALHA&&(t.LASTREPAIRAMPHEALHA=0),t.LASTREPAIRAMPHEALHA-=l,t.LASTREPAIRAMPHEALHA<=0&&(t.LASTREPAIRAMPHEALHA=1e3,tI(t,{amount:5e-4*U*t.maxhealth},t.isMe,t)));let G=t.effects.find(e=>t.ability&&"defense points"==e.name&&e.abilityEffect==t.ability.name);t.isFREEZE&&G&&null!=t.abilityLast&&0!=t.abilityLast&&(t.abilityLast=G.lastTime);let V=t.effects.find(e=>"Ultimate Mending"==e.name);t.isFREEZE&&V&&null!=t.abilityLast&&0!=t.abilityLast&&(t.abilityLast=V.lastTime);let K=t.effects.find(e=>"stampede"==e.name);t.isFREEZE&&K&&null!=t.abilityLast&&0!=t.abilityLast&&(t.abilityLast=K.lastTime);let Y=t.effects.find(e=>"overload"==e.name);t.isFREEZE&&Y&&null!=t.abilityLast&&0!=t.abilityLast&&(t.abilityLast=Y.lastTime);let X=t.effects.find(e=>"slowdown"==e.name&&.8==e.power);return t.isFREEZE&&X&&null!=t.abilityLast&&0!=t.abilityLast&&(t.abilityLast=X.lastTime),{effectNames:a,lastStand:o,slowdownMulti:n}}(e,l,t);if(e.isMe||function e(t,l){let i=[];for(let a=0;a<en.length;a++){let o=en[a].robots[en[a].robotIndex];o&&en[a].isAlly!=l&&!o.invis&&i.push(o)}if(t.target=null,t.fireWeapon=!1,t.useAbility=!1,i.length){let n=i.sort((e,l)=>t0(e,t)-t0(l,t))[0];if(n){t.target=n,t.dir=Math.atan2(n.y-t.y,n.x-t.x);let s=t.weapons.sort((e,t)=>e.range-t.range)[0];!function e(t,l){for(let i=0;i<tz.length;i++){let a=tz[i];if("wall rect"==a.name){let o=Math.max(a.x,Math.min(t.x,a.x+a.width)),n=Math.max(a.y,Math.min(t.y,a.y+a.height)),s=t0(t,{x:o,y:n});if(30>=t0({x:t.x+Math.cos(l)*s,y:t.y+Math.sin(l)*s},{x:o,y:n}))return!0}}}(t,Math.hypot(n.y-t.y,n.x-t.x))&&Math.hypot(t.y-n.y,t.x-n.x)<=s.range&&(t.fireWeapon=!0)}}if(t.ability){let r=t.ability.name;["Reinforce Hull","Cold Pulse","Divine Judgement","Full Action","Stealth","Domain Expansion: Infinite Void","Paladin","Dragon Flight","Phase Shift","Self Heal","Retribution"].includes(r)&&Date.now()-t.damagedTime<=50?t.useAbility=!0:["Overload","Dash","Fortify"].includes(r)?t.useAbility=!0:["Stealth Dash"].includes(r)?t.ability.charges>1?t.useAbility=!0:Date.now()-t.damagedTime<=50&&(t.useAbility=!0):["Shield Regeneration"].includes(r)&&t.shields.find(e=>e.regen&&e.maxhealth&&e.health!=e.maxhealth)&&(t.useAbility=!0)}}(e,t),e.ability&&("Phase Shift"==e.ability.name||!e.isFREEZE)){if(e.isMe&&(document.getElementById("useAbility").style.display="block",document.getElementById("abilityCharges").innerHTML=""),e.ability.charges>=e.ability.maxcharge&&(e.ability.charges=e.ability.maxcharge,e.abilityReload=e.ability.reload),e.ability.maxcharge&&e.isMe){let f=e.ability.charges,u=e.ability.maxcharge-e.ability.charges;for(let b=0;b<f;b++)document.getElementById("abilityCharges").innerHTML+=`
                    <div style="position: absolute; bottom: ${20*b}px; width: 15px; height: 15px; border-radius: 100%; background-color: rgb(255, 255, 255, 0.8);">
                    </div>
                    `;for(let _=0;_<u;_++)document.getElementById("abilityCharges").innerHTML+=`
                    <div style="position: absolute; bottom: ${20*(_+f)}px; width: 15px; height: 15px; border-radius: 100%; background-color: rgb(0, 0, 0, 0.2);">
                    </div>
                    `}(e.isMe?e$[69]:e.useAbility)&&function e(t,l){if(null==t.abilityLast&&(t.abilityLast=0),null==t.abilityReload&&(t.abilityReload=0),"Reinforce Hull"==t.ability.name||"Ultimate Mending"==t.ability.name||"Divine Judgement"==t.ability.name||"Grand Fortitude"==t.ability.name||"Paladin"==t.ability.name||"Overload"==t.ability.name||"Stampede"==t.ability.name||"Stealth"==t.ability.name||"Retribution"==t.ability.name||"Ultimate Defense"==t.ability.name||"Self Heal"==t.ability.name||"Dragon Flight"==t.ability.name||"Shield Regeneration"==t.ability.name||"Full Action"==t.ability.name){if(0==t.abilityReload&&0==t.abilityLast){if(t.abilityLast=t.ability.lastingTime,t_(t),"Divine Judgement"==t.ability.name)t.effects.push({name:"slowdown",power:.8,abilityEffect:"Divine Judgement",lastTime:t.ability.lastingTime}),t.effects.push({name:"defense points",amount:9e3,abilityEffect:"Divine Judgement",lastTime:t.ability.lastingTime});else if("Dragon Flight"==t.ability.name&&t.isMe)g={x:1980*t.fieldOfViewMulti*1.4,y:1080*t.fieldOfViewMulti*1.4},B();else if("Stampede"==t.ability.name)t.effects.push({name:"stampede",lastTime:t.ability.lastingTime});else if("Overload"==t.ability.name)t.effects.push({name:"overload",lastTime:t.ability.lastingTime});else if("Paladin"==t.ability.name){let i=1;t.modules.filter(e=>e.shieldHealth).forEach(e=>{i+=e.shieldHealth}),t.shields.push({type:"yellow",maxhealth:t.ability.shieldHp*i,health:t.ability.shieldHp*i})}else"Grand Fortitude"==t.ability.name?(tI(t,{amount:.1*t.maxhealth},!1,t),t.abilityReload=t.ability.reload,t.effects.push({name:"defense points",amount:300,reflector:.1,lastTime:14e3}),t.effects.push({name:"dash",lastTime:350,dmg:t.ability.dmg,dotDamage:t.ability.dotDamage,POWER:2,dir:t.dir})):"Ultimate Mending"==t.ability.name?t.effects.push({name:"Ultimate Mending",isAbility:!0,abilityEffect:"Ultimate Mending",lastTime:t.ability.lastingTime}):"Reinforce Hull"==t.ability.name&&(t.grayDamage*=t.ability.abilityHealthMulti,t.maxhealth*=t.ability.abilityHealthMulti,t.health*=t.ability.abilityHealthMulti,t.effects.push({name:"defense points",abilityEffect:t.ability.name,amount:t.ability.abilityDefensePoints,lastTime:t.ability.lastingTime}))}}else if("Cold Pulse"==t.ability.name){if(0==t.abilityReload){t_(t),tM.push({x:t.x,y:t.y,scale:0,maxScale:1200,color:"white"});let a=[];if(tf())for(let o=0;o<en.length;o++){let n=en[o].robots[en[o].robotIndex];n&&en[o].isAlly!=l&&Math.hypot(n.y-t.y,n.x-t.x)<=1200+n.scale&&a.push(n)}else a=ts.filter(e=>Math.hypot(e.y-t.y,e.x-t.x)<=1200+e.scale);for(let s=0;s<a.length;s++){let r=a[s];r&&(null==r.effects&&(r.effects=[]),tI(r,{amount:-t.ability.dmg},t.isMe,t),r.effects.push({name:"cold pulse",owner:t,neg:!0,lastTime:3e3}))}a.length&&tI(t,{amount:5e3*a.length},t.isMe,t),t.abilityReload=t.ability.reload}}else if(t.ability.maxcharge){if(0==t.abilityLast&&t.ability.charges>0){t_(t),t.ability.charges--,t.abilityLast=t.ability.lastingTime;let $=tR(t,l);if("Stealth Dash"==t.ability.name)t.effects.push({name:"stealth dash",lastTime:2500,dir:t.isMe?t.dir:$});else if("Phase Shift"==t.ability.name)t.effects.push({name:"phase shift",lastTime:2e3});else if("Dash"==t.ability.name)t.effects.push({name:"dash",lastTime:350,dir:t.isMe?t.dir:$});else if("Fortify"==t.ability.name){let d=1;t.modules.filter(e=>e.shieldHealth).forEach(e=>{d+=e.shieldHealth}),t.shields.push({type:t.level>=13?"yellow":"energy",maxhealth:t.ability.shieldHp*d,health:t.ability.shieldHp*d})}}}else"Domain Expansion: Infinite Void"==t.ability.name&&0==t.abilityReload&&(t_(t),tc.push({x:t.x,y:t.y,scale:900,isAlly:l,owner:t,ownerName:t.name,name:"Infinite Void",lastingTime:t.ability.lastingTime}),t.abilityReload=t.ability.reload)}(e,t),e.isMe&&null==e.abilityReload&&null==e.abilityLast&&(document.getElementById("cooldownText").innerHTML=""),0==e.abilityReload&&0==e.abilityLast?(e.scale=Math.max(e.scale-.08*l,e.oldScale),e.isMe&&(document.getElementById("useAbility").style.backgroundImage=`url('${e.ability.iconSource}')`,document.getElementById("cooldownText").innerHTML="")):e.abilityReload>0&&e.isMe?document.getElementById("useAbility").style.backgroundImage="":e.isMe&&(document.getElementById("useAbility").style.backgroundImage=`url('${e.ability.iconSource}')`),e.abilityLast&&e.abilityLast>0?(e.abilityLast-=l,e.ability.maxcharge&&e.isMe&&(document.getElementById("useAbility").style.backgroundImage=`url('${e.ability.iconSource}')`),e.isMe&&(document.getElementById("cooldownText").innerHTML=`${(e.abilityLast/1e3).toFixed(1)}`,document.getElementById("cooldownText").style.left=`${60-document.getElementById("cooldownText").clientWidth/2}px`),function e(t,l,i){if("Divine Judgement"==t.ability.name)t.isMe?tg-=l:t.deltaTimer-=l,(t.isMe?tg<=0:t.deltaTimer<=0)&&(t.isMe?tg-=l:t.deltaTimer-=l,tr.push({defensePointsBypass:0,x:t.x,y:t.y,oldX:t.x,oldY:t.y,velx:0,vely:0,scale:25,speed:.3,projType:"energy",antiTier4_5:!0,bypassShields:!0,dmg:t.ability.dmg,range:2e3,dir:t.dir,color:"./images/bullets/energy_bullet.png",isAlly:i,owner:t,weaponOwner:{name:"Divine Judgement",level:t.level}}));else if("Self Heal"==t.ability.name){if(t.isMe?tg-=l:t.deltaTimer-=l,t.isMe?tg<=0:t.deltaTimer<=0){let a=t.maxhealth*("Pink Circle"==t.name?.1:.025);tI(t,{amount:Math.floor(a)},!!t.isMe,t),t.isMe?tg=500:t.deltaTimer=500}}else if("Stealth"==t.ability.name)t.invis=!0,t.abilitySpeedMulti=2;else if("Retribution"==t.ability.name){if("Ultimate Tan Pentagon"==t.name&&(t.abilitySpeedMulti=1.5),0==t.shields.length&&t.shields.push({type:"purple",health:0}),t.abilityLast<=("Ultimate Tan Pentagon"==t.name?8e3:4e3)&&(t.isMe?t.deltaTimer-=l:tg-=l,t.isMe?t.deltaTimer<=0:tg<=0)){t.isMe?t.deltaTimer=100:tg=100;let o=1+.075*Math.floor((t.shields[0]?t.shields[0].health:0)/2500);o=Math.min(o,20);let n=0;for(let s=0;s<4;s++){if(0==s?(x=t.x+Math.cos(t.dir+1.57)*(t.scale-7.5),y=t.y+Math.sin(t.dir+1.57)*(t.scale-7.5)):1==s?(x=t.x+Math.cos(t.dir+.39)*(t.scale-7.5),y=t.y+Math.sin(t.dir+.39)*(t.scale-7.5)):2==s?(x=t.x+Math.cos(t.dir-.39)*(t.scale-7.5),y=t.y+Math.sin(t.dir-.39)*(t.scale-7.5)):(x=t.x+Math.cos(t.dir-1.57)*(t.scale-7.5),y=t.y+Math.sin(t.dir-1.57)*(t.scale-7.5)),t.isMe){let r=x-tn.x,p=y-tn.y,h=$/window.innerWidth*g.x;n=Math.atan2(d/window.innerHeight*g.y-p,h-r)}else t.target&&(n=Math.atan2(t.target.y-y,t.target.x-x));tr.push({x:x,y:y,oldX:x,oldY:y,velx:0,vely:0,scale:25,speed:.15,projType:"energy",dmg:t.ability.dmg*o,range:"Ultimate Tan Pentagon"==t.name?2e3:800,dir:n,bypassReflector:"Ultimate Tan Pentagon"==t.name,color:"./images/bullets/energy_bullet.png",isAlly:i,owner:t,weaponOwner:{name:"Retribution",level:t.level}})}}}else if("Ultimate Defense"==t.ability.name){if(t.turnDmgIntoDOT=!0,t.isMe?tg-=l:t.deltaTimer-=l,t.isMe?tg<=0:t.deltaTimer<=0){let c=.025*t.maxhealth;tI(t,{amount:Math.floor(c)},!0),t.isMe?tg=500:t.deltaTimer=500}}else if("Dragon Flight"==t.ability.name){if(t.builtInDefensePoints=9e3,t.abilitySpeedMulti=3,t.scale=Math.min(t.scale+.08*l,2*t.oldScale),t.isMe?tg-=l:t.deltaTimer-=l,t.isMe?tg<=0:t.deltaTimer<=0){t.isMe?tg=50:t.deltaTimer=50;for(let m=0;m<2;m++)tr.push({x:t.x,y:t.y,oldX:t.x,oldY:t.y,velx:0,vely:0,scale:25,speed:.15,avoidBuildings:!0,dmg:t.ability.dmg,range:1200,projType:"normal",dir:t.dir+t$(5)*(.5>Math.random()?-1:1),color:"#ff0000",isAlly:i,dotEffect:{name:"dot",last:5e3,dmg:t.ability.dotDamage,owner:t},owner:t,weaponOwner:{name:"Dragon Breathe",level:t.level}})}}else"Full Action"==t.ability.name?t.builtInDefensePoints="Teal Circle"==t.name?200:60:"Shield Regeneration"==t.ability.name&&(t.shieldRegen=.1,"Cyan Pentagon"==t.name&&(t.abilitySpeedMulti=1.5))}(e,l,t),e.abilityLast<=0&&(tv(e,l),e.abilityLast=0)):e.ability.charges&&e.isMe&&(document.getElementById("useAbility").style.backgroundImage=`url('${e.ability.iconSource}')`,document.getElementById("cooldownText").innerHTML=""),e.abilityReload&&e.abilityReload>0&&(e.scale=Math.max(e.scale-.08*l,e.oldScale),!e.ability.maxcharge&&e.isMe?(document.getElementById("cooldownText").innerHTML=`${(e.abilityReload/1e3).toFixed(1)}`,document.getElementById("cooldownText").style.left=`${60-document.getElementById("cooldownText").clientWidth/2}px`):e.ability.maxcharge&&!e.ability.charges&&e.isMe&&(document.getElementById("useAbility").style.backgroundImage=null,document.getElementById("cooldownText").innerHTML=`${(e.abilityReload/1e3).toFixed(1)}`,document.getElementById("cooldownText").style.left=`${60-document.getElementById("cooldownText").clientWidth/2}px`),e.abilityReload-=l,e.abilityReload<=0&&(e.abilityReload=0,e.ability.maxcharge&&(e.ability.charges++,e.abilityReload=e.ability.reload)))}else e.isMe&&(document.getElementById("useAbility").style.display="none");!function e(t,l,i){if(t.healingAura&&(null==t.healingAuraLast&&(t.healingAuraLast=0),t.healingAuraLast-=i,t.healingAuraLast<=0)){t.healingAuraLast=t.effects.find(e=>"Ultimate Mending"==e.name)?250:1e3;for(let a=0;a<en.length;a++){let o=en[a].robots[en[a].robotIndex];o&&en[a].isAlly==l&&Math.hypot(o.y-t.y,o.x-t.x)<=600+o.scale&&(!o.isMe&&t.effects.find(e=>"Ultimate Mending"==e.name)&&(o.grayDamage=Math.max(0,o.grayDamage-.3*o.grayDamage)),tI(o,{amount:t.healingAura*(t.effects.find(e=>"Ultimate Mending"==e.name)?25:1)},t.isMe,t))}}}(e,t,l),e.isMe&&(document.getElementById("LMAOLMAOLMAOLMAO").innerHTML="",function e(t,l){let i=0;for(let a in l){let o=(l[a].duration/1e3).toString(),n=o.indexOf(".");-1==n?o+=".0":o=o.slice(0,n+2),l[a].duration>=1e100&&(o=""),document.getElementById("LMAOLMAOLMAOLMAO").innerHTML+=`
            <div style="position: absolute; left: 20px; width: 125px; height: 43px; background-color: rgb(0, 0, 0, 0.35); bottom: ${60*i+(t+15)}px; border-radius: 4px;">
            <div style="position: absolute; top: 0px; left: 5px; height: 40px; width: 40px; background-size: 40px 40px; ${"object"==typeof tu(a)?"":`background-image: url('${tu(a)}');`}">
            ${"object"==typeof tu(a)?`
            <span class="material-symbols-outlined" style="color: #fff; font-size: 40px;">
            ${tu(a).name}
            </span>
            `:""}
            </div>
            <div style="position: absolute; top: 9px; right: 5px; color: #fff;">
            ${l[a].amount}
            </div>
            <div style="position: absolute; top: 9px; left: 50px; color: #fff;">
            ${o}
            </div>
            <div style="position: absolute; bottom: 0px; left: 0px; height: 3px; width: ${l[a].duration/l[a].orginal*100}%; background-color: #fff;">
            </div>
            </div>
            `,i++}}(r,h));let{shieldRegenMulti:v}=function e(t,l){let i=1,a=t.modules.filter(e=>"Last Stand"==e.name);if(a.length&&!t.lastStandUpdate){t.lastStandDuration=a.sort((e,t)=>t.lastingTime-e.lastingTime)[0].lastingTime,t.lastStandUpdate=!0,t.lastStandThreshold=0;for(let o=0;o<a.length;o++)t.lastStandThreshold+=a[o].immunePercent;t.lastStandThreshold=Math.min(t.lastStandThreshold,.99)}else t.lastStandUpdate||(t.lastStandDuration=0,t.lastStandUpdate=!0,t.lastStandThreshold=0);t.modules.forEach(e=>{e.shieldRegen&&(i-=e.shieldRegen),"Self Fix Unit"==e.name&&e.selfFixRepair&&!t.isFREEZE&&(null==e.lastRepair&&(e.lastRepair=0),e.lastRepair-=l,e.lastRepair<=0&&(e.lastRepair=1e3,tI(t,{amount:e.selfFixRepair},!0,t)))}),t.effects.find(e=>"last stand"==e.name)&&t.grayDamage>t.maxhealth-t.lastStandThreshold*t.maxhealth&&(t.grayDamage=t.maxhealth-t.lastStandThreshold*t.maxhealth,t.health=t.lastStandThreshold*t.maxhealth),!t.usedLastStand&&t.health<=t.lastStandThreshold*t.maxhealth&&(t.health=t.lastStandThreshold*t.maxhealth,t.effects.push({name:"last stand",lastTime:t.lastStandDuration}),t.usedLastStand=!0);let n=t.effects.filter(e=>"nuclear amps"==e.name).length,s=t.modules.filter(e=>"Nuclear Amplifier"==e.name).sort((e,t)=>t.nuclearAmp-e.nuclearAmp)[0];return s&&(null!=t.oldAmountOfAmps||void 0!=t.oldAmountOfAmps)&&(s=s.nuclearAmp,t.ability&&t.ability.dmg&&(t.ability.dmg/=1+s*t.oldAmountOfAmps,t.ability.dmg*=1+s*n),t.weapons.forEach(e=>{e.dmg/=1+s*t.oldAmountOfAmps,e.dmg*=1+s*n})),t.oldAmountOfAmps=n,{shieldRegenMulti:i}}(e,l);if(!function e(t,l,{shieldRegenMulti:i,isAlly:a}){for(let o=0;o<t.shields.length;o++){let n=t.shields[o];if(n){if(n.regen&&(null==n.lastRegen&&(n.lastRegen=!1),Date.now()-n.lastRegen>=5e3*t.shieldRegen*i&&(n.lastRegen=Date.now(),n.health+=n.maxhealth*n.regen),n.health>n.maxhealth&&(n.health=n.maxhealth)),n.health==n.maxhealth&&n.baseShield&&"Cyan Pentagon"==t.name&&(null==n.lastRegenPlayer&&(n.lastRegenPlayer=0),n.lastRegenPlayer-=l,n.lastRegenPlayer<=0&&(n.lastRegenPlayer=1e3,tI(t,{amount:.05*t.maxhealth},!0,t))),n.health<0&&(n.health=0),n.lastTime&&(n.lastTime-=l,n.lastTime<=0&&(n.kill=!0)),n.health>0||"purple"==n.type){let s=tr.filter(e=>!e.bypassShields&&e.isAlly!=a&&e.projType!=n.type&&t9(e,t,"shield"));for(let r=0;r<s.length;r++)th.push({location:t,scale:t.scale+20,dir:Math.atan2(s[r].y-t.y,s[r].x-t.x),type:n.type}),tI(n,{amount:s[r].dmg*("purple"==n.type?1:-1)},!1,s[r].owner),s[r].dmg=0,s[r].kill=!0}(n.health<=0&&"purple"!=n.type&&!n.regen||n.kill)&&(n.health<=0&&"purple"!=n.type&&!n.regen&&"yellow"==n.type&&"Paladin"==t.ability.name&&tm(t,a),t.shields.splice(o,1))}}}(e,l,{shieldRegenMulti:v,isAlly:t}),e.isMe&&function e(t){document.getElementById("shields").innerHTML="";for(let l=0;l<t.shields.length;l++){let i=t.shields[l];if(l>5)break;document.getElementById("shields").innerHTML+=`
            <div style="display: block; position: absolute; top: ${30*l}px; left: 10px; width: 300px; height: 25px; background-color: rgb(0, 0, 0, 0.2); border: solid; border-color: #fff; border-width: 1px;">
            <div style="position: absolute; top: 0px; left: 0px; width: ${"purple"==i.type?100:100*(i.health/i.maxhealth)}%; height: 100%; background-color: ${"yellow"==i.type?"#ffff00":"purple"==i.type?"#800080":"#02ccaa"};">
            </div>
            <div style="display: ${"purple"==i.type?"none":"block"}; position: absolute; top: 0px; left: 5px; font-size: 17px;">
            ${ee(i.health)}
            </div>
            </div>
            `}}(e),!function e(t,l){let i=tr.filter(e=>e.isAlly!=l&&t9(e,t)),a=t.effects.find(e=>"cold pulse"==e.name);for(let o=0;o<i.length;o++){let n=i[o];if(n.antiTier4_5&&(n.dmg=tS(n,t)),n.dmg>0){let s=t.health>0;if(n.knockback&&(t.velx+=Math.cos(n.dir)*n.knockback,t.vely+=Math.sin(n.dir)*n.knockback),n.rustEffect&&t.effects.filter(e=>"rust"==e.name&&"tamer"==e.effectID).length<30&&t.effects.push({neg:!0,effectID:n.rustEffect.effectID,name:n.rustEffect.name,power:n.rustEffect.power,lastTime:n.rustEffect.last}),n.dotEffect&&(n.dotEffect.resetDOT&&t.effects.filter(e=>"dot"==e.name&&e.resetDOT).forEach(e=>{e.oldLastTime&&(e.lastTime=e.oldLastTime)}),t.effects.push({neg:!0,resetDOT:n.dotEffect.resetDOT,name:n.dotEffect.name,dmg:n.dotEffect.dmg,lastTime:n.dotEffect.last,owner:n.owner})),n.slowEffect&&t.effects.unshift({name:n.slowEffect.name,power:n.slowEffect.power,lastTime:n.slowEffect.last}),n.blastEffect)for(let r=0;r<n.blastEffect.power;r++)t.effects.push({neg:!0,owner:n.owner,name:n.blastEffect.name,lastTime:n.blastEffect.last});if(n.freezeEffect&&!a)for(let $=0;$<n.freezeEffect.power;$++)t.effects.push({name:n.freezeEffect.name,neg:!0,owner:n.owner,lastTime:n.freezeEffect.last});if(n.aoeRange){for(let d=0;d<en.length;d++){let p=en[d].robots[en[d].robotIndex];p&&en[d].isAlly!=n.isAlly&&Math.hypot(n.y-p.y,n.x-p.x)<=n.aoeRange+p.scale&&tI(p,{amount:-n.dmg},n.owner.isMe,n.owner)}tM.push({x:n.x,y:n.y,scale:0,color:n.weaponOwner&&n.weaponOwner.cold?"white":"",maxScale:n.aoeRange})}else tI(t,{amount:-n.dmg,graydmg:n.grayDamageAmount,defensePointsBypass:n.defensePointsBypass,bypassReflector:n.bypassReflector},n.owner.isMe,n.owner);if(t.health<=0&&s&&!t.revive){let g=tk(t.inGameSid),h=tk(n.owner.inGameSid);g&&h&&ef(h,n.weaponOwner,g)}}n.dmg=0,n.kill=!0}}(e,t),e.health>e.maxhealth-e.grayDamage&&(e.health=e.maxhealth-e.grayDamage),!function e(t){if(null==t.lastHealth&&(t.lastHealth=t.maxhealth),t.lastHealth-t.health>0&&"Cyan Pentagon"==t.name&&!t.effects.find(e=>"cooldown timer"==e.name&&e.onDamageHealShield==t.name)){let l=t.shields.find(e=>e.baseShield);l.maxhealth+=.125*l.maxhealth,l.health+=.25*l.maxhealth,t.effects.push({name:"cooldown timer",onDamageHealShield:t.name,lastTime:6e3})}t.lastHealth=t.health}(e),e.isMe&&(document.getElementById("healthBar").innerHTML=`
            <div style="position: absolute; top: 0px; right: 0px; width: ${100*(e.grayDamage/e.maxhealth)}%; height: 100%; background-color: #808080;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; width: ${100*(e.health>e.maxhealth-e.grayDamage?(e.maxhealth-e.grayDamage)/e.maxhealth:e.health/e.maxhealth)}%; height: 100%; background-color: #45ff45;">
            </div>
            <div style="position: absolute; top: 0px; right: ${100-100*(e.health/e.maxhealth)}%; width: ${e.effects.find(e=>"phase shift"==e.name)?0:100*(Math.min(e.dotDamage,e.health)/e.maxhealth)}%; height: 100%; background-color: #ffff00;">
            </div>
            <div id="lastStand" style="display: true; position: absolute; top: 0px; left: 0px; width: ${100*(e.lastStandThreshold*e.maxhealth/e.maxhealth)}%; height: 100%; background-color: rgb(0, 0, 0, .2);">
            </div>
            <div style="position: absolute; top: 0px; left: 5px; font-size: 30px; color: ${p.league<=300&&2==p.gameMode?"#00f":"#000"};">
            ${ee(e.health)}
            </div>
            `),e.isMe&&function e(t,l){for(let i=0;i<t.weapons.length;i++){let a=t.weapons[i],o="";if(null==a.firedTime&&(a.firedTime=0),"Atomizer"==a.name||"Nucleon"==a.name){let n=a.firedTime/16e3*100;o=`rgb(${Math.min(255,Math.floor(255*n/100))}, ${Math.min(235,Math.floor((100-n)*235/100))}, 0)`}else if("Lance"==a.name||"Glaive"==a.name){null==a.ammoFired&&(a.ammoFired=0);let s=a.ammoFired%4/3*100;o=`rgb(${Math.min(255,Math.floor(255*s/100))}, ${Math.min(235,Math.floor((100-s)*235/100))}, 0)`}document.getElementById("weaponThing").innerHTML+=`
            <div style="position: absolute; bottom: ${80*(i>=4?i-4:i)}px; left: ${i>=4?320:0}px; width: 200px; height: 75px; margin-top: 20px;">
            <div id="weaponICON${i}" style="position: absolute; z-index: 2; top: 0px; left: 0px; background-color: #404040; border-radius: 100%; width: 75px; height: 75px;">
            </div>
            <div style="position: absolute; top: 23px; left: 60px; background-color: #404040; border-radius: 12px; width: 250px; height: 30px;">
            <div style="width: ${"Atomizer"==a.name||"Nucleon"==a.name?a.firedTime/16e3*100:a.ammo/a.maxammo*100}%; height: 100%; border-radius: 12px; background-color: ${"Atomizer"==a.name||"Nucleon"==a.name||"Lance"==a.name||"Glaive"==a.name?o:"#fff"};">
            </div>
            </div>
            </div>
            `}}(e,l),!function e(t,l,i){let a=!1;for(let o=0;o<t.weapons.length;o++){let n=t.weapons[o];if(t.isMe){let s=K(n,!0);s.style="width: 100%; height: 100%",document.getElementById(`weaponICON${o}`).appendChild(s)}if(n.continuousReload){if(null==n.lastFire&&(n.lastFire=0),n.ammo>0&&!t.isFREEZE&&(t.isMe?e$[32]:t.fireWeapon)&&Date.now()-n.lastFire>=n.fireRate){if(n.lastFire=Date.now(),"Cinder"==n.name){if(tf())for(let r=0;r<en.length;r++){let $=en[r].robots[en[r].robotIndex];$&&en[r].isAlly!=i&&Math.hypot($.y-t.y,$.x-t.x)<=n.range+$.scale&&tI($,{amount:-n.dmg},$.isMe,t)}else ts.filter(e=>Math.hypot(e.y-t.y,e.x-t.x)<=n.range+e.scale).sort((e,l)=>Math.hypot(e.y-t.y,e.x-t.x)-Math.hypot(l.y-t.y,l.x-t.x)).forEach(e=>{tI(e,{amount:-n.dmg},!1,t)});a||(a=!0,tM.push({location:t,doFaster:!0,scale:0,maxScale:n.range}))}else"Pantagruel"==n.name||"Gangantua"==n.name?tx(t,n,i):td(n,t,i);n.ammo--}n.ammo<n.maxammo&&(t.isMe&&e$[82]&&!t.isFREEZE?t.reloadMoveMulti=.5:t.reloadMoveMulti=1,null==n.lastChange&&(n.lastChange=0),Date.now()-n.lastChange>=n.reload*t.reloadMoveMulti&&(n.lastChange=Date.now(),"Pantagruel"==n.name||"Gangantua"==n.name?n.ammo=Math.min(n.ammo+20,n.maxammo):"Avalanche"==n.name||"Rime"==n.name||"Glacier"==n.name?n.ammo=Math.min(n.ammo+4,n.maxammo):n.ammo++))}else if(null==n.canFire&&(n.canFire=!0),"Atomizer"==n.name||"Nucleon"==n.name?(t.isMe?e$[32]:t.fireWeapon)?n.firedTime=Math.min(n.firedTime+l,16e3):n.firedTime=Math.max(n.firedTime-3*l,0):("Evora"==n.name||"Veyron"==n.name)&&((t.isMe?e$[32]:t.fireWeapon)?n.firedTime=Math.min(n.firedTime+l,2e3):n.firedTime=Math.max(n.firedTime-l,0)),n.canFire){null==n.lastFire&&(n.lastFire=0),t.reloadMoveMulti=1;let d="Evora"==n.name||"Veyron"==n.name?n.firedTime/1e3==2?.4:1:n.firedTime/16e3;if((t.isMe?e$[32]:t.fireWeapon)&&!t.isFREEZE&&Date.now()-n.lastFire>=n.fireRate*("Atomizer"==n.name||"Nucleon"==n.name?1+d:"Evora"==n.name||"Veyron"==n.name?d:1)){if(n.lastFire=Date.now(),"Hawk"==n.name||"Eagle"==n.name){let p=[];if(tf()){for(let g=1;g<en.length;g++){let h=en[g].robots[en[g].robotIndex];h&&en[g].isAlly!=i&&Math.hypot(h.y-t.y,h.x-t.x)<=n.range+h.scale&&p.push(h)}p=p.sort((e,l)=>Math.hypot(e.y-t.y,e.x-t.x)-Math.hypot(l.y-t.y,l.x-t.x))}else p=ts.filter(e=>Math.hypot(e.y-t.y,e.x-t.x)<=n.range+e.scale).sort((e,l)=>Math.hypot(e.y-t.y,e.x-t.x)-Math.hypot(l.y-t.y,l.x-t.x));for(let c=0;c<3;c++){let m=p[c];m&&tI(m,{amount:-n.dmg},m.isMe,t)}p.length&&n.ammo--}else td(n,t,i),n.ammo--}n.ammo<=0&&(n.canFire=!1)}else t.isMe&&e$[82]&&!t.isFREEZE?t.reloadMoveMulti=.5:t.reloadMoveMulti=1,n.ammo+=n.maxammo/n.reload*l*(t.isMe&&e$[82]?2:1),n.ammo>=n.maxammo&&(n.ammo=n.maxammo,n.canFire=!0)}}(e,l,t),e.isMe&&e.usedLastStand&&(document.getElementById("lastStand").style.display=c||"none"),e.mechanicHeal){let w=e.mechanicHeal*e.maxhealth;null==e.mechanicHealLast______&&(e.mechanicHealLast______=0),e.mechanicHealLast______-=l,e.mechanicHealLast______<=0&&(e.mechanicHealLast______=1e3,tI(e,{amount:w},!0))}if(!function e(t,l,{hasStampede:i,slowdownMulti:a,isAlly:o}){if(!t.isFREEZE&&(!t.isMe||e$[87]||e$[65]||e$[83]||e$[68])){let n;if(t.isMe){let s=e$[68]-e$[65];n=Math.atan2(e$[83]-e$[87],s)}else n=tR(t,o);if(void 0==n||null==n)return;if(t.targetDir=n,(i&&i.lastTime>4e3||"Cyan Pentagon"==t.name)&&(null==t.movedir&&(t.movedir=n),t.movedir!=n)){t.movedir%=2*Math.PI;let r=(t.movedir-n+2*Math.PI)%(2*Math.PI),$=Math.min(Math.abs(r-2*Math.PI),r,("Cyan Pentagon"==t.name?.0052:.0018)*l),d=r-Math.PI>=0?1:-1;isNaN(r)||(t.movedir+=d*$+2*Math.PI),n=t.movedir}let p=t.speed*t.reloadMoveMulti;p*=t.abilitySpeedMulti,p*=a,t.velx+=Math.cos(n)*(p*l),t.vely+=Math.sin(n)*(p*l)}}(e,l,{hasStampede:e.effects.find(e=>"stampede"==e.name),slowdownMulti:m,isAlly:t}),a=e,o=l,a.x+a.velx*o>=a.scale&&a.x+a.velx*o<=es.x-a.scale?a.x+=a.velx*o:a.x+a.velx*o>=es.x-a.scale?a.x=es.x-a.scale:a.x=a.scale,a.y+a.vely*o>=a.scale&&a.y+a.vely*o<=es.y-a.scale?a.y+=a.vely*o:a.y+a.vely*o>=es.y-a.scale?a.y=es.y-a.scale:a.y=a.scale,n=e,s=l,n.velx&&(n.velx*=Math.pow(.993,s)),n.vely&&(n.vely*=Math.pow(.993,s)),!function e(t,l,i){if(3!=t.abilitySpeedMulti&&!t.effects.find(e=>"dash"==e.name&&e.dmg))for(let a=0;a<tz.length;a++){let o=tz[a];if(o){if("beacon"==o.name)!t.isFREEZE&&400>=Math.hypot(o.y-t.y,o.x-t.x)&&(o.isHAVEON=!0,i?o.ENEMYPOINTS?(o.ENEMYPOINTS-=l,o.ENEMYPOINTS<0&&(o.ENEMYPOINTS=0)):(o.ALLYPOINTS+=l,o.ALLYPOINTS>5e3&&(o.ALLYPOINTS=5e3)):o.ALLYPOINTS?(o.ALLYPOINTS-=l,o.ALLYPOINTS<0&&(o.ALLYPOINTS=0)):(o.ENEMYPOINTS+=l,o.ENEMYPOINTS>5e3&&(o.ENEMYPOINTS=5e3)));else if("wall rect"==o.name){if(tC(t,o,!0)){let n=Math.max(o.x,Math.min(t.x,o.x+o.width)),s=Math.max(o.y,Math.min(t.y,o.y+o.height));t.velx*=.75,t.vely*=.75,t.velx+=Math.cos(Math.atan2(t.y-s,t.x-n))*(.75+t.speed),t.vely+=Math.sin(Math.atan2(t.y-s,t.x-n))*(.75+t.speed)}}else if("water"==o.name){let r=Math.max(o.x,Math.min(t.x,o.x+o.width)),$=Math.max(o.y,Math.min(t.y,o.y+o.height));if(Math.hypot(t.x-r,t.y-$)<=t.scale/2){t.kill=!0;ef({name:"GAME_P2W (pay to win)"},{name:"Map Element",level:69431},tk(t.inGameSid))}}}}}(e,l,t),e.health<=0||e.kill){if(e.revive&&!e.kill)!function e(t){if("Cyan Pentagon"==t.name){let l=t.shields.find(e=>e.baseShield);l.health=l.maxhealth}else"Ultimate Green Circle"==t.name&&(t.maxhealth*=1.5);t.grayDamage*=1-t.revive,t.abilityReload=0,t.health+=t.maxhealth*t.revive,t.revive=0}(e);else if(e.isMe){en[0].robotIndex=-1,document.getElementById("shields").innerHTML="",document.getElementById("abilityCharges").innerHTML="",document.getElementById("useAbility").style.display="none",document.getElementById("weaponThing").style.display="none",document.getElementById("healthBar").style.display="none";let k=en[0].robots.find(e=>!e.USED);document.getElementById("chooseSlot").style.bottom="0px",document.getElementById("mapName").style.display="block",k||(document.getElementById("chooseSlot").style.bottom="-200px",document.getElementById("mapName").style.display="none",tp([...en],tf()?.5:null)),er()}else if(en[i].robots[en[i].robotIndex].USED=!0,en[i].robotIndex++,!en[i].robots[en[i].robotIndex]){en[i].robotIndex=-1;let E=!0;for(let I=0;I<en.length;I++){let T=en[I].robots;if(!0!=en[I].isAlly&&T.some(e=>e&&!e.USED)){E=!1;break}}E&&(document.getElementById("useAbility").style.display="none",document.getElementById("weaponThing").style.display="none",document.getElementById("healthBar").style.display="none",document.getElementById("chooseSlot").style.bottom="-200px",tp([...en],3==p.gameMode||4==p.gameMode?15:3))}}}Math.getAngleDist=(e,t)=>{let l=Math.abs(t-e)%(2*Math.PI);return l>Math.PI?2*Math.PI-l:l};var t1=Date.now();class tw{constructor(e,t,l=1){this.x=Math.random()*es.x,this.y=Math.random()*es.y,this.velx=0,this.vely=0,this.name=e.name,this.grayDamage=0,this.displayName=e.displayName,this.inGameSid=eu,eu++,t?(this.isBoss=!0,this.health=this.maxhealth=e.health,e.AOEArea&&(this.AOEArea={dmg:e.AOEArea.dmg,range:e.AOEArea.range,fireRate:e.AOEArea.fireRate,last:0}),e.BLASTWAVE&&(this.BLASTWAVE={range:e.BLASTWAVE.range,dmg:e.BLASTWAVE.dmg,knockback:e.BLASTWAVE.knockback}),this.onKill=e.onKill):(this.reflector=e.reflector,this.dmg=e.dmg*l,this.range=e.range,this.health=this.maxhealth=e.health*l,this.fireRate=e.fireRate),this.speed=e.speed,this.scale=e.scale}}function tk(e){for(let t=0;t<en.length;t++)for(let l=0;l<en[t].robots.length;l++){let i=en[t].robots[l];if(i&&i.inGameSid==e)return en[t]}}function tE(e){return ts.find(t=>t.inGameSid==e)}function tI(e,{amount:t,graydmg:l,onDamageHealBack:i,isDotDamage:a,defensePointsBypass:o,bypassReflector:n,damageTypeName:s},r,$,d){try{if(t=parseInt(ee(t)),!e||e.health<=0&&"purple"!=e.type)return;t<0&&e.isFREEZE&&(t*=2);let p=0;e.builtInDefensePoints&&(p+=e.builtInDefensePoints),e.baseDP&&(p+=e.baseDP),o+1>=1&&p>0&&(p*=o),d&&(p=0);let g=u(p);if(t<0&&(t*=g,e.LASTSTANDISON||e.effects&&(e.effects.find(e=>"phase shift"==e.name)||e.effects.find(e=>"last stand"==e.name)))){t=0;return}if(t>=0&&e.healingMulti&&(t*=e.healingMulti),t<0&&i&&$&&($.grayDamage=Math.max($.grayDamage-.75*Math.abs(t*i),1),tI($,{amount:Math.abs(t*i)},!1,$)),t>=0&&e.effects){let h=1;e.effects.forEach(e=>{"rust"==e.name&&(h-=e.power)}),h=Math.max(.001,h),t*=h}if($&&(!e.turnDmgIntoDOT||a)){null==$.battleStats&&($.battleStats={}),null==$.battleStats.dmg&&($.battleStats.dmg=0);let c=Math.abs(t);if(t<0&&e.health>0){e.health+t<=0?e.health>0&&(damageDone=e.health,$.battleStats.dmg+=e.health,null==$.battleStats.kills&&($.battleStats.kills=0),$.battleStats.kills++,$.onKillDefense&&$.effects.push({name:"defense points",amount:$.onKillDefense,lastTime:5e3}),$.onKillSpeed&&$.effects.unshift({name:"slowdown",power:-$.onKillSpeed,lastTime:5e3})):($.battleStats.dmg+=c,damageDone=c);let m=$.effects.filter(e=>"nuclear amps"==e.name);if(m.length<95&&(null==$.dmgDamageDone&&($.dmgDamageDone=0),$.dmgDamageDone+=Math.abs(t),$.dmgDamageDone-4e4>=0&&$.modules)){let f=$.modules.filter(e=>"Nuclear Amplifier"==e.name);if(m.length+f.length>=95){let b=95-m.length,_=0;f.forEach(e=>{_+=e.selfFixRepair}),tI($,{amount:_},!0,$);for(let v=0;v<b;v++)$.effects.push({name:"nuclear amps",lastTime:1e300})}else for(let w=0;w<f.length;w++)$.effects.push({name:"nuclear amps",lastTime:1e300});$.dmgDamageDone=0}}}if(t<0&&a&&e.dotResistance&&(t*=e.dotResistance),(!e.turnDmgIntoDOT||a)&&t<0&&!e.LASTSTANDISON){var k,E,I;let D,B;k=e,E=t,I=l,D=1,k.modules&&k.modules.length&&k.modules.forEach(e=>{e.grayDamageDecrease&&(D-=e.grayDamageDecrease)}),D=Math.max(D,.05),B=I+1>=1?I:.4,k.effects&&k.effects.find(e=>"stampede"==e.name)?B/=160:"Gold Circle"==k.name?B/=4:k.name&&k.name.includes("Orange Circle")&&(B/=1.6),k.grayDamage+=Math.abs(E*B*D)}if(0!=t){if($&&t<0&&e.reflector&&!n&&tI($,{amount:t/(g||1)*e.reflector,bypassReflector:!0,damageTypeName:"REFLECTOR"},e.isMe,e),e.isMe?e.isMe&&(t>0?eA(e.x,e.y,t,1e3,"#8ecc51"):(!e.turnDmgIntoDOT||a)&&eA(e.x,e.y,t,1e3,"#f00")):$&&$.isMe&&(t<0?a?eA(e.x,e.y,t,1e3,"#ffff00"):(!e.turnDmgIntoDOT||a)&&eA(e.x,e.y,t,1e3,o+1>=1?"#ffff00":"#fff"):eA(e.x,e.y,t,1e3,"#8ecc51")),t<0&&e.effects&&!e.effects.find(e=>"cooldown timer"==e.name&&"Ultimate Green Circle"==e.onDamageHealShield)&&"Ultimate Green Circle"==e.name&&(null==e.damageTokenHAHA&&(e.damageTokenHAHA=0),e.damageTokenHAHA+=Math.abs(t),e.damageTokenHAHA>=9e4&&(e.damageTokenHAHA=0,e.shields.push({type:"purple",health:0,lastTime:3e3}),e.effects.push({name:"cooldown timer",onDamageHealShield:e.name,lastTime:7e3})),setTimeout(()=>{e.damageTokenHAHA=Math.max(0,e.damageTokenHAHA-Math.abs(t))},7e3)),e.turnDmgIntoDOT&&t<0&&$&&!d){let T=e.effects.find(e=>"stampede"==e.name)?7:"Orange Circle"==e.name?15:20;null==e.dotConverter&&(e.dotConverter=[]),e.dotConverter.push({amount:t,doer:$.inGameSid,duration:T})}else{if(t<0&&(e.damagedTime=Date.now()),e.repairAmp&&t<0){let S=e.effects.filter(e=>"repair amp"==e.name).length;if(S<60&&(null==e.HAHAHAHAMoUntDMGMMGMGGM&&(e.HAHAHAHAMoUntDMGMMGMGGM=0),e.HAHAHAHAMoUntDMGMMGMGGM+=Math.abs(t),e.HAHAHAHAMoUntDMGMMGMGGM>=e.repairAmp.require)){e.HAHAHAHAMoUntDMGMMGMGGM=0;let A=e.repairAmp.amount;if(S+A>=60){A=60-S;let M=(5-e.repairAmp.amount)/5;e.grayDamage*=M,e.effects.push({name:"defense points",amount:e.repairAmp.defensePoints,lastTime:1e300})}for(let P=0;P<A;P++)e.effects.push({name:"repair amp",lastTime:1e300})}}e.health+=t}if(e.health<=0&&!e.revive){let L=tk(e.inGameSid),H=tk($.inGameSid);L&&H&&(a?ef(H,{name:"DOT EFFECT",level:1},L):s&&ef(H,{name:s,level:"BLAST EFFECT"==s?1:$.level},L))}}}catch(R){console.log(R)}}function tD(){eB.bosses[eB.bossIndex]?(ts=[],setTimeout(()=>{ts.push(new tw(eB.bosses[eB.bossIndex],!0))},100)):setTimeout(()=>{document.getElementById("useAbility").style.display="none",document.getElementById("weaponThing").style.display="none",document.getElementById("healthBar").style.display="none",document.getElementById("chooseSlot").style.bottom="-200px",tp([...en],"YAY WIN")},50)}function tB(e){let t=tT.types[Math.floor(tT.types.length*Math.random())];ts.length<=100&&ts.push(new tw(t,!1,e))}function t9(e,t,l){if(Math.hypot(e.y-t.y,e.x-t.x)<=e.scale*("shield"==l?1.5:1)+t.scale+("shield"==l?20:0))return!0;let i=Math.hypot(e.lastY-t.y,e.lastX-t.x),a=2*e.x-e.lastX,o=2*e.y-e.lastY,n=Math.hypot(e.y-o,e.x-a);n=i<=n?i:n;let s={x:e.lastX+Math.cos(e.dir)*n,y:e.lastY+Math.sin(e.dir)*n};return Math.hypot(s.y-t.y,s.x-t.x)<=e.scale*("shield"==l?1.5:1.2)+t.scale+("shield"==l?20:0)}var tT={last:0,types:[{name:"Burner Circle",health:5e3,fireRate:500,range:400,dmg:200,scale:45,speed:.0028},{name:"Sniper Circle",health:7500,fireRate:2e3,range:3e3,dmg:75,scale:75,speed:.0014},{name:"Smasher Circle",health:2500,dmg:750,scale:35,speed:.012},{name:"Reflector Circle",health:15e3,scale:300,speed:8e-4,reflector:.05}],waveIndex:-1,last:0};function tS(e,t){let l=1;3==t.tier?l+=.5:4==t.tier&&(l+=1),t.maxhealth>=35e4&&(l+=Math.min(.1*Math.floor((t.maxhealth-35e4)/25e3),2.5));let i=e.dmg*l;return i>0&&e.weaponOwner.name.includes("Divine")&&t.effects&&!t.effects.find(e=>"phase shift"==e.name||"last stand"==e.name)&&(e.owner.maxhealth+=.05*i,e.owner.maxhealth>1e6&&(e.owner.maxhealth=1e6),tI(e.owner,{amount:2*i},e.owner.isMe,e.owner)),i}var t2={},tA={};function t4(e){if(e.color.includes("rgb"))return;let t=t2[e.color];if(!t){let l=function e(t){let l=tA[t.color];if(l||((l=new Image).src=t.color,l.onload=function(){l.isLoaded=!0},tA[t.color]=l),l.isLoaded)return l}(e);if(l){let i=document.createElement("canvas");i.width=i.height=160,i.style.width=i.style.height="160px";let a=i.getContext("2d");a.globalAlpha=1,a.translate(i.width/2,i.height/2),a.drawImage(l,-80,-80,160,160),t2[e.color]=t=i}}return t}var tM=[],tP=0;function tL(e,t,l){let i=en[0].robots[en[0].robotIndex];if(!i||(l.globalAlpha=1,e.invis))return;if(!0!=t){l.save(),l.zIndex=0x6d25b3a30afeb,l.globalAlpha=1,l.textBaseline="middle",l.textAlign="center";let a=E(ee(Math.hypot(e.y-i.y,e.x-i.x)))+" PX";l.fillStyle=["#ffff00","#fff","#ffffff"].includes(e.color)||["Level 3 Boss","Level 4 Boss"].includes(e.name)?"#000":"#fff",l.font=`${Math.min(50,e.scale*(1/3))}px Open Sans`,l.fillText(a,0,0),l.restore()}let o=e.scale+20,n=-(o+4.5),s=1.5*e.scale;if(l.fillStyle=!0==t?"#00f":"#f00",l.roundRect(n,s,2*o+9,20.4,8),l.fill(),l.fillStyle="#808080",l.roundRect(n+4.5+2*o*(1-e.grayDamage/e.maxhealth),s+4.5,2*o*(e.grayDamage/e.maxhealth),20.4-9,8),l.fill(),l.fillStyle="#0f0",l.roundRect(n+4.5,s+4.5,2*o*(e.health/e.maxhealth),20.4-9,8),l.fill(),l.fillStyle="#ffff00",l.roundRect(n+4.5+2*o*(e.health/e.maxhealth)-2*o*(Math.min(e.dotDamage,e.health)/e.maxhealth),s+4.5,2*o*(Math.min(e.dotDamage,e.health)/e.maxhealth),20.4-9,8),l.fill(),e.lastStandThreshold){let r="rgb(0, 0, 0, 0)",$="rgb(0, 0, 0, 0.2)",d=e.effects.find(e=>"last stand"==e.name);l.fillStyle=d?d.LOLOL?$:r:e.usedLastStand?r:$,l.roundRect(n+4.5,s+4.5,2*o*(e.lastStandThreshold*e.maxhealth/e.maxhealth),20.4-9,8),l.fill()}if(e.shields&&e.shields.length){let p=e.shields.filter(e=>e.health||"purple"==e.type);for(let g=0;g<5;g++){let h=p[g],c=e.scale+20,m=-(c+4.5),f=1.5*e.scale+(26.4+26.4*g);h&&(l.fillStyle="#000",l.roundRect(m,f,2*c+9,20.4,8),l.fill(),l.fillStyle="yellow"==h.type?"#ffff00":"purple"==h.type?"#800080":"#02ccaa",l.roundRect(m+4.5,f+4.5,2*c*("purple"==h.type?1:h.health/h.maxhealth),20.4-9,8),l.fill())}}}function tH(e,t,l){let i=en[0].robots[en[0].robotIndex];if(i&&!e.invis){if(!document.getElementById("enemyradar"+t)){let a=document.createElement("div");a.id=`enemyradar${t}`,a.style=`
                display: none;
                position: absolute;
                left: 0;
                top: 0;
                color: ${!0==l?"#00f":"#f00"};
                width: 0;
                height: 0;
                border: solid;
                border-color: transparent transparent transparent ${!0==l?"#00f":"#f00"};
                `,document.body.appendChild(a)}let o=window.innerWidth/2,n=window.innerHeight/2,s=Math.atan2(e.y-i.y,e.x-i.x),r=100*Math.sqrt(Math.pow(0-(i.x-e.x),2)+Math.pow(0-(i.y-e.y)*(16/9),2))/(g.y/2)/n;r>1&&(r=1);let $=o+n*r*Math.cos(s)-10,d=n+n*r*Math.sin(s)-10;document.getElementById("enemyradar"+t).style.borderWidth="10px 0px 10px 20px",document.getElementById("enemyradar"+t).style.pointerEvents="none",document.getElementById("enemyradar"+t).style.left=Math.max(20,Math.min($,window.innerWidth-20))+"px",document.getElementById("enemyradar"+t).style.top=Math.max(20,Math.min(d,window.innerHeight-20))+"px",document.getElementById("enemyradar"+t).style.opacity=r,document.getElementById("enemyradar"+t).style.transform=`rotate(${180*s/Math.PI}deg)`,document.getElementById("enemyradar"+t).style.display="block"}}function tR(e,t){let l=ek.filter(e=>"beacon"==e.name&&(t?e.ALLYPOINTS<5e3:e.ENEMYPOINTS<5e3)).sort((t,l)=>Math.hypot(t.y-e.y,t.x-e.x)-Math.hypot(l.y-e.y,l.x-e.x))[0],i=[];for(let a=0;a<en.length;a++)en[a].isAlly!=t&&en[a].robots[en[a].robotIndex]&&i.push(en[a].robots[en[a].robotIndex]);i.length&&(i=i.sort((t,l)=>Math.hypot(t.y-e.y,t.x-e.x)-Math.hypot(l.y-e.y,l.x-e.x))[0]);let o=null;if(!(o=(3==p.gameMode||4==p.gameMode||!l)&&Math.hypot(i.y-e.y,i.x-e.x)>=i.scale+e.scale+20?i:l&&Math.hypot(l.y-e.y,l.x-e.x)>=400-2*e.scale?l:null))return null;if(3!=e.abilitySpeedMulti&&!e.effects.find(e=>"phase shift"==e.name))for(let n=0;n<ek.length;n++){let s=ek[n];if("coll rect"==s.name){let r=Math.max(s.x,Math.min(e.x,s.x+s.width)),$=Math.max(s.y,Math.min(e.y,s.y+s.height));if(Math.hypot(e.x-r,e.y-$)<=25+e.scale){if(s.middleX){let d=s.y+s.height;if(o.y<=s.y&&e.y>=s.y||o.y>=d&&e.y<=d){if(null!=s.onlyDir)return s.onlyDir;if(o.x>s.middleX)return 0;return Math.PI}}else{let g=s.x+s.width;if(o.x>=s.x&&s.x>=e.x||o.x<=g&&e.x>=g){if(null!=s.onlyDir)return s.onlyDir;if(o.y>s.middleY)return Math.PI/2;return-Math.PI/2}}}}}return Math.atan2(o.y-e.y,o.x-e.x)}function t6(e){for(let t=0;t<en.length;t++){let l=en[t].robots[en[t].robotIndex];if(l){let i=Math.hypot(l.y-e.y,l.x-e.x);if(i<=(e.scale+l.scale)*.75){let a=Math.atan2(l.y-e.y,l.x-e.x)+Math.PI,o=i-(e.scale+l.scale)*.75;o=-1*o/2,e.x+=o*Math.cos(a),e.y+=o*Math.sin(a),l.x-=o*Math.cos(a),l.y-=o*Math.sin(a),p&&(e.velx*=.9,e.vely*=.9)}}}}function tC(e,t,l){if(e.effects&&e.effects.find(e=>"phase shift"==e.name))return!1;let i=Math.max(t.x,Math.min(e.x,t.x+t.width)),a=Math.max(t.y,Math.min(e.y,t.y+t.height));if(Math.hypot(e.x-i,e.y-a)<=e.scale&&!l)return!0;if(!l)return!1;{let o=2*e.x-e.lastX,n=2*e.y-e.lastY,s=Math.hypot(e.y-n,e.x-o),r=Math.max(t.x,Math.min(e.x,t.x+t.width)),$=Math.max(t.y,Math.min(e.y,t.y+t.height));for(let d=1;d<=20;d++){let p=s/20*d;if(Math.hypot(e.y-$,e.x-r)+p<=e.scale+20)return!0}return!!(e.x>=t.x)&&!!(e.x<=t.x+t.width)&&!!(e.y>=t.y)&&!!(e.y<=t.y+t.height)}}function tO(e,t,l){return e+l>=0&&e-l<=g.x&&t+l>=0&&t-l<=g.y}function t5(e,t){"beacon"==e.name&&!e.isHAVEON&&(e.ALLYPOINTS<5e3&&(e.ALLYPOINTS=Math.max(e.ALLYPOINTS-.25*t,0)),e.ENEMYPOINTS<5e3&&(e.ENEMYPOINTS=Math.max(e.ENEMYPOINTS-.25*t,0))),"beacon"==e.name&&(null==e.LASTLAST&&(e.LASTLAST=0),Date.now()-e.LASTLAST>=200&&(e.LASTLAST=Date.now(),e.ENEMYPOINTS>=5e3&&(eE.enemy=Math.min(eE.enemy+1,3500)),e.ALLYPOINTS>=5e3&&(e.LASTALLYPOINTS<5e3&&function e(t,l){for(let i=0;i<en.length;i++){let a=en[i].robots[en[i].robotIndex];a&&en[i].isAlly&&400>=t0(t,a)&&(a.isMe&&O("beacon",1),null==a.battleStats&&(a.battleStats={}),null==a.battleStats.beacons&&(a.battleStats.beacons=0),a.battleStats.beacons++)}}(e,!0),eE.ally=Math.min(eE.ally+1,3500)),e.LASTALLYPOINTS=e.ALLYPOINTS)),e.isHAVEON=!1,"beacon"==e.name&&tN.push(e),e.name.includes("col")||tz.push(e)}CanvasRenderingContext2D.prototype.roundRect=function(e,t,l,i,a){return l<2*a&&(a=l/2),i<2*a&&(a=i/2),a<0&&(a=0),this.beginPath(),this.moveTo(e+a,t),this.arcTo(e+l,t,e+l,t+i,a),this.arcTo(e+l,t+i,e,t+i,a),this.arcTo(e,t+i,e,t,a),this.arcTo(e,t,e+l,t,a),this.closePath(),this};var tN=[],tz=[];function tF(e){if(e>=18)return"000";if(17==e)return"ffa500";if(16==e)return"800080";if(15==e)return"f00";if(14==e)return"ffff00";else if(13==e)return"0f0";return"#f00"}function t7(e){return"MK"+(e-12+1)}var tW={count:0,real:0,last:Date.now()};function tU(e,t,l,i,{lineWidth:a,color:o}){let n=(l.x-t.x)/i,s=(l.y-t.y)/i;e.beginPath(),e.moveTo(t.x-tn.x,t.y-tn.y);for(let r=0;r<i;r++)r%2==0?e.lineTo(t.x+n*(r+1)-tn.x,t.y+s*(r+1)+10-tn.y):e.lineTo(t.x+n*(r+1)-tn.x,t.y+s*(r+1)-10-tn.y);e.strokeStyle=o||"#000",e.lineWidth=a||10,e.stroke()}function tG(){let e=Date.now()-t1;if(t1=Date.now(),tW.count++,Date.now()-tW.last>=1e3&&(tW.last=Date.now(),tW.real=tW.count,tW.count=0),p.gameMode>=0){var t;-1==en[0].robotIndex?(document.getElementById("LMAOLMAOLMAOLMAO").innerHTML="",tn=en[0].oldIndex>=0?{x:en[0].robots[en[0].oldIndex].x-g.x/2,y:en[0].robots[en[0].oldIndex].y-g.y/2}:{x:es.x/2-g.x/2,y:es.y/2-g.y/2}):tn={x:en[0].robots[en[0].robotIndex].x-g.x/2,y:en[0].robots[en[0].robotIndex].y-g.y/2},function e(){if(cam=-1==en[0].robotIndex?{x:es.x/2,y:es.y/2}:{x:en[0].robots[en[0].robotIndex].x,y:en[0].robots[en[0].robotIndex].y},n.fillStyle=1==p.mapID?"#a3a3a3":"#00ff00",n.fillRect(0,0,g.x,g.y),n.fillStyle="#000",n.globalAlpha=.18,tn.x<=0&&n.fillRect(0,0,-tn.x,g.y),es.x-tn.x<=g.x){var t=Math.max(0,-tn.y);n.fillRect(es.x-tn.x,t,g.x-(es.x-tn.x),g.y-t)}if(tn.y<=0&&n.fillRect(-tn.x,0,g.x+tn.x,-tn.y),es.y-tn.y<=g.y){var l=Math.max(0,-tn.x),i=0;es.x-tn.x<=g.x&&(i=g.x-(es.x-tn.x)),n.fillRect(l,es.y-tn.y,g.x-l-i,g.y-(es.y-tn.y))}}(n),function e(t){tN=[],tz=[],document.getElementById("gameDataThing").style.left=`${window.innerWidth/2-100}px`,document.getElementById("gameDataThing").innerHTML="",n.globalAlpha=1;for(let l=0;l<ek.length;l++){let i=ek[l];if(i&&"coll rect"!=i.name){if(n.save(),n.translate(i.x-tn.x,i.y-tn.y),"beacon"==i.name){null==i.ALLYPOINTS&&(i.ALLYPOINTS=0),null==i.ENEMYPOINTS&&(i.ENEMYPOINTS=0);let a=i.ENEMYPOINTS>=5e3?"#f00":i.ALLYPOINTS>=5e3?"#00f":"#fff";S(0,0,35,n,!1,!1,"#808080","#000"),S(0,0,20,n,!0,!1,a,"#000");let o=i.ENEMYPOINTS>=5e3?"rgb(255, 0, 0":i.ALLYPOINTS>=5e3?"rgb(0, 0, 255":"rgb(255, 255, 255";S(0,0,400,n,!1,!0,null,o+", 0.55)",14),n.lineWidth=14;let s=1;i.ENEMYPOINTS>i.ALLYPOINTS?(o="rgb(255, 0, 0",s=i.ENEMYPOINTS/5e3):(o="rgb(0, 0, 255",s=i.ALLYPOINTS/5e3),n.strokeStyle=o+", 0.55)",n.beginPath(),n.arc(0,0,400,0,2*Math.PI*s),n.stroke(),n.translate(0,35),n.fillStyle=a,T(n,1.5,15,15),n.fill(),n.translate(0,-70),n.rotate(Math.PI),n.fillStyle=a,T(n,1.5,15,15),n.fill(),n.save(),n.translate(35,-35),n.rotate(-Math.PI+1.57),n.fillStyle=a,T(n,1.5,15,15),n.fill(),n.restore(),n.save(),n.translate(-35,-35),n.rotate(-Math.PI-1.57),n.fillStyle=a,T(n,1.5,15,15),n.fill(),n.restore()}else"wall rect"==i.name?(n.fillStyle="#808080",n.fillRect(0,0,i.width,i.height),n.fillStyle="#969595",n.fillRect(20,20,i.width-40,i.height-40)):(n.fillStyle="#1ca3ec",n.fillRect(0,0,i.width,i.height));n.restore()}t5(i,t)}}(e),function e(){n.globalAlpha=1;for(let t=0;t<tr.length;t++){let l=tr[t];if(l&&(!(tr.length>250)||(tr.length>1e3?t%10==0:t%3==0))&&tO(l.x-tn.x,l.y-tn.y,l.scale)){n.save(),n.translate(l.x-tn.x,l.y-tn.y);let i=t4(l);i?(n.rotate(l.dir),n.drawImage(i,-20,-20,40,40)):S(0,0,l.scale,n,!1,!1,l.color.includes("#")||l.color.includes("rgb")?l.color:"#808080","#000",1),n.restore()}}}(n),function e(t){let l=en.find(e=>"player"==e.name),i={};if(l.robotIndex>=0){let a=l.robots[l.robotIndex];if(a.dir=Math.atan2(d-innerHeight/2,$-innerWidth/2),a.health>0){n.save(),n.globalAlpha=1,n.translate(a.x-tn.x,a.y-tn.y);for(let o=0;o<a.weapons.length;o++){let s=a.weapons[o];i[s.name]||(i[s.name]=s.range)}let r=[];for(let p in i)"Cinder"!=p&&r.push({name:p,range:i[p]});r.sort((e,t)=>t.range-e.range);for(let g=0;g<r.length;g++){let h=r[g].range,c=h*Math.cos(a.dir),m=h*Math.sin(a.dir);n.save(),n.globalAlpha=.2,n.lineWidth=10,n.strokeStyle="#f00",n.beginPath(),n.moveTo(0,0),n.lineTo(c,m),n.stroke(),n.restore()}let f=a.weapons.find(e=>"Cinder"==e.name);if(f&&S(0,0,f.range,n,!1,!0,"rgb(255, 0, 0, 0.3)","rgb(255, 0, 0, 0.6)"),null==a.globalAlpha&&(a.globalAlpha=1),a.invis?a.globalAlpha=Math.max(a.globalAlpha-.005*t,.025):a.effects.find(e=>"phase shift"==e.name)?a.globalAlpha=Math.max(a.globalAlpha-.0025*t,.4):a.globalAlpha=Math.min(a.globalAlpha+.0025*t,1),n.globalAlpha=a.globalAlpha,a.specialOf){let u=U(a);u.isLoaded&&(n.rotate(a.dir+Math.PI),n.drawImage(u,-125,-125,250,250))}else a.reflector&&(n.rotate(360*Math.random()),n.strokeStyle="#fff",n.lineWidth=12,T(n,5,a.scale+10,a.scale+10),n.stroke(),n.rotate(360*Math.random()),n.strokeStyle="#00f",n.lineWidth=12,T(n,4,a.scale+5,a.scale+5),n.stroke()),a.name.includes("Circle")?(S(0,0,a.scale,n,!1,!1,Date.now()-a.damagedTime<=20?"#fff":a.color,a.isFREEZE?"#fff":a.borderColor||"#000",a.borderColor?12:void 0),"Ultimate Green Circle"==a.name&&S(0,0,600,n,!1,!0,"#fff","#06a600",20)):a.name.includes("Pentagon")?(n.rotate(a.dir+Math.PI/2),n.strokeStyle=a.isFREEZE?"#fff":a.borderColor||"#000",n.lineWidth=12,n.fillStyle=a.color,T(n,2.5,a.scale,a.scale),n.stroke(),n.fill()):a.name.includes("Hexagon")?(n.rotate(a.dir+Math.PI/2),n.strokeStyle=a.isFREEZE?"#fff":"#000",n.lineWidth=12,n.fillStyle=a.color,T(n,3,a.scale,a.scale),n.stroke(),n.fill()):a.name.includes("Heptagon")&&(n.rotate(a.dir+Math.PI/2),n.strokeStyle=a.isFREEZE?"#fff":"#000",n.lineWidth=12,n.fillStyle=a.color,T(n,3.5,a.scale,a.scale),n.stroke(),n.fill());n.restore()}}}(e),function e(){for(let t=1;t<en.length;t++){let l=en[t];if(l.robotIndex>=0){let i=l.robots[l.robotIndex];if(tO(i.x-tn.x,i.y-tn.y,i.scale)){if(n.save(),n.translate(i.x-tn.x,i.y-tn.y),i.invis||i.effects.find(e=>"phase shift"==e.name)||(n.globalAlpha=1,n.fillStyle=!0==en[t].isAlly?"#00f":"#f00",n.font="34px Open Sans",n.textBaseline="middle",n.textAlign="center",n.fillText(en[t].name,0,-(i.scale+20))),n.globalAlpha=i.invis?.025:i.effects.find(e=>"phase shift"==e.name)?.4:1,i.specialOf){let a=U(i);a.isLoaded&&(n.rotate(i.dir),n.drawImage(a,-125,-125,250,250))}else i.reflector&&(n.save(),n.rotate(360*Math.random()),n.strokeStyle="#fff",n.lineWidth=12,T(n,5,i.scale+10,i.scale+10),n.stroke(),n.rotate(360*Math.random()),n.strokeStyle="#00f",n.lineWidth=12,T(n,4,i.scale+5,i.scale+5),n.stroke(),n.restore()),i.name.includes("Circle")?S(0,0,i.scale,n,!1,!1,Date.now()-i.damagedTime<=20?"#fff":i.color,i.isFREEZE?"#fff":i.borderColor||"#000"):i.name.includes("Pentagon")?(n.rotate(i.dir+Math.PI/2),n.strokeStyle=i.isFREEZE?"#fff":i.borderColor||"#000",n.lineWidth=12,n.fillStyle=i.color,T(n,2.5,i.scale,i.scale),n.stroke(),n.fill(),n.rotate(-(i.dir+Math.PI/2)||0)):i.name.includes("Hexagon")?(n.rotate(i.dir+Math.PI/2),n.strokeStyle=i.isFREEZE?"#fff":"#000",n.lineWidth=12,n.fillStyle=i.color,T(n,3,i.scale,i.scale),n.stroke(),n.fill(),n.rotate(-(i.dir+Math.PI/2)||0)):i.name.includes("Heptagon")&&(n.rotate(i.dir+Math.PI/2),n.strokeStyle=i.isFREEZE?"#fff":"#000",n.lineWidth=12,n.fillStyle=i.color,T(n,3.5,i.scale,i.scale),n.stroke(),n.fill(),n.rotate(-(i.dir+Math.PI/2)||0));tL(i,l.isAlly,n),n.restore()}}}}(e),function e(){n.globalAlpha=1;for(let t=0;t<250;t++){let l=ts[t];l&&(n.save(),n.translate(l.x-tn.x,l.y-tn.y),l.displayName&&(n.globalAlpha=1,n.fillStyle="#f00",n.font="40px Open Sans",n.textBaseline="middle",n.textAlign="center",n.fillText(l.displayName,0,-(l.scale+35))),l.name.includes("Boss")||S(0,0,l.scale,n,!1,!1,Date.now()-l.damagedTime<=20?"#fff":"Burner Circle"==l.name?"#f00":"Smasher Circle"==l.name?"#ffff00":"#808080",l.isFREEZE?"#fff":"#000"),"Burner Circle"==l.name?(n.globalAlpha=.6,S(0,0,l.range,n,!1,!0,"#f00","#f00",17)):"Level 1 Boss"==l.name||"Level 2 Boss"==l.name?(n.globalAlpha=.2,S(0,0,l.AOEArea.range,n,!0,!1,"#f00"),S(0,0,l.BLASTWAVE.range,n,!0,!1,"#f00"),n.globalAlpha=1,S(0,0,l.scale,n,!1,!1,Date.now()-l.damagedTime<=20?"#fff":"#808080",l.isFREEZE?"#fff":"#000")):"Level 3 Boss"==l.name||"Level 4 Boss"==l.name?(n.globalAlpha=.2,S(0,0,l.AOEArea.range,n,!0,!1,"#f00"),n.globalAlpha=1,S(0,0,l.scale,n,!1,!1,Date.now()-l.damagedTime<=20?"#fff":"#ffff00",l.isFREEZE?"#fff":"#000")):"Level 10 Boss"==l.name?(n.rotate(l.dir+Math.PI/2),n.fillStyle=Date.now()-l.damagedTime<=20?"#fff":"#808080",n.strokeStyle=l.isFREEZE?"#fff":"#000",n.lineWidth=25,T(n,3.5,l.scale,l.scale),n.fill(),n.stroke(),n.rotate(-(l.dir+Math.PI/2))):l.name.includes("Boss")&&S(0,0,l.scale,n,!1,!1,Date.now()-l.damagedTime<=20?"#fff":"Level 7 Boss"==l.name||"Level 8 Boss"==l.name?"#0f0":"#f00",l.isFREEZE?"#fff":"#000"),l.reflector&&(n.save(),n.rotate(360*Math.random()),n.strokeStyle="#fff",n.lineWidth=12,T(n,5,l.scale+10,l.scale+10),n.stroke(),n.rotate(360*Math.random()),n.strokeStyle="#00f",n.lineWidth=12,T(n,4,l.scale+5,l.scale+5),n.stroke(),n.restore()),tL(l,!1,n),n.restore())}}(n),n.globalAlpha=1;for(let l=0;l<tM.length;l++){let i=tM[l];if(i){i.scale+=(i.blastttt?4:i.color?"stamp"==i.color?1.5:3.84:i.doFaster||500==i.maxScale?1.2:.32)*e;let a=i.color?"blue"==i.color?"rgb(0, 0, 255, 0.3)":"stamp"==i.color?"rgb(0, 0, 255, 0)":"rgb(255, 255, 255, 0.3)":"rgb(255, 0, 0, 0.3)",o=i.color?"stamp"==i.color||"blue"==i.color?"rgb(0, 0, 255, 0.6)":"rgb(255, 255, 255, 0.6)":"rgb(255, 0, 0, 0.6)";n.save(),n.translate((i.location?i.location.x:i.x)-tn.x,(i.location?i.location.y:i.y)-tn.y),S(0,0,i.scale,n,!1,!1,a,o,"stamp"==i.color?12:void 0),n.restore(),i.scale>=i.maxScale&&tM.splice(l,1)}}n.textBaseline="middle",n.textAlign="center";for(let s=0;s<eS.length;s++){let h=eS[s];h&&tO(h.x-tn.x,h.y-tn.y,50)&&(n.fillStyle=h.color,n.font="50px Open Sans",n.fillText(E(ee(h.value)),h.x-tn.x,h.y-tn.y))}let c;t=e,(c=en[0]).robotIndex>=0&&t3(c.robots[c.robotIndex],!0,t),tf()&&function e(t){for(let l=1;l<en.length;l++){let i=en[l].robots[en[l].robotIndex];i?(t6(i),tH(i,l,en[l].isAlly),t3(i,en[l].isAlly,t,l)):document.getElementById("enemyradar"+l)&&(document.getElementById("enemyradar"+l).style.display="none")}}(e),n.globalAlpha=1,function e(){for(let t=0;t<en.length;t++){let l=en[t].robots[en[t].robotIndex];if(l&&!l.isFREEZE&&(l.isMe?e$[32]:l.fireWeapon)){let i=!1;l.weapons.forEach(e=>{if(e.canFire||e.continuousReload&&e.ammo>0){if(["Eagle","Hawk"].includes(e.name)){let a=[];if(tf())for(let o=0;o<en.length;o++){let s=en[o].robots[en[o].robotIndex];s&&en[t].isAlly!=en[o].isAlly&&Math.hypot(l.y-s.y,l.x-s.x)<=e.range+l.scale&&a.push(s)}else a=ts.filter(t=>Math.hypot(t.y-l.y,t.x-l.x)<=e.range+t.scale);if(a.length){a=a.sort((e,t)=>t0(e,l)-t0(t,l)),n.save(),n.lineWidth=16,n.strokeStyle=en[t].isAlly?"#fff":"rgb(255, 0, 0)",n.beginPath();for(let r=0;r<3;r++){let $=a[r],d=a[r-1];$&&(0==r?(n.moveTo(l.x-tn.x,l.y-tn.y),n.lineTo($.x-tn.x,$.y-tn.y)):(n.moveTo(d.x-tn.x,d.y-tn.y),n.lineTo($.x-tn.x,$.y-tn.y)))}n.stroke(),n.restore()}}else if(["Pantagruel","Gangantua"].includes(e.name)&&!i){i=!0;let p=[],g=l.dir;if(tf())for(let h=0;h<en.length;h++){let c=en[h].robots[en[h].robotIndex];c&&en[h].isAlly!=en[t].isAlly&&.72>=Math.getAngleDist(g,Math.atan2(c.y-l.y,c.x-l.x))&&t0(l,c)<=e.range+c.scale&&p.push(c)}else for(let m=0;m<ts.length;m++){let f=ts[m];f&&.72>=Math.getAngleDist(g,Math.atan2(f.y-l.y,f.x-l.x))&&t0(f,l)<=e.range+f.scale&&p.push(f)}p.forEach(e=>{let i={x:e.x,y:e.y};if(e.shields)for(let a=0;a<e.shields.length;a++){let o=e.shields[a];if(o&&(o.health>0||"purple"==o.type)){let s=Math.atan2(e.y-l.y,e.x-l.x);i={x:l.x+Math.cos(s)*(t0(e,l)-(e.scale+20)),y:l.y+Math.sin(s)*(t0(e,l)-(e.scale+20))};break}}n.save(),n.lineWidth=16,n.strokeStyle=!0==en[t].isAlly?"rgb(0, 150, 0, .6)":"rgb(255, 165, 0, .6)",n.beginPath(),n.moveTo(l.x-tn.x,l.y-tn.y),n.lineTo(i.x-tn.x,i.y-tn.y),n.stroke(),n.restore()})}}})}}}(e),2==p.gameMode&&function e(){document.getElementById("gameDataThing").innerHTML=`
        <div style="position: absolute; border-radius: 12px; top: 0px; right: 0px; height: 12px; width: 100%; background-color: #fff; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: 0px; height: 100%; width: ${eE.ally/3500*50}%; background-color: #00f;">
        </div>
        <div style="position: absolute; right: 0px; top: 0px; height: 100%; width: ${eE.enemy/3500*50}%; background-color: #f00;">
        </div>
        </div>
        `;let t=0;for(let l=0;l<tN.length;l++){let i=tN[l],a="#fff",o=1,n="#000";i.ENEMYPOINTS>i.ALLYPOINTS?(a="#f00",o=i.ENEMYPOINTS/5e3):(a="#00f",(o=i.ALLYPOINTS/5e3)>.5&&(n="#fff")),document.getElementById("gameDataThing").innerHTML+=`
            <div style="position: absolute; top: 16px; left: ${40*t+2}px; border-radius: 100%; width: 35px; height: 35px; background-color: #fff; overflow: hidden;">
            <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: ${100*o}%; background-color: ${a};">
            </div>
            <div style="position: absolute; height: 100%; width: 100%; top: 0px; left: 0px; color: ${n};">
            <div style="height: 100%; width: 100%; text-align: center; font-size: 24px;">${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[t]}</div>
            </div>
            </div>
            `,t++}eE.enemy>=3500?(eE.enemy=0,eE.ally=0,document.getElementById("useAbility").style.display="none",document.getElementById("weaponThing").style.display="none",document.getElementById("healthBar").style.display="none",document.getElementById("chooseSlot").style.bottom="-200px",tp([...en],.5)):eE.ally>=3500&&(eE.enemy=0,eE.ally=0,document.getElementById("useAbility").style.display="none",document.getElementById("weaponThing").style.display="none",document.getElementById("healthBar").style.display="none",document.getElementById("chooseSlot").style.bottom="-200px",tp([...en],3))}(e),function e(t){for(let l=0;l<tr.length;l++){let i=tr[l];if(i){let a=!i.avoidBuildings&&ek.find(e=>"wall rect"==e.name&&tC(i,e,!0));if(a||i.kill||Math.hypot(i.oldY-i.y,i.oldX-i.x)>=i.range){if(i.aoeRange&&(a||Math.hypot(i.oldY-i.y,i.oldX-i.x)>=i.range)){if(tf()){for(let o=0;o<en.length;o++){let n=en[o].robots[en[o].robotIndex];n&&en[o].isAlly!=i.isAlly&&Math.hypot(i.y-n.y,i.x-n.x)<=i.aoeRange+n.scale&&tI(n,{amount:-i.dmg},i.owner.isMe,i.owner)}tM.push({x:i.x,y:i.y,scale:0,color:i.weaponOwner&&i.weaponOwner.cold?"white":"",maxScale:i.aoeRange})}else{let s=ts.filter(e=>Math.hypot(i.y-e.y,i.x-e.x)<=i.aoeRange+e.scale);for(let r=0;r<s.length;r++)s[l]&&tI(s[l],{amount:-i.dmg},!0,i.owner);tM.push({x:i.x,y:i.y,scale:0,color:i.weaponOwner&&i.weaponOwner.cold?"white":"",maxScale:i.aoeRange})}}tr.splice(l,1)}else i.velx=Math.cos(i.dir)*(i.speed*t),i.vely=Math.sin(i.dir)*(i.speed*t),i.freeze&&(i.velx=i.vely=0,i.freeze=!1),i.lastX=i.x,i.lastY=i.y,i.x+=i.velx*t,i.y+=i.vely*t,(isNaN(i.dir)||isNaN(i.x)||isNaN(i.y)||isNaN(i.velx)||isNaN(i.vely))&&(i.kill=!0)}}}(e);for(let m=0;m<eS.length;m++){let f=eS[m];f&&(f.life-=e,f.x+=2*Math.cos(f.dir),f.y+=2*Math.sin(f.dir),f.life<=0&&eS.splice(m,1))}for(let u=0;u<th.length;u++){let b=th[u];b&&(null==b.last&&(b.last=Date.now()),n.save(),n.translate(b.location.x-tn.x,b.location.y-tn.y),n.rotate(b.dir-Math.PI/8),n.lineWidth=12,n.strokeStyle="energy"==b.type?"#0000ff":"purple"==b.type?"#800080":"#ffff00",n.beginPath(),n.arc(0,0,b.scale,0,Math.PI/4),n.stroke(),n.restore(),Date.now()-b.last>=100&&th.splice(u,1))}(0==p.gameMode||1==p.gameMode)&&function e(t){let l=en[0].robots[en[0].robotIndex];if(0==p.gameMode&&l&&(0==ts.length||Date.now()-tT.last>=7500)){tT.last=Date.now(),tT.waveIndex++;for(let i=0;i<25;i++)tB(1+tT.waveIndex/5)}for(let a=0;a<ts.length;a++){let o=ts[a];if(o&&l){null==o.effects&&(o.effects=[]),o.isFREEZE=!!o.freeze,o.freeze=!1;let n=1,s=0,r=0;o.dotDamage=0;for(let $=0;$<o.effects.length;$++){let d=o.effects[$];d&&(null==d.oldLastTime&&(d.oldLastTime=d.lastTime),d.lastTime-=t,d.lastTime>0&&("cold pulse"==d.name?(null==d.dmgOverTime&&(d.dmgOverTime=0),o.isFREEZE=!0,d.dmgOverTime-=t,d.dmgOverTime<=0&&(tI(o,{amount:-50,damageTypeName:"FREEZE EFFECT"},!1,l),d.dmgOverTime=500)):"dot"==d.name?(o.dotDamage+=Math.floor(d.lastTime/1e3)*d.dmg*(o.dotResistance?o.dotResistance:1),null==d.dmgOverTime&&(d.dmgOverTime=0),d.dmgOverTime-=t,d.dmgOverTime<=0&&(tI(o,{amount:-d.dmg,isDotDamage:!0},!1,l,!0),d.dmgOverTime=1e3)):"slowdown"==d.name?n-=d.power:"freezing"==d.name?s++:"blast"==d.name&&r++),d.lastTime<=0&&o.effects.splice($,1))}if(r>=D.blast){let g=0;for(let h=0;h<o.effects.length;h++){let c=o.effects[h];if(c&&"blast"==c.name&&(c.lastTime=0,++g>=D.blast))break}ts.filter(e=>Math.hypot(e.y-o.y,e.x-o.x)<=300+e.scale).forEach(e=>{tI(e,{amount:-25e3,graydmg:0,damageTypeName:"BLAST EFFECT"},!0,l)}),tM.push({location:o,doFaster:!0,scale:0,maxScale:300})}if(s>=D.freeze){o.effects.push({name:"cold pulse",owner:l,neg:!0,lastTime:1e3});for(let m=0;m<o.effects.length;m++){let f=o.effects[m];f&&"freezing"==f.name&&(f.lastTime=0)}}n=Math.max(n,.01);let u=o.speed*(o.isFREEZE?0:1)*n;if(!o.isFREEZE&&!l.invis){if("Burner Circle"==o.name)Math.hypot(o.y-l.y,o.x-l.x)>=o.range?(o.velx+=Math.cos(Math.atan2(l.y-o.y,l.x-o.x))*(u*t),o.vely+=Math.sin(Math.atan2(l.y-o.y,l.x-o.x))*(u*t)):(null==o.lastFire&&(o.lastFire=0),Date.now()-o.lastFire>=o.fireRate&&(o.lastFire=Date.now(),tI(l,{amount:-o.dmg},!1,o)));else if("Reflector Circle"==o.name)Math.hypot(o.y-l.y,o.x-l.x)>=400?(o.velx+=Math.cos(Math.atan2(l.y-o.y,l.x-o.x))*(u*t),o.vely+=Math.sin(Math.atan2(l.y-o.y,l.x-o.x))*(u*t)):(o.velx+=Math.cos(Math.atan2(l.y-o.y,l.x-o.x)+Math.PI)*(u*t),o.vely+=Math.sin(Math.atan2(l.y-o.y,l.x-o.x)+Math.PI)*(u*t));else if("Sniper Circle"==o.name)Math.hypot(o.y-l.y,o.x-l.x)>=1e3?(o.velx+=Math.cos(Math.atan2(l.y-o.y,l.x-o.x))*(u*t),o.vely+=Math.sin(Math.atan2(l.y-o.y,l.x-o.x))*(u*t)):(o.velx+=Math.cos(Math.atan2(l.y-o.y,l.x-o.x)+Math.PI)*(u*t),o.vely+=Math.sin(Math.atan2(l.y-o.y,l.x-o.x)+Math.PI)*(u*t)),null==o.lastFire&&(o.lastFire=0),Date.now()-o.lastFire>=o.fireRate&&(o.lastFire=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:o.dmg,range:o.range,dir:Math.atan2(l.y-o.y,l.x-o.x),color:"#808080",owner:o}));else if("Smasher Circle"==o.name)Math.hypot(o.y-l.y,o.x-l.x)<=o.scale+l.scale?(tI(l,{amount:-o.dmg},!1,o),tM.push({x:o.x,y:o.y,scale:0,maxScale:2*o.scale}),o.health=0):(o.velx+=Math.cos(Math.atan2(l.y-o.y,l.x-o.x))*(u*t),o.vely+=Math.sin(Math.atan2(l.y-o.y,l.x-o.x))*(u*t));else if("Level 1 Boss"==o.name||"Level 2 Boss"==o.name){let b=Math.atan2(l.y-o.y,l.x-o.x),_=o.health/o.maxhealth*100;o.velx+=Math.cos(b+(_<=10?Math.PI:0))*(u*t),o.vely+=Math.sin(b+(_<=10?Math.PI:0))*(u*t),Math.hypot(o.y-l.y,o.x-l.x)<=o.BLASTWAVE.range&&(tI(l,{amount:-o.BLASTWAVE.dmg},!1,o),l.velx+=Math.cos(b)*o.BLASTWAVE.knockback,l.vely+=Math.sin(b)*o.BLASTWAVE.knockback),Date.now()-o.AOEArea.last>=o.AOEArea.fireRate&&Math.hypot(o.y-l.y,o.x-l.x)<=o.AOEArea.range&&(tI(l,{amount:-o.AOEArea.dmg},!1,o),o.AOEArea.last=Date.now()),"Level 1 Boss"==o.name&&_<=10&&(o.x+o.velx*t>=o.scale&&o.x+o.velx*t<=es.x-o.scale||(tI(o,{amount:.05*o.maxhealth},!1,o),o.x=Math.random()*es.x,o.y=Math.random()*es.y),o.y+o.vely*t>=o.scale&&o.y+o.vely*t<=es.y-o.scale||(tI(o,{amount:.05*o.maxhealth},!1,o),o.x=Math.random()*es.x,o.y=Math.random()*es.y))}else if("Level 3 Boss"==o.name||"Level 10 Boss"==o.name){let v=Math.atan2(l.y-o.y,l.x-o.x),w=Math.hypot(l.y-o.y,l.x-o.x);if(o.velx+=Math.cos(v+(w>=550?0:Math.PI))*(u*t),o.vely+=Math.sin(v+(w>=550?0:Math.PI))*(u*t),"Level 3 Boss"==o.name&&Date.now()-o.AOEArea.last>=o.AOEArea.fireRate&&Math.hypot(o.y-l.y,o.x-l.x)<=o.AOEArea.range&&(tI(l,{amount:-o.AOEArea.dmg},!1,o),o.AOEArea.last=Date.now()),null==o.lastHeal&&(o.lastHeal=0),"Level 3 Boss"==o.name&&Date.now()-o.lastHeal>=5e3&&(o.lastHeal=Date.now(),tI(o,{amount:.05*o.maxhealth},!1,o)),Math.hypot(o.y-l.y,o.x-l.x)<=o.scale+l.scale&&(tI(l,{amount:-("Level 3 Boss"==o.name?1e4:5e5)},!1,o),l.velx+=Math.cos(v)*("Level 3 Boss"==o.name?12:4),l.vely+=Math.sin(v)*("Level 3 Boss"==o.name?12:4)),null==o.lastFire&&(o.lastFire=0),Date.now()-o.lastFire>=50){o.lastFire=Date.now();let k="Level 10 Boss"==o.name?240:300;"Level 10 Boss"==o.name&&(k*=Math.max((1-o.health/o.maxhealth)*6,1)),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:k,range:3200+o.scale,dir:v+(.5>Math.random()?-1:1)*t$(5),color:"./images/bullets/bullet.png",owner:o});let E=0,I=0;for(let B=0;B<4;B++)0==B?(E=o.x+Math.cos(v+1.57)*(o.scale-7.5),I=o.y+Math.sin(v+1.57)*(o.scale-7.5)):1==B?(E=o.x+Math.cos(v+.39)*(o.scale-7.5),I=o.y+Math.sin(v+.39)*(o.scale-7.5)):2==B?(E=o.x+Math.cos(v-.39)*(o.scale-7.5),I=o.y+Math.sin(v-.39)*(o.scale-7.5)):(E=o.x+Math.cos(v-1.57)*(o.scale-7.5),I=o.y+Math.sin(v-1.57)*(o.scale-7.5)),tr.push({x:E,y:I,oldX:E,oldY:I,velx:0,vely:0,scale:20,speed:.3,dmg:k,range:3200+o.scale,dir:Math.atan2(l.y-I,l.x-E)+(.5>Math.random()?-1:1)*t$(5),color:"./images/bullets/bullet.png",owner:o})}if("Level 10 Boss"==o.name){if(o.dir=Math.atan2(l.y-o.y,l.x-o.x),null==o.lastFire2&&(o.lastFire2=0),Date.now()-o.lastFire2>=5e3&&(o.lastFire2=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,projType:"energy",vely:0,scale:30,speed:.15,dmg:15e3,range:4e3,dir:Math.atan2(l.y-o.y,l.x-o.x),isAlly:!1,color:"./images/bullets/red_bullet.png",owner:o,blastEffect:{name:"blast",last:5e3,power:1e3},aoeRange:500})),null==o.lastFire3&&(o.lastFire3=0),Date.now()-o.lastFire3>=1e4){o.lastFire3=Date.now();for(let T=0;T<6;T++)tB(10)}null==o.lastFire5&&(o.lastFire5=0),Date.now()-o.lastFire5>=15e3&&(o.lastFire5=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,projType:"energy",vely:0,scale:30,speed:.15,dmg:15e3,range:4e3,dir:Math.atan2(l.y-o.y,l.x-o.x),isAlly:!1,owner:o,color:"./images/bullets/red_bullet.png",slowEffect:{name:"slowdown",last:1e4,power:1}}))}}else if("Level 4 Boss"==o.name){let S=Math.atan2(l.y-o.y,l.x-o.x),A=Math.hypot(l.y-o.y,l.x-o.x);o.velx+=Math.cos(S+(A>=550?0:Math.PI))*(u*t),o.vely+=Math.sin(S+(A>=550?0:Math.PI))*(u*t),Date.now()-o.AOEArea.last>=o.AOEArea.fireRate&&Math.hypot(o.y-l.y,o.x-l.x)<=o.AOEArea.range&&(tI(l,{amount:-o.AOEArea.dmg},!1,o),o.AOEArea.last=Date.now()),Math.hypot(o.y-l.y,o.x-l.x)<=o.scale+l.scale&&(tI(l,{amount:-5e4},!1,o),l.velx+=12*Math.cos(S),l.vely+=12*Math.sin(S)),null==o.lastFire&&(o.lastFire=0),Date.now()-o.lastFire>=75&&(o.lastFire=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:2500,range:3200+o.scale,dir:S,color:"./images/bullets/bullet.png",owner:o}))}else if("Level 5 Boss"==o.name||"Level 6 Boss"==o.name){es={x:7500,y:7500};let M=o.health/o.maxhealth*100,P=Math.atan2(l.y-o.y,l.x-o.x),L=Math.hypot(l.y-o.y,l.x-o.x);if(o.velx+=Math.cos(P+(L>=700?0:Math.PI))*(u*t),o.vely+=Math.sin(P+(L>=700?0:Math.PI))*(u*t),null==o.lastFire&&(o.lastFire=0),"Level 6 Boss"==o.name){if(Date.now()-o.lastFire>=50){o.lastFire=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:300,range:3200+o.scale,dir:P+(.5>Math.random()?-1:1)*t$(5),color:"./images/bullets/bullet.png",owner:o});let H=0,R=0;for(let C=0;C<4;C++)0==C?(H=o.x+Math.cos(P+1.57)*(o.scale-7.5),R=o.y+Math.sin(P+1.57)*(o.scale-7.5)):1==C?(H=o.x+Math.cos(P+.39)*(o.scale-7.5),R=o.y+Math.sin(P+.39)*(o.scale-7.5)):2==C?(H=o.x+Math.cos(P-.39)*(o.scale-7.5),R=o.y+Math.sin(P-.39)*(o.scale-7.5)):(H=o.x+Math.cos(P-1.57)*(o.scale-7.5),R=o.y+Math.sin(P-1.57)*(o.scale-7.5)),tr.push({x:H,y:R,oldX:H,oldY:R,velx:0,vely:0,scale:20,speed:.3,dmg:300,range:3200+o.scale,dir:Math.atan2(l.y-R,l.x-H)+(.5>Math.random()?-1:1)*t$(5),color:"./images/bullets/bullet.png",owner:o})}}else Date.now()-o.lastFire>=500&&(o.lastFire=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:5e3,range:3200+o.scale,dir:P,color:"./images/bullets/bullet.png",owner:o}));if(null==o.lastSpawnEnemy&&(o.lastSpawnEnemy=0),Date.now()-o.lastSpawnEnemy>=(M<=10?500:2500)){o.lastSpawnEnemy=Date.now();for(let N=0;N<(M<=10?30:15);N++)tB(12)}}else if("Level 7 Boss"==o.name||"Level 8 Boss"==o.name){let z=Math.atan2(l.y-o.y,l.x-o.x),F=Math.hypot(l.y-o.y,l.x-o.x);o.velx+=Math.cos(z+(F>=700?0:Math.PI))*(u*t),o.vely+=Math.sin(z+(F>=700?0:Math.PI))*(u*t),null==o.lastFire&&(o.lastFire=0),Date.now()-o.lastFire>=75&&(o.lastFire=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:8e3,range:9200+o.scale,dir:z,dotEffect:{name:"dot",last:2e4,dmg:"Level 8 Boss"==o.name?750:500,owner:o},color:"./images/bullets/dot_bullet.png",owner:o})),null==o.lastFir2e&&(o.lastFir2e=0),Date.now()-o.lastFir2e>=15e3&&F<=1200&&(o.lastFir2e=Date.now(),tM.push({x:o.x,y:o.y,scale:0,maxScale:1200,color:"white"}),l.effects.push({name:"cold pulse",owner:o,neg:!0,lastTime:"Level 8 Boss"==o.name?7e3:6e3}))}else if("Level 9 Boss"==o.name){es={x:5e3,y:5e3};let W=Math.atan2(l.y-o.y,l.x-o.x);o.velx+=Math.cos(W)*(u*t),o.vely+=Math.sin(W)*(u*t),Math.hypot(o.y-l.y,o.x-l.x)<=l.scale+o.scale&&(tI(l,{amount:-5e4},!1,o),l.velx+=1.5*Math.cos(W),l.vely+=1.5*Math.sin(W)),null==o.lastFire&&(o.lastFire=0),Date.now()-o.lastFire>=50&&(o.lastFire=Date.now(),tr.push({x:o.x,y:o.y,oldX:o.x,oldY:o.y,velx:0,vely:0,scale:20,speed:.3,dmg:1e4,range:9200+o.scale,dir:W,freezeEffect:{name:"freezing",last:2e4,power:.5},slowEffect:{name:"slowdown",last:5e3,power:.012},grayDamageAmount:1,color:"./images/bullets/energy_bullet.png",owner:o}))}}o.isFREEZE&&(o.velx=0,o.vely=0),o.x+o.velx*t>=o.scale&&o.x+o.velx*t<=es.x-o.scale?o.x+=o.velx*t:o.x+o.velx*t>=es.x-o.scale?o.x=es.x-o.scale:o.x=o.scale,o.y+o.vely*t>=o.scale&&o.y+o.vely*t<=es.y-o.scale?o.y+=o.vely*t:o.y+o.vely*t>=es.y-o.scale?o.y=es.y-o.scale:o.y=o.scale,o.velx&&(o.velx*=Math.pow(.993,t)),o.vely&&(o.vely*=Math.pow(.993,t));let U=tr.filter(e=>e.isAlly&&t9(e,o));for(let G=0;G<U.length;G++){let V=U[G];if(V.antiTier4_5&&(V.dmg=tS(V,o)),V.aoeRange||tI(o,{amount:-V.dmg,graydmg:V.grayDamageAmount,defensePointsBypass:V.defensePointsBypass},!0,l),V.dmg>0){if(V.knockback&&(o.velx+=Math.cos(V.dir)*V.knockback,o.vely+=Math.sin(V.dir)*V.knockback),V.rustEffect&&o.effects.filter(e=>"rust"==e.name&&"tamer"==e.effectID).length<30&&o.effects.push({neg:!0,name:V.rustEffect.name,power:V.rustEffect.power,lastTime:V.rustEffect.last}),V.dotEffect&&(V.dotEffect.resetDOT&&o.effects.filter(e=>"dot"==e.name&&e.resetDOT).forEach(e=>{e.oldLastTime&&(e.lastTime=e.oldLastTime)}),o.effects.push({neg:!0,resetDOT:V.dotEffect.resetDOT,name:V.dotEffect.name,dmg:V.dotEffect.dmg,lastTime:V.dotEffect.last,owner:V.owner})),V.blastEffect)for(let K=0;K<V.blastEffect.power;K++)o.effects.push({neg:!0,owner:V.owner,name:V.blastEffect.name,lastTime:V.blastEffect.last});if(V.slowEffect&&o.effects.unshift({neg:!0,name:V.slowEffect.name,power:V.slowEffect.power,lastTime:V.slowEffect.last}),V.freezeEffect&&!o.effects.find(e=>"cold pulse"==e.name))for(let Y=0;Y<V.freezeEffect.power;Y++)o.effects.push({neg:!0,owner:V.owner,name:V.freezeEffect.name,lastTime:V.freezeEffect.last})}null!=V.aoeRange&&(ts.filter(e=>Math.hypot(e.y-V.y,e.x-V.x)<=V.aoeRange+e.scale).forEach(e=>{tI(e,{amount:-V.dmg},!0,l)}),tM.push({x:V.x,y:V.y,scale:0,color:V.weaponOwner&&V.weaponOwner.cold?"white":"",maxScale:V.aoeRange})),V.dmg=0,V.kill=!0}o.health>o.maxhealth-o.grayDamage&&(o.health=o.maxhealth-o.grayDamage),o.health<=0&&(o.isBoss&&("Level 8 Boss"==o.name&&O("8 boss",1),eB.bossIndex++,null==en[0].rewardBonus&&(en[0].rewardBonus={silver:0,gold:0,keys:0,OXP:0,WSP:0}),en[0].rewardBonus.silver+=o.onKill.silver,en[0].rewardBonus.gold+=o.onKill.gold,en[0].rewardBonus.keys+=o.onKill.keys,en[0].rewardBonus.OXP+=o.onKill.OXP,o.onKill.WSP&&(en[0].rewardBonus.WSP+=o.onKill.WSP),tD()),ts.splice(a,1))}}}(e),function e(t){for(let l=0;l<tc.length;l++){let i=tc[l];if(i){i.lastingTime-=t;for(let a=0;a<en.length;a++){let o=en[a].robots[en[a].robotIndex];o&&Math.hypot(i.y-o.y,i.x-o.x)<=i.scale&&("Infinite Void"==i.name&&o.name==i.ownerName&&o.effects&&(o.effects.unshift({name:"slowdown",power:-.75,lastTime:1e3/tW.real*4}),o.effects.push({name:"defense points",amount:75,lastTime:1e3/tW.real*4})),"Infinite Void"==i.name&&en[a].isAlly!=i.isAlly&&(o.freeze=!0))}for(let n=0;n<ts.length;n++){let s=ts[n];"Infinite Void"==i.name&&Math.hypot(i.y-s.y,i.x-s.x)<=i.scale&&(s.freeze=!0)}for(let r=0;r<tr.length;r++){let $=tr[r];"Infinite Void"==i.name&&$.isAlly!=i.isAlly&&Math.hypot(i.y-$.y,i.x-$.x)<=i.scale&&($.dmg=0,$.freeze=!0)}i.lastingTime<=0&&("Infinite Void"==i.name&&i.owner.effects.push({name:"defense points",amount:1e3,lastTime:2e3}),tc.splice(l,1))}}}(e),function e(t){for(let l=0;l<tc.length;l++){let i=tc[l];if(i){null==i.oldLast&&(i.oldLast=i.lastingTime),null==i.tmpScale&&(i.tmpScale=0),i.tmpScale=Math.min(i.tmpScale+3.2*t,i.scale),n.save(),n.translate(i.x-tn.x,i.y-tn.y),S(0,0,i.tmpScale,n,!1,!1,"rgb(0, 0, 255, .4)","rgb(255, 0, 0)",16);let a=i.lastingTime/i.oldLast;n.strokeStyle="#0000ff",n.lineWidth=16,n.beginPath(),n.arc(0,0,i.tmpScale,0,2*Math.PI*a),n.stroke(),n.restore()}}}(e),(en[0]&&en[0].robotIndex>=0||2==p.gameMode)&&(tP+=e);let _=en[0]?en[0].robots.filter(e=>e&&e.battleStats&&e.battleStats.kills).reduce((e,t)=>e+t.battleStats.kills,0):0;if(tP<=6e4)document.getElementById("timePlayed").innerHTML=`${tf()&&en[0]?`Kills: ${_} | `:0==p.gameMode?`Wave: ${tT.waveIndex+1} | `:""}${tW.real} | 0:${tP<=1e4?"0":""}${ee(tP/1e3)}`;else{let v=tP/1e3/60,w=(v=v.toString().split("."))[0],k=60*parseFloat("0."+v[1]);document.getElementById("timePlayed").innerHTML=`${tf()&&en[0]?`Kills: ${_} | `:0==p.gameMode?`Wave: ${tT.waveIndex+1} | `:""}${tW.real} | ${w}:${k<=10?"0":""}${ee(k)}`}n.fillStyle="rgb(0, 0, 0, 0.1)",n.fillRect(0,0,g.x,g.y),document.getElementById("LOGGER").innerHTML="";for(let I=0;I<ey.length;I++){let B=ey[I];if(B.weapon&&B.weapon.level){let A={color:!0==B.attacker.isAlly?"#00f":"#f00",name:B.attacker.name},M={color:!0==B.victim.isAlly?"#00f":"#f00",name:B.victim.name};document.getElementById("LOGGER").innerHTML+=`
                    <div>
                    <span style="color: ${"GAME_P2W (pay to win)"==A.name?"#fff":A.color};">${A.name}</span>
                    <span style="color: #fff;">[${B.weapon.name}${B.weapon.level>=13?` <span style="color: #${tF(B.weapon.level)}">${t7(B.weapon.level)}</span>`:""}]</span>
                    <span style="color: ${M.color};">${M.name}</span>
                    </div>
                    `}}!function e(){r.clearRect(0,0,es.x/50,es.y/50);for(let t=0;t<ek.length;t++){let l=ek[t];if(l){r.save();let i=l.x/es.x*(es.x/50),a=l.y/es.y*(es.y/50);if(r.translate(i,a),"wall rect"==l.name||"water"==l.name)r.fillStyle="water"==l.name?"#1ca3ec":"#000",r.fillRect(0,0,l.width/50,l.height/50);else if("beacon"==l.name){let o,n=0;l.ENEMYPOINTS>l.ALLYPOINTS?(o="#f00",n=l.ENEMYPOINTS/5e3):(o="#00f",n=l.ALLYPOINTS/5e3),S(0,0,7,r,!0,!1,"#fff","#fff",0),r.fillStyle=o,r.beginPath(),r.arc(0,0,7,0,2*Math.PI*n),r.fill()}r.restore()}}for(let s=0;s<en.length;s++){let $=en[s].robots[en[s].robotIndex];if($){r.save(),r.translate($.x/es.x*(es.x/50),$.y/es.y*(es.y/50));let d=$.isMe?"#0f0":!0==en[s].isAlly?"#fff":"#f00";S(0,0,3,r,!0,!1,d,d,0),r.restore()}}}(e)}else document.getElementById("LOGGER").innerHTML="",document.getElementById("abilityCharges").innerHTML="",document.getElementById("shields").innerHTML="",document.getElementById("LMAOLMAOLMAOLMAO").innerHTML="",document.getElementById("gameDataThing").innerHTML="",document.getElementById("timePlayed").innerHTML="",n.clearRect(0,0,g.x,g.y),n.fillStyle="rgb(0, 0, 0, 0.1)",n.fillRect(0,0,g.x,g.y);window.requestAnimationFrame(tG)}window.requestAnimationFrame(tG)}();

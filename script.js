(function () {
    window.isDev = false;
    var slotData = [{
        unlocked: true,
        used: true,
        cost: 0
    }, {
        unlocked: false,
        used: false,
        cost: 50
    }, {
        unlocked: false,
        used: false,
        cost: 200
    }, {
        unlocked: false,
        used: false,
        cost: 1e3
    }, {
        unlocked: false,
        used: false,
        cost: 1e3
    }, {
        unlocked: false,
        used: false,
        cost: 2e3
    }, {
        unlocked: false,
        used: false,
        cost: 2e3
    }, {
        unlocked: false,
        used: false,
        cost: 3e3
    }];
    var lineBreak = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var mainDisplayText = `
    <div style="font-size: 40px; width: 100%; text-align: center;">
    Game History
    </div>
    <hr>
    <div style="margin-left: 10px;">
    Beta V36 (Oct 30, 2023):<br>
    - Microchips are back!<br>
    - New Weapons: Incinerator and Scald<br>
    - Removed grids<br>
    - Bots now cannot obtain level 14+ equipment<br>
    - Balance Changes<br>
    - Various Tweaks and Changes<br>
    - MK3 Weapon enhancement now increases by 20%.<br><br>

    Beta V35 (Oct 29, 2023):<br>
    - New Shape: Blue Heptagon<br>
    - Balance Changes<br>
    - Bug Fixes<br><br>

    Beta V34 (Oct 28, 2023):<br>
    - Removed Microchips (compensation will be given soon)<br>
    - Reworked UI<br>
    - New Shape(s):<br>
    ${lineBreak}- White Hexagon: Perfect counter to tier 4 and 5 shapes<br>
    - New Weapon(s):<br>
    ${lineBreak}- Flux: Fast firing energy machine gun that's perfect to counter tier 4 and 5 shapes<br>
    - Balance Changes<br><br>

    Beta V33 (Oct 23, 2023):<br>
    - Devastator and Scatter:<br>
    ${lineBreak}Ammo: 16 -> 10<br>
    ${lineBreak}Reload: 1 -> .6 sec<br>
    - Evora and Veyron:<br>
    ${lineBreak}Damage: -23.5%<br>
    ${lineBreak}Ammo: 175 -> 150<br>
    ${lineBreak}Reload: 6 -> 7 sec<br>
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
    ${lineBreak}DP per stack: 1 -> 2<br>
    ${lineBreak}Max Effect Limit: 500 -> 250<br>
    ${lineBreak}<strong>Tan Circle remains mostly unchanged</strong><br>
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
    ${lineBreak}Damage: -20%<br>
    ${lineBreak}Ammo: 150 -> 125<br>
    ${lineBreak}Reload Time: 2 -> 3 sec<br>
    - Ember:<br>
    ${lineBreak}Damage: -20%<br>
    ${lineBreak}Ammo: 300 -> 250<br>
    ${lineBreak}Reload Time: 2 -> 3 sec<br>
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
   ${lineBreak}Storm: Light Version of Thunder!<br>
   ${lineBreak}Cinder: Heat Waves!<br>
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
    ${lineBreak}Blue Pentagon: heavy shielded shape.<br>
    ${lineBreak}Brown Circle: take over the skys!<br>
    - New Weapon: STING<br>
    ${lineBreak}Light version of viper!<br>
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
    ${lineBreak}Turns all damage into DOT, allowing it not to get instantly killed!<br>
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
    ${lineBreak}Reload Time: 8 -> 5 seconds<br>
    ${lineBreak}Ammo Doubled<br>
    ${lineBreak}Eagle Damage Increase: 15%<br>
    - Dark Gray Circle Buff:<br>
    ${lineBreak}Reflector: 75% -> 250%<br>
    - Damage Counter Bug Fixes<br>
    - Silver Battle Rewards Increased<br>
    - Destroyer:<br>
    ${lineBreak}Damage Decreased by 15%<br>
    ${lineBreak}Damage Range: 1600 -> 1400<br>
    ${lineBreak}Damage Fire Rate: 30 -> 50<br>
    ${lineBreak}Reload Time: 5 -> 5.5 seconds<br>
    - Economy Changes<br>
    - New Boss in Arena!<br>
    - You can use gold for upgrading shapes and weapons if you do not have enough silver.<br><br>

    Beta V11 (Sep 13, 2023):<br>
    - New Game Mode: Arena!<br>
    - Eagle Tier: 3 -> 2<br>
    - New Weapons: Viper, Atomizer, and Nucleon<br>
    ${lineBreak}Viper: Emit DOT Damage (damage over time) to your enemies!<br>
    ${lineBreak}Atomizer and Nucleon: Unlimited ammo energy machine guns!<br><br>

    Beta V10 (Sep 12, 2023):<br>
    - Teal Circle: Ability Cooldown: 24 -> 18 seconds<br>
    - Eagle: Heavy Version of Hawk (Nerfed Version)!<br>
    - Hawk Nerf:<br>
    ${lineBreak}Reload Time: 7.5 -> 8 seconds<br>
    ${lineBreak}Ammo: 20 -> 15<br>
    ${lineBreak}Max Targets: 4 -> 3<br>
    - New Shapes: White Circle and Dark Gray Circle!<br>
    ${lineBreak}White Circle: Too much enemies? Need a break? Look no further! White Circle can easily give you a break when you need it most, with one press of its ability.<br>
    ${lineBreak}Dark Gray Circle: Damages enemies that damage the shape.<br>
    - You can now sell weapons for silver!<br>
    - All Operations without keys prizes will auto update. 10.0K OXP is given for compensation<br>
    - Operation Reward Tweaks and Changes<br>
    - Shocker Buff:<br>
    ${lineBreak}Shocker Reload: 8 seconds -> 5 seconds<br>
    - If an shape has more weapons than the max hardpoints. All weapons would clear from the shape.<br>
    - Bug Fixes<br><br>

    Beta V9 (Sep 11, 2023):<br>
    - New Shapes: Teal Circle and Blue Circle<br>
    ${lineBreak}Dive in to battle with Full Action ability!<br>
    - New Weapon: Hawk<br>
    ${lineBreak}Tired of swarms attacking you? Here's the solution!<br>
    - Copper Lootbox Reward Changes<br>
    - Bug Fixes<br><br>

    Beta V8 (Sep 10, 2023):<br>
    - Increased OXP Earnings by 4 times<br>
    - Changed Reward Amount for Gold and Silver (if you have an operation on going, you'll have to finish it to get the update.<br><br>

    Beta V7 (Sep 9, 2023):<br>
    - New Shape: Purple Circle<br>
    ${lineBreak}Built-in resistance allows it to withstand heavy enemy fire.<br>
    - New Extermination Enemy: Smasher Circles<br>
    - New Modules: Self Fix Unit, Thermonuclear Reactor, Nuclear Reactor, and Arc Reactor<br>
    ${lineBreak}Self Fix Unit: Repairs a part of the shape each second<br>
    ${lineBreak}Thermonuclear Reactor & Nuclear Reactor: Increases weapon damage output<br>
    ${lineBreak}Arc Reactor: Increases weapon damage with the cost of some health<br>
    - New Feature Operation!<br>
    ${lineBreak}Earn OXP to level up on operation!<br><br>

    Beta V6 (Sep 6, 2023):<br>
    - Visual Changes<br><br>
    Beta V5 (Aug 31, 2023):<br>
    - New Feature: Modules!<br>
    ${lineBreak}Customize your shapes even more with special modules that increase your shapes health, damage output and so much more!<br>
    ${lineBreak}Keep in mind that modules have to be bought separately.<br><br>

    Beta V4 (Aug 30, 2023):<br>
    - New Extermination Enemy: Sniper!<br>
    ${lineBreak}Sniper moves away from the player and shoots an long ranged projectile every 2 seconds.<br>
    - Shocker: Shoots until reload (3 -> 6)<br>
    - Destroyer: Range Increase (1200 -> 1600)<br>
    New Shape: Green Circle!<br>
    ${lineBreak}First shape with an ability!<br>
    - Gray Damage: Unhealable health. This damage is done by all weapons (40% of damage is gray damage).<br>
    - Press E to use shape ability.<br><br>

    Beta V3 (Aug 29, 2023):<br>
    - New Weapon: Landslide, Shocker, and Destroyer<br>
    ${lineBreak}Landslide: Rocket launcher that deals aoe damage. Great for enemies in groups.<br>
    ${lineBreak}Shocker: Far ranged sniper.<br>
    ${lineBreak}Destroyer: Multi Barreled machine gun that fires 2 projectiles per clip.<br>
    - Shapes will have their recommended weapons listed in their description.<br>
    - Loot box: get "free" rewards with your hard earned keys.<br>
    - New Shape: Yellow Circle.<br>
    ${lineBreak}Holding 3 heavy hardpoints, this shape is an beast for an enemy.<br><br>

    Beta V2 (Aug 28, 2032):<br>
    - New Shapes: Black Circle and Light Gray Circle<br>
    - Punisher: Damage Nerf (-15%)<br>
    - New Game Mode: Extermination!<br>
    ${lineBreak}Fight hordes of enemies. Longer you survive, more rewards you get!<br>
    - New Features: Quick Reload, Quick Select, and Quick Upgrade<br>
    ${lineBreak}Hold R to reload 2 times faster, but makes you move 2 times slower.<br>
    ${lineBreak}Press Enter to quick upgrade equipment like shapes and weapons without needing to press the upgrade button.<br>
    ${lineBreak}Press 1-9 keys to quick select an slot and esc to deselect.<br>
    - Bug Fixes<br><br>

    Beta V1 (Undated):<br>
    - Setting up the game<br>
    </div><br>
    `;
    document.getElementById("sideDisplay").innerHTML = "";
    function getValue(id) {
        return localStorage.getItem(id);
    }
    function saveValue(id, value) {
        localStorage.setItem(id, value);
    }
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var mouseX = 0;
    var mouseY = 0;
    var player = {
        sliver: 200e3,
        gold: 250,
        keys: 1e3,
        shapes: [],
        weapons: [],
        modules: [],
        gameMode: -1,
        ULIMATEXP: 0,
        workshopPoints: 0,
        league: 0,
        tokens: {
            mk1: 0,
            mk2: 0,
            mk3: 0
        }
    };
    //base x: 1980, base y: 1080
    var maxScreen = {
        x: 1980,
        y: 1080
    };
    var sliverUpgradesByTier = [{//tier 1
        shapes: [0, 10e3, 20e3, 40e3, 80e3, 100e3, 200e3, 400e3, 800e3, 1e6, 2e6, 5e6],
        weapons: [0, 7.5e3, 15e3, 30e3, 60e3, 90e3, 150e3, 300e3, 700e3, 1e6, 1.5e6, 3e6],
        modules: [0, 200e3, 200e3, 200e3, 200e3, 200e3]
    }, {//tier 2
        shapes: [0, 20e3, 40e3, 80e3, 200e3, 400e3, 800e3, 1e6, 2e6, 4e6, 5e6, 8e6],
        weapons: [0, 10e3, 30e3, 60e3, 180e3, 300e3, 600e3, 900e3, 1.5e6, 3e6, 4e6, 6e6],
        modules: [0, 2e6, 2e6, 2e6, 2e6, 2e6]
    }, {//tier 3
        modules: [0, 20e6, 20e6, 20e6, 20e6, 20e6],
        shapes: [0, 120e3, 240e3, 480e3, 1e6, 1.5e6, 3e6, 5e6, 10e6, 20e6, 40e6, 80e6],
        weapons: [0, 100e3, 200e3, 400e3, 800e3, 1e6, 2e6, 4e6, 8e6, 16e6, 32e6, 64e6]
    }, {//tier 4
        modules: [0, 40e6, 40e6, 40e6, 40e6, 40e6],
        shapes: [0, 600e3, 1e6, 2e6, 5e6, 9e6, 14e6, 16e6, 25e6, 50e6, 90e6, 120e6],
        weapons: [0, 400e3, 800e3, 1.2e6, 4e6, 8e6, 12e6, 14e6, 20e6, 40e6, 80e6, 100e6]
    }, {//tier 5
        shapes: [0, 5.625e6, 28.125e6, 56.25e6, 112.5e6, 225e6, 450e6, 675e6, 675e6, 843.75e6, 1012.5e6, 1406.25e6],
        weapons: [0, 3375e3, 16875e3, 3375e4, 675e5, 135e6, 27e6, 405e6, 405e6, 50625e4, 6075e5, 84375e4]
    }];
    var shapeSids = 0;
    class shape {
        constructor(data, slot, dontSID) {
            this.isItem = true;
            this.x = 0;
            this.y = 0;
            this.velx = 0;
            this.revive = data.revive;
            this.vely = 0;
            this.baseDP = 0;
            this.grayDamage = 0;
            this.moduleHardpoints = data.moduleHardpoints;
            this.tier = data.tier;
            this.desc = data.desc;
            this.health = this.maxhealth = data.healthData ? data.healthData.base : data.health;
            this.speed = data.speed;
            this.color = data.color;
            this.fieldOfViewMulti = data.fieldOfViewMulti;
            this.effects = [];
            this.name = data.name;
            this.slot = slot;
            this.scale = data.scale;
            if (!dontSID) this.sid = shapeSids;
            this.hardpoints = data.hardpoints;
            this.level = 1;
            if (!dontSID) shapeSids++;
            this.sellPrice = 0;
            this.reflector = data.reflector;
            if(data.builtInDefensePoints) {
                this.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE = data.builtInDefensePoints;
            }else {
                this.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE = 0;
            }
            this.healingMulti = data.healingMulti;
            this.builtInDefensePoints = data.builtInDefensePoints;
            this.baseDamageIncrease = data.baseDamageIncrease;
            this.baseShielding = null;
            this.turnDmgIntoDOT = data.turnDmgIntoDOT;
            this.enhanceCost = (this.tier + 1) * 2e3;
            if (data.shieldData || data.baseShielding) {
                if (data.baseShielding) data.shieldData = data.baseShielding;
                this.baseShielding = {
                    health: (data.shieldData.base || data.shieldData.health),
                    type: data.shieldData.type,
                    regen: data.shieldData.regen
                }
            }
            this.dotResistance = data.dotResistance;
            if (data.cost) {
                this.sellPrice += data.cost.sliver * .75;
                if (data.cost.gold && data.cost.gold > 0) {
                    this.sellPrice += 1250 * data.cost.gold;
                }
                if (data.cost.workshopPoints && data.cost.workshopPoints > 0) {
                    this.sellPrice += 10e3 * data.cost.workshopPoints;
                }
            }
            this.ability = null;
            if (data.ability) {
                if (true) {
                    this.ability = {
                        name: data.ability.name,
                        desc: data.ability.desc,
                        reload: data.ability.reload,
                        iconSource: data.ability.iconSource
                    };
                    if (data.ability.name == "Paladin" || data.ability.name == "Stealth Dash" || data.ability.name == "Phase Shift" || data.ability.name == "Dash" || data.ability.name == "Fortify") {
                        this.ability.charges = data.ability.charges;
                        this.ability.maxcharge = data.ability.charges;
                        this.ability.lastingTime = data.ability.lastingTime;
                        if(data.ability.name == "Fortify" || data.ability.name == "Paladin") {
                            this.ability.shieldHp = data.ability.shieldHpData ? data.ability.shieldHpData.base : data.ability.shieldHp;
                        }
                    } else {
                        if (data.ability.name == "Divine Judgement" || data.ability.name == "Grand Fortitude" || data.ability.name == "Overload" || data.ability.name == "Cold Pulse" || data.ability.name == "Dragon Flight" || data.ability.name == "Retribution" || data.ability.name == "Stampede") {
                            this.ability.dmg = data.ability.damageData ? data.ability.damageData.base : data.ability.dmg;
                            if (data.ability.name == "Divine Judgement" || data.ability.name == "Grand Fortitude" || data.ability.name == "Overload" || data.ability.name == "Stampede" || data.ability.name == "Dragon Flight" || data.ability.name == "Retribution") {
                                this.ability.lastingTime = data.ability.lastingTime;
                                if(data.ability.name == "Grand Fortitude" || data.ability.name == "Dragon Flight") this.ability.dotDamage = data.ability.dotData ? data.ability.dotData.base : data.ability.dotDamage;
                            }
                        } else {
                            this.ability.lastingTime = data.ability.lastingTime;
                        }
                    }
                }
            }
        }
    }
    var shapeData = [{
        tier: 0,
        name: "Gray Circle",
        speed: 0.0018,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0002, 0.0003, 0.0004],
        scale: 55,
        fieldOfViewMulti: 1.5,
        desc: `
        Training shape for mastering the basics of combat.<br><br>
        Recommended Equipment: x2 Punisher
        `,
        healthData: {
            base: 38e3,
            level: [0, 39e2, 42e2, 44e2, 46e2, 48e2, 5e3, 52e2, 56e2, 6e3, 8e3, 8e3],
        },
        hardpoints: {
            light: 2,
            heavy: 0
        },
        color: "#808080",
        moduleHardpoints: 1,
        cost: {
            sliver: 75e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Black Circle",
        speed: 0.0012,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0, 0, 0, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.5,
        desc: `
        Boasting 4 light weapon slots, 
        this shape is extremely versatile - a universal soldier. 
        Fit for combat at any range.<br><br>
        Recommended Equipment: x4 Punisher
        `,
        healthData: {
            base: 55e3,
            level: [0, 6e3, 6e3, 61e2, 61e2, 7e3, 71e2, 75e2, 8e3, 8e3, 9e3, 10e3],
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#000",
        moduleHardpoints: 1,
        cost: {
            sliver: 570e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Light Gray Circle",
        speed: 0.0028,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0004],
        scale: 45,
        fieldOfViewMulti: 1.35,
        desc: `
        One of the fastest shapes. 
        Holding 3 light weapons this shape can claim victory against the toughest enemies.<br><br>
        Recommended Equipment: x3 Landslide
        `,
        healthData: {
            base: 31e3,
            level: [0, 2e3, 2e3, 21e2, 31e2, 3e3, 41e2, 45e2, 4e3, 5e3, 6e3, 7e3],
        },
        hardpoints: {
            light: 3,
            heavy: 0
        },
        color: "#bababa",
        moduleHardpoints: 1,
        cost: {
            sliver: 0,
            gold: 250
        }
    }, {
        tier: 1,
        name: "Yellow Circle",
        speed: 0.0012,
        speedLevel: [0, 0, 0, 0.0001, 0, 0.0002, 0, 0.0001, 0.0001, 0, 0.0001, 0.0003],
        scale: 85,
        fieldOfViewMulti: 2.3,
        desc: `
        Holding 3 heavy weapons, this shape has unparalleled fire power.
        No other shape of the same tier can survive an onslaught of this shape.<br><br>
        Recommended Equipment: x3 Destroyer
        `,
        healthData: {
            base: 59e3,
            level: [0, 5e3, 5e3, 54e2, 8e3, 9e3, 12e3, 14e3, 16e3, 19e3, 20e3, 21e3],
        },
        hardpoints: {
            light: 0,
            heavy: 3
        },
        color: "#ffff00",
        moduleHardpoints: 2,
        cost: {
            sliver: 0,
            gold: 1e3
        }
    }, {
        tier: 1,
        name: "Green Circle",
        speed: 0.0021,
        speedLevel: [0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0002, 0.0002, 0.0002, 0.0002],
        scale: 55,
        fieldOfViewMulti: 1.4,
        desc: `
        Moderately armored shape with the ability to heal itself when damaged.<br><br>
        Recommended Equipment: x1 Destroyer + x1 Punisher
        `,
        healthData: {
            base: 38e3,
            level: [0, 37e2, 41e2, 45e2, 58e2, 59e2, 6e3, 65e2, 66e2, 8e3, 81e2, 85e2],
        },
        ability: {
            name: "Self Heal",
            desc: `
            <strong>Self Heal</strong> allows the robot to heal 25% of its health in 5 seconds. 
            After it heals 25%, it begins ability cooldown of 12 sec.
            `,
            iconSource: "./images/self_heal.png",
            lastingTime: 5e3,
            reload: 12e3
        },
        hardpoints: {
            light: 1,
            heavy: 1
        },
        color: "#00ff00",
        moduleHardpoints: 2,
        cost: {
            sliver: 0,
            gold: 15e2
        }
    }, {
        tier: 2,
        name: "Purple Circle",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0.0001, 0.0001, 0.0002],
        scale: 55,
        fieldOfViewMulti: 1.4,
        desc: `
        This shape has an built-in defense system that decreases all incoming damage.
        Perfect warrior of any kind.<br><br>
        Recommended Equipment: x1 Avalanche + x2 Landslide
        `,
        builtInDefensePoints: 50,
        healthData: {
            base: 96e3,
            level: [0, 3e3, 3e3, 34e2, 4e3, 44e2, 5e3, 6e3, 64e2, 68e2, 7e3, 7e3],
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#800080",
        moduleHardpoints: 3,
        cost: {
            sliver: 0,
            gold: 35e2
        }
    }, {
        tier: 1,
        name: "Blue Circle",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002],
        scale: 45,
        fieldOfViewMulti: 1.25,
        desc: `
        Blue Circle has the ability to increase its defense.
        This ability allows it to go into short fights without taking a lot of dmg.<br><br>
        Recommended Equipment: x4 Hawk
        `,
        healthData: {
            base: 33e3,
            level: [0, 2550, 2805, 3060, 3400, 3655, 3655, 4250, 4250, 4675, 4845, 5100],
        },
        ability: {
            name: "Full Action",
            desc: `
            <strong>Full Action</strong> gains 60 DP (37.5% resistance) for 5 seconds, after that it cooldown for 18 seconds.
            `,
            iconSource: "./images/full_action.png",
            lastingTime: 5e3,
            reload: 18e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#0000ff",
        moduleHardpoints: 2,
        cost: {
            sliver: 3e6,
            gold: 0
        }
    }, {
        tier: 2,
        name: "Teal Circle",
        speed: 0.001,
        speedLevel: [0, 0.0001, 0, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.45,
        desc: `
        Improved version of blue circle.
        Teal Circle can do almost everything blue circle can do but better.<br><br>
        Recommended Equipment: x1 Punisher + x2 Destroyer
        `,
        healthData: {
            base: 86e3,
            level: [0, 9e3, 9e3, 9e3, 10e3, 13e3, 16e3, 18e3, 19e3, 20e3, 22e3, 25e3],
        },
        ability: {
            name: "Full Action",
            desc: `
            <strong>Full Action</strong> gains 200 DP (66.7% resistance) for 12 seconds, after that it cooldown for 18 seconds.
            `,
            iconSource: "./images/full_action.png",
            lastingTime: 12e3,
            reload: 18e3
        },
        hardpoints: {
            light: 1,
            heavy: 2
        },
        color: "#008080",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2
        }
    }, {
        tier: 2,
        name: "White Circle",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001],
        scale: 55,
        fieldOfViewMulti: 1.25,
        desc: `
        White Circle has the ability to freeze enemies in place.<br><br>
        Recommended Equipment: x2 Eagle
        `,
        healthData: {
            base: 55e3,
            level: [0, 5e3, 5e3, 5e3, 5e3, 6e3, 6e3, 6e3, 6e3, 7e3, 7e3, 85e2],
        },
        ability: {
            name: "Cold Pulse",
            desc: `
            <strong>Cold Pulse</strong> emits an pulse of cold energy, this pulse will freeze and damage any enemies in 1200 PX.
            When frozen enemies won't be able to move nor shoot.
            Effect lasts for 6 seconds.
            For every enemy you freeze, heals 5.0K HP per enemy.<br><br>
            Ability Cooldown Time: 16 seconds
            `,
            damageData: {
                base: 500,
                level: [0, 25, 25, 25, 25, 25, 50, 50, 50, 50, 75, 75],
            },
            iconSource: "./images/cold_pulse.png",
            reload: 16e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#fff",
        moduleHardpoints: 3,
        cost: {
            sliver: 1e6,
            gold: 3750
        }
    }, {
        tier: 3,
        name: "Dark Gray Circle",
        speed: 0.0016,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.3,
        desc: `
        This shape has an built-in defense system with an twist.
        150% of damage taken will be redirected to the attacker.<br><br>
        Recommended Equipment: x3 Hawk
        `,
        reflector: 1.5,
        builtInDefensePoints: 25,
        healthData: {
            base: 56e3,
            level: [0, 5e3, 5e3, 7e3, 7e3, 7e3, 8e3, 8e3, 8e3, 10e3, 10e3, 15e3],
        },
        hardpoints: {
            light: 3,
            heavy: 0
        },
        color: "#4e4e4e",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2
        }
    }, {
        tier: 3,
        name: "Red Circle",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 75,
        fieldOfViewMulti: 2,
        desc: `
        Holding 4 heavy weapons-unparalleled fire power.
        Shape comes with built-in arc reactor, increasing its damage by 25%.<br><br>
        Recommended Equipment: x4 Viper
        `,
        baseDamageIncrease: .25,
        healthData: {
            base: 78e3,
            level: [0, 9e3, 9e3, 9e3, 9e3, 10e3, 10e3, 10e3, 10e3, 11e3, 11e3, 15e3],
        },
        hardpoints: {
            light: 0,
            heavy: 4
        },
        color: "#f00",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2
        }
    }, {
        tier: 1,
        name: "Red Pentagon",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 55,
        fieldOfViewMulti: 1.3,
        desc: `
        First shape with an energy shield.
        Energy shields protects the shape from non energy based projectiles, "direct" hits like the AOE effect from extermination enemies don't count and will be ignored.
        Energy Shield regens 5%, every 5 seconds.<br><br>
        Recommended Equipment: x1 Punisher + x1 Destroyer
        `,
        shieldData: {
            type: "energy",
            base: 10e3,
            level: [0, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3],
            regen: 0.05
        },
        healthData: {
            base: 55e3,
            level: [0, 3e3, 3e3, 3e3, 4e3, 4e3, 5e3, 5e3, 5e3, 5e3, 6e3, 6e3],
        },
        hardpoints: {
            light: 1,
            heavy: 1
        },
        color: "#f00",
        moduleHardpoints: 2,
        cost: {
            sliver: 0,
            gold: 15e2
        }
    }, {
        tier: 3,
        name: "Pink Circle",
        speed: 0.0021,
        speedLevel: [0, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0.0002, 0.0002, 0.0002, 0.0003],
        scale: 65,
        fieldOfViewMulti: 1.6,
        desc: `
        Heavyly armored shape that can turn all damage into DOT damage.
        Alllowing the robot not to take a lot of damage instantly.<br><br>
        Recommended Equipment: x4 Atomizer
        `,
        turnDmgIntoDOT: true,
        healthData: {
            base: 118e3,
            level: [0, 9e3, 9e3, 9e3, 11e3, 11e3, 11e3, 14e3, 14e3, 14e3, 16e3, 18e3],
        },
        ability: {
            name: "Self Heal",
            desc: `
            <strong>Self Heal</strong> allows the robot to heal itself for 12 sec. 
            After it heals, it begins ability cooldown of 18 sec.
            `,
            iconSource: "./images/self_heal.png",
            lastingTime: 12e3,
            reload: 18e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#ffc0cb",
        moduleHardpoints: 4,
        cost: {
            sliver: 5e6,
            gold: 75e2
        }
    }, {
        tier: 2,
        name: "Blue Pentagon",
        speed: 0.0016,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.3,
        desc: `
        Blue Pentagon is a shield dependent shape.
        Low base health but really high shield hp.
        Moves decently fast.<br><br>
        Recommended Equipment: x2 Viper
        `,
        shieldData: {
            type: "energy",
            base: 70e3,
            level: [0, 6e3, 6e3, 8e3, 8e3, 10e3, 12e3, 15e3, 17e3, 22e3, 44e3, 44e3],
            regen: 0.1
        },
        healthData: {
            base: 16e3,
            level: [0, 3e3, 3e3, 3e3, 4e3, 4e3, 4e3, 4e3, 5e3, 5e3, 5e3, 55e2],
        },
        ability: {
            name: "Shield Regeneration",
            desc: `
            <strong>Shield Regeneration</strong> allows the shape to regen its shields 10 times quicker for 6 seconds. 
            After 6 seconds, it begins ability cooldown of 20 sec.
            `,
            iconSource: "./images/shield_regen.png",
            lastingTime: 6e3,
            reload: 20e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#00f",
        moduleHardpoints: 3,
        cost: {
            sliver: 500e3,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Brown Circle",
        speed: 0.0016,
        speedLevel: [0, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.45,
        desc: `
        Brown Circle is equipped with flight tech.<br><br>
        Recommended Equipment: x2 Viper + x2 Sting
        `,
        healthData: {
            base: 74e3,
            level: [0, 2e3, 2e3, 4e3, 5e3, 5e3, 5e3, 7e3, 7e3, 9e3, 9e3, 12e3],
        },
        ability: {
            name: "Dragon Flight",
            desc: `
            <strong>Dragon Flight</strong> the shape flies up.
            When it reaches max height, the shape can shoot and move through walls, also an built-in weapon is actived that deals damage.
            While flying the robot gets an defense system.
            After 12 seconds, the ability cools down for 26 seconds.
            `,
            damageData: {
                base: 460,
                level: [0, 45, 55, 65, 75, 75, 85, 90, 95, 100, 105, 110],
            },
            dotData: {
                base: 20,
                level: [0, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 20],
            },
            lastingTime: 8e3,
            iconSource: "./images/dragon_flight.png",
            reload: 26e3
        },
        hardpoints: {
            light: 2,
            heavy: 2
        },
        color: "#964b00",
        moduleHardpoints: 4,
        cost: {
            sliver: 10e6,
            gold: 75e2
        }
    }, {
        tier: 4,
        name: "Orange Circle",
        speed: 0.0012,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.6,
        desc: `
        Orange Circle has an built-in defense system, with an reflector built-in it.
        The shape also has an ability to heal itself and to turn all damage into DOT.
        Shape also takes less GRAY DAMAGE.
        <br><br>
        Recommended Equipment: x1 Storm + x2 Thunder
        `,
        healthData: {
            base: 306240,
            level: [0, 38720, 38720, 38720, 42240, 42240, 42240, 45760, 45760, 45760, 49280, 52800]
        },
        hardpoints: {
            light: 1,
            heavy: 2
        },
        ability: {
            name: "Ultimate Defense",
            desc: `
            <strong>Ultimate Defense</strong> turns all damage into DOT for 12 seconds.
            While ability is active, the robot heals.
            After 12 seconds, it begins ability cooldown of 12 sec.
            `,
            iconSource: "./images/shield_regen.png",
            lastingTime: 12e3,
            reload: 10e3
        },
        reflector: .2,
        builtInDefensePoints: 150,
        color: "#ffa500",
        moduleHardpoints: 4,
        cost: {
            sliver: 900e6,
            gold: 100e3,
            workshopPoints: 2e3
        }
    }, {
        tier: 3,
        name: "White Pentagon",
        speed: 0.0014,
        speedLevel: [0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.25,
        desc: `
        White Pentagon is a legendary brawler.
        With the ability to remove itself from enemy radars, it can deliver damage without getting targeted.<br><br>
        Recommended Equipment: x2 Storm + x1 Thunder
        `,
        shieldData: {
            type: "yellow",
            base: 37e3,
            level: [0, 2e3, 2e3, 2e3, 3e3, 3e3, 4e3, 4e3, 4e3, 5e3, 5e3, 6e3],
            regen: 0.05
        },
        healthData: {
            base: 76e3,
            level: [0, 4e3, 4e3, 4e3, 6e3, 6e3, 6e3, 8e3, 8e3, 10e3, 12e3, 15e3],
        },
        ability: {
            name: "Stealth",
            desc: `
            <strong>Stealth</strong> removes the robot from all enemy radars.
            While ability is active, moves 2 times faster.
            After 8 seconds of stealth, cools down for 16 seconds.
            `,
            iconSource: "./images/stealth.png",
            lastingTime: 8e3,
            reload: 16e3
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#fff",
        moduleHardpoints: 4,
        cost: {
            sliver: 2e6,
            gold: 75e2
        }
    }, {
        tier: 3,
        name: "Tan Pentagon",
        shapeType: "pentagon",
        speed: 0.0024,
        speedLevel: [0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.35,
        desc: `
        Tan Pentagon is a dangerous shape that can turn enemies fire power aganist them.
        <br><br>
        Recommended Equipment: x4 Atomizer
        `,
        healthData: {
            base: 64e3,
            level: [0, 2e3, 2e3, 3e3, 3e3, 4e3, 4e3, 4e3, 5e3, 5e3, 6e3, 8e3],
        },
        ability: {
            name: "Retribution",
            desc: `
            <strong>Retribution</strong> deploys a resilient purple shield
            that can tirelessly absorb an unlimited amount of damage,
            turning the aggression of foes into an opportunity for counterattack.
            As enemies assail the shield, it progressively amplifies the power of
            the shape's built-in weapons,
            reaching a staggering maximum increase of 2000%.<br><br>
            This formidable ability remains in effect for 12 seconds,
            after which it goes into an 12-second cooldown phase.
            `,
            iconSource: "./images/retribution.png",
            damageData: {
                base: 467,
                level: [0, 67, 67, 77, 77, 77, 99, 99, 133, 133, 133, 167],
            },
            lastingTime: 12e3,
            reload: 12e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#d2b48c",
        moduleHardpoints: 4,
        cost: {
            sliver: 2e6,
            gold: 75e2
        }
    }, {
        tier: 3,
        name: "Purple Hexagon",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002],
        scale: 65,
        fieldOfViewMulti: 1.35,
        desc: `
        Purple Hexagon is a stealthy fighter.
        <br><br>
        Recommended Equipment: x2 Storm + x1 Thunder
        `,
        healthData: {
            base: 85e3,
            level: [0, 5e3, 5e3, 6e3, 6e3, 6e3, 7e3, 8e3, 9e3, 10e3, 12e3, 15e3],
        },
        ability: {
            name: "Stealth Dash",
            desc: `
            <strong>Stealth Dash</strong> leaps the shape into a fixed direction.
            While leaping the shape gets, stealth. The Stealth ends 2 seconds after the dash.
            4 Ability Charges, 5 second charge cooldown, .75 second usage interval.
            `,
            iconSource: "./images/stealth_dash.png",
            charges: 4,
            lastingTime: 750,
            reload: 5e3
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#800080",
        moduleHardpoints: 4,
        cost: {
            sliver: 1e6,
            gold: 5e3,
            workshopPoints: 2e3
        }
    }, {
        tier: 3,
        name: "Yellow Hexagon",
        speed: 0.0012,
        speedLevel: [0, 0, 0.0001, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0, 0.0001, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.35,
        desc: `
        Yellow Hexagon is a super fighter, with the ability to not take any damage.
        <br><br>
        Recommended Equipment: x4 Storm
        `,
        healthData: {
            base: 96e3,
            level: [0, 10e3, 10e3, 10e3, 10e3, 12e3, 14e3, 14e3, 16e3, 16e3, 18e3, 25e3],
        },
        ability: {
            name: "Phase Shift",
            desc: `
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
            `,
            iconSource: "./images/phase_shift.png",
            charges: 3,
            lastingTime: 2e3,
            reload: 8e3
        },
        hardpoints: {
            light: 4,
            heavy: 0
        },
        color: "#ffff00",
        moduleHardpoints: 4,
        cost: {
            sliver: 5e6,
            gold: 75e2,
            workshopPoints: 500
        }
    }, {
        tier: 2,
        name: "Gray Hexagon",
        speed: 0.0018,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002, 0.0002, 0.0002, 0.0004],
        scale: 55,
        fieldOfViewMulti: 1.1,
        desc: `
        Gray Hexagon is a fast moving attacker.
        <br><br>
        Recommended Equipment: x2 Delay
        `,
        healthData: {
            base: 66e3,
            level: [0, 3000, 3000, 3000, 3000, 3600, 4200, 4200, 4800, 4800, 5400, 7500]
        },
        ability: {
            name: "Dash",
            desc: `
            <strong>Dash</strong> leaps the shape into a fixed direction.<br>
            5 Ability Charges, 2 second charge cooldown
            `,
            iconSource: "./images/dash.png",
            charges: 5,
            lastingTime: 300,
            reload: 2e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#808080",
        moduleHardpoints: 3,
        cost: {
            sliver: 500e3,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Red Hexagon",
        speed: 0.0016,
        speedLevel: [0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 60,
        fieldOfViewMulti: 1.3,
        desc: `
        Red Hexagon is a shield stacker.
        <br><br>
        Recommended Equipment: x2 Rime + x1 Glacier
        `,
        healthData: {
            base: 44e3,
            level: [0, 3e3, 3e3, 3e3, 3e3, 4e3, 4e3, 4e3, 5e3, 5e3, 6e3, 8e3],
        },
        ability: {
            name: "Fortify",
            desc: `
            <strong>Fortify</strong> for each ability, activates a energy shield.
            Energy shields obtained cannot regenerate health, so once destroyed it bye-bye.
            When the shape reaches MK2+, the blue shield becomes yellow.
            ABILITY IS ALSO AFFECTED BY THE FORIFIER MODULE.
            3 charges, 3 second interval, 12 second charge cooldown
            `,
            iconSource: "./images/modules/fortifier.png",
            shieldHpData: {
                base: 20e3,
                level: [0, 2e3, 4e3, 5e3, 6e3, 6e3, 6e3, 6e3, 7e3, 9e3, 10e3, 12e3],
            },
            charges: 4,
            lastingTime: 25e2,
            reload: 12e3
        },
        hardpoints: {
            light: 2,
            heavy: 1
        },
        color: "#f00",
        moduleHardpoints: 4,
        cost: {
            sliver: 0,
            gold: 75e2,
            workshopPoints: 1e3
        }
    }, {
        tier: 4,
        name: "Tan Circle",
        speed: 0.0012,
        speedLevel: [0, 0, 0, 0.0001, 0.0001, 0.0001, 0.0001, 0, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 70,
        fieldOfViewMulti: 1.4,
        desc: `
        A great shape to bully your enemies.
        Tan Circle rams into enemies, converts damage into DOT.
        Tan Circle also has resistance aganist DOT damage.
        <br><br>
        Recommended Equipment: x3 Storm + x1 Thunder
        `,
        healthData: {
            base: 160e3,
            level: [0, 12e3, 12e3, 13e3, 15e3, 16e3, 18e3, 20e3, 22e3, 25e3, 25e3, 50e3],
        },
        dotResistance: .25,
        ability: {
            name: "Stampede",
            desc: `
            <strong>Stampede</strong> unleashes the shape's turbocharged capabilities,
            transforming incoming damage into debilitating damage-over-time effects (DoT).
            However, controlling the shape becomes more challenging
            during the activation of this ability.<br><br>
            As <strong>Stampede</strong> accumulates DoT stacks,
            the robot temporarily fortifies its structural integrity,
            granting increased resistance for 20 seconds with each stack.
            You can amass a maximum of 250 Resistance Stacks.
            `,
            iconSource: "./images/stampede.png",
            damageData: {
                base: 240,
                level: [0, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570],
            },
            lastingTime: 16e3,
            reload: 6e3
        },
        hardpoints: {
            light: 3,
            heavy: 1
        },
        color: "#d2b48c",
        moduleHardpoints: 4,
        cost: {
            sliver: 1e9,
            gold: 100e3,
            workshopPoints: 10e3
        }
    }, {
        tier: 3,
        name: "Orange Pentagon",
        speed: 0.0014,
        speedLevel: [0, 0, 0, 0.0001, 0.0001, 0, 0.0001, 0, 0.0001, 0, 0.0001, 0.0001],
        scale: 55,
        fieldOfViewMulti: 1.35,
        desc: `
        Orange Pentagon has a strong yellow energy shield that doesn't repair itself.
        Great for attacking grouped up enemies.
        Orange Pentagon has a special system that makes [CINDER] deal increased damage (+25%).
        <br><br>
        Recommended Equipment: x3 Cinder
        `,
        buyDesc: `
        <br><br>
        Cost: 10.0M Silver + 7.5K Gold + 2.0K Workshop Points
        `,
        healthData: {
            base: 116e3,
            level: [0, 6e3, 6e3, 6e3, 10e3, 10e3, 10e3, 12e3, 12e3, 12e3, 12e3, 15e3],
        },
        shieldData: {
            type: "yellow",
            base: 72e4,
            level: [0, 4.8e4, 6.4e4, 8e4, 8e4, 9.6e4, 9.6e4, 11.2e4, 11.2e4, 11.2e4, 11.2e4, 11.2e4],
            regen: 0
        },
        ability: {
            name: "Overload",
            desc: `
            <strong>Overload</strong>, speeds the shape up and starts a 2 second countdown.
            After the countdown reaches 0, the robot goes boom boom and deals aoe damage, pushing back all enemies away from it.
            Cools down for 5 seconds.
            `,
            iconSource: "./images/weapons/cinder.png",
            damageData: {
                base: 12960,
                level: [0, 1296, 1296, 1944, 1944, 2592, 2592, 3240, 3240, 6480, 6480, 16200]
            },
            lastingTime: 2e3,
            reload: 5e3
        },
        hardpoints: {
            light: 0,
            heavy: 3
        },
        color: "#ffa500",
        moduleHardpoints: 4,
        cost: {
            sliver: 10e6,
            gold: 75e2,
            workshopPoints: 2e3
        }
    }, {
        tier: 3,
        name: "Black Pentagon",
        speed: 0.0012,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0, 0.0001, 0.00005, 0, 0.0001, 0.0002, 0.0002],
        scale: 60,
        fieldOfViewMulti: 1.4,
        desc: `
        Black Pentagon has the ability to decide if you need more health or to incapacitate enemies!
        <br><br>
        Recommended Equipment: x3 Devastator
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0M Silver + 7.5K Gold + 1.0K Workshop Points
        `,
        healthData: {
            base: 64e3,
            level: [0, 3e3, 3e3, 3e3, 3e3, 5e3, 5e3, 5e3, 5e3, 5e3, 8e3, 12e3],
        },
        ability: {
            name: "Paladin",
            desc: `
            <strong>Paladin</strong> gives the shape a shield for 10 seconds.
            If the shield is destroyed, it EMP's all enemies around it.
            If the shield isn't destroyed in 10 seconds:
            the shield gets removed, restored health, and extended max durability.
            Ability cools down for 12 seconds.
            `,
            iconSource: "./images/modules/fortifier.png",
            shieldHpData: {
                base: 450e3,
                level: [0, 12e3, 14e3, 15e3, 16e3, 16e3, 16e3, 16e3, 17e3, 19e3, 20e3, 22e3],
            },
            lastingTime: 10e3,
            reload: 8e3
        },
        hardpoints: {
            light: 0,
            heavy: 3
        },
        color: "#000",
        moduleHardpoints: 4,
        cost: {
            sliver: 5e6,
            gold: 75e2,
            workshopPoints: 1e3
        }
    }, {
        tier: 4,
        name: "Red Heptagon",
        speed: 0.0008,
        speedLevel: [0, 0, 0.0001, 0.0001, 0, 0, 0.0001, 0.00005, 0, 0.0001, 0.0001, 0.0001],
        scale: 120,
        fieldOfViewMulti: 3.5,
        desc: `
        The first shape able to fire 8 heavy weapons simultaneously.
        It's the true embodiment of unparalleled firepower.
        <br><br>
        Recommended Equipment: x8 Reaper / x8 Veyron
        `,
        buyDesc: `
        <br><br>
        Cost: 75.0M Silver + 25.0K Gold + 50.0K Workshop Points
        `,
        healthData: {
            base: 134e3,
            level: [0, 8e3, 8e3, 12e3, 12e3, 24e3, 24e3, 24e3, 10e3, 12e3, 15e3, 20e3],
        },
        hardpoints: {
            light: 0,
            heavy: 8
        },
        ability: {
            name: "Self Heal",
            desc: `
            <strong>Self Heal</strong> allows the robot to heal 25% of its health in 5 seconds. 
            After it heals 25%, it begins ability cooldown of 12 sec.
            `,
            iconSource: "./images/self_heal.png",
            lastingTime: 5e3,
            reload: 6e3
        },
        color: "#f00",
        moduleHardpoints: 4,
        cost: {
            sliver: 75e6,
            gold: 25e3,
            workshopPoints: 50e3
        }
    }, {
        tier: 4,
        name: "Gold Circle",
        speed: 0.001,
        speedLevel: [0, 0.0001, 0.0001, 0, 0, 0, 0.0001, 0.0001, 0.0001, 0, 0.0001, 0.0001],
        scale: 85,
        fieldOfViewMulti: 1.65,
        desc: `
        First Shape to hold more than 4 module slots.
        Gold Circle is a super tank worthy of your possession.
        The shape has the passive ability to self revive after its destruction, and
        healing is 100% more effective.
        The shape also takes next to no gray damage.
        <br><br>
        Recommended Equipment: x2 Evora + x2 Veyron
        `,
        buyDesc: `
        <br><br>
        Cost: 10.0B Silver + 250.0K Gold + 150.0K Workshop Points (WKP)
        `,
        healthData: {
            base: 234e3,
            level: [0, 9600, 12800, 12800, 12800, 12800, 16e3, 16e3, 19200, 19200, 20800, 24e3]
        },
        hardpoints: {
            light: 2,
            heavy: 2
        },
        ability: {
            name: "Grand Fortitude",
            desc: `
            <strong>Grand Fortitude</strong>, the shape leaps forward ignoring all buildings.
            Once it "stops leaping", the robot emits a wave that deals damage and emits DOT DAMAGE.
            The shape also gets extra defense points and gains a reflector during and after the ability (temp effect).
            `,
            iconSource: "./images/grand_fortitude.png",
            damageData: {
                base: 23e3,
                level: [0, 1e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3, 2e3]
            },
            dotData: {
                base: 1e3,
                level: [0, 500, 500, 500, 500, 500, 500, 1e3, 1e3, 1e3, 1e3, 1e3],
            },
            lastingTime: 0,
            reload: 6e3
        },
        dotResistance: .75,
        healingMulti: 2,
        revive: .5,
        color: "#ffd700",
        moduleHardpoints: 6,
        builtInDefensePoints: 200,
        cost: {
            sliver: 10e9,
            gold: 250e3,
            workshopPoints: 150e3
        }
    }, {
        tier: 0,
        name: "Black Hexagon",
        speed: 0.0012,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0004],
        scale: 45,
        fieldOfViewMulti: 1.15,
        desc: `
        Black Hexagon is a fast moving attacker.
        <br><br>
        Recommended Equipment: x3 Punisher
        `,
        buyDesc: `
        <br><br>
        Cost: 500 Gold
        `,
        healthData: {
            base: 32e3,
            level: [0, 1e3, 1e3, 2e3, 2e3, 2e3, 2e3, 3e3, 3e3, 3e3, 4e3, 5e3]
        },
        ability: {
            name: "Dash",
            desc: `
            <strong>Dash</strong> leaps the shape into a fixed direction.<br>
            2 Ability Charges, 5 second charge cooldown
            `,
            iconSource: "./images/dash.png",
            charges: 2,
            lastingTime: 500,
            reload: 5e3
        },
        hardpoints: {
            light: 3,
            heavy: 0
        },
        color: "#000",
        moduleHardpoints: 1,
        cost: {
            sliver: 0,
            gold: 500
        }
    }, {
        tier: 2,
        dontSell: true,
        name: "White Hexagon",
        speed: 0.0012,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001],
        scale: 65,
        fieldOfViewMulti: 1.4,
        desc: `
        White Hexagon is a tier 3 shape with the ability to take down tier 4 and tier 5 shapes!<br><br>
        Recommended Equipment: x2 Flux
        `,
        healthData: {
            base: 67e3,
            level: [0, 4e3, 4e3, 4e3, 5e3, 6e3, 6e3, 6e3, 6e3, 7e3, 7e3, 85e2],
        },
        ability: {
            name: "Divine Judgement",
            desc: `
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
            `,
            damageData: {
                base: 600,
                level: [0, 20, 20, 25, 20, 20, 20, 40, 40, 40, 40, 80],
            },
            lastingTime: 6e3,
            iconSource: "./images/weapons/flux.png",
            reload: 10e3
        },
        hardpoints: {
            light: 0,
            heavy: 2
        },
        color: "#fff",
        moduleHardpoints: 3,
        cost: {
            sliver: 2e6,
            gold: 5e3,
            workshopPoints: 5e3
        }
    }, {
        dontSell: true,
        tier: 3,
        name: "Blue Heptagon",
        speed: 0.0014,
        speedLevel: [0, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0002, 0.0002],
        scale: 75,
        fieldOfViewMulti: 1.55,
        desc: `
        This shape possesses the <strong>Infinite Void</strong> ability,
        allowing it to immobilize enemies for 12 seconds
        while making them more susceptible to damage.
        <br><br>
        Recommended Equipment: x2 Veyron + 1 Evora
        `,
        healthData: {
            base: 93e3,
            level: [0, 4e3, 4e3, 4e3, 4e3, 5e3, 6e3, 7e3, 9e3, 9e3, 10e3, 15e3],
        },
        ability: {
            name: "Domain Expansion: Infinite Void",
            desc: `
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
            The domain's effect persists for a duration of 12 seconds,
            providing its protective influence and advantages.
            Ability cools down for 28 seconds.
            `,
            lastingTime: 12e3,
            iconSource: "./images/infinite_void.png",
            reload: 22e3
        },
        hardpoints: {
            light: 1,
            heavy: 2
        },
        color: "#00f",
        moduleHardpoints: 4,
        cost: {
            sliver: 15e6,
            gold: 7500,
            workshopPoints: 10e3
        }
    }];
    function defensePointsToResistance(defense) {
        return (100) / (100 + defense);
    }
    class weapon {
        constructor(data, ownerSID = null, slot = null) {
            this.tier = data.tier;
            this.owner = ownerSID;
            this.name = data.name;
            this.desc = data.desc;
            this.projType = data.projType;
            this.dmg = data.damageData ? data.damageData.base : data.dmg;
            this.fireRate = data.fireRate;
            this.slot = slot;
            this.ammo = this.maxammo = data.ammo;
            this.type = data.type;
            this.range = data.range;
            this.reload = data.reload;
            this.imageSource = data.imageSource;
            this.level = 1;
            this.continuousReload = data.continuousReload;
            this.aoeRange = data.aoeRange;
            this.dotDamage = data.dotData ? data.dotData.base : data.dotDamage;
            this.effectIncrease = data.effectIncreaseData ? data.effectIncreaseData.base : data.effectIncrease;
            this.sellPrice = 0;
            this.enhanceCost = (this.tier + 1) * 15e2;
            if (data.cost) {
                this.sellPrice += data.cost.sliver * .75;
                if (data.cost.gold && data.cost.gold > 0) {
                    this.sellPrice += 1250 * data.cost.gold;
                }
            }
        }
    }
    var weaponData = [{
        tier: 0,
        name: "Punisher",
        type: "Light",
        projType: "normal",
        desc: `
        Multi-barreled machine gun with a high rate of fire. Great at close range.
        `,
        damageData: {
            base: 128,
            level: [0, 25, 25, 32, 39, 40, 44, 45, 55, 57, 59, 65],
        },
        imageSource: "./images/weapons/punisher.png",
        fireRate: 62.5,
        ammo: 220,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 30e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Landslide",
        type: "Light",
        projType: "rocket",
        desc: `
        Close range rocket launcher with high rate of fire. 
        Rockets deal aoe damage and are effective againist groups of enemies. 
        Improved reloading mechanics makes this weapon reload while firing.
        `,
        damageData: {
            base: 560,
            level: [0, 80, 83, 86, 90, 102, 113, 132, 132, 139, 149, 150],
        },
        continuousReload: true,
        imageSource: "./images/weapons/landslide.png",
        aoeRange: 60,
        fireRate: 50,
        ammo: 40,
        reload: 300,
        range: 600,
        cost: {
            sliver: 230e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Shocker",
        type: "Heavy",
        projType: "normal",
        desc: `
        Far ranged weapon used to target enemies at far distances.
        `,
        damageData: {
            base: 900,
            level: [0, 210, 220, 240, 260, 260, 268, 280, 300, 310, 322, 330],
        },
        imageSource: "./images/weapons/shocker.png",
        fireRate: 334,
        ammo: 6,
        reload: 5e3,
        range: 3200,
        cost: {
            sliver: 190e3,
            gold: 0
        }
    }, {
        tier: 1,
        name: "Destroyer",
        type: "Heavy",
        projType: "normal",
        desc: `
        Large heavy multi-barreled machine gun. 
        Great at close range since bullets disperse due to high fire rate. 
        Each round shoots 2 projectiles.
        `,
        buyDesc: `
        <br><br>
        Cost: 500 Gold
        `,
        damageData: {
            base: 77,
            level: [0, 34, 38, 38, 41, 41, 59, 59, 66, 75, 85, 95],
        },
        imageSource: "./images/weapons/destroyer.png",
        fireRate: 50,
        ammo: 300,
        reload: 55e2,
        range: 1400,
        cost: {
            sliver: 0,
            gold: 500
        }
    }, {
        tier: 1,
        name: "Avalanche",
        type: "Heavy",
        projType: "rocket",
        desc: `
        Fast firing heavy rocket launcher. AOE Damage makes it a great weapon aganist grouped enemies.
        Improved reloading mechanics makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 750 Gold
        `,
        damageData: {
            base: 1e3,
            level: [0, 1e2, 140, 177, 190, 211, 222, 234, 255, 266, 288, 300],
        },
        continuousReload: true,
        imageSource: "./images/weapons/avalanche.png",
        aoeRange: 40,
        fireRate: 75,
        ammo: 20,
        reload: 600,
        range: 800,
        cost: {
            sliver: 0,
            gold: 750
        }
    }, {
        tier: 2,
        name: "Hawk",
        type: "Light",
        desc: `
        Light laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        Weapon ignores walls and all shields.
        `,
        buyDesc: `
        <br><br>
        Cost: 2.0K Gold
        `,
        damageData: {
            base: 260,
            level: [0, 30, 33, 33, 39, 39, 49, 59, 66, 77, 88, 100],
        },
        imageSource: "./images/weapons/hawk.png",
        fireRate: 200,
        ammo: 30,
        reload: 5e3,
        range: 1000,
        cost: {
            sliver: 0,
            gold: 2e3
        }
    }, {
        tier: 2,
        name: "Eagle",
        type: "Heavy",
        desc: `
        Heavy laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        Weapon ignores walls and all shields.
        `,
        buyDesc: `
        <br><br>
        Cost: 2.0K Gold
        `,
        damageData: {
            base: 218,
            level: [0, 46, 51, 51, 55, 55, 79, 79, 89, 101, 114, 127],
        },
        imageSource: "./images/weapons/eagle.png",
        fireRate: 100,
        ammo: 60,
        reload: 5e3,
        range: 1000,
        cost: {
            sliver: 0,
            gold: 2e3
        }
    }, {
        tier: 2,
        name: "Viper",
        type: "Heavy",
        projType: "normal",
        desc: `
        Large heavy multi-barreled machine gun.
        Projectiles are coated with a small layer of enzymes that corrode metal.
        Each hit emits DOT effect damage that bypasses defense systems of enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        damageData: {
            base: 264,
            level: [0, 34, 34, 38, 48, 48, 54, 54, 62, 68, 102, 102],
        },
        dotData: {
            base: 30,
            level: [0, 10, 10, 20, 20, 20, 20, 30, 30, 30, 40, 40],
        },
        imageSource: "./images/weapons/viper.png",
        fireRate: 40,
        ammo: 100,
        reload: 5e3,
        range: 1400,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Atomizer",
        type: "Light",
        projType: "energy",
        desc: `
        Light energy machine gun.
        Unlimited ammo.
        Longer it fires, the slower and less accurate it becomes.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 536,
            level: [0, 51, 56, 60, 65, 75, 76, 85, 94, 104, 113, 130],
        },
        imageSource: "./images/weapons/atomizer.png",
        fireRate: 50,
        ammo: 1e300,
        reload: 0,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Nucleon",
        type: "Heavy",
        projType: "energy",
        desc: `
        Heavy energy machine gun.
        Unlimited ammo.
        Longer it fires, the slower and less accurate it becomes.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 632,
            level: [0, 82, 88, 102, 113, 121, 144, 157, 171, 184, 184, 185]
        },
        imageSource: "./images/weapons/nucleon.png",
        fireRate: 75,
        ammo: 1e300,
        reload: 0,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 2,
        name: "Sting",
        type: "Light",
        projType: "normal",
        desc: `
        Large light multi-barreled machine gun.
        Projectiles are coated with a small layer of enzymes that corrode metal.
        Each hit emits DOT effect damage that bypasses defense systems of enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        damageData: {
            base: 158,
            level: [0, 10, 10, 12, 14, 14, 16, 16, 18, 20, 30, 30],
        },
        dotData: {
            base: 18,
            level: [0, 4, 4, 8, 8, 8, 8, 12, 12, 12, 16, 16],
        },
        imageSource: "./images/weapons/sting.png",
        fireRate: 40,
        ammo: 100,
        reload: 5e3,
        range: 1400,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Thunder",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy shotgun.
        Shoots 25 projectiles per burst.
        Improved reloading mechanic makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 244,
            level: [0, 33, 33, 33, 44, 44, 44, 55, 55, 66, 66, 77]
        },
        imageSource: "./images/weapons/thunder.png",
        continuousReload: true,
        fireRate: 250,
        ammo: 10,
        reload: 1250,
        range: 800,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Storm",
        projType: "normal",
        type: "Light",
        desc: `
        Light shotgun.
        Shoots 15 projectiles per burst.
        Improved reloading mechanic makes this weapon reload while firing.
        `,
        damageData: {
            base: 171,
            level: [0, 23, 23, 23, 31, 31, 31, 39, 39, 46, 46, 54]
        },
        imageSource: "./images/weapons/storm.png",
        continuousReload: true,
        fireRate: 125,
        ammo: 20,
        reload: 625,
        range: 800,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 2,
        name: "Cinder",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy AOE damage weapon.
        This weapon fires pulses of high temperature heat waves to damage enemies.
        Although the heat waves are high in temperature it isn't high enough to cause any DOT damage.
        Due to the speciality of this weapon, it can reload while firing.
        `,
        damageData: {
            base: 1080,
            level: [0, 90, 135, 180, 180, 180, 225, 225, 225, 270, 270, 270]
        },
        imageSource: "./images/weapons/cinder.png",
        continuousReload: true,
        fireRate: 100,
        ammo: 20,
        reload: 300,
        range: 500,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Blaze",
        type: "Light",
        projType: "energy",
        desc: `
        Light compact flamethower that's good at close range.
        Ignores blue energy shields.
        Flames also deal small DOT Damage.
        `,
        damageData: {
            base: 190,
            level: [0, 40, 40, 40, 40, 80, 80, 80, 120, 120, 160, 160]
        },
        dotData: {
            base: 9,
            level: [0, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8],
        },
        imageSource: "./images/weapons/blaze.png",
        fireRate: 50,
        ammo: 125,
        reload: 3e3,
        range: 600,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Ember",
        type: "Heavy",
        projType: "energy",
        desc: `
        Heavy compact flamethower that's good at close range.
        Ignores blue energy shields.
        Flames also deal small DOT Damage.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        damageData: {
            base: 474,
            level: [0, 100, 100, 100, 100, 200, 200, 200, 300, 300, 400, 400]
        },
        dotData: {
            base: 18,
            level: [0, 4, 4, 8, 8, 8, 8, 12, 12, 16, 16, 16],
        },
        imageSource: "./images/weapons/ember.png",
        fireRate: 25,
        ammo: 250,
        reload: 3e3,
        range: 600,
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Slumber",
        type: "Light",
        projType: "normal",
        desc: `
        A light fast firing machine gun. Bullets gives effects that slow down enemies.
        `,
        damageData: {
            base: 315,
            level: [0, 52, 52, 79, 79, 105, 105, 131, 131, 158, 210, 236],
        },
        imageSource: "./images/weapons/slumber.png",
        fireRate: 25,
        ammo: 45,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Delay",
        type: "Heavy",
        projType: "normal",
        desc: `
        A heavy fast firing machine gun. Bullets gives effects that slow down enemies.
        `,
        damageData: {
            base: 900,
            level: [0, 150, 150, 225, 225, 300, 300, 375, 375, 450, 600, 675],
        },
        imageSource: "./images/weapons/delay.png",
        fireRate: 25,
        ammo: 45,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Rime",
        type: "Light",
        projType: "rocket",
        desc: `
        Light freezing rockets that deal damage.
        Each rocket deals freezing damage and gives the enemy freezing effect.
        Once the effect reaches X stacks, the enemy will be frozen for 1 second.
        `,
        damageData: {
            base: 208,
            level: [0, 32, 33, 34, 36, 41, 45, 53, 53, 56, 60, 60]
        },
        continuousReload: true,
        imageSource: "./images/weapons/rime.png",
        aoeRange: 50,
        fireRate: 25,
        ammo: 80,
        reload: 300,
        range: 800,
        cost: {
            sliver: 1e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Glacier",
        type: "Heavy",
        projType: "rocket",
        desc: `
        Heavy freezing rockets that deal damage.
        Each rocket deals freezing damage and gives the enemy freezing effect.
        Once the effect reaches X stacks, the enemy will be frozen for 1 second.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0M Sliver + 5.0K Gold
        `,
        damageData: {
            base: 362,
            level: [0, 48, 50, 51, 54, 62, 68, 80, 80, 84, 90, 90]
        },
        continuousReload: true,
        imageSource: "./images/weapons/glacier.png",
        aoeRange: 50,
        fireRate: 25,
        ammo: 80,
        reload: 300,
        range: 800,
        cost: {
            sliver: 1e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Devastator",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy sonic shotgun that fires 7 projectiles per burst.
        Each impact of the sonic blasts would knockback enemies.
        Due to how sonic blast waves work, the knockback is high but the range is small.
        `,
        damageData: {
            base: 2067,
            level: [0, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119]
        },
        imageSource: "./images/weapons/devastator.png",
        continuousReload: true,
        fireRate: 400,
        ammo: 5,
        reload: 900,
        range: 500,
        cost: {
            sliver: 5e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Scatter",
        projType: "normal",
        type: "Light",
        desc: `
        Light sonic shotgun that fires 7 projectiles per burst.
        Each impact of the sonic blasts would knockback enemies.
        Due to how sonic blast waves work, the knockback is high but the range is small.
        `,
        damageData: {
            base: 992,
            level: [0, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58]
        },
        imageSource: "./images/weapons/scatter.png",
        continuousReload: true,
        fireRate: 400,
        ammo: 5,
        reload: 900,
        range: 500,
        cost: {
            sliver: 5e6,
            gold: 5e3
        }
    }, {
        tier: 4,
        name: "Evora",
        projType: "normal",
        type: "Light",
        desc: `
        Light sonic machine gun that fires 2 projectiles per burst.
        After 2 seconds of continuous fire, the weapon goes into increased firing state, and fires x1.5 faster.
        The sonic blasts that are shot only deal [GRAY DAMAGE].
        `,
        damageData: {
            base: 300,
            level: [0, 50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60]
        },
        imageSource: "./images/weapons/evora.png",
        fireRate: 50,
        ammo: 125,
        reload: 6e3,
        range: 1200,
        cost: {
            sliver: 5e6,
            gold: 20e3,
            workshopPoints: 75e2
        }
    }, {
        tier: 4,
        name: "Veyron",
        projType: "normal",
        type: "Heavy",
        desc: `
        Heavy sonic machine gun that fires 2 projectiles per burst.
        After 2 seconds of continuous fire, the weapon goes into increased firing state, and fires x1.5 faster.
        The sonic blasts that are shot only deal [GRAY DAMAGE].
        `,
        damageData: {
            base: 600,
            level: [0, 100, 100, 100, 100, 100, 120, 120, 120, 120, 120, 120]
        },
        imageSource: "./images/weapons/veyron.png",
        fireRate: 50,
        ammo: 125,
        reload: 6e3,
        range: 1200,
        cost: {
            sliver: 50e6,
            gold: 20e3,
            workshopPoints: 75e2
        }
    }, {
        tier: 3,
        name: "Reaper",
        type: "Heavy",
        projType: "normal",
        desc: `
        Far ranged weapon used to target enemies at far distances.
        Bullets are coated with high layers of special material,
        that makes it bypass [REFLECTOR] and 50% of all [DEFENSE POINTS].
        `,
        damageData: {
            base: 1500,
            level: [0, 125, 125, 150, 150, 150, 150, 175, 175, 200, 200, 200],
        },
        imageSource: "./images/weapons/reaper.png",
        fireRate: 100,
        ammo: 20,
        reload: 25e2,
        range: 3800,
        cost: {
            sliver: 20e6,
            gold: 5e3,
            workshopPoints: 5e3
        }
    }, {
        tier: 3,
        dontSell: true,
        name: "Flux",
        type: "Heavy",
        projType: "energy",
        desc: `
        The Flux is a formidable multi-barreled machine gun with an astonishingly high rate of fire.
        What sets this weapon apart is its unique damage amplification,
        which is intricately tied to the maximum health and tier of the targets it strikes.
        `,
        damageData: {
            base: 88,
            level: [0, 12, 12, 18, 18, 18, 18, 24, 24, 24, 36, 48]
        },
        imageSource: "./images/weapons/flux.png",
        fireRate: 50,
        ammo: 200,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 5e6,
            gold: 5e3,
            workshopPoints: 5e3
        }
    }, {
        dontSell: true,
        tier: 3,
        name: "Incinerator",
        type: "Heavy",
        projType: "rocket",
        desc: `
        A long-range incendiary heavy rocket launcher,
        each direct hit from its rockets accumulates a
        potent "blast effect." When the target's blast
        threshold is reached, it detonates,
        causing area-of-effect damage not only to itself but also to
        nearby allies of the target.
        `,
        damageData: {
            base: 800,
            level: [0, 80, 83, 86, 90, 102, 113, 132, 132, 139, 149, 150],
        },
        effectIncreaseData: {
            base: 2,
            level: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        },
        continuousReload: true,
        imageSource: "./images/weapons/incinerator.png",
        aoeRange: 80,
        fireRate: 100,
        ammo: 16,
        reload: 300,
        range: 1200,
        cost: {
            sliver: 5e6,
            gold: 5e3,
            workshopPoints: 2e3
        }
    }, {
        dontSell: true,
        tier: 3,
        name: "Scald",
        type: "Light",
        projType: "rocket",
        desc: `
        A long-range incendiary light rocket launcher,
        each direct hit from its rockets accumulates a
        potent "blast effect." When the target's blast
        threshold is reached, it detonates,
        causing area-of-effect damage not only to itself but also to
        nearby allies of the target.
        `,
        damageData: {
            base: 300,
            level: [0, 30, 33, 36, 40, 52, 73, 92, 92, 99, 109, 120],
        },
        effectIncreaseData: {
            base: 1,
            level: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
        continuousReload: true,
        imageSource: "./images/weapons/scald.png",
        aoeRange: 60,
        fireRate: 100,
        ammo: 8,
        reload: 300,
        range: 1200,
        cost: {
            sliver: 5e6,
            gold: 5e3,
            workshopPoints: 2e3
        }
    }];
    class module {
        constructor(data, ownerSID = null, slot = null) {
            this.name = data.name;
            this.owner = ownerSID;
            this.slot = slot;
            this.desc = data.desc;
            this.tier = data.tier;
            this.imageSource = data.imageSource;
            this.level = 1;
            this.healthIncrease = data.healthIncrease;
            if (data.healthIncreaseData) {
                this.healthIncrease = data.healthIncreaseData.base;
            }
            this.selfFixRepair = data.selfFixRepair;
            if (data.selfFixRepairData) {
                this.selfFixRepair = data.selfFixRepairData.base;
            }
            this.dmgIncrease = data.dmgIncrease;
            if (data.dmgIncreaseData) {
                this.dmgIncrease = data.dmgIncreaseData.base;
            }
            this.immunePercent = data.immunePercent;
            if (data.immunePercentData) {
                this.immunePercent = data.immunePercentData.base;
            }
            this.lastingTime = data.lastingTime;
            if (data.lastingTimeData) {
                this.lastingTime = data.lastingTimeData.base;
            }
            this.shieldRegen = data.shieldRegen;
            if (data.shieldRegenData) {
                this.shieldRegen = data.shieldRegenData.base;
            }
            this.baseDefensePoints = data.baseDefensePoints;
            if(data.baseDefensePointsData) {
                this.baseDefensePoints = data.baseDefensePointsData.base;
            }
            this.durabilityLostAmp = data.durabilityLostAmp;
            if(data.durabilityLostAmpData) {
                this.durabilityLostAmp = data.durabilityLostAmpData.base;
            }
            this.increasedDefensePoints = data.increasedDefensePoints;
            if(data.increasedDefensePointsData) {
                this.increasedDefensePoints = data.increasedDefensePointsData.base;
            }
            this.shieldHealth = data.shieldHealth;
            if (data.shieldHealthData) {
                this.shieldHealth = data.shieldHealthData.base;
            }
            this.grayDamageDecrease = data.grayDamageDecreaseData;
            if (data.grayDamageDecreaseData) {
                this.grayDamageDecrease = data.grayDamageDecreaseData.base;
            }
            this.antiControl = data.antiControl;
            if(data.antiControlData) {
                this.antiControl = data.antiControlData.base;
            }
        }
    }
    var moduleData = [{
        tier: 0,
        name: "Armor Plating",
        desc: `
        Increases shape's durability.
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Sliver
        `,
        healthIncreaseData: {
            base: 0.02,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/modules/armor_plating.png",
        cost: {
            sliver: 500e3,
            gold: 0
        }
    }, {
        tier: 1,
        name: "Heavy Armor Plating",
        desc: `
        Heavy armor kit, allows for even more protection to your shapes.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0K Gold
        `,
        healthIncreaseData: {
            base: 0.07,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/modules/heavy_armor_plating.png",
        cost: {
            sliver: 0,
            gold: 1e3
        }
    }, {
        tier: 2,
        name: "Self Fix Unit",
        desc: `
        Repairs a portion of a shape's maximum durability each second.
        `,
        buyDesc: `
        <br><br>
        Cost: 2K Gold
        `,
        selfFixRepairData: {
            base: 360,
            level: [0, 180, 180, 180, 520, 560]
        },
        imageSource: "./images/modules/self_fix_unit.png",
        cost: {
            sliver: 0,
            gold: 2e3
        }
    }, {
        tier: 0,
        name: "Nuclear Reactor",
        desc: `
        Increases shape's weapon damage output.
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Sliver
        `,
        dmgIncreaseData: {
            base: 0.02,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/modules/nuclear_reactor.png",
        cost: {
            sliver: 500e3,
            gold: 0
        }
    }, {
        tier: 1,
        name: "Thermonuclear Reactor",
        desc: `
        Thermonuclear Reactor, increases weapon damage output even more.
        `,
        buyDesc: `
        <br><br>
        Cost: 1.0K Gold
        `,
        dmgIncreaseData: {
            base: 0.05,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/thermonuclear_reactor.png",
        cost: {
            sliver: 0,
            gold: 1e3
        }
    }, {
        tier: 3,
        name: "Arc Reactor",
        desc: `
        Arc Reactor, provies huge bounce to damage but decreases health.
        `,
        buyDesc: `
        <br><br>
        Cost: 3.0K Gold
        `,
        dmgIncreaseData: {
            base: 0.1,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        healthIncreaseData: {
            base: -0.1,
            level: [0, -0.02, -0.02, -0.02, -0.02, -0.02]
        },
        imageSource: "./images/modules/arc_reactor.png",
        cost: {
            sliver: 0,
            gold: 3e3
        }
    }, {
        tier: 3,
        name: "Balance Unit",
        desc: `
        Increases shape's durability and weapon damage output.
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        healthIncreaseData: {
            base: 0.05,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        dmgIncreaseData: {
            base: 0.04,
            level: [0, 0.01, 0.01, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/balance_unit.png",
        cost: {
            sliver: 0,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Last Stand",
        desc: `
        Once the shape enters low durability, it stops the shape from taking damage for X seconds.
        Only can be used once.
        More modules you put, the quicker you would get the immunity.
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold
        `,
        immunePercentData: {
            base: 0.05,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        lastingTimeData: {
            base: 2e3,
            level: [0, 500, 500, 500, 500, 500]
        },
        imageSource: "./images/modules/last_stand.png",
        cost: {
            sliver: 25e6,
            gold: 5e3
        }
    }, {
        tier: 2,
        name: "Fortifier",
        desc: `
        Increases the regen speed and durability of shields.
        `,
        buyDesc: `
        <br><br>
        Cost: 500.0K Silver + 2.0K Gold
        `,
        shieldHealthData: {
            base: 0.1,
            level: [0, 0.05, 0.05, 0.05, 0.05, 0.05]
        },
        shieldRegenData: {
            base: 0.1,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/fortifier.png",
        cost: {
            sliver: 500e3,
            gold: 2e3
        }
    }, {
        tier: 3,
        name: "Damage Controller",
        desc: `
        Increases shape health and decreases gray damage taken.
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold
        `,
        healthIncreaseData: {
            base: 0.03,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        grayDamageDecreaseData: {
            base: 0.05,
            level: [0, 0.02, 0.02, 0.02, 0.02, 0.02]
        },
        imageSource: "./images/modules/damage_controller.png",
        cost: {
            sliver: 25e6,
            gold: 5e3
        }
    }, {
        tier: 3,
        name: "Repair Amplifier",
        desc: `
        When receiving damage, your shape gains a 0.05% bonus to regeneration for the entire battle.
        When the maximum bonuses are reached, the robot gains increased defense points and restores a percentage of gray damage.
        When installing several such modules, the speed of receiving bonuses increases, but not their maximum value.<br><br>
        MAX STACKS: 60
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold + 10.0K Workshop Points
        `,
        baseDefensePointsData: {
            base: 5,
            level: [0, 4, 4, 4, 4, 4]
        },
        durabilityLostAmpData: {
            base: 0.08,
            level: [0, -0.01, -0.01, -0.01, -0.01, -0.01]
        },
        increasedDefensePointsData: {
            base: 5,
            level: [0, 8, 8, 8, 8, 8]
        },
        imageSource: "./images/modules/repair_amplifier.png",
        cost: {
            sliver: 25e6,
            gold: 5e3,
            workshopPoints: 10e3
        }
    }, {
        tier: 3,
        name: "Anti Control",
        desc: `
        Reduces the duration of negative effects.
        When installing several such modules, the bonus won't stack.
        `,
        buyDesc: `
        <br><br>
        Cost: 25.0M Silver + 5.0K Gold + 10.0K Workshop Points
        `,
        antiControlData: {
            base: .25,
            level: [0, 0.1, 0.1, 0.1, 0.1, 0.1]
        },
        imageSource: "./images/modules/anticontrol.png",
        cost: {
            sliver: 25e6,
            gold: 5e3,
            workshopPoints: 10e3
        }
    }];
    function abbreviateNumber(value) {
        if (value >= 1e12) {
            return (value / 1e12).toFixed(1) + "T";
        } else if (value >= 1e9) {
            return (value / 1e9).toFixed(1) + "B";
        } else if (value >= 1e6) {
            return (value / 1e6).toFixed(1) + "M";
        } else if (value >= 1e3) {
            return (value / 1e3).toFixed(1) + "K";
        }
        return value;
    }
    function updateMoneyDisplay(index, value, type) {
        if (index && index.includes("token")) {
            if(index == "token 1") {
                player.tokens.mk1 += value;
            }else if(index == "token 2") {
                player.tokens.mk2 += value;
            }else {
                player.tokens.mk3 += value;
            }
        }else if (player[index] != null) player[index] += value;
        document.getElementById("moneyDisplay").innerHTML = `
        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${agSource}');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${abbreviateNumber(player.sliver)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-200}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${auSource}');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
        ${abbreviateNumber(player.gold)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2+75}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${abbreviateNumber(player.workshopPoints)}
        </div>
        </div>
        `;
        document.getElementById("money2Display").innerHTML = `
        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2+10}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/tokens/mk2_token.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${abbreviateNumber(player.tokens.mk2)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-135}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/tokens/mk1_token.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${abbreviateNumber(player.tokens.mk1)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2-280}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${keysSource}');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${abbreviateNumber(player.keys)}
        </div>
        </div>

        <div style="position: absolute; top: 5px; left: ${window.innerWidth/2+155}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/tokens/mk3_token.png');">
        </div>
        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
        ${abbreviateNumber(player.tokens.mk3)}
        </div>
        </div>
        `;
        //
        /*      
          Silver: ${abbreviateNumber(player.sliver)} | League: ${player.league}<br>
        Gold: ${abbreviateNumber(player.gold)} | Workshop Points: ${player.workshopPoints >= 100e3 ? abbreviateNumber(player.workshopPoints) : player.workshopPoints}<br>
        Keys: ${abbreviateNumber(player.keys)} | Tokens: ${player.tokens.mk1} (MK1), ${player.tokens.mk2} (MK2), ${player.tokens.mk3} (MK3)
*/
        if (index) saveGameData();
    }
    const effectThresholds = {
        freeze: 50,
        blast: 125
    };
    updateMoneyDisplay();
    var pixelDensity = 1;
    function resize() {
        if (player.gameMode >= 0) {
            updateChooseSlots();
        }else {
            updateMoneyDisplay();
        }
        if(player.shapes.length) updateSlots();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let scaleFillNative = Math.max(window.innerWidth / maxScreen.x, window.innerHeight / maxScreen.y) * pixelDensity;
        canvas.width = window.innerWidth * pixelDensity;
        canvas.height = window.innerHeight * pixelDensity;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.setTransform(
            scaleFillNative, 0,
            0, scaleFillNative,
            (window.innerWidth * pixelDensity - (maxScreen.x * scaleFillNative)) / 2,
            (window.innerHeight * pixelDensity - (maxScreen.y * scaleFillNative)) / 2
        );
    }
    window.addEventListener("resize", resize);
    resize();
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    if (player.shapes.length == 0) {
        player.shapes.push(new shape(shapeData[0], 0));
        player.weapons.push(new weapon(weaponData[0], 0, 0));
        player.weapons.push(new weapon(weaponData[0], 0, 1));
    }
    function renderStar(ctxt, spikes, outer, inner) {
        let rot = Math.PI / 2 * 3;
        let x, y;
        let step = Math.PI / spikes;
        ctxt.beginPath();
        ctxt.moveTo(0, -outer);
        for (var i = 0; i < spikes; i++) {
            x = Math.cos(rot) * outer;
            y = Math.sin(rot) * outer;
            ctxt.lineTo(x, y);
            rot += step;
            x = Math.cos(rot) * inner;
            y = Math.sin(rot) * inner;
            ctxt.lineTo(x, y);
            rot += step;
        }
        ctxt.lineTo(0, -outer);
        ctxt.closePath();
    }
    function renderCircle(x, y, scale, ctxt, dontStroke, dontFill, color, lineColor, lineWidth) {
        ctxt = ctxt || ctx;
        ctxt.lineWidth = lineWidth || 5.5;
        ctxt.strokeStyle = lineColor || "#000";
        ctxt.fillStyle = color;
        ctxt.beginPath();
        ctxt.arc(x, y, scale, 0, 2 * Math.PI);
        if (!dontFill) ctxt.fill();
        if (!dontStroke) ctxt.stroke();
    }
    var shapeSprites = {};
    var arrow_1_left = "./images/arrows/arrow_1_left.png";
    var arrow_1_right = "./images/arrows/arrow_1_right.png";
    function exportProgress() {
        let content = {};
        content.shapeSids = shapeSids;
        content.shapes = [];
        for (let i = 0; i < player.shapes.length; i++) {
            let shape = player.shapes[i];
            content.shapes.push({
                name: shape.name,
                sid: shape.sid,
                level: shape.level,
                slot: shape.slot
            });
        }
        content.weapons = [];
        for (let i = 0; i < player.weapons.length; i++) {
            let weapon = player.weapons[i];
            content.weapons.push({
                name: weapon.name,
                owner: weapon.owner,
                slot: weapon.slot,
                level: weapon.level
            });
        }
        content.modules = [];
        for (let i = 0; i < player.modules.length; i++) {
            let MODLUE = player.modules[i];
            content.modules.push({
                name: MODLUE.name,
                owner: MODLUE.owner,
                slot: MODLUE.slot,
                level: MODLUE.level
            });
        }
        console.log(microchips)
        content.chips = [];
        for (let i = 0; i < microchips.length; i++) {
            let CHIP = microchips[i];
            content.chips.push({
                name: CHIP.name,
                owner: CHIP.owner,
                slot: CHIP.slot,
                level: CHIP.level,
                NEW: 2
            });
        }
        content.tokens = JSON.stringify(player.tokens);
        content.ULIMATEXP = player.ULIMATEXP;
        content.slotData = JSON.stringify(slotData);
        content.league = player.league;
        content.keys = player.keys;
        content.sliver = player.sliver;
        content.gold = player.gold;
        content.workshopPoints = player.workshopPoints;
        content.workshopQueue = JSON.stringify(workshopQueue);
        content.operationData = JSON.stringify(operationData);
        content.tasks = JSON.stringify(tasks);
        content = JSON.stringify(content);
        let blob = new Blob([content], { type: "text/plain" });
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.download = "PROGRESS.txt";
        link.click();
        window.URL.revokeObjectURL(url);
    }
    /*function isBase64(str) {
        try {
            return btoa(atob(str)) === str;
        } catch (err) {
            return false;
        }
    }*/
    function importProgress(content) {
        player.shapes = [];
        player.weapons = [];
        player.modules = [];
        microchips = [];
        for (let i = 0; i < content.shapes.length; i++) {
            let data = content.shapes[i];
            if (data) {
                try {
                    let sid = shapeSids;
                    let Shape = shapeData.find(e => data.name == e.name);
                    let newShape = new shape(Shape, data.slot);
                    newShape.slot = data.slot;
                    if (data.slot) {
                        slotData[data.slot].unlocked = true;
                        slotData[data.slot].used = true;
                    }
                    newShape.sid = data.sid;
                    if (newShape.sid == undefined || newShape.sid == null) {
                        newShape.sid = sid;
                    }
                    for (let t = 0; t < data.level - 1; t++) {
                        upgradeShape(newShape, true);
                    }
                    player.shapes.push(newShape);
                } catch (e) {
                }
            }
        }
        for (let i = 0; i < content.weapons.length; i++) {
            let data = content.weapons[i];
            if (data) {
                let Weapon = weaponData.find(e => data.name == e.name);
                let newWeapon = new weapon(Weapon, data.owner, data.slot);
                let shapeSid = player.shapes.find(e => e.sid == data.owner);
                if (!shapeSid) {
                    newWeapon.owner = null;
                    newWeapon.slot = null;
                }
                for (let t = 0; t < data.level - 1; t++) {
                    upgradeWeapon(newWeapon, null, null, true);
                }
                player.weapons.push(newWeapon);
            }
        }
        for (let i = 0; i < content.modules.length; i++) {
            let data = content.modules[i];
            if (data) {
                let Module = moduleData.find(e => data.name == e.name);
                let newModule = new module(Module, data.owner, data.slot);
                let shapeSid = player.shapes.find(e => e.sid == data.owner);
                if (!shapeSid) {
                    newModule.owner = null;
                    newModule.slot = null;
                }
                for (let t = 0; t < data.level - 1; t++) {
                    upgradeModule(newModule, null, null, true);
                }
                player.modules.push(newModule);
            }
        }
        for (let i = 0; i < content.chips.length; i++) {
            let data = content.chips[i];
            if (data && data.NEW && data.NEW == 2) {
                try {
                    let Micro = microshipData.find(e => data.name == e.name);
                    let newModule = new microchip(Micro, data.owner, data.slot);
                    let shapeSid = player.shapes.find(e => e.sid == data.owner);
                    if (!shapeSid) {
                        newModule.owner = null;
                        newModule.slot = null;
                    }
                    for (let t = 0; t < data.level; t++) {
                        upgradeMicrochip(newModule);
                    }
                    microchips.push(newModule);
                }catch(e) {
                    microchips = [];
                }
            }
        }
        if (content.workshopPoints != null) {
            player.workshopPoints = content.workshopPoints;
        }
        if(content.tokens) {
            player.tokens = JSON.parse(content.tokens);
        }
        if (content.workshopQueue) {
            workshopQueue = JSON.parse(content.workshopQueue);
        }
        if (content.slotData) {
            content.slotData = JSON.parse(content.slotData);
            slotData = [...content.slotData];
        }
        if (content.league) {
            player.league = content.league;
        } else {
            player.league = 0;
        }
        if (content.tasks) {
            tasks = JSON.parse(content.tasks);
        }
        if (content.operationData) {
            operationData = JSON.parse(content.operationData);
            let hasKeys = operationData.data.find(e => e.type == "token 1");
            if (!hasKeys) {
                generateOperation();
                addOperationXP(10e3);
            }
        }
        if (!content.ULIMATEXP && content.ULIMATEXP != null && !isNaN(content.ULIMATEXP)) {
            player.ULIMATEXP = content.ULIMATEXP;
        }
        player.keys = content.keys;
        player.sliver = content.sliver;
        player.gold = content.gold;
        updateMoneyDisplay();
        if (content.shapeSids && content.shapeSids != "NaN") {
            shapeSids = content.shapeSids;
        }
        updateSlots();
        saveGameData();
    }
    window.exportProgress = exportProgress;
    var dmghealtext = true;
    document.getElementById("settingsToggle").onclick = function () {
        document.getElementById("sideDisplay").innerHTML = `
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
        Damage/Healing Text: <input type="checkbox" id="dmghealtext" checked><br>
        Quality Settings: <select id="Quality">
        <option value = ".1" >Very Low</option>
        <option value = ".25" >Low</option>
        <option value = ".5" selected>Normal</option>
        <option value = ".75" >High</option>
        <option value = "1" >Very High</option>
        </select>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `;
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("backButton").onclick = function () {
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").style.display = "block";
        }
        document.getElementById("Quality").onchange = function() {
            pixelDensity = document.getElementById("Quality").value;
        }
        document.getElementById("dmghealtext").checked = dmghealtext;
        document.getElementById("dmghealtext").onclick = function() {
            dmghealtext = !dmghealtext;
        }
        document.getElementById("resetProgress").onclick = function () {
            if (document.getElementById("confirma123sdasd").checked && document.getElementById("confirmasd2asd").checked && document.getElementById("confirmasdasd").checked) {
                operationData = {
                    xp: 0,
                    currentIndex: 0,
                    data: []
                };
                workshopQueue = [];
                tasks = [];
                microchips = [];
                player = {
                    sliver: 200e3,
                    gold: 250,
                    keys: 1e3,
                    shapes: [],
                    weapons: [],
                    modules: [],
                    gameMode: -1,
                    ULIMATEXP: 0,
                    workshopPoints: 0,
                    league: 0,
                    tokens: {
                        mk1: 0,
                        mk2: 0,
                        mk3: 0
                    }
                };
                shapeSids = 0;
                slotData = [{unlocked: true,used: true,cost: 0}, {unlocked: false,used: false,cost: 50}, {unlocked: false,used: false,cost: 200}, {unlocked: false,used: false,cost: 1e3}, {unlocked: false,used: false,cost: 1e3}, {unlocked: false,used: false,cost: 2e3}, {unlocked: false,used: false,cost: 2e3}, {unlocked: false,used: false,cost: 3e3}];
                if (player.shapes.length == 0) {
                    player.shapes.push(new shape(shapeData[0], 0));
                    player.weapons.push(new weapon(weaponData[0], 0, 0));
                    player.weapons.push(new weapon(weaponData[0], 0, 1));
                }
                updateSlots();
                updateMoneyDisplay();
                saveGameData();
                setTimeout(() => {location.reload();}, 250);
            }
        }
        document.getElementById("import").onclick = function () {
            let fileInput = document.getElementById("importFile");
            if (fileInput.files.length > 0) {
                let selectedFile = fileInput.files[0];
                if (selectedFile.name.endsWith(".txt")) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let fileContents = e.target.result;
                        fileContents = fileContents.toString();
                        fileContents = JSON.parse(fileContents);
                        importProgress(fileContents);
                    };
                    reader.readAsText(selectedFile);
                }
            } else {
                alert("No file selected.");
            }
        };
    }
    var tasks = [];
    var tasksTypes = [{
        type: "gold",
        howGain: "dmg",
        XPNEEDED: 1e6,
        reward: 60,
        description: "Deal 1.0M Damage"
    }, {
        type: "gold",
        howGain: "kills",
        XPNEEDED: 50,
        reward: 30,
        description: "Get 50 Kills"
    }, {
        type: "gold",
        howGain: "dmg",
        XPNEEDED: 10e6,
        reward: 300,
        description: "Deal 10.0M Damage"
    }, {
        type: "gold",
        howGain: "kills",
        XPNEEDED: 5e3,
        reward: 10e3,
        description: "Get 5.0K Kills"
    }, {
        type: "gold",
        howGain: "dmg",
        XPNEEDED: 500e6,
        reward: 10e3,
        description: "Deal 500.0M Damage"
    }, {
        type: "gold",
        howGain: "beacon",
        XPNEEDED: 5,
        reward: 15,
        description: "Capture 5 Beacons"
    }, {
        type: "gold",
        howGain: "beacon",
        XPNEEDED: 100,
        reward: 5e3,
        description: "Capture 100 Beacons"
    }, {
        type: "workshopPoints",
        howGain: "8 boss",
        XPNEEDED: 250,
        reward: 15e3,
        description: "Kill Level 8 Boss 250 Times"
    }, {
        type: "workshopPoints",
        howGain: "8 boss",
        XPNEEDED: 10,
        reward: 250,
        description: "Kill Level 8 Boss 10 Times"
    }, {
        type: "gold",
        howGain: "beacon",
        XPNEEDED: 10,
        reward: 250,
        description: "Capture 10 Beacons"
    }];
    class task {
        constructor(data) {
            this.type = data.type;
            this.howGain = data.howGain;
            this.xp = 0;
            this.maxxp = data.XPNEEDED;
            this.desc = data.description;
            let multi = Math.max(1, 1 + (.5 * (player.league / 500)));
            this.reward = Math.round(data.reward * multi);
        }
    }
    function addTaskXP(type, amount) {
        for(let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            if(task.howGain == type) {
                task.xp += amount;
            }
        }
    }
    function generateTasks() {
        if(tasks.length >= 10) return;
        for (let i = 0; i < 2; i++) {
            if(tasks.length >= 10) break;
            let Task = tasksTypes[Math.floor(tasksTypes.length * Math.random())];
            tasks.push(new task(Task));
        }
    }
    document.getElementById("offersToggles").onclick = function () {
        if(tasks.length) {
            document.getElementById("sideDisplay").innerHTML = `
            <div style="width: 100%; font-size: 40px; text-align: center;">
            Tasks
            </div>
            <hr>
            `;
            for(let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                let url = task.type == "gold" ? auSource : "./images/icons/workshop.png";
                let width = (window.innerWidth)-80;
                document.getElementById("sideDisplay").innerHTML += `
                <div style="position: absolute; width: ${width}px; height: 100px; top: ${80+(i * 140)}px; left: 40px; border-radius: 4px; background-color: rgb(0, 0, 0, .2);">
                <div style="position: absolute; width: 100px; height: 100px; left: 0px; top: 0px; background-size: 100px 100px; background-image: url('${url}')">
                </div>
                <div style="position: absolute; font-size: 24px; left: 5px; bottom: 0px;">
                <strong>${abbreviateNumber(task.reward)}</strong>
                </div>
                <div style="position: absolute; height: 11px; width: ${width-305}px; font-size: 16px; left: 105px; top: ${(100/2)-11}px; background-color: #808080;">
                <div style="position: absolute; height: 100%; width: ${100*Math.min(1, task.xp/task.maxxp)}%; font-size: 16px; left: 0px; top: 0px; background-color: #0f0;">
                </div>
                <div style="position: absolute; color: #fff; top: -4px; left: 0px; width: 100%; text-align: center; margin: 0px; padding: 0; font-size: 14px;">
                ${abbreviateNumber(task.xp)}/${abbreviateNumber(task.maxxp)}
                </div>
                </div>
                <div style="position: absolute; font-size: 16px; left: 105px; top: ${(100/2)+11}px;">
                ${task.desc}
                </div>
                <div id="collectTask${i}" style="position: absolute; font-size: 35px; text-align: center; cursor: pointer; top: ${25}px; right: 10px; width: 180px; border-radius: 4px; height: 50px; background-color: #0f0;">
                Collect
                </div>
                </div>
                `;
            }
            document.getElementById("sideDisplay").innerHTML += `
            <div style="position: absolute; top: ${100+(tasks.length * 140)}px; opacity: 0; pointer-events: none;">
            s
            </div>
            <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 40px; top: ${50+(tasks.length * 140)}px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
            BACK
            </div>
            `;
            document.getElementById("hangerUI").style.display = "none";
            document.getElementById("backButton").onclick = function () {
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").style.display = "block";
            }
            for(let i = 0; i < tasks.length; i++) {
                let task = tasks[i];
                if(task.xp < task.maxxp) {
                    document.getElementById(`collectTask${i}`).style.cursor = null;
                    document.getElementById(`collectTask${i}`).style.backgroundColor = "#808080";
                }else {
                    document.getElementById(`collectTask${i}`).onclick = function() {
                        updateMoneyDisplay(task.type, task.reward);
                        tasks.splice(i, 1);
                        document.getElementById("offersToggles").click();
                    }
                }
            }
        }else {
            generateTasks();
            document.getElementById("offersToggles").click();
        }
    };
    var workshopQueue = [];
    function updateProductionDisplay() {
        for (let i = 0; i < workshopQueue.length; i++) {
            workshopQueue[i].duration = Math.max(workshopQueue[i].duration - 500, 0);
        }
        if (document.getElementById("productiondisplay")) {
            document.getElementById("productiondisplay").innerHTML = "";
            for (let i = 0; i < workshopQueue.length; i++) {
                let time = "";
                if (workshopQueue[i].duration <= 60e3) {
                    time = `0:${workshopQueue[i].duration <= 10e3 ? "0" : ""}${removeDecimals(workshopQueue[i].duration / 1000)}`;
                } else {
                    let value = (workshopQueue[i].duration / 1000) / 60;
                    value = value.toString().split(".");
                    let minutes = value[0];
                    let seconds = parseFloat("0." + value[1]) * 60;
                    time = `${minutes}:${seconds <= 10 ? "0" : ""}${removeDecimals(seconds)}`;
                }
                document.getElementById("productiondisplay").innerHTML += `
                <div id="collect${i}" style="position: relative; ${workshopQueue[i].duration <= 0 ? "cursor: pointer;" : ""} width: 100%; height: 150px; background-color: ${workshopQueue[i].duration <= 0 ? i % 2 == 0 ? "rgb(0, 255, 0, 0.4)" : "rgb(0, 255, 0, 0.6)" : i % 2 == 0 ? "rgb(255, 255, 255, .5)" : "rgb(0, 0, 0, 0.2)"}">
                <div style="width: 150px; height: 150px; background-size: 150px 150px; background-image: url('./images/icons/workshop.png')">
                </div>
                <div style="position: absolute; top: 20px; left: 150px; font-size: 25px;">
                Workshop Points (${workshopQueue[i].amount})
                </div>
                <div style="position: absolute; top: 90px; left: 150px;">
                ${workshopQueue[i].duration <= 0 ? "Collect" : `Time: ${time}`}
                </div>
                </div>
                `;
            }
            for (let i = 0; i < workshopQueue.length; i++) {
                if (workshopQueue[i].duration <= 0) {
                    document.getElementById(`collect${i}`).onclick = function () {
                        updateMoneyDisplay("workshopPoints", workshopQueue[i].amount);
                        workshopQueue.splice(i, 1);
                        updateProductionDisplay();
                    };
                } else {
                    document.getElementById(`collect${i}`).onclick = null;
                }
            }
        }
        saveGameData();
    }
    document.getElementById("workshopToggle").onclick = function () {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="width: 100%; font-size: 40px; text-align: center;">
        Workshop
        </div>
        <hr>
        <div id="productiondisplay" style="position: absolute; top: ${(window.innerHeight / 2) - 300}px; left: ${(window.innerWidth / 2) - 395}; border-radius: 6px; width: 375px; height: 600px; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.2);">
        </div>
        <div id="produceWP" style="position: absolute; cursor: pointer; top: 116.5px; left: ${(window.innerWidth / 2) + 20}; border-radius: 6px; width: 325px; height: 150px; overflow-y: scroll; background-color: rgb(0, 0, 0, 0.2);">
        <div style="width: 150px; height: 150px; background-size: 150px 150px; background-image: url('./images/icons/workshop.png')">
        </div>
        <div style="position: absolute; top: 20px; left: 150px; font-size: 25px;">
        Workshop Points (60)
        </div>
        <div style="position: absolute; top: 90px; left: 150px;">
        Production Cost: 350.0K Silver
        </div>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `;
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("backButton").onclick = function () {
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").style.display = "block";
        }
        updateProductionDisplay();
        document.getElementById("produceWP").onclick = function () {
            if (player.sliver - 350e3 >= 0 && workshopQueue.length < 30) {
                updateMoneyDisplay("sliver", -350e3);
                workshopQueue.push({
                    amount: 60,
                    duration: (window.isDev ? 500 : (10 * 60 * 1e3) * Math.max(1, Math.floor(workshopQueue.length / 10) + 1))
                });
                updateProductionDisplay();
            }
        }
    }
    document.getElementById("historyToggle").onclick = function() {
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = mainDisplayText;
        document.getElementById("sideDisplay").innerHTML += `
        <div id="backButton" style="position: fixed; cursor: pointer; text-align: center; font-size: 40px; color: #fff; right: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `;
        document.getElementById("backButton").onclick = function() {
            document.getElementById("hangerUI").style.display = "block";
            document.getElementById("sideDisplay").innerHTML = "";
        }
    }
    function getShapeSprite(obj, isIcon) {
        let tmpSprite = shapeSprites[obj.name];
        if (!tmpSprite) {
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = obj.scale * (isIcon ? 3 : 1.2);
            tmpCanvas.style.width = tmpCanvas.style.height = (obj.scale * (isIcon ? 3 : 1.2)) + "px";
            let tmpCtx = tmpCanvas.getContext("2d");
            tmpCtx.globalAlpha = 1;
            tmpCtx.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
            if (obj.name.includes("Circle")) {
                renderCircle(0, 0, obj.scale, tmpCtx, false, false, obj.color, "#000");
            } else if (obj.name.includes("Pentagon")) {
                tmpCtx.rotate(Math.PI / 2);
                tmpCtx.strokeStyle = "#000";
                tmpCtx.lineWidth = 12;
                tmpCtx.fillStyle = obj.color;
                renderStar(tmpCtx, 2.5, obj.scale, obj.scale);
                tmpCtx.stroke();
                tmpCtx.fill();
            } else if (obj.name.includes("Hexagon")) {
                tmpCtx.rotate(Math.PI / 2);
                tmpCtx.strokeStyle = "#000";
                tmpCtx.lineWidth = 12;
                tmpCtx.fillStyle = obj.color;
                renderStar(tmpCtx, 3, obj.scale, obj.scale);
                tmpCtx.stroke();
                tmpCtx.fill();
            } else if (obj.name.includes("Heptagon")) {
                tmpCtx.rotate(Math.PI / 2);
                tmpCtx.strokeStyle = "#000";
                tmpCtx.lineWidth = 12;
                tmpCtx.fillStyle = obj.color;
                renderStar(tmpCtx, 3.5, obj.scale, obj.scale);
                tmpCtx.stroke();
                tmpCtx.fill();
            }
            if (!isIcon) shapeSprites[obj.name] = tmpCanvas;
            tmpSprite = tmpCanvas;
        }
        return tmpSprite;
    }
    var weaponIcons = {};
    function getWeaponIcon(obj, isIcon) {
        let tmpIcon = weaponIcons[obj.name];
        if (!tmpIcon) {
            tmpIcon = new Image();
            tmpIcon.src = obj.imageSource;
            tmpIcon.onload = function () {
                tmpIcon.isLoaded = true;
            }
            if (!isIcon) weaponIcons[obj.name] = tmpIcon;
        }
        return tmpIcon;
    }
    var moduleIcon = {};
    function getModuleIcon(obj, isIcon) {
        let tmpIcon = moduleIcon[obj.name];
        if (!tmpIcon) {
            tmpIcon = new Image();
            tmpIcon.src = obj.imageSource;
            tmpIcon.onload = function () {
                tmpIcon.isLoaded = true;
            }
            if (!isIcon) moduleIcon[obj.name] = tmpIcon;
        }
        return tmpIcon;
    }
    const WEPAONAPOENOPAWNEOPWANEAPWOEN = weapon;
    function drawWeaponDisplay(weapons, index, HA, shape, slot, inInventory) {
        let Weapon = weapons[index];
        if (!Weapon) return;
        let newWeapon = weaponData.find(e => Weapon.name == e.name);
        let weapon = new WEPAONAPOENOPAWNEOPWANEAPWOEN(newWeapon);
        for(let i = 0; i < Weapon.level-1; i++) {
            upgradeWeapon(weapon, null, null, true);
        }
        let currentIndex = index;
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${tierColor(weapon)});">
        </div>
        <div id="weaponImage" style="position: absolute; top: ${window.innerHeight/2-187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        </div>
        <div style="display: ${Weapon.amount == "main" ? "none" : "block"};position: absolute; text-align: center; top: ${window.innerHeight/2+187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        In Stock: ${(!inInventory ? player.weapons.filter(e => e.name == Weapon.name).length : Weapon.amount)}
        </div>
        <div style="position: absolute; top: ${window.innerHeight/2-250}px; left: ${window.innerWidth/2-522.5}px; width: 325px; height: 500px; background-color: rgb(0, 0, 0, .2); border: solid; border-color: #fff; border-radius: 6px;">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${tierColor(weapon)};">
        ${weapon.level >= 13 ? 1 : weapon.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${weapon.name}
        ${weapon.level >= 13 ? `<span style="color: #${levelToMKColor(weapon.level)};">${levelToMKText(weapon.level)}</span>` : ""}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${weapon.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        Damage: ${abbreviateNumber(weapon.dmg)}<br>
        Range: ${weapon.range} PX<br>
        ${weapon.reload > 0 ? `Reload: ${weapon.reload / 1000} sec<br>` : ""}
        ${weapon.aoeRange ? "AOE Range: " + weapon.aoeRange + " PX<br>" : ""}
        ${weapon.dotDamage ? `DOT Damage: ${abbreviateNumber(weapon.dotDamage)}<br>` : ""}
        ${weapon.effectIncrease ? `Effect Accumulation: ${weapon.effectIncrease}<br>` : ""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="Unequip" style="display: ${Weapon.amount == "main" ? "block" : !inInventory ? "none" : "none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #f00;">
        UNEQUIP
        </div>
        <div id="Equip" style="display: ${Weapon.amount == "main" ? "none" : !inInventory ? "none" : "block"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        EQUIP
        </div>
        <div id="Upgrade" style="position: absolute; display: ${!inInventory ? "none" : "block"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        UPGRADE
        </div>
        <div id="buyWeapon" style="position: absolute; display: ${!inInventory ? "block" : "none"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        BUY
        </div>
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div style="position: absolute; bottom: 100px; left: 12.5%; width: 75%; height: 6px; background-color: #fff; border-radius: 4px; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: ${(1/weapons.length)*100*currentIndex}%; width: ${(1/weapons.length)*100}%; height: 100%; background-color: #00dbcd;">
        </div>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        <div id="buyMenu" style="position: absolute; display: none; color: #fff; top: ${(window.innerHeight/2)-(225/2)}px; left: ${(window.innerWidth/2)-(425/2)}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        `;
        let weaponImg = getWeaponIcon(weapon, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
        document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
        if(weapons[index].dontSell) document.getElementById("buyWeapon").style.display = "none";
        document.getElementById("Unequip").onclick = function() {
            let weapon = player.weapons.find(e => shape.sid == e.owner && e.slot == slot);
            weapon.slot = null;
            weapon.owner = null;
            if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                document.getElementById("slot" + shape.slot).click();
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
        }
        document.getElementById("Equip").onclick = function() {
            let weapon = player.weapons.find(e => e.name == Weapon.name && e.owner == null && e.level == Weapon.level);
            let oldWeapon = player.weapons.find(e => shape.sid == e.owner && e.slot == slot);
            if(oldWeapon) {
                oldWeapon.owner = null;
                oldWeapon.slot = null;
            }
            weapon.owner = shape.sid;
            weapon.slot = slot;
            if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                document.getElementById("slot" + shape.slot).click();
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
        }
        document.getElementById("Upgrade").onclick = function () {
            document.body.appendChild(document.getElementById("moneyDisplay"));
            console.log(weapons);
            let weapon = player.weapons.find(e => e.name == Weapon.name && (Weapon.amount == "main" ? shape.sid == e.owner && e.slot == slot : true) && e.level == Weapon.level);
            let adjustwidth = window.innerWidth * .75;
            document.getElementById("upgradeMenu").style.display = "block";
            document.getElementById("upgradeMenu").innerHTML = `
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14, 13].includes(weapon.level) ? `${weapon.name} <span style="color: ${weapon.level == 13 ? "#0f0" : "#ffff00"};">${weapon.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapon.level} ${weapon.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${enterBarForWeapon("damage", weapon)}
            ${enterBarForWeapon("dot damage", weapon)}
            ${enterBarForWeapon("effect increase", weapon)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "#00ff00" : [12, 13].includes(weapon.level) ? "#ffff00" : "#808080"};">
            <div style="color: ${[12, 13].includes(weapon.level) ? "f00" : "#fff"}; width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "24" : [12, 13].includes(weapon.level) ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "5" : [12, 13].includes(weapon.level) ? "5" : "10"}px;">${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "UPGRADE" : [12, 13].includes(weapon.level)? "ENHANCE" : "MAXED"}</div>
            <div style="color: ${[12, 13].includes(weapon.level) ? "f00" : "#fff"}; display: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "block" : [12, 13].includes(weapon.level) ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${[12, 13].includes(weapon.level) ? `${abbreviateNumber(weapon.enhanceCost * (weapon.level == 13 ? 48 : 1))} Gold` : `${abbreviateNumber(sliverUpgradesByTier[weapon.tier].weapons[weapon.level])} Sliver`}</div>
            </div>
            `;
            let sprite = getWeaponIcon(weapon, true);
            sprite.style = "width: 280px; height: 280px;";
            document.getElementById("upgradeMenu").appendChild(sprite);
            document.getElementById("leaveUpgrade").onclick = function () {
                document.getElementById("upgradeMenu").style.display = "none";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
            document.getElementById("UPGRADE").onclick = function () {
                if (sliverUpgradesByTier[weapon.tier].weapons[weapon.level] || weapon.level == 12 || weapon.level == 13) {
                    if (weapon.level >= 12) {
                        if (player.gold - (weapon.enhanceCost * (weapon.level == 13 ? 48 : 1)) >= 0) {
                            updateMoneyDisplay("gold", -(weapon.enhanceCost * (weapon.level == 13 ? 48 : 1)));
                            upgradeWeapon(weapon, currentIndex, weapons, false, false, shape, slot, inInventory);
                        }
                    } else {
                        if (player.sliver - sliverUpgradesByTier[weapon.tier].weapons[weapon.level] >= 0) {
                            updateMoneyDisplay("sliver", -sliverUpgradesByTier[weapon.tier].weapons[weapon.level]);
                            upgradeWeapon(weapon, currentIndex, weapons, false, false, shape, slot, inInventory);
                        } else if (player.gold > 0) {
                            let amountNeeded = sliverUpgradesByTier[weapon.tier].weapons[weapon.level] - player.sliver;
                            let amountToGold = Math.round(amountNeeded / 1250);
                            if (player.gold - amountToGold >= 0) {
                                let answer = prompt(`Not Enough Silver!\nYou Need ${abbreviateNumber(amountNeeded)} Silver!\nUse ${abbreviateNumber(amountToGold)} Gold to make up for the amount of silver missing!\nType "y" or "yes" to confirm.`);
                                if (answer) {
                                    answer = answer.toLocaleLowerCase();
                                    if (answer == "yes" || answer == "y") {
                                        updateMoneyDisplay("sliver", -player.sliver);
                                        updateMoneyDisplay("gold", -amountToGold);
                                        upgradeWeapon(weapon, currentIndex, weapons, false, false, shape, slot, inInventory);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("backButton").onclick = function() {
            if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                document.getElementById("slot" + shape.slot).click();
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
        }
        document.getElementById("buyWeapon").onclick = function() {
            document.body.appendChild(document.getElementById("moneyDisplay"));
            document.getElementById("buyMenu").style.display = "block";
            document.getElementById("storeButton").style.display = "none";
            document.getElementById("inventoryButton").style.display = "none";
            let num = 60;
            let theHA = weapons[currentIndex];
            document.getElementById("buyMenu").innerHTML = `
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Purchase
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: ${num}px; left: ${425/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${agSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(theHA.cost.sliver)}
            </div>
            </div>
    
            <div style="position: absolute; top: ${num}px; left: ${425/2-200}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${auSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
            ${abbreviateNumber(theHA.cost.gold)}
            </div>
            </div>
    
            <div style="position: absolute; top: ${num}px; left: ${425/2+75}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(theHA.cost.workshopPoints || 0)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: ${425/2-75}px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `;
            document.getElementById("confirm").onclick = function() {
                let theThing = weapons[currentIndex];
                if (player.sliver - theThing.cost.sliver >= 0 && player.gold - theThing.cost.gold >= 0) {
                    if (!theThing.cost.workshopPoints ? true : player.workshopPoints - theThing.cost.workshopPoints) {
                        updateMoneyDisplay("sliver", -theThing.cost.sliver);
                        updateMoneyDisplay("gold", -theThing.cost.gold);
                        updateMoneyDisplay("workshopPoints", -(theThing.cost.workshopPoints || 0));
                        let oldWeapon = player.weapons.find(e => e.owner == shape.sid && e.slot == slot);
                        if(oldWeapon) {
                            oldWeapon.slot = null;
                            oldWeapon.owner = null;
                        }
                        player.weapons.push(new WEPAONAPOENOPAWNEOPWANEAPWOEN(theThing, shape.sid, slot));
                        if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                            document.getElementById("slot" + shape.slot).click();
                            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        }else {
                            document.getElementById("hangerUI").style.display = "block";
                            document.getElementById("sideDisplay").innerHTML = "";
                            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        }
                    }
                }
            }
            document.getElementById("lo____l").onclick = function() {
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                document.getElementById("buyMenu").style.display = "none";
                document.getElementById("storeButton").style.display = "block";
                document.getElementById("inventoryButton").style.display = "block";
            }
        }
        if(HA) {
            document.getElementById("Upgrade").click();
        }
    }
    function enterBarForWeapon(type, weapon) {
        let text = "";
        let Weapon = weaponData.find(item => item.name == weapon.name)
        let maxwidth = window.innerWidth >= 1442 ? 500 : window.innerWidth >= 1374 ? 450 : window.innerWidth >= 1311 ? 400 : window.innerWidth >= 1245 ? 350 : window.innerWidth >= 1182 ? 300 : 250;
        maxwidth += 281.25;
        if (type == "damage") {
            let maxdmg = Weapon.damageData.base;
            for (let i = 0; i < Weapon.damageData.level.length; i++) {
                maxdmg += Weapon.damageData.level[i];
            }
            let mk1 = maxdmg;
            maxdmg *= 1.2;
            let mk2 = maxdmg;
            maxdmg *= 1.2;
            let indexAdjust = ((weapon.dmg / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((weapon.dmg + (weapon.level == 13 ? maxdmg-mk2 : weapon.level == 12 ? mk2-mk1 : Weapon.damageData.level[weapon.level])) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Damage: ${abbreviateNumber(weapon.dmg)}
            <div style="display: ${Weapon.damageData.level[weapon.level] ? "block" : weapon.level == 13 ? "block" : weapon.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${(weapon.level == 13 ? abbreviateNumber(maxdmg - mk2) : weapon.level == 12 ? abbreviateNumber(mk2-mk1) : abbreviateNumber(Weapon.damageData.level[weapon.level]))}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "dot damage" && Weapon.dotData) {
            let maxdmg = Weapon.dotData.base;
            for (let i = 0; i < Weapon.dotData.level.length; i++) {
                maxdmg += Weapon.dotData.level[i];
            }
            let Mk1 = maxdmg;
            maxdmg *= 1.2;
            let Mk2 = maxdmg;
            maxdmg *= 1.2;
            let indexAdjust = ((weapon.dotDamage / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((weapon.dotDamage + (weapon.level == 13 ? (maxdmg - Mk2) : weapon.level == 12 ? (Mk2 - Mk1) : Weapon.dotData.level[weapon.level])) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            DOT Damage: ${abbreviateNumber(weapon.dotDamage)}
            <div style="display: ${Weapon.dotData.level[weapon.level] ? "block" : weapon.level == 13 ? "block" : weapon.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${(weapon.level == 13 ? abbreviateNumber(maxdmg - Mk2) : weapon.level == 12 ? abbreviateNumber(Mk2 - Mk1) : abbreviateNumber(Weapon.dotData.level[weapon.level]))}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "effect increase" && Weapon.effectIncreaseData) {
            let maxdmg = Weapon.effectIncreaseData.base;
            for (let i = 0; i < Weapon.effectIncreaseData.level.length; i++) {
                maxdmg += Weapon.effectIncreaseData.level[i];
            }
            let indexAdjust = ((weapon.effectIncrease / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((weapon.effectIncrease + Weapon.effectIncreaseData.level[weapon.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Effect Accumulation: ${abbreviateNumber(weapon.effectIncrease)}
            <div style="display: ${Weapon.effectIncreaseData.level[weapon.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${abbreviateNumber(Weapon.effectIncreaseData.level[weapon.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        }
        return text;
    }
    function upgradeWeapon(weapon, currentIndex, weapons, noEz, isBOT, shape, slot, inInventory) {
        let Weapon = weaponData.find(item => item.name == weapon.name);
        if (weapon.level < 12) {
            weapon.sellPrice += sliverUpgradesByTier[weapon.tier].weapons[weapon.level] * .75;
            let dmgIncrease = Weapon.damageData.level[weapon.level];
            weapon.dmg += dmgIncrease;
        } else {
            weapon.dmg *= 1.2;
            weapon.dmg = Math.round(weapon.dmg);
        }
        if (Weapon.dotData) {
            if (weapon.level < 12) {
                let dmgIncrease = Weapon.dotData.level[weapon.level];
                weapon.dotDamage += dmgIncrease;
            } else {
                weapon.dotDamage *= 1.2;
            }
        }
        if (Weapon.effectIncreaseData && weapon.level < 12) {
            let dmgIncrease = Weapon.effectIncreaseData.level[weapon.level];
            weapon.effectIncrease += dmgIncrease;
        }
        weapon.level++;
        if (!noEz) {
            weapons[currentIndex].level++;
            drawWeaponDisplay(weapons, currentIndex, true, shape, slot, inInventory);
        }
        if (!noEz) updateSlots();
        if (!noEz) saveGameData();
    }
    function customizeWeapon(weapon, shape, slot) {
        if (true) {
            let filteredWeapons = [];
            if (weapon == "Light" || weapon == "Heavy") {
                let f = player.weapons.filter(e => e.owner == null && e.type == weapon).sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
                for(let i = 0; i < f.length; i++) {
                    let item = f[i];
                    if(filteredWeapons.find(e => e.name == item.name && e.level == item.level)) {
                        let index = filteredWeapons.findIndex(e => e.name == item.name && e.level == item.level);
                        filteredWeapons[index].amount++;
                    }else {
                        filteredWeapons.push({
                            name: item.name,
                            level: item.level,
                            amount: 1
                        });
                    }
                }
            } else {
                let f = player.weapons.filter(e => e.owner == null && e.type == weapon.type).sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
                for(let i = 0; i < f.length; i++) {
                    let item = f[i];
                    if(filteredWeapons.find(e => e.name == item.name && e.level == item.level)) {
                        let index = filteredWeapons.findIndex(e => e.name == item.name && e.level == item.level);
                        filteredWeapons[index].amount++;
                    }else {
                        filteredWeapons.push({
                            name: item.name,
                            level: item.level,
                            amount: 1
                        });
                    }
                }
            }
            if (weapon && weapon != "Light" && weapon != "Heavy") filteredWeapons.unshift({
                name: weapon.name,
                level: weapon.level,
                amount: "main"
            });
            let currentIndex = 0;
            document.getElementById("sideDisplay").innerHTML = `
            <div id="WEAPONdisplay" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">
            </div>
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
            </div>
            <div id="inventoryButton" style="position: absolute; text-align: center; font-size: 25px; color: #000; left: ${window.innerWidth/2-165}px; top: 30px; border-radius: 6px; height: 42.5px; padding-top: 7.5px; width: 150px; background-color: rgb(255, 255, 255, .6);">
            INVENTORY
            </div>
            <div id="storeButton" style="position: absolute; text-align: center; font-size: 35px; cursor: pointer; color: #fff; left: ${window.innerWidth/2+20}px; top: 30px; border-radius: 6px; height: 50px; width: 150px; background-color: rgb(0, 0, 0, .4);">
            STORE
            </div>
            `;
            let inInventory = true;
            let filteredShopItems = weaponData.filter(e => (typeof weapon == "string" ? e.type == weapon : e.type == weapon.type));
            let diiiisbled = false;
            document.getElementById("inventoryButton").onclick = function() {
                if(!diiiisbled) {
                    this.style.cursor = null;
                    this.style.color = "#000";
                    this.style.backgroundColor = "rgb(255, 255, 255, .6)";
                    document.getElementById("goToPre").style.display = "none";
                    document.getElementById("goToNext").style.display = "block";
                    document.getElementById("storeButton").style.cursor = "pointer";
                    document.getElementById("storeButton").style.color = "#fff";
                    document.getElementById("storeButton").style.backgroundColor = "rgb(0, 0, 0, .4)";
                    currentIndex = 0;
                    inInventory = true;
                    drawWeaponDisplay(inInventory ? filteredWeapons : filteredShopItems.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
                }
            };
            document.getElementById("storeButton").onclick = function() {
                this.style.cursor = null;
                this.style.color = "#000";
                this.style.backgroundColor = "rgb(255, 255, 255, .6)";
                document.getElementById("goToPre").style.display = "none";
                document.getElementById("goToNext").style.display = "block";
                document.getElementById("inventoryButton").style.cursor = "pointer";
                document.getElementById("inventoryButton").style.color = "#fff";
                document.getElementById("inventoryButton").style.backgroundColor = "rgb(0, 0, 0, .4)";
                currentIndex = 0;
                inInventory = false;
                drawWeaponDisplay(inInventory ? filteredWeapons : filteredShopItems.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
            };
            if(filteredWeapons.length == 0) {
                document.getElementById("storeButton").click();
                document.getElementById("inventoryButton").style.cursor = null;
                diiiisbled = true;
            }
            drawWeaponDisplay(filteredWeapons, 0, false, shape, slot, inInventory);
            if (!(inInventory ? filteredWeapons[currentIndex - 1] : filteredShopItems[currentIndex - 1])) {
                document.getElementById("goToPre").style.display = "none";
            }
            document.getElementById("goToPre").onclick = function () {
                currentIndex--;
                drawWeaponDisplay(inInventory ? filteredWeapons : filteredShopItems.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
                if (!(inInventory ? filteredWeapons[currentIndex - 1] : filteredShopItems[currentIndex - 1])) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
                if (!(inInventory ? filteredWeapons[currentIndex + 1] : filteredShopItems[currentIndex + 1])) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
            }
            if (!(inInventory ? filteredWeapons[currentIndex + 1] : filteredShopItems[currentIndex + 1])) {
                document.getElementById("goToNext").style.display = "none";
            }
            document.getElementById("goToNext").onclick = function () {
                currentIndex++;
                drawWeaponDisplay(inInventory ? filteredWeapons : filteredShopItems.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
                if (!(inInventory ? filteredWeapons[currentIndex + 1] : filteredShopItems[currentIndex + 1])) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
                if (!(inInventory ? filteredWeapons[currentIndex - 1] : filteredShopItems[currentIndex - 1])) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
            }
        }
    }
    function removeDecimals(value) {
        let string = value.toString();
        if (string.includes(".")) {
            return string.split(".")[0];
        }
        return string;
    }
    function enterBarForModule(type, module) {
        let text = "";
        let Module = moduleData.find(item => item.name == module.name);
        let maxwidth = window.innerWidth >= 1442 ? 500 : window.innerWidth >= 1374 ? 450 : window.innerWidth >= 1311 ? 400 : window.innerWidth >= 1245 ? 350 : window.innerWidth >= 1182 ? 300 : 250;
        maxwidth += 281.25;
        if (type == "healthIncrease" && Module.healthIncreaseData) {
            let maxdmg = Math.abs(Module.healthIncreaseData.base);
            for (let i = 0; i < Module.healthIncreaseData.level.length; i++) {
                maxdmg += Math.abs(Module.healthIncreaseData.level[i]);
            }
            let indexAdjust = ((Math.abs(module.healthIncrease) / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((Math.abs(module.healthIncrease) + Math.abs(Module.healthIncreaseData.level[module.level])) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Health Increase: ${removeDecimals((module.healthIncrease) * 100)}%
            <div style="display: ${Math.abs(Module.healthIncreaseData.level[module.level]) ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            ${Module.healthIncreaseData.level[module.level] >= 0 ? "+" : ""}${removeDecimals(Module.healthIncreaseData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "selfFixRepair" && Module.selfFixRepairData) {
            let maxdmg = Module.selfFixRepairData.base;
            for (let i = 0; i < Module.selfFixRepairData.level.length; i++) {
                maxdmg += Module.selfFixRepairData.level[i];
            }
            let indexAdjust = ((module.selfFixRepair / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.selfFixRepair + Module.selfFixRepairData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Repair Power: ${abbreviateNumber(module.selfFixRepair)}/SEC
            <div style="display: ${Module.selfFixRepairData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${abbreviateNumber(Module.selfFixRepairData.level[module.level])}/SEC
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "dmgIncrease" && Module.dmgIncreaseData) {
            let maxdmg = Module.dmgIncreaseData.base;
            for (let i = 0; i < Module.dmgIncreaseData.level.length; i++) {
                maxdmg += Module.dmgIncreaseData.level[i];
            }
            let indexAdjust = ((module.dmgIncrease / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.dmgIncrease + Module.dmgIncreaseData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Damage Increase: ${removeDecimals(module.dmgIncrease * 100)}%
            <div style="display: ${Module.dmgIncreaseData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${removeDecimals(Module.dmgIncreaseData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "immunity" && Module.immunePercentData) {
            let maxdmg = Module.immunePercentData.base;
            for (let i = 0; i < Module.immunePercentData.level.length; i++) {
                maxdmg += Module.immunePercentData.level[i];
            }
            let indexAdjust = ((module.immunePercent / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.immunePercent + Module.immunePercentData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Immunity Threshold: ${removeDecimals(module.immunePercent * 100)}%
            <div style="display: ${Module.immunePercentData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${removeDecimals(Module.immunePercentData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "lastingTime" && Module.immunePercentData) {
            let maxdmg = Module.lastingTimeData.base;
            for (let i = 0; i < Module.lastingTimeData.level.length; i++) {
                maxdmg += Module.lastingTimeData.level[i];
            }
            let indexAdjust = ((module.lastingTime / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.lastingTime + Module.lastingTimeData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Effect Duration: ${module.lastingTime / 1000} sec
            <div style="display: ${Module.lastingTimeData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.lastingTimeData.level[module.level] / 1000} sec
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "shieldHealth" && Module.shieldHealthData) {
            let maxdmg = Module.shieldHealthData.base;
            for (let i = 0; i < Module.shieldHealthData.level.length; i++) {
                maxdmg += Module.shieldHealthData.level[i];
            }
            let indexAdjust = ((module.shieldHealth / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.shieldHealth + Module.shieldHealthData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability Increase: ${module.shieldHealth * 100}%
            <div style="display: ${Module.shieldHealthData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.shieldHealthData.level[module.level] * 100}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "shieldRegen" && Module.shieldRegenData) {
            let maxdmg = Module.shieldRegenData.base;
            for (let i = 0; i < Module.shieldRegenData.level.length; i++) {
                maxdmg += Module.shieldRegenData.level[i];
            }
            let indexAdjust = ((module.shieldRegen / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.shieldRegen + Module.shieldRegenData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability Increase: ${module.shieldRegen * 100}%
            <div style="display: ${Module.shieldRegenData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.shieldRegenData.level[module.level] * 100}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "grayDamageDecrease" && Module.grayDamageDecreaseData) {
            let maxdmg = Module.grayDamageDecreaseData.base;
            for (let i = 0; i < Module.grayDamageDecreaseData.level.length; i++) {
                maxdmg += Module.grayDamageDecreaseData.level[i];
            }
            let indexAdjust = ((module.grayDamageDecrease / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.grayDamageDecrease + Module.grayDamageDecreaseData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Gray Damage Decrease: ${module.grayDamageDecrease * 100}%
            <div style="display: ${Module.grayDamageDecreaseData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.grayDamageDecreaseData.level[module.level] * 100}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "baseDefensePoints" && Module.baseDefensePointsData) {
            let maxdmg = Module.baseDefensePointsData.base;
            for (let i = 0; i < Module.baseDefensePointsData.level.length; i++) {
                maxdmg += Module.baseDefensePointsData.level[i];
            }
            let indexAdjust = ((module.baseDefensePoints / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.baseDefensePoints + Module.baseDefensePointsData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Base Defense Points: ${module.baseDefensePoints}
            <div style="display: ${Module.baseDefensePointsData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.baseDefensePointsData.level[module.level]}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "durabilityLostAmp" && Module.durabilityLostAmpData) {
            let maxdmg = Module.durabilityLostAmpData.base;
            for (let i = 0; i < Module.durabilityLostAmpData.level.length; i++) {
                maxdmg += Module.durabilityLostAmpData.level[i];
            }
            let indexAdjust = ((maxdmg / module.durabilityLostAmp) * maxwidth) / maxwidth;
            let indexAdjusted = ((maxdmg / (module.durabilityLostAmp + Module.durabilityLostAmpData.level[module.level])) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Durability Requirement: ${(module.durabilityLostAmp * 100)}%
            <div style="display: ${Math.abs(Module.durabilityLostAmpData.level[module.level]) ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            ${Module.durabilityLostAmpData.level[module.level] >= 0 ? "+" : "-"}${(Math.abs(Module.durabilityLostAmpData.level[module.level])*100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "increasedDefensePoints" && Module.increasedDefensePointsData) {
            let maxdmg = Module.increasedDefensePointsData.base;
            for (let i = 0; i < Module.increasedDefensePointsData.level.length; i++) {
                maxdmg += Module.increasedDefensePointsData.level[i];
            }
            let indexAdjust = ((module.increasedDefensePoints / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.increasedDefensePoints + Module.increasedDefensePointsData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Base Defense Points: ${module.increasedDefensePoints}
            <div style="display: ${Module.increasedDefensePointsData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Module.increasedDefensePointsData.level[module.level]}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "anticontrol" && Module.antiControlData) {
            let maxdmg = Module.antiControlData.base;
            for (let i = 0; i < Module.antiControlData.level.length; i++) {
                maxdmg += Module.antiControlData.level[i];
            }
            let indexAdjust = ((module.antiControl / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((module.antiControl + Module.antiControlData.level[module.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Effect Duration Reduction: ${removeDecimals(module.antiControl * 100)}%
            <div style="display: ${Module.antiControlData.level[module.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${removeDecimals(Module.antiControlData.level[module.level] * 100)}%
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        }
        return text;
    }
    const MODULESAODJAOSIDAS = module;
    function drawModuleDisplay(modules, index, HA, shape, slot, inInventory) {
        let Weapon = modules[index];
        if (!Weapon) return;
        let newWeapon = moduleData.find(e => Weapon.name == e.name);
        let weapon = new MODULESAODJAOSIDAS(newWeapon);
        for(let i = 0; i < Weapon.level-1; i++) {
            upgradeModule(weapon, null, null, true);
        }
        let currentIndex = index;
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${tierColor(weapon)});">
        </div>
        <div id="weaponImage" style="position: absolute; top: ${window.innerHeight/2-187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        </div>
        <div style="display: ${Weapon.amount == "main" ? "none" : "block"};position: absolute; text-align: center; top: ${window.innerHeight/2+187.5}px; left: ${window.innerWidth/2-187.5}px; height: 375px; width: 375px;">
        In Stock: ${!inInventory ? player.modules.filter(e => e.name == Weapon.name).length : Weapon.amount}
        </div>
        <div style="position: absolute; top: ${window.innerHeight/2-250}px; left: ${window.innerWidth/2-522.5}px; width: 325px; height: 500px; background-color: rgb(0, 0, 0, .2); border: solid; border-color: #fff; border-radius: 6px;">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${tierColor(weapon)};">
        ${weapon.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${weapon.name}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${weapon.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${weapon.dmgIncrease ? "Damage Increase: " + removeDecimals(weapon.dmgIncrease * 100) + "%<br>" : ""}
        ${weapon.healthIncrease ? "Durability Increase: " + removeDecimals(weapon.healthIncrease * 100) + "%<br>" : ""}
        ${weapon.selfFixRepair ? "Repair Power: " + abbreviateNumber(weapon.selfFixRepair) + "/SEC<br>" : ""}
        ${weapon.immunePercent ? "Immunity Threshold: " + (weapon.immunePercent * 100) + "%<br>" : ""}
        ${weapon.lastingTime ? "Effect Duration: " + (weapon.lastingTime / 1000) + " sec<br>" : ""}
        ${weapon.shieldHealth ? "Shield Durability Increase: " + removeDecimals(weapon.shieldHealth * 100) + "%<br>" : ""}
        ${weapon.shieldRegen ? "Shield Regen Decrease: " + removeDecimals(weapon.shieldRegen * 100) + "%<br>" : ""}
        ${weapon.grayDamageDecrease ? "Gray Damage Decrease: " + removeDecimals(weapon.grayDamageDecrease * 100) + "%<br>" : ""}
        ${weapon.durabilityLostAmp ? "Durability Requirement: " + (weapon.durabilityLostAmp * 100) + "%<br>" : ""}
        ${weapon.baseDefensePoints ? "Base Defense Points Increase: " + (weapon.baseDefensePoints) + "<br>" : ""}
        ${weapon.increasedDefensePoints ? "Defense Points (@max stacks): " + (weapon.increasedDefensePoints) + "<br>" : ""}
        ${weapon.antiControl ? `Effect Duration Reduction: ${weapon.antiControl * 100}%<br>` : ""}
        </div>
        </div>
        </div>
        <div id="Unequip" style="display: ${Weapon.amount == "main" ? "block" : "none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #f00;">
        UNEQUIP
        </div>
        <div id="Equip" style="display: ${Weapon.amount == "main" ? "none" : inInventory ? "block" : "none"}; position: absolute; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2+35}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        EQUIP
        </div>
        <div id="Upgrade" style="position: absolute; display: ${!inInventory ? "none" : "block"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        UPGRADE
        </div>
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div style="position: absolute; bottom: 100px; left: 12.5%; width: 75%; height: 6px; background-color: #fff; border-radius: 4px; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: ${(1/modules.length)*100*currentIndex}%; width: ${(1/modules.length)*100}%; height: 100%; background-color: #00dbcd;">
        </div>
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        <div id="buyModule" style="position: absolute; display: ${!inInventory ? "block" : "none"}; color: #fff; text-align: center; font-size: 35px; left: ${window.innerWidth/2+187.5}px; top: ${window.innerHeight/2-25}px; cursor: pointer; width: 325px; height: 50px; border-radius: 6px; background-color: #0f0;">
        BUY
        </div>
        <div id="buyMenu" style="position: absolute; display: none; color: #fff; top: ${(window.innerHeight/2)-(225/2)}px; left: ${(window.innerWidth/2)-(425/2)}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        `;
        let weaponImg = getModuleIcon(weapon, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
        document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
        if(modules[index].dontSell) document.getElementById("buyModule").style.display = "none";
        document.getElementById("Unequip").onclick = function() {
            let weapon = player.modules.find(e => shape.sid == e.owner && e.slot == slot);
            weapon.slot = null;
            weapon.owner = null;
            if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                document.getElementById("slot" + shape.slot).click();
                document.getElementById("switchModule").click();
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
        }
        document.getElementById("Equip").onclick = function() {
            let weapon = player.modules.find(e => e.name == Weapon.name && e.owner == null && e.level == Weapon.level);
            let oldWeapon = player.modules.find(e => shape.sid == e.owner && e.slot == slot);
            if(oldWeapon) {
                oldWeapon.owner = null;
                oldWeapon.slot = null;
            }
            weapon.owner = shape.sid;
            weapon.slot = slot;
            if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                document.getElementById("slot" + shape.slot).click();
                document.getElementById("switchModule").click();
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
        }
        document.getElementById("Upgrade").onclick = function () {
            document.body.appendChild(document.getElementById("moneyDisplay"));
            let weapon = player.modules.find(e => e.name == Weapon.name && (Weapon.amount == "main" ? shape.sid == e.owner && e.slot == slot : true) && e.level == Weapon.level);
            let adjustwidth = window.innerWidth * .75;
            document.getElementById("upgradeMenu").style.display = "block";
            document.getElementById("upgradeMenu").innerHTML = `
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            Lvl ${weapon.level} ${weapon.name}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${enterBarForModule("healthIncrease", weapon)}
            ${enterBarForModule("selfFixRepair", weapon)}
            ${enterBarForModule("dmgIncrease", weapon)}
            ${enterBarForModule("immunity", weapon)}
            ${enterBarForModule("lastingTime", weapon)}
            ${enterBarForModule("shieldHealth", weapon)}
            ${enterBarForModule("shieldRegen", weapon)}
            ${enterBarForModule("grayDamageDecrease", weapon)}
            ${enterBarForModule("baseDefensePoints", weapon)}
            ${enterBarForModule("durabilityLostAmp", weapon)}
            ${enterBarForModule("increasedDefensePoints", weapon)}
            ${enterBarForModule("anticontrol", weapon)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[weapon.tier].modules[weapon.level] ? "#00ff00" : "#808080"};">
            <div style="width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[weapon.tier].modules[weapon.level] ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[weapon.tier].modules[weapon.level] ? "5" : "10"}px;">${sliverUpgradesByTier[weapon.tier].modules[weapon.level] ? "UPGRADE" : "MAXED"}</div>
            <div style="display: ${sliverUpgradesByTier[weapon.tier].modules[weapon.level] ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${abbreviateNumber(sliverUpgradesByTier[weapon.tier].modules[weapon.level])} Sliver</div>
            </div>
            `;
            let sprite = getModuleIcon(weapon, true);
            sprite.style = "width: 280px; height: 280px;";
            document.getElementById("upgradeMenu").appendChild(sprite);
            document.getElementById("leaveUpgrade").onclick = function () {
                document.getElementById("upgradeMenu").style.display = "none";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
            document.getElementById("UPGRADE").onclick = function () {
                if (sliverUpgradesByTier[weapon.tier].modules[weapon.level] && player.sliver - sliverUpgradesByTier[weapon.tier].modules[weapon.level] >= 0) {
                    updateMoneyDisplay("sliver", -sliverUpgradesByTier[weapon.tier].modules[weapon.level]);
                    upgradeModule(weapon, currentIndex, modules, false, false, shape, slot, inInventory);
                }
            }
        }
        document.getElementById("backButton").onclick = function() {
            if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                document.getElementById("slot" + shape.slot).click();
                document.getElementById("switchModule").click();
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
        }
        document.getElementById("buyModule").onclick = function() {
            document.body.appendChild(document.getElementById("moneyDisplay"));
            document.getElementById("buyMenu").style.display = "block";
            document.getElementById("storeButton").style.display = "none";
            document.getElementById("inventoryButton").style.display = "none";
            let num = 60;
            let theHA = modules[currentIndex];
            document.getElementById("buyMenu").innerHTML = `
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Purchase
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: ${num}px; left: ${425/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${agSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(theHA.cost.sliver)}
            </div>
            </div>
    
            <div style="position: absolute; top: ${num}px; left: ${425/2-200}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${auSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
            ${abbreviateNumber(theHA.cost.gold)}
            </div>
            </div>
    
            <div style="position: absolute; top: ${num}px; left: ${425/2+75}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(theHA.cost.workshopPoints || 0)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: ${425/2-75}px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `;
            document.getElementById("confirm").onclick = function() {
                let theThing = modules[currentIndex];
                if (player.sliver - theThing.cost.sliver >= 0 && player.gold - theThing.cost.gold >= 0) {
                    if (!theThing.cost.workshopPoints ? true : player.workshopPoints - theThing.cost.workshopPoints) {
                        updateMoneyDisplay("sliver", -theThing.cost.sliver);
                        updateMoneyDisplay("gold", -theThing.cost.gold);
                        updateMoneyDisplay("workshopPoints", -(theThing.cost.workshopPoints || 0));
                        let oldWeapon = player.modules.find(e => e.owner == shape.sid && e.slot == slot);
                        if(oldWeapon) {
                            oldWeapon.slot = null;
                            oldWeapon.owner = null;
                        }
                        player.modules.push(new MODULESAODJAOSIDAS(theThing, shape.sid, slot));
                        if(shape.slot >= 0 && shape.slot !== null && shape.slot !== undefined) {
                            document.getElementById("slot" + shape.slot).click();
                            document.getElementById("switchModule").click();
                            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        }else {
                            document.getElementById("hangerUI").style.display = "block";
                            document.getElementById("sideDisplay").innerHTML = "";
                            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        }
                    }
                }
            }
            document.getElementById("lo____l").onclick = function() {
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                document.getElementById("buyMenu").style.display = "none";
                document.getElementById("storeButton").style.display = "block";
                document.getElementById("inventoryButton").style.display = "block";
            }
        }
        if(HA) {
            document.getElementById("Upgrade").click();
        }
    }
    function upgradeModule(module, currentIndex, modules, noEz, isBOT, shape, slot, inInventory) {
        let Module = moduleData.find(item => item.name == module.name);
        if (Module.healthIncreaseData) {
            let healthIncrease = Module.healthIncreaseData.level[module.level];
            module.healthIncrease += healthIncrease;
            module.healthIncrease *= 100;
            module.healthIncrease = Math.round(module.healthIncrease);
            module.healthIncrease /= 100;
        }
        if (Module.selfFixRepairData) {
            let healthIncrease = Module.selfFixRepairData.level[module.level];
            module.selfFixRepair += healthIncrease;
        }
        if (Module.dmgIncreaseData) {
            let healthIncrease = Module.dmgIncreaseData.level[module.level];
            module.dmgIncrease += healthIncrease;
            module.dmgIncrease *= 100;
            module.dmgIncrease = Math.round(module.dmgIncrease);
            module.dmgIncrease /= 100;
        }
        if (Module.immunePercentData) {
            let healthIncrease = Module.immunePercentData.level[module.level];
            module.immunePercent += healthIncrease;
        }
        if (Module.lastingTimeData) {
            let healthIncrease = Module.lastingTimeData.level[module.level];
            module.lastingTime += healthIncrease;
        }
        if (Module.shieldHealthData) {
            let healthIncrease = Module.shieldHealthData.level[module.level];
            module.shieldHealth += healthIncrease;
        }
        if (Module.shieldRegenData) {
            let healthIncrease = Module.shieldRegenData.level[module.level];
            module.shieldRegen += healthIncrease;
        }
        if (Module.grayDamageDecreaseData) {
            let healthIncrease = Module.grayDamageDecreaseData.level[module.level];
            module.grayDamageDecrease += healthIncrease;
        }
        if (Module.baseDefensePointsData) {
            let healthIncrease = Module.baseDefensePointsData.level[module.level];
            module.baseDefensePoints += healthIncrease;
        }
        if (Module.durabilityLostAmpData) {
            let healthIncrease = Module.durabilityLostAmpData.level[module.level];
            module.durabilityLostAmp += healthIncrease;
        }
        if (Module.increasedDefensePointsData) {
            let healthIncrease = Module.increasedDefensePointsData.level[module.level];
            module.increasedDefensePoints += healthIncrease;
        }
        if (Module.antiControlData) {
            let healthIncrease = Module.antiControlData.level[module.level];
            module.antiControl += healthIncrease;
            module.antiControl *= 100;
            module.antiControl = Math.round(module.antiControl);
            module.antiControl /= 100;
        }
        module.level++;
        if (!noEz) {
            modules[currentIndex].level++;
            drawModuleDisplay(modules, currentIndex, true, shape, slot, inInventory);
        }
        if (!noEz) updateSlots();
        if (!noEz) saveGameData();
    }
    function customizeModule(module, shape, slot) {
        if (true) {
            let filteredWeapons = [];
            let f = player.modules.filter(e => e.owner == null).sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
            for (let i = 0; i < f.length; i++) {
                let item = f[i];
                if (filteredWeapons.find(e => e.name == item.name && e.level == item.level)) {
                    let index = filteredWeapons.findIndex(e => e.name == item.name && e.level == item.level);
                    filteredWeapons[index].amount++;
                } else {
                    filteredWeapons.push({
                        name: item.name,
                        level: item.level,
                        amount: 1
                    });
                }
            }
            if(module) {
                filteredWeapons.unshift({
                    name: module.name,
                    level: module.level,
                    amount: "main"
                });
            }
            let currentIndex = 0;
            document.getElementById("sideDisplay").innerHTML = `
            <div id="WEAPONdisplay" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">
            </div>
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
            </div>
            <div id="inventoryButton" style="position: absolute; text-align: center; font-size: 25px; color: #000; left: ${window.innerWidth/2-165}px; top: 30px; border-radius: 6px; height: 42.5px; padding-top: 7.5px; width: 150px; background-color: rgb(255, 255, 255, .6);">
            INVENTORY
            </div>
            <div id="storeButton" style="position: absolute; text-align: center; font-size: 35px; cursor: pointer; color: #fff; left: ${window.innerWidth/2+20}px; top: 30px; border-radius: 6px; height: 50px; width: 150px; background-color: rgb(0, 0, 0, .4);">
            STORE
            </div>
            `;
            let inInventory = true;
            let diiiisbled = false;
            document.getElementById("inventoryButton").onclick = function() {
                if(!diiiisbled) {
                    this.style.cursor = null;
                    this.style.color = "#000";
                    this.style.backgroundColor = "rgb(255, 255, 255, .6)";
                    document.getElementById("goToPre").style.display = "none";
                    document.getElementById("goToNext").style.display = "block";
                    document.getElementById("storeButton").style.cursor = "pointer";
                    document.getElementById("storeButton").style.color = "#fff";
                    document.getElementById("storeButton").style.backgroundColor = "rgb(0, 0, 0, .4)";
                    currentIndex = 0;
                    inInventory = true;
                    drawModuleDisplay(inInventory ? filteredWeapons : moduleData.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
                }
            };
            document.getElementById("storeButton").onclick = function() {
                this.style.cursor = null;
                this.style.color = "#000";
                this.style.backgroundColor = "rgb(255, 255, 255, .6)";
                document.getElementById("goToPre").style.display = "none";
                document.getElementById("goToNext").style.display = "block";
                document.getElementById("inventoryButton").style.cursor = "pointer";
                document.getElementById("inventoryButton").style.color = "#fff";
                document.getElementById("inventoryButton").style.backgroundColor = "rgb(0, 0, 0, .4)";
                currentIndex = 0;
                inInventory = false;
                drawModuleDisplay(inInventory ? filteredWeapons : moduleData.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
            };
            if(filteredWeapons.length == 0) {
                document.getElementById("storeButton").click();
                document.getElementById("inventoryButton").style.cursor = null;
                diiiisbled = true;
            }
            drawModuleDisplay(filteredWeapons, 0, false, shape, slot, inInventory);
            if (!(inInventory ? filteredWeapons[currentIndex - 1] : moduleData[currentIndex - 1])) {
                document.getElementById("goToPre").style.display = "none";
            }
            document.getElementById("goToPre").onclick = function () {
                currentIndex--;
                drawModuleDisplay(inInventory ? filteredWeapons : moduleData.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
                if (!(inInventory ? filteredWeapons[currentIndex - 1] : moduleData[currentIndex - 1])) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
                if (!(inInventory ? filteredWeapons[currentIndex + 1] : moduleData[currentIndex + 1])) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
            }
            if (!(inInventory ? filteredWeapons[currentIndex + 1] : moduleData[currentIndex + 1])) {
                document.getElementById("goToNext").style.display = "none";
            }
            document.getElementById("goToNext").onclick = function () {
                currentIndex++;
                drawModuleDisplay(inInventory ? filteredWeapons : moduleData.sort((a, b) => a.tier - b.tier), currentIndex, false, shape, slot, inInventory);
                if (!(inInventory ? filteredWeapons[currentIndex + 1] : moduleData[currentIndex + 1])) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
                if (!(inInventory ? filteredWeapons[currentIndex - 1] : moduleData[currentIndex - 1])) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
            }
        }
    }
    document.getElementById("goToBattle").onclick = function () {
        saveGameData();
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("sideDisplay").style.display = "none";
        document.getElementById("goBackToHanger").style.display = "block";
        document.getElementById("gameModesDisplay").style.display = "block";
        this.style.display = "none";
    }
    var players = [];
    var mapInfo = {
        x: 0,
        y: 0
    }
    function updateChooseSlots() {
        let player = players[0];
        if (!player) return;
        document.getElementById("chooseSlot").style.width = (window.innerWidth / 8) + "px";
        document.getElementById("chooseSlot").innerHTML = "";
        let width = window.innerWidth / 8;
        for (let i = 0; i < 8; i++) {
            let robot = player.robots[i];
            if (robot) {
                document.getElementById("chooseSlot").innerHTML += `
                <div id="useSlot${i}" style="${robot.USED ? "" : "cursor: pointer;"} position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
                <div style="width: 100%; text-align: center; color: ${robot.level == 13 ? "#00f" : "#000"}">
                ${robot.name}
                </div>
                </div>
                `;
            } else {
                document.getElementById("chooseSlot").innerHTML += `
                <div style="position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
                </div>
                `;
            }
        }
        for (let i = 0; i < 8; i++) {
            let robot = player.robots[i];
            if (robot) {
                if(robot.USED) {
                    document.getElementById(`useSlot${i}`).innerHTML += `
                    <div style="z-index: 2; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-size: 100% 100%; background-image: url('./images/icons/cant_use_shape.png');">
                    </div>
                    `;
                }
                document.getElementById(`useSlot${i}`).onclick = function () {
                    if(!robot.USED) {
                        maxScreen = {
                            x: 1980 * robot.fieldOfViewMulti,
                            y: 1080 * robot.fieldOfViewMulti
                        };
                        players[0].oldIndex = i;
                        players[0].robotIndex = i;
                        robot.USED = true;
                        document.getElementById("chooseSlot").style.bottom = `${-width}px`;
                        resize();
                    }
                }
                if(!robot.USED) {
                    for (let t = 0; t < robot.weapons.length; t++) {
                        let weaponImg = getWeaponIcon(robot.weapons[t], true);
                        weaponImg.style = `pointer-events: none; z-index: 44; position: absolute; bottom: ${t >= 4 ? 45 : 0}px; left: ${45 * (t >= 4 ? t-4 : t)}px; width: ${width/4}px; height: ${width/4}px;`;
                        document.getElementById(`useSlot${i}`).appendChild(weaponImg);
                    }
                }
                let robotImg = getShapeSprite(robot, true);
                robotImg.style = "pointer-events: none; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;";
                document.getElementById(`useSlot${i}`).appendChild(robotImg);
            }
        }
    }
    var keysPressed = Array(100).fill(0);
    var LMAOASODPKASPODK = [];
    document.addEventListener("keydown", (e) => {
        keysPressed[e.keyCode] = 1;
        if (e.keyCode == 27 && !(player.gameMode >= 0)) {
            document.getElementById("rewardAnimation").style.overflow = "hidden";
            document.getElementById("rewardAnimation").style.pointerEvents = "none";
            document.getElementById("rewardAnimation").style.display = "none";
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").style.display = "block";
            document.getElementById("sideDisplay").style.display = "block";
        }
        if (parseInt(e.key) <= 8 && parseInt(e.key) >= 1) {
            if (window.isDev) {
                //player.league = 0;
                player.league = 17e3;
                addOperationXP(100e3);
                updateMoneyDisplay("sliver", 1e12);
                updateMoneyDisplay("gold", 10e6);
                updateMoneyDisplay("keys", 100e3);
                updateMoneyDisplay("workshopPoints", 50e3);
                updateMoneyDisplay("token 1", 50e3);
                updateMoneyDisplay("token 2", 50e3);
                updateMoneyDisplay("token 3", 50e3);
            }
            if (document.getElementById("slot" + (parseInt(e.key) - 1))) {
                document.getElementById("slot" + (parseInt(e.key) - 1)).click();
            }
        }
        if (e.key == "ArrowLeft") {
            if (document.getElementById("goToPre") && (!document.getElementById("goToPre").style.display || document.getElementById("goToPre").style.display == "block")) {
                document.getElementById("goToPre").click();
            }
        }
        if (e.key == "ArrowRight") {
            if (document.getElementById("goToNext") && (!document.getElementById("goToNext").style.display || document.getElementById("goToNext").style.display == "block")) {
                document.getElementById("goToNext").click();
            }
        }
        if (e.keyCode == 13) {
            if (players[0]) {
                let plasd = players[0].robots[players[0].robotIndex];
                if (plasd) {
                    LMAOASODPKASPODK.push({
                        x: plasd.x,
                        y: plasd.y
                    });
                }
            }
            if (document.getElementById("upgradeShape")) {
                document.getElementById("upgradeShape").click();
                document.getElementById("UPGRADE").click();
            }
            if (document.getElementById("Upgrade")) {
                document.getElementById("Upgrade").click();
                document.getElementById("UPGRADE").click();
            }
        }
    });
    document.addEventListener("keyup", (e) => {
        keysPressed[e.keyCode] = 0;
    });
    var meta = {
        shapes: ["Blue Heptagon", "Orange Pentagon", "Dark Gray Circle", "Yellow Hexagon", "Red Pentagon", "White Circle", "Purple Hexagon"],
        weapons: {
            "Orange Pentagon": {
                heavy: "Cinder",
                light: "Punisher"
            },
            "Dark Gray Circle": {
                heavy: "Veyron",
                light: "Evora"
            },
            "Yellow Hexagon": {
                heavy: "Thunder",
                light: "Storm"
            },
            "White Circle": {
                heavy: "Veyron",
                light: "Evora"
            },
            "Blue Heptagon": {
                heavy: "Delay",
                light: "Slumber"
            },
            "Red Pentagon": {
                heavy: "Delay",
                light: "Slumber"
            },
            "Purple Hexagon": {
                heavy: "Delay",
                light: "Slumber"
            },
        }
    }
    function leagueToEquipment(type, P2W, METAROBOT) {
        let tier = 0;
        if (player.league >= 7e3) {
            if (Math.random() < .9) {
                tier = 4;
            } else {
                tier = 3;
            }
        } else if (player.league >= 6e3) {
            if (Math.random() < .5) {
                tier = 4;
            } else {
                tier = 3;
            }
        } else if (player.league >= 5e3) {
            tier = 3;
        } else if (player.league >= 4e3) {
            if (Math.random() < .5) {
                tier = 3;
            } else {
                tier = 2;
            }
        } else if (player.league >= 3e3) {
            tier = 2;
        } else if (player.league >= 2e3) {
            if (Math.random() < .5) {
                tier = 2;
            } else {
                tier = 1;
            }
        } else if (player.league >= 1e3) {
            if (Math.random() < .25) {
                tier = 2;
            } else {
                tier = 1;
            }
        } else if (player.league < 1e3) {
            tier = 1;
        }
        tier = Math.max(tier - 1, 0);
        if (type == "shape") {
            let metaName = meta.shapes[Math.floor(meta.shapes.length * Math.random())];
            let possibleShape = shapeData.filter(e => e.tier == tier);
            return P2W ? shapeData.find(e => e.name == metaName) : possibleShape[Math.floor(possibleShape.length * Math.random())];
        } else if (type == "heavy") {
            let possibleWeapon = weaponData.filter(e => e.type == "Heavy" && e.tier == tier);
            if(!P2W) {
                let index = tier - 1;
                while (possibleWeapon.length == 0) {
                    possibleWeapon = weaponData.filter(e => e.type == "Heavy" && e.tier == index);
                    index--;
                }
            }else {
                return weaponData.find(e => e.name == meta.weapons[METAROBOT].heavy);
            }
            return possibleWeapon[Math.floor(possibleWeapon.length * Math.random())];
        } else if (type == "light") {
            let possibleWeapon = weaponData.filter(e => e.type == "Light" && e.tier == tier);
            if(!P2W) {
                let index = tier - 1;
                while (possibleWeapon.length == 0) {
                    possibleWeapon = weaponData.filter(e => e.type == "Light" && e.tier == index);
                    index--;
                }
            }else {
                return weaponData.find(e => e.name == meta.weapons[METAROBOT].light);
            }
            return possibleWeapon[Math.floor(possibleWeapon.length * Math.random())];
        }
    }
    function leagueToLevel(p2w) {
        if(p2w) {
            return 14;
        }
        if (player.league >= 7e3) {
            return Math.randInt(12, 14);
        } else if (player.league >= 6e3) {
            return Math.randInt(11, 13);
        } else if (player.league >= 5e3) {
            return Math.randInt(9, 11);
        } else if (player.league >= 4e3) {
            return Math.randInt(6, 9);
        } else if (player.league >= 3e3) {
            return 6;
        } else if (player.league >= 2e3) {
            return Math.randInt(3, 6);
        } else if (player.league < 1e3) {
            return Math.randInt(1, 2);
        }
    }
    function generateRandomName() {
        let isP2W = Math.random() < (player.league >= 51e2 ? 0.1 : 0.05);
        let name = "";
        let listOfNames = ["money", "big", "boy", "girl", "irl", "monkey", "white", "fat", "donkey", "george", "tom", "simba", "man", "qwerty"];
        name += listOfNames[Math.floor(listOfNames.length * Math.random())];
        if(Math.random() < .5) {
            name += "_";
            name += listOfNames[Math.floor(listOfNames.length * Math.random())];
        }
        name += Math.randInt(10, 99);
        return name + (isP2W ? "_p2w" : "");
    }
    var KILLLOGS = [];
    function addLogger(name1, weapon, name2) {
        KILLLOGS.push({attacker: name1, weapon: weapon, victim: name2});
        if(KILLLOGS.length > 7) {
            KILLLOGS.shift();
        }
    }
    function setUpGame(gameMode) {
        players = [];
        let shapes = player.shapes.filter(e => e.slot != null);
        players[0] = {
            isAlly: true,
            robotIndex: -1,
            robots: []
        };
        for (let i = 0; i < 8; i++) {
            let REALSHAPE = shapes.find(e => e.slot == i);
            if (REALSHAPE) {
                let index = shapes.findIndex(e => e.slot == i);
                let newShape = new shape(shapes[index], null, true);
                if(gameMode == 3) {
                    newShape.x = Math.random() * mapInfo.x;
                    newShape.y = Math.random() * mapInfo.y;
                } else if (gameMode == 0 || gameMode == 1) {
                    newShape.x = mapInfo.x / 2;
                    newShape.y = mapInfo.y / 2;
                } else {
                    newShape.x = 500 + newShape.scale;
                    newShape.y = mapInfo.y / 2;
                }
                newShape.level = shapes[index].level;
                let weapons = player.weapons.filter(e => e.owner == shapes[index].sid);
                newShape.weapons = [];
                for (let t = 0; t < weapons.length; t++) {
                    let newWeapon = new weapon(weapons[t]);
                    newWeapon.level = weapons[t].level;
                    newWeapon.slot = weapons[t].slot;
                    if(newWeapon.name == "Cinder" && newShape.name == "Orange Pentagon") {
                        newWeapon.dmg *= 1.25;
                    }
                    newShape.weapons.push(newWeapon);
                }
                let modules = player.modules.filter(e => e.owner == shapes[index].sid);
                newShape.modules = [];
                let healthIncrease = 1;
                let dmgIncrease = 1;
                let speedIncrease = 1;
                microchips.filter(e => e.owner == REALSHAPE.sid).forEach(item => {
                    if(item.dmgIncrease) {
                        dmgIncrease += item.dmgIncrease;
                    }
                    if(item.healthIncrease) {
                        healthIncrease += item.healthIncrease;
                    }
                    if(item.speedIncrease) {
                        speedIncrease += item.speedIncrease;
                    }
                    if(item.mechanicHeal) {
                        newShape.mechanicHeal = item.mechanicHeal;
                    }
                    if(item.onKillDefense) {
                        newShape.onKillDefense = item.onKillDefense;
                    }
                    if(item.onKillSpeed) {
                        newShape.onKillSpeed = item.onKillSpeed;
                    }
                    if(item.onLowDefense) {
                        newShape.onLowDefense = item.onLowDefense;
                    }
                    if(item.onLowSpeed) {
                        newShape.onLowSpeed = item.onLowSpeed;
                    }
                });
                if (player.league <= 300 && player.gameMode == 2) {
                    dmgIncrease += 10;
                    healthIncrease += 5;
                    newShape.speed *= 3;
                }
                dmgIncrease += (newShape.baseDamageIncrease || 0);
                for (let t = 0; t < modules.length; t++) {
                    let newModule = new module(modules[t]);
                    newModule.level = modules[t].level;
                    if (newModule.healthIncrease) {
                        healthIncrease += newModule.healthIncrease;
                    }
                    if (newModule.dmgIncrease) {
                        dmgIncrease += newModule.dmgIncrease;
                    }
                    newShape.modules.push(newModule);
                }
                dmgIncrease = Math.max(dmgIncrease, 0.01);
                for (let i = 0; i < newShape.weapons.length; i++) {
                    let weapon = newShape.weapons[i];
                    weapon.dmg *= dmgIncrease;
                }
                if (newShape.ability && newShape.ability.dmg) {
                    newShape.ability.dmg *= dmgIncrease;
                }
                newShape.shields = [];
                if (newShape.baseShielding) {
                    let increase = 1;
                    let fortifier = newShape.modules.filter(e => e.shieldHealth);
                    fortifier.forEach(e => {
                        increase += e.shieldHealth;
                    })
                    newShape.shields.push({
                        maxhealth: newShape.baseShielding.health * increase,
                        health: newShape.baseShielding.health * increase,
                        type: newShape.baseShielding.type,
                        regen: newShape.baseShielding.regen
                    });
                }
                newShape.health = newShape.maxhealth = parseInt(removeDecimals(newShape.maxhealth * healthIncrease));
                newShape.isMe = true;
                newShape.USED = false;
                newShape.speed *= speedIncrease;
                let repairAmps = newShape.modules.filter(e => e.name == "Repair Amplifier");
                if(repairAmps.length) {
                    newShape.repairAmp = {
                        require: 1e300,
                        requirePercent: 1,
                        defensePoints: 0,
                        amount: 0
                    };
                    for(let i = 0; i < repairAmps.length; i++) {
                        if(newShape.repairAmp.requirePercent >= repairAmps[i].durabilityLostAmp) {
                            newShape.repairAmp.requirePercent = repairAmps[i].durabilityLostAmp;
                            newShape.repairAmp.require = newShape.maxhealth * repairAmps[i].durabilityLostAmp;
                        }
                        newShape.repairAmp.defensePoints += repairAmps[i].increasedDefensePoints;
                        newShape.baseDP += repairAmps[i].baseDefensePoints;
                        newShape.repairAmp.amount++;
                    }
                }
                let antiControl = newShape.modules.filter(e => e.name == "Anti Control").sort((a, b) => b.antiControl - a.antiControl)[0];
                if(antiControl) {
                    newShape.negEffectReduction = 1 - antiControl.antiControl;
                }
                newShape.playingSid = 0;
                players[0].robots.push(newShape);
            } else {
                players[0].robots.push(null);
            }
        }
        if (gameMode == 2 || gameMode == 3) {
            for (let i = 0; i < (gameMode == 3 ? 10: 11); i++) {
                players[1 + i] = {
                    name: generateRandomName(),
                    isAlly: gameMode == 3 ? false : i < 5 ? true : false,
                    notMe: true,
                    robotIndex: 0,
                    robots: []
                };
            }
            for (let tt = 0; tt < (gameMode == 3 ? 10 : 11); tt++) {
                for (let i = 0; i < (players[0].robots.length * (gameMode == 3 ? 2 : 1)); i++) {
                    let isP2W = players[tt + 1].name.includes("p2w");
                    let possibleShape = leagueToEquipment("shape", isP2W);
                    let tmpShape = new shape(possibleShape, null, true);
                    for (let level = 0; level < leagueToLevel(isP2W) - 1; level++) {
                        upgradeShape(tmpShape, true, true, "BOT");
                    }
                    let newShape = new shape(tmpShape, null, true);
                    newShape.level = tmpShape.level;
                    if (gameMode == 3) {
                        newShape.x = Math.random() * mapInfo.x;
                        newShape.y = Math.random() * mapInfo.y;
                    } else if (tt < 5) {
                        newShape.x = 500 + newShape.scale;
                        newShape.y = mapInfo.y / 2;
                    } else {
                        newShape.x = mapInfo.x - 500 - newShape.scale;
                        newShape.y = mapInfo.y / 2;
                    }
                    newShape.weapons = [];
                    if (newShape.hardpoints.heavy) {
                        let possibleWeapon = leagueToEquipment("heavy", isP2W, possibleShape.name);
                        let tmpWeapon = new weapon(possibleWeapon);
                        for (let level = 0; level < leagueToLevel(isP2W) - 1; level++) {
                            upgradeWeapon(tmpWeapon, null, null, true);
                        }
                        for (let i = 0; i < newShape.hardpoints.heavy; i++) {
                            let newWeapon = new weapon(tmpWeapon);
                            newWeapon.level = tmpWeapon.level;
                            if (newWeapon.name == "Cinder" && newShape.name == "Orange Pentagon") {
                                newWeapon.dmg *= 1.25;
                            }
                            newShape.weapons.push(newWeapon);
                        }
                    }
                    if (newShape.hardpoints.light) {
                        let possibleWeapon = leagueToEquipment("light", isP2W, possibleShape.name);
                        let tmpWeapon = new weapon(possibleWeapon);
                        for (let level = 0; level < leagueToLevel(isP2W) - 1; level++) {
                            upgradeWeapon(tmpWeapon, null, null, true, "BOT");
                        }
                        for (let i = 0; i < newShape.hardpoints.light; i++) {
                            let newWeapon = new weapon(tmpWeapon);
                            newWeapon.level = tmpWeapon.level;
                            newShape.weapons.push(newWeapon);
                        }
                    }
                    newShape.modules = [];
                    let healthIncrease = 1;
                    let dmgIncrease = 1;
                    dmgIncrease += (newShape.baseDamageIncrease || 0);
                    for (let i = 0; i < newShape.weapons.length; i++) {
                        let weapon = newShape.weapons[i];
                        weapon.slot = i;
                        weapon.dmg *= dmgIncrease;
                    }
                    if (newShape.ability && newShape.ability.dmg) {
                        newShape.ability.dmg *= dmgIncrease;
                    }
                    newShape.shields = [];
                    if (newShape.baseShielding) {
                        let increase = 1;
                        newShape.shields.push({
                            maxhealth: newShape.baseShielding.health * increase,
                            health: newShape.baseShielding.health * increase,
                            type: newShape.baseShielding.type,
                            regen: newShape.baseShielding.regen
                        });
                    }
                    newShape.health = newShape.maxhealth = parseInt(removeDecimals(newShape.maxhealth * healthIncrease));
                    newShape.USED = false;
                    newShape.PLAYERNAME = players[1 + tt].name;
                    newShape.playingSid = tt + 1;
                    players[1 + tt].robots.push(newShape);
                }
            }
        }
        updateChooseSlots();
    }
    var arena = {
        bossIndex: 0,
        bosses: [{
            name: "Level 1 Boss",
            health: 250e3,
            speed: 0.0028,
            scale: 210,
            AOEArea: {
                range: 800,
                dmg: 500,
                fireRate: 250
            },
            BLASTWAVE: {
                range: 400,
                dmg: 15e3,
                knockback: 3
            },
            onKill: {
                silver: 75e3,
                gold: 10,
                keys: 25,
                OXP: 50
            }
        }, {
            name: "Level 2 Boss",
            health: 500e3,
            speed: 0.0048,
            scale: 155,
            AOEArea: {
                range: 800,
                dmg: 500,
                fireRate: 100
            },
            BLASTWAVE: {
                range: 190,
                dmg: 15e3,
                knockback: 15
            },
            onKill: {
                silver: 225e3,
                gold: 35,
                keys: 50,
                OXP: 75
            }
        }, {
            name: "Level 3 Boss",
            health: 900e3,
            speed: 0.0018,
            scale: 295,
            AOEArea: {
                range: 600,
                dmg: 1750,
                fireRate: 100
            },
            onKill: {
                silver: 850e3,
                gold: 150,
                keys: 75,
                OXP: 200
            }
        }, {
            name: "Level 4 Boss",
            health: 12e5,
            speed: 0.0018,
            scale: 155,
            AOEArea: {
                range: 1800,
                dmg: 2e3,
                fireRate: 150
            },
            onKill: {
                silver: 8e6,
                gold: 200,
                keys: 200,
                OXP: 500
            }
        }, {
            name: "Level 5 Boss",
            health: 2e6,
            speed: 0.0018,
            scale: 155,
            onKill: {
                silver: 15e6,
                gold: 300,
                keys: 500,
                OXP: 750
            }
        }, {
            name: "Level 6 Boss",
            health: 25e5,
            speed: 0.004,
            scale: 155,
            onKill: {
                silver: 30e6,
                gold: 600,
                keys: 700,
                OXP: 1250
            }
        }, {
            name: "Level 7 Boss",
            health: 55e5,
            speed: 0.0014,
            scale: 155,
            onKill: {
                silver: 40e6,
                gold: 900,
                keys: 700,
                OXP: 1550
            }
        }, {
            name: "Level 8 Boss",
            health: 7e6,
            speed: 0.0014,
            scale: 155,
            onKill: {
                silver: 30e6,
                gold: 400,
                keys: 300,
                OXP: 750,
                WSP: 200
            }
        }, {
            name: "Level 9 Boss",
            health: 50e6,
            speed: 0.002,
            scale: 105,
            onKill: {
                silver: 100e6,
                gold: 500,
                keys: 400,
                OXP: 750,
                WSP: 200
            }
        }]
    };
    document.getElementById("arena").onclick = function () {
        document.getElementById("chooseSlot").style.bottom = `0px`;
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        player.gameMode = 1;
        players = [];
        mapInfo.x = mapInfo.y = 3e3;
        setUpGame(player.gameMode);
        enemies = [];
        arena.bossIndex = 0;
        enemies.push(new enemy(arena.bosses[0], true));
        resize();
    }
    var buildings = [];
    var beaconPoints = {
        ally: 0,
        enemy: 0
    };
    function setUpCollisionBlocks(mapID) {
        if (mapID == 0) {
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 2454,
                    y: y
                });
            }
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 2086,
                    y: y
                });
            }
            for (let x = 2152; x < 2406; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 2285,
                    x: x,
                    y: 2546
                });
            }
            for (let x = 2152; x < 2406; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 2285,
                    x: x,
                    y: 4458
                });
            }
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 7790,
                    y: y
                });
            }
            for (let y = 2604; y < 4439; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 8162,
                    y: y
                });
            }
            for (let x = 7850; x < 8130; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 7977,
                    x: x,
                    y: 2546
                });
            }
            for (let x = 7850; x < 8130; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 7977,
                    x: x,
                    y: 4450
                });
            }//
            for (let x = 0; x < 2035; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    onlyDir: 0,
                    y: 4745
                });
            }
            for (let x = 0; x < 2035; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    onlyDir: 0,
                    y: 5050
                });
            }
            for (let y = 4777; y < 4989; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 4890,
                    x: 2047,
                    y: y
                });
            }//
            for (let y = 4804; y < 6610; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 5552,
                    x: 2339,
                    y: y
                });
            }
            for (let y = 4804; y < 6610; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 5552,
                    x: 2660,
                    y: y
                });
            }
            for (let x = 2397; x < 2633; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 2484,
                    y: 4747
                });
            }
            for (let x = 2397; x < 2633; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 2484,
                    y: 6653
                });
            }//
            for (let x = 7812; x < 9600; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 8732,
                    y: 4948
                });
            }
            for (let x = 7812; x < 9600; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 8732,
                    y: 5246
                });
            }
            for (let y = 5000; y < 5250; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 5119,
                    x: 7737,
                    y: y
                });
            }
            for (let y = 5000; y < 5250; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 5119,
                    x: 9649,
                    y: y
                });
            }//
            for (let y = 2565; y < 4447; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 3151,
                    y: y
                });
            }
            for (let y = 2565; y < 4447; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 3449,
                    y: y
                });
            }
            for (let x = 3211; x < 3429; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 3288,
                    y: 2503
                });
            }
            for (let x = 3211; x < 3429; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 3288,
                    y: 4496
                });
            }//
            for (let x = 637; x < 2422; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 1570,
                    y: 1943
                });
            }
            for (let x = 637; x < 2422; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 1570,
                    y: 2259
                });
            }
            for (let y = 2024; y < 2191; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 2103,
                    x: 540,
                    y: y
                });
            }
            for (let y = 2024; y < 2191; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 2103,
                    x: 2456,
                    y: y
                });
            }//
            for (let y = 300; y < 1725; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 1008,
                    x: 2145,
                    y: y
                });
            }
            for (let y = 300; y < 1725; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 1008,
                    x: 2450,
                    y: y
                });
            }
            for (let x = 2180; x < 2452; x += 50) {
                buildings.push({
                    name: "up col",
                    x: x,
                    middleX: 2273,
                    y: 249
                });
            }
            for (let x = 2180; x < 2452; x += 50) {
                buildings.push({
                    name: "down col",
                    x: x,
                    middleX: 2273,
                    y: 1759
                });
            }//
            for (let y = 3129; y < 3882; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 3747,
                    y: y
                });
            }
            for (let y = 3129; y < 3882; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 4045,
                    y: y
                });
            }
            for (let x = 3811; x < 3989; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 3888,
                    x: x,
                    y: 3048
                });
            }
            for (let x = 3811; x < 3989; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 3888,
                    x: x,
                    y: 3946
                });
            }//
            for (let y = 3111; y < 3885; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 6147,
                    y: y
                });
            }
            for (let y = 3111; y < 3885; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 6453,
                    y: y
                });
            }
            for (let x = 6211; x < 6461; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 6281,
                    x: x,
                    y: 3045
                });
            }
            for (let x = 6211; x < 6461; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 6281,
                    x: x,
                    y: 3961
                });
            }//
            for (let y = 2571; y < 4440; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 35e2,
                    x: 6752,
                    y: y
                });
            }
            for (let y = 2571; y < 4440; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 35e2,
                    x: 7046,
                    y: y
                });
            }
            for (let x = 6788; x < 7029; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 6887,
                    x: x,
                    y: 2502
                });
            }
            for (let x = 6788; x < 7029; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 6887,
                    x: x,
                    y: 4495
                });
            }//
            for (let x = 7800; x < 9604; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 8664,
                    x: x,
                    y: 1937
                });
            }
            for (let x = 7800; x < 9604; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 8664,
                    x: x,
                    y: 2245
                });
            }
            for (let y = 2014; y < 2203; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 9662,
                    x: 7747,
                    y: y
                });
            }
            for (let y = 2014; y < 2203; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 9662,
                    x: 9662,
                    y: y
                });
            }//
            for (let y = 293; y < 1739; y += 50) {
                buildings.push({
                    name: "left col",
                    middleY: 1002,
                    x: 7737,
                    y: y
                });
            }
            for (let y = 293; y < 1739; y += 50) {
                buildings.push({
                    name: "right col",
                    middleY: 1002,
                    x: 8052,
                    y: y
                });
            }
            for (let x = 7822; x < 8009; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 7911,
                    x: x,
                    y: 249
                });
            }
            for (let x = 7822; x < 8009; x += 50) {
                buildings.push({
                    name: "down col",
                    middleX: 7911,
                    x: x,
                    y: 1749
                });
            }//
            for (let y = 5608; y < mapInfo.y; y += 50) {
                buildings.push({
                    name: "left col",
                    onlyDir: -(Math.PI / 2),
                    x: 7745,
                    y: y
                });
            }
            for (let y = 5608; y < mapInfo.y; y += 50) {
                buildings.push({
                    name: "right col",
                    onlyDir: -(Math.PI / 2),
                    x: 8049,
                    y: y
                });
            }
            for (let x = 7786; x < 7995; x += 50) {
                buildings.push({
                    name: "up col",
                    middleX: 7891,
                    x: x,
                    y: 5547
                });
            }
        }
    }
    function setMapBuildings(mapID) {
        player.mapID = mapID;
        if (mapID == 0) {
            if(player.gameMode != 3) {
                buildings.push({
                    name: "beacon",
                    x: 1200,
                    y: 1200
                });
                buildings.push({
                    name: "beacon",
                    x: 1200,
                    y: mapInfo.y - 1200
                });
                buildings.push({
                    name: "beacon",
                    x: mapInfo.x / 2,
                    y: mapInfo.y / 2
                });
                buildings.push({
                    name: "beacon",
                    x: mapInfo.x - 1200,
                    y: mapInfo.y - 1200
                });
                buildings.push({
                    name: "beacon",
                    x: mapInfo.x - 1200,
                    y: 1200
                });
            }
            buildings.push({
                name: "wall rect",
                x: 600,
                y: 2000,
                width: 1800,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: 2200,
                y: 300,
                width: 200,
                height: 1400
            });
            buildings.push({
                name: "wall rect",
                x: 0,
                y: mapInfo.y - 2200,
                width: 2e3,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: 2400,
                y: mapInfo.y - 2200,
                width: 200,
                height: 1800
            });
            buildings.push({
                name: "wall rect",
                x: 2150,
                y: mapInfo.y / 2 - 900,
                width: 250,
                height: 1800
            });
            buildings.push({
                name: "wall rect",
                x: 3200,
                y: mapInfo.y / 2 - 950,
                width: 200,
                height: 1900
            });
            buildings.push({
                name: "wall rect",
                x: 3800,
                y: mapInfo.y / 2 - 400,
                width: 200,
                height: 800
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2150,
                y: mapInfo.y / 2 - 900,
                width: 250,
                height: 1800
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 3200,
                y: mapInfo.y / 2 - 950,
                width: 200,
                height: 1900
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 3800,
                y: mapInfo.y / 2 - 400,
                width: 200,
                height: 800
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: mapInfo.y - 2000,
                width: 1800,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: mapInfo.y - 1400,
                width: 200,
                height: 1400
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: 2000,
                width: 1800,
                height: 200
            });
            buildings.push({
                name: "wall rect",
                x: mapInfo.x - 2200,
                y: 300,
                width: 200,
                height: 1400
            });
            setUpCollisionBlocks(0);
        }
    }
    document.getElementById("1v11").onclick = function() {
        document.getElementById("chooseSlot").style.bottom = `0px`;
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        mapInfo.x = 10e3;
        mapInfo.y = 7e3;
        player.gameMode = 3;
        players = [];
        setUpGame(3);
        beaconPoints = {
            ally: 0,
            enemy: 0
        };
        setMapBuildings(0);
        resize();
    }
    document.getElementById("1v1Match").onclick = function () {
        document.getElementById("chooseSlot").style.bottom = `0px`;
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        mapInfo.x = 10e3;
        mapInfo.y = 7e3;
        player.gameMode = 2;
        players = [];
        setUpGame(2);
        beaconPoints = {
            ally: 0,
            enemy: 0
        };
        setMapBuildings(0);
        resize();
    }
    document.getElementById("extermination").onclick = function () {
        document.getElementById("chooseSlot").style.bottom = `0px`;
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        player.gameMode = 0;
        players = [];
        mapInfo.x = mapInfo.y = 4e3;
        extermination.waveIndex = -1;
        setUpGame(player.gameMode);
        resize();
    }
    document.getElementById("goBackToHanger").onclick = function () {
        document.getElementById("hangerUI").style.display = "block";
        document.getElementById("sideDisplay").style.display = "block";
        document.getElementById("goToBattle").style.display = "block";
        document.getElementById("gameModesDisplay").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = "";
        this.style.display = "none";
    }
    function enterBarForShape(type, shape) {
        let text = "";
        let Shape = shapeData.find(item => item.name == shape.name);
        let maxwidth = window.innerWidth >= 1442 ? 500 : window.innerWidth >= 1374 ? 450 : window.innerWidth >= 1311 ? 400 : window.innerWidth >= 1245 ? 350 : window.innerWidth >= 1182 ? 300 : 250;
        maxwidth += 281.25;
        if (type == "health") {
            let maxhealth = Shape.healthData.base;
            for (let i = 0; i < Shape.healthData.level.length; i++) {
                maxhealth += Shape.healthData.level[i];
            }
            let MK1 = maxhealth;
            maxhealth *= 1.2;
            let MK2 = maxhealth;
            maxhealth *= 1.5;
            let indexAdjust = ((shape.health / maxhealth) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.health + (shape.level == 13 ? (maxhealth - MK2) : shape.level == 12 ? (MK2 - MK1) : Shape.healthData.level[shape.level])) / maxhealth) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Health: ${abbreviateNumber(shape.health)}
            <div style="display: ${Shape.healthData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxhealth - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.healthData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "speed") {
            let maxspeed = Shape.speed;
            for (let i = 0; i < Shape.speedLevel.length; i++) {
                maxspeed += Shape.speedLevel[i];
            }
            let Mk1 = maxspeed;
            maxspeed *= 1.2;
            maxspeed *= 10e3;
            maxspeed = Math.round(maxspeed);
            maxspeed /= 10e3;
            let Mk2 = maxspeed;
            maxspeed *= 1.1;
            maxspeed *= 10e3;
            maxspeed = Math.round(maxspeed);
            maxspeed /= 10e3;
            let indexAdjust = ((shape.speed / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.speed + (shape.level == 13 ? (maxspeed - Mk2) : shape.level == 12 ? (Mk2 - Mk1) : Shape.speedLevel[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Speed: ${shape.speed * 1000}
            <div style="display: ${Shape.speedLevel[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? (maxspeed - Mk2) * 1000 : shape.level == 12 ? (Mk2 - Mk1) * 1000 : (Shape.speedLevel[shape.level] * 1000)}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "ability damage" && shape.ability && shape.ability.dmg) {
            let maxspeed = Shape.ability.damageData.base;
            for (let i = 0; i < Shape.ability.damageData.level.length; i++) {
                maxspeed += Shape.ability.damageData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let MK2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.ability.dmg / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.dmg + (shape.level == 13 ? maxspeed - MK2 : shape.level == 12 ? MK2 - MK1 : Shape.ability.damageData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Ability Damage: ${abbreviateNumber(shape.ability.dmg)}
            <div style="display: ${Shape.ability.damageData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.ability.damageData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "shield hp" && shape.baseShielding) {
            let maxspeed = Shape.shieldData.base;
            for (let i = 0; i < Shape.shieldData.level.length; i++) {
                maxspeed += Shape.shieldData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let Mk2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.baseShielding.health / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.baseShielding.health + (shape.level == 13 ? maxspeed - Mk2 : shape.level == 12 ? Mk2 - MK1 : Shape.shieldData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability: ${abbreviateNumber(shape.baseShielding.health)}
            <div style="display: ${Shape.shieldData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - Mk2) : shape.level == 12 ? abbreviateNumber(Mk2 - MK1) : abbreviateNumber(Shape.shieldData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "ability dot damage" && shape.ability && shape.ability.dotDamage) {
            let maxspeed = Shape.ability.dotData.base;
            for (let i = 0; i < Shape.ability.dotData.level.length; i++) {
                maxspeed += Shape.ability.dotData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let MK2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.ability.dotDamage / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.dotDamage + (shape.level == 13 ? maxspeed - MK2 : shape.level == 12 ? MK2 - MK1 : Shape.ability.dotData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Ability DOT Damage: ${abbreviateNumber(shape.ability.dotDamage)}
            <div style="display: ${Shape.ability.dotData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.ability.dotData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        } else if (type == "ashield hp" && shape.ability && shape.ability.shieldHp) {
            let maxspeed = Shape.ability.shieldHpData.base;
            for (let i = 0; i < Shape.ability.shieldHpData.level.length; i++) {
                maxspeed += Shape.ability.shieldHpData.level[i];
            }
            let MK1 = maxspeed;
            maxspeed *= 1.2;
            let MK2 = maxspeed;
            maxspeed *= 1.5;
            let indexAdjust = ((shape.ability.shieldHp / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.shieldHp + (shape.level == 13 ? maxspeed - MK2 : shape.level == 12 ? MK2 - MK1 : Shape.ability.shieldHpData.level[shape.level])) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Shield Durability: ${abbreviateNumber(shape.ability.shieldHp)}
            <div style="display: ${Shape.ability.shieldHpData.level[shape.level] ? "block" : shape.level == 13 ? "block" : shape.level == 12 ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${shape.level == 13 ? abbreviateNumber(maxspeed - MK2) : shape.level == 12 ? abbreviateNumber(MK2 - MK1) : abbreviateNumber(Shape.ability.shieldHpData.level[shape.level])}
            </div>
            </div>
            <div style="position: relative; width: ${maxwidth}px; height: 3px; background-color: #fff;">
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjusted * 100}%; background-color: #02de02;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; height: 3px; width: ${indexAdjust * 100}%; background-color: #00fcec;">
            </div>
            </div>
            `;
        }
        return text;
    }
    var text = [];
    var textIndex = 0;
    function addText(x, y, value, life, color) {
        if(!dmghealtext) return;
        value = Math.abs(value);
        let dirs = [-0.78, -2.34, -0.39, -1.17, -1.95];
        text.push({
            x: x,
            y: y,
            value: value,
            dir: dirs[textIndex % 5],
            life: life,
            color: color
        });
        textIndex++;
    }
    function upgradeShape(shape, noEz, isBOT) {
        let Shape = shapeData.find(item => item.name == shape.name);
        let healthIncrease = Shape.healthData.level[shape.level];
        if (shape.level < 12) {
            shape.sellPrice += sliverUpgradesByTier[shape.tier].shapes[shape.level] * .75;
            shape.health += healthIncrease;
            shape.maxhealth += healthIncrease;
            let speedIncrease = Shape.speedLevel[shape.level];
            shape.speed += speedIncrease;
            shape.speed = (shape.speed * 1000).toFixed(1) / 1000;
        } else {
            shape.health *= shape.level == 13 ? 1.5 : 1.2;
            shape.maxhealth *= shape.level == 13 ? 1.5 : 1.2;
            shape.speed *= shape.level == 13 ? 1.1 : 1.2;
            shape.speed *= 10e3;
            shape.speed = Math.round(shape.speed);
            shape.speed /= 10e3;
        }
        if (shape.ability) {
            if (shape.ability.shieldHp) {
                let increase = Shape.ability.shieldHpData.level[shape.level];//dotDamage
                if (shape.level < 12) {
                    shape.ability.shieldHp += increase;
                } else {
                    shape.ability.shieldHp *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
                }
            }
            if (shape.ability.dmg) {
                let increase = Shape.ability.damageData.level[shape.level];//dotDamage
                if (shape.level < 12) {
                    shape.ability.dmg += increase;
                } else {
                    shape.ability.dmg *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
                }
            }
            if (shape.ability.dotDamage) {
                let increase = Shape.ability.dotData.level[shape.level];
                if (shape.level < 12) {
                    shape.ability.dotDamage += increase;
                } else {
                    shape.ability.dotDamage *= isBOT ? 1.15 : shape.level == 13 ? 1.5 : 1.2;
                }
            }
        }
        if (shape.baseShielding) {
            if (shape.level < 12) {
                let increase = Shape.shieldData.level[shape.level];
                shape.baseShielding.health += increase;
            } else {
                shape.baseShielding.health *= shape.level == 13 ? 1.5 : 1.2;
            }
        }
        shape.level++;
        if (shape.slot != null && !noEz) {
            document.getElementById("slot" + shape.slot).click();
            document.getElementById("upgradeShape").click();
        }
        if (!noEz) updateSlots();
        if (!noEz) saveGameData();
    }
    class microchip {
        constructor(data, ownerSID=undefined, slot=undefined) {
            this.owner = ownerSID;
            this.slot = slot;
            this.name = data.name;
            this.desc = data.desc;
            this.main = data.main;
            this.fontSize = data.fontSize;
            this.imageSource = data.imageSource;
            this.healthIncrease = data.healthIncreaseData ? data.healthIncreaseData[0] : data.healthIncrease;
            this.dmgIncrease = data.dmgIncreaseData ? data.dmgIncreaseData[0] : data.dmgIncrease;
            this.speedIncrease = data.speedIncreaseData ? data.speedIncreaseData[0] : data.speedIncrease;
            this.mechanicHeal = data.mechanicHealData ? data.mechanicHealData[0] : data.mechanicHeal;
            this.onKillDefense = data.onKillDefenseData ? data.onKillDefenseData[0] : data.onKillDefense;
            this.onKillSpeed = data.onKillSpeedData ? data.onKillSpeedData[0] : data.onKillSpeed;
            this.onLowDefense = data.onLowDefenseData ? data.onLowDefenseData[0] : data.onLowDefense;
            this.onLowSpeed = data.onLowSpeedData ? data.onLowSpeedData[0] : data.onLowSpeed;
            this.level = 0;
        }//
    }
    var microshipData = [{
        name: "Armor Expert",
        desc: "The shape has increased durability.",
        main: "health increase",
        imageSource: "./images/modules/armor_plating.png",
        healthIncreaseData: [.06, .09, .12, .15]
    }, {
        name: "Tough Guy",
        fontSize: 12,
        desc: "The robot has increased durability, but its weapon damage is lowered by ",
        main: "health increase",
        imageSource: "./images/modules/armor_plating.png",
        healthIncreaseData: [.075, .1125, .15, .1875],
        dmgIncreaseData: [-.0125, -.018, -.022, -.025]
    }, {
        name: "Gunsmith",
        desc: "The weapon deals increased damage.",
        main: "dmg increase",
        imageSource: "./images/modules/nuclear_reactor.png",
        dmgIncreaseData: [.0125, .019, .025, .032]
    }, {
        name: "Thrill Seeker",
        fontSize: 12,
        desc: "The shape deals increased weapon damage, but its durability is lowered by ",
        main: "dmg increase",
        imageSource: "./images/modules/nuclear_reactor.png",
        dmgIncreaseData: [.025, .0375, .05, .085],
        healthIncreaseData: [-.025, -.019, -.05, -.0625]
    }, {
        name: "Road Hog",
        desc: "The shape has increased speed.",
        main: "speed increase",
        imageSource: ["speed"],
        speedIncreaseData: [.06, .09, .12, .15]
    }, {
        name: "Cautious Pilot",
        fontSize: 12,
        desc: "The shape has increased durability, but its speed is lowered by ",
        main: "health increase",
        imageSource: "./images/modules/armor_plating.png",
        healthIncreaseData: [.075, .1125, .15, .1875],
        speedIncreaseData: [-.0375, -.056, -.075, -.093]
    }, {
        name: "Mechanic",
        fontSize: 12,
        desc: "The robot repairs a portion of its maximum durability each second.",
        main: "mechanic",
        imageSource: "./images/self_heal.png",
        mechanicHealData: [0.0025, .004, .005, .007]
    }, {
        name: "Survivor",
        fontSize: 12,
        desc: "The shape deals increased weapon damage, but its speed is lowered by ",
        main: "dmg increase",
        imageSource: "./images/modules/nuclear_reactor.png",
        dmgIncreaseData: [.025, .0375, .05, .085],
        speedIncreaseData: [-.0375, -.056, -.075, -.093]
    }, {
        name: "Wise Opportunist",
        fontSize: 12,
        desc: "Destroying an enemy shape increases your Defence Point for 5 seconds.",
        main: "on kill defense",
        imageSource: "./images/modules/armor_plating.png",
        onKillDefenseData: [10, 15, 20, 30]
    }, {
        name: "Cunning Opportunist",
        fontSize: 12,
        desc: "Destroying an enemy shape increases your Movement Speed for 5 seconds.",
        main: "on kill speed",
        imageSource: ["speed"],
        onKillSpeedData: [.06, .09, .12, .15]
    }, {
        name: "Stubborn Warrior",
        fontSize: 12,
        desc: "As long as the shape has low Durability (30% or below), it gains additional Defence Point.",
        main: "on low defense",
        imageSource: "./images/modules/armor_plating.png",
        onLowDefenseData: [12.5, 18.75, 25, 40]
    }, {
        name: "Spy",
        fontSize: 12,
        desc: "The shape has increased speed, but its weapon damage is lowered by ",
        main: "speed increase",
        imageSource: ["speed"],
        speedIncreaseData: [.0375, .056, .075, .094],
        dmgIncreaseData: [-.0125, -.018, -.022, -.025],
    }, {
        name: "Stubborn Speedster",
        fontSize: 12,
        desc: "As long as the shape has low Durability (30% or below), it gains additional movement speed.",
        main: "on low speed",
        imageSource: "./images/modules/armor_plating.png",
        onLowSpeedData: [.06, .09, .12, .15]
    }];
    var microchips = [];
    function upgradeMicrochip(microchip, noEz) {
        let Micro = microshipData.find(e => e.name == microchip.name);
        microchip.level++;
        if (Micro.healthIncreaseData) {
            microchip.healthIncrease = Micro.healthIncreaseData[microchip.level];
            microchip.healthIncrease *= 1000;
            microchip.healthIncrease = Math.round(microchip.healthIncrease);
            microchip.healthIncrease /= 1000;
        }
        if (Micro.dmgIncreaseData) {
            microchip.dmgIncrease = Micro.dmgIncreaseData[microchip.level];
            microchip.dmgIncrease *= 1000;
            microchip.dmgIncrease = Math.round(microchip.dmgIncrease);
            microchip.dmgIncrease /= 1000;
        }
        if (Micro.speedIncreaseData) {
            microchip.speedIncrease = Micro.speedIncreaseData[microchip.level];
            microchip.speedIncrease *= 1000;
            microchip.speedIncrease = Math.round(microchip.speedIncrease);
            microchip.speedIncrease /= 1000;
        }
        if (Micro.mechanicHealData) {
            microchip.mechanicHeal = Micro.mechanicHealData[microchip.level];
            microchip.mechanicHeal *= 1000;
            microchip.mechanicHeal = Math.round(microchip.mechanicHeal);
            microchip.mechanicHeal /= 1000;
        }
        if (Micro.onKillDefenseData) {
            microchip.onKillDefense = Micro.onKillDefenseData[microchip.level];
        }
        if (Micro.onKillSpeedData) {
            microchip.onKillSpeed = Micro.onKillSpeedData[microchip.level];
            microchip.onKillSpeed *= 1000;
            microchip.onKillSpeed = Math.round(microchip.onKillSpeed);
            microchip.onKillSpeed /= 1000;
        }
        if (Micro.onLowDefenseData) {
            microchip.onLowDefense = Micro.onLowDefenseData[microchip.level];
        }
        if (Micro.onLowSpeedData) {
            microchip.onLowSpeed = Micro.onLowSpeedData[microchip.level];
            microchip.onLowSpeed *= 1000;
            microchip.onLowSpeed = Math.round(microchip.onLowSpeed);
            microchip.onLowSpeed /= 1000;
        }
        if(!noEz) saveGameData();
    }
    function doMicrochipStuff(element, button, shape) {
        let width = window.innerWidth * .75;
        let height = window.innerHeight * .75;
        element.innerHTML = `
        <div id="close" style="position: absolute; cursor: pointer; color: #fff; top: 5px; right: 10px;">
        x
        </div>
        <div style="position: absolute; left: 10px; top: 10px;">

        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${tierColor(shape)};">
        ${shape.level >= 13 ? 1 : shape.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${shape.name}
        ${shape.level >= 13 ? `<span style="color: #${levelToMKColor(shape.level)};">${levelToMKText(shape.level)}</span>` : ""}
        </strong>
        </div>
        </div>

        </div>
        <div id="shapeImage2" style="position: absolute; left: 10px; top: 50px; width: 300px; height: 300px;">
        </div>

        <div id="microPage1">
        <div style="position: absolute; color: #fff; left: 320px; top: 10px; width: ${width-350}px; height: 50px; border-radius: 4px; background-color: rgb(0, 0, 0, .4);">
        <div style="margin-left: 10px; margin-top: 2px;">
        Microchips for ${`<span style="color: ${tierColor(shape)}">${shape.name}</span>`}<br>
        Microchip slots: ${Math.min(12, shape.level)}/12
        </div>

        <div id="change" style="position: absolute; cursor: pointer; padding-top: 5px;padding-left: 2px;padding-right: 2px; border-radius: 4px; padding-bottom: 5px; top: 10px; right: 5px; background-color: #808080;">
        Change Microchip
        </div>
        </div>

        <div id="micoDis" style="position: absolute; color: #fff; left: 320px; top: 70px; width: ${width-350}px; height: ${height-90}px; border-radius: 4px; overflow-y: scroll;">
        </div>


        <div id="buyMenu22" style="position: absolute; display: none; color: #fff; top: ${(height/2)-(225/2)}px; left: ${(width/2)-(425/2)}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        </div>

        <div id="microPage2" style="display: none;">
        <div style="position: absolute; color: #fff; left: 320px; top: 10px; width: ${width-350}px; height: 50px; border-radius: 4px; background-color: rgb(0, 0, 0, .4);">
        <div style="margin-left: 10px; margin-top: 2px;">
        Microchips for ${`<span style="color: ${tierColor(shape)}">${shape.name}</span>`}<br>
        <div id="slotNumDis">
        Slot to change: 
        </div>
        </div>

        <div id="back" style="position: absolute; cursor: pointer; padding-top: 5px;padding-left: 2px;padding-right: 2px; border-radius: 4px; padding-bottom: 5px; top: 10px; right: 5px; background-color: #808080;">
        Go Back
        </div>
        </div>

        <div id="micoDis2" style="position: absolute; color: #fff; left: 320px; top: 70px; width: ${width-350}px; height: ${height-90}px; border-radius: 4px; overflow-y: scroll;">
        </div>


        <div id="buyMenu222222" style="position: absolute; display: none; color: #fff; top: ${(height/2)-(225/2)}px; left: ${(width/2)-(425/2)}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        </div>
        `;
        let image = getShapeSprite(shape, true);
        image.style = "width: 100%; height: 100%;";
        document.getElementById("shapeImage2").appendChild(image);
        document.getElementById("close").onclick = function() {
            element.style.display = "none";
            button.style.display = "block";
        }
        document.getElementById("change").onclick = function() {
            document.getElementById("microPage1").style.display = "none";
            document.getElementById("microPage2").style.display = "block";
            document.getElementById("buyMenu22").style.display = "none";
            updateChangeDis();
        }
        document.getElementById("back").onclick = function() {
            document.getElementById("buyMenu222222").style.display = "none";
            document.getElementById("microPage1").style.display = "block";
            document.getElementById("microPage2").style.display = "none";
            updateMicroDis();
        }
        let updateMicroDis = () => {
            let filteredMicro = microchips.filter(e => e.owner == shape.sid);
            document.getElementById("micoDis").innerHTML = "";
            let amountHave = Math.min(shape.level, 12) - 1;
            for(let i = 0; i < 12; i++) {
                let micro = filteredMicro.find(e => e.slot == i);
                if(micro) {
                    document.getElementById("micoDis").innerHTML += `
                    <div style="position: absolute; left: 0px; top: ${(70*i)}px; width: 100%; height: 60px; background-color: rgb(0, 0, 0, 0.4); border-radius: 4px;">
                    <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(to right, rgb(0, 0, 0, 0), ${tierColor({tier: micro.level})});">
                    </div>
                    <div style="position: absolute; top: 0px; left: 0px; width: 60px; height: 60px; background-size: 60px 60px; background-image: url('${micro.imageSource}');">
                    ${typeof micro.imageSource == "object" ? `
                    <span class="material-symbols-outlined" style="font-size: 60px; color: #cfe2f3;">
                    ${micro.imageSource[0]}
                    </span>
                    ` : ""}
                    </div>
                    <div style="position: absolute; top: 5px; left: 65px;">
                    ${micro.name}
                    <hr style="position: absolute; left: 0px; width: ${(width-350)-225}px; margin-block-start: .2em; margin-block-end: .2em;">
                    <div style="margin-top: 8px; ${micro.fontSize ? `font-size: ${micro.fontSize}px;` : ""}">
                    ${micro.desc}${micro.name == "Tough Guy" ? `${Math.abs(100 * micro.dmgIncrease)}%.` : micro.name == "Thrill Seeker" ? `${Math.abs(100 * micro.healthIncrease)}%.` : (micro.name == "Cautious Pilot" || micro.name == "Survivor" || micro.name == "Spy") ? `${Math.abs(100 * micro.speedIncrease)}%.` : ""}
                    </div>
                    </div>
                    <div style="position: absolute; top: 5px; right: 160px;">
                    ${micro.main == "on low speed" ? `${(micro.onLowSpeed*100)}%` : micro.main == "on low defense" ? micro.onLowDefense : micro.main == "on kill speed" ? `${(100 * micro.onKillSpeed)}%` : micro.main == "on kill defense" ? micro.onKillDefense : micro.main == "mechanic" ? `${(100 * micro.mechanicHeal)}%` : micro.main == "health increase" ? `${(100 * micro.healthIncrease)}%` : micro.main == "speed increase" ? `${(100 * micro.speedIncrease)}%` : `${(100 * micro.dmgIncrease)}%`}
                    </div>
                    <div ${micro.level == 3 ? "" : `id="upgradeMicro${i}"`} style="${micro.level == 3 ? "font-size: 16px;" : ""} position: absolute; cursor: ${micro.level == 3 ? "" : "pointer"}; text-align: center; top: 7px; width: 120px; height: 45px; right: 10px; background-color: ${micro.level == 3 ? "#808080" : "#0f0"}; border-radius: 6px;">
                    ${micro.level == 3 ? "MAXED<br>LEVEL" : "UPGRADE MICROCHIP"}
                    </div>
                    </div>
                    `;
                } else if (i > amountHave) {
                } else {
                    document.getElementById("micoDis").innerHTML += `
                    <div id="addMicro${i}" style="position: absolute; cursor: pointer; left: 0px; top: ${(70*i)}px; width: 100%; height: 60px; background-color: rgb(0, 0, 0, 0.4); border-radius: 4px;">
                    <span class="material-symbols-outlined" style="margin-left: 5px; font-size: 60px; color: #0f0;">
                        add_box
                    </span>
                    <div style="position: absolute; top: 2px; left: 70px; font-size: 40px;">
                    Add Microchip
                    </div>
                    </div>
                    `;
                }
            }
            for(let i = 0; i < 12; i++) {
                if (document.getElementById(`addMicro${i}`)) {
                    document.getElementById(`addMicro${i}`).onclick = function() {
                        let filtered = microshipData.filter(e => !filteredMicro.find(item => e.name == item.name));
                        if(filtered.length) {
                            let random = filtered[Math.floor(Math.random() * filtered.length)];
                            microchips.push(new microchip(random, shape.sid, i));
                            updateMicroDis();
                        }
                    }
                }
                if (document.getElementById(`upgradeMicro${i}`)) {
                    document.getElementById(`upgradeMicro${i}`).onclick = function() {
                        let microchip = filteredMicro.find(e => e.slot == i);
                        let num = 60;
                        let level = microchip.level;
                        let amount = level == 2 ? 5e3 : level == 1 ? 25e2 : 1e3;
                        document.getElementById("buyMenu22").style.display = "block";
                        document.getElementById("buyMenu22").innerHTML = `
                        <div style="width: 100%; text-align: center; font-size: 30px;">
                        Confirm Upgrade
                        </div>
                        <hr>

                        <div style="position: absolute; top: ${num}px; left: ${425/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
                        <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
                        </div>
                        <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
                        ${abbreviateNumber(amount)}
                        </div>
                        </div>

                        <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: ${425/2-75}px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
                        Confirm
                        </div>
                        `;
                        document.getElementById("confirm").onclick = function() {
                            if(player.workshopPoints - amount >= 0) {
                                updateMoneyDisplay("workshopPoints", -amount);
                                upgradeMicrochip(microchip);
                                document.getElementById("buyMenu22").style.display = "none";
                                updateMicroDis();
                            }
                        };
                    };
                }
            }
        };
        let updateChangeDis = () => {
            let slotChange = undefined;
            let filteredMicro = microchips.filter(e => e.owner == shape.sid);
            let filtered = microshipData.filter(e => !filteredMicro.find(item => e.name == item.name));
            document.getElementById("slotNumDis").innerHTML = "Slot to change: ";
            document.getElementById("micoDis2").innerHTML = "";
            for(let i = 0; i < Math.min(12, shape.level); i++) {
                if(filteredMicro.find(e => e.slot == i)) {
                    document.getElementById("slotNumDis").innerHTML += `
                    <button id="changeSlotsss${i}" style="cursor: pointer;">
                    ${i+1}
                    </button>
                    `;
                }
            }
            for(let i = 0; i < Math.min(12, shape.level); i++) {
                if(document.getElementById(`changeSlotsss${i}`)) {
                    document.getElementById(`changeSlotsss${i}`).onclick = function() {
                        for(let t = 0; t < Math.min(12, shape.level); t++) {
                            if(document.getElementById(`changeSlotsss${t}`)) {
                                document.getElementById(`changeSlotsss${t}`).style.color = null;
                                document.getElementById(`changeSlotsss${t}`).style.backgroundColor = null;
                            }
                        }
                        slotChange = i;
                        document.getElementById(`changeSlotsss${i}`).style.color = "#fff";
                        document.getElementById(`changeSlotsss${i}`).style.backgroundColor = "#000";
                    }
                }
            }
            for(let i = 0; i < filtered.length; i++) {
                let micro = new microchip(filtered[i]);
                document.getElementById("micoDis2").innerHTML += `
                <div style="position: absolute; left: 0px; top: ${(70*i)}px; width: 100%; height: 60px; background-color: rgb(0, 0, 0, 0.4); border-radius: 4px;">
                <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(to right, rgb(0, 0, 0, 0), ${tierColor({tier: micro.level})});">
                </div>
                <div style="position: absolute; top: 0px; left: 0px; width: 60px; height: 60px; background-size: 60px 60px; background-image: url('${micro.imageSource}');">
                ${typeof micro.imageSource == "object" ? `
                <span class="material-symbols-outlined" style="font-size: 60px; color: #cfe2f3;">
                ${micro.imageSource[0]}
                </span>
                ` : ""}
                </div>
                <div style="position: absolute; top: 5px; left: 65px;">
                ${micro.name}
                <hr style="position: absolute; left: 0px; width: ${(width-350)-225}px; margin-block-start: .2em; margin-block-end: .2em;">
                <div style="margin-top: 8px; ${micro.fontSize ? `font-size: ${micro.fontSize}px;` : ""}">
                ${micro.desc}${micro.name == "Tough Guy" ? `${Math.abs(100 * micro.dmgIncrease)}%.` : micro.name == "Thrill Seeker" ? `${Math.abs(100 * micro.healthIncrease)}%.` : (micro.name == "Cautious Pilot" || micro.name == "Survivor" || micro.name == "Spy") ? `${Math.abs(100 * micro.speedIncrease)}%.` : ""}
                </div>
                </div>
                <div style="position: absolute; top: 5px; right: 160px;">
                ${micro.main == "on low speed" ? `${(micro.onLowSpeed*100)}%` : micro.main == "on low defense" ? micro.onLowDefense : micro.main == "on kill speed" ? `${(100 * micro.onKillSpeed)}%` : micro.main == "on kill defense" ? micro.onKillDefense : micro.main == "mechanic" ? `${(100 * micro.mechanicHeal)}%` : micro.main == "health increase" ? `${(100 * micro.healthIncrease)}%` : micro.main == "speed increase" ? `${(100 * micro.speedIncrease)}%` : `${(100 * micro.dmgIncrease)}%`}
                </div>
                <div id="addddddMicro${i}" style="position: absolute; font-size: 35px; cursor: pointer; text-align: center; top: 7px; width: 120px; height: 45px; right: 10px; background-color: #0f0; border-radius: 6px;">
                BUY
                </div>
                </div>
                `;
            }
            for(let i = 0; i < filtered.length; i++) {
                document.getElementById(`addddddMicro${i}`).onclick = function() {
                    let num = 60;
                    document.getElementById("buyMenu222222").style.display = "block";
                    let amount = Math.min(12, shape.level) * 250;
                    document.getElementById("buyMenu222222").innerHTML = `
                    <div style="width: 100%; text-align: center; font-size: 30px;">
                    Confirm Purchase
                    </div>
                    <hr>

                    <div style="position: absolute; top: ${num}px; left: ${425/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
                    <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
                    </div>
                    <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
                    ${amount}
                    </div>
                    </div>

                    <div id="LAMLASMDIOASJDOIASJDIASODJOASDISDJAOJAISDJAISD" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: ${425/2-75}px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
                    Confirm
                    </div>
                    `;
                    document.getElementById(`LAMLASMDIOASJDOIASJDIASODJOASDISDJAOJAISDJAISD`).onclick = function() {
                        if(slotChange >= 0 && slotChange != null && slotChange != undefined) {
                            if(player.workshopPoints - amount >= 0) {
                                updateMoneyDisplay("workshopPoints", -amount);
                                document.getElementById("back").click();
                                document.getElementById("buyMenu222222").style.display = "none";
                                let old = microchips.findIndex(e => e.owner == shape.sid && e.slot == slotChange);
                                microchips.splice(old, 1);
                                microchips.push(new microchip(filtered[i], shape.sid, slotChange));
                                updateMicroDis();
                                updateChangeDis();
                                saveGameData();
                            }
                        }
                    }
                }
            }
        };
        updateMicroDis();
    }
    function customizeShape(shape) {
        let customizedShape = shape;
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = `
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${tierColor(shape)});">
        </div>
        <div id="otherSlots" style="position: absolute; left: ${window.innerWidth/2-200}px; top: 20px; width: 400px; height: 50px; background-color: rgb(0, 0, 0, 0.3); border-radius: 6px; overflow: hidden;">
        </div>
        <div style="position: absolute; overflow-y: scroll; left: 20px; top: ${(window.innerHeight/2)-250}px; width: 325px; height: 500px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${tierColor(shape)};">
        ${shape.level >= 13 ? 1 : shape.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${shape.name}
        ${shape.level >= 13 ? `<span style="color: #${levelToMKColor(shape.level)};">${levelToMKText(shape.level)}</span>` : ""}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${shape.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${shape.ability ? shape.ability.desc + "<br>" : ""}
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        Health: ${abbreviateNumber(shape.health)}<br>
        ${shape.builtInDefensePoints ? `Defense Points: ${shape.builtInDefensePoints} (${((1 - defensePointsToResistance(shape.builtInDefensePoints)) * 100).toFixed(1)}% Resistance)<br>` : ""}
        Speed: ${shape.speed * 1000} PX/SEC<br>
        ${shape.baseShielding ? `Energy Shield Health: ${abbreviateNumber(shape.baseShielding.health)}<br>` : ""}
        ${shape.baseDamageIncrease ? `Base Dmg Increase: ${shape.baseDamageIncrease * 100}%<br>` : ""}
        ${shape.reflector ? `Damage Reflection: ${shape.reflector * 100}%<br>` : ""}
        ${shape.ability && shape.ability.dmg ? `Ability Dmg: ${abbreviateNumber(shape.ability.dmg)}<br>` : ""}
        ${shape.ability && shape.ability.dotDamage ? `Ability DOT Dmg: ${abbreviateNumber(shape.ability.dotDamage)}<br>` : ""}
        ${shape.ability && shape.ability.shieldHp ? `Ability Shield HP: ${abbreviateNumber(shape.ability.shieldHp)}<br>` : ""}
        ${shape.dotResistance ? `DOT Resistance: ${removeDecimals((1-shape.dotResistance) * 100)}%<br>` : ""}
        ${shape.healingMulti ? `Healing Effectiveness: ${removeDecimals(shape.healingMulti*100)}%<br>` : ""}
        ${shape.revive ? `Revival Amount: ${removeDecimals(shape.revive * 100)}%<br>` : ""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="shapeImage" style="position: absolute; left: ${window.innerWidth/2-187.5}px; top: ${window.innerHeight/2-187.5}px; width: 375px; height: 375px;">
        </div>
        <div style="position: absolute; overflow-y: scroll; right: 20px; top: ${(window.innerHeight/2)-267.5}px; width: 325px; height: 535px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.2);">
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
        <div id="microchipList" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 355px; top: ${window.innerHeight/2+(250-50)}px; width: 50px; height: 50px; background-color: rgb(0, 0, 0, .4); border-radius: 4px;">
        <span class="material-symbols-outlined" style="font-size: 50px; color: #fff;">
        dns
        </span>
        </div>
        <div id="microchipDisplay" style="display: none; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; border-radius: 6px; background-color: rgb(0, 0, 0, 0.3);">
        </div>
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
        </div>
        `;
        document.getElementById("microchipList").onclick = function() {
            this.style.display = "none";
            document.getElementById("microchipDisplay").style.display = "block";
            doMicrochipStuff(document.getElementById("microchipDisplay"), this, shape);
        }
        document.getElementById("backButton").onclick = function() {
            document.getElementById("hangerUI").style.display = "block";
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
        }
        let image = getShapeSprite(shape, true);
        image.style = "width: 100%; height: 100%;";
        document.getElementById("shapeImage").appendChild(image);
        let equippedSlots = player.shapes.filter(e => e.slot != null && e.slot >= 0).sort((a, b) => a.slot - b.slot);
        let slotElement = document.getElementById("otherSlots");
        for(let i = 0; i < 8; i++) {
            slotElement.innerHTML += `
            <div id="slotElement${i}" style="position: absolute; top: 0px; left: ${50*i}px; width: 50px; height: 50px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2)" : "rgb(0, 0, 0, 0.4)"};">
            </div>
            `;
        }
        for(let i = 0; i < 8; i++) {
            let shape = equippedSlots[i];
            if(shape) {
                let image = getShapeSprite(shape, true);
                image.style = "width: 100%; height: 100%;";
                document.getElementById(`slotElement${i}`).appendChild(image);
                if(shape == customizedShape) {
                    document.getElementById(`slotElement${i}`).style.backgroundColor = "rgb(0, 255, 0)";
                }else {
                    document.getElementById(`slotElement${i}`).style.cursor = "pointer";
                    document.getElementById(`slotElement${i}`).onclick = function() {
                        customizeShape(shape);
                    }
                }
            }else if(!slotData[i].unlocked) {
                document.getElementById(`slotElement${i}`).style.backgroundColor = "rgb(0, 0, 0, 0.4)";
                document.getElementById(`slotElement${i}`).innerHTML = `
                <span class="material-symbols-outlined" style="font-size: 50px; color: #fff;">
                lock
                </span>
                `;
            }
        }
        let hardpoints = shape.hardpoints.light + shape.hardpoints.heavy;
        let filteredWeapons = player.weapons.filter(e => e.owner == shape.sid);
        let elements = [];
        let doWeaponsStuff = () => {
            elements = [];
            for (let i = 0; i < hardpoints; i++) {
                let weaponType = "";
                if (i < shape.hardpoints.light && shape.hardpoints.light > 0) {
                    elements.push("LIGHT slot" + i);
                    weaponType = "LIGHT";
                } else {
                    elements.push("HEAVY slot" + i);
                    weaponType = "HEAVY";
                }
                document.getElementById("weaponDisplay").innerHTML += `
                <div id="${weaponType} slot${i}" style="position: relative; cursor: pointer; height: ${500 / 4}px; width: 100%; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2);" : "rgb(255, 255, 255, 0.1);"}}">
                </div>
                `;
            }
            for (let i = 0; i < elements.length; i++) {
                let elementId = elements[i];
                let weapon = filteredWeapons.find(e => e.slot == parseInt(elementId[elementId.length - 1]));
                if (!weapon) {
                    document.getElementById(elementId).innerHTML = `
                    <span style="position: absolute; top: ${125 / 2 - 27}px; left: ${325 / 2 - 135}px; font-size: 40px;">Equip Weapon</span>
                    `;
                    document.getElementById(elementId).onclick = function () {
                        customizeWeapon(elementId.includes("LIGHT") ? "Light" : "Heavy", shape, parseInt(elementId[elementId.length - 1]));
                    }
                } else {
                    let weaponIcon = getWeaponIcon(weapon, true);
                    weaponIcon.style = "width: 125px; height: 125px;";
                    document.getElementById(elementId).appendChild(weaponIcon);
                    document.getElementById(elementId).innerHTML += `
                    <div style="position: absolute; color: ${tierColor(weapon)}; top: 5px; left: 135px; font-size: 24px;">
                    ${weapon.level >= 13 ? `${weapon.name} <span style="color: ${weapon.level == 13 ? "#0f0" : "#ffff00"};">${weapon.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapon.level} ${weapon.name}`}
                    </div>
                    <div style="position: absolute; top: 32px; left: 135px; color: #fff; font-size: 14px;">
                    ${elementId.includes("LIGHT") ? "Light" : "Heavy"}
                    </div>
                    `;
                    document.getElementById(elementId).onclick = function () {
                        customizeWeapon(weapon, shape, parseInt(elementId[elementId.length - 1]));
                    }
                }
            }
        }
        document.getElementById("switchWeapon").onclick = function() {
            this.style.cursor = null;
            this.style.color = "#000";
            this.style.backgroundColor = "rgb(255, 255, 255, .8)";
            document.getElementById("switchModule").style.color = "#fff";
            document.getElementById("switchModule").style.cursor = "pointer";
            document.getElementById("switchModule").style.backgroundColor = "rgb(0, 0, 0, .3)";
            document.getElementById("weaponDisplay").innerHTML = "";
            doWeaponsStuff();
        }
        let filteredModules = player.modules.filter(e => e.owner == shape.sid);
        let moduleHardpoints = (shape.moduleHardpoints || 0);
        document.getElementById("switchModule").onclick = function() {
            this.style.cursor = null;
            this.style.color = "#000";
            this.style.backgroundColor = "rgb(255, 255, 255, .8)";
            document.getElementById("switchWeapon").style.color = "#fff";
            document.getElementById("switchWeapon").style.cursor = "pointer";
            document.getElementById("switchWeapon").style.backgroundColor = "rgb(0, 0, 0, .3)";
            document.getElementById("weaponDisplay").innerHTML = "";
            let elements = [];
            for (let i = 0; i < moduleHardpoints; i++) {
                document.getElementById("weaponDisplay").innerHTML += `
                <div id="moduleSlot${i}" style="position: relative; cursor: pointer; height: ${500 / 4}px; width: 100%; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2);" : "rgb(255, 255, 255, 0.1);"}}">
                </div>
                `;
                elements.push(`moduleSlot${i}`);
            }
            for (let i = 0; i < elements.length; i++) {
                let elementId = elements[i];
                let module = filteredModules.find(e => e.slot == parseInt(elementId[elementId.length - 1]));
                if (!module) {
                    document.getElementById(elementId).innerHTML = `
                    <span style="position: absolute; top: ${125 / 2 - 27}px; left: 35.25px; font-size: 40px;">
                    Equip Module
                    </span>
                    `;
                } else {
                    let moduleIcon = getWeaponIcon(module, true);
                    moduleIcon.style = "width: 125px; height: 125px;";
                    document.getElementById(elementId).appendChild(moduleIcon);
                    document.getElementById(elementId).innerHTML += `
                    <div style="position: absolute; top: 5px; color: ${tierColor(module)}; left: 135px; font-size: 24px;">
                    Lvl ${module.level} ${module.name}
                    </div>
                    `;
                }
                document.getElementById(elementId).onclick = function () {
                    customizeModule(module, shape, parseInt(elementId[elementId.length - 1]));
                };
            }
        }
        doWeaponsStuff();
        document.getElementById("upgradeShape").onclick = function () {
            slotElement.style.display = "none";
            document.getElementById("microchipDisplay").style.display = "none";
            document.getElementById("microchipList").style.display = "block";
            document.body.appendChild(document.getElementById("moneyDisplay"));
            let adjustwidth = window.innerWidth * .75;
            document.getElementById("upgradeMenu").style.display = "block";
            document.getElementById("upgradeMenu").innerHTML = `
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${enterBarForShape("health", shape)}
            ${enterBarForShape("speed", shape)}
            ${enterBarForShape("ability damage", shape)}
            ${enterBarForShape("ability dot damage", shape)}
            ${enterBarForShape("shield hp", shape)}
            ${enterBarForShape("ashield hp", shape)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "#00ff00" : [12, 13].includes(shape.level) ? "#ffff00" : "#808080"};">
            <div style="width: 100%; text-align: center; color: ${[12, 13].includes(shape.level) ? "#f00" : "#fff"}; font-size: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "24" : [12, 13].includes(shape.level) ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "5" : shape.level == 12 ? "5" : "10"}px;">${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "UPGRADE" : [12, 13].includes(shape.level) ? "ENHANCE" : "MAXED"}</div>
            <div style="color: ${[12, 13].includes(shape.level) ? "#f00" : "#fff"}; display: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "block" : [12, 13].includes(shape.level) ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${[12, 13].includes(shape.level) ? `${abbreviateNumber(shape.enhanceCost * (shape.level == 13 ? 48 : 1))} Gold` : `${abbreviateNumber(sliverUpgradesByTier[shape.tier].shapes[shape.level])} Sliver`}</div>
            </div>
            `;
            let sprite = getShapeSprite(shape, true);
            sprite.style = "width: 280px; height: 280px;";
            document.getElementById("upgradeMenu").appendChild(sprite);
            document.getElementById("leaveUpgrade").onclick = function () {
                document.getElementById("upgradeMenu").style.display = "none";
                slotElement.style.display = "block";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
            document.getElementById("UPGRADE").onclick = function () {
                if (sliverUpgradesByTier[shape.tier].shapes[shape.level] || shape.level == 12 || shape.level == 13) {
                    if (shape.level >= 12) {
                        if (player.gold - (shape.enhanceCost * (shape.level == 13 ? 48 : 1)) >= 0) {
                            updateMoneyDisplay("gold", -(shape.enhanceCost * (shape.level == 13 ? 48 : 1)));
                            upgradeShape(shape);
                            document.getElementById("slot" + shape.slot).click();
                            document.getElementById("upgradeShape").click();
                        }
                    } else {
                        if (player.sliver - sliverUpgradesByTier[shape.tier].shapes[shape.level] >= 0) {
                            updateMoneyDisplay("sliver", -sliverUpgradesByTier[shape.tier].shapes[shape.level]);
                            upgradeShape(shape);
                            document.getElementById("slot" + shape.slot).click();
                            document.getElementById("upgradeShape").click();
                        } else if (player.gold > 0) {
                            let amountNeeded = sliverUpgradesByTier[shape.tier].shapes[shape.level] - player.sliver;
                            let amountToGold = Math.round(amountNeeded / 1250);
                            if (player.gold - amountToGold >= 0) {
                                let answer = prompt(`Not Enough Silver!\nYou Need ${abbreviateNumber(amountNeeded)} Silver!\nUse ${abbreviateNumber(amountToGold)} Gold to make up for the amount of silver missing!\nType "y" or "yes" to confirm.`);
                                if (answer) {
                                    answer = answer.toLocaleLowerCase();
                                    if (answer == "yes" || answer == "y") {
                                        updateMoneyDisplay("sliver", -player.sliver);
                                        updateMoneyDisplay("gold", -amountToGold);
                                        upgradeShape(shape);
                                        document.getElementById("slot" + shape.slot).click();
                                        document.getElementById("upgradeShape").click();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("changeShape").onclick = function () {
            equipShape(shape.slot);
            saveGameData();
        }
    }
    const SHAPPPPPPPPPE = shape;
    function drawShapeEquip(shapes, currentIndex, oldShape, slot, HA, inInventory) {
        let shape = shapes[currentIndex];
        if(!shape.isItem) {
            shape = new SHAPPPPPPPPPE(shape, null, true);
        }
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-image: linear-gradient(rgb(0, 0, 0, 0), ${tierColor(shape)});">
        </div>
        <div style="position: absolute; overflow-y: scroll; left: 80px; top: ${(window.innerHeight/2)-250}px; width: 325px; height: 500px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 7px; left: 5px;">
        <div style="position: absolute; top: 0px; left: 0px; text-align: center; color: #fff; font-size: 25px; border-radius: 100%; width: 40px; height: 40px; background-color: ${tierColor(shape)};">
        ${shape.level >= 13 ? 1 : shape.level}
        </div>
        <div style="position: absolute; top: 2px; width: 260px; left: 45px; color: #fff; font-size: 24px;">
        <strong>
        ${shape.name}
        ${shape.level >= 13 ? `<span style="color: #${levelToMKColor(shape.level)};">${levelToMKText(shape.level)}</span>` : ""}
        </strong>
        </div>
        </div>
        <div style="position: absolute; top: 45px; left: 0px;">
        <hr style="position: absolute; top: 0px; left: 0px; color: #fff; width: 325px;">
        <div style="position: absolute; top: 15px; left: 5px; width: 320px;">
        ${shape.desc}<br>
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        ${shape.ability ? shape.ability.desc + "<br>" : ""}
        <hr style="position: absolute; left: -5px; color: #fff; width: 325px;">
        <br>
        Health: ${abbreviateNumber(shape.health)}<br>
        ${shape.builtInDefensePoints ? `Defense Points: ${shape.builtInDefensePoints} (${((1 - defensePointsToResistance(shape.builtInDefensePoints)) * 100).toFixed(1)}% Resistance)<br>` : ""}
        Speed: ${shape.speed * 1000} PX/SEC<br>
        ${shape.baseShielding ? `Energy Shield Health: ${abbreviateNumber(shape.baseShielding.health)}<br>` : ""}
        ${shape.baseDamageIncrease ? `Base Dmg Increase: ${shape.baseDamageIncrease * 100}%<br>` : ""}
        ${shape.reflector ? `Damage Reflection: ${shape.reflector * 100}%<br>` : ""}
        ${shape.ability && shape.ability.dmg ? `Ability Dmg: ${abbreviateNumber(shape.ability.dmg)}<br>` : ""}
        ${shape.ability && shape.ability.dotDamage ? `Ability DOT Dmg: ${abbreviateNumber(shape.ability.dotDamage)}<br>` : ""}
        ${shape.ability && shape.ability.shieldHp ? `Ability Shield HP: ${abbreviateNumber(shape.ability.shieldHp)}<br>` : ""}
        ${shape.dotResistance ? `DOT Resistance: ${removeDecimals((1-shape.dotResistance) * 100)}%<br>` : ""}
        ${shape.healingMulti ? `Healing Effectiveness: ${removeDecimals(shape.healingMulti*100)}%<br>` : ""}
        ${shape.revive ? `Revival Amount: ${removeDecimals(shape.revive * 100)}%<br>` : ""}
        <p></p>
        </div>
        </div>
        </div>
        <div id="shapeImage" style="position: absolute; left: ${window.innerWidth/2-187.5}px; top: ${window.innerHeight/2-187.5}px; width: 375px; height: 375px;">
        </div>
        <div style="position: absolute; overflow-y: scroll; right: 80px; top: ${(window.innerHeight/2)-267.5}px; width: 325px; height: 535px; border: solid; border-radius: 6px; border-color: #fff; background-color: rgb(0, 0, 0, 0.2);">
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
        <div id="upgradeMenu" style="position: absolute; color: #fff; display: none; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, .7);">
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
        <div style="position: absolute; top: 0px; left: ${(1/shapes.length)*100*currentIndex}%; width: ${(1/shapes.length)*100}%; height: 100%; background-color: #03fcec;">
        </div>
        </div>
        <div id="buyShape" style="position: absolute; display: none; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: ${window.innerWidth/2-87.5}px; bottom: 20px; width: 175px; height: 60px; background-color: rgb(0, 255, 0); border-radius: 6px;">
        BUY
        </div>
        <div id="buyMenu" style="position: absolute; display: none; color: #fff; top: ${(window.innerHeight/2)-(225/2)}px; left: ${(window.innerWidth/2)-(425/2)}px; width: 425px; height: 225px; background-color: rgb(0, 0, 0, .7);">
        </div>
        <div id="sellItem" style="position: absolute; display: ${!shapes[currentIndex].isItem ? "none" : shape == oldShape ? "none" : "block"}; cursor: pointer; top: ${window.innerHeight/2+(267.5-50)}px; right: 415px; width: 50px; height: 50px; background-color: rgb(0, 0, 0, .4);">
        <span class="material-symbols-outlined" style="font-size: 50px; color: #fff;">
        delete
        </span>
        </div>
        `;
        document.getElementById("sellItem").onclick = function() {
            document.getElementById("buyMenu").style.display = "block";
            let num = 60;
            document.getElementById("buyMenu").innerHTML = `
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Sale
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: ${num}px; left: ${425/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${agSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(shape.sellPrice)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 26px; text-align: center; bottom: 10px; left: ${425/2-75}px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `;
            document.getElementById("confirm").onclick = function() {
                let index = player.shapes.findIndex(e => shape == e);
                updateMoneyDisplay("sliver", shape.sellPrice);
                player.weapons.filter(e => shape.sid == e.owner).forEach(item => {
                    item.owner = null;
                    item.slot = null;
                });
                player.modules.filter(e => shape.sid == e.owner).forEach(item => {
                    item.owner = null;
                    item.slot = null;
                });
                if(slotData[shape.slot]) slotData[shape.slot].used = false;
                player.shapes.splice(index, 1);
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").style.display = "block";
            }
            document.getElementById("lo____l").onclick = function() {
                document.getElementById("buyMenu").style.display = "none";
                document.getElementById("buyMenu").innerHTML = "";
            }
        } 
        let image = getShapeSprite(shape, true);
        image.style = "width: 100%; height: 100%;";
        document.getElementById("shapeImage").appendChild(image);
        document.getElementById("storeButton").style.display = "block";
        document.getElementById("inventoryButton").style.display = "block";
        if (currentIndex == 0 && oldShape && shapes[currentIndex].isItem) {
            document.getElementById("equipShape").style.display = "none";
            document.getElementById("upgradeShape").style.left = `${window.innerWidth/2-87.5}px`;
        }else if(!shapes[currentIndex].isItem) {
            document.getElementById("equipShape").style.display = "none";
            document.getElementById("upgradeShape").style.display = "none";
            if(!shapes[currentIndex].dontSell) document.getElementById("buyShape").style.display = "block";
        }
        document.getElementById("buyShape").onclick = function() {
            document.body.appendChild(document.getElementById("moneyDisplay"));
            document.getElementById("buyMenu").style.display = "block";
            document.getElementById("storeButton").style.display = "none";
            document.getElementById("inventoryButton").style.display = "none";
            let num = 60;
            let theHA = shapes[currentIndex];
            document.getElementById("buyMenu").innerHTML = `
            <div style="width: 100%; text-align: center; font-size: 30px;">
            Confirm Purchase
            </div>
            <hr>
            <div id="lo____l" style="position: absolute; cursor: pointer; top: 5px; right: 10px;">
            x
            </div>

            <div style="position: absolute; top: ${num}px; left: ${425/2-62.5}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${agSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(theHA.cost.sliver)}
            </div>
            </div>
    
            <div style="position: absolute; top: ${num}px; left: ${425/2-200}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('${auSource}');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px;  color: #fff;">
            ${abbreviateNumber(theHA.cost.gold)}
            </div>
            </div>
    
            <div style="position: absolute; top: ${num}px; left: ${425/2+75}px; border: solid; border-color: #fff; border-radius: 6px; width: 125px; height: 35px; background-color: rgb(0, 0, 0, 0.2);">
            <div style="position: absolute; top: 0px; left: 0px; width: 35px; height: 35px; background-size: 35px 35px; background-image: url('./images/icons/workshop.png');">
            </div>
            <div style="position: absolute; top: 6.75px; left: 40px; color: #fff;">
            ${abbreviateNumber(theHA.cost.workshopPoints || 0)}
            </div>
            </div>

            <div id="confirm" style="position: absolute; cursor: pointer; font-size: 24px; text-align: center; bottom: 10px; left: ${425/2-75}px; width: 150px; border-radius: 6px; height: 40px; background-color: #0f0;">
            Confirm
            </div>
            `;
            document.getElementById("confirm").onclick = function() {
                let theThing = shapes[currentIndex];
                if (player.sliver - theThing.cost.sliver >= 0 && player.gold - theThing.cost.gold >= 0) {
                    if (!theThing.cost.workshopPoints ? true : player.workshopPoints - theThing.cost.workshopPoints) {
                        updateMoneyDisplay("sliver", -theThing.cost.sliver);
                        updateMoneyDisplay("gold", -theThing.cost.gold);
                        updateMoneyDisplay("workshopPoints", -(theThing.cost.workshopPoints || 0));
                        if (oldShape) {
                            oldShape.slot = null;
                        }
                        slotData[slot].used = true;
                        let sid = shapeSids;
                        player.shapes.push(new SHAPPPPPPPPPE(theThing, slot));
                        let hardpoints = theThing.hardpoints.light + theThing.hardpoints.heavy;
                        for (let i = 0; i < hardpoints; i++) {
                            if (i < theThing.hardpoints.light && theThing.hardpoints.light > 0) {
                                player.weapons.push(new weapon(weaponData[0], sid, i));
                            } else {
                                player.weapons.push(new weapon(weaponData[2], sid, i));
                            }
                        }
                        document.getElementById("sideDisplay").innerHTML = "";
                        document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        document.getElementById("hangerUI").style.display = "block";
                        updateSlots();
                        //document.getElementById("slot" + slot).click();
                        saveGameData();
                    }
                }
            }
            document.getElementById("lo____l").onclick = function() {
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                document.getElementById("buyMenu").style.display = "none";
                document.getElementById("storeButton").style.display = "block";
                document.getElementById("inventoryButton").style.display = "block";
            }
        }
        let hardpoints = shape.hardpoints.light + shape.hardpoints.heavy;
        let filteredWeapons = inInventory ? player.weapons.filter(e => e.owner == shape.sid) : [];
        if(!inInventory) {
            for (let i = 0; i < hardpoints; i++) {
                if (i < shape.hardpoints.light && shape.hardpoints.light > 0) {
                    filteredWeapons.push(new weapon(weaponData[0], null, i));
                } else {
                    filteredWeapons.push(new weapon(weaponData[2], null, i));
                }
            }
        }
        let elements = [];
        let doWeaponsStuff = () => {
            elements = [];
            for (let i = 0; i < hardpoints; i++) {
                let weaponType = "";
                if (i < shape.hardpoints.light && shape.hardpoints.light > 0) {
                    elements.push("LIGHT slot" + i);
                    weaponType = "LIGHT";
                } else {
                    elements.push("HEAVY slot" + i);
                    weaponType = "HEAVY";
                }
                document.getElementById("weaponDisplay").innerHTML += `
                <div id="${weaponType} slot${i}" style="position: relative; ${inInventory ? "cursor: pointer;" : ""} height: ${500 / 4}px; width: 100%; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2);" : "rgb(255, 255, 255, 0.1);"}}">
                </div>
                `;
            }
            for (let i = 0; i < elements.length; i++) {
                let elementId = elements[i];
                let weapon = filteredWeapons.find(e => e.slot == parseInt(elementId[elementId.length - 1]));
                if (!weapon) {
                    document.getElementById(elementId).innerHTML = `
                    <span style="position: absolute; top: ${125 / 2 - 27}px; left: ${325 / 2 - 135}px; font-size: 40px;">Equip Weapon</span>
                    `;
                    document.getElementById(elementId).onclick = function () {
                        customizeWeapon(elementId.includes("LIGHT") ? "Light" : "Heavy", shape, parseInt(elementId[elementId.length - 1]));
                    }
                } else {
                    let weaponIcon = getWeaponIcon(weapon, true);
                    weaponIcon.style = "width: 125px; height: 125px;";
                    document.getElementById(elementId).appendChild(weaponIcon);
                    document.getElementById(elementId).innerHTML += `
                    <div style="position: absolute; color: ${tierColor(weapon)}; top: 5px; left: 135px; font-size: 24px;">
                    ${weapon.level >= 13 ? `${weapon.name} <span style="color: ${weapon.level == 13 ? "#0f0" : "#ffff00"};">${weapon.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${weapon.level} ${weapon.name}`}
                    </div>
                    <div style="position: absolute; top: 32px; left: 135px; color: #fff; font-size: 14px;">
                    ${elementId.includes("LIGHT") ? "Light" : "Heavy"}
                    </div>
                    `;
                    if(inInventory) {
                        document.getElementById(elementId).onclick = function () {
                            customizeWeapon(weapon, shape, parseInt(elementId[elementId.length - 1]));
                        }
                    }
                }
            }
        }
        document.getElementById("switchWeapon").onclick = function() {
            this.style.cursor = null;
            this.style.color = "#000";
            this.style.backgroundColor = "rgb(255, 255, 255, .8)";
            document.getElementById("switchModule").style.color = "#fff";
            document.getElementById("switchModule").style.cursor = "pointer";
            document.getElementById("switchModule").style.backgroundColor = "rgb(0, 0, 0, .3)";
            document.getElementById("weaponDisplay").innerHTML = "";
            doWeaponsStuff();
        }
        let filteredModules = inInventory ? player.modules.filter(e => e.owner == shape.sid) : [];
        let moduleHardpoints = (shape.moduleHardpoints || 0);
        document.getElementById("switchModule").onclick = function() {
            this.style.cursor = null;
            this.style.color = "#000";
            this.style.backgroundColor = "rgb(255, 255, 255, .8)";
            document.getElementById("switchWeapon").style.color = "#fff";
            document.getElementById("switchWeapon").style.cursor = "pointer";
            document.getElementById("switchWeapon").style.backgroundColor = "rgb(0, 0, 0, .3)";
            document.getElementById("weaponDisplay").innerHTML = "";
            let elements = [];
            for (let i = 0; i < moduleHardpoints; i++) {
                document.getElementById("weaponDisplay").innerHTML += `
                <div id="moduleSlot${i}" style="position: relative; ${inInventory ? "cursor: pointer;" : ""} height: ${500 / 4}px; width: 100%; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2);" : "rgb(255, 255, 255, 0.1);"}}">
                </div>
                `;
                elements.push(`moduleSlot${i}`);
            }
            for (let i = 0; i < elements.length; i++) {
                let elementId = elements[i];
                let module = filteredModules.find(e => e.slot == parseInt(elementId[elementId.length - 1]));
                if (!module) {
                    document.getElementById(elementId).innerHTML = `
                    <span style="position: absolute; top: ${125 / 2 - 27}px; left: 35.25px; font-size: 40px;">
                    Equip Module
                    </span>
                    `;
                } else {
                    let moduleIcon = getWeaponIcon(module, true);
                    moduleIcon.style = "width: 125px; height: 125px;";
                    document.getElementById(elementId).appendChild(moduleIcon);
                    document.getElementById(elementId).innerHTML += `
                    <div style="position: absolute; top: 5px; color: ${tierColor(module)}; left: 135px; font-size: 24px;">
                    Lvl ${module.level} ${module.name}
                    </div>
                    `;
                }
                if(inInventory) {
                    document.getElementById(elementId).onclick = function () {
                        if (player.modules.filter(e => e.owner == null).length || module) {
                            customizeModule(module, shape, parseInt(elementId[elementId.length - 1]));
                        } else {
                            alert("You have no modules in inventory.")
                        }
                    };
                }
            }
        }
        doWeaponsStuff();
        document.getElementById("backButton").onclick = function() {
            if(oldShape) {
                document.getElementById("slot" + oldShape.slot).click();
            }else {
                document.getElementById("hangerUI").style.display = "block";
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));    
            }
        }
        document.getElementById("upgradeShape").onclick = function () {
            document.body.appendChild(document.getElementById("moneyDisplay"));
            let adjustwidth = window.innerWidth * .75;
            document.getElementById("upgradeMenu").style.display = "block";
            document.getElementById("upgradeMenu").innerHTML = `
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            ${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${enterBarForShape("health", shape)}
            ${enterBarForShape("speed", shape)}
            ${enterBarForShape("ability damage", shape)}
            ${enterBarForShape("ability dot damage", shape)}
            ${enterBarForShape("shield hp", shape)}
            ${enterBarForShape("ashield hp", shape)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "#00ff00" : [12, 13].includes(shape.level) ? "#ffff00" : "#808080"};">
            <div style="width: 100%; text-align: center; color: ${[12, 13].includes(shape.level) ? "#f00" : "#fff"}; font-size: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "24" : [12, 13].includes(shape.level) ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "5" : shape.level == 12 ? "5" : "10"}px;">${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "UPGRADE" : [12, 13].includes(shape.level) ? "ENHANCE" : "MAXED"}</div>
            <div style="color: ${[12, 13].includes(shape.level) ? "#f00" : "#fff"}; display: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "block" : [12, 13].includes(shape.level) ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${[12, 13].includes(shape.level) ? `${abbreviateNumber(shape.enhanceCost * (shape.level == 13 ? 48 : 1))} Gold` : `${abbreviateNumber(sliverUpgradesByTier[shape.tier].shapes[shape.level])} Sliver`}</div>
            </div>
            `;
            let sprite = getShapeSprite(shape, true);
            sprite.style = "width: 280px; height: 280px;";
            document.getElementById("upgradeMenu").appendChild(sprite);
            document.getElementById("leaveUpgrade").onclick = function () {
                document.getElementById("upgradeMenu").style.display = "none";
                document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            }
            document.getElementById("UPGRADE").onclick = function () {
                if (sliverUpgradesByTier[shape.tier].shapes[shape.level] || shape.level == 12 || shape.level == 13) {
                    if (shape.level >= 12) {
                        if (player.gold - (shape.enhanceCost * (shape.level == 13 ? 48 : 1)) >= 0) {
                            updateMoneyDisplay("gold", -(shape.enhanceCost * (shape.level == 13 ? 48 : 1)));
                            upgradeShape(shape);
                            drawShapeEquip(shapes, currentIndex, oldShape, slot, true);
                        }
                    } else {
                        if (player.sliver - sliverUpgradesByTier[shape.tier].shapes[shape.level] >= 0) {
                            updateMoneyDisplay("sliver", -sliverUpgradesByTier[shape.tier].shapes[shape.level]);
                            upgradeShape(shape);
                            drawShapeEquip(shapes, currentIndex, oldShape, slot, true);
                        } else if (player.gold > 0) {
                            let amountNeeded = sliverUpgradesByTier[shape.tier].shapes[shape.level] - player.sliver;
                            let amountToGold = Math.round(amountNeeded / 1250);
                            if (player.gold - amountToGold >= 0) {
                                let answer = prompt(`Not Enough Silver!\nYou Need ${abbreviateNumber(amountNeeded)} Silver!\nUse ${abbreviateNumber(amountToGold)} Gold to make up for the amount of silver missing!\nType "y" or "yes" to confirm.`);
                                if (answer) {
                                    answer = answer.toLocaleLowerCase();
                                    if (answer == "yes" || answer == "y") {
                                        updateMoneyDisplay("sliver", -player.sliver);
                                        updateMoneyDisplay("gold", -amountToGold);
                                        upgradeShape(shape);
                                        drawShapeEquip(shapes, currentIndex, oldShape, slot, true);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("equipShape").onclick = function() {
            shapes[currentIndex].slot = slot;
            slotData[slot].used = true;
            if (oldShape) {
                oldShape.slot = null;
            }
            console.log(slotData, slot, player.shapes);
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            updateSlots();
            document.getElementById("slot" + slot).click();
            saveGameData();
        }
        if(HA) {
            document.getElementById("upgradeShape").click();
        }
    }
    var auSource = "./images/icons/au_icon.png";
    var agSource = "./images/icons/ag_icon.png";
    var lootboxes = [{
        source: "./images/lootbox/basic_lootbox.png",
        rewards: [{
            type: "shape",
            index: 0
        }, {
            type: "weapon",
            index: 0
        }, {
            type: "money",
            au: true,
            amount: 2
        }, {
            type: "money",
            ag: true,
            amount: 10e3
        }, {
            type: "money",
            ag: true,
            amount: 5e3
        }, {
            type: "money",
            ag: true,
            amount: 2e3
        }, {
            type: "money",
            ag: true,
            amount: 20e3
        }, {
            type: "money",
            ag: true,
            amount: 15e3
        }, {
            type: "money",
            au: true,
            amount: 5
        }, {
            type: "shape",
            id: "12",
            rare: 2,
            index: 1
        }, {
            type: "money",
            au: true,
            id: "13",
            rare: 2,
            amount: 100
        }, {
            type: "money",
            ag: true,
            id: "16",
            rare: 2,
            amount: 1e6
        }],
        cost: 10
    }, {
        source: "./images/lootbox/copper_lootbox.png",
        rewards: [{
            index: 1,
            type: "weapon",
        }, {
            index: 5,
            type: "shape",
            id: "LOL",
            rare: 10
        }, {
            type: "shape",
            index: 6,
            id: "12",
            rare: 3
        }, {
            type: "weapon",
            index: 5,
            id: "13",
            rare: 3
        }, {
            type: "money",
            au: true,
            amount: 100
        }, {
            type: "money",
            au: true,
            amount: 200
        }, {
            type: "money",
            au: true,
            amount: 250
        }, {
            type: "money",
            au: true,
            amount: 1e3,
            id: "124",
            rare: 3
        }, {
            type: "shape",
            index: 3,
            id: "1212",
            rare: 1
        }, {
            type: "shape",
            index: 4,
            id: "12222231",
            rare: 1
        }, {
            type: "money",
            ag: true,
            amount: 100e3
        }, {
            type: "money",
            ag: true,
            amount: 200e3
        }, {
            type: "money",
            ag: true,
            amount: 1e6
        }, {
            type: "weapon",
            index: 3,
            id: "12123",
            rare: 1
        }],
        cost: 100
    }, {
        source: "./images/lootbox/gold_lootbox.png",
        rewards: [{
            type: "weapon",
            index: 6
        }, {
            type: "weapon",
            index: 7
        }, {
            type: "weapon",
            index: 10
        }, {
            type: "weapon",
            index: 13
        }, {
            type: "shape",
            index: 13
        }, {
            type: "weapon",
            index: 5
        }, {
            type: "money",
            ag: true,
            amount: 2e6
        }, {
            type: "money",
            ag: true,
            amount: 1e6
        }, {
            type: "money",
            ag: true,
            amount: 4e6
        }, {
            type: "money",
            ag: true,
            amount: 8e6
        }, {
            type: "money",
            ag: true,
            amount: 10e6
        }, {
            type: "money",
            au: true,
            amount: 25e2
        }, {
            type: "money",
            au: true,
            amount: 1e3
        }, {
            type: "money",
            au: true,
            amount: 2e3
        }, {
            type: "shape",
            index: 5
        }, {
            type: "shape",
            index: 8
        }, {
            type: "shape",
            index: 9
        }, {
            type: "shape",
            index: 10
        }, {
            type: "money",
            keys: true,
            amount: 5e3,
            rare: 1
        }],
        cost: 1e3
    }, {
        source: "./images/lootbox/diamond_lootbox.png",
        rewards: [{
            type: "weapon",
            index: 8
        }, {
            type: "shape",
            index: 21
        }, {
            type: "shape",
            id: "1231232",
            rare: 1,
            index: 18
        }, {
            type: "shape",
            id: "1231s232",
            rare: 1,
            index: 19
        }, {
            type: "weapon",
            index: 9
        }, {
            type: "weapon",
            index: 11
        }, {
            type: "weapon",
            index: 12
        }, {
            type: "weapon",
            index: 14
        }, {
            type: "weapon",
            index: 15
        }, {
            type: "shape",
            id: "1231213123232",
            rare: 1,
            index: 19
        }, {
            type: "money",
            ag: true,
            amount: 50e6
        }, {
            type: "money",
            ag: true,
            amount: 100e6
        }, {
            type: "money",
            ag: true,
            amount: 150e6
        }, {
            type: "money",
            ag: true,
            amount: 200e6
        }, {
            type: "shape",
            index: 14
        }, {
            type: "shape",
            index: 12
        }, {
            type: "shape",
            id: "LSMDLAMSDLSAD",
            rare: 4,
            index: 15
        }, {
            type: "money",
            au: true,
            amount: 5e3
        }, {
            type: "money",
            au: true,
            amount: 10e3
        }, {
            type: "money",
            au: true,
            amount: 15e3
        }, {
            type: "money",
            au: true,
            amount: 20e3
        }],
        cost: 10e3
    }];
    function lootboxGetItem(reward) {
        if (reward.type == "shape") {
            let sid = shapeSids;
            player.shapes.push(new shape(shapeData[reward.index]));
            let hardpoints = shapeData[reward.index].hardpoints.light + shapeData[reward.index].hardpoints.heavy;
            for (let i = 0; i < hardpoints; i++) {
                if (i < shapeData[reward.index].hardpoints.light && shapeData[reward.index].hardpoints.light > 0) {
                    player.weapons.push(new weapon(weaponData[0], sid, i));
                } else {
                    player.weapons.push(new weapon(weaponData[2], sid, i));
                }
            }
        } else if (reward.type == "weapon") {
            player.weapons.push(new weapon(weaponData[reward.index], null, null));
        } else if (reward.type == "module") {
            player.modules.push(new module(moduleData[reward.index], null, null));
        } else {
            updateMoneyDisplay(reward.au ? "gold" : reward.keys ? "keys" : "sliver", reward.amount)
        }
    }
    function doLootboxAnimation(rewards, reward) {
        if (document.getElementById("rewardAnimation").style.display == "block") return;
        document.getElementById("rewardAnimation").innerHTML = "";
        document.getElementById("rewardAnimation").style.display = "block";
        document.getElementById("rewardAnimation").style.top = (window.innerHeight / 2 - 100) + "px";
        let indexx = 0;
        let rewardIndex = 0;
        let INDEXREWARDS = [];
        for (let tt = 0; tt < 6; tt++) {
            for (let i = 0; i < rewards.length; i++) {
                document.getElementById("rewardAnimation").innerHTML += `
                <div id="${`nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx * 200}px; background-color: ${indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
                <div style="color: ${indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
                ${abbreviateNumber(rewards[i].amount)}
                </div>
                </div>
                `;
                INDEXREWARDS.push(rewards[i].index);
                indexx++;
            }
        }
        for (let i = 0; i < rewards.length; i++) {
            document.getElementById("rewardAnimation").innerHTML += `
            <div id="${rewards[i] == reward ? `THEREWARD${indexx}${rewards[i].type}` : `${rewards[i].index}nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx * 200}px; background-color: ${rewards[i] == reward ? "rgb(255, 215, 0, 0.8)" : indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
            <div style="color: ${rewards[i] == reward ? "#000" : indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
            ${abbreviateNumber(rewards[i].amount)}
            </div>
            </div>
            `;
            INDEXREWARDS.push(rewards[i].index);
            if (rewards[i] == reward) {
                rewardIndex = indexx;
            }
            indexx++;
        }
        for (let tt = 0; tt < 6; tt++) {
            for (let i = 0; i < rewards.length; i++) {
                document.getElementById("rewardAnimation").innerHTML += `
                <div id="${`nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx * 200}px; background-color: ${indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
                <div style="color: ${indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
                ${abbreviateNumber(rewards[i].amount)}
                </div>
                </div>
                `;
                INDEXREWARDS.push(rewards[i].index);
                indexx++;
            }
        }
        let elements = document.getElementById("rewardAnimation").getElementsByTagName("div");
        let Elements = Array.from(elements);
        for (let i = 0; i < indexx; i++) {
            if (i == rewardIndex) {
                let element = Elements.find(e => e.id.includes("THEREWARD"));
                if (element) {
                    let last6Chars = element.id.slice(-6);
                    let last5Chars = element.id.slice(-5);
                    if (last6Chars == "weapon") {
                        let index = INDEXREWARDS[i];
                        let weapon = weaponData[index];
                        let image = getWeaponIcon(weapon, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    } else if (last5Chars == "shape") {
                        let index = INDEXREWARDS[i];
                        let robot = shapeData[index];
                        let image = getShapeSprite(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    } else if (last5Chars == "module") {
                        let index = INDEXREWARDS[i];
                        let robot = moduleData[index];
                        let image = getModuleIcon(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }
                }
            } else {
                let element = Elements.find(e => e.id.includes(`nothign${i}`));
                if (element) {
                    let last6Chars = element.id.slice(-6);
                    let last5Chars = element.id.slice(-5);
                    if (last6Chars == "weapon") {
                        let index = INDEXREWARDS[i];
                        let weapon = weaponData[index];
                        let image = getWeaponIcon(weapon, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    } else if (last5Chars == "shape") {
                        let index = INDEXREWARDS[i];
                        let robot = shapeData[index];
                        let image = getShapeSprite(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    } else if (last5Chars == "module") {
                        let index = INDEXREWARDS[i];
                        let robot = moduleData[index];
                        let image = getModuleIcon(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }
                }
            }
        }
        let scrollLocation = ((rewardIndex * 200) - (window.innerWidth / 2)) + 100;
        document.getElementById("rewardAnimation").scrollLeft = 0;
        let tmpScroll = 0;
        let lastUpdate = Date.now();
        function animate() {
            let delta = Date.now() - lastUpdate;
            lastUpdate = Date.now();
            let percent = (tmpScroll / scrollLocation) * 100;
            tmpScroll += (10 - ((percent / 10) % 10)) * delta * (keysPressed[32] ? 8 : 1);
            if (percent > 99.99 && percent < 100) {
                tmpScroll = scrollLocation;
                setTimeout(() => {
                    document.getElementById("rewardAnimation").style.display = "none";
                    document.getElementById("rewardAnimation").innerHTML = "";
                }, 1000 * (keysPressed[32] ? .1 : 1));
            }
            tmpScroll = Math.min(tmpScroll, scrollLocation);
            document.getElementById("rewardAnimation").scrollLeft = tmpScroll;
            if (document.getElementById("rewardAnimation").innerHTML !== "" && tmpScroll <= scrollLocation) {
                window.requestAnimationFrame(animate);
            }
        }
        window.requestAnimationFrame(animate);
    }
    function ULMIXP(xp) {
        player.ULIMATEXP = Math.min(player.ULIMATEXP + xp, 100e3);
        if (player.ULIMATEXP == 100e3) document.getElementById("GETULMIBOX").style.cursor = "pointer";
        document.getElementById("LOL").style.width = ((player.ULIMATEXP / 100e3) * 100) + "%";
        saveGameData();
    }
    var ULMI_LOOTBOX_PRICES = [{
        type: "money",
        au: true,
        amount: 100e3
    }, {
        type: "money",
        au: true,
        amount: 500e3
    }, {
        type: "shape",
        index: 18,
    }, {
        type: "shape",
        index: 22,
    }, {
        type: "shape",
        index: 19,
    }, {
        type: "money",
        ag: true,
        amount: 1e9
    }, {
        type: "money",
        ag: true,
        amount: 5e9
    }, {
        type: "money",
        ag: true,
        amount: 10e9
    }, {
        type: "shape",
        index: 18,
    }, {
        type: "shape",
        index: 15
    }, {
        type: "money",
        au: true,
        rare: 3,
        id: "123",
        amount: 1e6
    }, {
        type: "shape",
        index: 19,
    }];
    function showLootboxRewards(rewards) {
        document.getElementById("rewardAnimation").innerHTML = "";
        document.getElementById("rewardAnimation").style.overflow = "scroll";
        document.getElementById("rewardAnimation").style.pointerEvents = "auto";
        document.getElementById("rewardAnimation").style.display = "block";
        document.getElementById("rewardAnimation").style.top = (window.innerHeight / 2 - 100) + "px";
        for (let i = 0; i < rewards.length; i++) {
            document.getElementById("rewardAnimation").innerHTML += `
            <div id="rerewards${i}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${i * 200}px; background-color: ${i % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
            <div style="color: ${i % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
            ${abbreviateNumber(rewards[i].amount)}
            </div>
            </div>
            `;
        }
        for (let i = 0; i < rewards.length; i++) {
            if(rewards[i].type == "shape" || rewards[i].type == "weapon") {
                let element = document.getElementById(`rerewards${i}`);
                if (rewards[i].type == "weapon") {
                    let weapon = weaponData[rewards[i].index];
                    let image = getWeaponIcon(weapon, true);
                    image.style = "width: 100%; height: 100%;";
                    element.append(image);
                } else {
                    let robot = shapeData[rewards[i].index];
                    let image = getShapeSprite(robot, true);
                    image.style = "width: 100%; height: 100%;";
                    element.append(image);
                }
            }
        }
    }
    var mk1ChestRewards = [{
        type: "money",
        au: true,
        amount: 100e3
    }, {
        type: "money",
        ag: true,
        amount: 200e6
    }, {
        type: "money",
        au: true,
        amount: 75e3
    }, {
        type: "money",
        ag: true,
        amount: 150e6
    }];
    var mk2ChestRewards = [{
        type: "money",
        au: true,
        amount: 500e3
    }, {
        type: "money",
        ag: true,
        amount: 1e9
    }, {
        type: "money",
        au: true,
        amount: 400e3
    }, {
        type: "money",
        ag: true,
        amount: 750e6
    }];
    var mk3ChestRewards = [{
        type: "money",
        au: true,
        amount: 2e6
    }, {
        type: "money",
        ag: true,
        amount: 10e9
    }, {
        type: "money",
        au: true,
        amount: 1.5e6
    }, {
        type: "money",
        ag: true,
        amount: 7.5e9
    }];
    function getMKRewards(type) {
        let canDo = type == "mk1" ? 2 : type == "mk2" ? 3 : 4;
        let array = type == "mk1" ? mk1ChestRewards : type == "mk2" ? mk2ChestRewards : mk3ChestRewards;
        for(let i = 0; i < moduleData.length; i++) {
            if(moduleData[i].dontSell && moduleData[i].tier == canDo) {
                for(let t = 0; t < 2; t++) array.push({
                    type: "module",
                    index: i
                });
            }
        }
        for(let i = 0; i < weaponData.length; i++) {
            if(weaponData[i].dontSell && weaponData[i].tier == canDo) {
                for(let t = 0; t < 2; t++) array.push({
                    type: "weapon",
                    index: i
                });
            }
        }
        for(let i = 0; i < shapeData.length; i++) {
            if(shapeData[i].dontSell && shapeData[i].tier == canDo) {
                for(let t = 0; t < (5-canDo); t++) array.push({
                    type: "shape",
                    index: i
                });
            }
        }
    }
    getMKRewards("mk1");
    getMKRewards("mk2");
    getMKRewards("mk3");
    document.getElementById("rewardAnimation").onclick = function() {
        this.style.display = "none";
    }
    document.getElementById("lootBoxToggle").onclick = function () {
        document.getElementById("rewardAnimation").style.overflow = "hidden";
        document.getElementById("rewardAnimation").style.pointerEvents = "none";
        document.getElementById("rewardAnimation").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = `
        <div id="main">

        <div id="GETULMIBOX" style="${player.ULIMATEXP == 100e3 ? "cursor: pointer;" : ""}position: absolute; left: ${(window.innerWidth) / 2 - 50}px; width: 100px; height: 100px; background-image: url('${"images/lootbox/ulimate_lootbox.png"}'); background-size: 100px 100px;">
        </div>
        <div style="position: absolute; top: 90px; left: 0px; width: 100%; height: 20px; background-color: #808080;">
        <div id="LOL" style="height: 100%; transition: 2s; width: ${(player.ULIMATEXP / 100e3) * 100}%; background-color: #ffff00;">
        </div>
        </div>

        <div style="position: absolute; top: 120px; left: ${window.innerWidth/2-320}px; width: 300px; height: 300px; background-image: url('${lootboxes[0].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Basic Box
        </div>
        <div id="basicBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getBasicBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[0].cost)} Keys)
        </div>
        </div>

        <div style="position: absolute; top: 120px; left: ${window.innerWidth/2+20}px; width: 300px; height: 300px; background-image: url('${lootboxes[1].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Copper Box
        </div>
        <div id="copperBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getCopperBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[1].cost)} Keys)
        </div>
        </div>

        <div style="position: absolute; top: 440px; left: ${window.innerWidth/2-320}px; width: 300px; height: 300px; background-image: url('${lootboxes[2].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Gold Box
        </div>
        <div id="goldBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getGoldBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[2].cost)} Keys)
        </div>
        </div>

        <div style="position: absolute; top: 440px; left: ${window.innerWidth/2+20}px; width: 300px; height: 300px; background-image: url('${lootboxes[3].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Diamond Box
        </div>
        <div id="diamondBoxInfo" style="position: absolute; border-radius: 100%; color: #fff; cursor: pointer; top; 0px; width: 25px; height: 25px; text-align: center; right: 0px; background-color: #808080;">
        <strong>i</strong>
        </div>
        <div id="getDiamondBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[3].cost)} Keys)
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

        <div id="goToPre" style="display: none; z-index: 1000; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
        </div>
        <div id="goToNext" style="position: absolute; z-index: 1000; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `;
        document.getElementById("goToNext").onclick = function() {
            this.style.display = "none";
            document.getElementById("rewardAnimation").style.display = "none";
            document.getElementById("goToPre").style.display = "block";
            document.getElementById("main").style.display = "none";
            document.getElementById("noMain").style.display = "block";
        }
        document.getElementById("goToPre").onclick = function() {
            this.style.display = "none";
            document.getElementById("rewardAnimation").style.display = "none";
            document.getElementById("goToNext").style.display = "block";
            document.getElementById("main").style.display = "block";
            document.getElementById("noMain").style.display = "none";
        }
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("money2Display").style.display = "block";
        document.body.appendChild(document.getElementById("money2Display"));
        document.getElementById("backButton").onclick = function () {
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").style.display = "block";
            document.getElementById("money2Display").style.display = "none";
            document.getElementById("hangerUI").appendChild(document.getElementById("money2Display"));
            document.getElementById("rewardAnimation").style.display = "none";
        }
        document.getElementById("mk3Info").onclick = function() {
            showLootboxRewards(mk3ChestRewards);
        };
        document.getElementById("getMk3").onclick = function () {
            if (player.tokens.mk3 - 1 >= 0) {
                updateMoneyDisplay("token 3", -1);
                let reward = mk3ChestRewards[Math.floor(mk3ChestRewards.length * Math.random())];
                lootboxGetItem(reward);
                doLootboxAnimation(mk3ChestRewards, reward);
            }
            saveGameData();
        };
        document.getElementById("mk2Info").onclick = function() {
            showLootboxRewards(mk2ChestRewards);
        };
        document.getElementById("getMk2").onclick = function () {
            if (player.tokens.mk2 - 1 >= 0) {
                updateMoneyDisplay("token 2", -1);
                let reward = mk2ChestRewards[Math.floor(mk2ChestRewards.length * Math.random())];
                lootboxGetItem(reward);
                doLootboxAnimation(mk2ChestRewards, reward);
            }
            saveGameData();
        };
        document.getElementById("mk1Info").onclick = function() {
            showLootboxRewards(mk1ChestRewards);
        };
        document.getElementById("getMk1").onclick = function () {
            if (player.tokens.mk1 - 1 >= 0) {
                updateMoneyDisplay("token 1", -1);
                let reward = mk1ChestRewards[Math.floor(mk1ChestRewards.length * Math.random())];
                lootboxGetItem(reward);
                doLootboxAnimation(mk1ChestRewards, reward);
            }
            saveGameData();
        };
        document.getElementById("basicBoxInfo").onclick = function() {
            showLootboxRewards(lootboxes[0].rewards);
        };
        document.getElementById("copperBoxInfo").onclick = function() {
            showLootboxRewards(lootboxes[1].rewards);
        };
        document.getElementById("goldBoxInfo").onclick = function() {
            showLootboxRewards(lootboxes[2].rewards);
        };
        document.getElementById("diamondBoxInfo").onclick = function() {
            showLootboxRewards(lootboxes[3].rewards);
        };
        document.getElementById("getBasicBox").onclick = function () {
            if (player.keys - lootboxes[0].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[0].cost);
                ULMIXP(lootboxes[0].cost);
                let reward = lootboxes[0].rewards[Math.floor(lootboxes[0].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[0].rewards[Math.floor(lootboxes[0].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[0].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("getCopperBox").onclick = function () {
            if (player.keys - lootboxes[1].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[1].cost);
                ULMIXP(lootboxes[1].cost);
                let reward = lootboxes[1].rewards[Math.floor(lootboxes[1].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[1].rewards[Math.floor(lootboxes[1].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[1].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("getGoldBox").onclick = function () {
            if (player.keys - lootboxes[2].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[2].cost);
                ULMIXP(lootboxes[2].cost);
                let reward = lootboxes[2].rewards[Math.floor(lootboxes[2].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[2].rewards[Math.floor(lootboxes[2].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[2].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("getDiamondBox").onclick = function () {
            if (player.keys - lootboxes[3].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[3].cost);
                ULMIXP(lootboxes[3].cost);
                let reward = lootboxes[3].rewards[Math.floor(lootboxes[3].rewards.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = lootboxes[3].rewards[Math.floor(lootboxes[3].rewards.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(lootboxes[3].rewards, reward);
            }
            saveGameData();
        };
        document.getElementById("GETULMIBOX").onclick = function () {
            if (player.ULIMATEXP >= 100e3) {
                player.ULIMATEXP = 0;
                ULMIXP(0);
                let reward = ULMI_LOOTBOX_PRICES[Math.floor(ULMI_LOOTBOX_PRICES.length * Math.random())];
                if (reward.rare) {
                    let rewardId = reward.id;
                    for (let i = 0; i < reward.rare; i++) {
                        reward = ULMI_LOOTBOX_PRICES[Math.floor(ULMI_LOOTBOX_PRICES.length * Math.random())];
                        if (rewardId != reward.id || reward.id == null) {
                            break;
                        }
                    }
                }
                lootboxGetItem(reward);
                doLootboxAnimation(ULMI_LOOTBOX_PRICES, reward);
            }
        };
    }
    function betterEquipShape(slot, oldShape, unequipedShapes) {
        let filteredRobots = [];
        for (let i = 0; i < unequipedShapes.length; i++) {
            filteredRobots.push(unequipedShapes[i]);
        }
        filteredRobots = filteredRobots.sort((a, b) => b.level - a.level).sort((a, b) => b.tier - a.tier);
        if (oldShape) filteredRobots.unshift(oldShape);
        let currentIndex = 0;
        document.getElementById("sideDisplay").innerHTML = `
        <div id="WEAPONdisplay" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;">
        </div>
        <div id="goToPre" style="display: none; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
        </div>
        <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
        </div>
        <div id="inventoryButton" style="position: absolute; text-align: center; font-size: 25px; color: #000; left: ${window.innerWidth/2-165}px; top: 30px; border-radius: 6px; height: 42.5px; padding-top: 7.5px; width: 150px; background-color: rgb(255, 255, 255, .6);">
        INVENTORY
        </div>
        <div id="storeButton" style="position: absolute; text-align: center; font-size: 35px; cursor: pointer; color: #fff; left: ${window.innerWidth/2+20}px; top: 30px; border-radius: 6px; height: 50px; width: 150px; background-color: rgb(0, 0, 0, .4);">
        STORE
        </div>
        `;
        let inInventory = true;
        let diiiisbled = false;
        document.getElementById("inventoryButton").onclick = function() {
            if(!diiiisbled) {
                this.style.cursor = null;
                this.style.color = "#000";
                this.style.backgroundColor = "rgb(255, 255, 255, .6)";
                document.getElementById("goToPre").style.display = "none";
                document.getElementById("goToNext").style.display = "block";
                document.getElementById("storeButton").style.cursor = "pointer";
                document.getElementById("storeButton").style.color = "#fff";
                document.getElementById("storeButton").style.backgroundColor = "rgb(0, 0, 0, .4)";
                currentIndex = 0;
                inInventory = true;
                drawShapeEquip(inInventory ? filteredRobots : shapeData.sort((a, b) => a.tier - b.tier), currentIndex, oldShape, slot, null, inInventory);
            }
        };
        document.getElementById("storeButton").onclick = function() {
            this.style.cursor = null;
            this.style.color = "#000";
            this.style.backgroundColor = "rgb(255, 255, 255, .6)";
            document.getElementById("goToPre").style.display = "none";
            document.getElementById("goToNext").style.display = "block";
            document.getElementById("inventoryButton").style.cursor = "pointer";
            document.getElementById("inventoryButton").style.color = "#fff";
            document.getElementById("inventoryButton").style.backgroundColor = "rgb(0, 0, 0, .4)";
            currentIndex = 0;
            inInventory = false;
            drawShapeEquip(inInventory ? filteredRobots : shapeData.sort((a, b) => a.tier - b.tier), currentIndex, oldShape, slot, inInventory);
        };
        if(filteredRobots.length == 0) {
            document.getElementById("storeButton").click();
            document.getElementById("inventoryButton").style.cursor = null;
            diiiisbled = true;
        }
        drawShapeEquip(inInventory ? filteredRobots : shapeData, currentIndex, oldShape, slot, null, inInventory);
        if (inInventory ? !filteredRobots[currentIndex + 1] : !shapeData[currentIndex + 1]) {
            document.getElementById("goToNext").style.display = "none";
        }
        document.getElementById("goToNext").onclick = function () {
            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            if (inInventory ? filteredRobots[currentIndex + 1] : shapeData[currentIndex + 1]) {
                currentIndex++;
                drawShapeEquip(inInventory ? filteredRobots : shapeData.sort((a, b) => a.tier - b.tier), currentIndex, oldShape, slot, null, inInventory);
                if (inInventory ? filteredRobots[currentIndex + 1] : shapeData[currentIndex + 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (inInventory ? filteredRobots[currentIndex - 1] : shapeData[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "block";
                } else {
                    document.getElementById("goToPre").style.display = "none";
                }
            }
        }
        document.getElementById("goToPre").onclick = function () {
            document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
            if (inInventory ? filteredRobots[currentIndex - 1] : shapeData[currentIndex - 1]) {
                currentIndex--;
                drawShapeEquip(inInventory ? filteredRobots : shapeData.sort((a, b) => a.tier - b.tier), currentIndex, oldShape, slot, null, inInventory);
                if (inInventory ? filteredRobots[currentIndex - 1] : shapeData[currentIndex - 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (inInventory ? filteredRobots[currentIndex + 1] : shapeData[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "block";
                } else {
                    document.getElementById("goToNext").style.display = "none";
                }
            }
        }
        saveGameData();
    }
    function equipShape(slot) {
        let unequipedShapes = player.shapes.filter(e => e.slot == null || e.slot == undefined);
        document.getElementById("sideDisplay").innerHTML = "";
        document.getElementById("hangerUI").style.display = "none";
        let oldShape = player.shapes.find(e => e.slot == slot);
        betterEquipShape(slot, oldShape, unequipedShapes);
    }
    function tierColor(obj) {
        return obj.tier == 4 ? "#fa0032" : obj.tier == 3 ? "#fcdf00" : obj.tier == 2 ? "#7702bf" : obj.tier == 1 ? "#38b0f5" : "#d3d3d3";
    }
    function updateSlots() {
        document.getElementById("shapesDisplay").innerHTML = "";
        let adjusted = window.innerWidth - 200;
        let adjustedH = (adjusted/4)*2;
        document.getElementById("shapesDisplay").style = `
        position: absolute;
        top: ${(window.innerHeight/2)-(adjustedH/2)}px;
        left: 100px;
        width: ${adjusted}px;
        border-radius: 12px;
        overflow: hidden;
        height: ${adjustedH}px;
        background-color: rgb(135, 135, 135, 0.5);
        `;
        let INDEX = slotData.findIndex(e => !e.unlocked);
        for (let i = 0; i < 8; i++) {
            let slot = slotData[i];
            let backgroundColor = (i < 4 ? (i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);") : (i % 2 == 0 ? "rgb(0, 0, 0, 0);" : "rgb(0, 0, 0, 0.2);"));
            if (slot.unlocked) {
                if (slot.used) {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: absolute; transition: .5s; top: ${i < 4 ? 0 : adjustedH/2}px; left: ${(adjusted/4)*(i < 4 ? i : i-4)}px; cursor: pointer; width: ${adjusted/4}px; height: ${adjusted/4}px; background-color: ${backgroundColor}">
                    </div>
                    `;
                } else {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: absolute; top: ${i < 4 ? 0 : adjustedH/2}px; left: ${(adjusted/4)*(i < 4 ? i : i-4)}px; cursor: pointer; width: ${adjusted/4}px; height: ${adjusted/4}px; background-color: ${backgroundColor}">
                    <div style="position: absolute; top: ${((adjusted/4) / 2) - 38 / 2}px; left: ${((adjusted/4) / 2) - 159 / 2}px; font-size: 28px;">
                    Equip Robot
                    <div>
                    </div>
                    `;
                }
            } else {
                if (i > INDEX) {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: absolute; top: ${i < 4 ? 0 : adjustedH/2}px; left: ${(adjusted/4)*(i < 4 ? i : i-4)}px; pointer-events: auto; width: ${adjusted/4}px; height: ${adjusted/4}px; background-color: ${backgroundColor}">
                    <div style="position: absolute; top: ${((adjusted/4) / 2) - 65 / 2}px; left: ${((adjusted/4) / 2) - 183 / 2}px; font-size: 48px;">
                    LOCKED
                    </div>
                    </div>
                    `;
                } else {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: absolute; top: ${i < 4 ? 0 : adjustedH/2}px; left: ${(adjusted/4)*(i < 4 ? i : i-4)}px; cursor: pointer; width: ${adjusted/4}px; height: ${adjusted/4}px; background-color: ${backgroundColor}">
                    <div style="position: absolute; top: 87.5px; left: 57.5px; font-size: 28px; width: 200px; height: 200px;">
                    Unlock: ${abbreviateNumber(slot.cost)} Gold
                    </div>
                    </div>
                    `;
                }
            }
        }
        for (let i = 0; i < 8; i++) {
            let slot = slotData[i];
            let backgroundColor = (i < 4 ? (i % 2 == 0 ? "rgb(0, 0, 0, 0.2)" : "rgb(0, 0, 0, 0)") : (i % 2 == 0 ? "rgb(0, 0, 0, 0)" : "rgb(0, 0, 0, 0.2)"));
            if (slot.unlocked) {
                if (slot.used) {
                    let shape = player.shapes.find(e => e.slot == i);
                    let tmpImage = getShapeSprite(shape, true);
                    tmpImage.style = `position: absolute; top: 0px; left: 0px; width: ${adjusted/4}px; height: ${adjusted/4}px;`;
                    document.getElementById("slot" + i).innerHTML = `
                    <div style="color: ${tierColor(shape)}; z-index: 10; position: absolute; bottom: 5px; right: 5px; font-size: 30px;">
                    <strong>${[14, 13].includes(shape.level) ? `${shape.name} <span style="color: ${shape.level == 13 ? "#0f0" : "#ffff00"};">${shape.level == 13 ? "MK2" : "MK3"}</span>` : `Lvl ${shape.level} ${shape.name}`}</strong>
                    </div>
                    `;
                    document.getElementById("slot" + i).appendChild(tmpImage);
                    let weapons = player.weapons.filter(e => e.owner == shape.sid);
                    let heavy = weapons.filter(e => e.type == "Heavy").length;
                    let light = weapons.filter(e => e.type == "Light").length;
                    if (heavy > shape.hardpoints.heavy || light > shape.hardpoints.light) {
                        weapons.forEach(e => {
                            e.slot = null;
                            e.owner = null;
                        });
                        weapons = [];
                    }
                    if (shape.hardpoints.light && weapons.find(e => e.owner == shape.sid && e.slot == 0 && e.type == "Heavy")) {
                        weapons.forEach(e => {
                            e.slot = null;
                            e.owner = null;
                        });
                        weapons = [];
                    }
                    for (let t = 0; t < Math.min(weapons.length, 8); t++) {
                        let tmpImage = getWeaponIcon(weapons[t], true);
                        tmpImage.style = `position: absolute; bottom: ${40 + (60 * (t >= 4 ? t-4 : t))}px; right: ${t >= 4 ? 55 : 5}px; width: 50px; height: 50px;`;
                        document.getElementById("slot" + i).appendChild(tmpImage);
                    }
                    document.getElementById("slot" + i).onmouseover = function() {
                        this.style.filter = "brightness(150%)";
                        this.style.backgroundColor = "rgb(255, 255, 255, 0.6)";
                    }
                    document.getElementById("slot" + i).onmouseout = function() {
                        this.style.filter = "brightness(100%)";
                        this.style.backgroundColor = backgroundColor;
                    }
                    document.getElementById("slot" + i).onclick = function () {
                        document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        customizeShape(shape);
                        saveGameData();
                    }
                } else {
                    document.getElementById("slot" + i).onclick = function () {
                        document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        equipShape(i);
                        saveGameData();
                    }
                }
            } else if (i <= INDEX) {
                document.getElementById("slot" + i).onclick = function () {
                    if (player.gold - slot.cost >= 0) {
                        document.getElementById("hangerUI").appendChild(document.getElementById("moneyDisplay"));
                        updateMoneyDisplay("gold", -slot.cost);
                        slot.unlocked = true;
                        updateSlots();
                        saveGameData();
                    }
                }
            }
        }
    }
    var operationData = {
        xp: 0,
        currentIndex: 0,
        data: []
    };
    function addOperationXP(amount) {
        if (!operationData.data.length || !operationData.data.some(e => e.collected == null)) {
            generateOperation();
        }
        if ((operationData.xp + amount) >= operationData.data[operationData.currentIndex].maxxp) {
            amount -= (operationData.data[operationData.currentIndex].maxxp - operationData.xp);
            operationData.data[operationData.currentIndex].done = true;
            operationData.xp = 0;
            if (amount <= 0) {
                operationData.currentIndex++;
                if (!operationData.data[operationData.currentIndex]) {
                    operationData.currentIndex = operationData.data.length - 1;
                }
            }
            while (amount > 0) {
                operationData.currentIndex++;
                if (!operationData.data[operationData.currentIndex]) {
                    operationData.currentIndex = operationData.data.length - 1;
                    amount = 0;
                } else if (amount >= operationData.data[operationData.currentIndex].maxxp) {
                    amount -= operationData.data[operationData.currentIndex].maxxp;
                    operationData.data[operationData.currentIndex].done = true;
                } else {
                    operationData.xp += amount;
                    amount = 0;
                }
            }
        } else {
            operationData.xp += amount;
        }
    }
    var keysSource = "./images/icons/keys_icon.png";
    function generateOperation() {
        operationData.xp = 0;
        operationData.currentIndex = 0;
        operationData.data = [];
        for (let i = 0; i < 120; i++) {
            let amount = 1;
            let rewardType = "silver";
            if(i >= 69 && (i + 1) % 10 == 0) {
                if(i >= 69 && i <= 89) {
                    rewardType = "token 1";
                }else if(i >= 99 && i <= 109) {
                    rewardType = "token 2";
                }else {
                    rewardType = "token 3";
                }
            }else {
                if (Math.random() < .5) {
                    rewardType = "silver";
                    if (i >= 90) {
                        amount = i * 1e6;
                    } else if (i >= 80) {
                        amount = i * 150e3;
                    } else if (i >= 40) {
                        amount = i * 80e3;
                    } else if (i >= 5) {
                        amount = i * 50e3;
                    } else {
                        amount = Math.max(i * 25e3, 20e3);
                    }
                } else if (Math.random() < .3334) {
                    rewardType = "keys";
                    if (i >= 90) {
                        amount = i * 100;
                    } else if (i >= 80) {
                        amount = i * 50;
                    } else if (i >= 40) {
                        amount = i * 20;
                    } else if (i >= 5) {
                        amount = i * 10;
                    } else {
                        amount = Math.max(i * 5, 2);
                    }
                } else {
                    rewardType = "gold";
                    if (i >= 90) {
                        amount = i * 240;
                    } else if (i >= 80) {
                        amount = i * 120;
                    } else if (i >= 40) {
                        amount = i * 80;
                    } else if (i >= 5) {
                        amount = i * 40;
                    } else {
                        amount = Math.max(i * 20, 10);
                    }
                }
            }
            operationData.data.push({
                maxxp: 100 + (i * 50),
                done: false,
                type: rewardType,
                amount: amount
            });
        }
    }
    function displayOperation(XDDDD) {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="width: 100%; text-align: center; font-size: 40px;">
        Operation
        </div>
        <hr>
        <div style="position: absolute; left: ${(window.innerWidth) / 2 - 25}px; top: ${window.innerHeight / 2 - 170}px;">
        Lvl ${operationData.currentIndex + 1}
        </div>
        <div style="position: absolute; left: ${(window.innerWidth) / 2 - 300}px; top: ${window.innerHeight / 2 - 140}px; height: 20px; border-radius: 12px;  overflow: hidden; width: 600px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 0px; left: 0px; height: 100%; width: ${operationData.data[operationData.data.length - 1].done ? 100 : (operationData.xp / operationData.data[operationData.currentIndex].maxxp) * 100}%; background-color: #07faf2;">
        </div>
        <span style="position: absolute; top: 0px; left: 0px; margin-left: 5px; color: #fff;">${operationData.data[operationData.data.length - 1].done ? `${operationData.data[operationData.data.length - 1].maxxp}/${operationData.data[operationData.data.length - 1].maxxp}` : `${operationData.xp}/${operationData.data[operationData.currentIndex].maxxp}`}</span>
        </div>
        <div id="rewards" style="position: absolute; top: ${window.innerHeight / 2 - 100}px; overflow-x: scroll; height: 220px; width: 100%; background-color: rgb(0, 0, 0, .3);">
        </div>
        <div id="10threwardXD" style="position: absolute; box-shadow: -20px 0 20px rgba(0, 0, 0, 0.7); right: 0px; top: ${window.innerHeight / 2 - 100}px; overflow-x: scroll; height: 220px; width: 200px; background-color: rgb(0, 0, 0, .8);">
        </div>
        <div id="collectAll" style="color: #fff; border-radius: 12px; font-size: 35px; width: 200px; text-align: center; height: 50px; background-color: rgb(0, 0, 0, 0.4); position: absolute; left: ${(window.innerWidth) / 2 - 100}px; top: ${window.innerHeight / 2 + 140}px;">
        Collect All
        </div>
        <div id="youEarned" style="${XDDDD ? "cursor: pointer; " : ""};display: ${XDDDD ? "block" : "none"}; position: absolute; top: 25%; left: 25%; width: 50%; height: 50%; background-color: rgb(0, 0, 0, 0.4);">
        ${XDDDD}
        </div>
        <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
        BACK
        </div>
        `;
        document.getElementById("hangerUI").style.display = "none";
        document.getElementById("backButton").onclick = function () {
            document.getElementById("sideDisplay").innerHTML = "";
            document.getElementById("hangerUI").style.display = "block";
        }
        document.getElementById("youEarned").onclick = function() {
            this.style.display = "none";
        }
        let hasStuff = operationData.data.filter(e => e.done && !e.collected);
        if(hasStuff.length > 1) {
            document.getElementById("collectAll").style.cursor = "pointer";
            document.getElementById("collectAll").style.backgroundColor = "rgb(0, 255, 0, 0.8)";
            let stuff = {};
            document.getElementById("collectAll").onclick = function() {
                for (let i = 0; i < hasStuff.length; i++) {
                    let data = hasStuff[i];
                    if (stuff[data.type]) {
                        stuff[data.type] += data.amount;
                    }else {
                        stuff[data.type] = data.amount;
                    }
                    if (data.type == "silver") {
                        data.collected = true;
                        updateMoneyDisplay("sliver", data.amount);
                    } else if (data.type == "gold") {
                        data.collected = true;
                        updateMoneyDisplay("gold", data.amount);
                    } else if (data.type.includes("token")) {
                        data.collected = true;
                        updateMoneyDisplay(data.type, 1);
                    } else {
                        data.collected = true;
                        updateMoneyDisplay("keys", data.amount);
                    }
                }
                let TEXT = `
                <div style="color: #fff; text-align: center; width: 100%; font-size: 40px;">You Got!</div>
                <hr>
                `;
                let indexx = 0;
                for(let i in stuff) {
                    let backgroundImage = i == "token 3" ? "./images/tokens/mk3_token.png" : i == "token 2" ? "./images/tokens/mk2_token.png" : i == "token 1" ? "./images/tokens/mk1_token.png" : i == "silver" ? agSource : i == "gold" ? auSource : keysSource;
                    TEXT += `
                    <div style="position: relative; border-radius: 12px; ${indexx == 0 ? "margin-left: 5px; " : ""}width: 100px; height: 100px; display: inline-block; background-color: rgb(255, 255, 255, .8); background-size: 100px 100px; background-image: url('${backgroundImage}')">
                    <div style="position: absolute; font-size: 24px; bottom: 5px; right: 5px; color: #000;">
                    ${abbreviateNumber(stuff[i])}
                    </div>
                    </div>
                    `;
                    indexx++;
                }
                displayOperation(TEXT);
            }
        }
        let tenthX = [];
        for (let i = 0; i < operationData.data.length; i++) {
            if((i + 1) % 10 == 0) {
                tenthX.push(i * 200);
            }
        }
        let maxdis = (window.innerWidth - 375);
        document.getElementById("rewards").onscroll = function() {
            let tmpx = document.getElementById("rewards").scrollLeft;
            tmpx += maxdis;
            let closest = tenthX.filter(e => e + 300 >= tmpx).sort((a, b) => Math.abs(a - tmpx) - Math.abs(b - tmpx))[0];
            let element = document.getElementById(`OPREWARD${(closest / 200)}`);
            document.getElementById("10threwardXD").style.display = (closest/200) == operationData.data.length - 1 && closest <= tmpx ? "none" : "block";
            let newElement = element.cloneNode(true);
            newElement.id = "THENTHTNETh";
            newElement.style.left = "0px";
            newElement.style.bottom = "0px";
            document.getElementById("10threwardXD").innerHTML = "";
            document.getElementById("10threwardXD").innerHTML += `
            <div style="position: absolute; color: #fff; background-color: rgb(0, 0, 0, 0.6); text-align: center; top: 0px; left: 0px; height: 20px; width: 200px;">
            ${(closest/200)+1}
            </div>
            `;
            document.getElementById("10threwardXD").appendChild(newElement);
            let index = closest/200;
            if(operationData.data[index] && operationData.data[index].done && !operationData.data[index].collected) {
                let data = operationData.data[index];
                document.getElementById(`THENTHTNETh`).style.cursor = "pointer";
                document.getElementById(`THENTHTNETh`).style.backgroundColor = "rgb(0, 255, 0, .4)";
                document.getElementById(`THENTHTNETh`).onclick = function () {
                    if (data.type == "silver") {
                        data.collected = true;
                        updateMoneyDisplay("sliver", data.amount);
                    } else if (data.type == "gold") {
                        data.collected = true;
                        updateMoneyDisplay("gold", data.amount);
                    } else if (data.type.includes("token")) {
                        data.collected = true;
                        updateMoneyDisplay(data.type, 1);
                    } else {
                        data.collected = true;
                        updateMoneyDisplay("keys", data.amount);
                    }
                    displayOperation();
                };
                document.getElementById(`THENTHTNETh`).onmouseover = function () {
                    document.getElementById(`THENTHTNETh`).style.filter = "brightness(125%)";
                }
                document.getElementById(`THENTHTNETh`).onmouseout = function () {
                    document.getElementById(`THENTHTNETh`).style.filter = "brightness(100%)";
                }
            }else if(operationData.data[index] && !operationData.data[index].done) {
                document.getElementById(`THENTHTNETh`).onmouseover = function() {
                    document.getElementById(`THENTHTNETh`).style.filter = "brightness(125%)";
                }
                document.getElementById(`THENTHTNETh`).onmouseout = function() {
                    document.getElementById(`THENTHTNETh`).style.filter = "brightness(100%)";
                }
            }
        }
        for (let i = 0; i < operationData.data.length; i++) {
            let data = operationData.data[i];
            if (data) {
                let backgroundImage = data.type == "token 3" ? "./images/tokens/mk3_token.png" : data.type == "token 2" ? "./images/tokens/mk2_token.png" : data.type == "token 1" ? "./images/tokens/mk1_token.png" : data.type == "silver" ? agSource : data.type == "gold" ? auSource : keysSource;
                document.getElementById("rewards").innerHTML += `
                <div style="position: absolute; color: #fff; background-color: rgb(0, 0, 0, 0.6); text-align: center; top: 0px; left: ${200 * i}px; height: 20px; width: 200px;">
                ${i + 1}
                </div>
                <div id="OPREWARD${i}" style="position: absolute; transition: .5s; bottom: 0px; left: ${200 * i}px; height: 200px; width: 200px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.4)" : "rgb(255, 255, 255, 0.6)"}; background-size: 200px 200px; background-image: url('${backgroundImage}')">
                <div style="position: absolute; font-size: 24px; bottom: 5px; right: 5px; color: ${i % 2 == 0 ? "#fff" : "#000"}">
                ${abbreviateNumber(data.amount)}
                </div>
                </div>
                `;
            }
        }
        for (let i = 0; i < operationData.data.length; i++) {
            let data = operationData.data[i];
            if (data && data.done) {
                if (data.collected) {
                    document.getElementById(`OPREWARD${i}`).innerHTML += `
                    <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-size: 100% 100%; background-image: url('./images/operation_collected.png');">
                    </div>
                    `;
                } else {
                    document.getElementById(`OPREWARD${i}`).style.cursor = "pointer";
                    document.getElementById(`OPREWARD${i}`).style.backgroundColor = "rgb(0, 255, 0, .4)";
                    document.getElementById(`OPREWARD${i}`).onclick = function () {
                        if (data.type == "silver") {
                            data.collected = true;
                            updateMoneyDisplay("sliver", data.amount);
                        } else if (data.type == "gold") {
                            data.collected = true;
                            updateMoneyDisplay("gold", data.amount);
                        } else if (data.type.includes("token")) {
                            data.collected = true;
                            updateMoneyDisplay(data.type, 1);
                        } else {
                            data.collected = true;
                            updateMoneyDisplay("keys", data.amount);
                        }
                        displayOperation();
                    };
                    document.getElementById(`OPREWARD${i}`).onmouseover = function() {
                        document.getElementById(`OPREWARD${i}`).style.filter = "brightness(125%)";
                    }
                    document.getElementById(`OPREWARD${i}`).onmouseout = function() {
                        document.getElementById(`OPREWARD${i}`).style.filter = "brightness(100%)";
                    }
                }
            }else if(data && !data.done) {
                document.getElementById(`OPREWARD${i}`).onmouseover = function() {
                    document.getElementById(`OPREWARD${i}`).style.filter = "brightness(125%)";
                }
                document.getElementById(`OPREWARD${i}`).onmouseout = function() {
                    document.getElementById(`OPREWARD${i}`).style.filter = "brightness(100%)";
                }
            }
        }
        document.getElementById("rewards").onscroll();
    }
    document.getElementById("operationToggle").onclick = function () {
        if (!operationData.data.length || !operationData.data.some(e => e.collected == null)) {
            generateOperation();
            displayOperation();
        } else {
            displayOperation();
        }
        saveGameData();
    }
    document.addEventListener("click", () => {
        saveGameData();
    });
    function saveGameData() {
        saveValue("hasSaved", 1);
        saveValue("shapeSids", shapeSids);
        let shapes = [];
        for (let i = 0; i < player.shapes.length; i++) {
            let shape = player.shapes[i];
            shapes.push({
                name: shape.name,
                sid: shape.sid,
                level: shape.level,
                slot: shape.slot
            });
        }
        let weapons = [];
        for (let i = 0; i < player.weapons.length; i++) {
            let weapon = player.weapons[i];
            weapons.push({
                name: weapon.name,
                owner: weapon.owner,
                slot: weapon.slot,
                level: weapon.level
            });
        }
        let modules = [];
        for (let i = 0; i < player.modules.length; i++) {
            let MODLUE = player.modules[i];
            modules.push({
                name: MODLUE.name,
                owner: MODLUE.owner,
                slot: MODLUE.slot,
                level: MODLUE.level
            });
        }
        let chips = [];
        for (let i = 0; i < microchips.length; i++) {
            let CHIP = microchips[i];
            chips.push({
                name: CHIP.name,
                owner: CHIP.owner,
                slot: CHIP.slot,
                level: CHIP.level,
                NEW: 2
            });
        }
        saveValue("chips", JSON.stringify(chips));
        saveValue("tokens", JSON.stringify(player.tokens));
        saveValue("slotData", JSON.stringify(slotData));
        saveValue("shapes", JSON.stringify(shapes));
        saveValue("weapons", JSON.stringify(weapons));
        saveValue("modules", JSON.stringify(modules));
        saveValue("ULIMATEXP", player.ULIMATEXP);
        saveValue("league", player.league);
        saveValue("keys", player.keys);
        saveValue("sliver", player.sliver);
        saveValue("gold", player.gold);
        saveValue("tasks", JSON.stringify(tasks));
        saveValue("workshopPoints", player.workshopPoints);
        saveValue("operationData", JSON.stringify(operationData));
        saveValue("workshopQueue", JSON.stringify(workshopQueue));
    }
    setTimeout(() => {
        if (getValue("hasSaved")) {
            player.shapes = [];
            player.weapons = [];
            player.modules = [];
            let ShapeData = JSON.parse(getValue("shapes"));
            let WeaponData = JSON.parse(getValue("weapons"));
            let ModuleData = JSON.parse(getValue("modules"));
            let ChipData = JSON.parse(getValue("chips"));
            for (let i = 0; i < ShapeData.length; i++) {
                let data = ShapeData[i];
                if (data) {
                    try {
                        let sid = shapeSids;
                        let Shape = shapeData.find(e => data.name == e.name);
                        let newShape = new shape(Shape, data.slot);
                        newShape.slot = data.slot;
                        if (data.slot) {
                            slotData[data.slot].unlocked = true;
                            slotData[data.slot].used = true;
                        }
                        newShape.sid = data.sid;
                        if (newShape.sid == undefined || newShape.sid == null) {
                            newShape.sid = sid;
                        }
                        for (let t = 0; t < data.level - 1; t++) {
                            upgradeShape(newShape, true);
                        }
                        player.shapes.push(newShape);
                    } catch (e) {
                    }
                }
            }
            for (let i = 0; i < WeaponData.length; i++) {
                let data = WeaponData[i];
                if (data) {
                    let Weapon = weaponData.find(e => data.name == e.name);
                    let newWeapon = new weapon(Weapon, data.owner, data.slot);
                    let shapeSid = player.shapes.find(e => e.sid == data.owner);
                    if (!shapeSid) {
                        newWeapon.owner = null;
                        newWeapon.slot = null;
                    }
                    for (let t = 0; t < data.level - 1; t++) {
                        upgradeWeapon(newWeapon, null, null, true);
                    }
                    player.weapons.push(newWeapon);
                }
            }
            for (let i = 0; i < ModuleData.length; i++) {
                let data = ModuleData[i];
                if (data) {
                    let Module = moduleData.find(e => data.name == e.name);
                    let newModule = new module(Module, data.owner, data.slot);
                    let shapeSid = player.shapes.find(e => e.sid == data.owner);
                    if (!shapeSid) {
                        newModule.owner = null;
                        newModule.slot = null;
                    }
                    for (let t = 0; t < data.level - 1; t++) {
                        upgradeModule(newModule, null, null, true);
                    }
                    player.modules.push(newModule);
                }
            }
            for (let i = 0; i < ChipData.length; i++) {
                let data = ChipData[i];
                if (data && data.NEW && data.NEW == 2) {
                    try {
                        let Micro = microshipData.find(e => data.name == e.name);
                        let newModule = new microchip(Micro, data.owner, data.slot);
                        let shapeSid = player.shapes.find(e => e.sid == data.owner);
                        if (!shapeSid) {
                            newModule.owner = null;
                            newModule.slot = null;
                        }
                        for (let t = 0; t < data.level; t++) {
                            upgradeMicrochip(newModule, true);
                        }
                        microchips.push(newModule);
                    }catch(e) {
                        microchips = [];
                    }
                }
            }
            if (getValue("workshopPoints")) {
                player.workshopPoints = parseInt(getValue("workshopPoints"));
            } else {
                player.workshopPoints = 0;
            }
            let slotdata = JSON.parse(getValue("slotData"));
            if (slotdata) {
                slotData = [...slotdata];
            }
            if (getValue("ULIMATEXP")) {
                player.ULIMATEXP = parseInt(getValue("ULIMATEXP"));
            } else {
                player.ULIMATEXP = 0;
            }
            if (getValue("league")) {
                player.league = parseInt(getValue("league"));
            } else {
                player.league = 0;
            }
            if (getValue("workshopQueue")) {
                workshopQueue = JSON.parse(getValue("workshopQueue"));
            }
            if (getValue("tasks")) {
                tasks = JSON.parse(getValue("tasks"));
            }
            if (getValue("tokens")) {
                player.tokens = JSON.parse(getValue("tokens"));
            }
            generateTasks();
            if (getValue("operationData")) {
                operationData = JSON.parse(getValue("operationData"));
                let hasKeys = operationData.data.find(e => e.type == "token 1");
                if (!hasKeys) {
                    generateOperation();
                    addOperationXP(10e3);
                }
            }
            player.keys = parseInt(getValue("keys"));
            player.sliver = parseInt(getValue("sliver"));
            player.gold = parseInt(getValue("gold"));
            updateMoneyDisplay();
            if (getValue("shapeSids") && getValue("shapeSids") != "NaN") {
                shapeSids = parseInt(getValue("shapeSids"));
            } else {
                saveGameData();
            }
            setTimeout(() => {
                updateSlots();
                document.getElementById("LOADING SCREEN XD").style.display = "none";
                setInterval(() => {
                    updateProductionDisplay();
                }, 500);
            }, 100)
        } else {
            document.getElementById("LOADING SCREEN XD").style.display = "none";
            updateSlots();
        }
        resize();
    }, 250);
    var offset = {
        x: 0,
        y: 0
    }
    function renderBackground() {
        let cam = { x: 0, y: 0 };
        if (players[0].robotIndex == -1) {
            cam = {
                x: mapInfo.x / 2,
                y: mapInfo.y / 2
            };
        } else {
            cam = {
                x: players[0].robots[players[0].robotIndex].x,
                y: players[0].robots[players[0].robotIndex].y
            };
        }
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
        ctx.fillStyle = "#000";
        ctx.globalAlpha = 0.18;
        if (offset.x <= 0) {
            ctx.fillRect(0, 0, -offset.x, maxScreen.y);
        } if (mapInfo.x - offset.x <= maxScreen.x) {
            var tmpY = Math.max(0, -offset.y);
            ctx.fillRect(mapInfo.x - offset.x, tmpY, maxScreen.x - (mapInfo.x - offset.x), maxScreen.y - tmpY);
        } if (offset.y <= 0) {
            ctx.fillRect(-offset.x, 0, maxScreen.x + offset.x, -offset.y);
        } if (mapInfo.y - offset.y <= maxScreen.y) {
            var tmpX = Math.max(0, -offset.x);
            var tmpMin = 0;
            if (mapInfo.x - offset.x <= maxScreen.x)
                tmpMin = maxScreen.x - (mapInfo.x - offset.x);
            ctx.fillRect(tmpX, mapInfo.y - offset.y,
                (maxScreen.x - tmpX) - tmpMin, maxScreen.y - (mapInfo.y - offset.y));
        }
    }
    var mouseX = 0;
    var mouseY = 0;
    canvas.addEventListener('mousemove', gameInput, false);
    function gameInput(e) {
        e.preventDefault();
        e.stopPropagation();
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    function renderPlayer(delta) {
        let player = players[0];
        let weaponNames = {};
        if (player.robotIndex >= 0) {
            let robot = player.robots[player.robotIndex];
            robot.dir = Math.atan2(mouseY - (innerHeight / 2), mouseX - (innerWidth / 2));
            if (robot.health > 0) {
                ctx.save();
                ctx.globalAlpha = 1;
                ctx.translate(robot.x - offset.x, robot.y - offset.y);
                for (let i = 0; i < robot.weapons.length; i++) {
                    let weapon = robot.weapons[i];
                    if (!weaponNames[weapon.name]) {
                        weaponNames[weapon.name] = weapon.range;
                    }
                }
                let weaponArray = [];
                for (let weaponName in weaponNames) {
                    if (weaponName != "Cinder") {
                        weaponArray.push({ name: weaponName, range: weaponNames[weaponName] });
                    }
                }
                weaponArray.sort((a, b) => b.range - a.range);
                for (let i = 0; i < weaponArray.length; i++) {
                    let weapon = weaponArray[i];
                    let range = weapon.range;
                    let endPointX = range * Math.cos(robot.dir);
                    let endPointY = range * Math.sin(robot.dir);
                    ctx.save();
                    ctx.globalAlpha = 0.2;
                    ctx.lineWidth = 10;
                    ctx.strokeStyle = "#f00";
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(endPointX, endPointY);
                    ctx.stroke();
                    ctx.restore();
                }
                let haveAOEWeapon = robot.weapons.find(e => e.name == "Cinder");
                if (haveAOEWeapon) {
                    renderCircle(0, 0, haveAOEWeapon.range, ctx, false, true, "rgb(255, 0, 0, 0.3)", "rgb(255, 0, 0, 0.6)");
                }
                if(robot.globalAlpha == null) robot.globalAlpha = 1;//tmpObj.globalAlpha2 = Math.min(tmpObj.globalAlpha2 + (delta * 0.00125), 0.5);
                if(robot.invis) {
                    robot.globalAlpha = Math.max(robot.globalAlpha - (delta * 0.005), 0.025);
                }else if(robot.effects.find(e => e.name == "phase shift")) {
                    robot.globalAlpha = Math.max(robot.globalAlpha - (delta * 0.0025), 0.4);
                }else {
                    robot.globalAlpha = Math.min(robot.globalAlpha + (delta * 0.0025), 1);
                }
                ctx.globalAlpha = robot.globalAlpha;
                if (robot.reflector) {
                    ctx.rotate(Math.random() * 360);
                    ctx.strokeStyle = "#fff";
                    ctx.lineWidth = 12;
                    renderStar(ctx, 5, robot.scale+10, robot.scale+10);
                    ctx.stroke();
                    ctx.rotate(Math.random() * 360);
                    ctx.strokeStyle = "#00f";
                    ctx.lineWidth = 12;
                    renderStar(ctx, 4, robot.scale+5, robot.scale+5);
                    ctx.stroke();
                } 
                if (robot.name.includes("Circle")) {
                    renderCircle(0, 0, robot.scale, ctx, false, false, Date.now() - robot.damagedTime <= 20 ? "#fff" : robot.color, robot.isFREEZE ? "#fff" : "#000");
                } else if (robot.name.includes("Pentagon")) {
                    ctx.rotate(robot.dir + Math.PI / 2);
                    ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                    ctx.lineWidth = 12;
                    ctx.fillStyle = robot.color;
                    renderStar(ctx, 2.5, robot.scale, robot.scale);
                    ctx.stroke();
                    ctx.fill();
                } else if (robot.name.includes("Hexagon")) {
                    ctx.rotate(robot.dir + Math.PI / 2);
                    ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                    ctx.lineWidth = 12;
                    ctx.fillStyle = robot.color;
                    renderStar(ctx, 3, robot.scale, robot.scale);
                    ctx.stroke();
                    ctx.fill();
                } else if (robot.name.includes("Heptagon")) {
                    ctx.rotate(robot.dir + Math.PI / 2);
                    ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                    ctx.lineWidth = 12;
                    ctx.fillStyle = robot.color;
                    renderStar(ctx, 3.5, robot.scale, robot.scale);
                    ctx.stroke();
                    ctx.fill();
                }
                ctx.restore();
            }
        }
    }
    var enemies = [];
    var projectiles = [];
    Math.randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    function getRandomOffset(offset) {
        let random = Math.randInt(-offset, offset);
        return ((random / 180) * Math.PI);
    }
    function fireWeapon(weapon, shape, isAlly) {
        if ((shape.isMe ? true : shape.target)) {
            let hardpoints = shape.hardpoints.light + shape.hardpoints.heavy;
            let dir = 0;
            let x = 0;
            let y = 0;
            let scale = 0;
            scale = 15;
            if (weapon.name == "Blaze" || weapon.name == "Ember") {
                scale = 30;
            }else if(weapon.name == "Devastator" || weapon.name == "Scatter" || weapon.name == "Evora" || weapon.name == "Veyron") {
                scale = 25;
            }
            let hScale = scale / 2;
            if (shape.target && !shape.isMe) {
                shape.dir = Math.atan2(shape.target.y - shape.y, shape.target.x - shape.x);
            }
            if (hardpoints == 1) {
                x = shape.x + Math.cos(shape.dir) * (shape.scale - hScale);
                y = shape.y + Math.sin(shape.dir) * (shape.scale - hScale);
            } else if (hardpoints == 2) {
                if (weapon.slot == 0) {
                    x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - hScale);
                } else {
                    x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - hScale);
                }
            } else if (hardpoints == 3) {
                if (weapon.slot == 0) {
                    x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - hScale);
                } else if (weapon.slot == 1) {
                    x = shape.x + Math.cos(shape.dir) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir) * (shape.scale - hScale);
                } else {
                    x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - hScale);
                    y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - hScale);
                }
            } else {
                if (weapon.slot == 0 || weapon.slot == 4) {
                    x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - 7.5);
                } else if (weapon.slot == 1 || weapon.slot == 5) {
                    x = shape.x + Math.cos(shape.dir + 0.39) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir + 0.39) * (shape.scale - 7.5);
                } else if (weapon.slot == 2 || weapon.slot == 6) {
                    x = shape.x + Math.cos(shape.dir - 0.39) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir - 0.39) * (shape.scale - 7.5);
                } else {
                    x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - 7.5);
                    y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - 7.5);
                }
            }
            if (!shape.isMe) {
                if (shape.target) {
                    dir = Math.atan2(shape.target.y - y, shape.target.x - x);
                }
            } else {
                let offsetX = x - offset.x;
                let offsetY = y - offset.y;
                let mosX = (mouseX / window.innerWidth) * maxScreen.x;
                let mosY = (mouseY / window.innerHeight) * maxScreen.y;
                dir = Math.atan2(mosY - offsetY, mosX - offsetX);
            }
            if (weapon.name == "Punisher") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    projType: weapon.projType,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Rime" || weapon.name == "Glacier") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    projType: weapon.projType,
                    vely: 0,
                    scale: scale,
                    speed: 0.12,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/white_bullet.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    aoeRange: weapon.aoeRange,
                    owner: shape,
                    freezeEffect: {
                        name: "freezing",
                        last: weapon.name == "Glacier" ? 75e2 : 5e3,
                        power: weapon.name == "Glacier" ? 3 : 1
                    },
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level,
                        cold: true
                    }
                });
            } else if (weapon.name == "Landslide" || weapon.name == "Avalanche") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    projType: weapon.projType,
                    vely: 0,
                    scale: scale,
                    speed: 0.15,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/rocket.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    aoeRange: weapon.aoeRange,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Scald" || weapon.name == "Incinerator") {
                projectiles.push({
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    projType: weapon.projType,
                    vely: 0,
                    scale: scale,
                    speed: 0.15,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/red_bullet.png",
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    blastEffect: {
                        name: "blast",
                        last: 5e3,
                        power: weapon.effectIncrease
                    },
                    aoeRange: weapon.aoeRange,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Slumber" || weapon.name == "Delay") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.4,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    slowEffect: {
                        name: "slowdown",
                        last: 2e3,
                        power: 0.02
                    },
                    color: "./images/bullets/purple_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Shocker" || weapon.name == "Reaper") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.4,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir,
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    owner: shape,
                    bypassReflector: weapon.name == "Reaper" ? true : false,
                    defensePointsBypass: weapon.name == "Reaper" ? .5 : 0,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Blaze" || weapon.name == "Ember") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    speed: 0.1,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + getRandomOffset(10 * (Math.random() < .5 ? -1 : 1)),
                    isAlly: isAlly,
                    dotEffect: {
                        name: "dot",
                        last: 15e3,
                        dmg: weapon.dotDamage,
                        owner: shape
                    },
                    color: `rgb(255, ${(Math.random() < .5 ? 255 : 0)}, 0, ${Math.randInt(6, 10) / 10})`,
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Destroyer") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + getRandomOffset(5),
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    range: weapon.range,
                    dir: dir - getRandomOffset(5),
                    isAlly: isAlly,
                    color: "./images/bullets/bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Evora" || weapon.name == "Veyron") {
                let spread = 4;
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + getRandomOffset(spread),
                    isAlly: isAlly,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    color: "./images/bullets/sonic_blast.png",
                    owner: shape,
                    grayDamageAmount: 1,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + (-1 * getRandomOffset(spread)),
                    isAlly: isAlly,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    color: "./images/bullets/sonic_blast.png",
                    owner: shape,
                    grayDamageAmount: 1,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Devastator" || weapon.name == "Scatter") {
                for (let i = 0; i < 7; i++) {
                    projectiles.push({
                        projType: weapon.projType,
                        x: x,
                        y: y,
                        oldX: x,
                        oldY: y,
                        velx: 0,
                        vely: 0,
                        scale: scale,
                        speed: 0.25,
                        dmg: weapon.dmg,
                        range: weapon.range,
                        dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(8)),
                        isAlly: isAlly,
                        avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                        color: "./images/bullets/sonic_blast.png",
                        owner: shape,
                        knockback: .15,
                        weaponOwner: {
                            name: weapon.name,
                            level: weapon.level
                        }
                    });
                }
            } else if (weapon.name == "Thunder" || weapon.name == "Storm") {
                for (let i = 0; i < (weapon.name == "Storm" ? 15 : 25); i++) {
                    projectiles.push({
                        projType: weapon.projType,
                        x: x,
                        y: y,
                        oldX: x,
                        oldY: y,
                        velx: 0,
                        vely: 0,
                        scale: scale,
                        speed: 0.25,
                        dmg: weapon.dmg,
                        range: weapon.range,
                        dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(7)),
                        isAlly: isAlly,
                        avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                        color: "./images/bullets/bullet.png",
                        owner: shape,
                        weaponOwner: {
                            name: weapon.name,
                            level: weapon.level
                        }
                    });
                }
            } else if (weapon.name == "Viper" || weapon.name == "Sting") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(2)),
                    isAlly: isAlly,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    dotEffect: {
                        name: "dot",
                        last: 4e3,
                        dmg: weapon.dotDamage,
                        owner: shape
                    },
                    color: "./images/bullets/dot_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                let spread = (weapon.firedTime / 16000) * 12;
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(spread)),
                    isAlly: isAlly,
                    color: "./images/bullets/energy_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            } else if (weapon.name == "Flux") {
                projectiles.push({
                    projType: weapon.projType,
                    x: x,
                    y: y,
                    oldX: x,
                    oldY: y,
                    velx: 0,
                    vely: 0,
                    scale: scale,
                    speed: 0.25,
                    dmg: weapon.dmg,
                    range: weapon.range,
                    antiTier4_5: true,
                    avoidBuildings: shape.ABILITYSPEEDMULTI == 3 ? true : false,
                    dir: dir + ((Math.random() < .5 ? 1 : -1) * getRandomOffset(3)),
                    isAlly: isAlly,
                    color: "./images/bullets/energy_bullet.png",
                    owner: shape,
                    weaponOwner: {
                        name: weapon.name,
                        level: weapon.level
                    }
                });
            }
        }
    }
    function getLeaguePoints(rewardsMulti) {
        let points = player.league;
        let reward = 0;
        let E = rewardsMulti >= 3 ? false : true;
        if (points >= 7e3) {
            reward = E ? -100 : 15;
        } else if (points >= 6e3) {
            reward = E ? -75 : 45;
        } else if (points >= 5e3) {
            reward = E ? -50 : 75;
        } else if (points >= 4e3) {
            reward = E ? -35 : 105;
        } else if (points >= 3e3) {
            reward = E ? -25 : 150;
        } else if (points >= 2e3) {
            reward = E ? -15 : 225;
        } else if (points >= 1e3) {
            reward = E ? -10 : 255;
        } else if (points < 1e3) {
            reward = E ? -5 : 300;
        }
        player.league += reward;
        if (player.league < 0) {
            player.league = 0;
        }
    }
    function endGame(Player, rewardsMulti) {
        enemies = [];
        projectiles = [];
        players = [];
        buildings = [];
        shieldEffects = [];
        let allElements = document.getElementsByTagName("*");
        let elementsWithTracer = [];
        for (let i = 0; i < allElements.length; i++) {
            let element = allElements[i];
            if (element.id) {
                if (element.id.indexOf("radar") !== -1) {
                    elementsWithTracer.push(element);
                }
            }
        }
        elementsWithTracer.forEach(e => {
            e.remove();
        })
        KILLLOGS = [];
        beaconPoints.enemy = 0;
        beaconPoints.ally = 0;
        text = [];
        bombeffect = [];
        gameTimePlayed = 0;
        try {
            let LEGUASDAPLPPINT = 0;
            let oldYAY = rewardsMulti;
            if (rewardsMulti == "YAY WIN") {
                rewardsMulti = 3;
            }
            if (player.gameMode == 3 || player.gameMode == 2 || oldYAY == "YAY WIN") {
                let lastAMOUNT = player.league;
                getLeaguePoints(rewardsMulti);
                LEGUASDAPLPPINT = player.league - lastAMOUNT;
            }
            player.gameMode = -1;
            //document.getElementById("hangerUI").style.display = "block";
            document.getElementById("sideDisplay").style.display = "block";
            document.getElementById("goToBattle").style.display = "block";
            document.getElementById("gameModesDisplay").style.display = "none";
            let adjust = window.innerWidth;
            if (Player.dmg == null) Player.dmg = 0;
            if (Player.kills == null) Player.kills = 0;
            addTaskXP("kills", Player.kills);
            addTaskXP("dmg", Math.abs(Player.dmg));
            let KEY = 0;
            let SLIVER = 0;
            let GOLD = 0;
            SLIVER += (10e3 * Player.kills);
            SLIVER += (1e2 * (Math.abs(Player.dmg) / 750));
            SLIVER += Math.max(Math.round(Player.dmg / 500e3), 0) * 150e3;
            SLIVER += Math.max(Math.round(Player.dmg / 1e6), 0) * 500e3;
            SLIVER = parseInt(removeDecimals(SLIVER));
            for (let i = 0; i < Player.kills; i++) {
                if (GOLD < 25) {
                    GOLD += (rewardsMulti == 2 || rewardsMulti == .5) ? 1.25 : 0.75;
                } else {
                    GOLD += (rewardsMulti == 2 || rewardsMulti == .5) ? 1.75 : 0.25;
                }
            }
            GOLD = Math.floor(GOLD);
            GOLD += Math.floor(Math.abs(Player.dmg) / ((rewardsMulti == 2 || rewardsMulti == .5) ? 75000 : 100000));
            for (let i = 0; i < Player.kills; i++) {
                if (KEY >= 50) {
                    KEY += (rewardsMulti == 2 || rewardsMulti == .5) ? 0.1 : 0.075;
                } else if (KEY >= 25) {
                    KEY += (rewardsMulti == 2 || rewardsMulti == .5) ? 0.25 : 0.1;
                } else {
                    KEY += (rewardsMulti == 2 || rewardsMulti == .5) ? .5 : 0.25;
                }
            }
            KEY = Math.floor(KEY);
            KEY = Math.min(KEY, 1000);
            let OXP = 0;
            for (let i = 0; i < Player.kills; i++) {
                OXP += (rewardsMulti == 2 || rewardsMulti == .5) ? 4 : 2;
            }
            OXP = Math.floor(OXP);
            if (Player.rewardBonus) {
                SLIVER += Player.rewardBonus.silver;
                GOLD += Player.rewardBonus.gold;
                KEY += Player.rewardBonus.keys;
                OXP += Player.rewardBonus.OXP;
            }
            if (Player.beacons) {
                SLIVER += Player.beacons * 25e2;
                GOLD += Player.beacons;
                KEY += Player.beacons * 2;
                OXP += Player.beacons * 4;
            }
            SLIVER *= (rewardsMulti || 1);
            GOLD *= (rewardsMulti || 1);
            KEY *= (rewardsMulti || 1);
            OXP *= (rewardsMulti || 1);
            if (oldYAY != "YAY WIN" && rewardsMulti == 2) {
                SLIVER += 15e3;
                GOLD += 20;
                KEY += 10;
                OXP += 20;
            }
            SLIVER = Math.floor(SLIVER);
            GOLD = Math.floor(GOLD);
            KEY = Math.floor(KEY);
            OXP = Math.floor(OXP);
            let WSP = Player.rewardBonus ? (Player.rewardBonus.WSP || 0) : 0;
            if (Player.rewardBonus && Player.rewardBonus.WSP != null && Player.rewardBonus.WSP !== undefined && WSP > 0 && WSP !== undefined && WSP != null) {
                updateMoneyDisplay("workshopPoints", WSP);
            } else {
                WSP = 0;
            }
            if(!isNaN(SLIVER)) updateMoneyDisplay("sliver", SLIVER);
            if(!isNaN(GOLD)) updateMoneyDisplay("gold", GOLD);
            if(!isNaN(KEY)) updateMoneyDisplay("keys", KEY);
            if(!isNaN(OXP)) addOperationXP(OXP);
            document.getElementById("sideDisplay").innerHTML = `
            <div style="width: 100%; text-align: center; font-size: 40px;">
            ${rewardsMulti == .5 ? "Defeat" : rewardsMulti >= 3 ? "Victory" : "Battle Overview"}
            </div>
            <hr>
            <div style="width: 100%;">
            <div style="position: absolute; top: 130px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Dmg Dealt</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(Player.dmg))}
            </span>
            </div>
            <div style="position: absolute; top: 190px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Kills</span>
            <span style="position: absolute; right: 5px;">
            ${Math.abs(Player.kills)}
            </span>
            </div>
            <div style="position: absolute; top: 250px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Sliver Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(SLIVER))}
            </span>
            </div>
            <div style="position: absolute; top: 310px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Gold Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(GOLD))}
            </span>
            </div>
            <div style="position: absolute; top: 370px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">Key Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(KEY))}
            </span>
            </div>
            <div style="position: absolute; top: 430px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">OXP Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(Math.abs(OXP))}
            </span>
            </div>
            </div>
            <div style="position: absolute; top: 490px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">League Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(LEGUASDAPLPPINT)}
            </span>
            </div>
            </div>
            <div style="position: absolute; top: 550px; font-size: 28px; left: ${adjust / 2 - 300}px; width: 600px; height: 40px; color: #fff; background-color: rgb(0, 0, 0, 0.4);">
            <span style="margin-left: 5px;">WSP Reward</span>
            <span style="position: absolute; right: 5px;">
            ${abbreviateNumber(WSP || 0)}
            </span>
            </div>
            </div>
            <div id="backButton" style="position: absolute; cursor: pointer; text-align: center; font-size: 40px; color: #fff; left: 20px; bottom: 20px; width: 150px; height: 60px; background-color: rgb(124, 124, 124, 1); border: solid; border-color: #fff; border-radius: 6px;">
            BACK
            </div>
            `;
            document.getElementById("backButton").onclick = function() {
                document.getElementById("sideDisplay").innerHTML = "";
                document.getElementById("hangerUI").style.display = "block";
            }
        } catch (e) { console.log(e); }
    }
    var deltaTimer = 0;
    var shieldEffects = [];
    function addGrayDamage(shape, amount, graydmg) {
        let grayDamageMulti = 1;
        if (shape.modules && shape.modules.length) {
            shape.modules.forEach(e => {
                if (e.grayDamageDecrease) {
                    grayDamageMulti -= e.grayDamageDecrease;
                }
            });
        }
        let grayDmg = (graydmg+1 >= 1 ? graydmg : .4);
        if(shape.effects && shape.effects.find(e => e.name == "stampede")) {
            grayDmg /= 160;
        }else if(shape.name == "Gold Circle") {
            grayDmg /= 4;
        }else if(shape.name == "Orange Circle") {
            grayDmg /= 1.6;
        }
        shape.grayDamage += Math.abs(amount * grayDmg * grayDamageMulti);
    }
    canvas.addEventListener("wheel", function(event) {
        let Player = players[0];
        if (Player.robotIndex >= 0) {
            let robot = Player.robots[Player.robotIndex];
            if(event.deltaY > 0) {
                maxScreen.x *= 0.95;
                maxScreen.y *= 0.95;
            }else {
                maxScreen.x /= 0.95;
                maxScreen.y /= 0.95;
            }
            maxScreen = {
                x: Math.min(Math.max(maxScreen.x, 1980), 1980 * robot.fieldOfViewMulti * (robot.ABILITYSPEEDMULTI == 3 ? 1.4 : 1)),
                y: Math.min(Math.max(maxScreen.y, 1080), 1080 * robot.fieldOfViewMulti * (robot.ABILITYSPEEDMULTI == 3 ? 1.4 : 1))
            }
            resize();
        }
    });
    var domains = [];
    function doPaldinStuff(robot, isAlly) {
        bombeffect.push({
            location: robot,
            scale: 0,
            maxScale: 1200,
            color: "blue"
        });
        for (let t = 0; t < players.length; t++) {
            let player = players[t].robots[players[t].robotIndex];
            if (player && players[t].isAlly != isAlly) {
                if (!player.effects.find(e => e.name == "phase shift") && Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                    player.weapons.forEach(e => {
                        if(e.name != "Atomizer" && e.name != "Nucleon") {
                            e.ammo = 0;
                        }
                    });
                    if(player.ability) {
                        let hasPS = player.effects.find(e => e.name == "phase shift");
                        if(hasPS) hasPS.lastTime = 0;
                        let hasStamp = player.effects.find(e => e.name == "stampede");
                        if(hasStamp) hasStamp.lastTime = 0;
                        player.abilityLast = 0;
                        player.abilityReload = player.ability.reload;
                        if(player.ability.charges) {
                            player.ability.charges = 0;
                        }
                    }
                    player.effects.forEach(e => {
                        if(e.name == "stampede" || e.name == "overload") {
                            e.lastTime = 0;
                        }
                    })
                    player.shields.forEach(e => {
                        if(!e.regen) {
                            e.kill = true;
                        }
                    });
                }
            }
        }
    }
    function updatePlayer(delta) {
        let Player = players[0];
        if (Player.robotIndex >= 0) {
            let robot = Player.robots[Player.robotIndex];
            if (robot.dotDamage == null) robot.dotDamage = 0;
            if (robot.ABILITYSPEEDMULTI == null) robot.ABILITYSPEEDMULTI = 1;
            robot.builtInDefensePoints = robot.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE;
            document.getElementById("weaponThing").style.display = "block";
            document.getElementById("healthBar").style.display = "block";
            document.getElementById("weaponThing").innerHTML = "";
            robot.lastX = robot.x;
            robot.lastY = robot.y;
            if(robot.dotConverter && robot.dotConverter.length) {
                let amount = 0;
                for(let i = 0; i < robot.dotConverter.length; i++) {
                    let info = robot.dotConverter[i];
                    amount += info.amount;
                }
                let duration = robot.dotConverter[0].duration;
                robot.effects.push({
                    name: "dot",
                    dmg: Math.abs(amount) / duration,
                    turned: true,
                    lastTime: duration * 1000
                });
            }
            robot.dotConverter = [];
            let amountOfLastStand = robot.modules.filter(e => e.name == "Last Stand");
            if (amountOfLastStand.length && !robot.lastStandUpdate) {
                robot.lastStandDuration = (amountOfLastStand.sort((a, b) => b.lastingTime - a.lastingTime)[0]).lastingTime;
                robot.lastStandUpdate = true;
                robot.lastStandThreshold = 0;
                for (let i = 0; i < amountOfLastStand.length; i++) {
                    robot.lastStandThreshold += amountOfLastStand[i].immunePercent;
                }
                robot.lastStandThreshold = Math.min(robot.lastStandThreshold, 0.99);
            } else if (!robot.lastStandUpdate) {
                robot.lastStandDuration = 0;
                robot.lastStandUpdate = true;
                robot.lastStandThreshold = 0;
            }
            document.getElementById("healthBar").innerHTML = `
            <div style="position: absolute; top: 0px; right: 0px; width: ${100 * (robot.grayDamage / robot.maxhealth)}%; height: 100%; background-color: #808080;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; width: ${100 * (robot.health > robot.maxhealth - robot.grayDamage ? ((robot.maxhealth - robot.grayDamage)/robot.maxhealth) : (robot.health / robot.maxhealth))}%; height: 100%; background-color: #45ff45;">
            </div>
            <div style="position: absolute; top: 0px; right: ${100 - (100 * (robot.health / robot.maxhealth))}%; width: ${robot.effects.find(e => e.name == "phase shift") ? 0 : (100 * (Math.min(robot.dotDamage, robot.health) / robot.maxhealth))}%; height: 100%; background-color: #ffff00;">
            </div>
            <div id="lastStand" style="display: true; position: absolute; top: 0px; left: 0px; width: ${100 * ((robot.lastStandThreshold * robot.maxhealth) / robot.maxhealth)}%; height: 100%; background-color: rgb(0, 0, 0, .2);">
            </div>
            <div style="position: absolute; top: 0px; left: 5px; font-size: 30px; color: ${player.league <= 300 && player.gameMode == 2 ? "#00f" : "#000"};">
            ${removeDecimals(robot.health)}
            </div>
            `;
            document.getElementById("shields").innerHTML = "";
            if (robot.shieldRegen == null) robot.shieldRegen = 1;
            let shieldRegenMulti = 1;
            robot.modules.forEach(e => {
                if (e.shieldRegen) {
                    shieldRegenMulti -= e.shieldRegen;
                }
            })
            for (let i = 0; i < robot.shields.length; i++) {
                let shield = robot.shields[i];
                if(i > 5) break;
                document.getElementById("shields").innerHTML += `
                <div style="display: block; position: absolute; top: ${30 * i}px; left: 10px; width: 300px; height: 25px; background-color: rgb(0, 0, 0, 0.2); border: solid; border-color: #fff; border-width: 1px;">
                <div style="position: absolute; top: 0px; left: 0px; width: ${shield.type == "purple" ? 100 : (100 * (shield.health / shield.maxhealth))}%; height: 100%; background-color: ${shield.type == "yellow" ? "#ffff00" : shield.type == "purple" ? "#800080" : "#02ccaa"};">
                </div>
                <div style="display: ${shield.type == "purple" ? "none" : "block"}; position: absolute; top: 0px; left: 5px; font-size: 17px;">
                ${removeDecimals(shield.health)}
                </div>
                </div>
                `;
            }
            let hasPhaseShift = robot.effects.find(e => e.name == "phase shift");
            for (let i = 0; i < robot.shields.length; i++) {
                let shield = robot.shields[i];
                if(shield) {
                    if (shield.regen) {
                        if (shield.lastRegen == null) shield.lastRegen = false;
                        if (Date.now() - shield.lastRegen >= (5e3 * robot.shieldRegen * shieldRegenMulti)) {
                            shield.lastRegen = Date.now();
                            shield.health += shield.maxhealth * shield.regen;
                        }
                        if (shield.health > shield.maxhealth) {
                            shield.health = shield.maxhealth;
                        }
                    }
                    if (shield.health < 0) {
                        shield.health = 0;
                    }
                    if (shield.health > 0 || shield.type == "purple") {
                        let touchBullets = projectiles.filter(e => !e.bypassShields && !e.isAlly && e.projType != shield.type && checkIfHit(e, robot, "shield"));
                        for (let t = 0; t < touchBullets.length; t++) {
                            shieldEffects.push({
                                location: robot,
                                scale: robot.scale + 20,
                                dir: Math.atan2(touchBullets[t].y - robot.y, touchBullets[t].x - robot.x),
                                type: shield.type
                            });
                            changeHealth(shield, {
                                amount: (touchBullets[t].dmg * (shield.type == "purple" ? 1 : -1)),
                            }, false, touchBullets[t].owner);
                            touchBullets[t].dmg = 0;
                            touchBullets[t].kill = true;
                        }
                    }
                    if((shield.health <= 0 && !shield.regen) || shield.kill) {
                        if(shield.type == "yellow" && robot.ability.name == "Paladin") {
                            doPaldinStuff(robot, true);
                        }
                        robot.shields.splice(i, 1);
                    }
                }
            }
            robot.shieldRegen = 1;
            robot.isFREEZE = robot.freeze ? true : false;
            robot.freeze = false;
            let effectNames = {};
            robot.dotDamage = 0;
            if (robot.usedLastStand) {
                document.getElementById("lastStand").style.display = "none";
            }
            let LMAODJASOUD = false;
            robot.invis = false;
            let slowdownMulti = 1;
            let freezingAMount = 0;
            let blastAmount = 0;
            if (robot.name != "Pink Circle") {
                robot.turnDmgIntoDOT = false;
            }
            if(robot.health <= robot.maxhealth * .3) {
                if(robot.onLowDefense) {
                    robot.effects.push({
                        name: "defense points",
                        amount: robot.onLowDefense,
                        lastTime: delta * 2
                    });
                }
                if(robot.onLowSpeed) {
                    robot.effects.unshift({
                        name: "slowdown",
                        power: -robot.onLowSpeed,
                        lastTime: delta * 2
                    });
                }
            }
            for (let tt = 0; tt < robot.effects.length; tt++) {
                let effect = robot.effects[tt];
                if (effect) {
                    if(!effect.turned && effect.neg && effect.LMAOOOOOKAOSDKASOIDKASDIOAS == null && robot.negEffectReduction) {
                        effect.LMAOOOOOKAOSDKASOIDKASDIOAS = true;
                        effect.lastTime *= robot.negEffectReduction;
                    }
                    if (effect.oldLastTime == null) effect.oldLastTime = effect.lastTime;
                    effect.lastTime -= delta;
                    if(effect.lastTime > 0) {
                        if (hasPhaseShift ? (effect.name == "phase shift" || effect.name == "last stand" || effect.name == "stealth dash") : true) {
                            if (effectNames[effect.name] == null) {
                                effectNames[effect.name] = {
                                    amount: 1,
                                    duration: effect.lastTime,
                                    orginal: effect.oldLastTime
                                };
                            } else {
                                effectNames[effect.name].amount++;
                                effectNames[effect.name].duration = effect.lastTime;
                            }
                            if (effectNames[effect.name].orginal < effect.lastTime) {
                                effectNames[effect.name].orginal = effect.lastTime;
                            }
                        }
                        if (effect.name == "cold pulse") {
                            if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            robot.isFREEZE = true;
                            effect.dmgOverTime -= delta;
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                            if (effect.dmgOverTime <= 0) {
                                changeHealth(robot, {
                                    amount: -50
                                });
                                effect.dmgOverTime = 500;
                            }
                        } else if (effect.name == "dot") {
                            if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            effect.dmgOverTime -= delta;
                            robot.dotDamage += (Math.floor(effect.lastTime / 1000) * effect.dmg) * (robot.dotResistance ? robot.dotResistance : 1);
                            if (effect.dmgOverTime <= 0) {
                                if (effect.turned && !robot.LASTSTANDISON) {
                                    addGrayDamage(robot, effect.dmg);
                                    addText(robot.x, robot.y, effect.dmg, 1000, "#f00");
                                }
                                let didHealth = robot.health > 0;
                                changeHealth(robot, {
                                    amount: -effect.dmg
                                }, false, null, true);
                                effect.dmgOverTime = 1000;
                                if(robot.health <= 0 && didHealth) {
                                    addLogger("unknown bot", {
                                        name: "DOT EFFECT",
                                        level: 1
                                    }, "player");
                                }
                            }
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                        } else if (effect.name == "last stand") {
                            if (effect.LOLOL == null) effect.LOLOL = 0;
                            effect.LOLOL += delta;
                            if (effect.LOLOL >= 100) {
                                effect.LOLOL = 0;
                                if (document.getElementById("lastStand").style.display == "none") {
                                    document.getElementById("lastStand").style.display = "block";
                                } else {
                                    document.getElementById("lastStand").style.display = "none";
                                }
                            }
                            LMAODJASOUD = true;
                            robot.LASTSTANDISON = true;
                        } else if (effect.name == "stealth dash") {
                            if (effect.lastTime >= effect.oldLastTime - 350) {
                                let moveSpeed = 0.02 * robot.reloadMoveMulti * slowdownMulti;
                                robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                                robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                            }
                            robot.invis = true;
                        } else if (effect.name == "slowdown") {
                            slowdownMulti -= effect.power;
                            slowdownMulti = Math.max(slowdownMulti, 0.01);
                            if (effect.power > 0 && robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                        } else if (effect.name == "phase shift") {
                            slowdownMulti += 1.5;
                        } else if (effect.name == "dash") {
                            let moveSpeed = (0.015 * (effect.POWER ? effect.POWER : 1)) * robot.reloadMoveMulti * slowdownMulti;
                            robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                            robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                        } else if (effect.name == "freezing") {
                            freezingAMount++;
                            if (robot.effects.find(e => e.name == "phase shift")) {
                                effect.lastTime = 0;
                            }
                        } else if (effect.name == "stampede") {
                            if(effect.lastTime > 4e3) slowdownMulti += 1.5;
                            robot.turnDmgIntoDOT = true;
                            if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            effect.dmgOverTime -= delta;
                            if (effect.dmgOverTime <= 0) {
                                effect.dmgOverTime = 150;
                                let abilityRange = 400;
                                bombeffect.push({
                                    location: robot,
                                    scale: 0,
                                    maxScale: abilityRange,
                                    color: "stamp"
                                });
                                let near = [];
                                if (player.gameMode == 2 || player.gameMode == 3) {
                                    for (let t = 1; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[0].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= abilityRange + player.scale) {
                                                near.push(player);
                                            }
                                        }
                                    }
                                } else {
                                    near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= abilityRange + e.scale);
                                }
                                for (let i = 0; i < near.length; i++) {
                                    let enemy = near[i];
                                    if (enemy) {
                                        let angle = Math.atan2(enemy.y - robot.y, enemy.x - robot.x);
                                        enemy.velx += Math.cos(angle);
                                        enemy.vely += Math.sin(angle);
                                        let hasHealth = enemy.health > 0;
                                        changeHealth(enemy, {
                                            amount: -robot.ability.dmg
                                        }, true);
                                        if(hasHealth && enemy.health <= 0) {
                                            addLogger("player", {
                                                name: "Stampede",
                                                level: robot.level
                                            }, enemy.PLAYERNAME || "unknown bot")
                                        }
                                    }
                                }
                            }
                        } else if (effect.name == "defense points") {
                            robot.builtInDefensePoints += effect.amount;
                            if(effect.reflector) {
                                robot.reflector = effect.reflector;
                            }
                        } else if(effect.name == "overload") {
                            slowdownMulti += 1;
                        } else if (effect.name == "blast") {
                            blastAmount++;
                        }
                    }
                    if (effect.lastTime <= 0) {
                        if(effect.reflector) {
                            robot.reflector = 0;
                        }
                        if (effect.name == "overload" || (effect.dmg && effect.name == "dash")) {
                            let near = [];
                            let abilityRange = effect.name == "overload" ? 500 : 900;
                            bombeffect.push({
                                location: robot,
                                doFaster: true,
                                blastttt: effect.name == "overload" ? false : true,
                                scale: 0,
                                maxScale: abilityRange
                            });
                            if (player.gameMode == 2 || player.gameMode == 3) {
                                for (let t = 1; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[0].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= abilityRange + player.scale) {
                                            near.push(player);
                                        }
                                    }
                                }
                            } else {
                                near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= abilityRange + e.scale);
                            }
                            for (let i = 0; i < near.length; i++) {
                                let enemy = near[i];
                                if (enemy) {
                                    let angle = Math.atan2(enemy.y - robot.y, enemy.x - robot.x);
                                    enemy.velx += Math.cos(angle) * (effect.name == "overload" ? 1.5 : 5);
                                    enemy.vely += Math.sin(angle) * (effect.name == "overload" ? 1.5 : 5);
                                    let hasHealth = enemy.health > 0;
                                    changeHealth(enemy, {
                                        amount: -robot.ability.dmg
                                    }, true);
                                    if(effect.dotDamage) {
                                        enemy.effects.push({
                                            neg: true,
                                            name: "dot",
                                            dmg: effect.dotDamage,
                                            lastTime: 10e3,
                                            owner: robot
                                        });
                                    }
                                    if (hasHealth && enemy.health <= 0) {
                                        addLogger("player", {
                                            name: effect.name == "overload" ? "Overload" : "Grand Fortitude",
                                            level: robot.level
                                        }, enemy.PLAYERNAME || "unknown bot")
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (let tt = 0; tt < robot.effects.length; tt++) {
                let effect = robot.effects[tt];
                if (effect) {
                    if (effect.lastTime <= 0) {
                        robot.effects.splice(tt, 1);
                    }
                }
            }
            if(blastAmount >= effectThresholds.blast) {
                let amount = 0;
                for (let tt = 0; tt < robot.effects.length; tt++) {
                    let effect = robot.effects[tt];
                    if (effect) {
                        if (effect.name == "blast") {
                            effect.lastTime = 0;
                            amount++;
                            if(amount >= effectThresholds.blast) {
                                break;
                            }
                        }
                    }
                }
                for(let t = 0; t < players.length; t++) {
                    let player = players[t].robots[players[t].robotIndex];
                    if(player && players[t].isAlly) {
                        if(Math.hypot(robot.y - player.y, robot.x - player.x) <= 300 + player.scale) {
                            changeHealth(player, {
                                amount: -25e3,
                                graydmg: 0
                            }, false, undefined, true);
                        }
                    }
                }
                bombeffect.push({
                    location: robot,
                    doFaster: true,
                    scale: 0,
                    maxScale: 300
                });
            }
            if(freezingAMount >= effectThresholds.freeze) {
                robot.effects.push({
                    name: "cold pulse",
                    neg: true,
                    lastTime: 1e3
                });
                for (let tt = 0; tt < robot.effects.length; tt++) {
                    let effect = robot.effects[tt];
                    if (effect) {
                        if (effect.name == "freezing") {
                            effect.lastTime = 0;
                        }
                    }
                }
            }
            slowdownMulti = Math.max(slowdownMulti, 0.01);
            if (!LMAODJASOUD) {
                robot.LASTSTANDISON = false;
            }
            if (!robot.usedLastStand && robot.health <= (robot.lastStandThreshold * robot.maxhealth)) {
                robot.health = (robot.lastStandThreshold * robot.maxhealth);
                robot.effects.push({
                    name: "last stand",
                    lastTime: robot.lastStandDuration
                });
                robot.usedLastStand = true;
            }
            let INDEXXXXXX = 0;
            document.getElementById("LMAOLMAOLMAOLMAO").innerHTML = "";
            if (robot.reloadMoveMulti == null) robot.reloadMoveMulti = 1;
            let hasStampede = robot.effects.find(e => e.name == "stampede");
            if (!robot.isFREEZE && (keysPressed[87] || keysPressed[65] || keysPressed[83] || keysPressed[68])) {
                let dx = (keysPressed[68]) - (keysPressed[65]);
                let dy = (keysPressed[83]) - (keysPressed[87]);
                let moveDir = Math.atan2(dy, dx);
                robot.targetDir = moveDir;
                if (hasStampede && hasStampede.lastTime > 4e3) {
                    if(robot.movedir == null) {
                        robot.movedir = moveDir;
                    }
                    if (robot.movedir != moveDir) {
                        robot.movedir %= (Math.PI * 2);
                        let netAngle = (robot.movedir - moveDir + (Math.PI * 2)) % (Math.PI * 2);
                        let amnt = Math.min(Math.abs(netAngle - (Math.PI * 2)), netAngle, 0.0018 * delta);
                        let sign = (netAngle - Math.PI) >= 0 ? 1 : -1;
                        if (!isNaN(netAngle)) {
                            robot.movedir += sign * amnt + (Math.PI * 2);
                        }
                        moveDir = robot.movedir;
                    }
                }
                let moveSpeed = robot.speed * robot.reloadMoveMulti;
                moveSpeed *= robot.ABILITYSPEEDMULTI;
                moveSpeed *= slowdownMulti;
                robot.velx += Math.cos(moveDir) * (moveSpeed * delta);
                robot.vely += Math.sin(moveDir) * (moveSpeed * delta);
            }
            if (robot.x + (robot.velx * delta) >= robot.scale && robot.x + (robot.velx * delta) <= mapInfo.x - robot.scale) {
                robot.x += (robot.velx * delta);
            } else {
                if (robot.x + (robot.velx * delta) >= mapInfo.x - robot.scale) {
                    robot.x = mapInfo.x - robot.scale;
                } else {
                    robot.x = robot.scale;
                }
            }
            if (robot.y + (robot.vely * delta) >= robot.scale && robot.y + (robot.vely * delta) <= mapInfo.y - robot.scale) {
                robot.y += (robot.vely * delta);
            } else {
                if (robot.y + (robot.vely * delta) >= mapInfo.y - robot.scale) {
                    robot.y = mapInfo.y - robot.scale;
                } else {
                    robot.y = robot.scale;
                }
            }
            if (robot.velx) robot.velx *= Math.pow(0.993, delta);
            if (robot.vely) robot.vely *= Math.pow(0.993, delta);
            for (let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                let rgb = "";
                if (weapon.firedTime == null) weapon.firedTime = 0;
                if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                    let colorValue = ((weapon.firedTime / 16000) * 100);
                    rgb = `rgb(${Math.min(255, Math.floor((colorValue) * 255 / 100))}, ${Math.min(235, Math.floor((100 - colorValue) * 235 / 100))}, 0)`;
                }
                document.getElementById("weaponThing").innerHTML += `
                <div style="position: absolute; bottom: ${80*(i >= 4 ? i-4 : i)}px; left: ${i >= 4 ? 320 : 0}px; width: 200px; height: 75px; margin-top: 20px;">
                <div id="weaponICON${i}" style="position: absolute; z-index: 2; top: 0px; left: 0px; background-color: #404040; border-radius: 100%; width: 75px; height: 75px;">
                </div>
                <div style="position: absolute; top: 23px; left: 60px; background-color: #404040; border-radius: 12px; width: 250px; height: 30px;">
                <div style="width: ${weapon.name == "Atomizer" || weapon.name == "Nucleon" ? ((weapon.firedTime / 16000) * 100) : ((weapon.ammo / weapon.maxammo) * 100)}%; height: 100%; border-radius: 12px; background-color: ${weapon.name == "Atomizer" || weapon.name == "Nucleon" ? rgb : "#fff"};">
                </div>
                </div>
                </div>
                `;
            }
            let shownCinderEffects = false;
            for (let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                let weaponImg = getWeaponIcon(weapon, true);
                weaponImg.style = "width: 100%; height: 100%";
                document.getElementById(`weaponICON${i}`).appendChild(weaponImg);
                if (weapon.continuousReload) {
                    if (weapon.lastFire == null) weapon.lastFire = 0;
                    if (weapon.ammo > 0 && !robot.isFREEZE && keysPressed[32] && Date.now() - weapon.lastFire >= weapon.fireRate) {
                        weapon.lastFire = Date.now();
                        if (weapon.name == "Cinder") {
                            if (player.gameMode == 2 || player.gameMode == 3) {
                                for (let t = 1; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[0].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                            let hasHealth = player.health > 0;
                                            changeHealth(player, {
                                                amount: -weapon.dmg
                                            }, true, robot);
                                            if(player.health <= 0 && hasHealth) {
                                                addLogger("player", {
                                                    name: "Cinder",
                                                    level: weapon.level
                                                }, player.PLAYERNAME || "unknown bot");
                                            }
                                        }
                                    }
                                }
                            } else {
                                enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range + e.scale).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x)).forEach(enemy => {
                                    let hasHealth = enemy.health > 0;
                                    changeHealth(enemy, {
                                        amount: -weapon.dmg
                                    }, true, robot);
                                    if (enemy.health <= 0 && hasHealth) {
                                        addLogger("player", {
                                            name: "Cinder",
                                            level: weapon.level
                                        }, "unknown bot");
                                    }
                                });
                            }
                            if (!shownCinderEffects) {
                                shownCinderEffects = true;
                                bombeffect.push({
                                    location: robot,
                                    doFaster: true,
                                    scale: 0,
                                    maxScale: weapon.range
                                });
                            }
                        } else {
                            fireWeapon(weapon, robot, true);
                        }
                        weapon.ammo--;
                    }
                    if (weapon.ammo < weapon.maxammo) {
                        if (keysPressed[82] && !robot.isFREEZE) {
                            robot.reloadMoveMulti = .5;
                        } else {
                            robot.reloadMoveMulti = 1;
                        }
                        if (weapon.lastChange == null) weapon.lastChange = 0;
                        if (Date.now() - weapon.lastChange >= (weapon.reload * robot.reloadMoveMulti)) {
                            weapon.lastChange = Date.now();
                            if (weapon.name == "Avalanche" || weapon.name == "Rime" || weapon.name == "Glacier") {
                                weapon.ammo = Math.min(weapon.ammo + 4, weapon.maxammo);
                            } else {
                                weapon.ammo++;
                            }
                        }
                    }
                } else {
                    if (weapon.canFire == null) weapon.canFire = true;
                    if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                        if (keysPressed[32]) {
                            weapon.firedTime = Math.min(weapon.firedTime + delta, 16000);
                        } else {
                            weapon.firedTime = Math.max((weapon.firedTime - (delta * 3)), 0);
                        }
                    }else if(weapon.name == "Evora" || weapon.name == "Veyron") {
                        if (keysPressed[32]) {
                            weapon.firedTime = Math.min(weapon.firedTime + delta, 2e3);
                        } else {
                            weapon.firedTime = Math.max((weapon.firedTime - delta), 0);
                        }
                    }
                    if (weapon.canFire) {
                        if (weapon.lastFire == null) weapon.lastFire = 0;
                        robot.reloadMoveMulti = 1;
                        let fireRateMulti = (weapon.name == "Evora" || weapon.name == "Veyron" ? (weapon.firedTime/1000 == 2 ? 0.4 : 1) : (weapon.firedTime / 16000));
                        if (keysPressed[32] && !robot.isFREEZE && Date.now() - weapon.lastFire >= weapon.fireRate * (weapon.name == "Atomizer" || weapon.name == "Nucleon" ? 1 + fireRateMulti : weapon.name == "Evora" || weapon.name == "Veyron" ? fireRateMulti : 1)) {
                            weapon.lastFire = Date.now();
                            if (weapon.name == "Hawk" || weapon.name == "Eagle") {
                                let nearestEnemies = [];
                                if (player.gameMode == 2 || player.gameMode == 3) {
                                    for (let t = 1; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[0].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                                nearestEnemies.push(player);
                                            }
                                        }
                                    }
                                    nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                } else {
                                    nearestEnemies = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range + e.scale).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                }
                                for (let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    if (enemy) {
                                        changeHealth(enemy, {
                                            amount: -weapon.dmg
                                        }, true, robot);
                                    }
                                }
                                if (nearestEnemies.length) {
                                    weapon.ammo--;
                                }
                            } else {
                                fireWeapon(weapon, robot, true);
                                weapon.ammo--;
                            }
                        }
                        if (weapon.ammo <= 0) {
                            weapon.canFire = false;
                        }
                    } else {
                        if (keysPressed[82] && !robot.isFREEZE) {
                            robot.reloadMoveMulti = .5;
                        } else {
                            robot.reloadMoveMulti = 1;
                        }
                        weapon.ammo += ((weapon.maxammo / weapon.reload) * delta) * (keysPressed[82] ? 2 : 1);
                        if (weapon.ammo >= weapon.maxammo) {
                            weapon.ammo = weapon.maxammo;
                            weapon.canFire = true;
                        }
                    }
                }
            }
            if (robot.ABILITYSPEEDMULTI != 3 && !robot.effects.find(e => e.name == "dash" && e.dmg)) {
                for (let i = 0; i < ACTUALBUILDINGSTOTOUCH.length; i++) {
                    let obj = ACTUALBUILDINGSTOTOUCH[i];
                    if (obj) {
                        if (obj.name == "beacon") {
                            if (!robot.isFREEZE && Math.hypot(obj.y - robot.y, obj.x - robot.x) <= 400) {
                                obj.isHAVEON = true;
                                if (obj.ENEMYPOINTS) {
                                    obj.ENEMYPOINTS -= delta;
                                    if (obj.ENEMYPOINTS < 0) {
                                        obj.ENEMYPOINTS = 0;
                                    }
                                } else {
                                    obj.LASTALLYPOINTS = obj.ALLYPOINTS;
                                    obj.ALLYPOINTS += delta;
                                    if (obj.ALLYPOINTS > 5e3) {
                                        if (obj.LASTALLYPOINTS < 5e3) {
                                            if (players[0].beacons == null) players[0].beacons = 0;
                                            players[0].beacons++;
                                            addTaskXP("beacon", 1);
                                        }
                                        obj.ALLYPOINTS = 5e3;
                                    }
                                }
                            }
                        }
                        if (obj.name == "wall rect") {
                            if (circleSquareCollision(robot, obj, true)) {
                                let Px = Math.max(obj.x, Math.min(robot.x, obj.x + obj.width));
                                let Py = Math.max(obj.y, Math.min(robot.y, obj.y + obj.height));
                                robot.velx *= 0.75;
                                robot.vely *= 0.75;
                                robot.velx += Math.cos(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                                robot.vely += Math.sin(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                            }
                        }
                    }
                }
            }
            let MATH1HA___ = 320 * (Math.min(4, robot.weapons.length)/4);
            robot.ABILITYSPEEDMULTI = 1;
            if(robot.ability) {
                document.getElementById("useAbility").style.left = robot.weapons.length > 4 ? robot.effects.length ? `165px` : "20px" : "350px";
                document.getElementById("useAbility").style.bottom = robot.weapons.length > 4 ? `${MATH1HA___+20}px` : "40px";
                document.getElementById("abilityCharges").style.left = robot.weapons.length > 4 ? robot.effects.length ? `165px` : "20px" : "480px";
                document.getElementById("abilityCharges").style.bottom = robot.weapons.length > 4 ? `${MATH1HA___+150}px` : "40px";
            }
            for (let i in effectNames) {
                let string = (effectNames[i].duration / 1000).toString();
                let DOTINDEXXX = string.indexOf('.');
                if (DOTINDEXXX == -1) {
                    string += ".0";
                } else string = string.slice(0, DOTINDEXXX + 2);
                if(effectNames[i].duration >= 1e100) {
                    string = "";
                }
                document.getElementById("LMAOLMAOLMAOLMAO").innerHTML += `
                <div style="position: absolute; left: 20px; width: 125px; height: 43px; background-color: rgb(0, 0, 0, 0.35); bottom: ${(60 * INDEXXXXXX) + (MATH1HA___ + 15)}px; border-radius: 4px;">
                <div style="position: absolute; top: 0px; left: 5px; height: 40px; width: 40px; background-size: 40px 40px; background-image: url('${i == "blast" ? "./images/weapons/incinerator.png" : i == "repair amp" ? "./images/modules/repair_amplifier.png" : i == "overload" ? "./images/weapons/cinder.png" : i == "defense points" ? "./images/full_action.png" : i == "stampede" ? "./images/stampede.png" : i == "freezing" ? "./images/weapons/rime.png" : i == "dot" ? "./images/weapons/viper.png" : i == "last stand" ? "./images/modules/last_stand.png" : i == "phase shift" ? "./images/phase_shift.png" : i == "dash" ? "./images/dash.png" : i == "stealth dash" ? "./images/stealth.png" : i == "slowdown" ? "./images/slowdown_effect.png" : "./images/cold_pulse.png"}');">
                </div>
                <div style="position: absolute; top: 9px; right: 5px; color: #fff;">
                ${effectNames[i].amount}
                </div>
                <div style="position: absolute; top: 9px; left: 50px; color: #fff;">
                ${string}
                </div>
                <div style="position: absolute; bottom: 0px; left: 0px; height: 3px; width: ${(effectNames[i].duration / effectNames[i].orginal) * 100}%; background-color: #fff;">
                </div>
                </div>
                `;
                INDEXXXXXX++;
            }
            if (robot.AUTOMICROREPAIRHAL == null) robot.AUTOMICROREPAIRHAL = 0;
            if (robot.AUTOMICROREPAIRHA > 0) {
                robot.AUTOMICROREPAIRHAL -= delta;
                if (robot.AUTOMICROREPAIRHAL <= 0) {
                    robot.AUTOMICROREPAIRHAL = 1e3;
                    changeHealth(robot, {
                        amount: robot.AUTOMICROREPAIRHA * robot.maxhealth
                    }, true);
                }
            }
            let repairampps = robot.effects.filter(e => e.name == "repair amp").length;
            if(repairampps > 0) {
                let percent = 0.0005 * repairampps;
                if(robot.LASTREPAIRAMPHEALHA == null) robot.LASTREPAIRAMPHEALHA = 0;
                robot.LASTREPAIRAMPHEALHA -= delta;
                if(robot.LASTREPAIRAMPHEALHA <= 0) {
                    robot.LASTREPAIRAMPHEALHA = 1e3;
                    changeHealth(robot, {amount: percent * robot.maxhealth}, true);
                }
            }
            if(robot.mechanicHeal) {
                let percent = robot.mechanicHeal * robot.maxhealth;
                if(robot.mechanicHealLast______ == null) robot.mechanicHealLast______ = 0;
                robot.mechanicHealLast______ -= delta;
                if(robot.mechanicHealLast______ <= 0) {
                    robot.mechanicHealLast______ = 1e3;
                    changeHealth(robot, {amount: percent}, true);
                }
            }
            for (let i = 0; i < robot.modules.length; i++) {
                let module = robot.modules[i];
                if (module.selfFixRepair && !robot.isFREEZE) {
                    if (module.lastRepair == null) module.lastRepair = 1000;
                    module.lastRepair -= delta;
                    if (module.lastRepair <= 0) {
                        module.lastRepair = 1000;
                        changeHealth(robot, {
                            amount: module.selfFixRepair
                        }, true);
                    }
                }
            }
            if (robot.oldScale == null) robot.oldScale = robot.scale;
            if (robot.oldFOV == null) robot.oldFOV = robot.fieldOfViewMulti;
            if(robot.isFREEZE && hasStampede) {
                let effect = hasStampede;
                if(robot.abilityLast != null && robot.abilityLast != 0) {
                    robot.abilityLast = effect.lastTime;
                }
            }
            let hasOVERLOAD = robot.effects.find(e => e.name == "overload");
            if(robot.isFREEZE && hasOVERLOAD) {
                if(robot.abilityLast != null && robot.abilityLast != 0) {
                    robot.abilityLast = hasOVERLOAD.lastTime;
                }
            }
            let hasDIVINE = robot.effects.find(e => e.name == "slowdown" && e.power == .8);
            if(robot.isFREEZE && hasDIVINE) {
                if(robot.abilityLast != null && robot.abilityLast != 0) {
                    robot.abilityLast = hasDIVINE.lastTime;
                }
            }
            if (robot.ability && (robot.ability.name == "Phase Shift" ? true : !robot.isFREEZE)) {
                document.getElementById("useAbility").style.display = "block";
                document.getElementById("abilityCharges").innerHTML = "";
                if (robot.ability.charges >= robot.ability.maxcharge) {
                    robot.ability.charges = robot.ability.maxcharge;
                    robot.abilityReload = robot.ability.reload;
                }
                if (robot.ability.maxcharge) {
                    let amountHave = robot.ability.charges;
                    let amountDont = robot.ability.maxcharge - robot.ability.charges;
                    for (let i = 0; i < amountHave; i++) {
                        document.getElementById("abilityCharges").innerHTML += `
                        <div style="position: absolute; bottom: ${20 * i}px; width: 15px; height: 15px; border-radius: 100%; background-color: rgb(255, 255, 255, 0.8);">
                        </div>
                        `;
                    }
                    for (let i = 0; i < amountDont; i++) {
                        document.getElementById("abilityCharges").innerHTML += `
                        <div style="position: absolute; bottom: ${20 * (i + amountHave)}px; width: 15px; height: 15px; border-radius: 100%; background-color: rgb(0, 0, 0, 0.2);">
                        </div>
                        `;
                    }
                }
                if (keysPressed[69]) {
                    if (robot.abilityLast == null) robot.abilityLast = 0;
                    if (robot.abilityReload == null) robot.abilityReload = 0;
                    if (robot.ability.name == "Divine Judgement" || robot.ability.name == "Grand Fortitude" || robot.ability.name == "Paladin" || robot.ability.name == "Overload" || robot.ability.name == "Stampede" || robot.ability.name == "Stealth" || robot.ability.name == "Retribution" || robot.ability.name == "Ultimate Defense" || robot.ability.name == "Self Heal" || robot.ability.name == "Dragon Flight" || robot.ability.name == "Shield Regeneration" || robot.ability.name == "Full Action") {
                        if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                            robot.abilityLast = robot.ability.lastingTime;
                            if (robot.ability.name == "Divine Judgement") {
                                robot.effects.push({
                                    name: "slowdown",
                                    power: .8,
                                    lastTime: robot.ability.lastingTime
                                });
                                robot.effects.push({
                                    name: "defense points",
                                    amount: 9e3,
                                    lastTime: robot.ability.lastingTime
                                });
                            } else if (robot.ability.name == "Dragon Flight") {
                                maxScreen = {
                                    x: 1980 * robot.fieldOfViewMulti * 1.4,
                                    y: 1080 * robot.fieldOfViewMulti * 1.4
                                };
                                resize();
                            } else if (robot.ability.name == "Stampede") {
                                robot.effects.push({
                                    name: "stampede",
                                    lastTime: robot.ability.lastingTime
                                });
                            } else if (robot.ability.name == "Overload") {
                                robot.effects.push({
                                    name: "overload",
                                    lastTime: robot.ability.lastingTime
                                });
                            } else if (robot.ability.name == "Paladin") {
                                let increase = 1;
                                let fortifier = robot.modules.filter(e => e.shieldHealth);
                                fortifier.forEach(e => {
                                    increase += e.shieldHealth;
                                });
                                robot.shields.push({
                                    type: "yellow",
                                    maxhealth: robot.ability.shieldHp * increase,
                                    health: robot.ability.shieldHp * increase
                                });
                            } else if (robot.ability.name == "Grand Fortitude") {
                                changeHealth(robot, {
                                    amount: robot.maxhealth * 0.1
                                }, true);
                                robot.abilityReload = robot.ability.reload;
                                robot.effects.push({
                                    name: "defense points",
                                    amount: 300,
                                    reflector: .1,
                                    lastTime: 14e3
                                });
                                robot.effects.push({
                                    name: "dash",
                                    lastTime: 350,
                                    dmg: robot.ability.dmg,
                                    dotDamage: robot.ability.dotDamage,
                                    POWER: 2,
                                    dir: robot.dir
                                });
                            }
                        }
                    } else if (robot.ability.name == "Cold Pulse") {
                        if (robot.abilityReload == 0) {
                            bombeffect.push({
                                x: robot.x,
                                y: robot.y,
                                scale: 0,
                                maxScale: 1200,
                                color: "white"
                            });
                            let near = [];
                            if (player.gameMode == 2 || player.gameMode == 3) {
                                for (let t = 1; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[0].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                                            near.push(player);
                                        }
                                    }
                                }
                            } else {
                                near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= 1200 + e.scale);
                            }
                            for (let i = 0; i < near.length; i++) {
                                let enemy = near[i];
                                if (enemy) {
                                    if (enemy.effects == null) enemy.effects = [];
                                    changeHealth(enemy, {
                                        amount: -robot.ability.dmg
                                    }, true);
                                    enemy.effects.push({
                                        name: "cold pulse",
                                        owner: robot,
                                        neg: true,
                                        lastTime: 3e3
                                    });
                                }
                            }
                            if (near.length) {
                                changeHealth(robot, {
                                    amount: (5000 * near.length)
                                }, true)
                            }
                            robot.abilityReload = robot.ability.reload;
                        }
                    } else if (robot.ability.maxcharge) {
                        if (robot.abilityLast == 0 && robot.ability.charges > 0) {
                            robot.ability.charges--;
                            robot.abilityLast = robot.ability.lastingTime;
                            if (robot.ability.name == "Stealth Dash") {
                                robot.effects.push({
                                    name: "stealth dash",
                                    lastTime: 2500,
                                    dir: robot.dir
                                });
                            } else if (robot.ability.name == "Phase Shift") {
                                robot.effects.push({
                                    name: "phase shift",
                                    lastTime: 2e3
                                });
                            } else if (robot.ability.name == "Dash") {
                                robot.effects.push({
                                    name: "dash",
                                    lastTime: 350,
                                    dir: robot.dir
                                });
                            } else if (robot.ability.name == "Fortify") {
                                let increase = 1;
                                let fortifier = robot.modules.filter(e => e.shieldHealth);
                                fortifier.forEach(e => {
                                    increase += e.shieldHealth;
                                });
                                robot.shields.push({
                                    type: robot.level >= 13 ? "yellow" : "energy",
                                    maxhealth: robot.ability.shieldHp * increase,
                                    health: robot.ability.shieldHp * increase
                                });
                            }
                        }
                    } else if (robot.ability.name == "Domain Expansion: Infinite Void") {
                        if (robot.abilityReload == 0) {
                            domains.push({
                                x: robot.x,
                                y: robot.y,
                                scale: 900,
                                isAlly: true,
                                owner: robot,
                                ownerName: robot.name,
                                name: "Infinite Void",
                                lastingTime: robot.ability.lastingTime
                            });
                            robot.abilityReload = robot.ability.reload;
                        }
                    }
                }
                if (robot.abilityReload == null && robot.abilityLast == null) {
                    document.getElementById("cooldownText").innerHTML = "";
                }
                if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                    robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    document.getElementById("cooldownText").innerHTML = "";
                } else if (robot.abilityReload > 0) {
                    document.getElementById("useAbility").style.backgroundImage = "";
                } else {
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                }
                if (robot.abilityLast && robot.abilityLast > 0) {
                    robot.abilityLast -= delta;
                    if (robot.ability.maxcharge) {
                        document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    }
                    document.getElementById("cooldownText").innerHTML = `${(robot.abilityLast / 1000).toFixed(1)}`;
                    document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    if (robot.ability.name == "Divine Judgement") {
                        deltaTimer -= delta;
                        if(deltaTimer <= 0) {
                            deltaTimer = 50;
                            projectiles.push({
                                defensePointsBypass: 0,
                                x: robot.x,
                                y: robot.y,
                                oldX: robot.x,
                                oldY: robot.y,
                                velx: 0,
                                vely: 0,
                                scale: 25,
                                speed: 0.3,
                                projType: "energy",
                                antiTier4_5: true,
                                bypassShields: true,
                                dmg: robot.ability.dmg,
                                range: 2000,
                                dir: robot.dir,
                                color: "./images/bullets/energy_bullet.png",
                                isAlly: true,
                                owner: robot,
                                weaponOwner: {
                                    name: "Divine Judgement",
                                    level: robot.level
                                }
                            });
                        }
                    } else if (robot.ability.name == "Self Heal") {
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            let amount = robot.maxhealth * (robot.name == "Pink Circle" ? 0.05 : .025);
                            changeHealth(robot,{
                                amount: Math.floor(amount)
                            }, true);
                            deltaTimer = 5e2;
                        }
                    } else if (robot.ability.name == "Stealth") {
                        robot.invis = true;
                        robot.ABILITYSPEEDMULTI = 2;
                    } else if (robot.ability.name == "Retribution") {
                        if (robot.shields.length == 0) {
                            robot.shields.push({
                                type: "purple",
                                health: 0
                            });
                        }
                        if (robot.abilityLast <= 4000) {
                            deltaTimer -= delta;
                            if (deltaTimer <= 0) {
                                deltaTimer = 100;
                                let dmgMulti = 1 + (Math.floor((robot.shields[0] ? robot.shields[0].health : 0) / 2500) * 0.075);
                                dmgMulti = Math.min(dmgMulti, 20);
                                for (let i = 0; i < 4; i++) {
                                    if (i == 0) {
                                        x = robot.x + Math.cos(robot.dir + 1.57) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir + 1.57) * (robot.scale - 7.5);
                                    } else if (i == 1) {
                                        x = robot.x + Math.cos(robot.dir + 0.39) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir + 0.39) * (robot.scale - 7.5);
                                    } else if (i == 2) {
                                        x = robot.x + Math.cos(robot.dir - 0.39) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir - 0.39) * (robot.scale - 7.5);
                                    } else {
                                        x = robot.x + Math.cos(robot.dir - 1.57) * (robot.scale - 7.5);
                                        y = robot.y + Math.sin(robot.dir - 1.57) * (robot.scale - 7.5);
                                    }
                                    let offsetX = x - offset.x;
                                    let offsetY = y - offset.y;
                                    let mosX = (mouseX / window.innerWidth) * maxScreen.x;
                                    let mosY = (mouseY / window.innerHeight) * maxScreen.y;
                                    dir = Math.atan2(mosY - offsetY, mosX - offsetX);
                                    projectiles.push({
                                        x: x,
                                        y: y,
                                        oldX: x,
                                        oldY: y,
                                        velx: 0,
                                        vely: 0,
                                        scale: 25,
                                        speed: 0.15,
                                        projType: "energy",
                                        dmg: robot.ability.dmg * dmgMulti,
                                        range: 800,
                                        dir: dir,
                                        color: "./images/bullets/energy_bullet.png",
                                        isAlly: true,
                                        owner: robot,
                                        weaponOwner: {
                                            name: "Retribution",
                                            level: robot.level
                                        }
                                    });
                                }
                            }
                        }
                    } else if (robot.ability.name == "Ultimate Defense") {
                        robot.turnDmgIntoDOT = true;
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            let amount = robot.maxhealth * 0.025;
                            changeHealth(robot, {
                                amount: Math.floor(amount)
                            }, true);
                            deltaTimer = 100;
                        }
                    } else if (robot.ability.name == "Dragon Flight") {
                        robot.builtInDefensePoints = 900;
                        robot.ABILITYSPEEDMULTI = 3;
                        robot.scale = Math.min(robot.scale + (0.08 * delta), robot.oldScale * 2);
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            deltaTimer = 50;
                            for (let asdasd = 0; asdasd < 2; asdasd++) projectiles.push({
                                x: robot.x,
                                y: robot.y,
                                oldX: robot.x,
                                oldY: robot.y,
                                velx: 0,
                                vely: 0,
                                scale: 25,
                                speed: 0.15,
                                avoidBuildings: true,
                                dmg: robot.ability.dmg,
                                range: 1200,
                                projType: "normal",
                                dir: robot.dir + getRandomOffset(5) * (Math.random() < .5 ? -1 : 1),
                                color: "#ff0000",
                                isAlly: true,
                                dotEffect: {
                                    name: "dot",
                                    last: 5e3,
                                    dmg: robot.ability.dotDamage,
                                    owner: robot
                                },
                                owner: robot,
                                weaponOwner: {
                                    name: "Dragon Breathe",
                                    level: robot.level
                                }
                            });
                        }
                    } else if (robot.ability.name == "Full Action") {
                        robot.builtInDefensePoints = robot.name == "Teal Circle" ? 200 : 60;
                    } else if (robot.ability.name == "Shield Regeneration") {
                        robot.shieldRegen = .1;
                    }
                    if (robot.abilityLast <= 0) {
                        robot.abilityLast = 0;
                        if (!robot.ability.maxcharge) robot.abilityReload = robot.ability.reload;
                        if (robot.ability.name == "Retribution" || robot.ability.name == "Paladin") {
                            if(robot.ability.name == "Paladin") {
                                if(robot.shields[0] && robot.shields[0].health > 0) {
                                    let increase = Math.min(robot.shields[0].health / 25, 100e3);
                                    robot.maxhealth += increase;
                                    changeHealth(robot, {
                                        amount: increase * 5
                                    }, true);
                                }
                            }
                            robot.shields = [];
                        }
                        if (robot.ability.name == "Dragon Flight") {
                            maxScreen = {
                                x: 1980 * robot.fieldOfViewMulti,
                                y: 1080 * robot.fieldOfViewMulti
                            };
                            resize();
                        }
                    }
                } else if (robot.ability.charges) {
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    document.getElementById("cooldownText").innerHTML = "";
                }
                if (robot.abilityReload && robot.abilityReload > 0) {
                    robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                    if (!robot.ability.maxcharge) {
                        document.getElementById("cooldownText").innerHTML = `${(robot.abilityReload / 1000).toFixed(1)}`;
                        document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    } else if (robot.ability.maxcharge && !robot.ability.charges) {
                        document.getElementById("useAbility").style.backgroundImage = null;
                        document.getElementById("cooldownText").innerHTML = `${(robot.abilityReload / 1000).toFixed(1)}`;
                        document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    }
                    robot.abilityReload -= delta;
                    if (robot.abilityReload <= 0) {
                        robot.abilityReload = 0;
                        if (robot.ability.maxcharge) {
                            robot.ability.charges++;
                            robot.abilityReload = robot.ability.reload;
                        }
                    }
                }
            } else {
                document.getElementById("useAbility").style.display = "none";
            }
            let touchBullets = projectiles.filter(e => !e.isAlly && checkIfHit(e, robot));
            let hasColdPulse = robot.effects.find(e => e.name == "cold pulse");
            for (let t = 0; t < touchBullets.length; t++) {
                let bullet = touchBullets[t];
                if(bullet.antiTier4_5) {
                    bullet.dmg = antiTier4_5(bullet, robot);
                }
                if (bullet.dmg > 0) {
                    if(bullet.knockback) {
                        robot.velx += Math.cos(bullet.dir) * bullet.knockback;
                        robot.vely += Math.sin(bullet.dir) * bullet.knockback;
                    }
                    if (bullet.dotEffect) {
                        robot.effects.push({
                            neg: true,
                            name: bullet.dotEffect.name,
                            dmg: bullet.dotEffect.dmg,
                            lastTime: bullet.dotEffect.last,
                            owner: bullet.owner
                        });
                    }
                    if (bullet.slowEffect) {
                        robot.effects.unshift({
                            name: bullet.slowEffect.name,
                            power: bullet.slowEffect.power,
                            lastTime: bullet.slowEffect.last
                        });
                    }
                    if (bullet.blastEffect) {
                        for(let asdasd = 0; asdasd < bullet.blastEffect.power; asdasd++) {
                            robot.effects.push({
                                neg: true,
                                owner: bullet.owner,
                                name: bullet.blastEffect.name,
                                lastTime: bullet.blastEffect.last
                            });
                        }
                    }
                    if (bullet.freezeEffect && !hasColdPulse) {
                        for(let asdasd = 0; asdasd < bullet.freezeEffect.power; asdasd++) {
                            robot.effects.push({
                                name: bullet.freezeEffect.name,
                                neg: true,
                                lastTime: bullet.freezeEffect.last
                            });
                        }
                    }
                }
                let hadHealth = robot.health > 0;
                if (!bullet.aoeRange) changeHealth(robot, {
                    amount: -bullet.dmg,
                    graydmg: bullet.grayDamageAmount,
                    defensePointsBypass: bullet.defensePointsBypass,
                    bypassReflector: bullet.bypassReflector
                }, false, bullet.owner);
                if (bullet.aoeRange != null) {
                    for (let asdasd = 0; asdasd < players.length; asdasd++) {
                        let ROBOBT = players[asdasd].robots[players[asdasd].robotIndex];
                        if (ROBOBT && players[asdasd].isAlly && Math.hypot(touchBullets[t].y - ROBOBT.y, touchBullets[t].x - ROBOBT.x) <= touchBullets[t].aoeRange + ROBOBT.scale) {
                            changeHealth(robot, {
                                amount: -touchBullets[t].dmg
                            }, false, touchBullets[t].owner);
                        }
                    }
                    bombeffect.push({
                        x: touchBullets[t].x,
                        y: touchBullets[t].y,
                        scale: 0,
                        color: touchBullets[t].weaponOwner && touchBullets[t].weaponOwner.cold ? "white" : "",
                        maxScale: touchBullets[t].aoeRange
                    })
                }
                if(robot.health <= 0 && hadHealth) {
                    addLogger(bullet.owner ? bullet.owner.PLAYERNAME || "unknown bot" : "unknown bot", touchBullets[t].weaponOwner, "player");
                }
                bullet.dmg = 0;
                bullet.kill = true;
            }
            if (robot.health > (robot.maxhealth - robot.grayDamage)) {
                robot.health = (robot.maxhealth - robot.grayDamage);
            }
            if (robot.health <= 0) {
                if(robot.revive) {
                    robot.grayDamage *= (1 - robot.revive);
                    robot.abilityReload = 0;
                    robot.abilityLast = 0;
                    robot.health += robot.maxhealth * robot.revive;
                    robot.revive = 0;
                }else {
                    players[0].robotIndex = -1;
                    document.getElementById("shields").innerHTML = "";
                    document.getElementById("abilityCharges").innerHTML = "";
                    document.getElementById("useAbility").style.display = "none";
                    document.getElementById("weaponThing").style.display = "none";
                    document.getElementById("healthBar").style.display = "none";
                    let hasRobots = players[0].robots.find(e => e && !e.USED);
                    document.getElementById("chooseSlot").style.bottom = `0px`;
                    if (!hasRobots) {
                        document.getElementById("chooseSlot").style.bottom = "-200px";
                        endGame(players[0], (player.gameMode == 2 || player.gameMode == 3) ? .5 : null);
                    }
                    updateChooseSlots();
                }
            }
        }
    }
    var lastUpdate = Date.now();
    class enemy {
        constructor(data, isBoss, multi = 1) {
            this.x = Math.random() * mapInfo.x;
            this.y = Math.random() * mapInfo.y;
            this.velx = 0;
            this.vely = 0;
            this.name = data.name;
            if (!isBoss) {
                this.reflector = data.reflector;
                this.dmg = data.dmg * multi;
                this.range = data.range;
                this.health = this.maxhealth = data.health * multi;
                this.fireRate = data.fireRate;
            } else {
                this.isBoss = true;
                this.health = this.maxhealth = data.health;
                if (data.AOEArea) {
                    this.AOEArea = {
                        dmg: data.AOEArea.dmg,
                        range: data.AOEArea.range,
                        fireRate: data.AOEArea.fireRate,
                        last: 0
                    };
                }
                if (data.BLASTWAVE) {
                    this.BLASTWAVE = {
                        range: data.BLASTWAVE.range,
                        dmg: data.BLASTWAVE.dmg,
                        knockback: data.BLASTWAVE.knockback
                    };
                }
                this.onKill = data.onKill;
            }
            this.speed = data.speed;
            this.scale = data.scale;
        }
    }
    function changeHealth(object, {amount, graydmg, defensePointsBypass, bypassReflector, REFLECTOOOOR}, isPlayer, doer, noDefense) {
        try {
            amount = parseInt(removeDecimals(amount));
            if (!object || (object.health <= 0 && object.type != "purple")) return;
            if (amount < 0 && object.isFREEZE) {
                amount *= 2;
            }
            let resistance = 0;
            if (object.builtInDefensePoints) {
                resistance += object.builtInDefensePoints;
            }
            if (object.baseDP) {
                resistance += object.baseDP;
            }
            if(defensePointsBypass+1 >= 1) {
                resistance *= defensePointsBypass;
            }
            if (noDefense) resistance = 0;
            let defense = defensePointsToResistance(resistance);
            if (amount < 0) {
                amount *= defense;
                if (object.LASTSTANDISON || (object.effects && (object.effects.find(e => e.name == "phase shift") || object.effects.find(e => e.name == "last stand")))) {
                    amount = 0;
                    return;
                }
            }
            if(amount >= 0 && object.healingMulti) {
                amount *= object.healingMulti;
            }
            if (isPlayer && isPlayer != "HEAL AHAHAHAHHA" && amount != 0) {
                if (players[0].dmg == null) {
                    players[0].dmg = 0;
                }
                let value = Math.abs(amount);
                players[0].dmg -= Math.min(value, isNaN(object.health) ? value : object.health);
                if (object.health + amount <= 0 && !object.GOTTENKILLED) {
                    if (players[0].kills == null) players[0].kills = 0;
                    object.GOTTENKILLED = true;
                    players[0].kills++;
                    let playerRobot = players[0].robots[players[0].robotIndex];
                    if(playerRobot) {
                        if(playerRobot.onKillDefense) {
                            playerRobot.effects.push({
                                name: "defense points",
                                amount: playerRobot.onKillDefense,
                                lastTime: 5e3
                            });
                        }
                        if(playerRobot.onKillSpeed) {
                            playerRobot.effects.unshift({
                                name: "slowdown",
                                power: -playerRobot.onKillSpeed,
                                lastTime: 5e3
                            });
                        }
                    }
                }
            }
            if (amount < 0 && noDefense && object.dotResistance) {
                amount *= object.dotResistance;
            }
            if (!object.turnDmgIntoDOT && amount < 0 && !object.LASTSTANDISON) {
                addGrayDamage(object, amount, graydmg);
            }
            if (amount != 0) {
                if (doer && amount < 0 && object.reflector && !bypassReflector) {
                    let LAOOO = doer.health > 0;
                    changeHealth(doer, {
                        amount: ((amount / (defense || 1)) * object.reflector),
                        REFLECTOOOOR: LAOOO ? object : null
                    }, object.isMe ? true : "HEAL AHAHAHAHHA");
                }
                if (isPlayer != "HEAL AHAHAHAHHA") {
                    if (!isPlayer) {
                        if (object.isMe) addText(object.x, object.y, amount, 1000, "#f00");
                    } else if (isPlayer != "LMAOLMAOLMAOLMAO") {
                        if (amount > 0) {
                            addText(object.x, object.y, amount, 1000, "#8ecc51");
                        } else if (!object.turnDmgIntoDOT) {
                            addText(object.x, object.y, amount, 1000, "#fff");
                        }
                    }
                }
                if (object.turnDmgIntoDOT && amount < 0 && doer && !noDefense) {
                    let duration = object.effects.find(e => e.name == "stampede") ? 7 : object.name == "Orange Circle" ? 15 : 10;
                    if(object.dotConverter == null) object.dotConverter = [];
                    if(object.effects.find(e => e.name == "stampede")) {
                        object.effects.push({
                            name: "defense points",
                            amount: 1,
                            lastTime: 14e3
                        });
                    }
                    object.dotConverter.push({
                        amount: amount,
                        duration: duration
                    });
                } else {
                    if (amount < 0) object.damagedTime = Date.now();
                    if(object.repairAmp && amount < 0) {
                        let maountofstaks = object.effects.filter(e => e.name == "repair amp").length;
                        if(maountofstaks < 60) {
                            if(object.HAHAHAHAMoUntDMGMMGMGGM == null) object.HAHAHAHAMoUntDMGMMGMGGM = 0;
                            object.HAHAHAHAMoUntDMGMMGMGGM += Math.abs(amount);
                            if(object.HAHAHAHAMoUntDMGMMGMGGM >= object.repairAmp.require) {
                                object.HAHAHAHAMoUntDMGMMGMGGM = 0;
                                let amount = object.repairAmp.amount;
                                if(maountofstaks + amount >= 60) {
                                    amount = 60 - maountofstaks;
                                    let percent = (5 - object.repairAmp.amount)/5;
                                    object.grayDamage *= percent;
                                    object.effects.push({
                                        name: "defense points",
                                        amount: object.repairAmp.defensePoints,
                                        lastTime: 1e300
                                    });
                                }
                                for(let i = 0; i < amount; i++) {
                                    object.effects.push({
                                        name: "repair amp",
                                        lastTime: 1e300
                                    });
                                }
                            }
                        }
                    }
                    object.health += amount;
                    if(object.health <= 0 && REFLECTOOOOR && !object.revive) {
                        addLogger((REFLECTOOOOR.isMe ? "player" : REFLECTOOOOR.PLAYERNAME || "unknown bot"), {
                            name: "Reflector",
                            level: REFLECTOOOOR.level || 1
                        }, (object.isMe ? "player" : object.PLAYERNAME || "unknown bot"));
                    }
                }
            }
        } catch (e) { console.log(e); }
    }
    function spawnNewBoss() {
        if (arena.bosses[arena.bossIndex]) {
            enemies = [];
            setTimeout(() => {
                enemies.push(new enemy(arena.bosses[arena.bossIndex], true));
            }, 100);
        } else {
            setTimeout(() => {
                document.getElementById("useAbility").style.display = "none";
                document.getElementById("weaponThing").style.display = "none";
                document.getElementById("healthBar").style.display = "none";
                document.getElementById("chooseSlot").style.bottom = "-200px";
                endGame(players[0], "YAY WIN");
            }, 50);
        }
    }
    function spawnEnemy(multi) {
        let type = extermination.types[Math.floor(extermination.types.length * Math.random())];
        if (enemies.length <= 100) {
            enemies.push(new enemy(type, false, multi));
        }
    }
    function checkIfHit(proj, enemy, plus) {
        if (Math.hypot(proj.y - enemy.y, proj.x - enemy.x) <= (proj.scale * (plus == "shield" ? 1.5 : 1)) + enemy.scale + (plus == "shield" ? 20 : 0)) {
            return true;
        }
        let dist = Math.hypot(proj.lastY - enemy.y, proj.lastX - enemy.x);
        let velx = proj.x * 2 - proj.lastX;
        let vely = proj.y * 2 - proj.lastY;
        let d = Math.hypot(proj.y - vely, proj.x - velx);
        d = dist <= d ? dist : d;
        let tmplocation = {
            x: proj.lastX + Math.cos(proj.dir) * d,
            y: proj.lastY + Math.sin(proj.dir) * d
        };
        if(Math.hypot(tmplocation.y - enemy.y, tmplocation.x - enemy.x) <= (proj.scale * (plus == "shield" ? 1.5 : 1.2)) + enemy.scale + (plus == "shield" ? 20 : 0)) {
            return true;
        }
        return false;
    }
    var extermination = {
        last: 0,
        types: [{
            name: "Burner Circle",
            health: 5000,
            fireRate: 500,
            range: 400,
            dmg: 200,
            scale: 45,
            speed: 0.0028
        }, {
            name: "Sniper Circle",
            health: 7500,
            fireRate: 2000,
            range: 3000,
            dmg: 75,
            scale: 75,
            speed: 0.0014
        }, {
            name: "Smasher Circle",
            health: 2500,
            dmg: 750,
            scale: 35,
            speed: 0.012
        }, {
            name: "Reflector Circle",
            health: 15e3,
            scale: 300,
            speed: 0.0008,
            reflector: 0.05
        }],
        waveIndex: -1,
        last: 0
    };
    function antiTier4_5(bullet, enemy) {
        let amount = 1;
        if(enemy.tier == 3) {
            amount += 1;
        }else if(enemy.tier == 4) {
            amount += 2;
        }
        if(enemy.maxhealth >= 350e3) {
            let mm = enemy.maxhealth - 350e3;
            amount += Math.min(Math.floor(mm/15e3)*.2, 12);
        }
        let dmg = bullet.dmg * amount;
        if(dmg > 0 && bullet.weaponOwner.name.includes("Divine")) {
            bullet.owner.maxhealth += dmg * 0.1;
            changeHealth(bullet.owner, {
                amount: dmg * 2,
            }, bullet.owner.isMe ? true : "LMAOLMAOLMAOLMAO");
        }
        return dmg;
    }
    function updateEnemies(delta) {
        let playerRobot = players[0].robots[players[0].robotIndex];
        if (player.gameMode == 0 && playerRobot && (enemies.length == 0 || Date.now() - extermination.last >= 7500)) {
            extermination.last = Date.now();
            extermination.waveIndex++;
            for (let iii = 0; iii < 25; iii++) {
                spawnEnemy(1 + (extermination.waveIndex / 5));
            }
        }
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            if (enemy && playerRobot) {
                if (enemy.effects == null) enemy.effects = [];
                enemy.isFREEZE = enemy.freeze ? true : false;
                enemy.freeze = false;
                let speedMULTIIIII = 1;
                let freezingAMount = 0;
                let blastAmount = 0;
                /*bombeffect.push({blast
                                        location: robot,
                                        doFaster: true,
                                        scale: 0,
                                        maxScale: weapon.range
                                    });*/
                for (let tt = 0; tt < enemy.effects.length; tt++) {
                    let effect = enemy.effects[tt];
                    if (effect) {
                        effect.lastTime -= delta
                        if(effect.lastTime > 0) {
                            if (effect.name == "cold pulse") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                enemy.isFREEZE = true;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    changeHealth(enemy, {
                                        amount: -50
                                    }, true);
                                    effect.dmgOverTime = 500;
                                }
                            } else if (effect.name == "dot") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    changeHealth(enemy, {
                                        amount: -effect.dmg
                                    }, true, null, true);
                                    effect.dmgOverTime = 1000;
                                }
                            } else if (effect.name == "slowdown") {
                                speedMULTIIIII -= effect.power;
                            } else if (effect.name == "freezing") {
                                freezingAMount++;
                            } else if (effect.name == "blast") {
                                blastAmount++;
                            }
                        }
                        if (effect.lastTime <= 0) {
                            enemy.effects.splice(tt, 1);
                        }
                    }
                }
                if(blastAmount >= effectThresholds.blast) {
                    let amount = 0;
                    for (let tt = 0; tt < enemy.effects.length; tt++) {
                        let effect = enemy.effects[tt];
                        if (effect) {
                            if (effect.name == "blast") {
                                effect.lastTime = 0;
                                amount++;
                                if(amount >= effectThresholds.blast) {
                                    break;
                                }
                            }
                        }
                    }
                    enemies.filter(e => Math.hypot(e.y - enemy.y, e.x - enemy.x) <= 300 + e.scale).forEach(item => {
                        changeHealth(item, {
                            amount: -25e3,
                            graydmg: 0
                        }, true, playerRobot, true);
                    });
                    bombeffect.push({//blast
                        location: enemy,
                        doFaster: true,
                        scale: 0,
                        maxScale: 300
                    });
                }
                if(freezingAMount >= effectThresholds.freeze) {
                    enemy.effects.push({
                        name: "cold pulse",
                        owner: {},
                        neg: true,
                        lastTime: 1e3
                    });
                    for (let tt = 0; tt < enemy.effects.length; tt++) {
                        let effect = enemy.effects[tt];
                        if (effect) {
                            if (effect.name == "freezing") {
                                effect.lastTime = 0;
                            }
                        }
                    }
                }
                speedMULTIIIII = Math.max(speedMULTIIIII, 0.01);
                let moveSpeed = enemy.speed * (enemy.isFREEZE ? 0 : 1) * speedMULTIIIII;
                if (!enemy.isFREEZE && !playerRobot.invis) {
                    if (enemy.name == "Burner Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= enemy.range) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            if (enemy.lastFire == null) enemy.lastFire = 0;
                            if (Date.now() - enemy.lastFire >= enemy.fireRate) {
                                enemy.lastFire = Date.now();
                                changeHealth(playerRobot, {
                                    amount: -enemy.dmg
                                }, false, enemy);
                            }
                        }
                    } else if (enemy.name == "Reflector Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= 400) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                        }
                    } else if (enemy.name == "Sniper Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= 1000) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x) + Math.PI) * (moveSpeed * delta);
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= enemy.fireRate) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: enemy.dmg,
                                range: enemy.range,
                                dir: Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x),
                                color: "#808080",
                                owner: enemy
                            });
                        }
                    } else if (enemy.name == "Smasher Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, {
                                amount: -enemy.dmg
                            }, false, enemy);
                            bombeffect.push({
                                x: enemy.x,
                                y: enemy.y,
                                scale: 0,
                                maxScale: enemy.scale * 2
                            });
                            enemy.health = 0;
                        } else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        }
                    } else if (enemy.name == "Level 1 Boss" || enemy.name == "Level 2 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let percent = (enemy.health / enemy.maxhealth) * 100;
                        enemy.velx += Math.cos(angle + (percent <= 10 ? Math.PI : 0)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (percent <= 10 ? Math.PI : 0)) * (moveSpeed * delta);
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.BLASTWAVE.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.BLASTWAVE.dmg
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * enemy.BLASTWAVE.knockback;
                            playerRobot.vely += Math.sin(angle) * enemy.BLASTWAVE.knockback;
                        }
                        if (Date.now() - enemy.AOEArea.last >= enemy.AOEArea.fireRate && Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.AOEArea.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.AOEArea.dmg
                            }, false, enemy);
                            enemy.AOEArea.last = Date.now();
                        }
                        if (enemy.name == "Level 1 Boss" && percent <= 10) {
                            if (enemy.x + (enemy.velx * delta) >= enemy.scale && enemy.x + (enemy.velx * delta) <= mapInfo.x - enemy.scale) {
                            } else {
                                enemy.health = Math.min(enemy.health + (enemy.maxhealth * 0.05), enemy.maxhealth);
                                enemy.x = Math.random() * mapInfo.x;
                                enemy.y = Math.random() * mapInfo.y;
                            }
                            if (enemy.y + (enemy.vely * delta) >= enemy.scale && enemy.y + (enemy.vely * delta) <= mapInfo.y - enemy.scale) {
                            } else {
                                enemy.health = Math.min(enemy.health + (enemy.maxhealth * 0.05), enemy.maxhealth);
                                enemy.x = Math.random() * mapInfo.x;
                                enemy.y = Math.random() * mapInfo.y;
                            }
                        }
                    } else if (enemy.name == "Level 3 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (Date.now() - enemy.AOEArea.last >= enemy.AOEArea.fireRate && Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.AOEArea.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.AOEArea.dmg
                            }, false, enemy);
                            enemy.AOEArea.last = Date.now();
                        }
                        if (enemy.lastHeal == null) enemy.lastHeal = 0;
                        if (Date.now() - enemy.lastHeal >= 5e3) {
                            enemy.lastHeal = Date.now();
                            enemy.health = Math.min(enemy.health + (enemy.maxhealth * 0.05), enemy.maxhealth);
                        }
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, {
                                amount: -10e3
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * 12;
                            playerRobot.vely += Math.sin(angle) * 12;
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 50) {
                            enemy.lastFire = Date.now();
                            let dmg = 300;
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: dmg,
                                range: 3200 + enemy.scale,
                                dir: angle + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                color: "./images/bullets/bullet.png",
                                owner: enemy
                            });
                            let x = 0;
                            let y = 0;
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    x = enemy.x + Math.cos(angle + 1.57) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle + 1.57) * (enemy.scale - 7.5);
                                } else if (i == 1) {
                                    x = enemy.x + Math.cos(angle + 0.39) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle + 0.39) * (enemy.scale - 7.5);
                                } else if (i == 2) {
                                    x = enemy.x + Math.cos(angle - 0.39) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle - 0.39) * (enemy.scale - 7.5);
                                } else {
                                    x = enemy.x + Math.cos(angle - 1.57) * (enemy.scale - 7.5);
                                    y = enemy.y + Math.sin(angle - 1.57) * (enemy.scale - 7.5);
                                }
                                projectiles.push({
                                    x: x,
                                    y: y,
                                    oldX: x,
                                    oldY: y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 20,
                                    speed: 0.3,
                                    dmg: dmg,
                                    range: 3200 + enemy.scale,
                                    dir: Math.atan2(playerRobot.y - y, playerRobot.x - x) + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                    color: "./images/bullets/bullet.png",
                                    owner: enemy
                                });
                            }
                        }
                    } else if (enemy.name == "Level 4 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 550 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (Date.now() - enemy.AOEArea.last >= enemy.AOEArea.fireRate && Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.AOEArea.range) {
                            changeHealth(playerRobot, {
                                amount: -enemy.AOEArea.dmg
                            }, false, enemy);
                            enemy.AOEArea.last = Date.now();
                        }
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, {
                                amount: -50e3
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * 12;
                            playerRobot.vely += Math.sin(angle) * 12;
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 75) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: 2500,
                                range: 3200 + enemy.scale,
                                dir: angle,
                                color: "./images/bullets/bullet.png",
                                owner: enemy
                            });
                        }
                    } else if (enemy.name == "Level 5 Boss" || enemy.name == "Level 6 Boss") {
                        mapInfo = {
                            x: 75e2,
                            y: 75e2
                        }
                        let percent = (enemy.health / enemy.maxhealth) * 100;
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (enemy.name == "Level 6 Boss") {
                            if (Date.now() - enemy.lastFire >= 50) {
                                enemy.lastFire = Date.now();
                                let dmg = 300;
                                projectiles.push({
                                    x: enemy.x,
                                    y: enemy.y,
                                    oldX: enemy.x,
                                    oldY: enemy.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 20,
                                    speed: 0.3,
                                    dmg: dmg,
                                    range: 3200 + enemy.scale,
                                    dir: angle + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                    color: "./images/bullets/bullet.png",
                                    owner: enemy
                                });
                                let x = 0;
                                let y = 0;
                                for (let i = 0; i < 4; i++) {
                                    if (i == 0) {
                                        x = enemy.x + Math.cos(angle + 1.57) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle + 1.57) * (enemy.scale - 7.5);
                                    } else if (i == 1) {
                                        x = enemy.x + Math.cos(angle + 0.39) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle + 0.39) * (enemy.scale - 7.5);
                                    } else if (i == 2) {
                                        x = enemy.x + Math.cos(angle - 0.39) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle - 0.39) * (enemy.scale - 7.5);
                                    } else {
                                        x = enemy.x + Math.cos(angle - 1.57) * (enemy.scale - 7.5);
                                        y = enemy.y + Math.sin(angle - 1.57) * (enemy.scale - 7.5);
                                    }
                                    projectiles.push({
                                        x: x,
                                        y: y,
                                        oldX: x,
                                        oldY: y,
                                        velx: 0,
                                        vely: 0,
                                        scale: 20,
                                        speed: 0.3,
                                        dmg: dmg,
                                        range: 3200 + enemy.scale,
                                        dir: Math.atan2(playerRobot.y - y, playerRobot.x - x) + ((Math.random() < .5 ? -1 : 1) * getRandomOffset(5)),
                                        color: "./images/bullets/bullet.png",
                                        owner: enemy
                                    });
                                }
                            }
                        } else {
                            if (Date.now() - enemy.lastFire >= 500) {
                                enemy.lastFire = Date.now();
                                projectiles.push({
                                    x: enemy.x,
                                    y: enemy.y,
                                    oldX: enemy.x,
                                    oldY: enemy.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 20,
                                    speed: 0.3,
                                    dmg: 5e3,
                                    range: 3200 + enemy.scale,
                                    dir: angle,
                                    color: "./images/bullets/bullet.png",
                                    owner: enemy
                                });
                            }
                        }
                        if (enemy.lastSpawnEnemy == null) enemy.lastSpawnEnemy = 0;
                        if (Date.now() - enemy.lastSpawnEnemy >= (percent <= 10 ? 500 : 2500)) {
                            enemy.lastSpawnEnemy = Date.now();
                            for (let iii = 0; iii < (percent <= 10 ? 30 : 15); iii++) {
                                spawnEnemy(12);
                            }
                        }
                    } else if (enemy.name == "Level 7 Boss" || enemy.name == "Level 8 Boss") {
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        let distance = Math.hypot(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle + (distance >= 700 ? 0 : Math.PI)) * (moveSpeed * delta);
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 75) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: 8e3,
                                range: 9200 + enemy.scale,
                                dir: angle,
                                dotEffect: {
                                    name: "dot",
                                    last: 20e3,
                                    dmg: (enemy.name == "Level 8 Boss" ? 750 : 500),
                                    owner: enemy
                                },
                                color: "./images/bullets/dot_bullet.png",
                                owner: enemy
                            });
                        }
                        if (enemy.lastFir2e == null) enemy.lastFir2e = 0;
                        if (Date.now() - enemy.lastFir2e >= 15000 && distance <= 1200) {
                            enemy.lastFir2e = Date.now();
                            bombeffect.push({
                                x: enemy.x,
                                y: enemy.y,
                                scale: 0,
                                maxScale: 1200,
                                color: "white"
                            });
                            playerRobot.effects.push({
                                name: "cold pulse",
                                owner: {},
                                neg: true,
                                lastTime: (enemy.name == "Level 8 Boss" ? 7e3 : 6e3)
                            });
                        }
                    } else if (enemy.name == "Level 9 Boss") {
                        mapInfo = {
                            x: 5e3,
                            y: 5e3
                        }
                        let angle = Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x);
                        enemy.velx += Math.cos(angle) * (moveSpeed * delta);
                        enemy.vely += Math.sin(angle) * (moveSpeed * delta);
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= playerRobot.scale + enemy.scale) {
                            changeHealth(playerRobot, {
                                amount: -50e3
                            }, false, enemy);
                            playerRobot.velx += Math.cos(angle) * 1.5;
                            playerRobot.vely += Math.sin(angle) * 1.5;
                        }
                        if (enemy.lastFire == null) enemy.lastFire = 0;
                        if (Date.now() - enemy.lastFire >= 50) {
                            enemy.lastFire = Date.now();
                            projectiles.push({
                                x: enemy.x,
                                y: enemy.y,
                                oldX: enemy.x,
                                oldY: enemy.y,
                                velx: 0,
                                vely: 0,
                                scale: 20,
                                speed: 0.3,
                                dmg: 10e3,
                                range: 9200 + enemy.scale,
                                dir: angle,
                                freezeEffect: {
                                    name: "freezing",
                                    last: 20e3,
                                    power: .5
                                },
                                slowEffect: {
                                    name: "slowdown",
                                    last: 5e3,
                                    power: 0.012
                                },
                                grayDamageAmount: 1,
                                color: "./images/bullets/energy_bullet.png",
                                owner: enemy
                            });
                        }
                    }
                }
                if (enemy.isFREEZE) {
                    enemy.velx = 0;
                    enemy.vely = 0;
                }
                if (enemy.x + (enemy.velx * delta) >= enemy.scale && enemy.x + (enemy.velx * delta) <= mapInfo.x - enemy.scale) {
                    enemy.x += (enemy.velx * delta);
                } else {
                    if (enemy.x + (enemy.velx * delta) >= mapInfo.x - enemy.scale) {
                        enemy.x = mapInfo.x - enemy.scale;
                    } else {
                        enemy.x = enemy.scale;
                    }
                }
                if (enemy.y + (enemy.vely * delta) >= enemy.scale && enemy.y + (enemy.vely * delta) <= mapInfo.y - enemy.scale) {
                    enemy.y += (enemy.vely * delta);
                } else {
                    if (enemy.y + (enemy.vely * delta) >= mapInfo.y - enemy.scale) {
                        enemy.y = mapInfo.y - enemy.scale;
                    } else {
                        enemy.y = enemy.scale;
                    }
                }
                if (enemy.velx) enemy.velx *= Math.pow(0.993, delta);
                if (enemy.vely) enemy.vely *= Math.pow(0.993, delta);
                let touchBullets = projectiles.filter(e => e.isAlly && checkIfHit(e, enemy));
                for (let t = 0; t < touchBullets.length; t++) {
                    if(touchBullets[t].antiTier4_5) {
                        touchBullets[t].dmg = antiTier4_5(touchBullets[t], enemy);
                    }
                    if (!touchBullets[t].aoeRange) changeHealth(enemy, {
                        amount: -touchBullets[t].dmg,
                        graydmg: touchBullets[t].grayDamageAmount,
                        defensePointsBypass: touchBullets[t].defensePointsBypass
                    }, true, playerRobot);
                    if (touchBullets[t].dmg > 0) {
                        if(touchBullets[t].knockback) {
                            enemy.velx += Math.cos(touchBullets[t].dir) * touchBullets[t].knockback;
                            enemy.vely += Math.sin(touchBullets[t].dir) * touchBullets[t].knockback;
                        }
                        if (touchBullets[t].dotEffect) {
                            enemy.effects.push({
                                neg: true,
                                name: touchBullets[t].dotEffect.name,
                                dmg: touchBullets[t].dotEffect.dmg,
                                lastTime: touchBullets[t].dotEffect.last,
                                owner: touchBullets[t].owner
                            });
                        }
                        if (touchBullets[t].blastEffect) {
                            for(let asdasd = 0; asdasd < touchBullets[t].blastEffect.power; asdasd++) {
                                enemy.effects.push({
                                    neg: true,
                                    owner: touchBullets[t].owner,
                                    name: touchBullets[t].blastEffect.name,
                                    lastTime: touchBullets[t].blastEffect.last
                                });
                            }
                        }
                        if (touchBullets[t].slowEffect) {
                            enemy.effects.unshift({
                                neg: true,
                                name: touchBullets[t].slowEffect.name,
                                power: touchBullets[t].slowEffect.power,
                                lastTime: touchBullets[t].slowEffect.last
                            });
                        }
                        if (touchBullets[t].freezeEffect && !enemy.effects.find(e => e.name == "cold pulse")) {
                            for(let asdasd = 0; asdasd < touchBullets[t].freezeEffect.power; asdasd++) {
                                enemy.effects.push({
                                    neg: true,
                                    name: touchBullets[t].freezeEffect.name,
                                    lastTime: touchBullets[t].freezeEffect.last
                                });
                            }
                        }
                    }
                    if (touchBullets[t].aoeRange != null) {
                        let Enemies = enemies.filter(e => Math.hypot(e.y - touchBullets[t].y, e.x - touchBullets[t].x) <= touchBullets[t].aoeRange + e.scale);
                        Enemies.forEach(e => {
                            changeHealth(e, {
                                amount: -touchBullets[t].dmg
                            }, true, playerRobot);
                        });
                        bombeffect.push({
                            x: touchBullets[t].x,
                            y: touchBullets[t].y,
                            scale: 0,
                            color: touchBullets[t].weaponOwner && touchBullets[t].weaponOwner.cold ? "white" : "",
                            maxScale: touchBullets[t].aoeRange
                        })
                    }
                    touchBullets[t].dmg = 0;
                    touchBullets[t].kill = true;
                }
                if (enemy.health > (enemy.maxhealth - enemy.grayDamage)) {
                    enemy.health = (enemy.maxhealth - enemy.grayDamage);
                }
                if (enemy.health <= 0) {
                    if (enemy.isBoss) {
                        if(enemy.name == "Level 8 Boss") {
                            addTaskXP("8 boss", 1);
                        }
                        arena.bossIndex++;
                        if (players[0].rewardBonus == null) {
                            players[0].rewardBonus = {
                                silver: 0,
                                gold: 0,
                                keys: 0,
                                OXP: 0,
                                WSP: 0
                            };
                        }
                        players[0].rewardBonus.silver += enemy.onKill.silver;
                        players[0].rewardBonus.gold += enemy.onKill.gold;
                        players[0].rewardBonus.keys += enemy.onKill.keys;
                        players[0].rewardBonus.OXP += enemy.onKill.OXP;
                        if (enemy.onKill.WSP) {
                            players[0].rewardBonus.WSP += enemy.onKill.WSP;
                        }
                        spawnNewBoss();
                    }
                    enemies.splice(i, 1);
                }
            }
        }
    }
    function updateBullets(delta) {
        for (let i = 0; i < projectiles.length; i++) {
            let bullet = projectiles[i];
            if (bullet) {
                let asd = bullet.avoidBuildings ? false : buildings.find(e => e.name.includes("rect") && circleSquareCollision(bullet, e, true));
                if (asd || bullet.kill || Math.hypot(bullet.oldY - bullet.y, bullet.oldX - bullet.x) >= bullet.range) {
                    if (bullet.aoeRange && (asd || Math.hypot(bullet.oldY - bullet.y, bullet.oldX - bullet.x) >= bullet.range)) {
                        if (player.gameMode == 2 || player.gameMode == 3) {
                            for (let asdasd = 0; asdasd < players.length; asdasd++) {
                                let ROBOBT = players[asdasd].robots[players[asdasd].robotIndex];
                                if (ROBOBT && players[asdasd].isAlly != bullet.isAlly && Math.hypot(bullet.y - ROBOBT.y, bullet.x - ROBOBT.x) <= bullet.aoeRange + ROBOBT.scale) {
                                    changeHealth(ROBOBT, {
                                        amount: -bullet.dmg
                                    }, bullet.owner.isMe ? true : false, bullet.owner);
                                }
                            }
                            bombeffect.push({
                                x: bullet.x,
                                y: bullet.y,
                                scale: 0,
                                color: bullet.weaponOwner && bullet.weaponOwner.cold ? "white" : "",
                                maxScale: bullet.aoeRange
                            })
                        } else {
                            let touchedEnemies = enemies.filter(e => Math.hypot(bullet.y - e.y, bullet.x - e.x) <= bullet.aoeRange + e.scale);
                            for (let t = 0; t < touchedEnemies.length; t++) {
                                if (touchedEnemies[i]) {
                                    changeHealth(touchedEnemies[i], {
                                        amount: -bullet.dmg
                                    }, true, bullet.owner);
                                }
                            }
                            bombeffect.push({
                                x: bullet.x,
                                y: bullet.y,
                                scale: 0,
                                color: bullet.weaponOwner && bullet.weaponOwner.cold ? "white" : "",
                                maxScale: bullet.aoeRange
                            });
                        }
                    }
                    projectiles.splice(i, 1);
                } else {
                    bullet.velx = Math.cos(bullet.dir) * (bullet.speed * delta);
                    bullet.vely = Math.sin(bullet.dir) * (bullet.speed * delta);
                    if(bullet.freeze) {
                        bullet.velx = bullet.vely = 0;
                        bullet.freeze = false;
                    }
                    bullet.lastX = bullet.x;
                    bullet.lastY = bullet.y;
                    bullet.x += (bullet.velx * delta);
                    bullet.y += (bullet.vely * delta);
                    if (isNaN(bullet.dir) || isNaN(bullet.x) || isNaN(bullet.y) || isNaN(bullet.velx) || isNaN(bullet.vely)) {
                        bullet.kill = true;
                    }
                }
            }
        }
    }
    function renderEnemies() {
        ctx.globalAlpha = 1;
        for (let i = 0; i < 250; i++) {
            let enemy = enemies[i];
            if (enemy) {
                ctx.save();
                ctx.translate(enemy.x - offset.x, enemy.y - offset.y);
                if (!enemy.name.includes("Boss")) renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : enemy.name == "Burner Circle" ? "#f00" : enemy.name == "Smasher Circle" ? "#ffff00" : "#808080", enemy.isFREEZE ? "#fff" : "#000");
                if (enemy.name == "Burner Circle") {
                    ctx.globalAlpha = 0.6;
                    renderCircle(0, 0, enemy.range, ctx, false, true, "#f00", "#f00", 17);
                } else if (enemy.name == "Level 1 Boss" || enemy.name == "Level 2 Boss") {
                    ctx.globalAlpha = 0.2;
                    renderCircle(0, 0, enemy.AOEArea.range, ctx, true, false, "#f00");
                    renderCircle(0, 0, enemy.BLASTWAVE.range, ctx, true, false, "#f00");
                    ctx.globalAlpha = 1;
                    renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : "#808080", enemy.isFREEZE ? "#fff" : "#000");
                } else if (enemy.name == "Level 3 Boss" || enemy.name == "Level 4 Boss") {
                    ctx.globalAlpha = 0.2;
                    renderCircle(0, 0, enemy.AOEArea.range, ctx, true, false, "#f00");
                    ctx.globalAlpha = 1;
                    renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : "#ffff00", enemy.isFREEZE ? "#fff" : "#000");
                } else if (enemy.name.includes("Boss")) {
                    renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : enemy.name == "Level 7 Boss" || enemy.name == "Level 8 Boss" ? "#0f0" : "#f00", enemy.isFREEZE ? "#fff" : "#000");
                }
                if (enemy.isBoss) {
                    ctx.fillStyle = "#fff";
                    ctx.font = "34px Open Sans";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillText(`${abbreviateNumber(enemy.health)}/${abbreviateNumber(enemy.maxhealth)}`, 0, enemy.scale + 20);
                }
                ctx.restore();
            }
        }
    }
    var bulletImages = {};
    function getBulletImage(obj) {
        if(obj.color.includes("rgb")) return;
        let tmp = bulletImages[obj.color];
        if (!tmp) {
            tmp = new Image();
            tmp.src = obj.color;
            tmp.onload = function () {
                tmp.isLoaded = true;
            }
            bulletImages[obj.color] = tmp;
        }
        if (tmp.isLoaded) {
            return tmp;
        }
    }
    function renderBullets() {
        ctx.globalAlpha = 1;
        for (let i = 0; i < projectiles.length; i++) {
            let bullet = projectiles[i];
            if (bullet && isOnScreen(bullet.x - offset.x, bullet.y - offset.y, bullet.scale)) {
                ctx.save();
                ctx.translate(bullet.x - offset.x, bullet.y - offset.y);
                let image = getBulletImage(bullet);
                if (image) {
                    ctx.rotate(bullet.dir);
                    ctx.drawImage(image, -20, -20, 40, 40);
                } else {
                    renderCircle(0, 0, bullet.scale, ctx, false, false, bullet.color.includes("#") || bullet.color.includes("rgb") ? bullet.color : "#808080", "#000", 1);
                }
                ctx.restore();
            }
        }
    }
    var bombeffect = [];
    var gameTimePlayed = 0;
    function renderPlayers() {
        for (let i = 1; i < players.length; i++) {
            let player = players[i];
            if (player.robotIndex >= 0) {
                let robot = player.robots[player.robotIndex];
                if (isOnScreen(robot.x - offset.x, robot.y - offset.y, robot.scale)) {
                    ctx.save();
                    ctx.translate(robot.x - offset.x, robot.y - offset.y);
                    if(!robot.invis && !robot.effects.find(e => e.name == "phase shift")) {
                        ctx.globalAlpha = 1;
                        ctx.fillStyle = players[i].isAlly ? "#00f" : "#f00";
                        ctx.font = "34px Open Sans";
                        ctx.textBaseline = "middle";
                        ctx.textAlign = "center";
                        ctx.fillText(players[i].name, 0, -(robot.scale + 20));
                    }
                    ctx.globalAlpha = robot.invis ? 0.025 : robot.effects.find(e => e.name == "phase shift") ? 0.4 : 1;
                    if (robot.reflector) {
                        ctx.save();
                        ctx.rotate(Math.random() * 360);
                        ctx.strokeStyle = "#fff";
                        ctx.lineWidth = 12;
                        renderStar(ctx, 5, robot.scale+10, robot.scale+10);
                        ctx.stroke();
                        ctx.rotate(Math.random() * 360);
                        ctx.strokeStyle = "#00f";
                        ctx.lineWidth = 12;
                        renderStar(ctx, 4, robot.scale+5, robot.scale+5);
                        ctx.stroke();
                        ctx.restore();
                    } 
                    if (robot.name.includes("Circle")) {
                        renderCircle(0, 0, robot.scale, ctx, false, false, Date.now() - robot.damagedTime <= 20 ? "#fff" : robot.color, robot.isFREEZE ? "#fff" : "#000");
                    } else if (robot.name.includes("Pentagon")) {
                        ctx.rotate(robot.dir + Math.PI / 2);
                        ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                        ctx.lineWidth = 12;
                        ctx.fillStyle = robot.color;
                        renderStar(ctx, 2.5, robot.scale, robot.scale);
                        ctx.stroke();
                        ctx.fill();
                        ctx.rotate(-(robot.dir + Math.PI / 2) || 0);
                    } else if (robot.name.includes("Hexagon")) {
                        ctx.rotate(robot.dir + Math.PI / 2);
                        ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                        ctx.lineWidth = 12;
                        ctx.fillStyle = robot.color;
                        renderStar(ctx, 3, robot.scale, robot.scale);
                        ctx.stroke();
                        ctx.fill();
                        ctx.rotate(-(robot.dir + Math.PI / 2) || 0);
                    } else if (robot.name.includes("Heptagon")) {
                        ctx.rotate(robot.dir + Math.PI / 2);
                        ctx.strokeStyle = robot.isFREEZE ? "#fff" : "#000";
                        ctx.lineWidth = 12;
                        ctx.fillStyle = robot.color;
                        renderStar(ctx, 3.5, robot.scale, robot.scale);
                        ctx.stroke();
                        ctx.fill();
                        ctx.rotate(-(robot.dir + Math.PI / 2) || 0);
                    }
                    ctx.fillStyle = players[i].isAlly ? "#000" : "#fff";
                    ctx.font = "34px Open Sans";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillText(`${abbreviateNumber(robot.health)}/${abbreviateNumber(robot.maxhealth)}`, 0, robot.scale + 20);
                    ctx.restore();
                }
            }
        }
    }
    function drawTracer(_, sid, isAlly) {
        let player = players[0].robots[players[0].robotIndex];
        if (player && !_.invis) {
            if (!document.getElementById("enemyradar" + sid)) {
                let newE = document.createElement("div");
                newE.id = `enemyradar${sid}`;
                newE.style = `
                display: none;
                position: absolute;
                left: 0;
                top: 0;
                color: ${isAlly ? "#00f" : "#f00"};
                width: 0;
                height: 0;
                border: solid;
                border-color: transparent transparent transparent ${isAlly ? "#00f" : "#f00"};
                `;
                document.body.appendChild(newE);
            }
            let center_x = window.innerWidth / 2, center_y = window.innerHeight / 2;
            let rad = Math.atan2(_.y - player.y, _.x - player.x), alpha = Math.sqrt(Math.pow(0 - (player.x - _.x), 2) + Math.pow(0 - (player.y - _.y) * (16 / 9), 2)) * 100 / (maxScreen.y / 2) / center_y;
            if (alpha > 1.0) alpha = 1.0;
            let tx = center_x + (center_y * alpha) * Math.cos(rad) - 20 / 2, ty = center_y + (center_y * alpha) * Math.sin(rad) - 20 / 2;
            document.getElementById("enemyradar" + sid).style.borderWidth = "10px 0px 10px 20px";
            document.getElementById("enemyradar" + sid).style.pointerEvents = "none";
            document.getElementById("enemyradar" + sid).style.left = Math.max(20, Math.min(tx, window.innerWidth - 20)) + "px";
            document.getElementById("enemyradar" + sid).style.top = Math.max(20, Math.min(ty, window.innerHeight - 20)) + "px";
            document.getElementById("enemyradar" + sid).style.opacity = alpha;
            document.getElementById("enemyradar" + sid).style.transform = `rotate(${((rad * 180) / Math.PI)}deg)`;
            document.getElementById("enemyradar" + sid).style.display = "block";
        }
    }
    function doMoveStuff(robot, isAlly) {
        let nearestBeacon = buildings.filter(e => e.name == "beacon" && (isAlly ? e.ALLYPOINTS < 5e3 : e.ENEMYPOINTS < 5e3)).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x))[0];
        let nearestEnemy = [];
        for (let i = 0; i < players.length; i++) {
            if (players[i].isAlly != isAlly) {
                if (players[i].robots[players[i].robotIndex]) {
                    nearestEnemy.push(players[i].robots[players[i].robotIndex]);
                }
            }
        }
        if (nearestEnemy.length) nearestEnemy = nearestEnemy.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x))[0];
        let TARGET = null;
        if (player.mapID == 0) {
            if (player.gameMode == 3 && Math.hypot(nearestEnemy.y - robot.y, nearestEnemy.x - robot.x) >= 100) {
                TARGET = nearestEnemy;
            } else if (nearestBeacon && Math.hypot(nearestBeacon.y - robot.y, nearestBeacon.x - robot.x) >= 400 - robot.scale * 2) {
                TARGET = nearestBeacon;
            } else {
                TARGET = null;
            }
            if (TARGET) {
                for (let i = 0; i < buildings.length; i++) {
                    let obj = buildings[i];
                    if (obj.name.includes("col")) {
                        if (Math.hypot(obj.y - robot.y, obj.x - robot.x) <= 25 + robot.scale) {
                            if (obj.name == "right col") {
                                if (TARGET.x <= obj.x) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.y > obj.middleY) {
                                        return Math.PI / 2;
                                    } else {
                                        return -Math.PI / 2;
                                    }
                                }
                            } else if (obj.name == "left col") {
                                if (TARGET.x >= obj.x) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.y > obj.middleY) {
                                        return Math.PI / 2;
                                    } else {
                                        return -Math.PI / 2;
                                    }
                                }
                            } else if (obj.name == "up col") {
                                if (TARGET.y >= obj.y) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.x > obj.middleX) {
                                        return 0;
                                    } else {
                                        return Math.PI;
                                    }
                                }
                            } else {
                                if (TARGET.y <= obj.y) {
                                    if (obj.onlyDir != null) return obj.onlyDir;
                                    if (TARGET.x > obj.middleX) {
                                        return 0;
                                    } else {
                                        return Math.PI;
                                    }
                                }
                            }
                        }
                    } else if (obj.name == "wall rect" && robot.ABILITYSPEEDMULTI == 1) {
                        if (circleSquareCollision(robot, obj, true)) {
                            let Px = Math.max(obj.x, Math.min(robot.x, obj.x + obj.width));
                            let Py = Math.max(obj.y, Math.min(robot.y, obj.y + obj.height));
                            robot.velx *= 0.75;
                            robot.vely *= 0.75;
                            robot.velx += Math.cos(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                            robot.vely += Math.sin(Math.atan2(robot.y - Py, robot.x - Px)) * (.75 + robot.speed);
                        }
                    }
                }
                return Math.atan2(TARGET.y - robot.y, TARGET.x - robot.x);
            } else {
                return null;
            }
        }
    }
    function PLAYERKNOCKBACK(robot) {
        for (let i = 0; i < players.length; i++) {
            let ROBOT = players[i].robots[players[i].robotIndex];
            if (ROBOT) {
                let distance = Math.hypot(ROBOT.y - robot.y, ROBOT.x - robot.x);
                if (distance <= (robot.scale + ROBOT.scale) * .75) {
                    let angle = Math.atan2(ROBOT.y - robot.y, ROBOT.x - robot.x) + Math.PI;
                    let tmpInt = distance - (robot.scale + ROBOT.scale) * .75;
                    tmpInt = (tmpInt * -1) / 2;
                    robot.x += (tmpInt * Math.cos(angle));
                    robot.y += (tmpInt * Math.sin(angle));
                    ROBOT.x -= (tmpInt * Math.cos(angle));
                    ROBOT.y -= (tmpInt * Math.sin(angle));
                    if (player) {
                        robot.velx *= 0.9;
                        robot.vely *= 0.9;
                    }
                }
            }
        }
    }
    function updatePlayers(delta) {
        for (let i = 1; i < players.length; i++) {
            let robot = players[i].robots[players[i].robotIndex];
            if (robot) {
                PLAYERKNOCKBACK(robot);
                drawTracer(robot, i, players[i].isAlly);
                robot.isFREEZE = robot.freeze ? true : false;
                robot.freeze = false;
                robot.lastX = robot.x;
                robot.lastY = robot.y;
                if(robot.dotConverter && robot.dotConverter.length) {
                    let amount = 0;
                    for(let i = 0; i < robot.dotConverter.length; i++) {
                        let info = robot.dotConverter[i];
                        amount += info.amount;
                    }
                    let duration = robot.dotConverter[0].duration;
                    robot.effects.push({
                        name: "dot",
                        dmg: Math.abs(amount) / duration,
                        turned: true,
                        lastTime: duration * 1000
                    });
                }
                robot.dotConverter = [];
                robot.invis = false;
                let slowdownMulti = 1;
                let freezingAMount = 0;
                let blastAmount = 0;
                robot.builtInDefensePoints = robot.HAHAHAHHAHAHHANORMALDEFENENENNENENENNE;
                for (let tt = 0; tt < robot.effects.length; tt++) {
                    let effect = robot.effects[tt];
                    if (effect) {
                        if (effect.oldLastTime == null) effect.oldLastTime = effect.lastTime;
                        effect.lastTime -= delta
                        if(effect.lastTime > 0) {
                            if (effect.name == "cold pulse") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                robot.isFREEZE = true;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    let hadHealth = robot.health > 0;
                                    changeHealth(robot, {
                                        amount: -50
                                    }, effect.owner && effect.owner.isMe ? true : "LMAOLMAOLMAOLMAO");
                                    effect.dmgOverTime = 500;
                                    if(robot.health <= 0 && hadHealth) {
                                        addLogger(effect.owner ? effect.owner.PLAYERNAME || "unknown bot" : "unknown bot", {
                                            name: "COLD PULSE",
                                            level: 1
                                        }, robot.PLAYERNAME);
                                    }
                                }
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if (effect.name == "dot") {
                                if (effect.dmgOverTime == null) effect.dmgOverTime = 0;
                                effect.dmgOverTime -= delta;
                                if (effect.dmgOverTime <= 0) {
                                    if (robot.turned) {
                                        addGrayDamage(robot, effect.dmg);
                                    }
                                    let hadHealth = robot.health > 0;
                                    changeHealth(robot, {
                                        amount: -effect.dmg
                                    }, effect.owner ? effect.owner.isMe ? true : "LMAOLMAOLMAOLMAO" : "LMAOLMAOLMAOLMAO", null, true);
                                    if(robot.health <= 0 && hadHealth) {
                                        addLogger("unknown bot", {
                                            name: "DOT EFFECT",
                                            level: 1
                                        }, robot.PLAYERNAME);
                                    }
                                    effect.dmgOverTime = 1000;
                                }
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if (effect.name == "stealth dash") {
                                if (effect.lastTime >= effect.oldLastTime - 350) {
                                    let moveSpeed = 0.02 * slowdownMulti;
                                    robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                                    robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                                }
                                robot.invis = true;
                            } else if (effect.name == "slowdown") {
                                slowdownMulti -= effect.power;
                                if (effect.power > 0 && robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if (effect.name == "phase shift") {
                                slowdownMulti += 1.5;
                            } else if (effect.name == "dash") {
                                let moveSpeed = 0.015 * slowdownMulti;
                                robot.velx += Math.cos(effect.dir) * (moveSpeed * delta);
                                robot.vely += Math.sin(effect.dir) * (moveSpeed * delta);
                            } else if (effect.name == "freezing") {
                                freezingAMount++;
                                if (robot.effects.find(e => e.name == "phase shift")) {
                                    effect.lastTime = 0;
                                }
                            } else if(effect.name == "overload") {
                                slowdownMulti += 1;
                            } else if (effect.name == "blast") {
                                blastAmount++;
                            } else if (effect.name == "defense points") {
                                robot.builtInDefensePoints += effect.amount;
                            }
                        }
                        if (effect.lastTime <= 0) {
                            if (effect.name == "overload") {
                                let abilityRange = 500;
                                bombeffect.push({
                                    location: robot,
                                    doFaster: true,
                                    scale: 0,
                                    maxScale: abilityRange
                                });
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[i].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= abilityRange + player.scale) {
                                            let angle = Math.atan2(player.y - robot.y, player.x - robot.x);
                                            player.velx += Math.cos(angle) * 5;
                                            player.vely += Math.sin(angle) * 5;
                                            let hasHealth = player.health > 0;
                                            changeHealth(player, {
                                                amount: -robot.ability.dmg
                                            }, true);
                                            if (hasHealth && player.health <= 0) {
                                                addLogger(robot.PLAYERNAME, {
                                                    name: "Overload",
                                                    level: robot.level
                                                }, player.PLAYERNAME || "unknown bot")
                                            }
                                        }
                                    }
                                }
                            }
                            robot.effects.splice(tt, 1);
                        }
                    }
                }
                if(blastAmount >= effectThresholds.blast) {
                    let theowner = null;
                    let amount = 0;
                    for (let tt = 0; tt < robot.effects.length; tt++) {
                        let effect = robot.effects[tt];
                        if (effect) {
                            if (effect.name == "blast") {
                                theowner = effect.owner;
                                effect.lastTime = 0;
                                amount++;
                                if(amount >= effectThresholds.blast) {
                                    break;
                                }
                            }
                        }
                    }
                    for(let t = 0; t < players.length; t++) {
                        let player = players[t].robots[players[t].robotIndex];
                        if(player && players[t].isAlly == players[i].isAlly) {
                            if(Math.hypot(robot.y - player.y, robot.x - player.x) <= 300 + player.scale) {
                                changeHealth(player, {
                                    amount: -25e3,
                                    graydmg: 0
                                }, theowner.isMe ? true : "LMAOLMAOLMAOLMAO", undefined, true);
                            }
                        }
                    }
                    bombeffect.push({
                        location: robot,
                        doFaster: true,
                        scale: 0,
                        maxScale: 300
                    });
                }
                if(freezingAMount >= effectThresholds.freeze) {
                    robot.effects.push({
                        name: "cold pulse",
                        neg: true,
                        lastTime: 1e3
                    });
                    for (let tt = 0; tt < robot.effects.length; tt++) {
                        let effect = robot.effects[tt];
                        if (effect) {
                            if (effect.name == "freezing") {
                                effect.lastTime = 0;
                            }
                        }
                    }
                }
                slowdownMulti = Math.max(slowdownMulti, 0.01);
                if (robot.shieldRegen == null) robot.shieldRegen = 1;
                let SHIELDREGENPOWER = false;
                let shieldRegenMulti = 1;
                for (let tt = 0; tt < robot.shields.length; tt++) {
                    let shield = robot.shields[tt];
                    if (shield.regen) {
                        if (shield.lastRegen == null) shield.lastRegen = false;
                        if (shield.health < shield.maxhealth) {
                            SHIELDREGENPOWER = true;
                        }
                        if (Date.now() - shield.lastRegen >= (5e3 * robot.shieldRegen * shieldRegenMulti)) {
                            shield.lastRegen = Date.now();
                            shield.health += shield.maxhealth * shield.regen;
                        }
                        if (shield.health > shield.maxhealth) {
                            shield.health = shield.maxhealth;
                        }
                    }
                    if (shield.health < 0) {
                        shield.health = 0;
                    }
                    if (shield.health > 0 || shield.type == "purple") {
                        let touchBullets = projectiles.filter(e => !e.bypassShields && e.isAlly != players[i].isAlly && e.projType != shield.type && checkIfHit(e, robot, "shield"));
                        for (let t = 0; t < touchBullets.length; t++) {
                            shieldEffects.push({
                                location: robot,
                                scale: robot.scale + 20,
                                dir: Math.atan2(touchBullets[t].y - robot.y, touchBullets[t].x - robot.x),
                                type: shield.type
                            });
                            changeHealth(shield, {
                                amount: (touchBullets[t].dmg * (shield.type == "purple" ? 1 : -1))
                            }, false, touchBullets[t].owner);
                            touchBullets[t].dmg = 0;
                            touchBullets[t].kill = true;
                        }
                    }
                    if((shield.health <= 0 && !shield.regen) || shield.kill) {
                        if(shield.type == "yellow" && robot.ability.name == "Paladin") {
                            doPaldinStuff(robot, players[i].isAlly);
                        }
                        robot.shields.splice(tt, 1);
                    }
                }
                robot.shieldRegen = 1;
                if (robot.ABILITYSPEEDMULTI == null) robot.ABILITYSPEEDMULTI = 1;
                if (!robot.isFREEZE) {
                    let moveDir = doMoveStuff(robot, players[i].isAlly);
                    if (moveDir != null) {
                        let moveSpeed = robot.speed;
                        moveSpeed *= robot.ABILITYSPEEDMULTI;
                        moveSpeed *= slowdownMulti;
                        robot.velx += Math.cos(moveDir) * (moveSpeed * delta);
                        robot.vely += Math.sin(moveDir) * (moveSpeed * delta);
                    }
                }
                robot.ABILITYSPEEDMULTI = 1;
                if (robot.x + (robot.velx * delta) >= robot.scale && robot.x + (robot.velx * delta) <= mapInfo.x - robot.scale) {
                    robot.x += (robot.velx * delta);
                } else {
                    if (robot.x + (robot.velx * delta) >= mapInfo.x - robot.scale) {
                        robot.x = mapInfo.x - robot.scale;
                    } else {
                        robot.x = robot.scale;
                    }
                }
                if (robot.y + (robot.vely * delta) >= robot.scale && robot.y + (robot.vely * delta) <= mapInfo.y - robot.scale) {
                    robot.y += (robot.vely * delta);
                } else {
                    if (robot.y + (robot.vely * delta) >= mapInfo.y - robot.scale) {
                        robot.y = mapInfo.y - robot.scale;
                    } else {
                        robot.y = robot.scale;
                    }
                }
                if (robot.velx) robot.velx *= Math.pow(0.993, delta);
                if (robot.vely) robot.vely *= Math.pow(0.993, delta);
                if (robot.isFREEZE) {
                    robot.doFireWeapons = false;
                    robot.target = null;
                } else {
                    let enemies = [];
                    for (let oioi = 0; oioi < players.length; oioi++) {
                        let ROBOTBO = players[oioi].robots[players[oioi].robotIndex];
                        if (ROBOTBO && !ROBOTBO.invis && players[oioi].isAlly != players[i].isAlly) {
                            enemies.push(ROBOTBO);
                        }
                    }
                    robot.target = enemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x))[0];
                    if (robot.target) {
                        let lowestRange = robot.weapons.sort((a, b) => a.range - b.range)[0];
                        if (Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= lowestRange.range) {
                            robot.doFireWeapons = true;
                        } else {
                            robot.doFireWeapons = false;
                        }
                    } else {
                        robot.doFireWeapons = false;
                    }
                }
                let shownCinderEffects = false;
                for (let yyy = 0; yyy < robot.weapons.length; yyy++) {
                    let weapon = robot.weapons[yyy];
                    if (weapon.continuousReload) {
                        if (weapon.lastFire == null) weapon.lastFire = 0;
                        if (weapon.ammo > 0 && robot.doFireWeapons && Date.now() - weapon.lastFire >= weapon.fireRate) {
                            weapon.lastFire = Date.now();
                            if (weapon.name == "Cinder") {
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[i].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                            let hasHealth = player.health > 0;
                                            changeHealth(player, {
                                                amount: -weapon.dmg
                                            }, player.isMe ? false : "LMAOLMAOLMAOLMAO", robot);
                                            if(player.health <= 0 && hasHealth) {
                                                addLogger(robot.PLAYERNAME, {
                                                    name: "Cinder",
                                                    level: weapon.level
                                                }, player.PLAYERNAME || "unknown bot");
                                            }
                                        }
                                    }
                                }
                                if (!shownCinderEffects) {
                                    shownCinderEffects = true;
                                    bombeffect.push({
                                        location: robot,
                                        doFaster: true,
                                        scale: 0,
                                        maxScale: weapon.range
                                    });
                                }
                            } else {
                                fireWeapon(weapon, robot, players[i].isAlly);
                            }
                            weapon.ammo--;
                        }
                        if (weapon.ammo < weapon.maxammo) {
                            if (weapon.lastChange == null) weapon.lastChange = 0;
                            if (Date.now() - weapon.lastChange >= weapon.reload) {
                                weapon.lastChange = Date.now();
                                if (weapon.name == "Avalanche" || weapon.name == "Rime" || weapon.name == "Glacier") {
                                    weapon.ammo = Math.min(weapon.ammo + 4, weapon.maxammo);
                                } else {
                                    weapon.ammo++;
                                }
                            }
                        }
                    } else {
                        if (weapon.canFire == null) weapon.canFire = true;
                        if (weapon.name == "Atomizer" || weapon.name == "Nucleon") {
                            if (weapon.firedTime == null) weapon.firedTime = 0;
                            if (robot.doFireWeapons) {
                                weapon.firedTime = Math.min(weapon.firedTime + delta, 16000);
                            } else {
                                weapon.firedTime = Math.max((weapon.firedTime - (delta * 3)), 0);
                            }
                        }else if(weapon.name == "Evora" || weapon.name == "Veyron") {
                            if (weapon.firedTime == null) weapon.firedTime = 0;
                            if (robot.doFireWeapons) {
                                weapon.firedTime = Math.min(weapon.firedTime + delta, 2e2);
                            } else {
                                weapon.firedTime = Math.max((weapon.firedTime - delta), 0);
                            }
                        }
                        if (weapon.canFire) {
                            if (weapon.lastFire == null) weapon.lastFire = 0;
                            let fireRateMulti = (weapon.name == "Evora" || weapon.name == "Veyron" ? (weapon.firedTime/1000 == 2 ? .4 : 1) : (weapon.firedTime / 16000));
                            if (robot.doFireWeapons && Date.now() - weapon.lastFire >= weapon.fireRate * (weapon.name == "Atomizer" || weapon.name == "Nucleon" ? 1 + fireRateMulti : weapon.name == "Evora" || weapon.name == "Veyron" ? fireRateMulti : 1)) {
                                weapon.lastFire = Date.now();
                                if (weapon.name == "Hawk" || weapon.name == "Eagle") {
                                    let nearestEnemies = [];
                                    for (let t = 0; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[i].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                                nearestEnemies.push(player);
                                            }
                                        }
                                    }
                                    if (nearestEnemies.length) nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                    for (let ttt = 0; ttt < 3; ttt++) {
                                        let enemy = nearestEnemies[ttt];
                                        if (enemy) {
                                            changeHealth(enemy, {
                                                amount: -weapon.dmg
                                            }, false, robot);
                                        }
                                    }
                                    if (nearestEnemies.length) {
                                        weapon.ammo--;
                                    }
                                } else {
                                    fireWeapon(weapon, robot, players[i].isAlly);
                                    weapon.ammo--;
                                }
                            }
                            if (weapon.ammo <= 0) {
                                weapon.canFire = false;
                            }
                        } else {
                            weapon.ammo += ((weapon.maxammo / weapon.reload) * delta) * (keysPressed[82] ? 2 : 1);
                            if (weapon.ammo >= weapon.maxammo) {
                                weapon.ammo = weapon.maxammo;
                                weapon.canFire = true;
                            }
                        }
                    }
                }
                for (let itew = 0; itew < buildings.length; itew++) {
                    let obj = buildings[itew];
                    if (obj) {
                        if (obj.name == "beacon") {
                            if (!robot.isFREEZE && Math.hypot(obj.y - robot.y, obj.x - robot.x) <= 400) {
                                obj.isHAVEON = true;
                                if (players[i].isAlly) {
                                    if (obj.ENEMYPOINTS) {
                                        obj.ENEMYPOINTS -= delta;
                                        if (obj.ENEMYPOINTS < 0) {
                                            obj.ENEMYPOINTS = 0;
                                        }
                                    } else {
                                        obj.ALLYPOINTS += delta;
                                        if (obj.ALLYPOINTS > 5e3) {
                                            obj.ALLYPOINTS = 5e3;
                                        }
                                    }
                                } else {
                                    if (obj.ALLYPOINTS) {
                                        obj.ALLYPOINTS -= delta;
                                        if (obj.ALLYPOINTS < 0) {
                                            obj.ALLYPOINTS = 0;
                                        }
                                    } else {
                                        obj.ENEMYPOINTS += delta;
                                        if (obj.ENEMYPOINTS > 5e3) {
                                            obj.ENEMYPOINTS = 5e3;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (robot.dir == null) robot.dir = 0;
                if (robot.oldScale == null) robot.oldScale = robot.scale;
                if (robot.deltaTimer == null) robot.deltaTimer = 0;
                let hasOVERLOAD = robot.effects.find(e => e.name == "overload");
                if(robot.isFREEZE && hasOVERLOAD) {
                    if(robot.abilityLast != null && robot.abilityLast != 0) {
                        robot.abilityLast = hasOVERLOAD.lastTime;
                    }
                }
                if (robot.ability && (robot.ability.name == "Phase Shift" ? true : !robot.isFREEZE)) {
                    if (robot.ability.name == "Self Heal") {
                        let percent = robot.health / robot.maxhealth;
                        if (percent < 1) {
                            robot.doUseAbility = true;
                        } else {
                            robot.doUseAbility = false;
                        }
                    } else if (robot.ability.name == "Stealth" || robot.ability.name == "Ultimate Defense" || robot.ability.name == "Shield Regeneration" || robot.ability.name == "Full Action") {
                        if (SHIELDREGENPOWER == true && robot.ability.name == "Shield Regeneration") {
                            robot.doUseAbility = true;
                        } else if (robot.health < robot.maxhealth && (robot.ability.name == "Ultimate Defense" || robot.ability.name == "Full Action")) {
                            robot.doUseAbility = true;
                        } else if (robot.ability.name == "Stealth") {
                            robot.doUseAbility = true;
                        } else {
                            robot.doUseAbility = false;
                        }
                    } else if (robot.target && (robot.ability.name == "Domain Expansion: Infinite Void" || robot.ability.name == "Divine Judgement" || robot.ability.name == "Cold Pulse" || robot.ability.name == "Retribution")) {
                        let lowestRange = robot.weapons.sort((a, b) => a.range - b.range)[0];
                        if(robot.ability.name == "Domain Expansion: Infinite Void") {
                            if(Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= 900) {
                                robot.doUseAbility = true;
                            }else {
                                robot.doUseAbility = false;
                            }
                        }else if (Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= lowestRange.range && Math.hypot(robot.y - robot.target.y, robot.x - robot.target.x) <= (robot.ability.name == "Retribution" ? 800 : robot.ability.name == "Divine Judgement" ? 1800 : 1200) + robot.target.scale) {
                            robot.doUseAbility = true;
                        } else {
                            robot.doUseAbility = false;
                        }
                    } else if (robot.ability.name == "Paladin" || robot.ability.name == "Dragon Flight" || robot.ability.name == "Overload") {
                        robot.doUseAbility = true;
                    } else if (robot.ability.maxcharge) {
                        robot.doUseAbility = true;
                    } else {
                        robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                        robot.doUseAbility = false;
                    }
                    if (robot.doUseAbility) {
                        if (robot.abilityLast == null) robot.abilityLast = 0;
                        if (robot.abilityReload == null) robot.abilityReload = 0;
                        if (robot.ability.name == "Divine Judgement" || robot.ability.name == "Paladin" || robot.ability.name == "Overload" || robot.ability.name == "Stealth" || robot.ability.name == "Retribution" || robot.ability.name == "Ultimate Defense" || robot.ability.name == "Self Heal" || robot.ability.name == "Dragon Flight" || robot.ability.name == "Shield Regeneration" || robot.ability.name == "Full Action") {
                            if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                                robot.abilityLast = robot.ability.lastingTime;
                                if (robot.ability.name == "Divine Judgement") {
                                    robot.effects.push({
                                        name: "slowdown",
                                        power: .8,
                                        lastTime: robot.ability.lastingTime
                                    });
                                    robot.effects.push({
                                        name: "defense points",
                                        amount: 9e3,
                                        lastTime: robot.ability.lastingTime
                                    });
                                } else if(robot.ability.name == "Overload") {
                                    robot.effects.push({
                                        name: "overload",
                                        lastTime: robot.ability.lastingTime
                                    });
                                } else if(robot.ability.name == "Paladin") {
                                    let increase = 1;
                                    let fortifier = robot.modules.filter(e => e.shieldHealth);
                                    fortifier.forEach(e => {
                                        increase += e.shieldHealth;
                                    });
                                    robot.shields.push({
                                        type: "yellow",
                                        maxhealth:robot.ability.shieldHp * increase,
                                        health: robot.ability.shieldHp * increase
                                    });
                                }
                            }
                        } else if (robot.ability.name == "Cold Pulse") {
                            if (robot.abilityReload == 0) {
                                bombeffect.push({
                                    x: robot.x,
                                    y: robot.y,
                                    scale: 0,
                                    maxScale: 1200,
                                    color: "white"
                                });
                                let near = [];
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[i].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= 1200 + player.scale) {
                                            near.push(player);
                                        }
                                    }
                                }
                                for (let iiiiii = 0; iiiiii < near.length; iiiiii++) {
                                    let enemy = near[iiiiii];
                                    if (enemy) {
                                        if (enemy.effects == null) enemy.effects = [];
                                        changeHealth(enemy, {
                                            amount: -robot.ability.dmg}, false);
                                        enemy.effects.push({
                                            name: "cold pulse",
                                            neg: true,
                                            lastTime: 3e3
                                        });
                                    }
                                }
                                if (near.length) {
                                    changeHealth(robot, {
                                        amount: (5000 * near.length)}, false);
                                }
                                robot.abilityReload = robot.ability.reload;
                            }
                        } else if (robot.ability.maxcharge) {
                            if (robot.abilityLast == 0 && robot.ability.charges > 0) {
                                robot.ability.charges--;
                                robot.abilityLast = robot.ability.lastingTime;
                                if (robot.ability.name == "Stealth Dash") {
                                    let moveDir = doMoveStuff(robot, players[i].isAlly);
                                    robot.effects.push({
                                        name: "stealth dash",
                                        lastTime: 2500,
                                        dir: moveDir || robot.dir
                                    })
                                } else if (robot.ability.name == "Phase Shift") {
                                    robot.effects.push({
                                        name: "phase shift",
                                        lastTime: 2e3
                                    });
                                } else if (robot.ability.name == "Dash") {
                                    let moveDir = doMoveStuff(robot, players[i].isAlly);
                                    robot.effects.push({
                                        name: "dash",
                                        lastTime: 350,
                                        dir: moveDir || robot.dir
                                    });
                                } else if (robot.ability.name == "Fortify") {
                                    let increase = 1;
                                    let fortifier = robot.modules.filter(e => e.shieldHealth);
                                    fortifier.forEach(e => {
                                        increase += e.shieldHealth;
                                    });
                                    robot.shields.push({
                                        type: robot.level >= 13 ? "yellow" : "energy",
                                        maxhealth: robot.ability.shieldHp * increase,
                                        health: robot.ability.shieldHp * increase
                                    });
                                }
                            }
                        } else if (robot.ability.name == "Domain Expansion: Infinite Void") {
                            if (robot.abilityReload == 0) {
                                domains.push({
                                    x: robot.x,
                                    y: robot.y,
                                    scale: 900,
                                    isAlly: players[i].isAlly,
                                    owner: robot,
                                    ownerName: robot.name,
                                    name: "Infinite Void",
                                    lastingTime: robot.ability.lastingTime
                                });
                                robot.abilityReload = robot.ability.reload;
                            }
                        }
                    }
                    if (robot.ability.charges >= robot.ability.maxcharge) {
                        robot.ability.charges = robot.ability.maxcharge;
                        robot.abilityReload = robot.ability.reload;
                    }
                    if (robot.abilityLast && robot.abilityLast > 0) {
                        robot.abilityLast -= delta;
                        if (robot.ability.name == "Divine Judgement") {
                            robot.deltaTimer -= delta;
                            if(robot.deltaTimer <= 0) {
                                robot.deltaTimer = 50;
                                projectiles.push({
                                    defensePointsBypass: 0,
                                    x: robot.x,
                                    y: robot.y,
                                    oldX: robot.x,
                                    oldY: robot.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 25,
                                    speed: 0.3,
                                    projType: "energy",
                                    antiTier4_5: true,
                                    bypassShields: true,
                                    dmg: robot.ability.dmg,
                                    range: 2000,
                                    dir: robot.dir,
                                    color: "./images/bullets/energy_bullet.png",
                                    isAlly: players[i].isAlly,
                                    owner: robot,
                                    weaponOwner: {
                                        name: "Divine Judgement",
                                        level: robot.level
                                    }
                                });
                            }
                        }else if (robot.ability.name == "Self Heal") {
                            robot.deltaTimer -= delta;
                            if (robot.deltaTimer <= 0) {
                                let amount = robot.maxhealth * (robot.name == "Pink Circle" ? 0.05 : .025);
                                changeHealth(robot, {amount: Math.floor(amount)}, "HEAL AHAHAHAHHA");
                                robot.deltaTimer = 5e2;
                            }
                        } else if (robot.ability.name == "Stealth") {
                            robot.invis = true;
                            robot.ABILITYSPEEDMULTI = 2;
                        } else if (robot.ability.name == "Retribution") {
                            if (robot.shields.length == 0) {
                                robot.shields.push({
                                    type: "purple",
                                    health: 0
                                });
                            }
                            if (robot.abilityLast <= 4000 && robot.target) {
                                deltaTimer -= delta;
                                if (deltaTimer <= 0) {
                                    deltaTimer = 100;
                                    let dmgMulti = 1 + (Math.floor((robot.shields[0] ? robot.shields[0].health : 0) / 2500) * 0.075);
                                    dmgMulti = Math.min(dmgMulti, 20);
                                    let isAlly = players[i].isAlly;
                                    for (let i = 0; i < 4; i++) {
                                        if (i == 0) {
                                            x = robot.x + Math.cos(robot.dir + 1.57) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir + 1.57) * (robot.scale - 7.5);
                                        } else if (i == 1) {
                                            x = robot.x + Math.cos(robot.dir + 0.39) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir + 0.39) * (robot.scale - 7.5);
                                        } else if (i == 2) {
                                            x = robot.x + Math.cos(robot.dir - 0.39) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir - 0.39) * (robot.scale - 7.5);
                                        } else {
                                            x = robot.x + Math.cos(robot.dir - 1.57) * (robot.scale - 7.5);
                                            y = robot.y + Math.sin(robot.dir - 1.57) * (robot.scale - 7.5);
                                        }
                                        dir = Math.atan2(robot.target.y - y, robot.target.x - x);
                                        projectiles.push({
                                            x: x,
                                            y: y,
                                            oldX: x,
                                            oldY: y,
                                            velx: 0,
                                            vely: 0,
                                            scale: 25,
                                            speed: 0.15,
                                            projType: "energy",
                                            dmg: robot.ability.dmg * dmgMulti,
                                            range: 800,
                                            dir: dir,
                                            color: "./images/bullets/energy_bullet.png",
                                            isAlly: isAlly,
                                            owner: robot,
                                            weaponOwner: {
                                                name: "Retribution",
                                                level: robot.level
                                            }
                                        });
                                    }
                                }
                            }
                        } else if (robot.ability.name == "Ultimate Defense") {
                            robot.turnDmgIntoDOT = true;
                            deltaTimer -= delta;
                            if (deltaTimer <= 0) {
                                let amount = robot.maxhealth * 0.025;
                                changeHealth(robot, {amount: Math.floor(amount)}, true);
                                deltaTimer = 100;
                            }
                        } else if (robot.ability.name == "Full Action") {
                            robot.builtInDefensePoints = robot.name == "Teal Circle" ? 200 : 60;
                        } else if (robot.ability.name == "Dragon Flight") {
                            robot.builtInDefensePoints = 900;
                            robot.ABILITYSPEEDMULTI = 3;
                            robot.scale = Math.min(robot.scale + (0.08 * delta), robot.oldScale * 2);
                            robot.deltaTimer -= delta;
                            if (robot.deltaTimer <= 0) {
                                robot.deltaTimer = 50;
                                for (let asdasd = 0; asdasd < 2; asdasd++) projectiles.push({
                                    x: robot.x,
                                    y: robot.y,
                                    oldX: robot.x,
                                    oldY: robot.y,
                                    velx: 0,
                                    vely: 0,
                                    scale: 25,
                                    speed: 0.15,
                                    avoidBuildings: true,
                                    dmg: robot.ability.dmg,
                                    range: 1200,
                                    dir: robot.dir + getRandomOffset(5) * (Math.random() < .5 ? -1 : 1),
                                    color: "#ff0000",
                                    isAlly: players[i].isAlly,
                                    dotEffect: {
                                        name: "dot",
                                        last: 5e3,
                                        dmg: robot.ability.dotDamage,
                                        owner: robot
                                    },
                                    owner: robot,
                                    weaponOwner: {
                                        name: "Dragon Breathe",
                                        level: robot.level
                                    }
                                });
                            }
                        } else if (robot.ability.name == "Shield Regeneration") {
                            robot.shieldRegen = .1;
                        }
                        if (robot.abilityLast <= 0) {
                            robot.abilityLast = 0;
                            robot.abilityReload = robot.ability.reload;
                            if (robot.ability.name == "Retribution" || robot.ability.name == "Paladin") {
                                if(robot.ability.name == "Paladin") {
                                    if(robot.shields[0] && robot.shields[0].health > 0) {
                                        let increase = Math.min(robot.shields[0].health / 50, 100e3);
                                        robot.maxhealth += increase;
                                        changeHealth(robot, {amount: increase * 10}, "HEAL AHAHAHAHHA");
                                    }
                                }
                                robot.shields = [];
                            }
                        }
                    }
                    if (robot.abilityReload && robot.abilityReload > 0) {
                        robot.scale = Math.max(robot.scale - (0.08 * delta), robot.oldScale);
                        robot.abilityReload -= delta;
                        if (robot.abilityReload <= 0) {
                            robot.abilityReload = 0;
                            if (robot.ability.maxcharge) {
                                robot.ability.charges++;
                                robot.abilityReload = robot.ability.reload;
                            }
                        }
                    }
                }
                let touchBullets = projectiles.filter(e => e.isAlly != players[i].isAlly && checkIfHit(e, robot));
                for (let t = 0; t < touchBullets.length; t++) {
                    let bullet = touchBullets[t];
                    if(bullet.antiTier4_5) {
                        bullet.dmg = antiTier4_5(bullet, robot);
                    }
                    if (bullet.dmg > 0) {
                        if(bullet.knockback) {
                            robot.velx += Math.cos(bullet.dir) * bullet.knockback;
                            robot.vely += Math.sin(bullet.dir) * bullet.knockback;
                        }
                        if (bullet.dotEffect) {
                            robot.effects.push({
                                neg: true,
                                name: bullet.dotEffect.name,
                                dmg: bullet.dotEffect.dmg,
                                lastTime: bullet.dotEffect.last,
                                owner: bullet.owner
                            });
                        }
                        if (bullet.slowEffect) {
                            robot.effects.unshift({
                                neg: true,
                                name: bullet.slowEffect.name,
                                power: bullet.slowEffect.power,
                                lastTime: bullet.slowEffect.last
                            });
                        }
                        if (bullet.blastEffect) {
                            for(let asdasd = 0; asdasd < bullet.blastEffect.power; asdasd++) {
                                robot.effects.push({
                                    neg: true,
                                    owner: bullet.owner,
                                    name: bullet.blastEffect.name,
                                    lastTime: bullet.blastEffect.last
                                });
                            }
                        }
                        if (bullet.freezeEffect && !robot.effects.find(e => e.name == "cold pulse")) {
                            for(let asdasd = 0; asdasd < bullet.freezeEffect.power; asdasd++) {
                                robot.effects.push({
                                    neg: true,
                                    name: bullet.freezeEffect.name,
                                    lastTime: bullet.freezeEffect.last
                                });
                            }
                        }
                    }
                    let hadHealth = robot.health > 0;
                    if (!bullet.aoeRange) changeHealth(robot, {
                        amount: -bullet.dmg,
                        graydmg: bullet.grayDamageAmount,
                        defensePointsBypass: bullet.defensePointsBypass,
                        bypassReflector: bullet.bypassReflector
                    }, bullet.owner.isMe ? true : "LMAOLMAOLMAOLMAO", bullet.owner);
                    if (bullet.aoeRange != null) {
                        for (let asdasd = 0; asdasd < players.length; asdasd++) {
                            let ROBOBT = players[asdasd].robots[players[asdasd].robotIndex];
                            if (ROBOBT && players[asdasd].isAlly != bullet.isAlly && Math.hypot(touchBullets[t].y - ROBOBT.y, touchBullets[t].x - ROBOBT.x) <= touchBullets[t].aoeRange + ROBOBT.scale) {
                                changeHealth(robot, {
                                    amount: -bullet.dmg
                                }, bullet.owner.isMe ? true : "LMAOLMAOLMAOLMAO", touchBullets[t].owner);
                            }
                        }
                        bombeffect.push({
                            x: bullet.x,
                            y: bullet.y,
                            scale: 0,
                            color: bullet.weaponOwner && bullet.weaponOwner.cold ? "white" : "",
                            maxScale: bullet.aoeRange
                        })
                    }
                    if(robot.health <= 0 && hadHealth) {
                        addLogger(bullet.owner ? bullet.owner.isMe ? "player" : bullet.owner.PLAYERNAME || "unknown bot" : "unknown bot", bullet.weaponOwner, robot.PLAYERNAME);
                    }
                    bullet.dmg = 0;
                    bullet.kill = true;
                }
                if (robot.health > (robot.maxhealth - robot.grayDamage)) {
                    robot.health = (robot.maxhealth - robot.grayDamage);
                }
                if (robot.health <= 0) {
                    robot.USED = true;
                    players[i].robotIndex++;
                    if (!players[i].robots[players[i].robotIndex]) {
                        players[i].robotIndex = -1;
                        let haveEnemyes = true;
                        for (let asdasd = 0; asdasd < players.length; asdasd++) {
                            let ROBOBTS = players[asdasd].robots;
                            if (!players[asdasd].isAlly && ROBOBTS.some(e => e && !e.USED)) {
                                haveEnemyes = false;
                                break;
                            }
                        }
                        if (haveEnemyes) {
                            document.getElementById("useAbility").style.display = "none";
                            document.getElementById("weaponThing").style.display = "none";
                            document.getElementById("healthBar").style.display = "none";
                            document.getElementById("chooseSlot").style.bottom = "-200px";
                            endGame(players[0], player.gameMode == 3 ? 15 : 3);
                        }
                    }
                }
            } else {
                if (document.getElementById("enemyradar" + i)) {
                    document.getElementById("enemyradar" + i).style.display = "none";
                }
            }
        }
    }
    function circleSquareCollision(circle, square, predict) {
        if(circle.effects && circle.effects.find(e => e.name == "phase shift")) {
            return false;
        }
        let Px = Math.max(square.x, Math.min(circle.x, square.x + square.width));
        let Py = Math.max(square.y, Math.min(circle.y, square.y + square.height));
        let distance = Math.hypot(circle.x - Px, circle.y - Py);
        if (distance <= circle.scale && !predict) {
            return true;
        } else if (predict) {
            let velx = circle.x * 2 - circle.lastX;
            let vely = circle.y * 2 - circle.lastY;
            let d = Math.hypot(circle.y - vely, circle.x - velx);
            let Px = Math.max(square.x, Math.min(circle.x, square.x + square.width));
            let Py = Math.max(square.y, Math.min(circle.y, square.y + square.height));
            for (let i = 1; i <= 20; i++) {
                let div = (d / 20) * i;
                if (Math.hypot(circle.y - Py, circle.x - Px) + div <= circle.scale + 20) {
                    return true;
                }
            }
            if (circle.x >= square.x && circle.x <= square.x + square.width) {
                if (circle.y >= square.y && circle.y <= square.y + square.height) {
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }
    function isOnScreen(x, y, s) {
        return (x + s >= 0 && x - s <= maxScreen.x && y + s >= 0 && y - s <= maxScreen.y);
    }
    function updateBuildingObj(obj, delta) {
        if (obj.name == "beacon" && !obj.isHAVEON) {
            if (obj.ALLYPOINTS < 5e3) obj.ALLYPOINTS = Math.max(obj.ALLYPOINTS - delta * .25, 0);
            if (obj.ENEMYPOINTS < 5e3) obj.ENEMYPOINTS = Math.max(obj.ENEMYPOINTS - delta * .25, 0);
        }
        if (obj.name == "beacon") {
            if (obj.LASTLAST == null) obj.LASTLAST = 0;
            if (Date.now() - obj.LASTLAST >= 200) {
                obj.LASTLAST = Date.now();
                if (obj.ENEMYPOINTS >= 5e3) {
                    beaconPoints.enemy = Math.min(beaconPoints.enemy + 1, 3500);
                }
                if (obj.ALLYPOINTS >= 5e3) {
                    beaconPoints.ally = Math.min(beaconPoints.ally + 1, 3500);
                }
            }
        }
        obj.isHAVEON = false;
        if(obj.name == "beacon") {
            BEACONS.push(obj);
        }
        if(!obj.name.includes("col")) {
            ACTUALBUILDINGSTOTOUCH.push(obj);
        }
    }
    var BEACONS = [];
    var ACTUALBUILDINGSTOTOUCH = [];
    function renderBuildings(delta) {
        BEACONS = [];
        ACTUALBUILDINGSTOTOUCH = [];
        document.getElementById("gameDataThing").innerHTML = "";
        ctx.globalAlpha = 1;
        for (let i = 0; i < buildings.length; i++) {
            let obj = buildings[i];
            if (obj && (obj.name == "wall rect" || (obj.name == "beacon"))) {
                ctx.save();
                ctx.translate(obj.x - offset.x, obj.y - offset.y);
                if (obj.name == "beacon") {
                    if (obj.ALLYPOINTS == null) obj.ALLYPOINTS = 0;
                    if (obj.ENEMYPOINTS == null) obj.ENEMYPOINTS = 0;
                    let color = obj.ENEMYPOINTS >= 5000 ? "#f00" : obj.ALLYPOINTS >= 5000 ? "#00f" : "#fff";
                    renderCircle(0, 0, 35, ctx, false, false, "#808080", "#000");
                    renderCircle(0, 0, 20, ctx, true, false, color, "#000");
                    let color2 = obj.ENEMYPOINTS >= 5000 ? "rgb(255, 0, 0" : obj.ALLYPOINTS >= 5000 ? "rgb(0, 0, 255" : "rgb(255, 255, 255";
                    renderCircle(0, 0, 400, ctx, false, true, null, color2 + ", 0.55)", 14);
                    ctx.lineWidth = 14;
                    let multi = 1;
                    if (obj.ENEMYPOINTS > obj.ALLYPOINTS) {
                        color2 = "rgb(255, 0, 0";
                        multi = (obj.ENEMYPOINTS / 5e3);
                    } else {
                        color2 = "rgb(0, 0, 255";
                        multi = (obj.ALLYPOINTS / 5e3);
                    }
                    ctx.strokeStyle = color2 + ", 0.55)";
                    ctx.beginPath();
                    ctx.arc(0, 0, 400, 0, (Math.PI * 2) * multi);
                    ctx.stroke();
                    ctx.translate(0, 35);
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.translate(0, -70);
                    ctx.rotate(Math.PI)
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.save();
                    ctx.translate(35, -35);
                    ctx.rotate(-Math.PI + 1.57);
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.restore();
                    ctx.save();
                    ctx.translate(-35, -35);
                    ctx.rotate(-Math.PI - 1.57);
                    ctx.fillStyle = color;
                    renderStar(ctx, 1.5, 15, 15);
                    ctx.fill();
                    ctx.restore();
                } else if (obj.name == "wall rect") {
                    ctx.fillStyle = "#808080";
                    ctx.fillRect(0, 0, obj.width, obj.height);
                    ctx.fillStyle = "#969595";
                    ctx.fillRect(20, 20, obj.width - 40, obj.height - 40);
                }
                ctx.restore();
            }
            updateBuildingObj(obj, delta);
        }
    }
    var LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function updateBuilding() {
        let beaconIndexx = 0;
        for(let i = 0; i < BEACONS.length; i++) {
            let obj = BEACONS[i];
            let backgroundcolor = "#fff";
            let height = 1;
            let textColor = "#000";
            if (obj.ENEMYPOINTS > obj.ALLYPOINTS) {
                backgroundcolor = "#f00";
                height = obj.ENEMYPOINTS / 5e3;
            } else {
                backgroundcolor = "#00f";
                height = obj.ALLYPOINTS / 5e3;
                if (height > .5) {
                    textColor = "#fff";
                }
            }
            document.getElementById("gameDataThing").innerHTML += `
            <div style="position: absolute; top: ${60 * beaconIndexx}px; right: 18px; border-radius: 100%; width: 50px; height: 50px; background-color: #fff; overflow: hidden;">
            <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: ${height * 100}%; background-color: ${backgroundcolor};">
            </div>
            <div style="position: absolute; height: 100%; width: 100%; top: 0px; left: 0px; color: ${textColor};">
            <div style="height: 100%; width: 100%; text-align: center; font-size: 35px;">${LETTERS[beaconIndexx]}</div>
            </div>
            </div>
            `;
            beaconIndexx++;
        }
        document.getElementById("gameDataThing").innerHTML += `
        <div style="position: absolute; border-radius: 12px; top: 0px; right: 0px; width: 12px; height: ${(beaconIndexx * 60) - 10}px; background-color: #fff; overflow: hidden;">
        <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: ${(beaconPoints.ally / 3500) * 50}%; background-color: #00f;">
        </div>
        <div style="position: absolute; bottom: 0px; left: 0px; width: 100%; height: ${(beaconPoints.enemy / 3500) * 50}%; background-color: #f00;">
        </div>
        </div>
        `;
        if (beaconPoints.enemy >= 3500) {
            beaconPoints.enemy = 0;
            beaconPoints.ally = 0;
            document.getElementById("useAbility").style.display = "none";
            document.getElementById("weaponThing").style.display = "none";
            document.getElementById("healthBar").style.display = "none";
            document.getElementById("chooseSlot").style.bottom = "-200px";
            endGame(players[0], .5);
        } else if (beaconPoints.ally >= 3500) {
            beaconPoints.enemy = 0;
            beaconPoints.ally = 0;
            document.getElementById("useAbility").style.display = "none";
            document.getElementById("weaponThing").style.display = "none";
            document.getElementById("healthBar").style.display = "none";
            document.getElementById("chooseSlot").style.bottom = "-200px";
            endGame(players[0], 3);
        }
    }//18
    function levelToMKColor(level) {
        if(level == 18) {
            return "000";
        }else if(level == 17) {
            return "ffa500";
        }else if(level == 16) {
            return "800080";
        }else if(level == 15) {
            return "f00";
        }else if(level == 14) {
            return "ffff00";
        }else if(level == 13) {
            return "0f0";
        }
        return "#f00";
    }
    function levelToMKText(level) {
        return "MK" + ((level-12)+1);
    }
    var fpsInfo = {
        count: 0,
        real: 0,
        last: Date.now()
    }
    function renderDomains(delta) {
        for(let i = 0; i < domains.length; i++) {
            let domain = domains[i];
            if(domain) {
                if(domain.oldLast == null) domain.oldLast = domain.lastingTime;
                if(domain.tmpScale == null) domain.tmpScale = 0;
                domain.tmpScale = Math.min(domain.tmpScale + (3.2 * delta), domain.scale);
                ctx.save();
                ctx.translate(domain.x - offset.x, domain.y - offset.y);
                renderCircle(0, 0, domain.tmpScale, ctx, false, false, "rgb(0, 0, 255, .4)", "rgb(255, 0, 0)", 16);
                let multi = (domain.lastingTime / domain.oldLast);
                ctx.strokeStyle = "#0000ff";
                ctx.lineWidth = 16;
                ctx.beginPath();
                ctx.arc(0, 0, domain.tmpScale, 0, (Math.PI * 2) * multi);
                ctx.stroke();
                ctx.restore();
            }
        }
    }
    function updateDomains(delta) {
        for(let i = 0; i < domains.length; i++) {
            let domain = domains[i];
            if(domain) {
                domain.lastingTime -= delta;
                for(let t = 0; t < players.length; t++) {
                    let robot = players[t].robots[players[t].robotIndex];
                    if(robot) {
                        if(Math.hypot(domain.y - robot.y, domain.x - robot.x) <= domain.scale) {
                            if(domain.name == "Infinite Void" && robot.name == domain.ownerName && robot.effects) {
                                robot.effects.unshift({
                                    name: "slowdown",
                                    power: -.75,
                                    lastTime: (1000/fpsInfo.real)*4
                                });
                                robot.effects.push({
                                    name: "defense points",
                                    amount: 75,
                                    lastTime: (1000/fpsInfo.real)*4
                                });
                            }
                            if(domain.name == "Infinite Void" && players[t].isAlly != domain.isAlly) {
                                robot.freeze = true;
                            }
                        }
                    }
                }
                for (let t = 0; t < enemies.length; t++) {
                    let enemy = enemies[t];
                    if(domain.name == "Infinite Void" && Math.hypot(domain.y - enemy.y, domain.x - enemy.x) <= domain.scale) {
                        enemy.freeze = true;
                    }
                }
                for (let t = 0; t < projectiles.length; t++) {
                    let bullet = projectiles[t];
                    if(domain.name == "Infinite Void" && bullet.isAlly != domain.isAlly && Math.hypot(domain.y - bullet.y, domain.x - bullet.x) <= domain.scale) {
                        bullet.freeze = true;
                        bullet.dmg = 0;
                    }
                }
                if(domain.lastingTime <= 0) {
                    if(domain.name == "Infinite Void") {
                        domain.owner.effects.push({
                            name: "defense points",
                            amount: 1000,
                            lastTime: 2e3
                        });
                    }
                    domains.splice(i, 1);
                }
            }
        }
    }
    function updateGame() {
        let delta = Date.now() - lastUpdate;
        lastUpdate = Date.now();
        fpsInfo.count++;
        if(Date.now() - fpsInfo.last >= 1e3) {
            fpsInfo.last = Date.now();
            fpsInfo.real = fpsInfo.count;
            fpsInfo.count = 0;
        }
        if (player.gameMode >= 0) {
            if (players[0].robotIndex == -1) {
                document.getElementById("LMAOLMAOLMAOLMAO").innerHTML = "";
                if(players[0].oldIndex >= 0) {
                    offset = {
                        x: (players[0].robots[players[0].oldIndex].x) - maxScreen.x / 2,
                        y: (players[0].robots[players[0].oldIndex].y) - maxScreen.y / 2
                    };
                }else {
                    offset = {
                        x: (mapInfo.x / 2) - maxScreen.x / 2,
                        y: (mapInfo.y / 2) - maxScreen.y / 2
                    };
                }
            } else {
                offset = {
                    x: (players[0].robots[players[0].robotIndex].x) - maxScreen.x / 2,
                    y: (players[0].robots[players[0].robotIndex].y) - maxScreen.y / 2
                };
            }
            renderBackground(ctx);
            renderBuildings(delta);
            renderBullets(ctx);
            renderPlayer(delta);
            renderPlayers(delta);
            renderEnemies(ctx);
            ctx.globalAlpha = 1;
            for (let i = 0; i < bombeffect.length; i++) {
                let effect = bombeffect[i];
                if (effect) {
                    effect.scale += (effect.blastttt ? 4 : effect.color ? effect.color == "stamp" ? 1.5 : 3.84 : effect.doFaster ? 1.2 : 0.32) * delta;
                    let color = effect.color ? effect.color == "blue" ? "rgb(0, 0, 255, 0.3)" : effect.color == "stamp" ? "rgb(0, 0, 255, 0)" : "rgb(255, 255, 255, 0.3)" : "rgb(255, 0, 0, 0.3)";
                    let color2 = effect.color ? effect.color == "stamp" || effect.color == "blue" ? "rgb(0, 0, 255, 0.6)" : "rgb(255, 255, 255, 0.6)" : "rgb(255, 0, 0, 0.6)";
                    ctx.save();
                    ctx.translate((effect.location ? effect.location.x : effect.x) - offset.x, (effect.location ? effect.location.y : effect.y) - offset.y);
                    renderCircle(0, 0, effect.scale, ctx, false, false, color, color2, effect.color == "stamp" ? 12 : undefined);
                    ctx.restore();
                    if (effect.scale >= effect.maxScale) {
                        bombeffect.splice(i, 1);
                    }
                }
            }
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            for (let i = 0; i < text.length; i++) {
                let Text = text[i];
                if(Text && isOnScreen(Text.x - offset.x, Text.y - offset.y, 50)) {
                    ctx.fillStyle = Text.color;
                    ctx.font = "50px Open Sans";
                    ctx.fillText(abbreviateNumber(removeDecimals(Text.value)), Text.x - offset.x, Text.y - offset.y);
                }
            }
            updatePlayer(delta);
            if (player.gameMode == 2 || player.gameMode == 3) updatePlayers(delta);
            ctx.globalAlpha = 1;
            if (players.length) {
                if (keysPressed[32] && players[0] && players[0].robots && players[0].robots.length) {
                    let robot = players[0].robots[players[0].robotIndex];
                    if (robot) {
                        for (let i = 0; i < robot.weapons.length; i++) {
                            let weapon = robot.weapons[i];
                            if ((weapon.name == "Hawk" || weapon.name == "Eagle") && weapon.canFire) {
                                let nearestEnemies = [];
                                if (player.gameMode == 2) {
                                    for (let t = 1; t < players.length; t++) {
                                        let player = players[t].robots[players[t].robotIndex];
                                        if (player && players[t].isAlly != players[0].isAlly) {
                                            if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                                nearestEnemies.push(player);
                                            }
                                        }
                                    }
                                    nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                } else {
                                    nearestEnemies = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range + e.scale).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                }
                                ctx.save();
                                ctx.lineWidth = 16;
                                ctx.strokeStyle = "rgb(255, 255, 255)";
                                ctx.beginPath();
                                for (let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    let enemy2 = nearestEnemies[ttt - 1];
                                    if (enemy) {
                                        if (ttt == 0) {
                                            ctx.moveTo(robot.x - offset.x, robot.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        } else {
                                            ctx.moveTo(enemy2.x - offset.x, enemy2.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        }
                                    }
                                }
                                ctx.stroke();
                                ctx.restore();
                                break;
                            }
                        }
                    }
                }
                for (let tttt = 1; tttt < players.length; tttt++) {
                    let robot = players[tttt].robots[players[tttt].robotIndex];
                    if (robot && robot.doFireWeapons) {
                        for (let i = 0; i < robot.weapons.length; i++) {
                            let weapon = robot.weapons[i];
                            if ((weapon.name == "Hawk" || weapon.name == "Eagle") && weapon.canFire) {
                                let nearestEnemies = [];
                                for (let t = 0; t < players.length; t++) {
                                    let player = players[t].robots[players[t].robotIndex];
                                    if (player && players[t].isAlly != players[tttt].isAlly) {
                                        if (Math.hypot(player.y - robot.y, player.x - robot.x) <= weapon.range + player.scale) {
                                            nearestEnemies.push(player);
                                        }
                                    }
                                }
                                nearestEnemies = nearestEnemies.sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                ctx.save();
                                ctx.lineWidth = 16;
                                ctx.strokeStyle = players[tttt].isAlly ? "#fff" : "rgb(255, 0, 0)";
                                ctx.beginPath();
                                for (let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    let enemy2 = nearestEnemies[ttt - 1];
                                    if (enemy) {
                                        if (ttt == 0) {
                                            ctx.moveTo(robot.x - offset.x, robot.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        } else {
                                            ctx.moveTo(enemy2.x - offset.x, enemy2.y - offset.y);
                                            ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                        }
                                    }
                                }
                                ctx.stroke();
                                ctx.restore();
                                break;
                            }
                        }
                    }
                }
            }
            if (player.gameMode == 2) updateBuilding(delta);
            updateBullets(delta);
            for (let i = 0; i < text.length; i++) {
                let Text = text[i];
                if (Text) {
                    Text.life -= delta;
                    Text.x += Math.cos(Text.dir) * 2;
                    Text.y += Math.sin(Text.dir) * 2;
                    if (Text.life <= 0) {
                        text.splice(i, 1);
                    }
                }
            }
            for (let i = 0; i < shieldEffects.length; i++) {
                let effect = shieldEffects[i];
                if (effect) {
                    if (effect.last == null) effect.last = Date.now();
                    ctx.save();
                    ctx.translate(effect.location.x - offset.x, effect.location.y - offset.y);
                    ctx.rotate(effect.dir - Math.PI / 8);
                    ctx.lineWidth = 12;
                    ctx.strokeStyle = effect.type == "energy" ? "#0000ff" : effect.type == "purple" ? "#800080" : "#ffff00";
                    ctx.beginPath();
                    ctx.arc(0, 0, effect.scale, 0, Math.PI / 4);
                    ctx.stroke();
                    ctx.restore();
                    if (Date.now() - effect.last >= 100) {
                        shieldEffects.splice(i, 1);
                    }
                }
            }
            if (player.gameMode == 0 || player.gameMode == 1) {
                updateEnemies(delta);
            }
            updateDomains(delta);
            renderDomains(delta);
            if (players[0] && players[0].robotIndex >= 0 || player.gameMode == 2) gameTimePlayed += delta;
            if (gameTimePlayed <= 60e3) {
                document.getElementById("timePlayed").innerHTML = `${player.gameMode == 3 && players[0] ? `Kills: ${(players[0].kills || 0)} | ` : player.gameMode == 0 ? `Wave: ${extermination.waveIndex+1} | ` : ""}${fpsInfo.real} | 0:${gameTimePlayed <= 10e3 ? "0" : ""}${removeDecimals(gameTimePlayed / 1000)}`;
            } else {
                let value = (gameTimePlayed / 1000) / 60;
                value = value.toString().split(".");
                let minutes = value[0];
                let seconds = parseFloat("0." + value[1]) * 60;
                document.getElementById("timePlayed").innerHTML = `${player.gameMode == 3 && players[0] ? `Kills: ${(players[0].kills || 0)} | ` : player.gameMode == 0 ? `Wave: ${extermination.waveIndex+1} | ` : ""}${fpsInfo.real} | ${minutes}:${seconds <= 10 ? "0" : ""}${removeDecimals(seconds)}`;
            }
            ctx.fillStyle = "rgb(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
            document.getElementById("LOGGER").innerHTML = "";
            for(let i = 0; i < KILLLOGS.length; i++) {
                let log = KILLLOGS[i];
                if(log.weapon && log.weapon.level) {
                    document.getElementById("LOGGER").innerHTML += `
                    <div>
                    <span style="color: ${log.attacker == "player" ? "#0f0" : "#fff"};">${log.attacker}</span> <span style="color: ${log.weapon.level >= 13 ? `#fff` : `#000`};">[${log.weapon.name}${log.weapon.level >= 13 ? ` <span style="color: #${levelToMKColor(log.weapon.level)}">${levelToMKText(log.weapon.level)}</span>` : ""}]</span> <span style="color: #fff;">${log.victim}</span>
                    </div>
                    `;
                }
            }
        } else {
            document.getElementById("LOGGER").innerHTML = "";
            document.getElementById("abilityCharges").innerHTML = "";
            document.getElementById("shields").innerHTML = "";
            document.getElementById("LMAOLMAOLMAOLMAO").innerHTML = "";
            document.getElementById("gameDataThing").innerHTML = "";
            document.getElementById("timePlayed").innerHTML = "";
            ctx.clearRect(0, 0, maxScreen.x, maxScreen.y);
            ctx.fillStyle = "rgb(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
        }
        window.requestAnimationFrame(updateGame);
    }
    window.requestAnimationFrame(updateGame);
}());
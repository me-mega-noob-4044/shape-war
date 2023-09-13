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
    Beta V10 (Sep 12, 2023):<br>
    - Teal Circle: Ability Cooldown: 24 -> 18 seconds
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
    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
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
        gameMode: -1
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
    }];
    var shapeSids = 0;
    class shape {
        constructor(data, slot, dontSID) {
            this.x = 0;
            this.y = 0;
            this.velx = 0;
            this.vely = 0;
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
            this.builtInDefensePoints = data.builtInDefensePoints;
            if (data.cost) {
                this.sellPrice += data.cost.sliver * .75;
                for (let i = 0; i < data.cost.gold; i++) {
                    this.sellPrice += 1250;
                }
            }
            this.ability = null;
            if (data.ability) {
                if (data.ability.name == "Self Heal" || data.ability.name == "Full Action" || data.ability.name == "Cold Pulse") {
                    this.ability = {
                        name: data.ability.name,
                        desc: data.ability.desc,
                        reload: data.ability.reload,
                        iconSource: data.ability.iconSource
                    };
                    if(data.ability.name == "Cold Pulse") {
                        this.ability.dmg = data.ability.damageData ? data.ability.damageData.base : data.ability.dmg;
                    }else {
                        this.ability.lastingTime = data.ability.lastingTime;
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
        buyDesc: `
        <br><br>
        Cost: 75.0K Sliver
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
        buyDesc: `
        <br><br>
        Cost: 570.0K Sliver
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
        buyDesc: `
        <br><br>
        Cost: 250 Gold
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
        buyDesc: `
        <br><br>
        Cost: 750 Gold
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
            gold: 750
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
        buyDesc: `
        <br><br>
        Cost: 1.0K Gold
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
            gold: 1e3
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
        buyDesc: `
        <br><br>
        Cost: 2.0K Gold
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
            gold: 2e3
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
        buyDesc: `
        <br><br>
        Cost: 2.5M Silver
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
            sliver: 25e5,
            gold: 0
        }
    }, {
        tier: 3,
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
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
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
            gold: 5e3
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
        buyDesc: `
        <br><br>
        Cost: 1.75K Gold
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
            Effect lasts for 4 seconds.
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
            sliver: 0,
            gold: 1750
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
        75% of damage taken will be redirected to the attacker.<br><br>
        Recommended Equipment: x3 Hawk
        `,
        buyDesc: `
        <br><br>
        Cost: 5.0K Gold
        `,
        reflector: .75,
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
            gold: 5e3
        }
    }];
    function defensePointsToResistance(defense) {
        return (100)/(100+defense);
    }
    class weapon {
        constructor(data, ownerSID = null, slot = null) {
            this.tier = data.tier;
            this.owner = ownerSID;
            this.name = data.name;
            this.desc = data.desc;
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
            this.sellPrice = 0;
            if (data.cost) {
                this.sellPrice += data.cost.sliver * .75;
                for (let i = 0; i < data.cost.gold; i++) {
                    this.sellPrice += 1250;
                }
            }
        }
    }
    var weaponData = [{
        tier: 0,
        name: "Punisher",
        type: "Light",
        desc: `
        Multi-barreled machine gun with a high rate of fire. Great at close range.
        `,
        buyDesc: `
        <br><br>
        Cost: 15.0K Sliver
        `,
        damageData: {
            base: 178,
            level: [0, 25, 25, 32, 39, 40, 44, 45, 55, 57, 59, 65],
        },
        imageSource: "./images/punisher.png",
        fireRate: 62.5,
        ammo: 220,
        reload: 5e3,
        range: 1200,
        cost: {
            sliver: 15e3,
            gold: 0
        }
    }, {
        tier: 0,
        name: "Landslide",
        type: "Light",
        desc: `
        Close range rocket launcher with high rate of fire. 
        Rockets deal aoe damage and are effective againist groups of enemies. 
        Improved reloading mechanics makes this weapon reload while firing.
        `,
        buyDesc: `
        <br><br>
        Cost: 230.0K Sliver
        `,
        damageData: {
            base: 560,
            level: [0, 80, 83, 86, 90, 102, 113, 132, 132, 139, 149, 150],
        },
        continuousReload: true,
        imageSource: "./images/landslide.png",
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
        desc: `
        Far ranged weapon used to target enemies at far distances.
        `,
        buyDesc: `
        <br><br>
        Cost: 190.0K Sliver
        `,
        damageData: {
            base: 900,
            level: [0, 210, 220, 240, 260, 260, 268, 280, 300, 310, 322, 330],
        },
        imageSource: "./images/shocker.png",
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
        desc: `
        Large heavy multi-barreled machine gun. 
        Great at close range since bullets disperse due to high fire rate. 
        Each round shoots 2 projectiles.
        `,
        buyDesc: `
        <br><br>
        Cost: 250 Gold
        `,
        damageData: {
            base: 90,
            level: [0, 25, 30, 40, 50, 50, 60, 65, 70, 80, 85, 110],
        },
        imageSource: "./images/destroyer.png",
        fireRate: 30,
        ammo: 330,
        reload: 5e3,
        range: 1600,
        cost: {
            sliver: 0,
            gold: 250
        }
    }, {
        tier: 1,
        name: "Avalanche",
        type: "Heavy",
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
        imageSource: "./images/avalanche.png",
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
        `,
        buyDesc: `
        <br><br>
        Cost: 1.75K Gold
        `,
        damageData: {
            base: 260,
            level: [0, 30, 33, 33, 39, 39, 49, 59, 66, 77, 88, 100],
        },
        imageSource: "./images/hawk.png",
        fireRate: 200,
        ammo: 15,
        reload: 8e3,
        range: 1000,
        cost: {
            sliver: 0,
            gold: 1750
        }
    }, {
        tier: 3,
        name: "Eagle",
        type: "Heavy",
        desc: `
        Heavy laser weapon.
        Special targeting allows the weapon to target 3 enemies at once.
        Ignores mouse cursor and targets nearest 3 enemies.
        `,
        buyDesc: `
        <br><br>
        Cost: 2.5K Gold
        `,
        damageData: {
            base: 190,
            level: [0, 40, 44, 44, 48, 48, 69, 69, 77, 88, 99, 111],
        },
        imageSource: "./images/eagle.png",
        fireRate: 100,
        ammo: 30,
        reload: 8e3,
        range: 1000,
        cost: {
            sliver: 0,
            gold: 25e2
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
        Cost: 1.0M Sliver
        `,
        healthIncreaseData: {
            base: 0.02,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/armor_plating.png",
        cost: {
            sliver: 1e6,
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
        imageSource: "./images/heavy_armor_plating.png",
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
        imageSource: "./images/self_fix_unit.png",
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
        Cost: 1.0M Sliver
        `,
        dmgIncreaseData: {
            base: 0.02,
            level: [0, 0.01, 0.01, 0.01, 0.01, 0.01]
        },
        imageSource: "./images/nuclear_reactor.png",
        cost: {
            sliver: 1e6,
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
        imageSource: "./images/thermonuclear_reactor.png",
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
        imageSource: "./images/arc_reactor.png",
        cost: {
            sliver: 0,
            gold: 3e3
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
    function updateMoneyDisplay(index, value) {
        if (player[index] != null) player[index] += value;
        document.getElementById("moneyDisplay").innerHTML = `
        Silver: ${abbreviateNumber(player.sliver)}<br>
        Gold: ${abbreviateNumber(player.gold)}<br>
        Keys: ${abbreviateNumber(player.keys)}
        `;
        if(index) saveGameData();
    }
    updateMoneyDisplay();
    function resize() {
        if (player.gameMode >= 0) updateChooseSlots();
        document.getElementById("sideDisplay").style.width = (window.innerWidth - 375) + "px";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let scaleFillNative = Math.max(window.innerWidth / maxScreen.x, window.innerHeight / maxScreen.y);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.setTransform(
            scaleFillNative, 0,
            0, scaleFillNative,
            (window.innerWidth - (maxScreen.x * scaleFillNative)) / 2,
            (window.innerHeight - (maxScreen.y * scaleFillNative)) / 2
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
    function drawStoreDisplay(item, type) {
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; margin-top: 5px; width: 100%;">${item.name}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${item.desc}
        ${item.ability ? "<br><br>" + item.ability.desc : ""}
        ${item.buyDesc}
        </div>
        <div id="stats" style="position: absolute; top: 260px; left: 10px;">
        </div>
        `;
        if (type == "shapes") {
            document.getElementById("stats").innerHTML = `
            Health: ${abbreviateNumber(item.healthData.base)}<br>
            Speed: ${item.speed * 1000} PX/SEC<br>
            Light Hardpoints: ${item.hardpoints.light}<br>
            Heavy Hardpoints: ${item.hardpoints.heavy}<br>
            ${item.ability && item.ability.damageData && item.ability.damageData.base ? `Ability Dmg: ${abbreviateNumber(item.ability.damageData.base)}<br>` : ""}
            ${item.reflector ? `Damage Reflection: ${item.reflector*100}%<br>` : ""}
            ${item.builtInDefensePoints ? `Defense Points: ${item.builtInDefensePoints} (${((1-defensePointsToResistance(item.builtInDefensePoints))*100).toFixed(1)}% Resistance)<br>` : ""}
            `;
        } else if (type == "weapons") {
            document.getElementById("stats").innerHTML = `
            Type: ${item.type}<br>
            Damage: ${abbreviateNumber(item.damageData.base)}<br>
            Range: ${item.range} PX<br>
            Reload: ${item.reload / 1000} sec
            ${item.aoeRange ? "<br>AOE Range: " + item.aoeRange + " PX<br>" : ""}
            `;
        } else {//
            document.getElementById("stats").innerHTML = `
            ${item.dmgIncreaseData ? "Increased Damage: " + removeDecimals(item.dmgIncreaseData.base * 100) + "%<br>" : ""}
            ${item.healthIncreaseData ? "Increased Durability: " + removeDecimals(item.healthIncreaseData.base * 100) + "%<br>" : ""}
            ${item.selfFixRepairData ? "Repair Power: " + abbreviateNumber(item.selfFixRepairData.base) + "/SEC<br>" : ""}
            `;
        }
        let weaponImg = type == "shapes" ? getShapeSprite(item, true) : type == "weapons" ? getWeaponIcon(item, true) : getModuleIcon(item, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
    }
    var arrow_1_left = "./images/arrow_1_left.png";
    var arrow_1_right = "./images/arrow_1_right.png";
    function drawStore(type) {
        let adjust = window.innerWidth - 375;
        let filteredThings = [];
        if (type == "shapes") {
            filteredThings = shapeData.sort((a, b) => a.tier - b.tier);
        } else if (type == "weapons") {
            filteredThings = weaponData.sort((a, b) => a.tier - b.tier);
        } else {
            filteredThings = moduleData.sort((a, b) => a.tier - b.tier);
        }
        let currentIndex = 0;
        document.getElementById("storeTab").innerHTML = `
        <div id="goToPre" style="display: none; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
        </div>
        <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
        </div>
        <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
        </div>
        <div id="Buy" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 29}px;">BUY</span>
        </div>
        `;
        drawStoreDisplay(filteredThings[currentIndex], type);
        if (!filteredThings[currentIndex + 1]) {
            document.getElementById("goToNext").style.display = "none";
        }
        document.getElementById("goToNext").onclick = function () {
            if (filteredThings[currentIndex + 1]) {
                currentIndex++;
                drawStoreDisplay(filteredThings[currentIndex], type);
                if (filteredThings[currentIndex + 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredThings[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "block";
                } else {
                    document.getElementById("goToPre").style.display = "none";
                }
            }
        }
        document.getElementById("goToPre").onclick = function () {
            if (filteredThings[currentIndex - 1]) {
                currentIndex--;
                drawStoreDisplay(filteredThings[currentIndex], type);
                if (filteredThings[currentIndex - 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredThings[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "block";
                } else {
                    document.getElementById("goToNext").style.display = "none";
                }
            }
        }
        document.getElementById("Buy").onclick = function () {
            if (player.sliver - filteredThings[currentIndex].cost.sliver >= 0 && player.gold - filteredThings[currentIndex].cost.gold >= 0) {
                updateMoneyDisplay("sliver", -filteredThings[currentIndex].cost.sliver);
                updateMoneyDisplay("gold", -filteredThings[currentIndex].cost.gold);
                document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                if (type == "weapons") {
                    player.weapons.push(new weapon(filteredThings[currentIndex], null, null));
                } else if (type == "shapes") {
                    let sid = shapeSids;
                    player.shapes.push(new shape(filteredThings[currentIndex]));
                    let hardpoints = filteredThings[currentIndex].hardpoints.light + filteredThings[currentIndex].hardpoints.heavy;
                    for (let i = 0; i < hardpoints; i++) {
                        if (i < filteredThings[currentIndex].hardpoints.light && filteredThings[currentIndex].hardpoints.light > 0) {
                            player.weapons.push(new weapon(weaponData[0], sid, i));
                        } else {
                            player.weapons.push(new weapon(weaponData[2], sid, i));
                        }
                    }
                    console.log(player.weapons, sid, shapeSids);
                } else {
                    player.modules.push(new module(filteredThings[currentIndex], null, null));
                }
            }
            saveGameData();
        }
    }
    document.getElementById("shopToggle").onclick = function () {
        let adjust = window.innerWidth - 375;
        document.getElementById("sideDisplay").innerHTML = `
        <div id="robotTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 40px; top: 10px; right: ${adjust / 2 + 95}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(255, 255, 255, 0.5);">
        <span style="position: absolute; top: ${60 / 2 - 27.25}px; left: ${75 - 65}px;">Robots</span>
        </div>
        <div id="weaponTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 30px; top: 10px; right: ${adjust / 2 - 65}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${60 / 2 - 20.5}px; left: ${75 - 65}px;">Weapons</span>
        </div>
        <div id="moduleTab" style="position: absolute; z-index: 3; cursor: pointer; font-size: 30px; top: 10px; right: ${adjust / 2 - 225}px; border-radius: 8px; width: 150px; height: 60px; background-color: rgb(0, 0, 0, 0.4);">
        <span style="position: absolute; top: ${60 / 2 - 20.5}px; left: ${75 - 60}px;">Modules</span>
        </div>
        <div id="storeTab" style="position: absolute; width: 100%; height: 100%;">
        </div>
        `;
        drawStore("shapes");
        document.getElementById("robotTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("weaponTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("moduleTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("shapes");
        }
        document.getElementById("weaponTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("robotTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("moduleTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("weapons");
        }
        document.getElementById("moduleTab").onclick = function () {
            this.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
            document.getElementById("robotTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            document.getElementById("weaponTab").style.backgroundColor = "rgb(0, 0, 0, 0.4)";
            drawStore("modules");
        }
    }
    function getShapeSprite(obj, isIcon) {
        let tmpSprite = shapeSprites[obj.name];
        if (!tmpSprite) {
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = obj.scale * (isIcon ? 3 : 1.2);
            let tmpCtx = tmpCanvas.getContext("2d");
            tmpCtx.globalAlpha = 1;
            tmpCtx.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
            if (obj.name.includes("Circle")) {
                renderCircle(0, 0, obj.scale, tmpCtx, false, false, obj.color, "#000");
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
    function drawWeaponDisplay(weapon, index, START_WEAPON) {
        if (index == 0 && !(START_WEAPON == "Light" || START_WEAPON == "Heavy")) {
            document.getElementById("Unequip").style.display = "block";
            document.getElementById("Equip").style.display = "none";
        } else {
            document.getElementById("Equip").style.display = "block";
            document.getElementById("Unequip").style.display = "none";
        }
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; margin-top: 5px; width: 100%;">Lvl ${weapon.level} ${weapon.name}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${weapon.desc}
        </div>
        <div style="position: absolute; top: 260px; left: 10px;">
        Damage: ${abbreviateNumber(weapon.dmg)}<br>
        Range: ${weapon.range} PX<br>
        Reload: ${weapon.reload / 1000} sec
        ${weapon.aoeRange ? "<br>AOE Range: " + weapon.aoeRange + " PX<br>" : ""}
        </div>
        `;
        document.getElementById("Sell").innerHTML = `
        <span style="position: absolute; font-size: 30px; top: 5px; left: ${203 / 2 - 32}px;">SELL</span>
        <span style="position: absolute; font-size: 10px; top: 40px; width: 100%; text-align: center;">${abbreviateNumber(weapon.sellPrice)} Silver</span>
        `;
        let weaponImg = getWeaponIcon(weapon, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
    }
    function enterBarForWeapon(type, weapon) {
        let text = "";
        let Weapon = weaponData.find(item => item.name == weapon.name);
        let maxwidth = window.innerWidth >= 960 ? 500 : 300;
        if (type == "damage") {
            let maxdmg = Weapon.damageData.base;
            for (let i = 0; i < Weapon.damageData.level.length; i++) {
                maxdmg += Weapon.damageData.level[i];
            }
            let indexAdjust = ((weapon.dmg / maxdmg) * maxwidth) / maxwidth;
            let indexAdjusted = (((weapon.dmg + Weapon.damageData.level[weapon.level]) / maxdmg) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Damage: ${abbreviateNumber(weapon.dmg)}
            <div style="display: ${Weapon.damageData.level[weapon.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${abbreviateNumber(Weapon.damageData.level[weapon.level])}
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
    function upgradeWeapon(weapon, currentIndex, old_WEAPON, noEz) {
        let Weapon = weaponData.find(item => item.name == weapon.name);
        let dmgIncrease = Weapon.damageData.level[weapon.level];
        weapon.dmg += dmgIncrease;
        weapon.level++;
        if(!noEz) document.getElementById("Upgrade").onclick();
        if(!noEz) drawWeaponDisplay(weapon, currentIndex, old_WEAPON);
        if(!noEz) updateSlots();
        if(!noEz) saveGameData();
    }
    function customizeWeapon(weapon, shape, slot) {
        if (true) {
            let adjust = window.innerWidth - 375;
            let filteredWeapons = null;
            if (weapon == "Light" || weapon == "Heavy") {
                filteredWeapons = player.weapons.filter(e => e.owner == null && e.type == weapon).sort((a, b) => b.tier - a.tier).sort((a, b) => b.level - a.level);
            } else {
                filteredWeapons = player.weapons.filter(e => e.owner == null && e.type == weapon.type).sort((a, b) => b.tier - a.tier).sort((a, b) => b.level - a.level);
            }
            let currentIndex = 0;
            if (weapon && weapon != "Light" && weapon != "Heavy") filteredWeapons.unshift(weapon);
            if(!filteredWeapons.length) {
                alert("You have no weapons.")
                return;
            }
            document.getElementById("sideDisplay").innerHTML = `
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
            </div>
            <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
            </div>
            <div id="Unequip" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 66}px;">UNEQUIP</span>
            </div>
            <div id="Equip" style="display: none; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">EQUIP</span>
            </div>
            <div id="Upgrade" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 97}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 68.5}px;">UPGRADE</span>
            </div>
            <div id="Sell" style="cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 + 147}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">Sell</span>
            </div>
            <div id="upgradeMenu" style="display: none; color: #fff; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, 0.7);">
            </div>
            `;
            drawWeaponDisplay(filteredWeapons[0], 0, weapon);
            document.getElementById("Sell").onclick = function() {
                if(filteredWeapons[currentIndex]) {
                    let weaponIndex = player.weapons.findIndex(e => e == filteredWeapons[currentIndex]);
                    updateMoneyDisplay("sliver", filteredWeapons[currentIndex].sellPrice);
                    player.weapons.splice(weaponIndex, 1);
                    updateSlots();
                    document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                    saveGameData();
                }
            }
            if (weapon == "Light" || weapon == "Heavy") {
                document.getElementById("Equip").style.display = "block";
                document.getElementById("Unequip").style.display = "none";
            }
            document.getElementById("Unequip").onclick = function () {
                if (currentIndex == 0) {
                    weapon.owner = null;
                    weapon.slot = null;
                    updateSlots();
                    customizeShape(shape);
                    saveGameData();
                }
            }
            document.getElementById("Equip").onclick = function () {
                if (weapon != "Light" && weapon != "Heavy") {
                    weapon.owner = null;
                    weapon.slot = null;
                }
                filteredWeapons[currentIndex].owner = shape.sid;
                filteredWeapons[currentIndex].slot = slot;
                updateSlots();
                customizeShape(shape);
                saveGameData();
            }
            if (!filteredWeapons[currentIndex - 1]) {
                document.getElementById("goToPre").style.display = "none";
            }
            document.getElementById("goToPre").onclick = function () {
                currentIndex--;
                drawWeaponDisplay(filteredWeapons[currentIndex], currentIndex, weapon);
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
            }
            if (!filteredWeapons[currentIndex + 1]) {
                document.getElementById("goToNext").style.display = "none";
            }
            document.getElementById("goToNext").onclick = function () {
                currentIndex++;
                drawWeaponDisplay(filteredWeapons[currentIndex], currentIndex, weapon);
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
            }
            let WEAPOSNDAPSD = weapon;
            document.getElementById("Upgrade").onclick = function () {
                let weapon = filteredWeapons[currentIndex];
                let adjustwidth = (window.innerWidth - 375) * .75;
                document.getElementById("upgradeMenu").style.display = "block";
                document.getElementById("upgradeMenu").innerHTML = `
                <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
                Lvl ${weapon.level} ${weapon.name}
                </div>
                <hr>
                <div style="position: absolute; left: 300px; top: 65px;">
                ${enterBarForWeapon("damage", weapon)}
                </div>
                <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
                X
                </div>
                <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "#00ff00" : "#808080"};">
                <div style="width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "5" : "10"}px;">${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "UPGRADE" : "MAXED"}</div>
                <div style="display: ${sliverUpgradesByTier[weapon.tier].weapons[weapon.level] ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${abbreviateNumber(sliverUpgradesByTier[weapon.tier].weapons[weapon.level])} Sliver</div>
                </div>
                `;
                let sprite = getWeaponIcon(weapon, true);
                sprite.style = "width: 280px; height: 280px;";
                document.getElementById("upgradeMenu").appendChild(sprite);
                document.getElementById("leaveUpgrade").onclick = function () {
                    document.getElementById("upgradeMenu").style.display = "none";
                }
                document.getElementById("UPGRADE").onclick = function () {
                    if (sliverUpgradesByTier[weapon.tier].weapons[weapon.level] && player.sliver - sliverUpgradesByTier[weapon.tier].weapons[weapon.level] >= 0) {
                        updateMoneyDisplay("sliver", -sliverUpgradesByTier[weapon.tier].weapons[weapon.level]);
                        upgradeWeapon(weapon, currentIndex, WEAPOSNDAPSD);
                    }
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
        let maxwidth = window.innerWidth >= 960 ? 500 : 300;
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
        }else if(type == "selfFixRepair" && Module.selfFixRepairData) {
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
        }else if(type == "dmgIncrease" && Module.dmgIncreaseData) {
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
        }
        return text;
    }
    function drawModuleDisplay(module, index, START_WEAPON) {
        if (index == 0 && START_WEAPON) {
            document.getElementById("Unequip").style.display = "block";
            document.getElementById("Equip").style.display = "none";
        } else {
            document.getElementById("Equip").style.display = "block";
            document.getElementById("Unequip").style.display = "none";
        }
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; margin-top: 5px; width: 100%;">Lvl ${module.level} ${module.name}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${module.desc}
        </div>
        <div style="position: absolute; top: 260px; left: 10px;">
        ${module.dmgIncrease ? "Damage Increase: " + removeDecimals(module.dmgIncrease * 100) + "%<br>" : ""}
        ${module.healthIncrease ? "Durability Increase: " + removeDecimals(module.healthIncrease * 100) + "%<br>" : ""}
        ${module.selfFixRepair ? "Repair Power: " + abbreviateNumber(module.selfFixRepair) + "/SEC<br>" : ""}
        </div>
        `;
        let moduleImg = getModuleIcon(module, true);
        moduleImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(moduleImg);
    }
    function upgradeModule(module, currentIndex, old_MODULE, noEz) {
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
        module.level++;
        if(!noEz) document.getElementById("Upgrade").onclick();
        if(!noEz) drawModuleDisplay(module, currentIndex, old_MODULE);
        if(!noEz) updateSlots();
        if(!noEz) saveGameData();
    }
    function customizeModule(module, shape, slot) {
        if (true) {
            let adjust = window.innerWidth - 375;
            let filteredWeapons = player.modules.filter(e => e.owner == null);
            let currentIndex = 0;
            if (module) filteredWeapons.unshift(module);
            document.getElementById("sideDisplay").innerHTML = `
            <div id="goToPre" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
            </div>
            <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
            </div>
            <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
            </div>
            <div id="Unequip" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 66}px;">UNEQUIP</span>
            </div>
            <div id="Equip" style="display: none; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">EQUIP</span>
            </div>
            <div id="Upgrade" style="display: block; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 137}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
            <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 68.5}px;">UPGRADE</span>
            </div>
            <div id="upgradeMenu" style="display: none; color: #fff; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, 0.7);">
            </div>
            `;
            drawModuleDisplay(filteredWeapons[0], 0, module);
            if (!module) {
                document.getElementById("Equip").style.display = "block";
                document.getElementById("Unequip").style.display = "none";
            }
            document.getElementById("Unequip").onclick = function () {
                if (currentIndex == 0) {
                    module.owner = null;
                    module.slot = null;
                    updateSlots();
                    customizeShape(shape);
                    saveGameData();
                }
            }
            document.getElementById("Equip").onclick = function () {
                if (module) {
                    module.owner = null;
                    module.slot = null;
                }
                filteredWeapons[currentIndex].owner = shape.sid;
                filteredWeapons[currentIndex].slot = slot;
                updateSlots();
                customizeShape(shape);
                saveGameData();
            }
            if (!filteredWeapons[currentIndex - 1]) {
                document.getElementById("goToPre").style.display = "none";
            }
            document.getElementById("goToPre").onclick = function () {
                currentIndex--;
                drawModuleDisplay(filteredWeapons[currentIndex], currentIndex, module);
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
            }
            if (!filteredWeapons[currentIndex + 1]) {
                document.getElementById("goToNext").style.display = "none";
            }
            document.getElementById("goToNext").onclick = function () {
                currentIndex++;
                drawModuleDisplay(filteredWeapons[currentIndex], currentIndex, module);
                if (!filteredWeapons[currentIndex + 1]) {
                    document.getElementById("goToNext").style.display = "none";
                } else {
                    document.getElementById("goToNext").style.display = "block";
                }
                if (!filteredWeapons[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "none";
                } else {
                    document.getElementById("goToPre").style.display = "block";
                }
            }
            let THEMODULE = module;
            document.getElementById("Upgrade").onclick = function () {
                let module = filteredWeapons[currentIndex];
                let adjustwidth = (window.innerWidth - 375) * .75;
                document.getElementById("upgradeMenu").style.display = "block";
                document.getElementById("upgradeMenu").innerHTML = `
                <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
                Lvl ${module.level} ${module.name}
                </div>
                <hr>
                <div style="position: absolute; left: 300px; top: 65px;">
                ${enterBarForModule("healthIncrease", module)}
                ${enterBarForModule("selfFixRepair", module)}
                ${enterBarForModule("dmgIncrease", module)}
                </div>
                <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
                X
                </div>
                <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "#00ff00" : "#808080"};">
                <div style="width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "5" : "10"}px;">${sliverUpgradesByTier[module.tier].modules[module.level] ? "UPGRADE" : "MAXED"}</div>
                <div style="display: ${sliverUpgradesByTier[module.tier].modules[module.level] ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${abbreviateNumber(sliverUpgradesByTier[module.tier].modules[module.level])} Sliver</div>
                </div>
                `;
                let sprite = getModuleIcon(module, true);
                sprite.style = "width: 280px; height: 280px;";
                document.getElementById("upgradeMenu").appendChild(sprite);
                document.getElementById("leaveUpgrade").onclick = function () {
                    document.getElementById("upgradeMenu").style.display = "none";
                }
                document.getElementById("UPGRADE").onclick = function () {
                    if (sliverUpgradesByTier[module.tier].modules[module.level] && player.sliver - sliverUpgradesByTier[module.tier].modules[module.level] >= 0) {
                        updateMoneyDisplay("sliver", -sliverUpgradesByTier[module.tier].modules[module.level]);
                        upgradeModule(module, currentIndex, THEMODULE);
                    }
                }
            }
        }
    }
    document.getElementById("goToBattle").onclick = function () {
        saveGameData();
        document.getElementById("shapesDisplay").style.display = "none";
        document.getElementById("sideDisplay").style.display = "none";
        document.getElementById("shopToggle").style.display = "none";
        document.getElementById("moneyDisplay").style.display = "none";
        document.getElementById("lootBoxToggle").style.display = "none";
        document.getElementById("operationToggle").style.display = "none";
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
            if (robot && !robot.USED) {
                document.getElementById("chooseSlot").innerHTML += `
                <div id="useSlot${i}" style="cursor: pointer; position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
                <div style="width: 100%; text-align: center;">
                ${robot.name}
                </div>
                </div>
                `;
            } else if (robot && robot.USED) {
                document.getElementById("chooseSlot").innerHTML += `
                <div style="position: absolute; left: ${width * i}px; bottom: 0px; width: ${width}px; height: ${width}px; background-color: ${i % 2 ? "rgb(0, 0, 0, 0.2)" : "rgb(255, 255, 255, 0.2)"};">
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
            if (robot && !robot.USED) {
                document.getElementById(`useSlot${i}`).onclick = function () {
                    maxScreen = {
                        x: 1980 * robot.fieldOfViewMulti,
                        y: 1080 * robot.fieldOfViewMulti
                    };
                    players[0].robotIndex = i;
                    robot.USED = true;
                    document.getElementById("chooseSlot").style.display = "none";
                    resize();
                }
                for (let t = 0; t < robot.weapons.length; t++) {
                    let weaponImg = getWeaponIcon(robot.weapons[t], true);
                    weaponImg.style = `pointer-events: none; z-index: 44; position: absolute; bottom: 0px; left: ${45 * t}px; width: 45px; height: 45px;`;
                    document.getElementById(`useSlot${i}`).appendChild(weaponImg);
                }
                let robotImg = getShapeSprite(robot, true);
                robotImg.style = "pointer-events: none; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;";
                document.getElementById(`useSlot${i}`).appendChild(robotImg);
            }
        }
    }
    var keysPressed = Array(100).fill(0);
    document.addEventListener("keydown", (e) => {
        keysPressed[e.keyCode] = 1;
        if (e.keyCode == 27) {
            document.getElementById("sideDisplay").innerHTML = mainDisplayText;
        }
        if (parseInt(e.key) <= 8 && parseInt(e.key) >= 1) {
            if(window.isDev) {
                addOperationXP(300e3);
                updateMoneyDisplay("sliver", 300e6);
                updateMoneyDisplay("gold", 100e3);
            }
            if (document.getElementById("slot" + (parseInt(e.key) - 1))) {
                document.getElementById("slot" + (parseInt(e.key) - 1)).click();
            }
        }
        if (e.keyCode == 13) {
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
    function setUpGame(gameMode) {
        players = [];
        let shapes = player.shapes.filter(e => e.slot != null);
        players[0] = {
            robotIndex: -1,
            robots: []
        };
        for (let i = 0; i < 8; i++) {
            if (shapes.find(e => e.slot == i)) {
                let index = shapes.findIndex(e => e.slot == i);
                let newShape = new shape(shapes[index], null, true);
                if (gameMode == 0) {
                    newShape.x = mapInfo.x / 2;
                    newShape.y = mapInfo.y / 2;
                }
                let weapons = player.weapons.filter(e => e.owner == shapes[index].sid);
                newShape.weapons = [];
                for (let t = 0; t < weapons.length; t++) {
                    let newWeapon = new weapon(weapons[t]);
                    newWeapon.slot = weapons[t].slot;
                    newShape.weapons.push(newWeapon);
                }
                let modules = player.modules.filter(e => e.owner == shapes[index].sid);
                newShape.modules = [];
                let healthIncrease = 1;
                let dmgIncrease = 1;
                for (let t = 0; t < modules.length; t++) {
                    let newModule = new module(modules[t]);
                    if (newModule.healthIncrease) {
                        healthIncrease += newModule.healthIncrease;
                    }
                    if (newModule.dmgIncrease) {
                        dmgIncrease += newModule.dmgIncrease;
                    }
                    newShape.modules.push(newModule);
                }
                for(let i = 0; i < newShape.weapons.length; i++) {
                    let weapon = newShape.weapons[i];
                    weapon.dmg *= dmgIncrease;
                }
                newShape.health = newShape.maxhealth = parseInt(removeDecimals(newShape.maxhealth * healthIncrease));
                newShape.isMe = true;
                newShape.USED = false;
                players[0].robots.push(newShape);
            } else {
                players[0].robots.push(null);
            }
        }
        updateChooseSlots();
    }
    var extermination = {
        last: 0,
        amount: 5,
        types: [{
            name: "Burner Circle",
            health: {
                base: 5e3,
                current: 5e3
            },
            fireRate: 500,
            range: 400,
            dmg: {
                base: 200,
                current: 200
            },
            scale: 45,
            speed: 0.0028
        }, {
            name: "Sniper Circle",
            health: {
                base: 75e2,
                current: 75e2
            },
            fireRate: 2000,
            range: 3000,
            dmg: {
                base: 75,
                current: 75
            },
            scale: 75,
            speed: 0.0014
        }, {
            name: "Smasher Circle",
            health: {
                base: 25e2,
                current: 25e2
            },
            dmg: {
                base: 750,
                current: 750
            },
            scale: 35,
            speed: 0.012
        }]
    };
    document.getElementById("extermination").onclick = function () {
        document.getElementById("chooseSlot").style.display = "block";
        document.getElementById("goBackToHanger").style.display = "none";
        document.getElementById("gameModesDisplay").style.display = "none";
        player.gameMode = 0;
        players = [];
        mapInfo.x = mapInfo.y = 4e3;
        extermination.last = 0;
        extermination.amount = 5;
        for(let i = 0; i < extermination.types.length; i++) {
            extermination.types[i].dmg.current = extermination.types[i].dmg.base;
            extermination.types[i].health.current = extermination.types[i].health.base;
        }
        setUpGame(player.gameMode);
        resize();
    }
    document.getElementById("goBackToHanger").onclick = function () {
        document.getElementById("operationToggle").style.display = "block";
        document.getElementById("lootBoxToggle").style.display = "block";
        document.getElementById("shapesDisplay").style.display = "block";
        document.getElementById("sideDisplay").style.display = "block";
        document.getElementById("shopToggle").style.display = "block";
        document.getElementById("moneyDisplay").style.display = "block";
        document.getElementById("goToBattle").style.display = "block";
        document.getElementById("gameModesDisplay").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = mainDisplayText;
        this.style.display = "none";
    }
    function enterBarForShape(type, shape) {
        let text = "";
        let Shape = shapeData.find(item => item.name == shape.name);
        let maxwidth = window.innerWidth >= 960 ? 500 : 300;
        if (type == "health") {
            let maxhealth = Shape.healthData.base;
            for (let i = 0; i < Shape.healthData.level.length; i++) {
                maxhealth += Shape.healthData.level[i];
            }
            let indexAdjust = ((shape.health / maxhealth) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.health + Shape.healthData.level[shape.level]) / maxhealth) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Health: ${abbreviateNumber(shape.health)}
            <div style="display: ${Shape.healthData.level[shape.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${abbreviateNumber(Shape.healthData.level[shape.level])}
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
            let indexAdjust = ((shape.speed / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.speed + Shape.speedLevel[shape.level]) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Speed: ${shape.speed * 1000}
            <div style="display: ${Shape.speedLevel[shape.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${Shape.speedLevel[shape.level] * 1000}
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
            let indexAdjust = ((shape.ability.dmg / maxspeed) * maxwidth) / maxwidth;
            let indexAdjusted = (((shape.ability.dmg + Shape.ability.damageData.level[shape.level]) / maxspeed) * maxwidth) / maxwidth;
            text = `
            <div style="position: relative; width: ${maxwidth}px;">
            Ability Damage: ${abbreviateNumber(shape.ability.dmg)}
            <div style="display: ${Shape.ability.damageData.level[shape.level] ? "block" : "none"};position: absolute; top: 0px; right: 0px; color: #00ff00;">
            +${abbreviateNumber(Shape.ability.damageData.level[shape.level])}
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
    function upgradeShape(shape, noEz) {
        let Shape = shapeData.find(item => item.name == shape.name);
        let healthIncrease = Shape.healthData.level[shape.level];
        shape.sellPrice += sliverUpgradesByTier[shape.tier].shapes[shape.level] * .75;
        shape.health += healthIncrease;
        shape.maxhealth += healthIncrease;
        let speedIncrease = Shape.speedLevel[shape.level];
        shape.speed += speedIncrease;
        shape.speed = (shape.speed * 1000).toFixed(1) / 1000;
        if(shape.ability && shape.ability.dmg) {
            let increase = Shape.ability.damageData.level[shape.level];
            shape.ability.dmg += increase;
        }
        shape.level++;
        if (shape.slot != null && !noEz) {
            document.getElementById("slot" + shape.slot).click();
            document.getElementById("upgradeShape").click();
        }
        if(!noEz) updateSlots();
        if(!noEz) saveGameData();
    }
    function customizeShape(shape) {
        let moduleOn = false;
        document.getElementById("sideDisplay").innerHTML = `
        <div style="margin-top: 5px; width: 100%; text-align: center; font-size: 40px;">Lvl ${shape.level} ${shape.name}</div>
        <hr>
        <div style="position: absolute; top: ${((window.innerHeight - 56.5) / 2) - 194}px; left: 10px; width: 355px; height: 245px; background-color: rgb(0, 0, 0, 0.4); overflow-y: scroll;">
        <div style="margin-top: 10px; margin-left: 10px; color: #fff;"><strong>${shape.name}</strong></div>
        <div style="margin-top: 10px; margin-left: 10px;">
        ${shape.desc}<br><br>
        ${shape.ability ? shape.ability.desc : ""}
        </div>
        <hr style="border-color: #000;">
        <div style="margin-left: 10px;">
        Health: ${abbreviateNumber(shape.health)}<br>
        ${shape.builtInDefensePoints ? `Defense Points: ${shape.builtInDefensePoints} (${((1-defensePointsToResistance(shape.builtInDefensePoints))*100).toFixed(1)}% Resistance)<br>` : ""}
        Speed: ${shape.speed * 1000} PX/SEC<br>
        ${shape.reflector ? `Damage Reflection: ${shape.reflector*100}%<br>` : ""}
        ${shape.ability && shape.ability.dmg ? `Ability Dmg: ${abbreviateNumber(shape.ability.dmg)}` : ""}
        <p></p>
        </div>
        </div>
        <div id="weaponDisplay" style="position: absolute; bottom: ${((window.innerHeight - 56.5) / 2) - 250}px; left: 375px; width: 355px; height: 500px; background-color: rgb(0, 0, 0, 0.4);">
        </div>
        <div id="toggleModule" style="position: absolute; cursor: pointer; font-size: 25px; top: ${((window.innerHeight - 56.5) / 2) + 60}px; left: 10px; width: 355px; height: 45px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; left: ${355 / 2 - 50}px; top: 4px;">
        Modules
        </div>
        </div>
        <div id="changeShape" style="position: absolute; cursor: pointer; font-size: 40px; top: ${((window.innerHeight - 56.5) / 2) + 115}px; left: 10px; width: 355px; height: 90px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; left: ${355 / 2 - 133}px; top: ${45 - 27}px;">Change Shape</div>
        </div>
        <div id="upgradeShape" style="position: absolute; cursor: pointer; font-size: 40px; top: ${((window.innerHeight - 56.5) / 2) + 215}px; left: 10px; width: 355px; height: 90px; background-color: rgb(0, 255, 0, 0.8);">
        <div style="position: absolute; left: ${355 / 2 - 80}px; top: ${45 - 27}px;">Upgrade</div>
        </div>
        <div id="upgradeMenu" style="display: none; color: #fff; position: absolute; top: 12.5%; left: 12.5%; width: 75%; height: 75%; background-color: rgb(0, 0, 0, 0.7);">
        </div>
        `;
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
                    <span style="position: absolute; top: ${125 / 2 - 27}px; left: ${355 / 2 - 135}px; font-size: 40px;">Equip Weapon</span>
                    `;
                    document.getElementById(elementId).onclick = function () {
                        customizeWeapon(elementId.includes("LIGHT") ? "Light" : "Heavy", shape, parseInt(elementId[elementId.length - 1]));
                    }
                } else {
                    let weaponIcon = getWeaponIcon(weapon, true);
                    weaponIcon.style = "width: 125px; height: 125px;";
                    document.getElementById(elementId).appendChild(weaponIcon);
                    document.getElementById(elementId).innerHTML += `
                    <div style="position: absolute; top: 5px; left: 135px; font-size: 24px;">
                    Lvl ${weapon.level} ${weapon.name}
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
        doWeaponsStuff();
        let filteredModules = player.modules.filter(e => e.owner == shape.sid);
        document.getElementById("toggleModule").onclick = function () {
            moduleOn = !moduleOn;
            document.getElementById("weaponDisplay").innerHTML = "";
            if (moduleOn) {
                document.getElementById("toggleModule").innerHTML = `
                <div style="position: absolute; left: ${355 / 2 - 54}px; top: 4px;">
                Weapons
                </div>
                `;
                let moduleHardpoints = (shape.moduleHardpoints || 0);
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
                        <span style="position: absolute; top: ${125 / 2 - 27}px; left: ${355 / 2 - 128.5}px; font-size: 40px;">
                        Equip Module
                        </span>
                        `;
                    } else {
                        let moduleIcon = getWeaponIcon(module, true);
                        moduleIcon.style = "width: 125px; height: 125px;";
                        document.getElementById(elementId).appendChild(moduleIcon);
                        document.getElementById(elementId).innerHTML += `
                        <div style="position: absolute; top: 5px; left: 135px; font-size: 24px;">
                        Lvl ${module.level} ${module.name}
                        </div>
                        `;
                    }
                    document.getElementById(elementId).onclick = function () {
                        if (player.modules.filter(e => e.owner == null).length || module) {
                            customizeModule(module, shape, parseInt(elementId[elementId.length - 1]));
                        } else {
                            alert("You have no modules in inventory.")
                        }
                    };
                }
            } else {
                document.getElementById("toggleModule").innerHTML = `
                <div style="position: absolute; left: ${355 / 2 - 50}px; top: 4px;">
                Modules
                </div>
                `;
                doWeaponsStuff();
            }
        }
        document.getElementById("changeShape").onclick = function () {
            equipShape(shape.slot);
            saveGameData();
        }
        document.getElementById("upgradeShape").onclick = function () {
            let adjustwidth = (window.innerWidth - 375) * .75;
            document.getElementById("upgradeMenu").style.display = "block";
            document.getElementById("upgradeMenu").innerHTML = `
            <div style="width: 100%; text-align: center; margin-top: 5px; font-size: 30px;">
            Lvl ${shape.level} ${shape.name}
            </div>
            <hr>
            <div style="position: absolute; left: 300px; top: 65px;">
            ${enterBarForShape("health", shape)}
            ${enterBarForShape("speed", shape)}
            ${enterBarForShape("ability damage", shape)}
            </div>
            <div id="leaveUpgrade" style="position: absolute; cursor: pointer; right: 10px; top: 10px;">
            X
            </div>
            <div id="UPGRADE" style="position: absolute; width: 200px; height: 80px; cursor: pointer; left: ${adjustwidth / 2 - 100}px; bottom: 10px; background-color: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "#00ff00" : "#808080"};">
            <div style="width: 100%; text-align: center; font-size: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "24" : "40"}px; margin-top: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "5" : "10"}px;">${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "UPGRADE" : "MAXED"}</div>
            <div style="display: ${sliverUpgradesByTier[shape.tier].shapes[shape.level] ? "block" : "none"}; width: 100%; text-align: center; font-size: 12px;">${abbreviateNumber(sliverUpgradesByTier[shape.tier].shapes[shape.level])} Sliver</div>
            </div>
            `;
            let sprite = getShapeSprite(shape, true);
            sprite.style = "width: 280px; height: 280px;";
            document.getElementById("upgradeMenu").appendChild(sprite);
            document.getElementById("leaveUpgrade").onclick = function () {
                document.getElementById("upgradeMenu").style.display = "none";
            }
            document.getElementById("UPGRADE").onclick = function () {
                if (sliverUpgradesByTier[shape.tier].shapes[shape.level] && player.sliver - sliverUpgradesByTier[shape.tier].shapes[shape.level] >= 0) {
                    updateMoneyDisplay("sliver", -sliverUpgradesByTier[shape.tier].shapes[shape.level]);
                    upgradeShape(shape);
                }
            }
        }
    }
    function drawShapeEquip(shape, currentIndex, oldShape) {
        if (currentIndex == 0 && oldShape) {
            document.getElementById("Unequip").style.display = "block";
            document.getElementById("Equip").style.display = "none";
        } else {
            document.getElementById("Equip").style.display = "block";
            document.getElementById("Unequip").style.display = "none";
        }
        document.getElementById("WEAPONdisplay").innerHTML = `
        <div style="font-size: 30px; text-align: center; margin-top: 5px; width: 100%;">Lvl ${shape.level} ${shape.name}</div>
        <hr>
        <div id="weaponImage" style="position: absolute; top: 70px; left: 10px; width: 180px; height: 180px;"></div>
        <div style="position: absolute; top: 70px; left: 200px;">
        ${shape.desc}
        ${shape.ability ? "<br><br>" + shape.ability.desc : ""}
        </div>
        <div style="position: absolute; top: 260px; left: 10px;">
        Health: ${shape.health}<br>
        Speed: ${shape.speed * 1000} PX/SEC<br>
        ${shape.builtInDefensePoints ? `Defense Points: ${shape.builtInDefensePoints} (${((1-defensePointsToResistance(shape.builtInDefensePoints))*100).toFixed(1)}% Resistance)<br>` : ""}
        ${shape.reflector ? `Damage Reflection: ${shape.reflector*100}%<br>` : ""}
        ${shape.ability && shape.ability.dmg ? `Ability Dmg: ${abbreviateNumber(shape.ability.dmg)}` : ""}
        </div>
        `;
        document.getElementById("Sell").innerHTML = `
        <span style="position: absolute; font-size: 30px; top: 5px; left: ${203 / 2 - 32}px;">SELL</span>
        <span style="position: absolute; font-size: 10px; top: 40px; width: 100%; text-align: center;">${abbreviateNumber(shape.sellPrice)} Silver</span>
        `;
        let weapons = player.weapons.filter(e => e.owner == shape.sid);
        let heavy = weapons.filter(e => e.type == "Heavy").length;
        let light = weapons.filter(e => e.type == "Light").length;
        if(heavy > shape.hardpoints.heavy || light > shape.hardpoints.light) {
            weapons.forEach(e => {
                e.slot = null;
                e.owner = null;
            });
            weapons = [];
        }
        for (let t = 0; t < weapons.length; t++) {
            let tmpImage = getWeaponIcon(weapons[t], true);
            tmpImage.style = `position: absolute; bottom: ${10 + (70 * t)}px; right: 5px; width: 60px; height: 60px;`;
            document.getElementById("WEAPONdisplay").appendChild(tmpImage);
            document.getElementById("WEAPONdisplay").innerHTML += `
            <div style="position: absolute; bottom: ${10 + (70 * t)}px; right: 5px; width: 60px; height: 60px;">
            Lvl ${weapons[t].level}
            </div>
            `;
        }
        let weaponImg = getShapeSprite(shape, true);
        weaponImg.style = "width: 100%; height: 100%;";
        document.getElementById("weaponImage").appendChild(weaponImg);
    }
    var auSource = "./images/au_icon.png";
    var agSource = "./images/ag_icon.png";//
    var lootboxes = [{
        source: "./images/basic_lootbox.png",
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
        source: "./images/copper_lootbox.png",
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
        source: "./images/gold_lootbox.png",
        rewards: [{
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
            type: "money",
            keys: true,
            amount: 5e3,
            rare: 1
        }],
        cost: 1e3
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
        } else {
            updateMoneyDisplay(reward.au ? "gold" : reward.keys ? "keys" : "sliver", reward.amount)
        }
    }
    function doLootboxAnimation(rewards, reward) {
        if(document.getElementById("rewardAnimation").style.display == "block") return;
        document.getElementById("rewardAnimation").innerHTML = "";
        document.getElementById("rewardAnimation").style.display = "block";
        document.getElementById("rewardAnimation").style.top = (window.innerHeight/2-100) + "px";
        let indexx = 0;
        let rewardIndex = 0;
        for(let tt = 0; tt < 6; tt++) {
            for(let i = 0; i < rewards.length; i++) {
                document.getElementById("rewardAnimation").innerHTML += `
                <div id="${`${rewards[i].index}nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx*200}px; background-color: ${indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
                <div style="color: ${indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
                ${abbreviateNumber(rewards[i].amount)}
                </div>
                </div>
                `;
                indexx++;
            }
        }
        for(let i = 0; i < rewards.length; i++) {
            document.getElementById("rewardAnimation").innerHTML += `
            <div id="${rewards[i] == reward ? `${rewards[i].index}THEREWARD${indexx}${rewards[i].type}` : `${rewards[i].index}nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx*200}px; background-color: ${rewards[i] == reward ? "rgb(255, 215, 0, 0.8)" : indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
            <div style="color: ${rewards[i] == reward ? "#000" : indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
            ${abbreviateNumber(rewards[i].amount)}
            </div>
            </div>
            `;
            if(rewards[i] == reward) {
                rewardIndex = indexx;
            }
            indexx++;
        }
        for(let tt = 0; tt < 6; tt++) {
            for(let i = 0; i < rewards.length; i++) {
                document.getElementById("rewardAnimation").innerHTML += `
                <div id="${`${rewards[i].index}nothign${indexx}${rewards[i].type}`}" style="position: absolute; width: 200px; height: 200px; top: 0px; left: ${indexx*200}px; background-color: ${indexx % 2 == 0 ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.2)"}; background-size: 200px 200px; ${(rewards[i].ag || rewards[i].au || rewards[i].keys ? "background-image: url('" + (rewards[i].ag ? agSource : rewards[i].keys ? keysSource : auSource) + "')" : "")}">
                <div style="color: ${indexx % 2 ? "#fff" : "#000"}; font-size: 20px; display: ${rewards[i].ag ? "block" : rewards[i].au ? "block" : rewards[i].keys ? "block" : "none"}; position: absolute; bottom: 5px; right: 5px;">
                ${abbreviateNumber(rewards[i].amount)}
                </div>
                </div>
                `;
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
                    if(last6Chars == "weapon") {
                        let weapon = weaponData[element.id[0]];
                        let image = getWeaponIcon(weapon, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }else if(last5Chars == "shape") {
                        let robot = shapeData[element.id[0]];
                        let image = getShapeSprite(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }
                }
            }else {
                let element = Elements.find(e => e.id.includes(`nothign${i}`));
                if (element) {
                    let last6Chars = element.id.slice(-6);
                    let last5Chars = element.id.slice(-5);
                    if(last6Chars == "weapon") {
                        let weapon = weaponData[element.id[0]];
                        let image = getWeaponIcon(weapon, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }else if(last5Chars == "shape") {
                        let robot = shapeData[element.id[0]];
                        let image = getShapeSprite(robot, true);
                        image.style = "width: 100%; height: 100%;";
                        element.append(image);
                    }
                }
            }
        }
        let scrollLocation = ((rewardIndex * 200) - (window.innerWidth/2))+100;
        document.getElementById("rewardAnimation").scrollLeft = 0;
        let tmpScroll = 0;
        let lastUpdate = Date.now();
        function animate() {
            let delta = Date.now() - lastUpdate;
            lastUpdate = Date.now();
            let percent = (tmpScroll/scrollLocation) * 100;
            tmpScroll += (10-((percent/10) % 10)) * delta;
            if(percent > 99.99 && percent < 100) {
                tmpScroll = scrollLocation;
                setTimeout(() => {
                    document.getElementById("rewardAnimation").style.display = "none";
                    document.getElementById("rewardAnimation").innerHTML = "";
                }, 1000);
            }
            tmpScroll = Math.min(tmpScroll, scrollLocation);
            document.getElementById("rewardAnimation").scrollLeft = tmpScroll;
            if(document.getElementById("rewardAnimation").innerHTML != "" && tmpScroll <= scrollLocation) {
                window.requestAnimationFrame(animate);
            }
        }
        window.requestAnimationFrame(animate);
        //rewardIndex
    }
    document.getElementById("lootBoxToggle").onclick = function () {
        document.getElementById("rewardAnimation").style.display = "none";
        document.getElementById("sideDisplay").innerHTML = `
        <div style="position: absolute; top: 20px; left: 20px; width: 300px; height: 300px; background-image: url('${lootboxes[0].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Basic Box
        </div>
        <div id="getBasicBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[0].cost)} Keys)
        </div>
        </div>
        <div style="position: absolute; top: 20px; left: 340px; width: 300px; height: 300px; background-image: url('${lootboxes[1].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Copper Box
        </div>
        <div id="getCopperBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[1].cost)} Keys)
        </div>
        </div>
        <div style="position: absolute; top: 340px; left: 20px; width: 300px; height: 300px; background-image: url('${lootboxes[2].source}');">
        <div style="width: 100%; text-align: center; color: #fff; font-size: 30px;">
        Gold Box
        </div>
        <div id="getGoldBox" style="cursor: pointer; position: absolute; text-align: center; color: #fff; font-size: 26px; bottom: 10px; left: 20px; border-radius: 6px; width: 260px; height: 40px; background-color: #00ff00;">
        Get (${abbreviateNumber(lootboxes[2].cost)} Keys)
        </div>
        </div>
        `;
        document.getElementById("getBasicBox").onclick = function () {
            if (player.keys - lootboxes[0].cost >= 0) {
                updateMoneyDisplay("keys", -lootboxes[0].cost);
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
    }
    function betterEquipShape(slot, oldShape, unequipedShapes) {
        let adjust = window.innerWidth - 375;
        let filteredRobots = [];
        for (let i = 0; i < unequipedShapes.length; i++) {
            filteredRobots.push(unequipedShapes[i]);
        }
        if (oldShape) filteredRobots.unshift(oldShape);
        let currentIndex = 0;
        document.getElementById("sideDisplay").innerHTML = `
        <div id="goToPre" style="display: none; position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; left: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_left}');">
        </div>
        <div id="WEAPONdisplay" style="position: absolute; left: ${adjust / 2 - 350}px; top: ${window.innerHeight / 2 - 250}px; border-radius: 4px; width: 700px; height: 490px; background-color: rgb(0, 0, 0, 0.4);">
        </div>
        <div id="goToNext" style="position: absolute; cursor: pointer; font-size: 30px; text-align: center; color: #fff; right: 10px; top: ${window.innerHeight / 2 - 30}px; width: 60px; height: 60px; background-color: rgb(0, 0, 0, 0.3); border-radius: 8px; background-size: 60px 60px; background-image: url('${arrow_1_right}');">
        </div>
        <div id="Unequip" style="display: ${oldShape ? "block" : "none"}; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
        <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 66}px;">UNEQUIP</span>
        </div>
        <div id="Equip" style="display: ${oldShape ? "none" : "block"}; cursor: pointer; color: #fff; font-size: 30px; position: absolute; left: ${adjust / 2 - 350}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(0, 255, 0, 0.8);">
        <span style="position: absolute; top: ${80 / 2 - 20}px; left: ${203 / 2 - 44}px;">EQUIP</span>
        </div>
        <div id="Sell" style="cursor: pointer; color: #fff; position: absolute; left: ${adjust / 2 - 137}px; top: ${(window.innerHeight / 2 + 250)}px; border-radius: 4px; width: 203px; height: 80px; background-color: rgb(255, 0, 0, 0.8);">
        <span style="position: absolute; font-size: 20px; top: 5px; left: ${203 / 2 - 21.5}px;">SELL</span>
        <span style="position: absolute; font-size: 10px; top: 20px; width: 100%; text-align: center;"></span>
        </div>
        `;
        drawShapeEquip(filteredRobots[currentIndex], currentIndex, oldShape);
        document.getElementById("Unequip").onclick = function () {
            if (oldShape && currentIndex == 0) {
                slotData[oldShape.slot].used = false;
                oldShape.slot = null;
                document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                updateSlots();
                saveGameData();
            }
        }
        document.getElementById("Equip").onclick = function () {
            if ((currentIndex > 0) || (!oldShape && currentIndex == 0)) {
                filteredRobots[currentIndex].slot = slot;
                slotData[slot].used = true;
                if (oldShape) {
                    oldShape.slot = null;
                }
                document.getElementById("sideDisplay").innerHTML = mainDisplayText;
                updateSlots();
                saveGameData();
            }
        }
        document.getElementById("Sell").onclick = function () {
            let index = player.shapes.findIndex(e => e == filteredRobots[currentIndex]);
            updateMoneyDisplay("sliver", filteredRobots[currentIndex].sellPrice);
            if (currentIndex == 0) {
                slotData[slot].used = false;
            }
            let weapons = player.weapons.filter(e => player.shapes[index].sid == e.owner);
            weapons.forEach(e => {
                e.owner = null;
                e.slot = null;
            });
            let modules = player.modules.filter(e => player.shapes[index].sid == e.owner);
            modules.forEach(e => {
                e.owner = null;
                e.slot = null;
            });
            player.shapes.splice(index, 1);
            document.getElementById("sideDisplay").innerHTML = mainDisplayText;
            saveGameData();
            updateSlots();
        }
        if (!filteredRobots[currentIndex + 1]) {
            document.getElementById("goToNext").style.display = "none";
        }
        document.getElementById("goToNext").onclick = function () {
            if (filteredRobots[currentIndex + 1]) {
                currentIndex++;
                drawShapeEquip(filteredRobots[currentIndex], currentIndex, oldShape);
                if (filteredRobots[currentIndex + 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredRobots[currentIndex - 1]) {
                    document.getElementById("goToPre").style.display = "block";
                } else {
                    document.getElementById("goToPre").style.display = "none";
                }
            }
        }
        document.getElementById("goToPre").onclick = function () {
            if (filteredRobots[currentIndex - 1]) {
                currentIndex--;
                drawShapeEquip(filteredRobots[currentIndex], currentIndex, oldShape);
                if (filteredRobots[currentIndex - 1]) {
                    this.style.display = "block";
                } else {
                    this.style.display = "none";
                }
                if (filteredRobots[currentIndex + 1]) {
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
        if (unequipedShapes.length == 0) {
            let factored = window.innerWidth - 375;
            document.getElementById("sideDisplay").innerHTML = `
            <div id="poorBuddy" style="position: absolute; top: ${window.innerHeight / 2 - 16}px; left: ${factored / 2 - 183.5}px; font-size: 24px;">
            <strong>There are no robots in inventory.</strong>
            </div>
            `;
        } else {
            document.getElementById("sideDisplay").innerHTML = "";
            let oldShape = player.shapes.find(e => e.slot == slot);
            betterEquipShape(slot, oldShape, unequipedShapes);
        }
    }
    function updateSlots(noEz) {
        document.getElementById("shapesDisplay").innerHTML = "";
        let INDEX = slotData.findIndex(e => !e.unlocked);
        for (let i = 0; i < 8; i++) {
            let slot = slotData[i];
            if (slot.unlocked) {
                if (slot.used) {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; cursor: pointer; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    </div>
                    `;
                } else {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; cursor: pointer; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    <div style="position: absolute; top: ${(375 / 2) - 38 / 2}px; left: ${(375 / 2) - 159 / 2}px; font-size: 28px;">
                    Equip Robot
                    <div>
                    </div>
                    `;
                }
            } else {
                if (i > INDEX) {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; pointer-events: auto; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    <div style="position: absolute; top: ${(375 / 2) - 65 / 2}px; left: ${(375 / 2) - 183 / 2}px; font-size: 48px;">
                    LOCKED
                    </div>
                    </div>
                    `;
                } else {
                    document.getElementById("shapesDisplay").innerHTML += `
                    <div id="slot${i}" style="position: relative; cursor: pointer; width: 375px; height: 375px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.2);" : "rgb(0, 0, 0, 0);"}">
                    <div style="position: absolute; top: 87.5px; left: 87.5px; font-size: 28px; width: 200px; height: 200px;">
                    Unlock: ${abbreviateNumber(slot.cost)} Gold
                    </div>
                    </div>
                    `;
                }
            }
        }
        for (let i = 0; i < 8; i++) {
            let slot = slotData[i];
            if (slot.unlocked) {
                if (slot.used) {
                    let shape = player.shapes.find(e => e.slot == i);
                    let tmpImage = getShapeSprite(shape, true);
                    tmpImage.style = `position: absolute; top: 0px; left: 0px; width: 375px; height: 375px;`;
                    document.getElementById("slot" + i).innerHTML = `
                    <div style="position: absolute; bottom: 5px; right: 5px; font-size: 30px;">
                    <strong>Lvl ${shape.level} ${shape.name}</strong>
                    </div>
                    `;
                    document.getElementById("slot" + i).appendChild(tmpImage);
                    let weapons = player.weapons.filter(e => e.owner == shape.sid);
                    let heavy = weapons.filter(e => e.type == "Heavy").length;
                    let light = weapons.filter(e => e.type == "Light").length;
                    if(heavy > shape.hardpoints.heavy || light > shape.hardpoints.light) {
                        weapons.forEach(e => {
                            e.slot = null;
                            e.owner = null;
                        });
                        weapons = [];
                    }
                    for (let t = 0; t < Math.min(weapons.length, 4); t++) {
                        let tmpImage = getWeaponIcon(weapons[t], true);
                        tmpImage.style = `position: absolute; bottom: ${40 + (70 * t)}px; right: 5px; width: 60px; height: 60px;`;
                        document.getElementById("slot" + i).appendChild(tmpImage);
                    }
                    document.getElementById("slot" + i).onclick = function () {
                        customizeShape(shape);
                        saveGameData();
                    }
                } else {
                    document.getElementById("slot" + i).onclick = function () {
                        equipShape(i);
                        saveGameData();
                    }
                }
            } else if (i <= INDEX) {
                document.getElementById("slot" + i).onclick = function () {
                    if (player.gold - slot.cost >= 0) {
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
        if(!operationData.data.length || !operationData.data.some(e => e.collected == null)) {
            generateOperation();
        }
        if((operationData.xp + amount) >= operationData.data[operationData.currentIndex].maxxp) {
            amount -= (operationData.data[operationData.currentIndex].maxxp - operationData.xp);
            operationData.data[operationData.currentIndex].done = true;
            console.log(amount);
            if(amount <= 0) {
                operationData.currentIndex++;
                if(!operationData.data[operationData.currentIndex]) {
                    operationData.currentIndex = operationData.data.length - 1;
                }
            }
            operationData.xp = 0;
            while(amount > 0) {
                operationData.currentIndex++;
                if(!operationData.data[operationData.currentIndex]) {
                    operationData.currentIndex = operationData.data.length - 1;
                    amount = 0;
                }else if(amount >= operationData.data[operationData.currentIndex].maxxp) {
                    amount -= operationData.data[operationData.currentIndex].maxxp;
                    operationData.data[operationData.currentIndex].done = true;
                }else {
                    operationData.xp += amount;
                    amount = 0;
                }
            }
        }else {
            operationData.xp += amount;
        }
    }
    var keysSource = "./images/keys_icon.png";
    function generateOperation() {
        operationData.xp = 0;
        operationData.currentIndex = 0;
        operationData.data = [];
        let operationLevels = [60, 80, 100, 120, 140, 160, 180, 200];
        let maxLevels = operationLevels[Math.floor(Math.random() * operationLevels.length)];
        for(let i = 0; i < maxLevels; i++) {
            let amount = 0;
            let rewardType = "silver";
            if(Math.random() < .5) {
                rewardType = "silver";
                if(i >= 140) {
                    amount = i * 150e3;
                }else if(i >= 100) {
                    amount = i * 80e3;
                }else if(i >= 80) {
                    amount = i * 50e3;
                }else if(i >= 40) {
                    amount = i * 20e3;
                }else if(i >= 5) {
                    amount = i * 10e3;
                }else {
                    amount = Math.max(i * 5000, 2500);
                }
            }else if(Math.random() < .5) {
                rewardType = "keys";
                if(i >= 140) {
                    amount = i * 50;
                }else if(i >= 100) {
                    amount = i * 30;
                }else if(i >= 80) {
                    amount = i * 20;
                }else if(i >= 40) {
                    amount = i * 6;
                }else if(i >= 5) {
                    amount = i * 4;
                }else {
                    amount = Math.max(i * 2, 1);
                }
            }else {
                rewardType = "gold";
                if(i >= 140) {
                    amount = i * 60;
                }else if(i >= 100) {
                    amount = i * 40;
                }else if(i >= 80) {
                    amount = i * 20;
                }else if(i >= 40) {
                    amount = i * 10;
                }else if(i >= 5) {
                    amount = i * 7;
                }else {
                    amount = Math.max(i * 5, 2);
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
    function displayOperation() {
        document.getElementById("sideDisplay").innerHTML = `
        <div style="position: absolute; left: ${(window.innerWidth-375)/2-25}px; top: ${window.innerHeight/2-160}px;">
        Lvl ${operationData.currentIndex+1}
        </div>
        <div style="position: absolute; left: ${(window.innerWidth-375)/2-300}px; top: ${window.innerHeight/2-130}px; height: 20px; width: 600px; background-color: rgb(0, 0, 0, 0.4);">
        <div style="position: absolute; top: 0px; left: 0px; height: 100%; width: ${(operationData.xp/operationData.data[operationData.currentIndex].maxxp)*100}%; background-color: #07faf2;">
        </div>
        <span style="position: absolute; top: 0px; left: 0px; margin-left: 5px; color: #fff;">${operationData.xp}/${operationData.data[operationData.currentIndex].maxxp}</span>
        </div>
        <div id="rewards" style="position: absolute; top: ${window.innerHeight/2-100}px; overflow-x: scroll; height: 200px; width: ${window.innerWidth-375}px; background-color: rgb(0, 0, 0, .3);">
        </div>
        `;
        for(let i = 0; i < operationData.data.length; i++) {
            let data = operationData.data[i];
            if(data) {
                let backgroundImage = data.type == "silver" ? agSource : data.type == "gold" ? auSource : keysSource;
                document.getElementById("rewards").innerHTML += `
                <div id="OPREWARD${i}" style="position: absolute; top: 0px; left: ${200*i}px; height: 200px; width: 200px; background-color: ${i % 2 == 0 ? "rgb(0, 0, 0, 0.4)" : "rgb(255, 255, 255, 0.6)"}; background-size: 200px 200px; background-image: url('${backgroundImage}')">
                <div style="position: absolute; font-size: 24px; bottom: 5px; right: 5px; color: ${i % 2 == 0 ? "#fff" : "#000"}">
                ${abbreviateNumber(data.amount)}
                </div>
                </div>
                `;
            }
        }
        for(let i = 0; i < operationData.data.length; i++) {
            let data = operationData.data[i];
            if(data && data.done) {
                if(data.collected) {
                    document.getElementById(`OPREWARD${i}`).style.backgroundColor = "rgb(0, 255, 0, .4)";
                }else {
                    document.getElementById(`OPREWARD${i}`).style.cursor = "pointer";
                    document.getElementById(`OPREWARD${i}`).style.backgroundColor = "rgb(0, 0, 255, .4)";
                    document.getElementById(`OPREWARD${i}`).onclick = function() {
                        if(data.type == "silver") {
                            data.collected = true;
                            updateMoneyDisplay("sliver", data.amount);
                        }else if(data.type == "gold") {
                            data.collected = true;
                            updateMoneyDisplay("gold", data.amount);
                        }else {
                            data.collected = true;
                            updateMoneyDisplay("keys", data.amount);
                        }
                        document.getElementById("operationToggle").onclick();
                        let indexx = operationData.data.findIndex(e => e.collected == null && e.done);
                        document.getElementById("rewards").scrollLeft = (indexx * 200) - 50;
                    }
                }
            }
        }
    }
    document.getElementById("operationToggle").onclick = function() {
        if(!operationData.data.length || !operationData.data.some(e => e.collected == null)) {
            generateOperation();
            displayOperation();
        }else {
            displayOperation();
            let indexx = operationData.data.findIndex(e => e.collected == null && e.done);
            document.getElementById("rewards").scrollLeft = (indexx * 200) - 50;
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
        saveValue("slotData", JSON.stringify(slotData));
        saveValue("shapes", JSON.stringify(shapes));
        saveValue("weapons", JSON.stringify(weapons));
        saveValue("modules", JSON.stringify(modules));
        saveValue("keys", player.keys);
        saveValue("sliver", player.sliver);
        saveValue("gold", player.gold);
        saveValue("operationData", JSON.stringify(operationData));
    }
    setTimeout(() => {
        if (getValue("hasSaved")) {
            player.shapes = [];
            player.weapons = [];
            player.modules = [];
            let ShapeData = JSON.parse(getValue("shapes"));
            let WeaponData = JSON.parse(getValue("weapons"));
            let ModuleData = JSON.parse(getValue("modules"));
            for (let i = 0; i < ShapeData.length; i++) {
                let data = ShapeData[i];
                if (data) {
                    try {
                        let sid = shapeSids;
                        let Shape = shapeData.find(e => data.name == e.name);
                        let newShape = new shape(Shape, data.slot);
                        newShape.slot = data.slot;
                        if(data.slot) {
                            slotData[data.slot].unlocked = true;
                            slotData[data.slot].used = true;
                        }
                        newShape.sid = data.sid;
                        if(newShape.sid == undefined || newShape.sid == null) {
                            newShape.sid = sid;
                        }
                        for (let t = 0; t < data.level - 1; t++) {
                            upgradeShape(newShape, true);
                        }
                        player.shapes.push(newShape);
                    }catch(e) {
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
            let slotdata = JSON.parse(getValue("slotData"));
            if(slotdata) {
                slotData = [...slotdata];
            }
            if(getValue("operationData")) {
                operationData = JSON.parse(getValue("operationData"));
                let hasKeys = operationData.data.find(e => e.type == "keys");
                if(!hasKeys) {
                    generateOperation();
                    addOperationXP(10e3);
                }
            }
            let keys = getValue("keys");
            player.keys = parseInt(keys);
            let sliver = getValue("sliver");
            player.sliver = parseInt(sliver);
            let gold = getValue("gold");
            player.gold = parseInt(gold);
            updateMoneyDisplay();
            if(getValue("shapeSids") && getValue("shapeSids") != "NaN") {
                shapeSids = parseInt(getValue("shapeSids"));
            }else {
                saveGameData();
            }
            setTimeout(() => {
                updateSlots();
            }, 100)
        } else {
            updateSlots();
        }
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
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000";
        ctx.globalAlpha = 0.06;
        ctx.beginPath();
        for (var x = -cam.x; x < maxScreen.x; x += maxScreen.y / 18) {
            if (x > 0) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, maxScreen.y);
            }
        }
        for (var y = -cam.y; y < maxScreen.y; y += maxScreen.y / 18) {
            if (x > 0) {
                ctx.moveTo(0, y);
                ctx.lineTo(maxScreen.x, y);
            }
        }
        ctx.stroke();
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
    function renderPlayer() {
        let player = players[0];
        let weaponNames = {};
        ctx.globalAlpha = 1;
        if (player.robotIndex >= 0) {
            let robot = player.robots[player.robotIndex];
            robot.dir = Math.atan2(mouseY - (innerHeight / 2), mouseX - (innerWidth / 2));
            ctx.save();
            ctx.translate(robot.x - offset.x, robot.y - offset.y);
            for(let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                if(!weaponNames[weapon.name]) {
                    weaponNames[weapon.name] = weapon.range;
                }
            }
            let weaponArray = [];
            for (let weaponName in weaponNames) {
                weaponArray.push({ name: weaponName, range: weaponNames[weaponName] });
            }
            weaponArray.sort((a, b) => b.range - a.range);
            for(let i = 0; i < weaponArray.length; i++) {
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
            if (robot.name.includes("Circle")) {
                renderCircle(0, 0, robot.scale, ctx, false, false, Date.now() - robot.damagedTime <= 20 ? "#fff" : robot.color, "#000");
            }
            ctx.restore();
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
        let hardpoints = shape.hardpoints.light + shape.hardpoints.heavy;
        let dir = 0;
        let x = 0;
        let y = 0;
        let scale = 0;
        scale = 15;
        let hScale = scale / 2;
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
            if (weapon.slot == 0) {
                x = shape.x + Math.cos(shape.dir + 1.57) * (shape.scale - 7.5);
                y = shape.y + Math.sin(shape.dir + 1.57) * (shape.scale - 7.5);
            } else if (weapon.slot == 1) {
                x = shape.x + Math.cos(shape.dir + 0.39) * (shape.scale - 7.5);
                y = shape.y + Math.sin(shape.dir + 0.39) * (shape.scale - 7.5);
            } else if (weapon.slot == 2) {
                x = shape.x + Math.cos(shape.dir - 0.39) * (shape.scale - 7.5);
                y = shape.y + Math.sin(shape.dir - 0.39) * (shape.scale - 7.5);
            } else {
                x = shape.x + Math.cos(shape.dir - 1.57) * (shape.scale - 7.5);
                y = shape.y + Math.sin(shape.dir - 1.57) * (shape.scale - 7.5);
            }
        }
        let offsetX = x - offset.x;
        let offsetY = y - offset.y;
        let mosX = (mouseX / window.innerWidth) * maxScreen.x;
        let mosY = (mouseY / window.innerHeight) * maxScreen.y;
        dir = Math.atan2(mosY - offsetY, mosX - offsetX);
        if (weapon.name == "Punisher") {
            projectiles.push({
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
                dir: dir,
                isAlly: isAlly,
                color: "./images/bullet.png"
            });
        } else if (weapon.name == "Landslide" || weapon.name == "Avalanche") {
            projectiles.push({
                x: x,
                y: y,
                oldX: x,
                oldY: y,
                velx: 0,
                vely: 0,
                scale: scale,
                speed: 0.15,
                dmg: weapon.dmg,
                range: weapon.range,
                dir: dir,
                isAlly: isAlly,
                color: "./images/rocket.png",
                aoeRange: weapon.aoeRange
            });
        } else if (weapon.name == "Shocker") {
            projectiles.push({
                x: x,
                y: y,
                oldX: x,
                oldY: y,
                velx: 0,
                vely: 0,
                scale: scale,
                speed: 0.4,
                dmg: weapon.dmg,
                range: weapon.range,
                dir: dir,
                isAlly: isAlly,
                color: "./images/bullet.png"
            });
        } else if (weapon.name == "Destroyer") {
            projectiles.push({
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
                dir: dir + getRandomOffset(5),
                isAlly: isAlly,
                color: "./images/bullet.png"
            });
            projectiles.push({
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
                dir: dir - getRandomOffset(5),
                isAlly: isAlly,
                color: "./images/bullet.png"
            });
        }
    }
    function endGame(Player) {
        enemies = [];
        projectiles = [];
        players = [];
        player.gameMode = -1;
        document.getElementById("lootBoxToggle").style.display = "block";
        document.getElementById("operationToggle").style.display = "block";
        document.getElementById("chooseSlot").style.display = "none";
        document.getElementById("shapesDisplay").style.display = "block";
        document.getElementById("sideDisplay").style.display = "block";
        document.getElementById("shopToggle").style.display = "block";
        document.getElementById("moneyDisplay").style.display = "block";
        document.getElementById("goToBattle").style.display = "block";
        document.getElementById("gameModesDisplay").style.display = "none";
        let adjust = window.innerWidth - 375;
        if (Player.dmg == null) Player.dmg = 0;
        if (Player.kills == null) Player.kills = 0;
        let KEY = 0;
        let SLIVER = 0;
        let GOLD = 0;
        SLIVER += (1e3 * Player.kills);
        SLIVER += (50 * (Math.abs(Player.dmg) / 1000));
        for (let i = 0; i < Player.kills; i++) {
            if (GOLD < 25) {
                GOLD += 0.75;
            } else {
                GOLD += 0.25;
            }
        }
        GOLD = Math.floor(GOLD);
        GOLD += Math.floor(Math.abs(Player.dmg) / 100000);
        for (let i = 0; i < Player.kills; i++) {
            if (KEY >= 50) {
                KEY += 0.075;
            } else if (KEY >= 25) {
                KEY += 0.1;
            } else {
                KEY += 0.25;
            }
        }
        KEY = Math.floor(KEY);
        KEY = Math.min(KEY, 1000);
        let OXP = 0;
        for(let i = 0; i < Player.kills; i++) {
            OXP += 2;
        }
        OXP = Math.floor(OXP);
        updateMoneyDisplay("sliver", SLIVER);
        updateMoneyDisplay("gold", GOLD);
        updateMoneyDisplay("keys", KEY);
        addOperationXP(OXP);
        document.getElementById("sideDisplay").innerHTML = `
        <div style="width: 100%; text-align: center; font-size: 40px;">
        Battle Overview
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
        `;
    }
    var deltaTimer = 0;
    function updatePlayer(delta) {
        let player = players[0];
        if (player.robotIndex >= 0) {
            let robot = player.robots[player.robotIndex];
            document.getElementById("weaponThing").style.display = "block";
            document.getElementById("healthBar").style.display = "block";
            document.getElementById("weaponThing").innerHTML = "";
            document.getElementById("healthBar").innerHTML = `
            <div style="position: absolute; top: 0px; right: 0px; width: ${100 * (robot.grayDamage / robot.maxhealth)}%; height: 100%; background-color: #808080;">
            </div>
            <div style="position: absolute; top: 0px; left: 0px; width: ${100 * (robot.health / robot.maxhealth)}%; height: 100%; background-color: #45ff45;">
            </div>
            <div style="position: absolute; top: 0px; left: 5px; font-size: 30px;">
            ${removeDecimals(robot.health)}
            </div>
            `;
            if (robot.reloadMoveMulti == null) robot.reloadMoveMulti = 1;
            if (keysPressed[87] || keysPressed[65] || keysPressed[83] || keysPressed[68]) {
                let dx = (keysPressed[68]) - (keysPressed[65]);
                let dy = (keysPressed[83]) - (keysPressed[87]);
                let moveDir = Math.atan2(dy, dx);
                let moveSpeed = robot.speed * robot.reloadMoveMulti;
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
            let touchBullets = projectiles.filter(e => !e.isAlly && Math.hypot(e.y - robot.y, e.x - robot.x) <= e.scale + robot.scale);
            for (let t = 0; t < touchBullets.length; t++) {
                changeHealth(robot, -touchBullets[t].dmg, false, touchBullets[t].owner);
                touchBullets[t].dmg = 0;
                touchBullets[t].kill = true;
            }
            for (let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                document.getElementById("weaponThing").innerHTML += `
                <div style="position: relative; width: 200px; height: 75px; margin-top: 20px;">
                <div id="weaponICON${i}" style="position: absolute; z-index: 2; top: 0px; left: 0px; background-color: #404040; border-radius: 100%; width: 75px; height: 75px;">
                </div>
                <div style="position: absolute; top: 23px; left: 60px; background-color: #404040; border-radius: 12px; width: 250px; height: 30px;">
                <div style="width: ${(weapon.ammo / weapon.maxammo) * 100}%; height: 100%; border-radius: 12px; background-color: #fff;">
                </div>
                </div>
                </div>
                `;
            }
            for (let i = 0; i < robot.weapons.length; i++) {
                let weapon = robot.weapons[i];
                let weaponImg = getWeaponIcon(weapon, true);
                weaponImg.style = "width: 100%; height: 100%";
                document.getElementById(`weaponICON${i}`).appendChild(weaponImg);
                if (weapon.continuousReload) {
                    if (weapon.lastFire == null) weapon.lastFire = 0;
                    if (weapon.ammo > 0 && keysPressed[32] && Date.now() - weapon.lastFire >= weapon.fireRate) {
                        weapon.lastFire = Date.now();
                        fireWeapon(weapon, robot, true);
                        weapon.ammo--;
                    }
                    if (weapon.ammo < weapon.maxammo) {
                        if (keysPressed[82]) {
                            robot.reloadMoveMulti = .5;
                        } else {
                            robot.reloadMoveMulti = 1;
                        }
                        if (weapon.lastChange == null) weapon.lastChange = 0;
                        if (Date.now() - weapon.lastChange >= (weapon.reload * robot.reloadMoveMulti)) {
                            weapon.lastChange = Date.now();
                            if(weapon.name == "Avalanche") {
                                weapon.ammo = Math.min(weapon.ammo + 4, weapon.maxammo);
                            }else {
                                weapon.ammo++;
                            }
                        }
                    }
                } else {
                    if (weapon.canFire == null) weapon.canFire = true;
                    if (weapon.canFire) {
                        if (weapon.lastFire == null) weapon.lastFire = 0;
                        robot.reloadMoveMulti = 1;
                        if (keysPressed[32] && Date.now() - weapon.lastFire >= weapon.fireRate) {
                            weapon.lastFire = Date.now();
                            if(weapon.name == "Hawk" || weapon.name == "Eagle") {
                                let nearestEnemies = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                                for(let ttt = 0; ttt < 3; ttt++) {
                                    let enemy = nearestEnemies[ttt];
                                    if(enemy) {
                                        changeHealth(enemy, -weapon.dmg, true);
                                    }
                                }
                                if(nearestEnemies.length) {
                                    weapon.ammo--;
                                }
                            }else {
                                fireWeapon(weapon, robot, true);
                                weapon.ammo--;
                            }
                        }
                        if (weapon.ammo <= 0) {
                            weapon.canFire = false;
                        }
                    } else {
                        if (keysPressed[82]) {
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
            for (let i = 0; i < robot.modules.length; i++) {
                let module = robot.modules[i];
                if(module.selfFixRepair) {
                    if(module.lastRepair == null) module.lastRepair = 1000;
                    module.lastRepair -= delta;
                    if(module.lastRepair <= 0) {
                        module.lastRepair = 1000;
                        changeHealth(robot, module.selfFixRepair, true);
                    }
                }
            }
            if(robot.name != "Purple Circle" && robot.name != "Dark Gray Circle") {
                robot.builtInDefensePoints = 0;
            }
            if (robot.ability) {
                document.getElementById("useAbility").style.display = "block";
                if (keysPressed[69]) {
                    if (robot.abilityLast == null) robot.abilityLast = 0;
                    if (robot.abilityReload == null) robot.abilityReload = 0;
                    if (robot.ability.name == "Self Heal" || robot.ability.name == "Full Action") {
                        if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                            robot.abilityLast = robot.ability.lastingTime;
                        }
                    }else if(robot.ability.name == "Cold Pulse") {
                        if (robot.abilityReload == 0) {
                            bombeffect.push({
                                x: robot.x,
                                y: robot.y,
                                scale: 0,
                                maxScale: 1200,
                                color: "white"
                            });
                            let near = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= 1200 + e.scale);
                            for(let i = 0; i < near.length; i++) {
                                let enemy = near[i];
                                if(enemy) {
                                    if(enemy.effects == null) enemy.effects = [];
                                    changeHealth(enemy, -robot.ability.dmg, true);
                                    enemy.effects.push({
                                        name: "cold pulse",
                                        lastTime: 6e3
                                    });
                                }
                            }
                            if(near.length) {
                                changeHealth(robot, (5000 * near.length), true)
                            }
                            robot.abilityReload = robot.ability.reload;
                        }
                    }
                }
                if (robot.abilityReload == null && robot.abilityLast == null) {
                    document.getElementById("cooldownText").innerHTML = "";
                }
                if (robot.abilityReload == 0 && robot.abilityLast == 0) {
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                    document.getElementById("cooldownText").innerHTML = "";
                } else if (robot.abilityReload > 0) {
                    document.getElementById("useAbility").style.backgroundImage = "";
                } else {
                    document.getElementById("useAbility").style.backgroundImage = `url('${robot.ability.iconSource}')`;
                }
                if (robot.abilityLast && robot.abilityLast > 0) {
                    robot.abilityLast -= delta;
                    document.getElementById("cooldownText").innerHTML = `${(robot.abilityLast / 1000).toFixed(1)}`;
                    document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    if (robot.ability.name == "Self Heal") {//robot.ability.name == "Full Action"
                        deltaTimer -= delta;
                        if (deltaTimer <= 0) {
                            let amount = robot.maxhealth * .025;
                            changeHealth(robot, Math.floor(amount), true);
                            deltaTimer = 5e2;
                        }
                    }else if(robot.ability.name == "Full Action") {
                        robot.builtInDefensePoints = robot.name == "Teal Circle" ? 200 : 60;
                    }
                    if (robot.abilityLast <= 0) {
                        robot.abilityLast = 0;
                        robot.abilityReload = robot.ability.reload;
                    }
                }
                if (robot.abilityReload && robot.abilityReload > 0) {
                    document.getElementById("cooldownText").innerHTML = `${(robot.abilityReload / 1000).toFixed(1)}`;
                    document.getElementById("cooldownText").style.left = `${60 - (document.getElementById("cooldownText").clientWidth / 2)}px`;
                    robot.abilityReload -= delta;
                    if (robot.abilityReload <= 0) {
                        robot.abilityReload = 0;
                    }
                }
            } else {
                document.getElementById("useAbility").style.display = "none";
            }
            if (robot.health > (robot.maxhealth - robot.grayDamage)) {
                robot.health = (robot.maxhealth - robot.grayDamage);
            }
            if (robot.health <= 0) {
                player.robotIndex = -1;
                document.getElementById("useAbility").style.display = "none";
                document.getElementById("weaponThing").style.display = "none";
                document.getElementById("healthBar").style.display = "none";
                let hasRobots = players[0].robots.find(e => e && !e.USED);
                document.getElementById("chooseSlot").style.display = "block";
                if (!hasRobots) {
                    endGame(players[0]);
                }
                updateChooseSlots();
            }
        }
    }
    var lastUpdate = Date.now();
    class enemy {
        constructor(data) {
            this.x = Math.random() * mapInfo.x;
            this.y = Math.random() * mapInfo.y;
            this.velx = 0;
            this.vely = 0;
            this.name = data.name;
            this.dmg = data.dmg.current;
            this.range = data.range;
            this.health = this.maxhealth = data.health.current;
            this.speed = data.speed;
            this.scale = data.scale;
            this.fireRate = data.fireRate;
        }
    }
    function changeHealth(object, amount, isPlayer, doer) {
        if (isPlayer) {
            if (players[0].dmg == null) players[0].dmg = 0;
            if (amount < 0 && object.health + amount <= 0) {
                players[0].dmg += -object.health;
            } else {
                players[0].dmg += amount;
            }
            if (object.health + amount <= 0) {
                if (players[0].kills == null) players[0].kills = 0;
                players[0].kills++;
            }
        }
        let resistance = 0;
        if (object.builtInDefensePoints) {
            resistance += object.builtInDefensePoints;
        }
        let defense = defensePointsToResistance(resistance);
        if(amount < 0) {
            amount *= defense;
        }
        if (object.isMe && amount < 0) {
            object.grayDamage += Math.abs(amount * .4);
        }
        if(amount != 0) {
            if(amount < 0 && object.reflector) {
                changeHealth(doer, (amount * object.reflector), object.isMe);
            }
            if(amount < 0 && object.isFREEZE) {
                amount *= 2;
            }
            if(!isPlayer) {
                addText(object.x, object.y, amount, 1000, "#f00"); 
            }else {
                if(amount > 0) {
                    addText(object.x, object.y, amount, 1000, "#8ecc51");
                }else {
                    addText(object.x, object.y, amount, 1000, "#fff");
                }
            }
            if(amount < 0) object.damagedTime = Date.now();
            object.health += amount;
        }
    }
    function updateEnemies(delta) {
        let playerRobot = players[0].robots[players[0].robotIndex];
        if (playerRobot && (Date.now() - extermination.last >= 75e2 || !enemies.length)) {
            extermination.last = Date.now();
            for (let i = 0; i < extermination.amount; i++) {
                let type = extermination.types[Math.floor(extermination.types.length * Math.random())];
                enemies.push(new enemy(type));
            }
            extermination.amount = Math.min(extermination.amount + .5, 25);
            if (extermination.amount % 5 == 0) {
                for (let i = 0; i < extermination.types.length; i++) {
                    let enemyType = extermination.types[i];
                    if (enemyType.name == "Burner Circle") {
                        enemyType.health.current += 3e3;
                        enemyType.dmg.current += 250;
                    } else if (enemyType.name == "Sniper Circle") {
                        enemyType.health.current += 45e2;
                        enemyType.dmg.current += 175;
                    } else if (enemyType.name == "Smasher Circle") {
                        enemyType.health.current += 1e3;
                        enemyType.dmg.current += 375;
                    }
                }
                if (mapInfo.x <= 8e3 && mapInfo.y <= 8e3 && extermination.amount >= 25) {
                    mapInfo.x += 200;
                    mapInfo.y += 200;
                }
            }
        }
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            if (enemy && playerRobot) {
                if(enemy.effects == null) enemy.effects = [];
                enemy.isFREEZE = false;
                for(let tt = 0; tt < enemy.effects.length; tt++) {
                    let effect = enemy.effects[tt];
                    if(effect) {
                        effect.lastTime -= delta
                        if(effect.name == "cold pulse") {
                            if(effect.dmgOverTime == null) effect.dmgOverTime = 0;
                            enemy.isFREEZE = true;
                            effect.dmgOverTime -= delta;
                            if(effect.dmgOverTime <= 0) {
                                changeHealth(enemy, -50, true);
                                effect.dmgOverTime = 500;
                            }
                        }
                        if(effect.lastTime <= 0) {
                            enemy.effects.splice(tt, 1);
                        }
                    }
                }
                let moveSpeed = enemy.speed * (enemy.isFREEZE ? 0 : 1);
                if(!enemy.isFREEZE) {
                    if (enemy.name == "Burner Circle") {
                        if (Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) >= enemy.range) {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        } else {
                            if (enemy.lastFire == null) enemy.lastFire = 0;
                            if (Date.now() - enemy.lastFire >= enemy.fireRate) {
                                enemy.lastFire = Date.now();
                                changeHealth(playerRobot, -enemy.dmg, false, enemy);
                            }
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
                    } else if(enemy.name == "Smasher Circle") {
                        if(Math.hypot(enemy.y - playerRobot.y, enemy.x - playerRobot.x) <= enemy.scale + playerRobot.scale) {
                            changeHealth(playerRobot, -enemy.dmg, false, enemy);
                            bombeffect.push({
                                x: enemy.x,
                                y: enemy.y,
                                scale: 0,
                                maxScale: enemy.scale * 2
                            });
                            enemy.health = 0;
                        }else {
                            enemy.velx += Math.cos(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                            enemy.vely += Math.sin(Math.atan2(playerRobot.y - enemy.y, playerRobot.x - enemy.x)) * (moveSpeed * delta);
                        }
                    }
                }
                if(enemy.isFREEZE) {
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
                let touchBullets = projectiles.filter(e => e.isAlly && Math.hypot(e.y - enemy.y, e.x - enemy.x) <= e.scale + enemy.scale);
                for (let t = 0; t < touchBullets.length; t++) {
                    changeHealth(enemy, -touchBullets[t].dmg, true);
                    if (touchBullets[t].aoeRange != null) {
                        let Enemies = enemies.filter(e => e != enemy && Math.hypot(e.y - touchBullets[t].y, e.x - touchBullets[t].x) <= touchBullets[t].aoeRange + e.scale);
                        Enemies.forEach(e => {
                            changeHealth(e, -touchBullets[t].dmg, true);
                        });
                        bombeffect.push({
                            x: touchBullets[t].x,
                            y: touchBullets[t].y,
                            scale: 0,
                            maxScale: touchBullets[t].aoeRange
                        })
                    }
                    touchBullets[t].dmg = 0;
                    touchBullets[t].kill = true;
                }
                if (enemy.health <= 0) {
                    enemies.splice(i, 1);
                }
            }
        }
    }
    function updateBullets(delta) {
        for (let i = 0; i < projectiles.length; i++) {
            let bullet = projectiles[i];
            if (bullet) {
                bullet.velx = Math.cos(bullet.dir) * (bullet.speed * delta);
                bullet.vely = Math.sin(bullet.dir) * (bullet.speed * delta);
                bullet.x += (bullet.velx * delta);
                bullet.y += (bullet.vely * delta);
                if (bullet.kill || Math.hypot(bullet.oldY - bullet.y, bullet.oldX - bullet.x) >= bullet.range) {
                    if(bullet.aoeRange && bullet.isAlly && Math.hypot(bullet.oldY - bullet.y, bullet.oldX - bullet.x) >= bullet.range) {
                        let touchedEnemies = enemies.filter(e => Math.hypot(bullet.y - e.y, bullet.x - e.x) <= bullet.aoeRange + e.scale);
                        for (let t = 0; t < touchedEnemies.length; t++) {
                            if(touchedEnemies[i]) {
                                changeHealth(touchedEnemies[i], -bullet.dmg, true);
                            }
                        }
                        bombeffect.push({
                            x: bullet.x,
                            y: bullet.y,
                            scale: 0,
                            maxScale: bullet.aoeRange
                        })
                    }
                    projectiles.splice(i, 1);
                }
            }
        }
    }
    function renderEnemies() {
        ctx.globalAlpha = 1;
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            if (enemy) {
                ctx.save();
                ctx.translate(enemy.x - offset.x, enemy.y - offset.y);
                renderCircle(0, 0, enemy.scale, ctx, false, false, Date.now() - enemy.damagedTime <= 20 ? "#fff" : enemy.name == "Burner Circle" ? "#f00" : enemy.name == "Smasher Circle" ? "#ffff00" : "#808080", enemy.isFREEZE ? "#fff" : "#000");
                if (enemy.name == "Burner Circle") {
                    ctx.globalAlpha = 0.2;
                    renderCircle(0, 0, enemy.range, ctx, true, false, "#f00");
                }
                ctx.restore();
            }
        }
    }
    var bulletImages = {};
    function getBulletImage(obj) {
        let tmp = bulletImages[obj.color];
        if(!tmp) {
            tmp = new Image();
            tmp.src = obj.color;
            tmp.onload = function() {
                tmp.isLoaded = true;
            }
            bulletImages[obj.color] = tmp;
        }
        if(tmp.isLoaded) {
            return tmp;
        }
    }
    function renderBullets() {
        ctx.globalAlpha = 1;
        for (let i = 0; i < projectiles.length; i++) {
            let bullet = projectiles[i];
            if (bullet) {
                ctx.save();
                ctx.translate(bullet.x - offset.x, bullet.y - offset.y);
                let image = getBulletImage(bullet);
                if(image) {
                    ctx.rotate(bullet.dir);
                    ctx.drawImage(image, -20, -20, 40, 40);
                }else {
                    renderCircle(0, 0, bullet.scale, ctx, false, false, "#808080", "#000", 1);
                }
                ctx.restore();
            }
        }
    }
    var bombeffect = [];
    var gameTimePlayed = 0;
    function updateGame() {
        let delta = Date.now() - lastUpdate;
        lastUpdate = Date.now();
        if (player.gameMode >= 0) {
            if (players[0].robotIndex == -1) {
                offset = {
                    x: (mapInfo.x / 2) - maxScreen.x / 2,
                    y: (mapInfo.y / 2) - maxScreen.y / 2
                };
            } else {
                offset = {
                    x: (players[0].robots[players[0].robotIndex].x) - maxScreen.x / 2,
                    y: (players[0].robots[players[0].robotIndex].y) - maxScreen.y / 2
                };
            }
            renderBackground();
            renderBullets();
            renderPlayer();
            renderEnemies();
            ctx.globalAlpha = 1;
            for(let i = 0; i < bombeffect.length; i++) {
                let effect = bombeffect[i];
                if(effect) {
                    effect.scale += (effect.color ? 3.84 : 0.32) * delta;
                    let color = effect.color ? "rgb(255, 255, 255, 0.3)" : "rgb(255, 0, 0, 0.3)";
                    let color2 = effect.color ? "rgb(255, 255, 255, 0.6)" : "rgb(255, 0, 0, 0.6)";
                    ctx.save();
                    ctx.translate(effect.x - offset.x, effect.y - offset.y);
                    renderCircle(0, 0, effect.scale, ctx, false, false, color, color2);
                    ctx.restore();
                    if(effect.scale >= effect.maxScale) {
                        bombeffect.splice(i, 1);
                    }
                }
            }
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            for (let i = 0; i < text.length; i++) {
                let Text = text[i];
                ctx.fillStyle = Text.color;
                ctx.font = "50px Open Sans";
                ctx.fillText(removeDecimals(Text.value), Text.x - offset.x, Text.y - offset.y);
            }
            updatePlayer(delta);
            ctx.globalAlpha = 1;
            if(keysPressed[32] && players.length && players[0] && players[0].robots && players[0].robots.length) {
                let robot = players[0].robots[players[0].robotIndex];
                if(robot) {
                    for(let i = 0; i < robot.weapons.length; i++) {
                        let weapon = robot.weapons[i];
                        if((weapon.name == "Hawk" || weapon.name == "Eagle") && weapon.canFire) {
                            let nearestEnemies = enemies.filter(e => Math.hypot(e.y - robot.y, e.x - robot.x) <= weapon.range).sort((a, b) => Math.hypot(a.y - robot.y, a.x - robot.x) - Math.hypot(b.y - robot.y, b.x - robot.x));
                            ctx.save();
                            ctx.lineWidth = 16;
                            ctx.strokeStyle = "rgb(255, 255, 255)";
                            ctx.beginPath();
                            for(let ttt = 0; ttt < 3; ttt++) {
                                let enemy = nearestEnemies[ttt];
                                let enemy2 = nearestEnemies[ttt-1];
                                if(enemy) {
                                    if(ttt == 0) {
                                        ctx.moveTo(robot.x - offset.x, robot.y - offset.y);
                                        ctx.lineTo(enemy.x - offset.x, enemy.y - offset.y);
                                    }else {
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
            updateBullets(delta);
            for(let i = 0; i < text.length; i++) {
                let Text = text[i];
                if(Text) {
                    Text.life -= delta;
                    Text.x += Math.cos(Text.dir) * 2;
                    Text.y += Math.sin(Text.dir) * 2;
                    if(Text.life <= 0) {
                        text.splice(i, 1);
                    }
                }
            }
            if (player.gameMode == 0) {
                updateEnemies(delta);
            }
            if(players[0] && players[0].robotIndex >= 0) gameTimePlayed += delta;
            if(gameTimePlayed <= 60e3) {
                document.getElementById("timePlayed").innerHTML = `0:${gameTimePlayed <= 10e3 ? "0" : ""}${removeDecimals(gameTimePlayed/1000)}`;
            }else {
                let value = (gameTimePlayed/1000)/60;
                value = value.toString().split(".");
                let minutes = value[0];
                let seconds = parseFloat("0."+value[1]) * 60;
                document.getElementById("timePlayed").innerHTML = `${minutes}:${seconds <= 10 ? "0" : ""}${removeDecimals(seconds)}`;
            }
        } else {
            projectiles = [];
            text = [];
            bombeffect = [];
            document.getElementById("timePlayed").innerHTML = "";
            gameTimePlayed = 0;
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, maxScreen.x, maxScreen.y);
        }
        window.requestAnimationFrame(updateGame);
    }
    window.requestAnimationFrame(updateGame);
}());
# CMPM120 D3 - Physics 
Overview
------------------------------------
Fruit Blast is a physics-based game inspired by Angry Birds. Players launch fruit into a basket utilizing drag and release mechanics. As the levels progress, players need to overcome more challenging obstacles using timing and gravity.

Playable Game Link
------------------------------------
[Fruit Blast](https://luulus.itch.io/fruit-blast)

Gameplay/Experience requirements
------------------------------------
1. The game uses both continuous and discrete inputs from the player

   Players provide continuous input through the game's drag mechanic. The drag mechanic requires players to hold and drag the fruit, which updates the fruit's and aim arrows' position in real time to track the pointer's X/Y position. Players provide discrete input through pointer-down events that are in the start game, continue, next level, replay, and restart game buttons. When clicked, the buttons react to the player's discrete input and transition to the next scene.
   
3. The player’s goal can only be achieved indirectly (by allowing the physics engine to move key objects into position/contact)

   In Levels 1, 2, and 3 of Fruit Blast, the player can only get the fruit into the basket if they drag and aim the fruit in a permitted area. Once released, the physics engine changes the fruit's position and how it interacts with other objects. Gravity affects the fruit's flight path, while bounce and drag determine how far and in which direction it travels if the fruit collides with other objects. In Level 2 and 3, a second platform is added, which provides a bounce for the fruit when they collide. Besides the initial velocity, the physics engine determines whether the fruit will reach the basket or not.
   
4. 3+ physics-based gameplay scenes

   Each gameplay scene uses arcade physics with gravity, colliders, and overlap detection.

   Level 1: Has one fruit and only requires a simple arc shot.

   Level 2: Has two fruits and requires using a second platform to bounce off of to reach an elevated basket.

   Level 3: Has three fruits and requires using a second platform to bounce off of to reach the basket on a moving platform.

5. Other scenes are used to separate and contextualize the gameplay scenes

   The Intro scene provides the name title before starting the game. The Instructions scene explains the controls and intended gameplay of Fruit Blast. LevelSummary scenes show the shots, accuracy, and time after each level. The Restart scene appears when players run out of attempts. This allows them to retry the level they just failed. The Outro scene completes the experience after three levels and allows the players to restart the game.

Credits
-----------------------------------
- All visual assets created by Alicia Zhang using Procreate
- Sound effect: [Soft Pop SFX by OxidVideos](https://pixabay.com/sound-effects/film-special-effects-soft-pop-sfx-433612/)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 3 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 3 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 f 2 2 2 2 2 2 e 
c e e 2 2 2 3 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 f 2 2 2 2 2 2 e 
c e e 2 2 2 3 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 f 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, mySprite, 0, 100)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let projectile2: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 7 . . . . . . . b 5 b . . . 
. . . . 7 . . 7 . b 5 b . . . . 
7 7 . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 7 5 5 5 b . . 
. . b 5 5 b 5 7 7 7 5 7 7 f . . 
. . b d 5 5 b 7 7 7 5 7 7 c . . 
b b d b 5 5 5 d f b 4 4 4 4 4 b 
b d d c d 5 5 b 5 4 4 4 4 4 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.BounceOnWall, false)
controller.moveSprite(mySprite)
class Stuff {
}
game.onUpdateInterval(500, function () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 . . . . . . . . . . 
. . . 8 8 . . . . . . . . . . . 
. . 8 . 7 7 7 . 7 7 . . . . . . 
. 8 7 7 . . 7 7 7 7 . . . . . . 
. 7 7 7 7 7 . . . 7 7 . 7 7 . 7 
. . . . 8 8 . . . . 7 7 7 7 7 . 
. . . . . 8 . . . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
    projectile2.y = randint(0, 120)
    console.log(`y: ${projectile2.y}`)
})

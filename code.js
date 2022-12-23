var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrun = createSprite(10, 390, 30, 30);
var lazer1 = createSprite(60, 260, 200, 5);
var lazer2 = createSprite(350, 112, 200, 5)
var diamond = createSprite(380,18,30,30)
// 
// 
lazer1.shapeColor = "red";
lazer2.shapeColor = "red";
diamond.shapeColor = "blue"
// 
function draw() {
  drawSprites();
}
function Laser() {
  if (keyDown("space")) {
  lazer1.velocityX = -4;
  }
  if (keyDown("space")) {
  lazer2.velocityX = 4;
  }
}
function Move() {
  if (keyDown("up")) {
    ladrun.y = ladrun.Y + 3;
  }
  if (keyDown("down")) {
    ladrun.y = ladrun.Y - 3;
  }
  if (keyDown("left")) {
    ladrun.x = ladrun.x + 3;
  }
  if (keyDown("RIGHT")) {
    ladrun.x = ladrun.x - 4;
  }
}
function Colition () {
  if (ladrun.isTouching(diamond)) {
    textSize(30);
    text("YOU WIN", 200, 200);
  }
  if (ladrun.isTouching(lazer1) || ladrun.isTouching(lazer2)) {
    ladrun.x = 10;
    ladrun.y = 390;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

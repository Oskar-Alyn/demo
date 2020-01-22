import * as graphics from './shipGraphics.js';
import * as projectiles from './projectiles.js';
import { Projectile } from '../classes/Projectile.js';
import { rotateCoord } from '../mathExtention.js';

function spawnProjectile(aTemplate, aShip) {
  let returnObject = new Projectile(aTemplate);

  returnObject.color = aShip.color;
  returnObject.x = aShip.x;
  returnObject.y = aShip.y;
  returnObject.r = aShip.r;
  returnObject.Vx = aShip.Vx;
  returnObject.Vy = aShip.Vy;

  return returnObject;
}

export const FIGHTER_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 5;

    // spawn a laser
    let laser = spawnProjectile(projectiles.BASIC_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 0.8;
      laser.y += Math.sin(laser.r) * 0.8;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 0.8;
      laser.y -= Math.sin(laser.r) * 0.8;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.012)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const FIGHTER_2_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 4;

    // spawn a laser
    let laser1 = spawnProjectile(projectiles.BASIC_LASER, aShip);
    let laser2 = spawnProjectile(projectiles.BASIC_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser1.x += Math.cos(laser1.r) * 1.2;
      laser1.y += Math.sin(laser1.r) * 1.2;
      laser2.x -= Math.cos(laser2.r) * 1.2;
      laser2.y -= Math.sin(laser2.r) * 1.2;
    } else {
      aShip.weaponState = 0;
      laser1.x += Math.cos(laser1.r) * 3;
      laser1.y += Math.sin(laser1.r) * 3;
      laser2.x -= Math.cos(laser2.r) * 3;
      laser2.y -= Math.sin(laser2.r) * 3;

    }

    game.gameLoop.registerObject(laser1);
    game.gameLoop.registerObject(laser2);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.015)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const SKIRMISHER_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 5;

    // spawn a laser
    let laser = spawnProjectile(projectiles.SKIRMISHER_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 1.5;
      laser.y += Math.sin(laser.r) * 1.5;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 1.5;
      laser.y -= Math.sin(laser.r) * 1.5;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.02)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const HEAVY_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 30;

    // spawn a laser
    let laser = spawnProjectile(projectiles.HEAVY_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 0;
      laser.y += Math.sin(laser.r) * 0;
    } else {
      aShip.weaponState = 0;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.3)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const FIRE_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 4;

    // spawn a laser
    let laser = spawnProjectile(projectiles.FIRE_BLAST, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 0.6;
      laser.y += Math.sin(laser.r) * 0.6;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 0.6;
      laser.y -= Math.sin(laser.r) * 0.6;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.01)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const ACID_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 3;

    // spawn a laser
    let laser1 = spawnProjectile(projectiles.ACID_BLAST, aShip);
    let laser2 = spawnProjectile(projectiles.ACID_BLAST, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser1.x += Math.cos(laser1.r) * 1.2;
      laser1.y += Math.sin(laser1.r) * 1.2;
      laser2.x -= Math.cos(laser2.r) * 1.2;
      laser2.y -= Math.sin(laser2.r) * 1.2;
    } else {
      aShip.weaponState = 0;
      laser1.x += Math.cos(laser1.r) * 3;
      laser1.y += Math.sin(laser1.r) * 3;
      laser2.x -= Math.cos(laser2.r) * 3;
      laser2.y -= Math.sin(laser2.r) * 3;

    }

    game.gameLoop.registerObject(laser1);
    game.gameLoop.registerObject(laser2);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.015)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const LIGHTNING_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 5;

    // spawn a laser
    let laser = spawnProjectile(projectiles.LIGHTNING_BLAST, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 0;
      laser.y += Math.sin(laser.r) * 0;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 0;
      laser.y -= Math.sin(laser.r) * 0;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.01)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const TALON_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 10;

    // spawn a laser
    let laser = spawnProjectile(projectiles.TALON_BLAST, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 1.8;
      laser.y += Math.sin(laser.r) * 1.8;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 1.8;
      laser.y -= Math.sin(laser.r) * 1.8;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.01)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

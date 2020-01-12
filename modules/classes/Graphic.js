import {
  rotateCoord,
  pythagorean,
  angleTo,
} from '../mathExtention.js';

export class Graphic {
  constructor(parts, lineWidth) {
    this.parts = parts;
    this.lineWidth = lineWidth;

    this.maxPoint = this.findMaxPoint();
  }

  // finds the highest number in the graphic
  findMaxPoint () {
    let returnNumber = 0;
    for (let i = 0; i < this.parts.length; i++) {
      for (let ii = 0; ii < this.parts[i].length; ii++) {
        let coordinate = this.parts[i][ii];
        if (coordinate[0] > returnNumber) { returnNumber = coordinate[0]; }
        if (coordinate[1] > returnNumber) { returnNumber = coordinate[1]; }
      }
    }

    return returnNumber;
  }

  // scales graphic to scale number
  scaleGraphic(graphicToScale, scaler) {
    let returnGraphic = [];
    for (let i = 0; i < this.parts.length; i++) {
      returnGraphic[i] = [];
      for (let ii = 0; ii < this.parts[i].length; ii++) {
        let coordinate = this.parts[i][ii];
        returnGraphic[i][ii] = [coordinate[0] * scaler, coordinate[1] * scaler, coordinate[2] * scaler];
      }
    }

    return returnGraphic
  }

  // draws the graphic to the canvas
  draw(aGameObject, display) {
    let context = display.context;

    // setup adjusted variables for relative camera
    let scaledGraphic = this.scaleGraphic(this.parts, (aGameObject.scale * display.worldScale));
    let adjustedPosition = rotateCoord([aGameObject.x - display.cameraX, aGameObject.y - display.cameraY], -1 * display.cameraR);
    let adjustedX = adjustedPosition[0] * display.worldScale;
    let adjustedY = adjustedPosition[1] * display.worldScale;
    let adjustedR = aGameObject.r - display.cameraR;

    // showing shields
    context.globalAlpha = (typeof aGameObject.shield !== 'undefined' ? aGameObject.shield / aGameObject.shieldMax : 1);

    // draw the graphic
    for (let i = 0; i < scaledGraphic.length; i++) {
      let currentPart = scaledGraphic[i];
      let currentCoordinate = rotateCoord(currentPart[0], adjustedR);

      context.strokeStyle = aGameObject.color;
      context.lineWidth = this.lineWidth;
      context.beginPath();

      // actual drawing
      for (let ii = 0; ii < currentPart.length; ii++) {
        currentCoordinate = rotateCoord(currentPart[ii], adjustedR);
        let xCoord = adjustedX + currentCoordinate[0];
        xCoord += display.x0;
        let yCoord = display.yFactor * (adjustedY + currentCoordinate[1]);
        yCoord -= (currentCoordinate[2] * display.zFactor);
        yCoord += display.y0;

        if (ii == 0) {
          context.moveTo(xCoord, yCoord);
        } else {
          context.lineTo(xCoord, yCoord);
        }
      }
      context.stroke();

    }

    // draw text
    if (display.debugMode) {
      context.fillStyle = aGameObject.color;
      context.font = "30px Arial";
      if ( typeof aGameObject.text !== 'undefined' ) {
        context.fillText(
          aGameObject.text,
          display.x0 + adjustedX - 8,
          20 + (this.maxPoint * aGameObject.scale * display.worldScale) + display.y0 + (display.yFactor * adjustedY));
      }
    }
  }
}

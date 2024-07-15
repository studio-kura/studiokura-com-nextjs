import { useMounted } from '@/hooks/useMounted';
import dynamic from 'next/dynamic';
import p5Types from 'p5';

const importFunction = () => import('react-p5').then((mod) => mod.default);
let Sketch: any = null;
if (typeof window !== 'undefined') {
  Sketch = dynamic(importFunction, { ssr: false });
}

let r: number;
let a = 50;
let c: p5Types.Color[] = [];
let b = 25;
let d = 25;
let sketchHeight: number;

const setup = (p5: p5Types, canvasParentRef: Element) => {
  const canvasSize = getCanvasSize(canvasParentRef);
  p5.createCanvas(canvasSize.w, canvasSize.h).parent(canvasParentRef);
  sketchHeight = canvasSize.h;
  p5.strokeWeight(5);
  p5.stroke(0, 100);
  r = p5.random(1, 200);
};

const draw = (p5: p5Types) => {
  p5.background(255);
  p5.randomSeed(r);
  for (let i = 0; i < 22; i++) {
    for (let j = 0; j < 22; j++) {
      var shiftX = p5.random(-p5.mouseX, p5.mouseX) / 10;
      var shiftY = p5.random(-p5.mouseX, p5.mouseX) / 10;

      p5.ellipse(
        (i * 20 * p5.windowWidth) / 400 + shiftX,
        (j * 20 * sketchHeight) / 400 + shiftY,
        p5.mouseY / 15,
        p5.mouseY / 15
      );

      c[i * j] = p5.color(p5.random(255), p5.random(255), p5.random(255), a);
      p5.stroke(c[i * j]);
      p5.ellipse(
        -20 + (20 * i * p5.windowWidth) / 400 + shiftX,
        -20 + (20 * j * sketchHeight) / 400 + shiftY,
        b,
        d
      );
    }
  }
};

const keyPressed = function (p5: p5Types) {
  if (p5.key == '1') {
    p5.strokeWeight(1);
  }
  if (p5.key == '2') {
    p5.strokeWeight(2);
  }
  if (p5.key == '3') {
    p5.strokeWeight(10);
  }
  if (p5.key == '4') {
    p5.strokeWeight(20);
  }
  if (p5.key == '5') {
    p5.strokeWeight(30);
  }

  if (p5.key == '6') {
    a = 100;
  }

  if (p5.key == '7') {
    a = 150;
  }
  if (p5.key == '8') {
    b = 50;
  }
  if (p5.key == '9') {
    d = 50;
  }
  if (p5.key == '0') {
    b = 25;
    d = 25;
  }
};

const getCanvasSize = (canvasParentRef: Element) => {
  if (!window || !canvasParentRef) {
    return { w: 100, h: 100 };
  }
  let parentStyle: CSSStyleDeclaration | null = null;
  if (canvasParentRef.parentElement) {
    parentStyle = getComputedStyle(canvasParentRef.parentElement);
  } else {
    console.log('canvasParentRef', canvasParentRef);
    try {
      parentStyle = getComputedStyle(canvasParentRef);
    } catch (e) {
      console.log('MAL', e);
    }
  }
  const canvasWidth = parseInt(parentStyle?.width ?? '100px');
  const canvasHeight = parseInt(parentStyle?.height ?? '100px');
  return { w: canvasWidth, h: canvasHeight };
};

export function HeaderSketch() {
  const isMounted = useMounted();
  return (
    <>
      {isMounted && (
        <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />
      )}
    </>
  );
}

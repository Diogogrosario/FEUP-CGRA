/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.diamond = new MyDiamond(this.scene);
		this.parallelogram = new MyParallelogram(this.scene);
		this.triangle = new MyTriangle(this.scene);
	}
	display() {
            this.scene.pushMatrix(); //Roxo
            this.scene.translate(1.3,2.7,0);
            this.scene.scale(0.8,0.8,1);
            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); // Vermelho
            this.scene.translate(1.49,-0.5,0);
            this.scene.rotate(-45*Math.PI/180,0,0,1);
            this.scene.scale(0.7,0.7,1);
            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Azul
            this.scene.translate(-1.5,-1.5,0);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.scale(1.5,1.5,0);
            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Rosa
            this.scene.translate(0,-1.5,0);
            this.scene.rotate(45*Math.PI/180,0,0,1);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.scale(1.05,1.05,1);
            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Laranja
            this.scene.translate(-1.8,0,0);
            this.scene.rotate(45*Math.PI/180,0,0,1);
            this.scene.scale(1.3,1.3,1);
            this.triangle.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix();
            var m = [1,0,0,0,
                     0,1,0,0,
                     0,0,1,0,
                     0.5,0.5,0,1];
            this.scene.multMatrix(m);
            this.diamond.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-0.5,0.5,0);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.scale(1,-1,1);
            this.parallelogram.display();
            this.scene.popMatrix();
        }
	}

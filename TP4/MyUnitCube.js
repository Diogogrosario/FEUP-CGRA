/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene,) {
		super(scene);
		
		this.initBuffers();
	}

	initBuffers() {

		this.quad = new MyQuad(this.scene);

		this.sideFace = new CGFappearance(this.scene);
        this.sideFace.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideFace.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideFace.setShininess(10.0);
        this.sideFace.loadTexture('images/mineSide.png');

        this.bottomFace = new CGFappearance(this.scene);
        this.bottomFace.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomFace.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomFace.setShininess(10.0);
        this.bottomFace.loadTexture('images/mineBottom.png');

        this.topFace = new CGFappearance(this.scene);
        this.topFace.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topFace.setSpecular(0.1, 0.1, 0.1, 1);
        this.topFace.setShininess(10.0);
        this.topFace.loadTexture('images/mineTop.png');
		

	}

	enableNormalViz(){
		this.quad.enableNormalViz();
	}

	disableNormalViz(){
		this.quad.disableNormalViz();

	}

	display(){
       
       this.sideFace.apply();
       this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        //LATERAIS
		this.quad.display();

		this.scene.pushMatrix();
		this.scene.translate(0.5,0,-0.5);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.5,0,-0.5);
		this.scene.rotate(3*Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,-1);
		this.scene.rotate(-Math.PI,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		this.bottomFace.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix(); //BAIXO
        this.scene.translate(0,-0.5,-0.5);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.quad.display();
		this.scene.popMatrix();

		this.topFace.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix(); //CIMA
		this.scene.translate(0,0.5,-0.5);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.quad.display();
		this.scene.popMatrix();

	}


	 updateBuffers(complexity){
		this.initBuffers();
        this.initNormalVizBuffers();
    }
}


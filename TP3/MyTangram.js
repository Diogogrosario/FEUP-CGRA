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

	enableNormalViz(){
		this.triangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
		this.diamond.enableNormalViz();
	}

	disableNormalViz(){
		this.triangle.disableNormalViz();
		this.parallelogram.disableNormalViz();
		this.diamond.disableNormalViz();

	}
	display() {
            this.scene.pushMatrix(); //Roxo
            this.scene.translate(1.3,2.7,0);
            this.scene.scale(0.8,0.8,1);

            this.triangle_color = new CGFappearance(this.scene);
            this.triangle_color.setAmbient(0.6,0.2,0.6,1.0);
            this.triangle_color.setDiffuse(0.6,0.2,0.6,1.0);
            this.triangle_color.setSpecular(0.6,0.2,0.6,1.0);
            this.triangle_color.setShininess(10.0);
            this.triangle_color.apply();

            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); // Vermelho
            this.scene.translate(1.49,-0.5,0);
            this.scene.rotate(-45*Math.PI/180,0,0,1);
            this.scene.scale(0.7,0.7,1);

            this.triangle_color = new CGFappearance(this.scene);
            this.triangle_color.setAmbient(1,0,0,1.0);
            this.triangle_color.setDiffuse(1,0,0,1.0);
            this.triangle_color.setSpecular(1,0,0,1.0);
            this.triangle_color.setShininess(10.0);
            this.triangle_color.apply();

            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Azul
            this.scene.translate(-1.5,-1.5,0);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.scale(1.5,1.5,0);

            this.triangle_color = new CGFappearance(this.scene);
            this.triangle_color.setAmbient(0,0,1,1.0);
            this.triangle_color.setDiffuse(0,0,1,1.0);
            this.triangle_color.setSpecular(0,0,1,1.0);
            this.triangle_color.setShininess(10.0);
            this.triangle_color.apply();

            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Rosa
            this.scene.translate(0,-1.5,0);
            this.scene.rotate(45*Math.PI/180,0,0,1);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.scale(1.05,1.05,1);

            this.triangle_color = new CGFappearance(this.scene);
            this.triangle_color.setAmbient(1,0.79,0.85,1.0);
            this.triangle_color.setDiffuse(1,0.79,0.85,1.0);
            this.triangle_color.setSpecular(1,0.79,0.85,1.0);
            this.triangle_color.setShininess(10.0);
            this.triangle_color.apply();

            this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Laranja
            this.scene.translate(-1.8,0,0);
            this.scene.rotate(45*Math.PI/180,0,0,1);
            this.scene.scale(1.3,1.3,1);
            
            this.triangle_color = new CGFappearance(this.scene);
            this.triangle_color.setAmbient(1,0.6,0,1.0);
            this.triangle_color.setDiffuse(1,0.6,0,1.0);
            this.triangle_color.setSpecular(1,0.6,0,1.0);
            this.triangle_color.setShininess(10.0);
            this.triangle_color.apply();
           

            this.triangle.display();
            this.scene.popMatrix();
            
            this.scene.pushMatrix(); // CUSTOM
            var m = [1,0,0,0,
                     0,1,0,0,
                     0,0,1,0,
                     0.5,0.5,0,1];
            this.scene.multMatrix(m);

            this.scene.customMaterial.apply();
            
            this.diamond.display();
            this.scene.popMatrix();

            this.scene.pushMatrix(); //Amarelo
            this.scene.translate(-0.5,0.5,0);
            this.scene.rotate(Math.PI/2,0,0,1);
            this.scene.scale(1,-1,1);

             this.triangle_color = new CGFappearance(this.scene);
            this.triangle_color.setAmbient(1,1,0,1.0);
            this.triangle_color.setDiffuse(1,1,0,1.0);
            this.triangle_color.setSpecular(1,1,0,1.0);
            this.triangle_color.setShininess(10.0);
            this.triangle_color.apply();
            
            this.parallelogram.display();
            this.scene.popMatrix();
        }

    updateBuffers(complexity){
		this.initBuffers();
        this.initNormalVizBuffers();
    }

}

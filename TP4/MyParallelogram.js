/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		
		this.normals = [];
		this.vertices = [
			 0, 0, 0,	//0
			 2, 0, 0,	//1
			 3, 1, 0,	//2
			 1, 1, 0,	//3

			 0, 0, 0,	//0
			 2, 0, 0,	//1
			 3, 1, 0,	//2
			 1, 1, 0,	//3
		
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 3,
			0, 2, 1,
			0, 3, 2,
		];
		
		
        for(var i=0;i<4;i++) // n vertices
        {
            this.normals.push(0,0,1);
            
        }
        for(var i=0;i<4;i++) // n vertices
        {
            this.normals.push(0,0,-1);
            
        }

        this.texCoords = [
			0.25,0.75,
			0.75,0.75,
			1,1,
			0.5,1

        ]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	updateBuffers(complexity){};
}


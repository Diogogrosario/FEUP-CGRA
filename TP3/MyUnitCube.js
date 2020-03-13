/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene,nVertices) {
		super(scene);
		this.nVertices = nVertices;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
		    -0.5 , -0.5 ,-0.5, //Canto 1 baixo //0
		    0.5  , -0.5 ,-0.5, //Canto 2 baixo //1
		    0.5  , 0.5  ,-0.5, //Canto 3 baixo //2
		    -0.5 , 0.5  ,-0.5, //Canto 4 baixo //3
		    -0.5 , -0.5 , 0.5, //Canto 1 cima //4
		    0.5  , -0.5 , 0.5, //Canto 2 cima //5
		    0.5  , 0.5  , 0.5, //Canto 3 cima //6
		    -0.5 , 0.5  , 0.5, //Canto 4 cima //7

		    -0.5 , -0.5 ,-0.5, //Canto 1 baixo //0
		    0.5  , -0.5 ,-0.5, //Canto 2 baixo //1
		    0.5  , 0.5  ,-0.5, //Canto 3 baixo //2
		    -0.5 , 0.5  ,-0.5, //Canto 4 baixo //3
		    -0.5 , -0.5 , 0.5, //Canto 1 cima //4
		    0.5  , -0.5 , 0.5, //Canto 2 cima //5
		    0.5  , 0.5  , 0.5, //Canto 3 cima //6
		    -0.5 , 0.5  , 0.5, //Canto 4 cima //7

		    -0.5 , -0.5 ,-0.5, //Canto 1 baixo //0
		    0.5  , -0.5 ,-0.5, //Canto 2 baixo //1
		    0.5  , 0.5  ,-0.5, //Canto 3 baixo //2
		    -0.5 , 0.5  ,-0.5, //Canto 4 baixo //3
		    -0.5 , -0.5 , 0.5, //Canto 1 cima //4
		    0.5  , -0.5 , 0.5, //Canto 2 cima //5
		    0.5  , 0.5  , 0.5, //Canto 3 cima //6
		    -0.5 , 0.5  , 0.5 //Canto 4 cima //7
		
		];
           
        this.normals = [];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //Face Baixo
			0, 2, 3,

			2, 1, 0, //Face Baixo reversível
			3, 2, 0,

			4, 5, 6, //Face Cima
			4, 6, 7,

			6, 5, 4, //Face Cima reversível
			7, 6, 4,

			0, 1, 5, //Face lateral 1
			0, 5, 4,

			5, 1, 0, //Face lateral 1 reversível
			4, 5, 0,

			1, 2, 6, //Face lateral 2
			1, 6, 5,

			6, 2, 1, //Face lateral 2 reversível
			6, 6, 1, 

			2, 3, 7, //Face lateral 3
			2, 7, 6,

			7, 3, 2, //Face lateral 3 reversível
			6, 7, 2,

			3, 0, 4, //Face lateral 4
			3, 4, 7,

			4, 0, 3, //Face lateral 4 reversível
			7, 4, 3


		];
        

        for(var i=0;i<8;i++) // n vertices
        {
            if(this.vertices[i*3]<0)
                this.normals.push(-1,0,0);
            else
                this.normals.push(1,0,0);
        }
        for(var i=0;i<8;i++) // n vertices
        {
            if(this.vertices[i*3+1]<0)
                this.normals.push(0,-1,0);
            else
                this.normals.push(0,1,0);
        }
        for(var i=0;i<8;i++) // n vertices
        {
            if(this.vertices[i*3+2]<0)
                this.normals.push(0,0,-1);
            else
                this.normals.push(0,0,1);
        }

         

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

		
	}
	updateBuffers(complexity){
		this.initBuffers();
        this.initNormalVizBuffers();
    }
}


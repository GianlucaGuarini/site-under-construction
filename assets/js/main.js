var Sketch = {
  rezizeTimer:null,
  init: function() {
    var me = this;
    this.canvas = document.getElementById('c');
    this.setViewport();
    window.onresize = function() {
      clearTimeout(me.rezizeTimer);
      me.rezizeTimer = setTimeout(function(){
        me.setViewport.call(me);
        me.createVertices.call(me);
        me.render.call(me);
      },200);

    };
    this.createVertices();
    this.render();
  },
  createVertices: function() {
    var i, x, y,
      gradient;
    this.vertices = new Array(~~(window.innerHeight/ window.innerWidth * 64));
    for (i = this.vertices.length; i--;) {
      do {
        x = Math.random() - 0.5;
        y = Math.random() - 0.5;
        gradient = {
          color: Math.random() - 0.5 > 0 ?
            'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
        };
      } while (x * x + y * y > 0.25);

      x = (x * 2.96875 + 0.5) * this.canvas.width;
      y = (y * 2.96875 + 0.5) * this.canvas.height;

      this.vertices[i] = [x, y, gradient];
    }
  },
  render: function() {
    var ctx = this.canvas.getContext('2d');

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    var triangles = Delaunay.triangulate(this.vertices);

    for (i = triangles.length; i;) {
      ctx.beginPath();
      var x1 = this.vertices[triangles[--i]][0],
        y1 = this.vertices[triangles[i]][1],
        x2 = this.vertices[triangles[--i]][0],
        y2 = this.vertices[triangles[i]][1],
        x3 = this.vertices[triangles[--i]][0],
        y3 = this.vertices[triangles[i]][1];

      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);

      var grd = ctx.createLinearGradient(x1, y1, x2, y3);
            // light blue
            grd.addColorStop(0, this.vertices[triangles[i]][2].color);
            // dark blue
            grd.addColorStop(1, 'transparent');
      ctx.closePath();
      ctx.fillStyle = grd;
      ctx.fill();
      //ctx.stroke();
    }

  },
  setViewport: function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
};

Sketch.init();
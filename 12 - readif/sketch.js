let app = {
    DA: 1,
    DB: 0.2,
    f: .055,
    k: .058,
    size: 50,
    mult: 10,
    a : [],
    b : [],
    c : [],
  }
  
  function setup() {
    createCanvas(app.size * app.mult, app.size * app.mult);
    noStroke();

    for (let x = 0; x < app.size; x++) {
        app.a[x] = [];
        app.b[x] = [];
        
        for (let y = 0; y < app.size; y++) {
            app.a[x].push(1);
            app.b[x].push(min(x / 100, 1.0));
            app.b[x].push(random(1));
        }
    }
  }
  
  function laplacian(tab, x, y) {
    let c = 0;  

    if (x === 0 || x === app.size - 1) {
        return 0;
    }
    if (y === 0 || y === app.size - 1) {
        return 0;
    }

    c = tab[x-1][y-1] * 0.05;
    c += tab[x-1][y] * 0.2;
    c += tab[x-1][y+1] * 0.05;
    c += tab[x][y-1] * 0.2;
    c += tab[x][y] * -1;
    c += tab[x][y+1] * 0.2;
    c += tab[x+1][y-1] * 0.05;
    c += tab[x+1][y] * 0.2;
    c += tab[x+1][y+1] * 0.05;

    return c;
  }

  function draw() {
    background(220);

    let ap = [];
    let bp = [];

    for (let x = 0; x < app.size; x++) {
        ap[x] = [];
        bp[x] = [];

        for (let y = 0; y < app.size; y++) {

            let lpA = laplacian(app.a, x, y);
            let lpB = laplacian(app.b, x, y);

            let aV = app.a[x][y];
            let bV = app.b[x][y];
            
            let valueA = aV + (app.DA * lpA - aV*aV*aV + app.f * (1 - aV));
            let valueB = bV + (app.DB * lpB + aV*bV*bV - (app.k + app.f) * bV);

            ap[x].push(valueA);
            bp[x].push(valueB);

            fill(app.b[x][y] * 255);
            rect(x*app.mult, y*app.mult, app.mult,app.mult);
        }
    }

    app.a = ap;
    app.b = bp;
  }
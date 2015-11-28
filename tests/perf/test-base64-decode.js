if (typeof print !== 'function') { print = console.log; }

function test() {
    var tmp1 = [];
    var tmp2 = [];
    var i, n, buf;

    print('build');
    buf = Duktape.Buffer(1024);
    for (i = 0; i < 1024; i++) {
        buf[i] = Math.random() * 256;
    }
    tmp1 = String(buf);
    for (i = 0; i < 1024; i++) {
        tmp2.push(tmp1);
    }
    tmp2 = tmp2.join('');
    tmp2 = Duktape.enc('base64', tmp2);

    print(tmp2.length);
    print('run');
    for (i = 0; i < 1000; i++) {
        Duktape.dec('base64', tmp2);
    }
}

try {
    test();
} catch (e) {
    print(e.stack || e);
    throw e;
}
